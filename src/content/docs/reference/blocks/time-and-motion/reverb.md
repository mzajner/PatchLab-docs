---
title: "Reverb"
description: "algorithmic room reverb (Freeverb); Time > 0 sets the decay in SECONDS (measured RT60 at Damp 0, ~0.7..11 s) and overrides Size; Time 0 = Size rules"
sidebar:
  order: 12
---

<small>Generated from PatchLab binary source candidate `96ae72bb5451` · registry type 11</small>

## At a glance

| Property | Value |
| --- | --- |
| Category | [Time & Motion](../) |
| Signal role | Audio |
| Audio inputs | 1 |
| Audio outputs | 1 |
| MIDI input | No |
| MIDI output | No |
| CPU class | light |
| Reported latency | 0 |

## Parameters

| Parameter | ID | Range | Default | Unit / choices | Mod port |
| --- | --- | --- | --- | --- | ---: |
| Size | `size` | 0 to 1 | 0.55 | — | 1 |
| Damp | `damp` | 0 to 1 | 0.5 | — | 2 |
| Width (width) | `width` | 0 to 1 | 0.9 | — | 3 |
| Mix (mix) | `mix` | 0 to 1 | 0.25 | — | 4 |
| Time (time) | `timeS` | 0 to 12 | 0 | s | 5 |

## Declared ports

- Audio inputs: `A`

<details>
<summary>Registry implementation notes</summary>

algorithmic room reverb (Freeverb); Time > 0 sets the decay in SECONDS (measured RT60 at Damp 0, ~0.7..11 s) and overrides Size; Time 0 = Size rules

</details>

:::caution[Verify in context]
Ranges and declared latency are product facts. Audible outcome, stability, level, and CPU cost still depend on signal, sample rate, block size, routing, modulation, and surrounding blocks.
:::

