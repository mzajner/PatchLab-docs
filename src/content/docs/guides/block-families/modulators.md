---
title: Using Modulators blocks
description: Choose control sources and transforms by range, trigger, rate, smoothing, and destination semantics.
sidebar:
  order: 6
---

A modulator is defined by its output range and timing as much as its shape.

Choose envelopes for triggered contours; LFO/Ramp/Phasor-style sources for continuous
motion; EnvFollow for input-dependent motion; Random, Chaos, and sample/track-and-hold
for variation; KeyTrack, Velocity, MidiCC, and VoiceInfo for performance data; and
MapRange, CurveMap, Math, Clamp, Convert, Quantize, or Smoother to adapt one range to
another.

The category also includes **Const**, **GainComp**, **Math1**, **Math2**, **ADSR**,
**AHDSR**, **AR**, **S&H**, **Accumulate**, **Formula**, **Faders**, **XY**,
**Track&Hold**, **Function**, **MultiEnv**, **CVTranspose**, **LastChanged**, and
**OnLoad**. Use each block's generated page for its actual ports, parameter bounds,
defaults, and latency rather than inferring behavior from its name.

Before connecting, answer:

- Is the source unipolar or bipolar?
- What event starts or samples it?
- Does it run in seconds, hertz, beats, samples, or normalized units?
- What happens at zero and at maximum?
- Does the destination need smoothing?

PatchLab's default parameter modulation moves upward from the base value. Enable
bipolar modulation only when signed travel is the intended relationship, and leave
headroom around the base.

See [Modulation](/concepts/modulation/) and the generated
[Modulators reference](/reference/blocks/modulators/).
