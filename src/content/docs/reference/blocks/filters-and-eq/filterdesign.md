---
title: "FilterDesign"
description: "FILTER DESIGN: coefficient design separated from realization (kernel.filter.design) - the design-time/run-time boundary as a block, NOT a generic 'Filter' node (each Response names"
sidebar:
  order: 183
---

<small>Generated from PatchLab binary source candidate `7fd3876b4e75` · registry type 182</small>

## At a glance

| Property | Value |
| --- | --- |
| Category | [Filters & EQ](../) |
| Signal role | Audio |
| Audio inputs | 1 |
| Audio outputs | 1 |
| MIDI input | No |
| MIDI output | No |
| CPU class | light |
| Reported latency | 0 |

## Parameters

| Parameter | ID | Range | Default | Unit / choices | Mod port |
| --- | --- | --- | --- | --- | ---: |
| Response | `response` | 0 to 4 | 0 | `Bell`, `LoShelf`, `HiShelf`, `LP`, `HP` | 1 |
| Family | `family` | 0 to 5 | 0 | `Butterwth`, `ChebyI`, `ChebyII`, `Elliptic`, `Bessel`, `Legendre` | 2 |
| Order | `order` | 2 to 12 | 4 | — | 3 |
| Freq (frequency) | `freq` | 20 to 20000 | 1000 | Hz | 4 |
| Gain (gain) | `gaindb` | -18 to 18 | 0 | dB | 5 |
| Q (resonance) | `q` | 0.2 to 8 | 0.71 | — | 6 |
| Ripple | `ripple` | 0.1 to 6 | 1 | dB | 7 |
| Stop | `stop` | 20 to 100 | 60 | dB | 8 |

## Declared ports

- Audio inputs: `A`

<details>
<summary>Registry implementation notes</summary>

FILTER DESIGN: coefficient design separated from realization (kernel.filter.design) - the design-time/run-time boundary as a block, NOT a generic 'Filter' node (each Response names its design family). Bell/LoShelf/HiShelf = Simper SVF-EQ coefficient designs realized on the kept SVF kernel (the SVF EQ block's exact loop - its merge home); LP/HP = the classical designers (Butterworth/ChebyI/ChebyII/Elliptic/Bessel/Legendre, chosen by Family) redesigned offline on a param change and CROSSFADED into the shipping Biquad-cascade runner (the Cascade block's exact loop - its redefine target). Gain/Q drive the bell/shelf leg; Family/Order/Ripple/Stop drive the classical leg; coefficients are never redesigned per sample.

</details>

:::caution[Verify in context]
Ranges and declared latency are product facts. Audible outcome, stability, level, and CPU cost still depend on signal, sample rate, block size, routing, modulation, and surrounding blocks.
:::

