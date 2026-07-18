---
title: Perform and supporting docks
description: Use the musician-facing overlay, Console, Agent, Code, Keys, and View options without losing editing context.
sidebar:
  order: 6
---

Perform and the docks present different views of the same active patch. Opening or
closing them does not create another copy of the graph.

## Perform overlay

Perform presents the patch as a playable product: title, public controls, designed
face, and output information take priority over engineering detail. It can appear as
the initial view for a patch with an appropriate performance surface.

Toggle **Perform** from the toolbar or **View → Perform Overlay**. At the root, Escape
returns to graph editing. A patch with no public controls may show guidance rather than
an empty surface.

Treat Perform as a user test:

- Can someone identify the patch's purpose without seeing the graph?
- Are the important controls named and ordered by task?
- Do values recall with presets and host state?
- Are output level and unsafe states visible?

## Console

Console displays runtime and diagnostic messages. Open it when a custom block, Agent
operation, project watcher, or export reports a problem. Preserve the first relevant
error; later failures may be consequences.

## Agent

Agent is the natural-language build and edit surface. `Cmd+L` opens and focuses it.
Its trust and provider model require their own procedure; see [Use the Agent](/manual/agent/).

## Code

Code edits custom DSP source for supported blocks. Compile feedback belongs in Console,
and a code change is not complete until the running block and export path both agree.
Do not edit generated export products as source.

## Keys

Keys provides an audition keyboard. Press `K` or choose **View → Audition Keyboard**.
It is useful for proving that a note-driven patch works without diagnosing an external
controller at the same time.

## Useful View options

The View menu also controls cable style, per-block CPU display, zoom-to-enter behavior,
zoom to fit, Day mode, tooltip help, DAW parameter inspection, and first-run tips.
These are workspace preferences, not patch DSP.
