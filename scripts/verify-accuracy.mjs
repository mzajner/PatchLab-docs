import { execFileSync } from 'node:child_process';
import { existsSync, readFileSync, readdirSync, writeFileSync } from 'node:fs';
import { extname, join, relative, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(fileURLToPath(new URL('..', import.meta.url)));
const docsRoot = join(root, 'src', 'content', 'docs');
const productRoot = resolve(process.env.PATCHLAB_SOURCE ?? join(root, '..', 'ModularFx', 'PatchLab'));
const authorities = JSON.parse(readFileSync(join(root, 'project', 'accuracy-authorities.json'), 'utf8'));
const registry = JSON.parse(readFileSync(join(root, 'src', 'data', 'registry.json'), 'utf8'));
const registryMeta = JSON.parse(readFileSync(join(root, 'src', 'data', 'registry-meta.json'), 'utf8'));
const failures = [];

const walk = (dir) => readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
	const path = join(dir, entry.name);
	return entry.isDirectory() ? walk(path) : [path];
});
const pages = walk(docsRoot).filter((path) => ['.md', '.mdx'].includes(extname(path)));
const relPage = (path) => relative(docsRoot, path).replaceAll('\\', '/');
const slugify = (value) => value.normalize('NFKD').toLowerCase().replace(/&/g, ' and ')
	.replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
const classify = (rel) => {
	if (rel.startsWith('reference/blocks/')) return 'generated-registry';
	if (rel.startsWith('learn/') && rel !== 'learn/curriculum.md') return 'dsp-theory';
	if (/^(manual|start-here|concepts|guides)\//.test(rel)) return 'current-product';
	if (/^reference\/(shortcuts|file-types|glossary)\./.test(rel)) return 'current-product';
	return 'site-governance';
};

const productHead = execFileSync('git', ['-C', productRoot, 'rev-parse', 'HEAD'], { encoding: 'utf8' }).trim();
if (productHead !== authorities.productCommit) {
	failures.push(`Pinned product ${authorities.productCommit.slice(0, 12)} differs from HEAD ${productHead.slice(0, 12)}; review and repin before publishing.`);
}

for (const path of authorities.classes['current-product'].authorities) {
	if (!existsSync(join(productRoot, path))) failures.push(`Missing product authority: ${path}`);
}
for (const className of ['generated-registry', 'site-governance']) {
	for (const path of authorities.classes[className].authorities) {
		if (!existsSync(join(root, path))) failures.push(`Missing docs authority: ${path}`);
	}
}

const productText = [
	...authorities.classes['current-product'].authorities.map((path) => join(productRoot, path)),
	...walk(join(productRoot, 'ui', 'src')),
]
	.filter((path) => !['.png', '.jpg', '.webp', '.woff', '.woff2'].includes(extname(path)))
	.map((path) => readFileSync(path, 'utf8'))
	.join('\n');
for (const term of authorities.productTerms) {
	if (!productText.includes(term)) failures.push(`Documented product term is absent from pinned source: ${term}`);
}

for (const category of new Set(registry.blocks.map((block) => block.category))) {
	const path = join(docsRoot, 'guides', 'block-families', `${slugify(category)}.md`);
	if (!existsSync(path)) {
		failures.push(`Missing edited category guide: ${category}`);
		continue;
	}
	const text = readFileSync(path, 'utf8');
	for (const block of registry.blocks.filter((candidate) => candidate.category === category)) {
		if (!text.includes(block.name)) failures.push(`${relPage(path)} does not name registered ${category} block ${block.name}`);
	}
}

const reportPages = pages.map((path) => {
	const rel = relPage(path);
	const evidenceClass = classify(rel);
	const text = readFileSync(path, 'utf8');
	if (evidenceClass === 'dsp-theory' && !/^## Primary references?$/m.test(text)) {
		failures.push(`${rel}: DSP lesson lacks a primary-reference section`);
	}
	if (evidenceClass !== 'generated-registry' && /\b(?:zero[- ]latency|perfectly transparent|guaranteed identical)\b/i.test(text)) {
		failures.push(`${rel}: unqualified absolute audio claim requires measured evidence`);
	}
	return {
		page: rel,
		evidenceClass,
		authorities: authorities.classes[evidenceClass].authorities,
		productCommit: evidenceClass === 'current-product' || evidenceClass === 'generated-registry'
			? authorities.productCommit : undefined,
		registrySha256: evidenceClass === 'generated-registry' ? registryMeta.registrySha256 : undefined,
	};
});

const classCounts = Object.fromEntries(Object.keys(authorities.classes).map((name) => [
	name, reportPages.filter((page) => page.evidenceClass === name).length,
]));
const report = {
	schemaVersion: 1,
	productCommit: authorities.productCommit,
	registrySha256: registryMeta.registrySha256,
	registryBlocks: registry.blocks.length,
	pages: reportPages,
};
writeFileSync(join(root, 'project', 'accuracy-report.json'), `${JSON.stringify(report, null, 2)}\n`);

if (failures.length) {
	console.error(`Accuracy verification failed (${failures.length}):`);
	for (const failure of failures) console.error(`- ${failure}`);
	process.exit(1);
}
console.log(`Accuracy authorities passed: ${pages.length} pages classified ${JSON.stringify(classCounts)}, ${authorities.productTerms.length} product terms found, ${registry.blocks.length} blocks covered.`);
