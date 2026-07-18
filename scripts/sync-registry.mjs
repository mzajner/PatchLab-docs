import { execFileSync } from 'node:child_process';
import { createHash } from 'node:crypto';
import { existsSync, mkdirSync, readFileSync, rmSync, statSync, writeFileSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const repoRoot = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const productRoot = resolve(
	process.env.PATCHLAB_SOURCE ?? join(repoRoot, '..', 'ModularFx', 'PatchLab'),
);
const binary = resolve(
	process.env.PATCHLAB_BIN ??
		join(
			productRoot,
			'build',
			'PatchLab_artefacts',
			'Release',
			'ModFx PatchLab.app',
			'Contents',
			'MacOS',
			'ModFx PatchLab',
		),
);
if (!existsSync(binary)) {
	throw new Error(`PatchLab binary not found: ${binary}`);
}

const git = (...args) =>
	execFileSync('git', ['-C', productRoot, ...args], { encoding: 'utf8' }).trim();
const scopedStatus = git('status', '--short', '--', '.');

const raw = execFileSync(binary, ['--registry'], {
	encoding: 'utf8',
	maxBuffer: 32 * 1024 * 1024,
});
const registry = JSON.parse(raw);

if (!Number.isInteger(registry.version) || !Array.isArray(registry.blocks)) {
	throw new Error('Registry must contain an integer version and a blocks array.');
}
if (registry.blocks.length === 0) throw new Error('Registry contains no blocks.');

const requiredBlockFields = [
	'type',
	'name',
	'category',
	'signal',
	'audioIns',
	'audioOuts',
	'midiIn',
	'midiOut',
	'params',
];
for (const block of registry.blocks) {
	for (const field of requiredBlockFields) {
		if (!(field in block)) throw new Error(`${block.name ?? '<unnamed>'}: missing ${field}`);
	}
	if (!Array.isArray(block.params)) throw new Error(`${block.name}: params is not an array`);
	for (const param of block.params) {
		for (const field of ['id', 'name', 'min', 'max', 'def', 'modPort']) {
			if (!(field in param)) throw new Error(`${block.name}.${param.id ?? '?'}: missing ${field}`);
		}
		if (param.min > param.max) throw new Error(`${block.name}.${param.id}: min exceeds max`);
		if (param.def < param.min || param.def > param.max) {
			throw new Error(`${block.name}.${param.id}: default is outside its range`);
		}
	}
}

const slugify = (value) =>
	value
		.normalize('NFKD')
		.toLowerCase()
		.replace(/&/g, ' and ')
		.replace(/[^a-z0-9]+/g, '-')
		.replace(/^-|-$/g, '');
const yaml = (value) => JSON.stringify(String(value));
const md = (value) => String(value ?? '').replace(/\r?\n+/g, ' ').trim();
const fmt = (value) => {
	if (typeof value !== 'number') return String(value ?? '—');
	if (Number.isInteger(value)) return String(value);
	return Number(value.toPrecision(7)).toString();
};
const signalLabels = {
	audio: 'Audio',
	mod: 'Modulation',
	event: 'Event',
	utility: 'Utility',
	structure: 'Structure',
	visual: 'Visual',
};

const seenSlugs = new Map();
for (const block of registry.blocks) {
	const key = `${slugify(block.category)}/${slugify(block.name)}`;
	if (seenSlugs.has(key)) {
		throw new Error(`Duplicate generated route for ${seenSlugs.get(key)} and ${block.name}: ${key}`);
	}
	seenSlugs.set(key, block.name);
}

const dataDir = join(repoRoot, 'src', 'data');
const generatedRoot = join(repoRoot, 'src', 'content', 'docs', 'reference', 'blocks');
mkdirSync(dataDir, { recursive: true });
rmSync(generatedRoot, { recursive: true, force: true });
mkdirSync(generatedRoot, { recursive: true });

const sourceHead = git('rev-parse', 'HEAD');
const sourceHeadShort = git('rev-parse', '--short=12', 'HEAD');
const binaryModifiedAt = statSync(binary).mtime.toISOString();
// PatchLab does not yet embed a source revision in --registry. The newest commit
// preceding the binary's modification time is the best auditable candidate; we
// name it as a candidate rather than claiming an exact build identity.
const binarySourceCandidate = git('rev-list', '-1', `--before=${binaryModifiedAt}`, 'HEAD');
const binarySourceCandidateShort = git('rev-parse', '--short=12', binarySourceCandidate);
const binarySourceCandidateDate = git('show', '-s', '--format=%cI', binarySourceCandidate);
const registryHash = createHash('sha256').update(raw).digest('hex');
const previousMetaPath = join(dataDir, 'registry-meta.json');
let previousMeta = null;
if (existsSync(previousMetaPath)) {
	try {
		previousMeta = JSON.parse(readFileSync(previousMetaPath, 'utf8'));
	} catch {
		previousMeta = null;
	}
}
const generatedAt =
	previousMeta?.registrySha256 === registryHash
		? previousMeta.generatedAt
		: new Date().toISOString();
const metadata = {
	schemaVersion: registry.version,
	blockCount: registry.blocks.length,
	binarySourceCandidate,
	binarySourceCandidateShort,
	binarySourceCandidateDate,
	binaryModifiedAt,
	sourceHeadObserved: sourceHead,
	sourceHeadObservedShort: sourceHeadShort,
	sourceAdvancedSinceBinary: sourceHead !== binarySourceCandidate,
	sourceWorkingTreeDirtyObserved: Boolean(scopedStatus),
	registrySha256: registryHash,
	generatedAt,
	binary,
};

writeFileSync(join(dataDir, 'registry.json'), `${JSON.stringify(registry, null, 2)}\n`);
writeFileSync(previousMetaPath, `${JSON.stringify(metadata, null, 2)}\n`);

const groups = new Map();
for (const block of registry.blocks) {
	if (!groups.has(block.category)) groups.set(block.category, []);
	groups.get(block.category).push(block);
}

const overview = [
	'---',
	'title: Block reference',
	'description: Ports, parameters, ranges, defaults, CPU class, and latency generated from the live PatchLab registry.',
	'sidebar:',
	'  order: 1',
	'---',
	'',
	`This reference contains **${registry.blocks.length} blocks** in **${groups.size} categories**. ` +
		`It was generated from PatchLab registry schema ${registry.version} in a binary associated with source candidate \`${binarySourceCandidateShort}\`.`,
	'',
	':::note[Generated facts, edited guidance]',
	'Port counts, parameter values, CPU class, latency, and implementation notes come from the running PatchLab binary. Concept pages and guides are edited separately for clarity and teaching.',
	':::',
	'',
	'## Categories',
	'',
	'| Category | Blocks |',
	'| --- | ---: |',
];
for (const [category, blocks] of groups) {
	overview.push(`| [${category}](./${slugify(category)}/) | ${blocks.length} |`);
}
overview.push(
	'',
	'## Provenance',
	'',
	`- Binary source candidate: \`${binarySourceCandidate}\``,
	`- Binary modified: ${binaryModifiedAt}`,
	`- Source HEAD observed during generation: \`${sourceHead}\``,
	`- Source advanced since binary: **${metadata.sourceAdvancedSinceBinary ? 'yes' : 'no'}**`,
	`- Registry SHA-256: \`${registryHash}\``,
	`- Product working tree dirty when observed: **${metadata.sourceWorkingTreeDirtyObserved ? 'yes' : 'no'}**`,
	'',
	'The public documentation build fails if generated routes or required registry fields are inconsistent.',
	'',
);
writeFileSync(join(generatedRoot, 'index.md'), `${overview.join('\n')}\n`);

let categoryOrder = 10;
for (const [category, blocks] of groups) {
	const categorySlug = slugify(category);
	const categoryDir = join(generatedRoot, categorySlug);
	mkdirSync(categoryDir, { recursive: true });
	const categoryPage = [
		'---',
		`title: ${yaml(category)}`,
		`description: ${yaml(`${blocks.length} PatchLab blocks in ${category}.`)}`,
		'sidebar:',
		`  order: ${categoryOrder++}`,
		'---',
		'',
		`**${blocks.length} blocks**. Select a block for its generated ports, parameters, ranges, defaults, CPU class, latency, and registry notes.`,
		'',
		`For selection advice, signal-flow patterns, and cautions, read [Using ${category} blocks](/guides/block-families/${categorySlug}/).`,
		'',
		'| Block | Signal role | Audio I/O | MIDI |',
		'| --- | --- | ---: | --- |',
	];
	for (const block of blocks) {
		const midi = [block.midiIn ? 'in' : '', block.midiOut ? 'out' : ''].filter(Boolean).join('/') || '—';
		categoryPage.push(
			`| [${block.name}](./${slugify(block.name)}/) | ${signalLabels[block.signal] ?? block.signal} | ${block.audioIns} in / ${block.audioOuts} out | ${midi} |`,
		);
	}
	categoryPage.push('');
	writeFileSync(join(categoryDir, 'index.md'), `${categoryPage.join('\n')}\n`);

	for (const block of blocks) {
		const summary = md(block.blurb).split(/(?<=[.!?])\s+/)[0] || `${block.name} block reference.`;
		const page = [
			'---',
			`title: ${yaml(block.name)}`,
			`description: ${yaml(summary.slice(0, 180))}`,
			'sidebar:',
			`  order: ${block.type + 1}`,
			'---',
			'',
			`<small>Generated from PatchLab binary source candidate \`${binarySourceCandidateShort}\` · registry type ${block.type}</small>`,
			'',
			'## At a glance',
			'',
			'| Property | Value |',
			'| --- | --- |',
			`| Category | [${category}](../) |`,
			`| Signal role | ${signalLabels[block.signal] ?? block.signal} |`,
			`| Audio inputs | ${block.audioIns} |`,
			`| Audio outputs | ${block.audioOuts} |`,
			`| MIDI input | ${block.midiIn ? 'Yes' : 'No'} |`,
			`| MIDI output | ${block.midiOut ? 'Yes' : 'No'} |`,
			`| CPU class | ${block.cpu || 'Not declared'} |`,
			`| Reported latency | ${block.latency || 'Not declared'} |`,
		];
		if (Number.isInteger(block.macroSlots)) page.push(`| Macro slots | ${block.macroSlots} |`);
		page.push('', '## Parameters', '');
		if (block.params.length === 0) {
			page.push('This block declares no editable parameters.', '');
		} else {
			page.push('| Parameter | ID | Range | Default | Unit / choices | Mod port |', '| --- | --- | --- | --- | --- | ---: |');
			for (const param of block.params) {
				const unit = Array.isArray(param.items) && param.items.length
					? param.items.map((item) => `\`${md(item)}\``).join(', ')
					: md(param.suffix).trim() || '—';
				const range = `${fmt(param.min)} to ${fmt(param.max)}`;
				const role = param.role ? ` (${param.role})` : '';
				page.push(`| ${md(param.name)}${role} | \`${md(param.id)}\` | ${range} | ${fmt(param.def)} | ${unit} | ${param.modPort} |`);
			}
			page.push('');
		}

		const inNames = Array.isArray(block.inPortNames) ? block.inPortNames : [];
		const outNames = Array.isArray(block.outPortNames) ? block.outPortNames : [];
		if (inNames.length || outNames.length || (Array.isArray(block.dataPorts) && block.dataPorts.length)) {
			page.push('## Declared ports', '');
			if (inNames.length) page.push(`- Audio inputs: ${inNames.map((name) => `\`${md(name)}\``).join(', ')}`);
			if (outNames.length) page.push(`- Audio outputs: ${outNames.map((name) => `\`${md(name)}\``).join(', ')}`);
			if (Array.isArray(block.dataPorts) && block.dataPorts.length) {
				page.push(`- Data ports: ${block.dataPorts.map((port) => `\`${md(port.label ?? port.id ?? JSON.stringify(port))}\``).join(', ')}`);
			}
			page.push('');
		}

		if (block.safety) {
			page.push('## Safety and limits', '', md(block.safety), '');
		}
		if (block.blurb) {
			page.push(
				'<details>',
				'<summary>Registry implementation notes</summary>',
				'',
				md(block.blurb),
				'',
				'</details>',
				'',
			);
		}
		page.push(
			':::caution[Verify in context]',
			'Ranges and declared latency are product facts. Audible outcome, stability, level, and CPU cost still depend on signal, sample rate, block size, routing, modulation, and surrounding blocks.',
			':::',
			'',
		);
		writeFileSync(join(categoryDir, `${slugify(block.name)}.md`), `${page.join('\n')}\n`);
	}
}

writeFileSync(join(generatedRoot, '.generated'), `${registryHash}\n`);
console.log(
	`Generated ${registry.blocks.length} block pages in ${groups.size} categories from PatchLab binary candidate ${binarySourceCandidateShort}.`,
);
if (metadata.sourceAdvancedSinceBinary) {
	console.warn(`Note: source HEAD ${sourceHeadShort} is newer than the binary snapshot; registry facts remain pinned to the binary.`);
}
