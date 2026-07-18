---
title: "Analyzer"
description: "ANALYZER: the dual-input OVERLAY spectrum analyzer - the pre/post COMPARE view (main vs aux across an effect chain)."
sidebar:
  order: 165
---

<small>Generated from PatchLab binary source candidate `99899b76e006` · registry type 164</small>

## At a glance

| Property | Value |
| --- | --- |
| Category | [Meters & Analysis](../) |
| Signal role | Visual |
| Audio inputs | 2 |
| Audio outputs | 1 |
| MIDI input | No |
| MIDI output | No |
| CPU class | trivial |
| Reported latency | 0 |

## Parameters

| Parameter | ID | Range | Default | Unit / choices | Mod port |
| --- | --- | --- | --- | --- | ---: |
| Peak Hold | `peak` | 0 to 1 | 0 | `Off`, `Hold` | 2 |
| Avg | `avg` | 0 to 2 | 1 | `Off`, `Fast`, `Slow` | 3 |
| Floor | `floor` | 0 to 2 | 1 | `-60`, `-90`, `-120` | 4 |

## Declared ports

- Audio inputs: `A`, `B`

## Safety and limits

the MAIN input (A) is passed through bit-exact; B (aux) is read-only (feed the reference into it). Both spectra are mono-summed and FFT'd off-thread (E2, ~60 Hz) - the plot is a recent averaged frame, not the instantaneous sample; Avg Slow settles more but lags fast transients, Peak Hold accumulates until you toggle it Off. dB values are relative (windowed magnitude), the log-frequency axis matches Scope/Spectrogram; unconnected B simply shows nothing for that curve

<details>
<summary>Registry implementation notes</summary>

ANALYZER: the dual-input OVERLAY spectrum analyzer - the pre/post COMPARE view (main vs aux across an effect chain). TWO stereo inputs (A = main, B = aux); each is mono-summed and FFT'd on the off-thread analyzer (~60 Hz, two 1024-pt transforms, never on the audio or paint thread - E2/V1). drawFace overlays them on a shared LOG-frequency axis: A filled + glowing (cyan), B a line (amber). Avg = exponential magnitude smoothing (Off/Fast/Slow); Peak Hold latches the highest magnitude per bin as a bright trace; Floor sets the plot's dB floor (-60/-90/-120); a peak-frequency readout marks A's dominant bin. PASSTHROUGH of the main input (A rides straight through - insert it after the block you want to watch, feed the reference into B). Frequency grid at 100 Hz / 1 kHz / 10 kHz. Two Analyzers merge more taps if you need >2.

</details>

:::caution[Verify in context]
Ranges and declared latency are product facts. Audible outcome, stability, level, and CPU cost still depend on signal, sample rate, block size, routing, modulation, and surrounding blocks.
:::

