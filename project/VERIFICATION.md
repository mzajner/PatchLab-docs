# Documentation verification protocol

## Release gate

A page that instructs a current product action is release-ready only when:

1. the procedure was performed in the candidate PatchLab build;
2. UI labels and shortcuts match the build;
3. the expected result was observed through the same path a user takes;
4. DSP claims were measured where measurement is possible;
5. safety, destructive behavior, and persistence were checked;
6. a second review compared the page against source/registry evidence; and
7. automated content, link, type, build, and accessibility checks pass.

## Evidence record

Record in the pull request or release checklist:

```yaml
page: /guides/build-first-effect/
docs_commit: <sha>
product_commit: <sha>
product_build: <version or artifact id>
platform: macOS <version>
host: standalone | <DAW and version>
sample_rate: 48000
block_size: 512
fixture: <project or patch path>
verified_claims:
  - <claim and evidence>
reviewer: <name>
human_only:
  - <taste/listening item that cannot be automated>
```

## Automated checks

- Frontmatter and internal routes.
- Terminology deprecations.
- Registry schema, bounds, route uniqueness, hash, and generated-page freshness.
- Astro type check and production build.
- Search indexing.
- External links on a scheduled job.
- Accessibility and visual regression once browser fixtures are added.

## DSP lesson fixtures

Each mature lesson should ship a deterministic patch and input where possible. Record:

- expected peak/RMS or spectral/temporal measurement;
- tolerance and why it is appropriate;
- sample rate, block size, duration, channels, and warm-up;
- whether native, fused, or exported runtime is under test; and
- a known-negative mutation that proves the check can fail.

## Screenshot review

Compare screenshot revision to product revision. Re-capture if the relevant control,
layout, label, state, or theme changed. A cosmetically old screenshot is acceptable
only when none of its instructional pixels changed and its metadata records that
review.

## Review roles

- Technical reviewer: product behavior and DSP correctness.
- Editorial reviewer: structure, language, accessibility, and assumptions.
- Adversarial reviewer: follows instructions literally and looks for missing state,
  silent prerequisites, and claims unsupported by evidence.

One person can fill two roles for a small change; the author should not be the only
reviewer for a release-critical procedure.
