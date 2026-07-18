---
title: "Add"
description: "A*a + B*b + offset, control-signal algebra"
sidebar:
  order: 15
---

<small>Generated from PatchLab binary source candidate `99899b76e006` · registry type 14</small>

## At a glance

| Property | Value |
| --- | --- |
| Category | [Routing & Structure](../) |
| Signal role | Utility |
| Audio inputs | 2 |
| Audio outputs | 1 |
| MIDI input | No |
| MIDI output | No |
| CPU class | trivial |
| Reported latency | 0 |

## Parameters

| Parameter | ID | Range | Default | Unit / choices | Mod port |
| --- | --- | --- | --- | --- | ---: |
| A Gain (gain) | `a` | -2 to 2 | 1 | — | 2 |
| B Gain (gain) | `b` | -2 to 2 | 1 | — | 3 |
| Offset | `off` | -1 to 1 | 0 | — | 4 |

## Declared ports

- Audio inputs: `A`, `B`

<details>
<summary>Registry implementation notes</summary>

A*a + B*b + offset, control-signal algebra

</details>

:::caution[Verify in context]
Ranges and declared latency are product facts. Audible outcome, stability, level, and CPU cost still depend on signal, sample rate, block size, routing, modulation, and surrounding blocks.
:::

