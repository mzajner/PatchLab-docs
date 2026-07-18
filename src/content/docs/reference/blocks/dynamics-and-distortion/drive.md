---
title: "Drive"
description: "gain-compensated tanh saturation"
sidebar:
  order: 8
---

<small>Generated from PatchLab binary source candidate `99899b76e006` · registry type 7</small>

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
| Drive (drive) | `drive` | 0 to 36 | 12 | dB | 1 |
| Mix (mix) | `mix` | 0 to 1 | 1 | — | 2 |

## Declared ports

- Audio inputs: `A`

<details>
<summary>Registry implementation notes</summary>

gain-compensated tanh saturation

</details>

:::caution[Verify in context]
Ranges and declared latency are product facts. Audible outcome, stability, level, and CPU cost still depend on signal, sample rate, block size, routing, modulation, and surrounding blocks.
:::

