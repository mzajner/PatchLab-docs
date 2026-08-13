---
title: "XFade"
description: "equal-power A/B crossfade"
sidebar:
  order: 14
---

<small>Generated from PatchLab binary source candidate `96ae72bb5451` · registry type 13</small>

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
| A <> B (mix) | `mix` | 0 to 1 | 0.5 | — | 2 |
| Mode | `mode` | 0 to 8 | 0 | `Equal Power`, `Linear`, `RMS`, `Switch`, `Squared`, `Overlap`, `Cosine`, `Harmonics`, `Threshold` | 3 |

## Declared ports

- Audio inputs: `A`, `B`

<details>
<summary>Registry implementation notes</summary>

equal-power A/B crossfade

</details>

:::caution[Verify in context]
Ranges and declared latency are product facts. Audible outcome, stability, level, and CPU cost still depend on signal, sample rate, block size, routing, modulation, and surrounding blocks.
:::

