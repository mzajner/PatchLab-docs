---
title: "Goniometer"
description: "stereo Lissajous vectorscope (passthrough): plots L vs R in the 45 deg mid/side frame - a mono signal draws a vertical line, anti-phase a horizontal line, wide stereo fills the fie"
sidebar:
  order: 74
---

<small>Generated from PatchLab binary source candidate `99899b76e006` · registry type 73</small>

## At a glance

| Property | Value |
| --- | --- |
| Category | [Meters & Analysis](../) |
| Signal role | Visual |
| Audio inputs | 1 |
| Audio outputs | 1 |
| MIDI input | No |
| MIDI output | No |
| CPU class | trivial |
| Reported latency | 0 |

## Parameters

This block declares no editable parameters.

## Declared ports

- Audio inputs: `A`

## Safety and limits

audio passes through unchanged; the scatter + correlation are computed off the paint thread (E2 analyzer at ~60 Hz, so the image is a recent window, not the literal current sample); a mono source is a vertical line, a fully decorrelated/wide source fills the field - read the corner correlation number for mono-compatibility

<details>
<summary>Registry implementation notes</summary>

stereo Lissajous vectorscope (passthrough): plots L vs R in the 45 deg mid/side frame - a mono signal draws a vertical line, anti-phase a horizontal line, wide stereo fills the field; shows the phase correlation on its face. The FFT-free image + correlation are computed OFF the paint thread (E2 analyzer). Use it to SEE stereo width and mono-compatibility

</details>

:::caution[Verify in context]
Ranges and declared latency are product facts. Audible outcome, stability, level, and CPU cost still depend on signal, sample rate, block size, routing, modulation, and surrounding blocks.
:::

