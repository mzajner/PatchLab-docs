---
title: "Quantize"
description: "snaps control signals to Step multiples (0 = off): LFO/Random -> stepped melodies, Step 1/12 = semitone grid"
sidebar:
  order: 42
---

<small>Generated from PatchLab binary source candidate `99899b76e006` · registry type 41</small>

## At a glance

| Property | Value |
| --- | --- |
| Category | [Modulators](../) |
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
| Step | `step` | 0 to 1 | 0 | — | 1 |

## Declared ports

- Audio inputs: `A`

<details>
<summary>Registry implementation notes</summary>

snaps control signals to Step multiples (0 = off): LFO/Random -> stepped melodies, Step 1/12 = semitone grid

</details>

:::caution[Verify in context]
Ranges and declared latency are product facts. Audible outcome, stability, level, and CPU cost still depend on signal, sample rate, block size, routing, modulation, and surrounding blocks.
:::

