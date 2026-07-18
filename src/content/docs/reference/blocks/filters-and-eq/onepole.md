---
title: "OnePole"
description: "gentle 6 dB/oct LP/HP tilt + DC Block; tone-shaping in loops where Filter is too steep"
sidebar:
  order: 32
---

<small>Generated from PatchLab binary source candidate `99899b76e006` · registry type 31</small>

## At a glance

| Property | Value |
| --- | --- |
| Category | [Filters & EQ](../) |
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
| Mode | `mode` | 0 to 2 | 0 | `LP`, `HP`, `DC Block` | 1 |
| Cutoff (frequency) | `cutoff` | 20 to 20000 | 1000 | Hz | 2 |

## Declared ports

- Audio inputs: `A`

<details>
<summary>Registry implementation notes</summary>

gentle 6 dB/oct LP/HP tilt + DC Block; tone-shaping in loops where Filter is too steep

</details>

:::caution[Verify in context]
Ranges and declared latency are product facts. Audible outcome, stability, level, and CPU cost still depend on signal, sample rate, block size, routing, modulation, and surrounding blocks.
:::

