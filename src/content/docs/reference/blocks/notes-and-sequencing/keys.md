---
title: "Keys"
description: "KEYS: an on-canvas playable keyboard - two octaves of clickable piano keys ON THE FACE emit real note on/offs into the MIDI plane (wire Keys -> NoteOsc/Sampler/Poly and click to he"
sidebar:
  order: 161
---

<small>Generated from PatchLab binary source candidate `99899b76e006` · registry type 160</small>

## At a glance

| Property | Value |
| --- | --- |
| Category | [Notes & Sequencing](../) |
| Signal role | Event |
| Audio inputs | 0 |
| Audio outputs | 0 |
| MIDI input | No |
| MIDI output | Yes |
| CPU class | trivial |
| Reported latency | 0 |

## Parameters

| Parameter | ID | Range | Default | Unit / choices | Mod port |
| --- | --- | --- | --- | --- | ---: |
| Octave | `oct` | -3 to 3 | 0 | — | 0 |
| Velocity | `vel` | 1 to 127 | 100 | — | 1 |
| Hold | `hold` | 0 to 1 | 0 | `Off`, `On` | 2 |

## Safety and limits

notes latched in Hold mode keep sounding until clicked again, right-clicked away, or a panic - they survive patch edits by design. Key state is RUNTIME-ONLY (never saved; reload = silent). Emits on MIDI channel 1. Changing Octave does NOT release sounding notes (they release at their original pitch - the audio thread diffs absolute note numbers, so nothing hangs)

<details>
<summary>Registry implementation notes</summary>

KEYS: an on-canvas playable keyboard - two octaves of clickable piano keys ON THE FACE emit real note on/offs into the MIDI plane (wire Keys -> NoteOsc/Sampler/Poly and click to hear it; no MIDI hardware, no Keys window). Click = play, drag = glissando, Hold latches notes (click a lit key to release; right-click clears everything - drones and chord beds for testing patches hands-free). Octave shifts the two-octave range (base C3); Velocity sets the emitted velocity 1..127. Face keys light while sounding. UI gestures land in an atomic key-state the audio thread diffs, emitting only transitions - allocation-free, a release is never dropped. MIDI out only.

</details>

:::caution[Verify in context]
Ranges and declared latency are product facts. Audible outcome, stability, level, and CPU cost still depend on signal, sample rate, block size, routing, modulation, and surrounding blocks.
:::

