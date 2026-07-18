---
title: Measure on the Debug page
description: Select a measurement scope, interpret live and rendered analysis, and avoid conclusions the tools do not support.
sidebar:
  order: 5
---

The Debug page answers a specific question about a specific signal path. Choose the
scope and stimulus before interpreting a trace.

## Choose what is under test

Use **Per-Block** for one block's live telemetry. Use **Group** for a marked sub-chain or
the whole assembled patch.

The fastest routes are:

- right-click a block and choose **Analyze this block**; or
- select several blocks and analyze the selection.

The report label records what the last measurement actually covered. Changing the
selection afterward does not retroactively change that report.

## Live block views

The scope can show a waveform or XY relationship with a selectable trigger and
timebase. The spectrum provides FFT size, window, averaging, vertical range, log/linear
axis, peak hold, freeze, magnitude, phase, and phase-unwrapping controls.

Display options change how evidence is drawn. For example, spectrum tilt or equal-
loudness display weighting must not be confused with a change to the measured signal.
Read the unweighted numerical result when making a quantitative claim.

Some blocks do not publish a live waveform. That is not equivalent to silence; inspect
the output-level meter or use a rendered group measurement.

## Group and whole-patch measurement

A group measurement renders a controlled stimulus through the selected boundary—or
through the whole patch when no blocks are marked—and reports the result. Available
panels cover magnitude/phase response, swept behavior, dynamics/nonlinearity, latency,
and alignment where the selected system supports them.

Copy the summary for a human-readable record, or copy JSON when exact values and
machine comparison matter.

## A defensible measurement

Record at least:

- PatchLab build and measured scope;
- sample rate and block size;
- channel layout;
- stimulus and level;
- warm-up and measurement duration;
- analyzer settings; and
- tolerance or decision threshold.

“The graph looked right” is not evidence for filter slope, gain reduction, latency, or
aliasing.

## Common interpretation errors

- A short FFT window has coarse frequency resolution.
- A long window can hide rapid time variation.
- Peak hold is history, not the current spectrum.
- Frozen traces must retain their measurement settings to be comparable.
- Phase wrapping can look discontinuous without representing a discontinuous system.
- A transfer response for a nonlinear system depends on level and stimulus.
- Correlation does not by itself declare a stereo signal good or bad.

Pair Debug with the relevant [DSP lesson](/learn/dsp-foundations/) so the chosen view
matches the question.
