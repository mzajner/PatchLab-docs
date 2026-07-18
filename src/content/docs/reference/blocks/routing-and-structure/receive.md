---
title: "Receive"
description: "reads a feedback bus - how loops patch in an acyclic graph"
sidebar:
  order: 19
---

<small>Generated from PatchLab binary source candidate `99899b76e006` · registry type 18</small>

## At a glance

| Property | Value |
| --- | --- |
| Category | [Routing & Structure](../) |
| Signal role | Utility |
| Audio inputs | 0 |
| Audio outputs | 1 |
| MIDI input | No |
| MIDI output | No |
| CPU class | trivial |
| Reported latency | ~1 block |

## Parameters

| Parameter | ID | Range | Default | Unit / choices | Mod port |
| --- | --- | --- | --- | --- | ---: |
| Bus | `bus` | 0 to 7 | 0 | `1`, `2`, `3`, `4`, `5`, `6`, `7`, `8` | 0 |
| Gain (gain) | `gain` | -60 to 12 | 0 | dB | 1 |

## Safety and limits

gain clamps at +12 dB; reads ~1 block behind

<details>
<summary>Registry implementation notes</summary>

reads a feedback bus - how loops patch in an acyclic graph

</details>

:::caution[Verify in context]
Ranges and declared latency are product facts. Audible outcome, stability, level, and CPU cost still depend on signal, sample rate, block size, routing, modulation, and surrounding blocks.
:::

