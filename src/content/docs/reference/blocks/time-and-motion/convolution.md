---
title: "Convolution"
description: "PARTITIONED FFT CONVOLUTION (uniform overlap-save, zero-latency core): convolves the input against an impulse response split into 256-sample partitions, each pre-FFT'd once; per bl"
sidebar:
  order: 104
---

<small>Generated from PatchLab binary source candidate `99899b76e006` · registry type 103</small>

## At a glance

| Property | Value |
| --- | --- |
| Category | [Time & Motion](../) |
| Signal role | Audio |
| Audio inputs | 1 |
| Audio outputs | 1 |
| MIDI input | No |
| MIDI output | No |
| CPU class | medium |
| Reported latency | 256 smp (the partition FIFO, reported to the host at prepare). The overlap-save CORE is zero-latency; the node buffers the host block into fixed 256-sample partitions, which costs one partition of delay |

## Parameters

| Parameter | ID | Range | Default | Unit / choices | Mod port |
| --- | --- | --- | --- | --- | ---: |
| IR Size | `size` | 0 to 3 | 1 | `S`, `M`, `L`, `XL` | 1 |
| Mix (mix) | `mix` | 0 to 1 | 0.5 | — | 2 |

## Declared ports

- Audio inputs: `A`

## Safety and limits

ships a built-in synthetic decaying-noise room IR (4 lengths via IR Size, energy-normalised so the wet level is sane) - a real sample-file IR (path-ref, off-thread load) is a documented later extension, NOT yet wired. The node adds 256 smp of latency (the partition FIFO, reported) even though the overlap-save core is zero-latency. IR rebuild on an IR Size change reallocates -> do it off the hot path (it is gated to a param change here). Mix 0 = dry only; the IR includes a direct-path spike so the wet keeps the transient

<details>
<summary>Registry implementation notes</summary>

PARTITIONED FFT CONVOLUTION (uniform overlap-save, zero-latency core): convolves the input against an impulse response split into 256-sample partitions, each pre-FFT'd once; per block one forward FFT + K complex multiply-accumulates (a frequency-domain delay line of past input spectra) + one inverse FFT + overlap-add. REUSES mz_fft.h's performComplexForward/performComplexInverse (the P7 inverse, round-trip-proven) - no second FFT. Ships a built-in synthetic decaying-noise room IR in 4 lengths (IR Size S/M/L/XL, 80 ms-1.5 s, energy-normalised) so it is alive out of the box; a sample-file IR (path-ref, off-thread load - the Sampler pattern) is the documented next extension. Output == direct linear convolution of the IR within -80 dB (tests/dsp). The node's fixed-partition FIFO adds 256 smp of latency (reported); the gateway to IR-reverb / cab-sim recipes. Mix blends dry

</details>

:::caution[Verify in context]
Ranges and declared latency are product facts. Audible outcome, stability, level, and CPU cost still depend on signal, sample rate, block size, routing, modulation, and surrounding blocks.
:::

