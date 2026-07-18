---
title: Delay, modulation, and reverb
description: Connect stored samples, fractional delay, combing, feedback, diffusion, and feedback-delay networks to measurable time and frequency behavior.
sidebar:
  order: 8
---

## Objective

Relate a delay's time-domain echo to its phase and comb response, then explain how
modulation and feedback turn delay lines into larger effects.

**Prerequisite:** [Frequency, filters, and phase](/learn/frequency-filters-phase/).

## Delay as memory

An integer delay reads a sample written `D` samples earlier. Its time is `D / sample_rate`.
A fractional delay interpolates between stored samples so delay can vary continuously,
but the interpolation method has its own magnitude and phase error.

Mixing a signal with a delayed copy creates periodic reinforcement and cancellation.
The spacing between adjacent comb features is approximately `1 / delay_seconds`.

## Modulated delay

Chorus, flanging, wow/flutter, and many pitch processes change delay over time. A moving
read position changes apparent pitch. Rate, depth, interpolation, smoothing, and dry/wet
recombination determine the result.

## Feedback and decay

Feeding part of the delayed output back creates repeats. Loop gain and filtering
determine decay by frequency. A loop at or above unity magnitude can sustain or grow;
nonlinear stages and time variation complicate that boundary.

Reverbs use networks of delays, allpasses/diffusers, damping, and mixing to increase
echo density. An FDN uses several delay lines coupled by a feedback matrix. Matrix
energy behavior, delay distribution, damping, and input/output taps all affect decay
and coloration.

## PatchLab experiment

Complete [Explore delay and feedback safely](/guides/build-a-safe-delay/). Then compare
Delay, AllpassDelay, Diffuser, and FDN with an impulse. Record first onset, echo density,
RT60 estimate by band, output level, and tail after input stops.

## Common misconception

“Reverb size is just one longer delay.” Perceived space emerges from many time,
density, frequency, and directional cues; one delay primarily produces a discrete echo
or comb relationship.

## Primary reference

Julius O. Smith III, [*Physical Audio Signal Processing — Artificial Reverberation*](https://ccrma.stanford.edu/~jos/pasp/Artificial_Reverberation.html).
