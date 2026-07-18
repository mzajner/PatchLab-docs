// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import { unified } from '@astrojs/markdown-remark';
import registry from './src/data/registry.json' with { type: 'json' };

/** @param {string} value */
const slugify = (value) =>
	value
		.normalize('NFKD')
		.toLowerCase()
		.replace(/&/g, ' and ')
		.replace(/[^a-z0-9]+/g, '-')
		.replace(/^-|-$/g, '');
const blockCategories = [...new Set(registry.blocks.map((block) => block.category))].map(
	(category) => ({ label: category, slug: `reference/blocks/${slugify(category)}` }),
);
const site = process.env.PATCHLAB_DOCS_SITE ?? 'https://docs.patchlab.dev';
const base = process.env.PATCHLAB_DOCS_BASE ?? '/';
const basePrefix = base === '/' ? '' : `/${base.replace(/^\/+|\/+$/g, '')}`;
/** @returns {(tree: import('hast').Root) => void} */
const prefixInternalLinks = () => (tree) => {
	if (!basePrefix) return;
	/** @param {import('hast').Nodes} node */
	const visit = (node) => {
		if (node?.type === 'element' && node.tagName === 'a') {
			const href = node.properties?.href;
			if (typeof href === 'string' && href.startsWith('/') && !href.startsWith('//') && !href.startsWith(`${basePrefix}/`)) {
				node.properties.href = `${basePrefix}${href}`;
			}
		}
		if ('children' in node) {
			for (const child of node.children) visit(child);
		}
	};
	visit(tree);
};

// https://astro.build/config
export default defineConfig({
	site,
	base,
	markdown: { processor: unified({ rehypePlugins: [prefixInternalLinks] }) },
	integrations: [
		starlight({
			title: 'PatchLab',
			disable404Route: true,
			description: 'Build audio systems, understand what they do, and turn them into instruments and effects.',
			logo: {
				src: './src/assets/patchlab-mark.svg',
				replacesTitle: false,
			},
			favicon: '/favicon.svg',
			customCss: ['./src/styles/custom.css'],
			social: [{ icon: 'github', label: 'PatchLab documentation on GitHub', href: 'https://github.com/mzajner/PatchLab-docs' }],
			lastUpdated: true,
			tableOfContents: { minHeadingLevel: 2, maxHeadingLevel: 3 },
			sidebar: [
				{
					label: 'Start here',
					items: [
						{ slug: 'start-here/what-is-patchlab' },
						{ slug: 'start-here/first-patch' },
						{ slug: 'start-here/interface' },
					],
				},
				{
					label: 'Core concepts',
					items: [{ autogenerate: { directory: 'concepts' } }],
				},
				{
					label: 'User manual',
					items: [{ autogenerate: { directory: 'manual' } }],
				},
				{
					label: 'Build and explore',
					items: [{ autogenerate: { directory: 'guides' } }],
				},
				{
					label: 'Learn DSP',
					items: [{ autogenerate: { directory: 'learn' } }],
				},
				{
					label: 'Block reference',
					collapsed: true,
					items: [{ slug: 'reference/blocks' }, ...blockCategories],
				},
				{
					label: 'Reference',
					items: [
						{ slug: 'reference/shortcuts' },
						{ slug: 'reference/file-types' },
						{ slug: 'reference/glossary' },
						{ slug: 'reference/documentation-status' },
					],
				},
				{
					label: 'About the docs',
					collapsed: true,
					items: [{ autogenerate: { directory: 'about' } }],
				},
			],
		}),
	],
});
