---
title: "Noise"
description: "noise in three colors - White flat, Pink -3 dB/oct (Kellet refined), Brown -6 dB/oct; texture or S&H source (silent by default)"
sidebar:
  order: 2
---

<small>Generated from PatchLab binary source candidate `99899b76e006` · registry type 1</small>

## At a glance

| Property | Value |
| --- | --- |
| Category | [Generators](../) |
| Signal role | Audio |
| Audio inputs | 0 |
| Audio outputs | 1 |
| MIDI input | No |
| MIDI output | No |
| CPU class | trivial |
| Reported latency | 0 |

## Parameters

| Parameter | ID | Range | Default | Unit / choices | Mod port |
| --- | --- | --- | --- | --- | ---: |
| Level (level) | `level` | 0 to 1 | 0 | — | 0 |
| Color | `color` | 0 to 2 | 0 | `White`, `Pink`, `Brown` | 1 |

<details>
<summary>Registry implementation notes</summary>

noise in three colors - White flat, Pink -3 dB/oct (Kellet refined), Brown -6 dB/oct; texture or S&H source (silent by default)

</details>

:::caution[Verify in context]
Ranges and declared latency are product facts. Audible outcome, stability, level, and CPU cost still depend on signal, sample rate, block size, routing, modulation, and surrounding blocks.
:::

