---
title: "Compare"
description: "comparator -> gate 0/1: A >/</= B+Thresh with Schmitt hysteresis - envelope-to-trigger, S&H clocks, gate logic source"
sidebar:
  order: 40
---

<small>Generated from PatchLab binary source candidate `99899b76e006` · registry type 39</small>

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
| Mode | `mode` | 0 to 2 | 0 | `A > B`, `A < B`, `A = B` | 2 |
| Thresh (threshold) | `thresh` | -1 to 1 | 0 | — | 3 |
| Hyst | `hyst` | 0 to 0.5 | 0 | — | 4 |

## Declared ports

- Audio inputs: `A`, `B`

<details>
<summary>Registry implementation notes</summary>

comparator -> gate 0/1: A >/</= B+Thresh with Schmitt hysteresis - envelope-to-trigger, S&H clocks, gate logic source

</details>

:::caution[Verify in context]
Ranges and declared latency are product facts. Audible outcome, stability, level, and CPU cost still depend on signal, sample rate, block size, routing, modulation, and surrounding blocks.
:::

