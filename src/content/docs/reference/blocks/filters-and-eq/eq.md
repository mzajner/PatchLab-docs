---
title: "EQ"
description: "single peak/shelf band; M types = Vicanek matched (honest bells near Nyquist, shelves max-flat)"
sidebar:
  order: 24
---

<small>Generated from PatchLab binary source candidate `99899b76e006` · registry type 23</small>

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
| Type | `type` | 0 to 8 | 0 | `Peak`, `LoShelf`, `HiShelf`, `PeakM`, `LoShelfM`, `HiShelfM`, `BellÂ·SVF`, `LoShelfÂ·SVF`, `HiShelfÂ·SVF` | 1 |
| Freq (frequency) | `freq` | 20 to 20000 | 1000 | Hz | 2 |
| Gain (gain) | `gaindb` | -18 to 18 | 0 | dB | 3 |
| Q (resonance) | `q` | 0.2 to 8 | 0.71 | — | 4 |
| Channel | `channel` | 0 to 1 | 0 | `Stereo`, `M/S` | 5 |
| Band 1 | `b0on` | 0 to 1 | 1 | `Off`, `On` | 6 |
| B1 Ch | `b0chan` | 0 to 2 | 0 | `Both`, `L/M`, `R/S` | 7 |
| Band 2 | `on2` | 0 to 1 | 0 | `Off`, `On` | 8 |
| Type 2 | `type2` | 0 to 8 | 0 | `Peak`, `LoShelf`, `HiShelf`, `PeakM`, `LoShelfM`, `HiShelfM`, `BellÂ·SVF`, `LoShelfÂ·SVF`, `HiShelfÂ·SVF` | 9 |
| Freq 2 (frequency) | `freq2` | 20 to 20000 | 80 | Hz | 10 |
| Gain 2 (gain) | `gain2` | -18 to 18 | 0 | dB | 11 |
| Q 2 (resonance) | `q2` | 0.2 to 8 | 0.71 | — | 12 |
| 2 Ch | `chan2` | 0 to 2 | 0 | `Both`, `L/M`, `R/S` | 13 |
| Band 3 | `on3` | 0 to 1 | 0 | `Off`, `On` | 14 |
| Type 3 | `type3` | 0 to 8 | 0 | `Peak`, `LoShelf`, `HiShelf`, `PeakM`, `LoShelfM`, `HiShelfM`, `BellÂ·SVF`, `LoShelfÂ·SVF`, `HiShelfÂ·SVF` | 15 |
| Freq 3 (frequency) | `freq3` | 20 to 20000 | 240 | Hz | 16 |
| Gain 3 (gain) | `gain3` | -18 to 18 | 0 | dB | 17 |
| Q 3 (resonance) | `q3` | 0.2 to 8 | 0.71 | — | 18 |
| 3 Ch | `chan3` | 0 to 2 | 0 | `Both`, `L/M`, `R/S` | 19 |
| Band 4 | `on4` | 0 to 1 | 0 | `Off`, `On` | 20 |
| Type 4 | `type4` | 0 to 8 | 0 | `Peak`, `LoShelf`, `HiShelf`, `PeakM`, `LoShelfM`, `HiShelfM`, `BellÂ·SVF`, `LoShelfÂ·SVF`, `HiShelfÂ·SVF` | 21 |
| Freq 4 (frequency) | `freq4` | 20 to 20000 | 2500 | Hz | 22 |
| Gain 4 (gain) | `gain4` | -18 to 18 | 0 | dB | 23 |
| Q 4 (resonance) | `q4` | 0.2 to 8 | 0.71 | — | 24 |
| 4 Ch | `chan4` | 0 to 2 | 0 | `Both`, `L/M`, `R/S` | 25 |
| Band 5 | `on5` | 0 to 1 | 0 | `Off`, `On` | 26 |
| Type 5 | `type5` | 0 to 8 | 0 | `Peak`, `LoShelf`, `HiShelf`, `PeakM`, `LoShelfM`, `HiShelfM`, `BellÂ·SVF`, `LoShelfÂ·SVF`, `HiShelfÂ·SVF` | 27 |
| Freq 5 (frequency) | `freq5` | 20 to 20000 | 6000 | Hz | 28 |
| Gain 5 (gain) | `gain5` | -18 to 18 | 0 | dB | 29 |
| Q 5 (resonance) | `q5` | 0.2 to 8 | 0.71 | — | 30 |
| 5 Ch | `chan5` | 0 to 2 | 0 | `Both`, `L/M`, `R/S` | 31 |
| Band 6 | `on6` | 0 to 1 | 0 | `Off`, `On` | 32 |
| Type 6 | `type6` | 0 to 8 | 0 | `Peak`, `LoShelf`, `HiShelf`, `PeakM`, `LoShelfM`, `HiShelfM`, `BellÂ·SVF`, `LoShelfÂ·SVF`, `HiShelfÂ·SVF` | 33 |
| Freq 6 (frequency) | `freq6` | 20 to 20000 | 12000 | Hz | 34 |
| Gain 6 (gain) | `gain6` | -18 to 18 | 0 | dB | 35 |
| Q 6 (resonance) | `q6` | 0.2 to 8 | 0.71 | — | 36 |
| 6 Ch | `chan6` | 0 to 2 | 0 | `Both`, `L/M`, `R/S` | 37 |

## Declared ports

- Audio inputs: `A`

<details>
<summary>Registry implementation notes</summary>

single peak/shelf band; M types = Vicanek matched (honest bells near Nyquist, shelves max-flat)

</details>

:::caution[Verify in context]
Ranges and declared latency are product facts. Audible outcome, stability, level, and CPU cost still depend on signal, sample rate, block size, routing, modulation, and surrounding blocks.
:::

