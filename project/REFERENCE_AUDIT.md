# Reference audit

## Patchwerk

Sources reviewed:

- `https://patchwerk.dev/wiki`
- PatchLab-local export `docs/competitors/PatchwerkWiki.pdf` (60 pages)
- PatchLab competitive teardown and current wiki route inventory

Strengths to learn from:

- A short path from first launch to first sound.
- Clear progression from graph to design to export.
- A separate internals layer for advanced readers.
- Practical troubleshooting organized by symptom.
- Project-anatomy explanation that makes files less mysterious.

Risks to avoid:

- Product behavior can outpace a prose-only manual.
- Narrative pages alone do not scale to a large exact block reference.
- Competitor-specific terminology and claims cannot be treated as PatchLab truth.

## MNodes

Sources reviewed:

- `https://mnodes-docs.marionietoworld.com/`
- `/nodes/` and `/guide/what-is-mnodes.html`
- PatchLab-local exports `MNodes_UserGuide.pdf` (137 pages) and `MNodes_Nodes.pdf`
  (456 pages)
- PatchLab competitive research and node census

Strengths to learn from:

- Strong category navigation over a very large library.
- Searchable per-node facts and visible signal-type model.
- Clear separation of guide and reference.
- Popular-topic and newcomer paths on the home page.

Risks to avoid:

- A large reference can become repetitive and difficult to keep consistent by hand.
- Category browsing does not by itself teach system design or DSP reasoning.
- Count and behavior claims need build/version provenance.

## PatchLab response

Combine Patchwerk's narrative progression with MNodes' reference scale, then add:

- product-generated facts;
- source/build provenance;
- a concept layer independent from UI order;
- measurement-driven troubleshooting; and
- an interactive DSP curriculum north star.

All competitor material remains research only. No prose or screenshots are copied into
the public docs.
