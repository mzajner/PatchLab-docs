---
title: "Diffuser"
description: "Dattorro input diffuser: a SERIES cascade of N (2-8) coprime Schroeder AllpassDelay sections - flat magnitude (a chain of allpasses is still allpass) but the echo density grows sup"
sidebar:
  order: 92
---

<small>Generated from PatchLab binary source candidate `99899b76e006` · registry type 91</small>

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
| Stages | `stages` | 0 to 6 | 2 | `2`, `3`, `4`, `5`, `6`, `7`, `8` | 1 |
| Diffuse (amount) | `diffuse` | 0 to 0.9 | 0.7 | — | 2 |
| Size | `size` | 0.25 to 4 | 1 | x | 3 |
| Mix (mix) | `mix` | 0 to 1 | 1 | — | 4 |

## Declared ports

- Audio inputs: `A`

<details>
<summary>Registry implementation notes</summary>

Dattorro input diffuser: a SERIES cascade of N (2-8) coprime Schroeder AllpassDelay sections - flat magnitude (a chain of allpasses is still allpass) but the echo density grows super-linearly (>1000 echoes/s by 50 ms), smearing a sparse tap/early-reflection into a smooth wash. Diffuse sets all stage gains, Size scales the (coprime) delays, Stages the chain length. The S3 disposition is a RECIPE (a series Container of AllpassDelay cores is the golden); this is a thin convenience core with one face. Pre-diffuse before a CombBank/FDN, or use alone for a quick smear; 0 latency

</details>

:::caution[Verify in context]
Ranges and declared latency are product facts. Audible outcome, stability, level, and CPU cost still depend on signal, sample rate, block size, routing, modulation, and surrounding blocks.
:::

