---
title: "Chorus"
description: "modulated-delay chorus"
sidebar:
  order: 10
---

<small>Generated from PatchLab binary source candidate `99899b76e006` · registry type 9</small>

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
| Rate (rate) | `rate` | 0.05 to 8 | 0.8 | Hz | 1 |
| Depth (depth) | `depth` | 0 to 1 | 0.35 | — | 2 |
| Centre (time) | `centre` | 1 to 30 | 7 | ms | 3 |
| Feedbk (feedback) | `fb` | -0.9 to 0.9 | 0 | — | 4 |
| Mix (mix) | `mix` | 0 to 1 | 0.4 | — | 5 |

## Declared ports

- Audio inputs: `A`

<details>
<summary>Registry implementation notes</summary>

modulated-delay chorus

</details>

:::caution[Verify in context]
Ranges and declared latency are product facts. Audible outcome, stability, level, and CPU cost still depend on signal, sample rate, block size, routing, modulation, and surrounding blocks.
:::

