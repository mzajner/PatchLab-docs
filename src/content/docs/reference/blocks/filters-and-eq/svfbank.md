---
title: "SVFBank"
description: "SVF BANK: the parametric resonator bank - ONE structure, FOUR layout policies, absorbing the 'N SVFs + layout data' family (Filterbank/Formant/HarmonicBank are its recipes)."
sidebar:
  order: 182
---

<small>Generated from PatchLab binary source candidate `7fd3876b4e75` · registry type 181</small>

## At a glance

| Property | Value |
| --- | --- |
| Category | [Filters & EQ](../) |
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
| Layout | `layout` | 0 to 3 | 0 | `ParBP`, `LRTree`, `Formant`, `Harmonic` | 1 |
| Bands | `bands` | 1 to 32 | 8 | — | 2 |
| Spacing | `spacing` | 0 to 2 | 0 | `Octave`, `Third`, `Linear` | 3 |
| Low (frequency) | `low` | 20 to 8000 | 100 | Hz | 4 |
| High (frequency) | `high` | 200 to 20000 | 8000 | Hz | 5 |
| Q (resonance) | `q` | 0.2 to 32 | 4 | — | 6 |
| Voice | `voice` | 0 to 3 | 2 | `Soprano`, `Alto`, `Tenor`, `Bass` | 7 |
| Morph | `morph` | 0 to 1 | 0 | — | 8 |
| Shift | `shift` | 0.25 to 4 | 1 | — | 9 |
| Mix (mix) | `mix` | 0 to 1 | 1 | — | 10 |

## Declared ports

- Audio inputs: `A`

<details>
<summary>Registry implementation notes</summary>

SVF BANK: the parametric resonator bank - ONE structure, FOUR layout policies, absorbing the 'N SVFs + layout data' family (Filterbank/Formant/HarmonicBank are its recipes). Layout ParBP = N log/linear-spaced SVF bandpasses (vocoder analysis); LRTree = perfect-reconstruction crossover tree whose bands SUM FLAT (the <0.001 dB guarantee, reused from the shipping Filterbank core); Formant = 3 bells on the classic vowel tables, Morph glides A-E-I-O-U (the tables are data, not structure); Harmonic = up to 16 bells locked to k*f0 so the color tracks a fundamental. Low doubles as f0 in Harmonic layout; Voice/Morph/Shift act only in Formant layout; each layout clamps Bands/Q to its own native range. Every layout's inner loop is bit-identical to the block it absorbs.

</details>

:::caution[Verify in context]
Ranges and declared latency are product facts. Audible outcome, stability, level, and CPU cost still depend on signal, sample rate, block size, routing, modulation, and surrounding blocks.
:::

