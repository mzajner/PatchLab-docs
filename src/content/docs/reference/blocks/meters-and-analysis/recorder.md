---
title: "Recorder"
description: "RECORDER: taps the wire to a WAV file on disk (the maker-loop convenience - capture a patch without a DAW)."
sidebar:
  order: 147
---

<small>Generated from PatchLab binary source candidate `99899b76e006` · registry type 146</small>

## At a glance

| Property | Value |
| --- | --- |
| Category | [Meters & Analysis](../) |
| Signal role | Utility |
| Audio inputs | 1 |
| Audio outputs | 1 |
| MIDI input | No |
| MIDI output | No |
| CPU class | trivial |
| Reported latency | 0 |

## Parameters

| Parameter | ID | Range | Default | Unit / choices | Mod port |
| --- | --- | --- | --- | --- | ---: |
| Record | `arm` | 0 to 1 | 0 | `Idle`, `Rec` | 1 |

## Declared ports

- Audio inputs: `A`

<details>
<summary>Registry implementation notes</summary>

RECORDER: taps the wire to a WAV file on disk (the maker-loop convenience - capture a patch without a DAW). PASSTHROUGH audio. AUDIO-THREAD SAFE: the audio thread only stores samples into a lock-free FIFO (juce::AudioFormatWriter::ThreadedWriter) via an atomic pointer; a background thread owns ALL file IO. Record is a param polled on the message thread (never opens a file on the audio thread); stopping RETIRES the writer for one tick before freeing it so no in-flight block writes to a freed object. Files -> ~/Documents/PatchLab Recordings/PatchLab_<timestamp>.wav (24-bit stereo). Face shows the armed/recording state + elapsed time (MNodes Recorder gap).

</details>

:::caution[Verify in context]
Ranges and declared latency are product facts. Audible outcome, stability, level, and CPU cost still depend on signal, sample rate, block size, routing, modulation, and surrounding blocks.
:::

