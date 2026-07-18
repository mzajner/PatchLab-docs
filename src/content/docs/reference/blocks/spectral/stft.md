---
title: "STFT"
description: "STFT ZONE (frequency-domain container - the third zone kind after Oversample/Poly): runs its nested graph once per HOP in the FREQUENCY domain."
sidebar:
  order: 95
---

<small>Generated from PatchLab binary source candidate `99899b76e006` · registry type 94</small>

## At a glance

| Property | Value |
| --- | --- |
| Category | [Spectral](../) |
| Signal role | Structure |
| Audio inputs | 1 |
| Audio outputs | 1 |
| MIDI input | Yes |
| MIDI output | No |
| CPU class | trivial |
| Reported latency | one window N (the FFT Size: 512/1024/2048/4096 smp, reported to the host at prepare; default 1024 = 1024 smp). Changing Size/Overlap live reseats the framers (brief click). The bin-ops inside add 0 |
| Macro slots | 8 |

## Parameters

| Parameter | ID | Range | Default | Unit / choices | Mod port |
| --- | --- | --- | --- | --- | ---: |
| Size | `size` | 0 to 3 | 1 | `512`, `1024`, `2048`, `4096` | 9 |
| Overlap | `overlap` | 0 to 2 | 1 | `2x`, `4x`, `8x` | 10 |
| Window | `window` | 0 to 2 | 0 | `Hann`, `Hamming`, `Blckmn` | 11 |

## Declared ports

- Audio inputs: `A`

## Safety and limits

adds one window N of latency (the FFT Size, reported to the host); changing Size/Overlap live reseats the FFT/ring buffers (a brief click). The window is applied analysis+synthesis (phase-vocoder standard) -> COLA-flat reconstruction is +/-0.1 dB at the 4x DEFAULT (Hann^2 is COLA at >=4x overlap; at 2x the passthrough is not perfectly flat - keep >=4x for transparency). Carries the half-spectrum as ch0=magnitude, ch1=phase (radians); the bin-ops inside read/write those channels - placing a non-bin-op audio block inside treats ch0/ch1 as raw audio (garbage spectrum). Cross-frame bin-ops receive the zone's TRUE hop for phase advance (any overlap); a bin-op OUTSIDE any zone AUTO-EMBEDS its own private 1024/4x Hann framer, so it works anywhere at the cost of 1024 smp of reported latency - put it inside a zone to share one framer (and its latency) across several bin-ops

<details>
<summary>Registry implementation notes</summary>

STFT ZONE (frequency-domain container - the third zone kind after Oversample/Poly): runs its nested graph once per HOP in the FREQUENCY domain. The zone windows + FFTs each frame (Size 512/1024/2048/4096, Overlap 2x/4x/8x, Window Hann/Hamming/Blackman) and presents the half-spectrum to the inner graph as TWO channels - ch0 = magnitude, ch1 = phase (radians) - then merges, IFFTs, and overlap-adds. Author bin-ops inside (MagPhase/BinGate/BinShift/BinFreeze/SpectralBlur/CrossSynth) for spectral processing. The window is applied analysis+synthesis (phase-vocoder standard) and COLA-normalised so an identity inner graph reconstructs the input FLAT (+/-0.1 dB at the 4x default). Latency = one window (N samples, reported to the host); changing Size/Overlap live reseats the framers (brief click). Like the other zones: inner graph + macros + serialization untouched, FFT/ring state runtime-only

</details>

:::caution[Verify in context]
Ranges and declared latency are product facts. Audible outcome, stability, level, and CPU cost still depend on signal, sample rate, block size, routing, modulation, and surrounding blocks.
:::

