---
title: Explore delay and feedback safely
description: Measure delay time, raise feedback from zero, and distinguish echoes, pitch bends, and unstable recursion.
sidebar:
  order: 6
---

:::caution[Feedback can become unsafe]
Turn down monitoring, begin with Feedback at zero, and keep Panic available.
:::

## Patch

Place **Delay** between a transient source and AUDIO OUT. Start with Mix below 0.5,
Feedback at 0, and a clearly measurable time such as 250 ms.

Trigger one short impulse or percussive event. The first delayed onset should occur at
the chosen delay time within the measurement tolerance of the running system.

## Add feedback

Raise Feedback in small steps and count repeats. Each repeat should decay when the loop
gain remains below unity under the current topology. Filters, nonlinear stages, or
other gain inside a feedback loop can change that conclusion.

PatchLab's Delay smooths time changes, so moving Time while audio is stored bends pitch
rather than instantaneously relocating every sample. Treat that as time-varying
processing, not a static delay measurement.

## Verify

- Measure onset time with an impulse.
- Record the approximate decay of successive repeats.
- Stop input and observe the full tail.
- Change sample rate and confirm the time in milliseconds remains the intended quantity.
- Test Panic and Resume Output before exploring higher feedback.

For a more structured factory design, inspect [Space Echo](/examples/space-echo.plpatch).
