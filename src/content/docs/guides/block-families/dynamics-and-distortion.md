---
title: Using Dynamics & Distortion blocks
description: Control level and nonlinearity with explicit calibration, time behavior, makeup gain, and alias checks.
sidebar:
  order: 4
---

Dynamics blocks respond to level over time. Distortion blocks create new spectral
content. Both depend strongly on signal level.

Use **Comp** or **UpDownComp** when threshold, ratio, timing, and gain behavior are the
question. **Gate** controls low-level passages; **Transient** reshapes attacks and
sustain. **Limiter** belongs at a deliberately measured boundary, not as permission for
an uncontrolled graph.

Use **Drive**, **Clipper**, **Waveshaper**, **TableShaper**, or **Crush** according to the
nonlinearity or reduction mechanism required. Compare at matched output level. A louder
processed path is not evidence of better tone.

## Minimum dynamics test

1. Record input peak/RMS and a steady or stepped stimulus level.
2. Set threshold and ratio.
3. Observe static gain change.
4. Use a transient/step to inspect attack and release.
5. Apply makeup gain only after measuring reduction.

## Minimum nonlinearity test

Use a sine below clipping, then raise drive in known increments. Observe harmonics and
output level. Repeat at a higher fundamental to reveal alias products. If Oversample is
used, compare identical input/output calibration and record its factor, latency, and CPU
cost.

See [Amplitude and decibels](/learn/amplitude-and-decibels/) and the generated
[Dynamics & Distortion reference](/reference/blocks/dynamics-and-distortion/).
