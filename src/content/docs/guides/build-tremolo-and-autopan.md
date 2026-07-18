---
title: Build tremolo and autopan
description: Hear amplitude modulation, then separate linked tremolo from stereo phase-offset motion.
sidebar:
  order: 5
---

## Patch

Place **Tremolo** between a known audio source and AUDIO OUT. Begin at low monitor level
with the current defaults: 5 Hz rate, 0.6 depth, sine shape, linked stereo, and full wet.

At linked stereo, both channels follow the same gain movement. Raise **Stereo** toward
its maximum to offset the right-channel modulation phase; at the extreme, the motion is
perceived as left/right alternation on appropriate stereo monitoring.

## Experiments

1. Set Depth to zero and confirm the modulation disappears.
2. Restore depth and halve Rate; count cycles over a fixed duration.
3. Compare sine and square shapes at the same rate and depth.
4. Raise Stereo, observe correlation/goniometer, then monitor in mono.
5. Reduce Mix and identify the dry contribution.

The waveform label describes the control oscillator, not the audio source. A square
control shape creates abrupt gain transitions and therefore a different sideband/
transient character than a sine at the same nominal rate.

Avoid calling autopan “wider” without a mono check. It is movement between channels,
and its suitability depends on the source and playback context.
