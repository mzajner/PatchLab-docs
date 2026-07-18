# Stage-two documentation review

Reviewed: 2026-07-18

## Outcome

The standalone documentation is a local release candidate for the current PatchLab
behavior. The product manual, category guidance, first recipe library, DSP curriculum,
generated block reference, and first interactive lessons are implemented. The
documentation preview is publicly deployed; the PatchLab product release remains
blocked by the explicit external evidence in `release-gates.json`.

## Product baseline

- PatchLab checkout: `/Users/ernest/HisePersonal/Personal/ModularFx/PatchLab`
- Product HEAD: `7e84a02b4ca30564a909b4585079079de40c1300`
- Registry-producing behavioral candidate:
  `99899b76e00666045f1b83a1f480926f2de97356`
- Behavioral changes between those revisions: none; the post-review delta only updates
  backlog status and adds sampler verification evidence
- Registry schema: 4
- Registered blocks: 166 across 10 categories
- Canonical registry SHA-256:
  `3283dada03ded1c9561d8ab879d9941a26ea07a97a7c79aff8ac468e4e573300`
- Downloadable-example source revision:
  `d2693baee79099f244fa2427da40050f4a76da64`

The registry and example synchronizers record provenance and abort if their product
inputs change while a sync is in progress. The release audit reports no behavioral
drift at this baseline.

## Current-product review

The manual was compared with the product sources and current application behavior for:

- startup defaults, audio and MIDI setup;
- Patch-page construction, graph ownership, and project flow;
- Canvas generation, editing, binding, preview, and reusable faces;
- Debug-page measurement and diagnostics;
- Perform mode and supporting docks;
- project saving, autosave/recovery, patch presets, and Canvas presets;
- Agent trust modes and the boundary between proposals and authorized changes; and
- export stages, artifact checks, signing/notarization limits, and host validation.

The manual does not claim an installer, update service, signed/notarized public
artifact, official download origin, or completed DAW support matrix. Those facts must
come from a frozen release and remain visible release gates.

## Documentation delivered

- 242 static pages and routes.
- 12 current-product manual pages.
- 10 edited block-family guides.
- 8 normalized, downloadable factory examples with a hash manifest.
- Focused build, measurement, interface-design, diagnosis, and export recipes.
- A sequenced 13-lesson DSP and real-time audio curriculum.
- 166 generated block pages linked back to edited category guidance.
- Interactive amplitude/decibel and equal-sine phase labs with live text alternatives.
- Public glossary, shortcuts, file model, support status, versioning, contributing,
  robots, sitemap, search, and machine-readable `llms.txt` entry points.

## Automated evidence

`npm run check` completed successfully on 2026-07-18:

- content checks: 242 pages, 242 routes, 166 registry blocks;
- accuracy authorities: 177 generated-registry pages, 44 current-product pages, 13 DSP
  lessons, and 8 site-governance pages;
- DSP invariant checks: gain/dB, period, delay phase, sine summing, mid/side round trip,
  callback deadline, FFT spacing, and alias folding;
- theme checks: explicit light/dark color schemes and eight WCAG AA contrast pairs;
- Astro diagnostics: 0 errors, 0 warnings, 0 hints;
- static build: 242 pages;
- Pagefind search index: built successfully; and
- sitemap: generated successfully.

Content checks cover frontmatter, duplicate page titles, image alternatives, vague link
labels, internal/public links, terminology migration, registry freshness, public
example links, example manifest membership, and example hashes.

PatchLab's own verification also completed successfully against the pinned product:
348 UI tests passed, all 35 batched runtime self-tests passed, and all 166 registered
block types loaded and round-tripped through the product.

## Rendered review

The local static site was reviewed in Chromium at desktop and narrow mobile sizes.
The review covered the homepage, Canvas manual, DSP curriculum, example library, and
both interactive lessons. Navigation, on-page navigation, typography, content width,
mobile collapse, control labels, graphs, downloads, and live numerical results rendered
without visible overlap or clipping.

Committed product screenshots and gesture media are deliberately deferred until the
release artifact and visual state are frozen. `MEDIA_STANDARD.md` defines deterministic
capture, annotation, alternative-text, and provenance requirements; the empty media
manifest is therefore an honest state, not an omission disguised as finished media.

## Remaining maturity work

These items belong to later roadmap stages and are not prerequisites for calling the
current manual authored:

- a reviewed recipe and deterministic measurement fixture for every individual block;
- comparison pages for easily confused block families;
- bounded AudioWorklet experiments and saved lesson checkpoints;
- shared lesson/graph schemas with a future PatchLab web runtime; and
- approved release screenshots, host captures, and short gesture videos.

## Public-release boundary

The docs can be previewed or deployed technically, but they are not ready to represent
a public PatchLab release until the repository, canonical domain, license,
distribution/update policy, signing/notarization evidence, real-host matrix, and
feedback destination are approved. Resolve those gates, perform every claimed
release procedure against the frozen artifact, then run
`npm run release:audit:strict` and the release checklist.
