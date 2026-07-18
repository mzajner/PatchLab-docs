---
title: "Width"
description: "M/S width + equal-power pan"
sidebar:
  order: 5
---

<small>Generated from PatchLab binary source candidate `99899b76e006` · registry type 4</small>

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
| Width (width) | `width` | 0 to 2 | 1 | — | 1 |
| Pan (pan) | `pan` | -1 to 1 | 0 | — | 2 |

## Declared ports

- Audio inputs: `A`

<details>
<summary>Registry implementation notes</summary>

M/S width + equal-power pan

</details>

:::caution[Verify in context]
Ranges and declared latency are product facts. Audible outcome, stability, level, and CPU cost still depend on signal, sample rate, block size, routing, modulation, and surrounding blocks.
:::

