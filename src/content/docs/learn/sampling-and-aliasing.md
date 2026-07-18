---
title: Sampling and aliasing
description: Understand sample rate, Nyquist limits, spectral images, and why nonlinear or time-varying processing can create aliases after input conversion.
sidebar:
  order: 4
---

## Objective

Predict where an out-of-band sinusoidal component appears after sampling, then connect
that model to oscillator design, nonlinear processing, and oversampling.

**Prerequisite:** [DSP foundations](/learn/dsp-foundations/).

## The band-limited condition

Ideal uniform sampling can represent a signal without ambiguity when the continuous-
time signal is sufficiently band-limited below half the sample rate and ideal
reconstruction assumptions hold. Half the sample rate is the **Nyquist frequency**.

At 48 kHz, Nyquist is 24 kHz. This statement does not mean every component below
24 kHz is perfectly captured by a practical converter, nor that processing cannot
later create content above 24 kHz.

## Aliasing

Discrete-time sinusoids separated by integer multiples of the sample rate produce the
same sample sequence. An out-of-band frequency therefore folds into the representable
baseband. One useful calculation is to choose an integer `k` that places:

```text
f_alias = |f - k × sample_rate|
```

between 0 and Nyquist.

For example, a 30 kHz component sampled at 48 kHz appears at 18 kHz. The alias is not a
quiet copy that can be filtered away afterward; it occupies the same band as legitimate
content.

## Processing creates new bandwidth

A band-limited input does not guarantee a band-limited output. Hard clipping, sharp
waveshaping, ring modulation, rapid switching, and naive discontinuous oscillators can
create harmonics or sidebands beyond Nyquist. Those components alias when evaluated at
the base sample rate.

Oversampling raises the processing sample rate, applies boundary filtering, evaluates
the sensitive process, then filters and returns to the host rate. It reduces aliases
only to the extent that its filters, factor, and internal algorithm address the created
bandwidth.

## PatchLab experiment

1. Generate a sine at a moderate level.
2. Pass it through Drive or Clipper.
3. Inspect harmonics with Analyzer at 48 kHz.
4. Raise the input frequency while keeping drive constant.
5. Repeat with the nonlinear block inside Oversample at 1×, 2×, and 4×.
6. Match output level and record alias-region changes, latency, and CPU.

## Common misconception

“Humans cannot hear above 20 kHz, so out-of-band processing does not matter.” The
problem is that aliases return to frequencies below Nyquist, where they can be audible.

## Primary reference

Julius O. Smith III, [*Spectral Audio Signal Processing — Sampling and Reconstruction*](https://ccrma.stanford.edu/~jos/sasp/Sampling_Reconstruction.html).
