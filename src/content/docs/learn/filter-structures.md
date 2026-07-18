---
title: Filter structures and resonance
description: Compare one-pole, biquad, state-variable, ladder, FIR, crossover, and allpass structures through response, state, stability, modulation, and latency.
sidebar:
  order: 7
---

## Objective

Choose a filter structure for a stated response and explain the tradeoff beyond its
cutoff label.

**Prerequisite:** [Frequency, filters, and phase](/learn/frequency-filters-phase/).

## Structure matters

A one-pole filter has minimal state and a gentle response. A biquad implements a
second-order rational transfer function whose coefficients set poles and zeros. A
state-variable structure exposes several related responses and is often useful under
modulation. Ladder structures model a cascaded resonant topology and may include
nonlinear behavior. FIR filters use a finite impulse response and can provide designed
phase properties at the cost of more taps and, often, latency.

An allpass can have a flat magnitude response while changing phase. A crossover is a
set of complementary filters whose recombination behavior depends on magnitude, phase,
and routing.

## Resonance and Q

Resonance emphasizes behavior near a pole frequency. The meaning and safe range of Q
or resonance depend on topology. Near extreme settings, coefficient precision,
nonlinear saturation, self-oscillation, and modulation update strategy can matter.

## Modulation

Changing coefficients over time makes the system time-varying. A static magnitude plot
does not predict every artifact from rapid cutoff modulation. Test sweeps at the actual
sample rate and control rate, and distinguish intentional modulation sidebands from
zipper or instability defects.

## PatchLab experiment

Use the [filter measurement guide](/guides/measure-a-filter/) to compare OnePole, SVF,
Biquad, and Ladder at nominally similar cutoff. Record magnitude, phase, resonance,
latency, CPU, and response to a cutoff sweep. Do not force identical parameter numbers
to imply identical acoustic definitions.

## Common misconception

“A 1 kHz cutoff means everything above 1 kHz is removed.” Cutoff is a reference point in
a transition region; attenuation depends on topology, order, Q, and frequency distance.

## Primary references

- Robert Bristow-Johnson, [Audio EQ Cookbook](https://www.w3.org/TR/audio-eq-cookbook/)
- Julius O. Smith III, [*Introduction to Digital Filters*](https://ccrma.stanford.edu/~jos/filters/)
