# Documentation release checklist

## Freeze and synchronize

- Freeze one PatchLab release candidate.
- Record product commit, artifact identity, platform, and build timestamp.
- Run `npm run sync:registry` against that artifact.
- Run `npm run sync:examples` against the same product revision.
- Run `npm run release:audit`; resolve behavioral drift.

## Review

- Perform every changed current-product procedure in the candidate.
- Review DSP equations, dimensions, conventions, and primary references.
- Capture approved media under `project/MEDIA_STANDARD.md`.
- Complete technical, editorial, and adversarial review.
- Complete accessibility, compact-layout, search, 404, internal-link, and external-link review.
- Run `npm run check` with no error, warning, or hint.

## Product release evidence

- Record checksums, signing identity, notarization, and official download location.
- Complete every claimed host/format cell.
- Confirm installation, update, rollback, and project compatibility instructions.
- Replace development-status callouts only where evidence now exists.

## Publish

- Resolve every item in `project/release-gates.json`.
- Run `npm run release:audit:strict`.
- Deploy to preview and test canonical URLs, search, sitemap, robots, social metadata, downloads, and 404.
- Promote the same docs artifact to the official domain.
- Tag product and documentation with reciprocal revisions.
