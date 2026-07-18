---
title: Build on the Patch page
description: Add, connect, organize, modulate, inspect, and safely edit the running signal graph.
sidebar:
  order: 3
---

The Patch page is the engineering view. Its blocks and cables are the running system,
not a diagram generated after the fact.

## Add a block

- `Tab` or `Cmd+K` opens Quick Add at the pointer.
- `Shift+Tab` opens the full browser.
- `Cmd+Shift+N` opens Add Block from anywhere in the app.
- **File → Load Example** opens a complete factory patch.

Search by block name or purpose. Before connecting an unfamiliar block, inspect its
[reference page](/reference/blocks/) for ports, defaults, latency, and parameter units.

## Connect and edit

Drag from an output to a compatible input. PatchLab highlights compatible targets and
can magnetize a near drop. Dropping a block onto an existing cable can splice it into
that route.

To change the graph:

- drag a block header to move it;
- click a cable or block and press Delete to remove it;
- right-click an input to disconnect it;
- drag a parameter row vertically to edit it;
- hold Shift for fine adjustment; and
- double-click a parameter row to restore its default.

Moving a block changes legibility, not sound. Changing a cable endpoint changes the
system.

## Work with selections

- `Cmd+D` duplicates a selected block.
- `Cmd+A` selects non-endpoint blocks at the current level.
- `Cmd+G` places a valid multi-selection inside a Container.
- `Cmd+Shift+G` ungroups a selected plain Container when its graph can be flattened.
- `Cmd+Z` and `Cmd+Shift+Z` undo and redo graph edits.

Use **Analyze this block** from a block's context menu to open Debug with that block
selected. A multi-selection can be analyzed as one measured scope.

## Navigate nested structures

Double-click a Container header to enter it. Use the breadcrumb or Escape to return to
its parent. Depending on the preference under View, zooming may also enter containers.

Inside a Container, boundary endpoints describe signals crossing into and out of the
subsystem. Keep those connections and the public macros intentional.

## Modulate a parameter

Right-click a parameter and open **Modulate** to choose a compatible existing source or
create a new LFO. You can also connect a cable directly to the parameter's modulation
port.

The patch-wide modulation surface shows assignments and their curves. Default
modulation moves upward from the base value in normalized parameter space; **Bipolar
mod** moves around the base. Read [Modulation](/concepts/modulation/) before assuming a
display-unit midpoint is also the modulation midpoint.

## Keep edits safe

Use conservative gain before summing, feedback, resonant filtering, and nonlinear
blocks. If output becomes unsafe, press `Cmd+Shift+.`. Panic fades the audio bus and
sends MIDI all-notes/all-sound-off; choose **Resume Output** deliberately afterward.

Save at meaningful checkpoints. Graph undo is useful, but it is not a substitute for a
project history or version control.
