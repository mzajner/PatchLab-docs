---
title: "Crossover"
description: "splits to Low/High outs at Xover (LR4/LR2; bands sum flat) - the multiband cell, stack for 3+ bands"
sidebar:
  order: 35
---

<small>Generated from PatchLab binary source candidate `99899b76e006` · registry type 34</small>

## At a glance

| Property | Value |
| --- | --- |
| Category | [Filters & EQ](../) |
| Signal role | Audio |
| Audio inputs | 1 |
| Audio outputs | 2 |
| MIDI input | No |
| MIDI output | No |
| CPU class | trivial |
| Reported latency | 0 |

## Parameters

| Parameter | ID | Range | Default | Unit / choices | Mod port |
| --- | --- | --- | --- | --- | ---: |
| Mode | `mode` | 0 to 1 | 0 | `LR4`, `LR2` | 1 |
| Xover (frequency) | `xover` | 20 to 20000 | 1000 | Hz | 2 |

## Declared ports

- Audio inputs: `A`

<details>
<summary>Registry implementation notes</summary>

splits to Low/High outs at Xover (LR4/LR2; bands sum flat) - the multiband cell, stack for 3+ bands

</details>

:::caution[Verify in context]
Ranges and declared latency are product facts. Audible outcome, stability, level, and CPU cost still depend on signal, sample rate, block size, routing, modulation, and surrounding blocks.
:::

