# PatchLab documentation strategy

Status: ratified foundation, 2026-07-18

## 1. Outcome

PatchLab documentation must do three jobs without collapsing them into one page type:

1. help someone complete real work in PatchLab;
2. explain the DSP and audio-application principles behind that work; and
3. provide exact, searchable reference for the current product.

The site succeeds when a newcomer can make a safe first sound, a developer can verify
a parameter or file contract quickly, and both can move between practical work and
deeper understanding without losing context.

The documentation is a product surface. Incorrect, stale, or inaccessible instructions
are product defects.

## 2. Audiences and their questions

| Audience | Entry question | Needs | Failure to avoid |
| --- | --- | --- | --- |
| First-time musician | “How do I hear something without breaking anything?” | Safe start, visible outcomes, low jargon, recovery | A feature tour before first success |
| Patch builder | “How do I make this routing or modulation idea?” | Recipes, topology, macros, troubleshooting | Presets with no explanation |
| DSP learner | “Why does this sound and measure this way?” | Concepts, equations, experiments, primary sources | Math detached from sound |
| Audio developer | “What is the exact contract?” | Ranges, units, latency, formats, real-time constraints | Approximate marketing language |
| UI/plugin designer | “How do graph intent and performance controls meet?” | Canvas model, binding, accessibility, design systems | Treating the face as decoration |
| Contributor/support | “What changed and which page owns it?” | Source map, provenance, versioning, review status | Duplicate facts and invisible drift |

Pages name their primary audience through language and assumed knowledge, not through
separate duplicate manuals.

## 3. Information architecture

The public site has five layers.

### Start here

Orientation and first success. Pages are short, sequential, and free of internal
implementation detail unless it changes what the user must do.

### Core concepts

Reusable mental models: signal flow, blocks and ports, modulation, containers, project
artifacts, automation, latency, feedback, and export. These pages answer “how does this
system think?”

### Guides

Outcome-led procedures. Each guide includes prerequisites, safety, expected result,
verification, failure modes, and deliberate extensions.

### Learn DSP

A curriculum organized by concept rather than product menu: amplitude, decibels,
frequency, phase, filters, sampling, aliasing, envelopes, dynamics, delay, modulation,
stereo, analysis, numerical behavior, and real-time architecture.

Every lesson follows: predict → patch → measure → listen → explain → vary.

### Reference

Exact facts: generated block pages, shortcuts, file types, manifests, schemas, command
catalogs, compatibility, and glossary. Reference is dense and predictable; it does not
carry the teaching burden of a lesson.

## 4. Modular cross-referencing

Every concept should have one canonical explanation. Other pages link to it using a
specific reason:

- “Before you connect the feedback branch, read …”
- “For exact ranges, see …”
- “To understand why this cancels in mono, see …”

Avoid “click here” and generic “learn more.” Links should tell the reader what question
the destination answers.

Each block page can eventually expose four related links:

1. concepts the block demonstrates;
2. guides that use it;
3. adjacent or contrasting blocks; and
4. safety/performance topics that change how it should be used.

Those relationships should move to structured data once enough pages exist; do not
maintain large reciprocal lists by hand.

## 5. Terminology that can evolve

Canonical user terms live in `project/terminology.json` with stable semantic IDs. The
initial vocabulary is block, patch, port, parameter, container, macro, and face.

When a term changes:

1. change the preferred term in the vocabulary;
2. add the old term to `deprecated` with a replacement;
3. let content checks identify active occurrences;
4. update UI labels, search synonyms, redirects, alt text, and structured data;
5. retain the old term only in historical context or redirect aliases; and
6. remove the deprecation only after old supported docs versions are retired.

Do not encode changing product nouns into directory names unless they are stable public
URLs. Prefer semantic routes such as `/concepts/signal-flow/` over names tied to a
temporary UI tab.

## 6. Accuracy architecture

### Source hierarchy

| Claim | Primary source | Secondary check |
| --- | --- | --- |
| User gesture/menu | Real running UI | Current command/menu source |
| Block ports/parameters | Running `--registry` | Registry declarations and tests |
| DSP behavior | Algorithm source + measured fixture | Primary technical reference |
| Project/file behavior | Save/open user path | Project and serialization source |
| Export/host support | Exported artifact in named host | Export source and validation logs |
| Planned behavior | Approved roadmap/spec | Never presented as current |

