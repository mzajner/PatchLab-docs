---
title: Patch presets and Canvas presets
description: Save values and interface designs without accidentally treating either one as a replacement graph.
sidebar:
  order: 8
---

The rule is simple: **a preset does not change graph topology**.

## Patch preset

Choose **File → Save Preset…** while a project is open. Enter `Category/Name` to place
the preset in a category, or enter a name alone for the uncategorized level.

A `.plpreset` stores parameter and macro values against the existing graph. Its graph
hash lets PatchLab identify a preset created for a different graph revision. A stale
preset can be shown honestly and applied on a best-effort basis; it does not add or
remove blocks to force a match.

Use a patch preset for:

- alternate effect settings;
- instrument sounds over one fixed architecture;
- factory and user value sets; and
- reproducible lesson starting points.

## Canvas preset

Choose **File → Save Canvas Preset…** when a project has a face. A `.plface` stores the
face document and bindings, independent of graph topology.

Use it for a reusable layout or visual design. Loading one can change control placement,
style, and bindings; it does not replace the graph.

## Multiple project faces

**File → Face (UI)** manages face documents owned by the project. Create, duplicate,
rename, or switch the active face when the project needs more than one designed surface.

A face is a project document. A Canvas preset is a transportable snapshot of face
design. Keep that distinction visible in names and reviews.

## Preset verification

For every preset intended to ship:

1. load the expected project and graph revision;
2. load the preset from the same path a user will take;
3. verify parameter and macro values;
4. play a controlled source at a safe level;
5. save, close, reopen, and recall it again; and
6. confirm automation and the designed face show the recalled state.

Do not judge two presets at uncontrolled output levels. Level-match when the comparison
is about tone rather than loudness.
