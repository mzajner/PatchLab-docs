---
title: "HarmonicBank"
description: "resonant bandpass bank LOCKED to the harmonics of Freq (f0, 2*f0, 3*f0 ...), summed and blended with dry (Mix)."
sidebar:
  order: 127
---

<small>Generated from PatchLab binary source candidate `99899b76e006` · registry type 126</small>

## At a glance

| Property | Value |
| --- | --- |
| Category | [Filters & EQ](../) |
| Signal role | Audio |
| Audio inputs | 1 |
| Audio outputs | 1 |
| MIDI input | No |
| MIDI output | No |
| CPU class | trivial |
| Reported latency | 0 |

## Parameters

| Parameter | ID | Range | Default | Unit / choices | Mod port |
| --- | --- | --- | --- | --- | ---: |
| Freq (frequency) | `freq` | 20 to 2000 | 110 | Hz | 1 |
| Harmonics | `harm` | 1 to 16 | 8 | — | 2 |
| Q (resonance) | `q` | 0.5 to 32 | 8 | — | 3 |
| Mix (mix) | `mix` | 0 to 1 | 1 | — | 4 |

## Declared ports

- Audio inputs: `A`

<details>
<summary>Registry implementation notes</summary>

resonant bandpass bank LOCKED to the harmonics of Freq (f0, 2*f0, 3*f0 ...), summed and blended with dry (Mix). The peaks TRACK the fundamental - feed a rich source (Saw/Pulse/Noise) and sweep Freq for a pitched, vocal/organ/comb-resonant colour. Harmonics sets the count, Q the sharpness. Distinct from Filterbank (arbitrary octave/third/linear spacing) and Formant (fixed vowel formants) - the HISE HarmonicFilter cell

</details>

:::caution[Verify in context]
Ranges and declared latency are product facts. Audible outcome, stability, level, and CPU cost still depend on signal, sample rate, block size, routing, modulation, and surrounding blocks.
:::

