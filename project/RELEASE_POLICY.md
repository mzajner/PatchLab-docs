# Documentation release policy

## Channels

- **Preview:** pull-request or local artifacts for review; never an official product
  support claim.
- **Current:** the documentation revision linked to one frozen PatchLab release.
- **Historical:** retained only when an incompatible PatchLab release remains supported.

## Promotion

A current release must pass `npm run release:audit:strict` and `npm run check`, carry
reciprocal product/docs revisions, and use the same built documentation artifact that
passed preview review. Rebuilding between approval and promotion is not permitted.

Product downloads must come from an approved HTTPS origin and publish an artifact
identity, byte size, SHA-256 checksum, signing/notarization state, supported formats,
and rollback location. Documentation must not imply that a source checkout or unsigned
development build is an end-user release.

## Corrections

Factual and accessibility corrections may ship without waiting for a product release
when they do not change the documented product contract. A behavior change requires a
new product baseline and procedure review. Material corrections receive a dated note;
old URLs redirect when routes move.

## Rollback

Keep the preceding known-good documentation artifact and product download available
until the new release is confirmed. If a release gives unsafe instructions, wrong
downloads, broken navigation, or a materially incorrect compatibility claim, restore
the previous artifact first and investigate second.
