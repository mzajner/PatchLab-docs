---
title: "Send"
description: "writes feedback bus 1-8 (Receive reads ~1 block behind)"
sidebar:
  order: 18
---

<small>Generated from PatchLab binary source candidate `99899b76e006` · registry type 17</small>

## At a glance

| Property | Value |
| --- | --- |
| Category | [Routing & Structure](../) |
| Signal role | Utility |
| Audio inputs | 1 |
| Audio outputs | 1 |
| MIDI input | No |
| MIDI output | No |
| CPU class | trivial |
| Reported latency | 0 |

## Parameters

| Parameter | ID | Range | Default | Unit / choices | Mod port |
| --- | --- | --- | --- | --- | ---: |
| Bus | `bus` | 0 to 7 | 0 | `1`, `2`, `3`, `4`, `5`, `6`, `7`, `8` | 1 |
| Gain (gain) | `gain` | -60 to 12 | 0 | dB | 2 |

## Declared ports

- Audio inputs: `A`

## Safety and limits

gain clamps at +12 dB

<details>
<summary>Registry implementation notes</summary>

writes feedback bus 1-8 (Receive reads ~1 block behind)

</details>

:::caution[Verify in context]
Ranges and declared latency are product facts. Audible outcome, stability, level, and CPU cost still depend on signal, sample rate, block size, routing, modulation, and surrounding blocks.
:::

