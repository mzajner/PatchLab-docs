---
title: "Turing"
description: "LOOPING SHIFT-REGISTER random (Music Thing Turing Machine): a rising Clock edge rotates a Length-bit loop; Mutate = the per-step probability the recycled bit is replaced by a fresh"
sidebar:
  order: 118
---

<small>Generated from PatchLab binary source candidate `99899b76e006` · registry type 117</small>

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
| Length | `length` | 2 to 16 | 8 | steps | 1 |
| Mutate | `mutate` | 0 to 1 | 0.15 | — | 2 |
| Seed | `seed` | 0 to 9999 | 1 | — | 3 |

## Declared ports

- Audio inputs: `Clock`

<details>
<summary>Registry implementation notes</summary>

LOOPING SHIFT-REGISTER random (Music Thing Turing Machine): a rising Clock edge rotates a Length-bit loop; Mutate = the per-step probability the recycled bit is replaced by a fresh random one - Mutate 0 = a LOCKED loop of period Length (a stable evolving-then-repeating pattern), 1 = fully random, in between = a slowly-mutating sequence. Value out = the register's low 8 bits as a 0..1 control (held), Seeded for repeatability. The self-evolving melody/CV source - Turing -> ScaleQuant -> Osc = generative-but-coherent lines

</details>

:::caution[Verify in context]
Ranges and declared latency are product facts. Audible outcome, stability, level, and CPU cost still depend on signal, sample rate, block size, routing, modulation, and surrounding blocks.
:::

