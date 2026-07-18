# PatchLab documentation

The standalone source for PatchLab's product guide, DSP learning path, and generated
block reference.

## Local development

```bash
npm install
npm run dev
```

Open the local URL printed by Astro.

## Required checks

```bash
npm run check
```

This validates frontmatter, internal links, terminology migrations, generated registry
provenance, downloadable-example integrity, per-page accuracy authorities, DSP
invariants, theme contrast, Astro types, the production build, the search index, and
sitemap generation.

## Refresh the block reference

Build PatchLab first, then run:

```bash
npm run sync:registry
```

Set `PATCHLAB_BIN` and `PATCHLAB_SOURCE` when the product checkout is not in the
expected sibling location. Generated pages under
`src/content/docs/reference/blocks/` are replaced on each sync; do not edit them by
hand.

## Refresh the example library

After the product revision is frozen, run:

```bash
npm run sync:examples
```

This copies the approved factory examples, validates their graph structure against the
registry, normalizes their JSON, and writes a hash manifest. Files under
`public/examples/` are generated release inputs; update them through the sync script.

## Prepare a release

```bash
npm run sync:registry
npm run sync:examples
npm run release:audit
npm run check
```

`release:audit` compares documentation provenance with the current PatchLab checkout
and reports unresolved public-release gates. The strict form is for a publication
candidate and intentionally fails while any gate remains open:

```bash
npm run release:audit:strict
```

Follow [project/RELEASE_CHECKLIST.md](project/RELEASE_CHECKLIST.md) for procedural,
media, host, accessibility, preview, and deployment review. Public-release decisions
are recorded in `project/release-gates.json`; do not silently replace a missing fact
with a provisional claim.

## Repository map

- `src/content/docs/` — published pages
- `src/data/` — registry snapshot and provenance
- `src/styles/` — documentation design tokens and presentation
- `scripts/` — registry/example generation, content checks, and release audit
- `project/` — strategy, standards, governance, and roadmap (not published)
- `.github/workflows/` — verification, link checking, and deployment

Read [project/DOCUMENTATION_STRATEGY.md](project/DOCUMENTATION_STRATEGY.md) before
changing the information architecture.

Licensing and public conduct, privacy, security, and support policies are defined in
[LICENSE.md](LICENSE.md), [CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md),
[PRIVACY.md](PRIVACY.md), [SECURITY.md](SECURITY.md), and [SUPPORT.md](SUPPORT.md).
