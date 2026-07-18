# Documentation roadmap

## Phase 0 — foundation (implemented in this repository)

- Standalone Astro Starlight repo.
- Public information architecture and visual baseline.
- Canonical terminology and content rules.
- Generated 166-block reference with provenance.
- Initial orientation, concepts, guides, DSP lessons, troubleshooting, shortcuts, file
  model, and glossary.
- Internal-link, terminology, registry, type, and production-build checks.
- GitHub Pages deployment workflow and scheduled external-link check.

Exit: local build and content checks pass; initial pages receive technical review.

## Phase 1 — release manual (current-product manual implemented; public release gates open)

- Installation, updates, audio/MIDI setup, and first-run flow.
- Complete Patch/Canvas/Debug/Perform procedures.
- Agent setup, trust model, provider behavior, and recovery.
- Project lifecycle, presets, asset management, and diagnostics.
- Export formats, signing/notarization, install locations, and DAW validation.
- Approved deterministic screenshots and short gesture videos.
- Host/platform support matrix based on tested artifacts.

Implemented: first-run status, audio/MIDI, Patch, Canvas, Debug, Perform/docks,
projects/saving, presets/faces, Agent trust, export, troubleshooting, and an evidence-
graded support matrix. Open release dependencies are tracked in `release-gates.json`:
there is not yet an approved installer/update channel, notarized distribution artifact,
or completed real-DAW matrix.

Exit: a first-time user can install, build, save, reopen, design, export, load in a
supported host, and diagnose common failures using only the docs.

## Phase 2 — block guidance and recipes (category layer and first recipes implemented)

- Editorial summaries for every block category.
- One verified example and related concepts for each block.
- Comparison pages for easily confused blocks.
- Search synonyms and parameter-level discovery.
- Downloadable validated patch fixtures.
- Performance/latency guidance for structural and expensive blocks.

Implemented: editorial guidance for all ten registry categories, six focused build and
measurement guides, eight validated downloadable factory examples, and generated links
between category reference and edited guidance. Remaining: one reviewed use path for
every individual block, confused-block comparison pages, and deterministic measurement
fixtures at catalog scale.

Exit: every block has more than a generated table; it has a safe, verified use path.

## Phase 3 — DSP curriculum (first complete authored sequence implemented)

- Sampling and aliasing.
- Oscillators and band-limiting.
- Filters, resonance, and filter topologies.
- Delay, combing, modulation effects, and reverb networks.
- Envelopes, detectors, compressors, gates, and limiters.
- Nonlinearity, oversampling, and level calibration.
- Stereo, mid/side, correlation, and mono compatibility.
- FFT/STFT, convolution, and spectral processing.
- Real-time audio architecture, threading, state, latency, and testing.

Implemented: a sequenced 13-lesson curriculum covering every topic above, with
objectives, prerequisites, experiments, misconceptions, and primary references.
Remaining maturity gate: attach deterministic PatchLab fixtures and reviewed numeric
measurements to each lesson.

Exit: each lesson has objectives, prerequisites, verified patch, deterministic
measurement, listening task, misconception, and review record.

## Phase 4 — interactive learning (first two labs implemented)

- Accessible parameterized plots.
- Small bounded AudioWorklet experiments.
- Interactive signal-flow diagrams linked to block reference.
- Lesson state and checkpoints stored locally.
- “Open this lesson patch in PatchLab” handoff.
- Versioned lesson runtime contract.

Implemented: accessible parameterized amplitude/dB and equal-sine phase-interaction
labs with live text output and non-color-only presentation. AudioWorklet experiments,
lesson state, and PatchLab handoff remain future work.

Exit: amplitude, phase, filtering, and modulation lessons are meaningfully interactive
without requiring the full PatchLab desktop engine in the browser.

## Phase 5 — web PatchLab alignment

- Share graph/block schemas between docs lessons and the web product.
- Embed safe read-only or sandboxed patches.
- Promote lesson experiments to the supported PatchLab web runtime where appropriate.
- Preserve static and text alternatives for every interactive.

Exit: the docs and web PatchLab use the same stable semantic block model without the
documentation becoming dependent on the application being online.
