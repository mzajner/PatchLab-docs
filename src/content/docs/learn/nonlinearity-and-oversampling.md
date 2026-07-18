---
title: Nonlinearity and oversampling
description: Understand transfer curves, harmonics, intermodulation, level calibration, oversampling filters, latency, and honest alias comparisons.
sidebar:
  order: 10
---

## Objective

Measure how a nonlinear transfer changes spectrum with level and determine whether an
oversampling factor provides a justified improvement for the intended signal.

**Prerequisite:** [Sampling and aliasing](/learn/sampling-and-aliasing/).

## Transfer and level

A memoryless nonlinearity computes `y[n] = f(x[n])`. If `f` is not a straight line, a
sine can produce harmonics. Symmetric and asymmetric curves create different harmonic
relationships; real processors may also contain memory, filtering, hysteresis, or
time-varying behavior.

With several input tones, nonlinearity can create intermodulation products at sums and
differences of integer multiples. The result depends on input spectrum and level, so a
single low-level sine does not characterize an entire distortion processor.

## Oversampling path

A complete oversampling structure:

1. interpolates and low-pass filters to a higher sample rate;
2. evaluates the sensitive inner graph;
3. low-pass filters out-of-band products; and
4. decimates to the host rate.

The factor does not alone specify quality. Filter stopband, transition width, phase,
latency, internal nonlinearity, and parameter modulation all matter.

## PatchLab experiment

Place Drive inside Oversample. Use a sine at a recorded frequency and level. Compare 1×,
2×, 4×, and 8× while matching output level. Measure desired harmonics, alias-region
products, latency, and CPU. Repeat near the upper musical range and with two tones.

If the improvement falls below the listening/measurement requirement while CPU or
latency rises materially, the higher factor is not automatically the better design.

## Common misconception

“Oversampling restores aliases after they occur.” It provides a higher-rate domain and
filtering intended to prevent out-of-band products from folding into the final baseband;
it cannot identify and perfectly remove arbitrary aliases already mixed into the band.

## Primary reference

Julius O. Smith III, [*Spectral Audio Signal Processing*](https://ccrma.stanford.edu/~jos/sasp/).
