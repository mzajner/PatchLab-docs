---
title: "WaveHistory"
description: "WAVE HISTORY: the seconds-scale rolling min/max waveform scroller - the DAW-arrange 'what did the last N seconds look like' view (a Looper/Recorder/dynamics companion) that neither"
sidebar:
  order: 166
---

<small>Generated from PatchLab binary source candidate `99899b76e006` · registry type 165</small>

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
| Window (time) | `window` | 1 to 30 | 10 | s | 1 |
| Gain (amount) | `gain` | 1 to 8 | 1 | x | 2 |

## Declared ports

- Audio inputs: `A`

## Safety and limits

audio is passed through bit-exact (display only); the min/max envelope is the true per-column peak of the mono sum, the RMS core its energy - the time base is quantized to Window/512 per column (a 30 s window commits a column every ~59 ms at 48 k), so sub-column transients show as the column peak, not a literal sample; Gain only scales the DISPLAY (it never touches the audio)

<details>
<summary>Registry implementation notes</summary>

WAVE HISTORY: the seconds-scale rolling min/max waveform scroller - the DAW-arrange 'what did the last N seconds look like' view (a Looper/Recorder/dynamics companion) that neither the millisecond Scope frame nor the control-rate CVScope can show. The audio thread accumulates a per-column min / max / RMS of the mono sum and commits one column per bucket into lock-free rings (allocation-free); drawFace scrolls oldest->newest, drawing the min/max PEAK envelope as a filled band with a brighter RMS core and V8 phosphor glow (blooming outline + a lit write-head at the newest column). Window = 1-30 s of history; Gain = 1-8x vertical zoom to see quiet passages. PASSTHROUGH: insert it inline anywhere, the audio is untouched.

</details>

:::caution[Verify in context]
Ranges and declared latency are product facts. Audible outcome, stability, level, and CPU cost still depend on signal, sample rate, block size, routing, modulation, and surrounding blocks.
:::

