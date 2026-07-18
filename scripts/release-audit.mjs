import { execFileSync } from 'node:child_process';
import { readFileSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const productRoot = resolve(process.env.PATCHLAB_SOURCE ?? join(root, '..', 'ModularFx', 'PatchLab'));
const registry = JSON.parse(readFileSync(join(root, 'src', 'data', 'registry-meta.json'), 'utf8'));
const examples = JSON.parse(readFileSync(join(root, 'public', 'examples', 'manifest.json'), 'utf8'));
const gates = JSON.parse(readFileSync(join(root, 'project', 'release-gates.json'), 'utf8'));
const git = (...args) => execFileSync('git', ['-C', productRoot, ...args], { encoding: 'utf8' }).trim();
const head = git('rev-parse', 'HEAD');
const changedProductPaths = git(
	'diff', '--name-only', `${registry.binarySourceCandidate}..${head}`, '--',
	'Source', 'ui', 'factory', 'CMakeLists.txt', 'Source/export',
).split('\n').filter(Boolean);
const openGates = gates.gates.filter((gate) => !gate.complete);
const blockers = [];
if (changedProductPaths.length) blockers.push(`Product behavior changed after registry binary: ${changedProductPaths.join(', ')}`);
if (examples.productCommit !== head) blockers.push(`Examples are pinned to ${examples.productCommit.slice(0, 12)}, product HEAD is ${head.slice(0, 12)}`);
for (const gate of openGates) blockers.push(`${gate.id}: ${gate.requirement}`);

const report = {
	productHead: head,
	registryBinaryCandidate: registry.binarySourceCandidate,
	registryHash: registry.registrySha256,
	blockCount: registry.blockCount,
	exampleCommit: examples.productCommit,
	behavioralDrift: changedProductPaths,
	openReleaseGates: openGates.map(({ id, requirement }) => ({ id, requirement })),
	publicReleaseReady: blockers.length === 0,
};
console.log(JSON.stringify(report, null, 2));
if (process.argv.includes('--strict') && blockers.length) {
	console.error(`Public release audit blocked (${blockers.length}):`);
	for (const blocker of blockers) console.error(`- ${blocker}`);
	process.exit(1);
}
