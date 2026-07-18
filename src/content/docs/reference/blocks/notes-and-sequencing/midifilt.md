---
title: "MidiFilt"
description: "MIDI thru/filter: note range, transpose, channel - splits and zones"
sidebar:
  order: 31
---

<small>Generated from PatchLab binary source candidate `99899b76e006` · registry type 30</small>

## At a glance

| Property | Value |
| --- | --- |
| Category | [Notes & Sequencing](../) |
| Signal role | Event |
| Audio inputs | 0 |
| Audio outputs | 0 |
| MIDI input | Yes |
| MIDI output | Yes |
| CPU class | trivial |
| Reported latency | 0 |

## Parameters

| Parameter | ID | Range | Default | Unit / choices | Mod port |
| --- | --- | --- | --- | --- | ---: |
| Lo Note | `lo` | 0 to 127 | 0 | — | 0 |
| Hi Note | `hi` | 0 to 127 | 127 | — | 1 |
| Transp | `tr` | -24 to 24 | 0 | st | 2 |
| Channel | `ch` | 0 to 16 | 0 | — | 3 |

<details>
<summary>Registry implementation notes</summary>

MIDI thru/filter: note range, transpose, channel - splits and zones

</details>

:::caution[Verify in context]
Ranges and declared latency are product facts. Audible outcome, stability, level, and CPU cost still depend on signal, sample rate, block size, routing, modulation, and surrounding blocks.
:::

