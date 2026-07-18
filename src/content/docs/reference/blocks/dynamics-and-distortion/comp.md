---
title: "Comp"
description: "complete soft-knee compressor (the transparent version is the Compressor macro)"
sidebar:
  order: 7
---

<small>Generated from PatchLab binary source candidate `99899b76e006` · registry type 6</small>

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
| Thresh (threshold) | `thresh` | -60 to 0 | -18 | dB | 1 |
| Ratio (ratio) | `ratio` | 1 to 20 | 3 | :1 | 2 |
| Attack (time) | `attack` | 0.1 to 100 | 8 | ms | 3 |
| Release (time) | `release` | 10 to 500 | 120 | ms | 4 |
| Makeup (gain) | `makeup` | 0 to 24 | 0 | dB | 5 |

## Declared ports

- Audio inputs: `A`

<details>
<summary>Registry implementation notes</summary>

complete soft-knee compressor (the transparent version is the Compressor macro)

</details>

:::caution[Verify in context]
Ranges and declared latency are product facts. Audible outcome, stability, level, and CPU cost still depend on signal, sample rate, block size, routing, modulation, and surrounding blocks.
:::

