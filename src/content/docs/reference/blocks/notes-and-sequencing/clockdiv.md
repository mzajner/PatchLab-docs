---
title: "ClockDiv"
description: "CLOCK DIVIDER: passes every Div-th rising Clock edge (a slower clock); Offset shifts which edge in the cycle passes."
sidebar:
  order: 115
---

<small>Generated from PatchLab binary source candidate `99899b76e006` · registry type 114</small>

## At a glance

| Property | Value |
| --- | --- |
| Category | [Notes & Sequencing](../) |
| Signal role | Modulation |
| Audio inputs | 1 |
| Audio outputs | 1 |
| MIDI input | No |
| MIDI output | No |
| CPU class | trivial |
| Reported latency | 0 |

## Parameters

| Parameter | ID | Range | Default | Unit / choices | Mod port |
| --- | --- | --- | --- | --- | ---: |
| Div | `div` | 1 to 16 | 2 | `/1`, `/2`, `/3`, `/4`, `/5`, `/6`, `/7`, `/8`, `/9`, `/10`, `/11`, `/12`, `/13`, `/14`, `/15`, `/16` | 1 |
| Offset | `off` | 0 to 15 | 0 | — | 2 |

## Declared ports

- Audio inputs: `Clock`

<details>
<summary>Registry implementation notes</summary>

CLOCK DIVIDER: passes every Div-th rising Clock edge (a slower clock); Offset shifts which edge in the cycle passes. One master Timer feeding several ClockDivs gives related pulse streams (1/4 vs 1/8 vs 1/16) locked to one clock - polyrhythms and nested grooves from a single source

</details>

:::caution[Verify in context]
Ranges and declared latency are product facts. Audible outcome, stability, level, and CPU cost still depend on signal, sample rate, block size, routing, modulation, and surrounding blocks.
:::

