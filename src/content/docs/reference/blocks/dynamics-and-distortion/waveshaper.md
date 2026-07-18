---
title: "Waveshaper"
description: "memoryless waveshaper, Shape enum Tanh/Atan/Sin/Hard/Soft/Asym/Fold/Cheby/SymFold: odd shapes add odd harmonics, Asym adds 2nd + DC (auto DC-blocked), Fold is a wavefolder, SymFold"
sidebar:
  order: 63
---

<small>Generated from PatchLab binary source candidate `99899b76e006` · registry type 62</small>

## At a glance

| Property | Value |
| --- | --- |
| Category | [Dynamics & Distortion](../) |
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
| Drive (drive) | `drive` | 0 to 36 | 6 | dB | 1 |
| Shape | `shape` | 0 to 8 | 0 | `Tanh`, `Atan`, `Sin`, `Hard`, `Soft`, `Asym`, `Fold`, `Cheby`, `SymFold` | 2 |
| Bias (amount) | `bias` | 0 to 1 | 0.3 | — | 3 |
| Cheby Ord | `chord` | 2 to 6 | 2 | `2nd`, `3rd`, `4th`, `5th`, `6th` | 4 |
| Out (gain) | `out` | -24 to 24 | 0 | dB | 5 |
| Mix (mix) | `mix` | 0 to 1 | 1 | — | 6 |

## Declared ports

- Audio inputs: `A`

## Safety and limits

shapes generate harmonics that alias at high Drive/high pitch - wrap in an Oversample zone (2x/4x/8x) to clean it; Asym and SymFold make DC, auto DC-blocked at the node; Cheby clamps input to +-1 (push Drive to reach the rail before the harmonic appears)

<details>
<summary>Registry implementation notes</summary>

memoryless waveshaper, Shape enum Tanh/Atan/Sin/Hard/Soft/Asym/Fold/Cheby/SymFold: odd shapes add odd harmonics, Asym adds 2nd + DC (auto DC-blocked), Fold is a wavefolder, SymFold folds with Bias as a symmetry offset (West-Coast sweep, DC-blocked), Cheby generates the chosen harmonic (Cheby Ord) - Drive in, Out post-gain; wrap in an Oversample zone to kill aliasing

</details>

:::caution[Verify in context]
Ranges and declared latency are product facts. Audible outcome, stability, level, and CPU cost still depend on signal, sample rate, block size, routing, modulation, and surrounding blocks.
:::

