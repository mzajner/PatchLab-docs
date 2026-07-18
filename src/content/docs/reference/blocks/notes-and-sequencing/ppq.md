---
title: "PPQ"
description: "SONG-POSITION ramp: the host beat position folded to a 0..1 ramp repeating every Beats beats (Beats 4 = one bar in 4/4), locked to the DAW timeline - song-position modulation for i"
sidebar:
  order: 120
---

<small>Generated from PatchLab binary source candidate `99899b76e006` · registry type 119</small>

## At a glance

| Property | Value |
| --- | --- |
| Category | [Notes & Sequencing](../) |
| Signal role | Modulation |
| Audio inputs | 0 |
| Audio outputs | 1 |
| MIDI input | No |
| MIDI output | No |
| CPU class | trivial |
| Reported latency | 0 |

## Parameters

| Parameter | ID | Range | Default | Unit / choices | Mod port |
| --- | --- | --- | --- | --- | ---: |
| Beats | `beats` | 1 to 16 | 4 | beats | 0 |

<details>
<summary>Registry implementation notes</summary>

SONG-POSITION ramp: the host beat position folded to a 0..1 ramp repeating every Beats beats (Beats 4 = one bar in 4/4), locked to the DAW timeline - song-position modulation for intros/builds and bar-synced sweeps (vs a free LFO). Block-rate; unhosted/offline = 0

</details>

:::caution[Verify in context]
Ranges and declared latency are product facts. Audible outcome, stability, level, and CPU cost still depend on signal, sample rate, block size, routing, modulation, and surrounding blocks.
:::

