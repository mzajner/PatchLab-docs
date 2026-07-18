---
title: "Spectrogram"
description: "SPECTROGRAM: a scrolling waterfall of the signal's spectrum - time (x) against log-frequency (y) against level (colour), the 'what happened over the last N seconds, spectrally' vie"
sidebar:
  order: 163
---

<small>Generated from PatchLab binary source candidate `99899b76e006` · registry type 162</small>

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

| Parameter | ID | Range | Default | Unit / choices | Mod port |
| --- | --- | --- | --- | --- | ---: |
| Window (time) | `window` | 4 to 60 | 8 | s | 1 |
| Floor | `floor` | 0 to 2 | 1 | `-60`, `-90`, `-120` | 2 |

## Declared ports

- Audio inputs: `A`

## Safety and limits

audio is passed through bit-exact (display only); the waterfall is built from the off-thread analyzer's ~60 Hz frames, max-combined per column - the time base is quantized to that cadence (the face prints the ACTUAL span), so sub-16 ms events show at frame resolution, not sample resolution

<details>
<summary>Registry implementation notes</summary>

SPECTROGRAM: a scrolling waterfall of the signal's spectrum - time (x) against log-frequency (y) against level (colour), the 'what happened over the last N seconds, spectrally' view (SPAN/Insight-class metering). PASSTHROUGH - the audio is untouched (insert it inline anywhere); the FFT runs on the off-thread analyzer (~60 Hz), a message-thread timer folds frames into the image (max-combined per column so transients survive), drawFace only blits. Window = 4-60 s of history (quantized to the analyzer cadence, the face shows the ACTUAL span); Floor = the dB floor of the colour map (-60 / -90 / -120). Frequency gridlines at 100 Hz / 1 kHz / 10 kHz. Watch a filter sweep move, a hum line sit, a mix fill in - the history the instantaneous Scope/Analyzer views cannot show.

</details>

:::caution[Verify in context]
Ranges and declared latency are product facts. Audible outcome, stability, level, and CPU cost still depend on signal, sample rate, block size, routing, modulation, and surrounding blocks.
:::

