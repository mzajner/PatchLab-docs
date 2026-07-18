---
title: "Timer"
description: "free or tempo-synced clock emitting 0/1 pulses (Width = duty) - the trigger source for S&H, Random and AR chains"
sidebar:
  order: 47
---

<small>Generated from PatchLab binary source candidate `99899b76e006` · registry type 46</small>

## At a glance

| Property | Value |
| --- | --- |
| Category | [Notes & Sequencing](../) |
| Signal role | Modulation |
| Audio inputs | 0 |
| Audio outputs | 1 |
| MIDI input | No |
| MIDI output | No |
| CPU class | trivial |
| Reported latency | 0 |

## Parameters

| Parameter | ID | Range | Default | Unit / choices | Mod port |
| --- | --- | --- | --- | --- | ---: |
| Rate (rate) | `rate` | 0.02 to 50 | 2 | Hz | 0 |
| Sync | `sync` | 0 to 16 | 0 | `Off`, `4/1`, `2/1`, `1/1`, `1/2D`, `1/2`, `1/2T`, `1/4D`, `1/4`, `1/4T`, `1/8D`, `1/8`, `1/8T`, `1/16D`, `1/16`, `1/16T`, `1/32` | 1 |
| Width (width) | `width` | 0.05 to 0.95 | 0.5 | — | 2 |

<details>
<summary>Registry implementation notes</summary>

free or tempo-synced clock emitting 0/1 pulses (Width = duty) - the trigger source for S&H, Random and AR chains

</details>

:::caution[Verify in context]
Ranges and declared latency are product facts. Audible outcome, stability, level, and CPU cost still depend on signal, sample rate, block size, routing, modulation, and surrounding blocks.
:::

