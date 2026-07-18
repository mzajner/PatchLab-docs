---
title: "Burst"
description: "RATCHET / burst generator: on each rising Trig edge, fires Count sub-pulses spaced at Rate Hz (the first lands on the edge)."
sidebar:
  order: 116
---

<small>Generated from PatchLab binary source candidate `99899b76e006` · registry type 115</small>

## At a glance

| Property | Value |
| --- | --- |
| Category | [Notes & Sequencing](../) |
| Signal role | Modulation |
| Audio inputs | 1 |
| Audio outputs | 1 |
| MIDI input | No |
| MIDI output | No |
| CPU class | trivial |
| Reported latency | 0 |

## Parameters

| Parameter | ID | Range | Default | Unit / choices | Mod port |
| --- | --- | --- | --- | --- | ---: |
| Count | `count` | 1 to 16 | 4 | — | 1 |
| Rate (rate) | `rate` | 1 to 100 | 20 | Hz | 2 |

## Declared ports

- Audio inputs: `Trig`

<details>
<summary>Registry implementation notes</summary>

RATCHET / burst generator: on each rising Trig edge, fires Count sub-pulses spaced at Rate Hz (the first lands on the edge). Timer -> Burst -> AR = drum rolls / ratcheted hits; Sequencer.Gate -> Burst = per-step ratchets. Count 1 = passthrough - a controllable clock multiplier on demand

</details>

:::caution[Verify in context]
Ranges and declared latency are product facts. Audible outcome, stability, level, and CPU cost still depend on signal, sample rate, block size, routing, modulation, and surrounding blocks.
:::

