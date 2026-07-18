---
title: "BinShift"
description: "spectral pitch shift by bin remap (inside an STFT zone): moves each bin's magnitude to bin round(k*ratio) with per-bin phase accumulation (the phase-vocoder PSM trick - keeps the s"
sidebar:
  order: 98
---

<small>Generated from PatchLab binary source candidate `99899b76e006` · registry type 97</small>

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
| Shift (pitch) | `cents` | -2400 to 2400 | 0 | ct | 1 |
| Mix (mix) | `mix` | 0 to 1 | 1 | — | 2 |

## Declared ports

- Audio inputs: `A`

## Safety and limits

frequency-domain pitch move (bin remap): formants move WITH the pitch (chipmunk/monster at extremes) - for formant-preserving time-domain shifting use P8 PitchShift. A bin-remap is integer-quantised, so fine shifts smear; large shifts thin the spectrum (bins fall off the top/bottom). Cross-frame phase accumulation uses the zone's TRUE hop (any overlap). Outside an STFT zone the node AUTO-EMBEDS a private 1024/4x framer (works anywhere, adds 1024 smp reported latency)

<details>
<summary>Registry implementation notes</summary>

spectral pitch shift by bin remap (inside an STFT zone): moves each bin's magnitude to bin round(k*ratio) with per-bin phase accumulation (the phase-vocoder PSM trick - keeps the shifted tone continuous, no buzz). Shift in cents (-2400..+2400), Mix blends dry. A frequency-domain pitch move (formant moves with the pitch - for a time-domain PSM see P8 PitchShift)

</details>

:::caution[Verify in context]
Ranges and declared latency are product facts. Audible outcome, stability, level, and CPU cost still depend on signal, sample rate, block size, routing, modulation, and surrounding blocks.
:::

