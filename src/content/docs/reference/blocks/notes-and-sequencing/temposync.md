---
title: "TempoSync"
description: "host BPM (120 unhosted) -> raw ms or Hz at a musical division (D dotted, T triplet) - clock values for Delay-Time/Math chains"
sidebar:
  order: 44
---

<small>Generated from PatchLab binary source candidate `99899b76e006` · registry type 43</small>

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
| Div | `div` | 0 to 15 | 7 | `4/1`, `2/1`, `1/1`, `1/2D`, `1/2`, `1/2T`, `1/4D`, `1/4`, `1/4T`, `1/8D`, `1/8`, `1/8T`, `1/16D`, `1/16`, `1/16T`, `1/32` | 0 |
| Out | `out` | 0 to 1 | 0 | `ms`, `Hz` | 1 |

## Safety and limits

outputs raw ms/Hz magnitudes (e.g. 500), not 0..1 - feed Math/Convert chains, not Mod ports directly

<details>
<summary>Registry implementation notes</summary>

host BPM (120 unhosted) -> raw ms or Hz at a musical division (D dotted, T triplet) - clock values for Delay-Time/Math chains

</details>

:::caution[Verify in context]
Ranges and declared latency are product facts. Audible outcome, stability, level, and CPU cost still depend on signal, sample rate, block size, routing, modulation, and surrounding blocks.
:::

