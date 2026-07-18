---
title: "Scala"
description: "SCALA LOADER: a microtuning-TABLE quantizer - snaps a 0..1 control wire to the nearest tone of an ARBITRARY scale loaded from a Scala .scl file (MicroQuant is parametric N-EDO only"
sidebar:
  order: 148
---

<small>Generated from PatchLab binary source candidate `99899b76e006` · registry type 147</small>

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
| Base | `base` | 0 to 127 | 48 | — | 1 |
| Range | `range` | 1 to 48 | 24 | st | 2 |
| Detune (pitch) | `detune` | -50 to 50 | 0 | ct | 3 |

## Declared ports

- Audio inputs: `A`

<details>
<summary>Registry implementation notes</summary>

SCALA LOADER: a microtuning-TABLE quantizer - snaps a 0..1 control wire to the nearest tone of an ARBITRARY scale loaded from a Scala .scl file (MicroQuant is parametric N-EDO only). Same contract as MicroQuant: input 0..1 -> Base..Base+Range semitones above Base (the 1/1 tonic), snapped to the loaded tuning, out = a FRACTIONAL MIDI NOTE NUMBER (chain Convert(Note>Hz) -> Osc/Filter freq). The .scl path lives in the props bag (path-ref like Sampler): parsed ON THE MESSAGE THREAD into an inactive buffer then published by an ATOMIC POINTER SWAP the audio thread reads (double-buffer). No .scl -> a 12-EDO default (never dead). (.kbm is round-tripped in props but its keyboard mapping is reserved / not yet applied.) The Scala-standard xenharmonic tuning primitive (MNodes CV MicroQuantize Scala gap).

</details>

:::caution[Verify in context]
Ranges and declared latency are product facts. Audible outcome, stability, level, and CPU cost still depend on signal, sample rate, block size, routing, modulation, and surrounding blocks.
:::

