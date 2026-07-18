---
title: "XY"
description: "PERFORMANCE 2D PAD: drag the node face to set X (out 1) and Y (out 2), each a 0..1 control and a mod target - one gesture drives two destinations (filter cutoff+reso, Faders positi"
sidebar:
  order: 123
---

<small>Generated from PatchLab binary source candidate `99899b76e006` · registry type 122</small>

## At a glance

| Property | Value |
| --- | --- |
| Category | [Modulators](../) |
| Signal role | Modulation |
| Audio inputs | 0 |
| Audio outputs | 2 |
| MIDI input | No |
| MIDI output | No |
| CPU class | trivial |
| Reported latency | 0 |

## Parameters

| Parameter | ID | Range | Default | Unit / choices | Mod port |
| --- | --- | --- | --- | --- | ---: |
| X | `x` | 0 to 1 | 0.5 | — | 0 |
| Y | `y` | 0 to 1 | 0.5 | — | 1 |

<details>
<summary>Registry implementation notes</summary>

PERFORMANCE 2D PAD: drag the node face to set X (out 1) and Y (out 2), each a 0..1 control and a mod target - one gesture drives two destinations (filter cutoff+reso, Faders position+amount, vector-macro morphs). The value is the surface; persists with the patch

</details>

:::caution[Verify in context]
Ranges and declared latency are product facts. Audible outcome, stability, level, and CPU cost still depend on signal, sample rate, block size, routing, modulation, and surrounding blocks.
:::

