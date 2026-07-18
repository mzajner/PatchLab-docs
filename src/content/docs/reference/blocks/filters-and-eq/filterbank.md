---
title: "Filterbank"
description: "N parallel bands (2-32), summed: ParBP = N SVF bandpasses at Octave/Third/Linear-spaced centres between Low and High (vocoder analysis bank, per-band Q); LRTree = a perfect-reconst"
sidebar:
  order: 87
---

<small>Generated from PatchLab binary source candidate `99899b76e006` · registry type 86</small>

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
| Mode | `mode` | 0 to 1 | 0 | `ParBP`, `LRTree` | 1 |
| Bands | `bands` | 2 to 32 | 8 | — | 2 |
| Layout | `layout` | 0 to 2 | 0 | `Octave`, `Third`, `Linear` | 3 |
| Low (frequency) | `low` | 20 to 8000 | 100 | Hz | 4 |
| High (frequency) | `high` | 200 to 20000 | 8000 | Hz | 5 |
| Q (resonance) | `q` | 0.5 to 16 | 4 | — | 6 |

## Declared ports

- Audio inputs: `A`

<details>
<summary>Registry implementation notes</summary>

N parallel bands (2-32), summed: ParBP = N SVF bandpasses at Octave/Third/Linear-spaced centres between Low and High (vocoder analysis bank, per-band Q); LRTree = a perfect-reconstruction Linkwitz-Riley-4 crossover tree (<=8 bands, allpass-corrected so the band sum is FLAT to <0.001 dB - the multiband splitter). One core, not N cabled Crossovers: the bands share layout + sum + (future) per-band buses

</details>

:::caution[Verify in context]
Ranges and declared latency are product facts. Audible outcome, stability, level, and CPU cost still depend on signal, sample rate, block size, routing, modulation, and surrounding blocks.
:::

