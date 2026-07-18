---
title: "CurveMap"
description: "control transfer curve on 0..1 wires through 5 breakpoints (identity by default; Smooth = Catmull-Rom): velocity curves, envelope reshaping, custom knob laws"
sidebar:
  order: 48
---

<small>Generated from PatchLab binary source candidate `99899b76e006` · registry type 47</small>

## At a glance

| Property | Value |
| --- | --- |
| Category | [Modulators](../) |
| Signal role | Utility |
| Audio inputs | 1 |
| Audio outputs | 1 |
| MIDI input | No |
| MIDI output | No |
| CPU class | trivial |
| Reported latency | 0 |

## Parameters

| Parameter | ID | Range | Default | Unit / choices | Mod port |
| --- | --- | --- | --- | --- | ---: |
| Y 0% | `y0` | 0 to 1 | 0 | — | 1 |
| Y 25% | `y1` | 0 to 1 | 0.25 | — | 2 |
| Y 50% | `y2` | 0 to 1 | 0.5 | — | 3 |
| Y 75% | `y3` | 0 to 1 | 0.75 | — | 4 |
| Y 100% | `y4` | 0 to 1 | 1 | — | 5 |
| Interp | `interp` | 0 to 1 | 1 | `Linear`, `Smooth` | 6 |

## Declared ports

- Audio inputs: `A`

<details>
<summary>Registry implementation notes</summary>

control transfer curve on 0..1 wires through 5 breakpoints (identity by default; Smooth = Catmull-Rom): velocity curves, envelope reshaping, custom knob laws

</details>

:::caution[Verify in context]
Ranges and declared latency are product facts. Audible outcome, stability, level, and CPU cost still depend on signal, sample rate, block size, routing, modulation, and surrounding blocks.
:::

