---
title: "Logic"
description: "gate algebra: AND/OR/XOR/NOT on A,B (inputs gate at 0.5, out 0/1) - combine Compare gates into trigger patterns"
sidebar:
  order: 41
---

<small>Generated from PatchLab binary source candidate `99899b76e006` · registry type 40</small>

## At a glance

| Property | Value |
| --- | --- |
| Category | [Notes & Sequencing](../) |
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
| Mode | `mode` | 0 to 3 | 0 | `AND`, `OR`, `XOR`, `NOT` | 2 |

## Declared ports

- Audio inputs: `A`, `B`

<details>
<summary>Registry implementation notes</summary>

gate algebra: AND/OR/XOR/NOT on A,B (inputs gate at 0.5, out 0/1) - combine Compare gates into trigger patterns

</details>

:::caution[Verify in context]
Ranges and declared latency are product facts. Audible outcome, stability, level, and CPU cost still depend on signal, sample rate, block size, routing, modulation, and surrounding blocks.
:::

