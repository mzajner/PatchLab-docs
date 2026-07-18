---
title: "MidiMonitor"
description: "MIDI MONITOR: the event-domain Print - a scrolling inspector of the MIDI stream."
sidebar:
  order: 154
---

<small>Generated from PatchLab binary source candidate `99899b76e006` · registry type 153</small>

## At a glance

| Property | Value |
| --- | --- |
| Category | [Meters & Analysis](../) |
| Signal role | Visual |
| Audio inputs | 0 |
| Audio outputs | 0 |
| MIDI input | Yes |
| MIDI output | Yes |
| CPU class | trivial |
| Reported latency | 0 |

## Parameters

This block declares no editable parameters.

<details>
<summary>Registry implementation notes</summary>

MIDI MONITOR: the event-domain Print - a scrolling inspector of the MIDI stream. PASSTHROUGH (the buffer is untouched): the face lists the last few events as text lines (type, note/CC number, value/velocity, channel - ON C4 v100 ch1 / CC74 = 88 ch1 / PB / AT / PRG), newest at the bottom, plus an activity flash on every event. The 'what is my keyboard/controller actually sending' debug AND agent-legibility tool for the event plane (the audio-plane Print cannot see events). Capture is lock-free (fixed ring of packed atomic words, no strings/allocation on the audio thread); drawFace only reads. No audio path. Native-first. (MNodes MIDI Monitor).

</details>

:::caution[Verify in context]
Ranges and declared latency are product facts. Audible outcome, stability, level, and CPU cost still depend on signal, sample rate, block size, routing, modulation, and surrounding blocks.
:::

