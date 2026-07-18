import { createHash } from 'node:crypto';
import { existsSync, readFileSync, readdirSync } from 'node:fs';
import { extname, join, relative, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(fileURLToPath(new URL('..', import.meta.url)));
const docsRoot = join(root, 'src', 'content', 'docs');
const failures = [];

const walk = (dir) =>
	readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
		const path = join(dir, entry.name);
		return entry.isDirectory() ? walk(path) : [path];
	});
const pages = walk(docsRoot).filter((path) => ['.md', '.mdx'].includes(extname(path)));

const routeFor = (path) => {
	let route = relative(docsRoot, path).replaceAll('\\', '/').replace(/\.(md|mdx)$/, '');
	if (route === 'index') return '/';
	if (route.endsWith('/index')) route = route.slice(0, -'/index'.length);
	return `/${route}/`;
};
const routes = new Set(pages.map(routeFor));

const terms = JSON.parse(readFileSync(join(root, 'project', 'terminology.json'), 'utf8'));
for (const path of pages) {
	const rel = relative(root, path);
	const text = readFileSync(path, 'utf8');
	if (!text.startsWith('---\n')) failures.push(`${rel}: missing frontmatter`);
	if (!/^title:\s*.+$/m.test(text)) failures.push(`${rel}: missing title`);
	if (!/^description:\s*.+$/m.test(text)) failures.push(`${rel}: missing description`);
	if (/^#\s+/m.test(text.replace(/^---[\s\S]*?---/, ''))) failures.push(`${rel}: content must not add a second H1`);
	for (const match of text.matchAll(/!\[([^\]]*)\]\([^)]+\)/g)) {
		if (!match[1].trim()) failures.push(`${rel}: Markdown image has empty alt text`);
	}
	for (const match of text.matchAll(/<img\b[^>]*>/gi)) {
		if (!/\balt=(?:"[^"]*"|'[^']*')/i.test(match[0])) failures.push(`${rel}: HTML image is missing alt text`);
	}
	if (/\[\s*(?:click here|here|more)\s*\]\(/i.test(text)) failures.push(`${rel}: link text must describe its destination`);

	for (const match of text.matchAll(/(?<!!)\[[^\]]*\]\(([^)]+)\)/g)) {
		const href = match[1].trim().replace(/^<|>$/g, '');
		if (/^(?:[a-z]+:|#)/i.test(href)) continue;
		const target = href.split(/[?#]/, 1)[0];
		if (!target) continue;
		let route = target.startsWith('/')
			? target
			: new URL(target, `https://patchlab.invalid${routeFor(path)}`).pathname;
		const publicFile = join(root, 'public', route.replace(/^\//, ''));
		if (existsSync(publicFile)) continue;
		if (!route.endsWith('/')) route += '/';
		if (!routes.has(route)) failures.push(`${rel}: broken internal link ${href}`);
	}

	for (const deprecated of terms.deprecated) {
		const expression = new RegExp(`\\b${deprecated.term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\b`, 'i');
		if (expression.test(text)) failures.push(`${rel}: deprecated term “${deprecated.term}”; use “${deprecated.replacement}”`);
	}
}

const registry = JSON.parse(readFileSync(join(root, 'src', 'data', 'registry.json'), 'utf8'));
const metadata = JSON.parse(readFileSync(join(root, 'src', 'data', 'registry-meta.json'), 'utf8'));
if (registry.blocks.length !== metadata.blockCount) failures.push('Registry metadata block count does not match registry.json');
const marker = join(docsRoot, 'reference', 'blocks', '.generated');
if (!existsSync(marker)) failures.push('Generated block reference marker is missing; run npm run sync:registry');
else if (readFileSync(marker, 'utf8').trim() !== metadata.registrySha256) failures.push('Generated block pages are stale; run npm run sync:registry');

const examplesDir = join(root, 'public', 'examples');
const examplesManifestPath = join(examplesDir, 'manifest.json');
if (!existsSync(examplesManifestPath)) failures.push('Example manifest is missing; run npm run sync:examples');
else {
	const examplesManifest = JSON.parse(readFileSync(examplesManifestPath, 'utf8'));
	for (const example of examplesManifest.files ?? []) {
		const path = join(examplesDir, example.file);
		if (!existsSync(path)) failures.push(`Example is missing: ${example.file}`);
		else {
			const hash = createHash('sha256').update(readFileSync(path)).digest('hex');
			if (hash !== example.sha256) failures.push(`Example hash mismatch: ${example.file}`);
		}
	}
}

if (failures.length) {
	console.error(`Content checks failed (${failures.length}):`);
	for (const failure of failures) console.error(`- ${failure}`);
	process.exit(1);
}

console.log(`Content checks passed: ${pages.length} pages, ${routes.size} routes, ${registry.blocks.length} registry blocks.`);
