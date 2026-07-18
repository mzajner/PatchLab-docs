---
title: "FIR"
description: "linear-phase windowed-sinc FIR: a symmetric kernel (LP/HP/BP/BS at Cutoff, BP/BS width = BW) windowed by Rect/Hann/Hamming/Blackman/Kaiser(Beta), Taps 31-511 (odd forced)."
sidebar:
  order: 86
---

<small>Generated from PatchLab binary source candidate `99899b76e006` · registry type 85</small>

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
| Reported latency | (Taps-1)/2 samples of linear-phase group delay (reported to the host so it trims it; e.g. 101 taps = 50 smp). The only IIR/FIR filter here with latency - all the others are 0 |

## Parameters

| Parameter | ID | Range | Default | Unit / choices | Mod port |
| --- | --- | --- | --- | --- | ---: |
| Type | `type` | 0 to 3 | 0 | `LP`, `HP`, `BP`, `BS` | 1 |
| Cutoff (frequency) | `cutoff` | 20 to 20000 | 2000 | Hz | 2 |
| BW (width) | `bw` | 50 to 8000 | 1000 | Hz | 3 |
| Taps | `taps` | 31 to 511 | 101 | — | 4 |
| Window | `window` | 0 to 4 | 1 | `Rect`, `Hann`, `Hamming`, `Blackman`, `Kaiser` | 5 |
| Beta | `beta` | 1 to 12 | 6 | — | 6 |

## Declared ports

- Audio inputs: `A`

<details>
<summary>Registry implementation notes</summary>

linear-phase windowed-sinc FIR: a symmetric kernel (LP/HP/BP/BS at Cutoff, BP/BS width = BW) windowed by Rect/Hann/Hamming/Blackman/Kaiser(Beta), Taps 31-511 (odd forced). Phase is exactly linear -> the group delay is the constant (M-1)/2 samples, REPORTED to the host so it trims it (the only block here with latency). Stopband depth follows the window (Blackman/Kaiser deepest). Kernel built offline on a param change, never per sample - the clean, phase-honest filter (mastering / crossover / measurement)

</details>

:::caution[Verify in context]
Ranges and declared latency are product facts. Audible outcome, stability, level, and CPU cost still depend on signal, sample rate, block size, routing, modulation, and surrounding blocks.
:::

