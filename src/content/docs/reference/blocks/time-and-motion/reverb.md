---
title: "Reverb"
description: "algorithmic room reverb"
sidebar:
  order: 12
---

<small>Generated from PatchLab binary source candidate `99899b76e006` · registry type 11</small>

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

## Declared ports

- Audio inputs: `A`

<details>
<summary>Registry implementation notes</summary>

algorithmic room reverb

</details>

:::caution[Verify in context]
Ranges and declared latency are product facts. Audible outcome, stability, level, and CPU cost still depend on signal, sample rate, block size, routing, modulation, and surrounding blocks.
:::

