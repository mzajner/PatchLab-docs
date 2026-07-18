---
title: Measure a filter instead of guessing
description: Use broadband input and Debug to compare cutoff, resonance, magnitude, and phase under recorded conditions.
sidebar:
  order: 4
---

## Goal

Observe how an SVF low-pass response changes when cutoff and resonance move.

## Patch

1. Add **Noise**, **SVF**, and **Meter**.
2. Set Noise to a low nonzero level.
3. Route Noise → SVF → Meter → AUDIO OUT.
4. Leave SVF in low-pass mode with cutoff near 1.2 kHz and moderate resonance.
5. Right-click SVF and choose **Analyze this block**.

Noise is useful for live spectral observation because it excites a broad band. A
rendered transfer measurement is preferable for an exact response claim.

## Predict and observe

Lower cutoff. Energy above the transition should fall relative to energy below it.
Increase resonance cautiously. The region near cutoff should change, but the exact peak
depends on topology, parameter convention, sample rate, and level.

Toggle magnitude and phase independently. The phase trace is evidence that a filter can
change time relationships even when the immediate listening description is “darker.”

## Record

Capture filter type, cutoff, resonance, sample rate, stimulus level, FFT/window settings,
and whether the trace was live or rendered. Without those conditions, two screenshots
are not a controlled comparison.

Read [Frequency, filters, and phase](/learn/frequency-filters-phase/) for the model behind
the experiment.
