---
title: "ModalBank"
description: "MODAL RESONATOR BANK (struck-body modal synthesis): the audio IN is the EXCITER (impulse/mallet/noise burst), rung through N (1-8) parallel resonant BANDPASSES at the body's eigenm"
sidebar:
  order: 94
---

<small>Generated from PatchLab binary source candidate `99899b76e006` · registry type 93</small>

## At a glance

| Property | Value |
| --- | --- |
| Category | [Generators](../) |
| Signal role | Audio |
| Audio inputs | 1 |
| Audio outputs | 1 |
| MIDI input | No |
| MIDI output | No |
| CPU class | medium |
| Reported latency | 0 |

## Parameters

| Parameter | ID | Range | Default | Unit / choices | Mod port |
| --- | --- | --- | --- | --- | ---: |
| Material | `material` | 0 to 3 | 0 | `Wood`, `Membrane`, `Bell`, `Harmonic` | 1 |
| Pitch (frequency) | `pitch` | 50 to 2000 | 220 | Hz | 2 |
| Modes | `modes` | 1 to 8 | 5 | — | 3 |
| Decay (time) | `decay` | 0.05 to 8 | 1.5 | s | 4 |
| Damp | `damp` | 0.1 to 2 | 1 | — | 5 |
| Mix (mix) | `mix` | 0 to 1 | 1 | — | 6 |

## Declared ports

- Audio inputs: `A`

<details>
<summary>Registry implementation notes</summary>

MODAL RESONATOR BANK (struck-body modal synthesis): the audio IN is the EXCITER (impulse/mallet/noise burst), rung through N (1-8) parallel resonant BANDPASSES at the body's eigenmodes. Material picks the inharmonic frequency ratios + decay map - Wood (stiff bar 1:3.9:9.5), Membrane (drum Bessel ratios), Bell (inharmonic metal), Harmonic (1:2:3:4 string body); Pitch sets the fundamental, Modes the count, Decay the base ring time (per-mode T60, higher modes decay faster), Damp a global ring scale. Unlike a HarmonicFilter (bell EQ at f0 harmonics, shared Q, no decay) this RINGS - bandpass, per-mode decay, arbitrary inharmonic fi - so it sounds like a real wood/metal/glass body. Parallel-IIR core; SILENT with no exciter; 0 latency

</details>

:::caution[Verify in context]
Ranges and declared latency are product facts. Audible outcome, stability, level, and CPU cost still depend on signal, sample rate, block size, routing, modulation, and surrounding blocks.
:::

