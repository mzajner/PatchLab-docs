---
title: "TableShaper"
description: "transfer-curve shaper through 5 breakpoints on a -1..1 grid (Pt -1 .."
sidebar:
  order: 64
---

<small>Generated from PatchLab binary source candidate `99899b76e006` · registry type 63</small>

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
| Drive (drive) | `drive` | 0 to 24 | 0 | dB | 1 |
| Pt -1 | `y0` | -1 to 1 | -1 | — | 2 |
| Pt -.5 | `y1` | -1 to 1 | -0.5 | — | 3 |
| Pt 0 | `y2` | -1 to 1 | 0 | — | 4 |
| Pt +.5 | `y3` | -1 to 1 | 0.5 | — | 5 |
| Pt +1 | `y4` | -1 to 1 | 1 | — | 6 |
| Mix (mix) | `mix` | 0 to 1 | 1 | — | 7 |

## Declared ports

- Audio inputs: `A`

## Safety and limits

extreme breakpoint curves can boost level and alias (oversample if harsh); identity defaults are transparent; the curve is linearly interpolated between 5 fixed grid points

<details>
<summary>Registry implementation notes</summary>

transfer-curve shaper through 5 breakpoints on a -1..1 grid (Pt -1 .. Pt +1), linear interp: draw any odd/even/custom curve - identity passthrough by default; Drive frames the curve, Mix blends dry (pairs with a curve editor)

</details>

:::caution[Verify in context]
Ranges and declared latency are product facts. Audible outcome, stability, level, and CPU cost still depend on signal, sample rate, block size, routing, modulation, and surrounding blocks.
:::

