---
title: "TableLookup"
description: "TABLE LOOKUP: ONE interpolated 5-breakpoint transfer curve, element-generic - the single mechanism CurveMap and TableShaper were each shipping in their own signal domain."
sidebar:
  order: 181
---

<small>Generated from PatchLab binary source candidate `7fd3876b4e75` · registry type 180</small>

## At a glance

| Property | Value |
| --- | --- |
| Category | [Dynamics & Distortion](../) |
| Signal role | Audio |
| Audio inputs | 1 |
| Audio outputs | 1 |
| MIDI input | No |
| MIDI output | No |
| CPU class | trivial |
| Reported latency | 0 |

## Parameters

| Parameter | ID | Range | Default | Unit / choices | Mod port |
| --- | --- | --- | --- | --- | ---: |
| Domain | `domain` | 0 to 1 | 1 | `Unipolar (0..1)`, `Bipolar (-1..1)` | 1 |
| Y 0% | `y0` | -1 to 1 | -1 | — | 2 |
| Y 25% | `y1` | -1 to 1 | -0.5 | — | 3 |
| Y 50% | `y2` | -1 to 1 | 0 | — | 4 |
| Y 75% | `y3` | -1 to 1 | 0.5 | — | 5 |
| Y 100% | `y4` | -1 to 1 | 1 | — | 6 |
| Interp | `interp` | 0 to 1 | 0 | `Linear`, `Smooth` | 7 |
| Drive (drive) | `drive` | 0 to 24 | 0 | dB | 8 |
| Mix (mix) | `mix` | 0 to 1 | 1 | — | 9 |

## Declared ports

- Audio inputs: `A`

## Safety and limits

Domain picks the input convention and nothing else: Bipolar clamps to -1..1, Unipolar to 0..1. The DEFAULT table is the bipolar identity, so inserting it in an audio path is a wire until you move a point - but in Unipolar the identity is y = 0/.25/.5/.75/1, so a table left at its bipolar defaults will fold a control signal. Set the domain first, then the points

<details>
<summary>Registry implementation notes</summary>

TABLE LOOKUP: ONE interpolated 5-breakpoint transfer curve, element-generic - the single mechanism CurveMap and TableShaper were each shipping in their own signal domain. Domain picks the input convention: Bipolar (-1..1, the audio waveshaping default, and the default table is the identity so inserting it is a wire) or Unipolar (0..1, the control/mod convention). Everything else is the same block: clamp, place x on the uniform grid, interpolate between the straddling points. Feed it audio and it is a waveshaper; feed it a mod signal and it is a response curve; the plane is the cable's, not the block's. That is the point - the duplication was never two ideas, it was one idea copied into two categories.

</details>

:::caution[Verify in context]
Ranges and declared latency are product facts. Audible outcome, stability, level, and CPU cost still depend on signal, sample rate, block size, routing, modulation, and surrounding blocks.
:::

