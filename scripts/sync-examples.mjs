import { execFileSync } from 'node:child_process';
import { createHash } from 'node:crypto';
import { existsSync, mkdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { basename, dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const productRoot = resolve(
	process.env.PATCHLAB_SOURCE ?? join(root, '..', 'ModularFx', 'PatchLab'),
);
const registry = JSON.parse(readFileSync(join(root, 'src', 'data', 'registry.json'), 'utf8'));
const byType = new Map(registry.blocks.map((block) => [block.type, block]));
const examples = [
	['Shimmer Reverb.plpatch', 'shimmer-reverb.plpatch'],
	['Supersaw Pad.plpatch', 'supersaw-pad.plpatch'],
	['Vocal Chain.plpatch', 'vocal-chain.plpatch'],
	['Lofi Hip-Hop.plpatch', 'lofi-hip-hop.plpatch'],
	['Parallel Compressor.plpatch', 'parallel-compressor.plpatch'],
	['Space Echo.plpatch', 'space-echo.plpatch'],
	['Mid-Side Master.plpatch', 'mid-side-master.plpatch'],
	['Spectral Freeze.plpatch', 'spectral-freeze.plpatch'],
];
const git = (...args) => execFileSync('git', ['-C', productRoot, ...args], { encoding: 'utf8' }).trim();
const before = git('rev-parse', 'HEAD');
const output = join(root, 'public', 'examples');
rmSync(output, { recursive: true, force: true });
mkdirSync(output, { recursive: true });

const files = [];
for (const [sourceName, publicName] of examples) {
	const source = join(productRoot, 'factory', sourceName);
	if (!existsSync(source)) throw new Error(`Missing factory example: ${source}`);
	const raw = readFileSync(source, 'utf8');
	const patch = JSON.parse(raw);
	if (!Number.isInteger(patch.version) || !Array.isArray(patch.nodes) || !Array.isArray(patch.connections)) {
		throw new Error(`${sourceName}: expected version, nodes, and connections`);
	}
	const ids = new Set();
	for (const node of patch.nodes) {
		if (typeof node.id !== 'string' || ids.has(node.id)) throw new Error(`${sourceName}: invalid or duplicate node id`);
		ids.add(node.id);
		if (['in', 'out', 'midi'].includes(node.id)) continue;
		const registered = byType.get(node.type);
		if (!registered) throw new Error(`${sourceName}: unknown registry type ${node.type}`);
	}
	for (const connection of patch.connections) {
		if (!ids.has(connection.s) || !ids.has(connection.d)) {
			throw new Error(`${sourceName}: connection references a missing node`);
		}
		if (![connection.sc, connection.dc].every(Number.isInteger)) {
			throw new Error(`${sourceName}: connection channels must be integers`);
		}
	}
	const normalized = `${JSON.stringify(patch, null, 2)}\n`;
	writeFileSync(join(output, publicName), normalized);
	files.push({
		name: basename(sourceName, '.plpatch'),
		file: publicName,
		nodes: patch.nodes.length,
		connections: patch.connections.length,
		sha256: createHash('sha256').update(normalized).digest('hex'),
	});
}

const after = git('rev-parse', 'HEAD');
if (after !== before) {
	rmSync(output, { recursive: true, force: true });
	throw new Error(`Product revision changed during example sync (${before} -> ${after}); retry on a stable revision.`);
}
const manifest = {
	schemaVersion: 1,
	productCommit: before,
	registrySha256: createHash('sha256')
		.update(readFileSync(join(root, 'src', 'data', 'registry.json')))
		.digest('hex'),
	generatedAt: new Date().toISOString(),
	files,
};
writeFileSync(join(output, 'manifest.json'), `${JSON.stringify(manifest, null, 2)}\n`);
console.log(`Synced ${files.length} validated factory examples from ${before.slice(0, 12)}.`);