Generated facts and editorial explanation stay separate. The generator owns parameter
tables; authors own use, interpretation, warnings, and examples.

### Evidence states

- Generated: extracted from a running product surface and schema-checked.
- Verified: reproduced through the real path and compared with an authority.
- Reviewed: technical/editorial review complete; real-path proof may remain.
- Draft: useful work that is not release-ready.
- Planned: architecture or north star only.

Release pages must not blur those states.

### Version scope

At first public release, use one documentation version that matches the supported
PatchLab release. Add versioned docs only when two incompatible product versions are
simultaneously supported. Premature version duplication multiplies stale content.

Each release records product version, product commit, registry hash, docs commit,
platforms, formats, and publication date in a machine-readable manifest.

## 7. Generated block reference

`npm run sync:registry` executes the built PatchLab registry and generates one page per
block plus category indexes. It validates required fields, parameter bounds, route
uniqueness, and provenance.

Current limitation: the product binary does not embed an exact source revision. The
generator records the newest source commit preceding the binary timestamp as a
**candidate**, plus the source HEAD observed at generation. The product should
eventually embed `buildVersion`, `sourceCommit`, and `registrySchema` in the registry
output; after that, inference can be removed.

Future registry fields worth adding:

- stable public block ID separate from display name;
- named input and output descriptors for every block;
- parameter description and unit type separate from suffix text;
- oversampling, polyphony, and export-support capabilities;
- declared real-time safety and smoothing behavior;
- version introduced/deprecated;
- related concepts/examples; and
- authoritative latency in samples plus conditions.

## 8. Technical platform decision

Use Astro Starlight in a standalone repository.

Why it fits:

- Markdown/MDX remains diffable and portable.
- Static output is fast, secure, cacheable, and inexpensive to host.
- Accessible navigation, local search, responsive layout, code rendering, headings,
  themes, and SEO metadata exist from the start.
- Astro components support diagrams and interactive teaching widgets without turning
  every page into a client-side application.
- Content and interactive components can evolve independently.

Counter-argument: a custom Svelte or Next application could share more code with
PatchLab and offer total presentation control.

Why it loses now: it would spend the first phase rebuilding documentation primitives,
increase runtime JavaScript, and couple editorial work to an application framework
before the interactive curriculum exists. Astro can still host Svelte components as
isolated islands when those lessons become real.

## 9. Presentation system

The visual language should echo PatchLab without imitating the app pixel-for-pixel:

- near-black/neutral surfaces, restrained green signal accent, and amber emphasis;
- generous whitespace and short line lengths;
- category and signal color used as metadata, never as the only carrier of meaning;
- diagrams before screenshots when the relationship is conceptual;
- screenshots only when spatial UI recognition matters;
- tables for exact comparison, steps for procedure, and prose for reasoning;
- disclosure panels for implementation detail that would interrupt the main path.

Avoid ornamental screenshots, stock audio imagery, enormous hero art, and callout
overload. A page should have one dominant reading path.

## 10. Screenshot and media system

Every screenshot asset needs:

- source product revision and capture date;
- capture route/command and fixture project;
- viewport/window dimensions and theme;
- a concise purpose statement;
- meaningful alt text in the page;
- no personal paths, keys, account data, or unrelated desktop content; and
- an owner or test that says when it becomes stale.

Use deterministic fixture patches and stable window dimensions. Prefer WebP/AVIF for
photographic or complex raster captures and SVG for diagrams. Keep an original PNG for
review when lossy compression could hide a UI defect.

Short video is justified for gestures, modulation, and time-varying visualizers. It
must include a poster image, captions or equivalent explanation, and a non-video path
to the same instruction.

## 11. The interactive DSP north star

The long-term learning environment should let a reader alter the same conceptual
building blocks used by PatchLab and immediately observe sound, waveform, spectrum,
phase, and meters.

Do not begin by embedding the full desktop runtime. Build capability in layers:

1. static diagrams and downloadable verified patches;
2. parameterized plots with no audio;
3. small Web Audio/AudioWorklet experiments with bounded DSP;
4. serialized lesson patches shared with PatchLab;
5. a web PatchLab runtime only when the engine/export architecture supports one.

Each interactive must include reset, safe defaults, keyboard access, reduced-motion
behavior, CPU guardrails, a no-audio explanation, and a deterministic expected result.

The lesson schema should eventually describe:

