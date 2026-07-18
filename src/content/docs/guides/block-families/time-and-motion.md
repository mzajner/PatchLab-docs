---
title: Using Time & Motion blocks
description: Choose delays, modulation effects, pitch processes, and reverbs by state, feedback, modulation, latency, and tail behavior.
sidebar:
  order: 5
---

Time-based processors store earlier signal. Their output can continue after input stops,
and topology changes may expose old state.

- **SampleDelay** and **FixDelay** address precise or fixed delay relationships.
- **Delay**, **Multitap**, **ReverseDelay**, and **AllpassDelay** provide larger or shaped
  echo structures.
- **Chorus**, **Flanger**, **Phaser**, **Tremolo**, **RingMod**, and **WowFlutter** create
  movement through modulation or multiplication.
- **PitchShift** changes pitch with a time-domain window tradeoff.
- **Diffuser**, **CombBank**, **FDN**, **Reverb**, and **Convolution** create spatial or
  response-based tails.
- **Granular** and **Looper** reorganize stored audio over longer gestures.

## Feedback safety

Start feedback at zero. Raise it while observing peak level and tail decay. A stable
setting for one input level or filter position may become unstable after another
parameter changes. Keep `Cmd+Shift+.` available and do not monitor unknown feedback at
high level.

## Verify time behavior

Use an impulse for onset, taps, latency, and decay. Use a sine for modulation sidebands
and pitch. Use program material only after the mechanism is measured.

See the generated [Time & Motion reference](/reference/blocks/time-and-motion/).
