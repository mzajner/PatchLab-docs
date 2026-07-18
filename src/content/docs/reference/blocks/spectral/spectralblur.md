---
title: "SpectralBlur"
description: "spectral smear (inside an STFT zone): low-passes each bin's magnitude over TIME (Time 0..1, a one-pole across frames) and optionally across BINS (Freq = box-kernel radius), Mix ble"
sidebar:
  order: 100
---

<small>Generated from PatchLab binary source candidate `99899b76e006` · registry type 99</small>

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
| Time | `time` | 0 to 0.999 | 0 | — | 1 |
| Freq | `freq` | 0 to 16 | 0 | bin | 2 |
| Mix (mix) | `mix` | 0 to 1 | 1 | — | 3 |

## Declared ports

- Audio inputs: `A`

<details>
<summary>Registry implementation notes</summary>

spectral smear (inside an STFT zone): low-passes each bin's magnitude over TIME (Time 0..1, a one-pole across frames) and optionally across BINS (Freq = box-kernel radius), Mix blends dry. Smears transients into a wash / blurs the spectral envelope - reverb-like diffusion in the frequency domain, or a 'frozen-ish' smear at high Time

</details>

:::caution[Verify in context]
Ranges and declared latency are product facts. Audible outcome, stability, level, and CPU cost still depend on signal, sample rate, block size, routing, modulation, and surrounding blocks.
:::

