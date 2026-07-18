---
title: FFT, STFT, and convolution
description: Relate finite analysis windows, bin spacing, leakage, overlap-add, spectral processing, impulse responses, and latency.
sidebar:
  order: 12
---

## Objective

Choose FFT/STFT settings for a stated time/frequency task and verify identity
reconstruction before applying a spectral operation.

**Prerequisite:** [Sampling and aliasing](/learn/sampling-and-aliasing/).

## Finite transforms

An `N`-point DFT represents a finite window as frequency bins spaced:

```text
bin spacing = sample_rate / N
```

This is spacing, not guaranteed ability to separate every nearby component. Window
shape, signal duration, stationarity, noise, and estimator design affect resolution and
leakage.

## STFT

The short-time Fourier transform analyzes overlapping frames. Window size trades time
localization against bin spacing. Overlap determines hop size and processing cadence.
Analysis/synthesis windows and normalization must satisfy an overlap-add condition for
flat identity reconstruction.

Spectral magnitude and phase jointly describe the frame. Editing magnitude without a
coherent phase strategy can smear or destabilize transients; freezing or shifting bins
has time-domain consequences.

## Convolution

Linear convolution applies an impulse response. Direct convolution cost grows with
impulse length; FFT/partitioned methods reduce cost and latency tradeoffs for long
responses. An impulse response captures a linear time-invariant system under the
measurement conditions. It does not capture arbitrary time variation or nonlinearity.

## PatchLab experiment

1. Put an identity graph inside STFT.
2. Compare source and output at each Size/Overlap/Window setting.
3. Record latency, level, and residual.
4. Add one BinFreeze, BinGate, or BinShift operation.
5. Test sine, impulse, noise, and transient program material.

For Convolution, load a known impulse response, verify onset/latency and tail, then
compare level and channel routing with the source.

## Common misconception

“A larger FFT is simply more accurate.” It gives finer bin spacing but a longer time
window, more latency/state, and poorer localization of rapid changes.

## Primary reference

Julius O. Smith III, [*Spectral Audio Signal Processing — Short-Time Fourier Transform*](https://ccrma.stanford.edu/~jos/sasp/Short_Time_Fourier_Transform.html).
