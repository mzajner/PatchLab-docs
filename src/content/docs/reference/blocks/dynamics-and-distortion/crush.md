---
title: "Crush"
description: "downsample + bit reduce, intentionally harsh at extremes"
sidebar:
  order: 9
---

<small>Generated from PatchLab binary source candidate `99899b76e006` · registry type 8</small>

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
| Downsmp | `down` | 1 to 50 | 1 | x | 1 |
| Bits | `bits` | 2 to 16 | 16 | — | 2 |
| Mix (mix) | `mix` | 0 to 1 | 1 | — | 3 |

## Declared ports

- Audio inputs: `A`

## Safety and limits

extreme down/bits settings alias on purpose

<details>
<summary>Registry implementation notes</summary>

downsample + bit reduce, intentionally harsh at extremes

</details>

:::caution[Verify in context]
Ranges and declared latency are product facts. Audible outcome, stability, level, and CPU cost still depend on signal, sample rate, block size, routing, modulation, and surrounding blocks.
:::

