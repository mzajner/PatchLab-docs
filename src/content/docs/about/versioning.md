---
title: Versions, evidence, and change
description: Understand what “current” means, how generated facts are pinned, and how terminology and redirects remain stable as PatchLab evolves.
sidebar:
  order: 2
---

The site describes one current development/release baseline. It does not maintain a
version selector until two supported PatchLab releases genuinely require different
instructions.

Generated block facts are pinned to a binary source candidate and registry hash.
Downloadable examples have their own source commit and per-file hashes. Current-product
prose is reviewed against the same baseline during release.

## When behavior changes

1. Update the canonical concept or procedure.
2. Regenerate product-derived reference data.
3. Add redirects when a public URL changes.
4. Update terminology aliases and search synonyms.
5. Re-review affected media.
6. Record the product and docs revisions together.

Do not duplicate an old page and let both drift. Version the site only when users still
need both behaviors and the support policy defines their lifetime.

## Terminology changes

The terminology registry separates the canonical word from deprecated terms. A rename
should update authored text mechanically, preserve redirect/search aliases where useful,
and leave historical product identifiers untouched when changing them would corrupt
files or API compatibility.
