---
title: Turn a patch into a usable face
description: Select a public control surface, generate a starting layout, refine hierarchy, and verify bindings and states.
sidebar:
  order: 8
---

## Define the user decisions

Before opening Canvas, list the few decisions a musician should make. Prefer **Amount**,
**Tone**, **Motion**, or **Space** only when each name describes a tested relationship.
Keep calibration or diagnostic controls available to the developer without placing all
of them on the main face.

## Build

1. Expose or create the intended macros/parameters on the Patch page.
2. Open Canvas and choose **Generate UI** for a bounded starting point.
3. Remove controls that do not belong in the user task.
4. Group controls by purpose and order them by workflow.
5. Use spacing, type, and contrast to establish hierarchy before decoration.
6. Bind displays to the same state their controls edit.
7. Preview and operate the face without consulting the graph.

## Verify

For every control, check minimum, midpoint, maximum, reset, fine gesture, preset recall,
project reopen, and host automation where exported. Ensure labels remain legible and
focus/pointer states do not depend on color alone.

Finally, give the face to someone who did not build the graph. Their hesitation reveals
interface problems the author has learned to overlook.

See [Design on the Canvas page](/manual/canvas-page/) for the full tool model.
