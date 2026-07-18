---
title: "PitchShift"
description: "TIME-DOMAIN pitch shifter (dual-head crossfade PSM, the SoundTouch/Bode form): two read heads sweep one delay line in antiphase (1/2 window apart) with an equal-power crossfade hid"
sidebar:
  order: 102
---

<small>Generated from PatchLab binary source candidate `99899b76e006` · registry type 101</small>

## At a glance

| Property | Value |
| --- | --- |
| Category | [Time & Motion](../) |
| Signal role | Audio |
| Audio inputs | 1 |
| Audio outputs | 1 |
| MIDI input | No |
| MIDI output | No |
| CPU class | light |
| Reported latency | Mode Spectral (the default): a FIXED 1024 smp (the private STFT window, reported to the host at the mode switch). Mode Time: signal-dependent ~1/2 Window (the average read depth, NOT reported as fixed: a 80 ms window ~ 40 ms group delay) - time-domain shifters trade window length for warble |

## Parameters

| Parameter | ID | Range | Default | Unit / choices | Mod port |
| --- | --- | --- | --- | --- | ---: |
| Pitch (pitch) | `pitch` | -24 to 24 | 0 | st | 1 |
| Fine (pitch) | `fine` | -100 to 100 | 0 | ct | 2 |
| Window (time) | `window` | 5 to 100 | 80 | ms | 3 |
| Mix (mix) | `mix` | 0 to 1 | 1 | — | 4 |
| Mode | `mode` | 0 to 1 | 0 | `Spectral`, `Time` | 5 |

## Declared ports

- Audio inputs: `A`

## Safety and limits

TWO engines via Mode. Spectral (the DEFAULT): phase-locked STFT shifter (peak-region mapping + rigid phase locking) - warble-free (<0.2% envelope ripple, <1 cent), FIXED 1024 smp reported latency, Window is IGNORED, and it does NOT fuse/export (no Cmajor mirror - set Mode=Time to export). Time: the dual-head PSM - zero reported latency (signal-dependent ~1/2 Window group delay), exact ratio (<0.3 cents) at a long Window but SHORT windows add audible warble/AM (the documented tradeoff); this is the Cmajor-mirrored, exportable mode. Both: formants move WITH the pitch (chipmunk/monster at extremes); Pitch + Fine smoothed (no zipper); ratio clamped to +/-2 octaves internally

<details>
<summary>Registry implementation notes</summary>

TIME-DOMAIN pitch shifter (dual-head crossfade PSM, the SoundTouch/Bode form): two read heads sweep one delay line in antiphase (1/2 window apart) with an equal-power crossfade hiding the wrap, so a sine moves by exactly 2^(st/12) - Pitch +/-24 st + Fine +/-100 ct (ratio is per-sample smoothed, no zipper on a Pitch mod). Window 5-100 ms trades warble for echo/latency (longer = cleaner ratio, ~1/2-window latency); Mix blends dry. Formants move WITH the pitch (chipmunk/monster at extremes - the natural time-domain behaviour). Distinct from the spectral BinShift (frequency-domain, inside an STFT zone); this needs no zone and runs O(1)/sample (2 Hermite reads + a crossfade, no FFT). Verified +/-0.3 cents -12..+12 st at the 100 ms window

</details>

:::caution[Verify in context]
Ranges and declared latency are product facts. Audible outcome, stability, level, and CPU cost still depend on signal, sample rate, block size, routing, modulation, and surrounding blocks.
:::

