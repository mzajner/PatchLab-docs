---
title: "EventDelay"
description: "MIDI EVENT DELAY (note delay-line): re-emits incoming note on/off events later by a Free Time (0-2000 ms) or a tempo-synced Division, using a sample-clock queue on a 64-bit global "
sidebar:
  order: 106
---

<small>Generated from PatchLab binary source candidate `99899b76e006` · registry type 105</small>

## At a glance

| Property | Value |
| --- | --- |
| Category | [Notes & Sequencing](../) |
| Signal role | Event |
| Audio inputs | 0 |
| Audio outputs | 0 |
| MIDI input | Yes |
| MIDI output | Yes |
| CPU class | trivial |
| Reported latency | 0 |

## Parameters

| Parameter | ID | Range | Default | Unit / choices | Mod port |
| --- | --- | --- | --- | --- | ---: |
| Mode | `mode` | 0 to 1 | 0 | `Free`, `Sync` | 0 |
| Time (time) | `time` | 0 to 2000 | 250 | ms | 1 |
| Div | `div` | 0 to 15 | 11 | `4/1`, `2/1`, `1/1`, `1/2D`, `1/2`, `1/2T`, `1/4D`, `1/4`, `1/4T`, `1/8D`, `1/8`, `1/8T`, `1/16D`, `1/16`, `1/16T`, `1/32` | 2 |

## Safety and limits

delays NOTE on/off events only (pitch-wheel/CC/other messages pass through UNDELAYED at their original time); audio path is empty (events only). Reports 0 host latency - it delays content, not the stream. The delay committed to an event is latched at arrival (no smoothing): changing Time/Division affects only newly-arriving notes, queued notes keep their scheduled time. A shrinking Sync Division cancels the on+off hazard pair (so no off precedes its on); the queue is fixed-capacity (512) and drops on overflow. Free Time tops out at 2000 ms

<details>
<summary>Registry implementation notes</summary>

MIDI EVENT DELAY (note delay-line): re-emits incoming note on/off events later by a Free Time (0-2000 ms) or a tempo-synced Division, using a sample-clock queue on a 64-bit global counter (HISE artificialEvents future-timestamp model) so an onset lands EXACTLY delay-samples later - across buffer boundaries (a delay longer than one block is still sample-exact). Note on/off pairing is preserved (the held length is kept); a shrinking delay (Division change) cancels the hazard pair so an off never precedes its on (fixNoteOnAfterNoteOff). Reports 0 host latency (it delays the events, not the audio stream - audio path is empty); non-note messages (pitch-wheel/CC) pass through undelayed. Chain before NoteOsc/Arp for delayed/echoed MIDI, or feed a second voice for a canon

</details>

:::caution[Verify in context]
Ranges and declared latency are product facts. Audible outcome, stability, level, and CPU cost still depend on signal, sample rate, block size, routing, modulation, and surrounding blocks.
:::

