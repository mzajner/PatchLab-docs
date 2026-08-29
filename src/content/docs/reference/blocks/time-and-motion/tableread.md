---
title: "TableRead"
description: "TABLE READ: an INDEX-driven head on Slot's memory - BufRead's random-access sibling."
sidebar:
  order: 177
---

<small>Generated from PatchLab binary source candidate `7fd3876b4e75` · registry type 176</small>

## At a glance

| Property | Value |
| --- | --- |
| Category | [Time & Motion](../) |
| Signal role | Audio |
| Audio inputs | 2 |
| Audio outputs | 1 |
| MIDI input | No |
| MIDI output | No |
| CPU class | light |
| Reported latency | 0. Index addresses the slot DIRECTLY, so unlike BufRead there is no ordering-dependent block offset - but for the same reason a TableRead placed upstream of the BufWrite that fills the slot reads the PREVIOUS pass over that region, which is a patch-authoring fact rather than a latency. Each interpolation policy still has its own minimum reachable distance-from-head (Nearest 0 / Linear 1 / Cubic 2 samples) |

## Parameters

| Parameter | ID | Range | Default | Unit / choices | Mod port |
| --- | --- | --- | --- | --- | ---: |
| Slot | `slot` | 0 to 7 | 0 | `1`, `2`, `3`, `4`, `5`, `6`, `7`, `8` | 2 |
| Interp | `interp` | 0 to 2 | 2 | `Nearest (>=0)`, `Linear (>=1)`, `Cubic (>=2)` | 3 |

## Declared ports

- Audio inputs: `Index`, `Order`

## Safety and limits

Index is NORMALIZED 0..1 over the slot's usable length, NOT raw samples - raw indices would silently re-address whenever Buffer's Size moved. 0 is the oldest sample and 1 the newest, so a RISING ramp plays forward. Storage is a circular line with a moving head, so 'position' can only honestly mean distance back from that head; a TableRead upstream of its BufWrite therefore reads the previous pass over that region. Shares BufRead's interpolation floors, and clamps to them the same visible way

<details>
<summary>Registry implementation notes</summary>

TABLE READ: an INDEX-driven head on Slot's memory - BufRead's random-access sibling. BufRead asks 'how far behind the write head?'; this one asks 'where in the buffer?', so a rising phasor into Index plays the buffer forward, a falling one plays it backward, and a random one scrubs. Index is NORMALIZED 0..1 across the slot's usable length (0 = oldest, 1 = newest): raw sample indices would silently re-address every time Buffer's Size moved, and every mod source in the registry already speaks 0..1. Interp is the same DECLARED POLICY as BufRead, sharing one interpolation path - Nearest (>=0) / Linear (>=1) / Cubic (>=2), minimum reachable delay in the name. Stateless like BufRead: many heads, one slot. This is the block a granular, a wavetable scanner or a tape-scrub is BUILT from rather than the block that hides one.

</details>

:::caution[Verify in context]
Ranges and declared latency are product facts. Audible outcome, stability, level, and CPU cost still depend on signal, sample rate, block size, routing, modulation, and surrounding blocks.
:::

