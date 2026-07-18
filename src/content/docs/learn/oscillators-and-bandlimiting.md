---
title: Oscillators and band-limiting
description: Relate waveform discontinuities to harmonic series, aliasing, tuning, phase accumulation, and practical oscillator tests.
sidebar:
  order: 5
---

## Objective

Explain why a naive saw or square aliases at high pitch and compare oscillator methods
under a controlled frequency sweep.

**Prerequisite:** [Sampling and aliasing](/learn/sampling-and-aliasing/).

## Phase accumulation

A basic digital oscillator advances a normalized phase by `frequency / sample_rate`
each sample and wraps after one cycle. The waveform maps phase to amplitude.

A sine is smooth and contains one ideal spectral component. Saw and square waveforms
contain discontinuities and ideal harmonic series extending without a finite upper
limit. Sampling a naive discontinuity therefore creates harmonics above Nyquist, which
alias.

## Practical band-limiting methods

- **Additive synthesis** includes only harmonics below Nyquist.
- **Band-limited tables** select or interpolate among tables with appropriate harmonic
  content.
- **BLEP/polyBLEP** corrects the local discontinuity over a short interval.
- **Oversampling** gives the discontinuity and filter more bandwidth, at additional
  cost and latency/filter tradeoffs.

No method is “alias-free” without a defined threshold, frequency range, modulation
condition, sample rate, and measurement floor.

## Tuning and modulation

Pitch accuracy depends on phase increment and parameter mapping. Fast frequency changes
also test smoothing and modulation semantics. Excessive smoothing can make pitch
sluggish; insufficient smoothing can create zipper components.

## PatchLab experiment

1. Route Osc to Analyzer and Meter at a conservative level.
2. Compare sine, triangle, saw, and square at 110 Hz.
3. Repeat at progressively higher fundamentals.
4. Count expected harmonics below Nyquist and identify components that do not belong to
   that series.
5. Compare available naive and band-limited modes under identical level and frequency.
6. Use Tuner to check pitch at several notes rather than one calibration point.

## Common misconception

“A square wave contains only the fundamental plus one high frequency.” An ideal
50-percent square contains an infinite series of odd harmonics; practical band-limited
implementations approximate that series within the available band.

## Primary reference

Julius O. Smith III, [*Physical Audio Signal Processing — Virtual Musical Instruments*](https://ccrma.stanford.edu/~jos/pasp/Virtual_Musical_Instruments.html).
