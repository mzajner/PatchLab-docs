---
title: Contribute to the documentation
description: Propose a correction or lesson with reproducible evidence, stable terminology, accessible media, and a reviewable scope.
sidebar:
  order: 1
---

Documentation changes are product changes when they alter what a user believes or does.

## A useful contribution

State the page and user outcome, then provide the smallest evidence that supports the
change. For a product procedure, include the PatchLab artifact, platform, exact path,
expected result, and observed result. For DSP, state equations, units, assumptions,
measurement conditions, and a primary reference.

Do not hand-edit generated block pages. Update PatchLab's registry facts and regenerate
them, or place editorial guidance in a concept, family guide, recipe, or lesson.

## Writing and media

Use the canonical vocabulary in the glossary and terminology registry. Define a term at
first meaningful use, distinguish measured fact from listening guidance, and keep
planned behavior out of present tense.

Images follow `project/MEDIA_STANDARD.md` in the documentation repository. Use the
[documentation correction form](https://github.com/mzajner/PatchLab-docs/issues/new?template=documentation.yml)
for factual, accessibility, presentation, and lesson issues. Never include credentials,
private paths, confidential projects, or licensed source audio.

## Before review

Run `npm run check`. A release-critical procedure also needs real-path evidence and a
reviewer other than its author. Contributions are licensed according to the destination
path described on the [licensing page](/about/licensing/).