- learning objective and prerequisites;
- initial patch and editable surface;
- prediction question;
- measurable checkpoints and tolerances;
- listening prompt;
- explanation and common misconception;
- completion state stored locally; and
- compatible PatchLab/lesson-engine version.

## 12. Web delivery

### Phase 1: preview

- Local development and production build.
- GitHub repository with pull-request checks.
- GitHub Pages preview or project URL.
- No analytics required.

### Phase 2: official site

- Custom domain, recommended `docs.patchlab.dev`, after ownership and DNS are confirmed.
- HTTPS, canonical URLs, sitemap, social metadata, 404 page, redirects, and robots rules.
- Privacy-respecting aggregate analytics only after specific questions are defined.
- Page feedback linked to an issue template with product/docs revision metadata.

### Phase 3: product integration

- Contextual Help links from PatchLab to stable docs anchors.
- Version-aware URLs or banners when product and site versions differ.
- Optional packaged/offline docs for environments without internet access.
- In-app search or command-palette handoff to the web index.

Never require an online site to perform a safety-critical recovery action. Panic,
diagnostics, and basic help remain discoverable in the product.

## 13. Accessibility, localization, and inclusion

Target WCAG 2.2 AA from the first public release.

- Full keyboard navigation and visible focus.
- Semantic headings and landmarks.
- Color contrast and non-color status cues.
- Alt text based on instructional purpose.
- Captions/transcripts for instructional video.
- Equations accompanied by readable prose.
- Respect for reduced-motion and reduced-data preferences.
- Touch targets and layouts usable at 200% zoom.

Write localization-ready English: avoid jokes that carry instruction, culture-specific
metaphors, text baked into images, and sentences that depend on word order inside UI
labels. Begin translation only after terminology and release scope stabilize.

## 14. Search and discoverability

Search must index preferred terms, aliases, block display names, parameter IDs, common
audio terms, and errors. A future synonym map should connect:

- block/node/module;
- cutoff/frequency/tone;
- gain/level/volume/trim;
- modulation/CV/control;
- preset/patch/project, while preserving their important distinctions.

Public pages need unique titles and descriptions, canonical URLs, an XML sitemap, and
structured data where it adds real meaning. Do not create low-value pages solely for
search traffic.

## 15. Feedback and analytics

Ask a concrete page question: “Did this page let you complete the task?” A negative
answer should capture page, heading, docs revision, product version, and a short reason.

Analytics should answer editorial questions such as:

- Where do first-patch readers stop?
- Which searches return no useful result?
- Which block pages lead to troubleshooting?
- Are readers moving from guides to concepts and back?

Do not collect audio, project content, agent prompts, or personally identifying data
for documentation analytics.

## 16. Maintenance model

Every product change that affects user behavior answers:

1. Which public page owns this fact?
2. Does generated data cover it?
3. Does a screenshot or patch fixture become stale?
4. Is a redirect or terminology migration required?
5. What real-path evidence proves the new instruction?

A release cannot be “docs complete” merely because the site builds. The relevant
procedures must work in the release candidate.

Quarterly maintenance should review search gaps, high-exit pages, broken external
links, unowned screenshots, stale status labels, unsupported versions, and glossary
drift.

## 17. Competitor lessons without imitation

Patchwerk demonstrates the value of a concise narrative path from first sound through
design and export, plus an internals layer for advanced readers. MNodes demonstrates
the value of visible categories, exhaustive block reference, search, and direct routes
to popular tasks.

PatchLab should combine those strengths and differentiate through:

- generated product truth;
- explicit evidence and revision provenance;
- strong DSP teaching linked to real patches;
- measurement-driven troubleshooting; and
- an eventual interactive curriculum built from the same modular concepts as the app.

Do not copy competitor prose, screenshots, category names, or page structure. Their
materials are research evidence, not source content.

## 18. Decisions still requiring Mike

- Confirm the official docs domain and repository owner/visibility.
- Decide whether documentation ships under the same GPL license as PatchLab or a
  documentation-specific license.
- Define the first public PatchLab release whose behavior the site will promise.
- Decide whether docs feedback enters GitHub Issues, a private support system, or both.
- Choose whether third-party contributors can submit DSP lessons before the lesson
  verification harness exists.
- Approve analytics provider and privacy statement, if analytics are added.
- Approve screenshot theme baseline and public brand assets.

These do not block local authoring, generated reference, build verification, or a
private preview.
