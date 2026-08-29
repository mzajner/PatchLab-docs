---
title: "Buffer"
description: "BUFFER: DECLARES a block of shared sample memory in Slot 1-8 of THIS graph level - the storage that BufWrite and BufRead address."
sidebar:
  order: 172
---

<small>Generated from PatchLab binary source candidate `7fd3876b4e75` · registry type 171</small>

## At a glance

| Property | Value |
| --- | --- |
| Category | [Time & Motion](../) |
| Signal role | Utility |
| Audio inputs | 0 |
| Audio outputs | 0 |
| MIDI input | No |
| MIDI output | No |
| CPU class | trivial |
| Reported latency | 0 |

## Parameters

| Parameter | ID | Range | Default | Unit / choices | Mod port |
| --- | --- | --- | --- | --- | ---: |
| Slot | `slot` | 0 to 7 | 0 | `1`, `2`, `3`, `4`, `5`, `6`, `7`, `8` | 0 |
| Size (time) | `size` | 0.01 to 10 | 1 | s | 1 |
| Chans | `chans` | 1 to 2 | 2 | — | 2 |

## Safety and limits

DECLARES storage, it does not process - no audio ports. Allocation happens at prepare and is ALWAYS the 10 s cap, so moving Size live never allocates (Size is a read ceiling). The pool, not this node, owns the memory: delete or bypass this block and the slot survives at its last declared size, so a live BufWrite/BufRead can never dereference freed storage. Two Buffers on one slot at one graph level: last prepare wins - the face reads the slot's REAL published length, so the disagreement shows

<details>
<summary>Registry implementation notes</summary>

BUFFER: DECLARES a block of shared sample memory in Slot 1-8 of THIS graph level - the storage that BufWrite and BufRead address. One buffer, MANY heads: a delay tap, a chorus tap and a meter tap can all read the same slot, which is the thing a fused delay node cannot give you. No audio ports - it allocates at prepare (never on the audio thread, always the full 10 s cap so a live Size change costs nothing) and publishes the slot's usable length; Size is a read ceiling, not an allocation. The POOL owns the memory, so deleting this node leaves the slot alive at its last declared size and a live head can never dereference freed storage. Slots are scoped PER GRAPH LEVEL (root, or each Container) exactly like Send/Receive buses, so two containers can never cross-feed. Two Buffers on one slot at one level: last prepare wins, and the face reads the slot's REAL length so the disagreement is visible rather than silent.

</details>

:::caution[Verify in context]
Ranges and declared latency are product facts. Audible outcome, stability, level, and CPU cost still depend on signal, sample rate, block size, routing, modulation, and surrounding blocks.
:::

