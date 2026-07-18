---
title: "Ladder"
description: "Moog 4-pole ladder, ZDF/TPT closed-form loop (Zavalishin S5/S6): 4 cascaded TPT one-poles + global feedback solved in closed form so Cutoff stays click-free under audio-rate mod (t"
sidebar:
  order: 84
---

<small>Generated from PatchLab binary source candidate `99899b76e006` · registry type 83</small>

## At a glance

| Property | Value |
| --- | --- |
| Category | [Filters & EQ](../) |
| Signal role | Audio |
| Audio inputs | 2 |
| Audio outputs | 1 |
| MIDI input | No |
| MIDI output | No |
| CPU class | light |
| Reported latency | 0 |

## Parameters

| Parameter | ID | Range | Default | Unit / choices | Mod port |
| --- | --- | --- | --- | --- | ---: |
| Poles | `poles` | 0 to 2 | 2 | `1 (6)`, `2 (12)`, `4 (24)` | 2 |
| Cutoff (frequency) | `cutoff` | 20 to 20000 | 1200 | Hz | 3 |
| Reso (resonance) | `res` | 0 to 1 | 0.3 | — | 4 |
| Drive (drive) | `drive` | 0.5 to 8 | 1 | — | 5 |
| Nonlin | `nl` | 0 to 1 | 1 | `Linear`, `Tanh` | 6 |
| Mod Oct (depth) | `modoct` | 0 to 6 | 0 | — | 7 |

## Declared ports

- Audio inputs: `In`, `Mod`

<details>
<summary>Registry implementation notes</summary>

Moog 4-pole ladder, ZDF/TPT closed-form loop (Zavalishin S5/S6): 4 cascaded TPT one-poles + global feedback solved in closed form so Cutoff stays click-free under audio-rate mod (the Mod Oct port = wah/sweep). Reso 0..1 drives k toward self-oscillation (rings a sine at Cutoff near the top); Drive into a tanh transistor stage (Nonlin = Linear/Tanh) for the squelchy character - pair with an Oversample zone when driven hard. Poles tap 6/12/24 dB/oct. Stable by clamp (k<4.1, fc<0.49*fs) + denormal flush

</details>

:::caution[Verify in context]
Ranges and declared latency are product facts. Audible outcome, stability, level, and CPU cost still depend on signal, sample rate, block size, routing, modulation, and surrounding blocks.
:::

