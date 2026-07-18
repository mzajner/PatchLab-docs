---
title: "Gain"
description: "smoothed gain; modulate gain for tremolo/AM"
sidebar:
  order: 4
---

<small>Generated from PatchLab binary source candidate `99899b76e006` · registry type 3</small>

## At a glance

| Property | Value |
| --- | --- |
| Category | [Routing & Structure](../) |
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
| Gain (gain) | `gain` | -60 to 24 | 0 | dB | 1 |

## Declared ports

- Audio inputs: `A`

<details>
<summary>Registry implementation notes</summary>

smoothed gain; modulate gain for tremolo/AM

</details>

:::caution[Verify in context]
Ranges and declared latency are product facts. Audible outcome, stability, level, and CPU cost still depend on signal, sample rate, block size, routing, modulation, and surrounding blocks.
:::

