---
title: Testing DSP systems
description: Turn audible intentions into deterministic fixtures, tolerances, negative controls, real-time checks, and release evidence.
sidebar:
  order: 14
---

## Objective

Design a test that can fail for the defect it claims to detect and that remains stable
across intended platforms and numeric tolerances.

## Match stimulus to claim

| Claim | Useful stimulus/measurement |
| --- | --- |
| Gain | Constant or sine; peak/RMS ratio |
| Frequency response | Impulse, sweep, or transfer measurement |
| Delay/latency | Impulse onset or correlation |
| Dynamics curve | Stepped levels; steady output by step |
| Attack/release | Level step or transient envelope |
| Harmonics/aliasing | Sine or two-tone spectrum |
| Stereo alignment | Impulse/correlation and mono residual |
| Tail/feedback | Impulse followed by sufficient silence |

State sample rate, block size, channels, duration, warm-up, seed, level, and tolerance.
Tolerance should come from expected numerical/measurement variation, not be widened
until a failing implementation passes.

## Positive and negative controls

A positive fixture demonstrates the expected system passes. A negative mutation—wrong
gain, swapped channel, removed delay compensation, disabled smoothing—proves the check
fails for the intended reason. Without that falsification, a green test may be a proxy
that never observed the behavior.

## Layers of evidence

1. Unit/property tests for mathematical invariants.
2. Offline golden renders for audible DSP behavior.
3. Save/load and graph-structure tests.
4. Real-time stress for allocation, race, lifecycle, and deadline hazards.
5. Plugin-format validators.
6. Real-host sessions.
7. Controlled listening for perceptual intent.

No single layer replaces the others.

## PatchLab lesson fixture

For a filter lesson, store the patch and deterministic stimulus. Measure expected gain
at several frequencies with tolerance. Add a negative fixture with the filter bypassed
or wrong cutoff and require failure. Record product/registry revision so a future change
can distinguish intentional behavior from drift.

## Common misconception

“Bit-for-bit equality is always the strongest audio test.” It is useful for deterministic
paths, but can be brittle across legitimate floating-point/SIMD changes and still miss a
wrong reference. Test the property at the tightest justified tolerance and maintain the
reference's provenance.

## Primary references

- [ISO/IEC/IEEE 60559:2020](https://www.iso.org/standard/80985.html), the current ISO publication of IEEE floating-point arithmetic
- PatchLab's executable implementation fixtures in `Source/Main.cpp`, `Source/export_native/harness/`, and `ui/test/`
