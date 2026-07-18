---
title: "Euclidean"
description: "EUCLIDEAN RHYTHM generator: a rising Clock edge advances a step (mod Steps); Gate out pulses on each Euclidean onset - Fills hits distributed as evenly as possible over Steps (Bjor"
sidebar:
  order: 117
---

<small>Generated from PatchLab binary source candidate `99899b76e006` · registry type 116</small>

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
| Steps | `steps` | 1 to 32 | 16 | steps | 1 |
| Fills | `fills` | 0 to 32 | 4 | — | 2 |
| Rotate | `rot` | 0 to 31 | 0 | — | 3 |

## Declared ports

- Audio inputs: `Clock`

<details>
<summary>Registry implementation notes</summary>

EUCLIDEAN RHYTHM generator: a rising Clock edge advances a step (mod Steps); Gate out pulses on each Euclidean onset - Fills hits distributed as evenly as possible over Steps (Bjorklund/Bresenham), Rotate shifts the pattern. E(3,8) = the tresillo, E(5,8) the cinquillo, E(4,16) four-on-the-floor - generative grooves from three knobs (Timer -> Euclidean -> AR/drum)

</details>

:::caution[Verify in context]
Ranges and declared latency are product facts. Audible outcome, stability, level, and CPU cost still depend on signal, sample rate, block size, routing, modulation, and surrounding blocks.
:::

