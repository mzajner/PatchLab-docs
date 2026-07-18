---
title: Using Meters & Analysis blocks
description: Select a measurement by the question it answers and preserve settings needed to interpret the result.
sidebar:
  order: 9
---

Analysis is useful only when the view matches the claim.

- **Meter** measures level.
- **Scope**, **CVScope**, and **WaveHistory** show time behavior at different scales.
- **Analyzer** and **Spectrogram** show frequency content over a window or over time.
- **Correlation** and **Goniometer** describe stereo relationships.
- **Tuner** estimates pitch.
- **MidiMonitor** and **Print** reveal events or values.
- **Recorder** captures a signal for later inspection.
- **AutoAlign** supports relative timing/alignment work.

Record window, range, averaging, sample rate, channel, and observation duration. A meter
inserted at one branch does not report the final summed output. An analyzer display
option is not necessarily signal processing.

Where possible, compare a known-positive and known-negative signal so the measurement
proves it can distinguish the condition of interest.

See [Measure on the Debug page](/manual/debug-page/) and the generated
[Meters & Analysis reference](/reference/blocks/meters-and-analysis/).
