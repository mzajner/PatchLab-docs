---
title: "S&H"
description: "sample In on Trig rising edge; Noise + LFO = stepped random"
sidebar:
  order: 30
---

<small>Generated from PatchLab binary source candidate `99899b76e006` · registry type 29</small>

## At a glance

| Property | Value |
| --- | --- |
| Category | [Modulators](../) |
| Signal role | Modulation |
| Audio inputs | 2 |
| Audio outputs | 1 |
| MIDI input | No |
| MIDI output | No |
| CPU class | trivial |
| Reported latency | 0 |

## Parameters

| Parameter | ID | Range | Default | Unit / choices | Mod port |
| --- | --- | --- | --- | --- | ---: |
| Trig Lvl (threshold) | `thresh` | 0.05 to 0.9 | 0.5 | — | 2 |

## Declared ports

- Audio inputs: `In`, `Trig`

<details>
<summary>Registry implementation notes</summary>

sample In on Trig rising edge; Noise + LFO = stepped random

</details>

:::caution[Verify in context]
Ranges and declared latency are product facts. Audible outcome, stability, level, and CPU cost still depend on signal, sample rate, block size, routing, modulation, and surrounding blocks.
:::

