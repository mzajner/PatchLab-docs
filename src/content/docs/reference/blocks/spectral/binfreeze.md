---
title: "BinFreeze"
description: "spectral freeze / hold (inside an STFT zone): when Freeze goes high it latches the current frame's magnitude spectrum and keeps advancing the phase so the held tone SUSTAINS indefi"
sidebar:
  order: 99
---

<small>Generated from PatchLab binary source candidate `99899b76e006` · registry type 98</small>

## At a glance

| Property | Value |
| --- | --- |
| Category | [Spectral](../) |
| Signal role | Audio |
| Audio inputs | 1 |
| Audio outputs | 1 |
| MIDI input | No |
| MIDI output | No |
| CPU class | trivial |
| Reported latency | 0 |

## Parameters

| Parameter | ID | Range | Default | Unit / choices | Mod port |
| --- | --- | --- | --- | --- | ---: |
| Freeze | `freeze` | 0 to 1 | 0 | — | 1 |
| XFade | `xfade` | 0 to 0.99 | 0.5 | — | 2 |

## Declared ports

- Audio inputs: `A`

## Safety and limits

Freeze high latches the magnitude at that instant and sustains forever (the phase keeps advancing so it doesn't buzz); releasing Freeze returns to live. XFade smooths the latch (0 = instant snap, may click). Freeze is a mod target - a static phase would ring metallic, so the advance is always on while held

<details>
<summary>Registry implementation notes</summary>

spectral freeze / hold (inside an STFT zone): when Freeze goes high it latches the current frame's magnitude spectrum and keeps advancing the phase so the held tone SUSTAINS indefinitely without buzz (a static phase = a metallic comb). XFade smooths the latch so engaging freeze is click-free. Freeze is a mod target - gate it from a Timer/MIDI for stutter-freeze. Infinite-sustain pads from any source

</details>

:::caution[Verify in context]
Ranges and declared latency are product facts. Audible outcome, stability, level, and CPU cost still depend on signal, sample rate, block size, routing, modulation, and surrounding blocks.
:::

