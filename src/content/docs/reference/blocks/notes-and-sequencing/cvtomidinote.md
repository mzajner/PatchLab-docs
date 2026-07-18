---
title: "CVToMidiNote"
description: "CV -> MIDI NOTE: the one missing MIDI-bridge direction (MNodes MIDI Note Trigger)."
sidebar:
  order: 144
---

<small>Generated from PatchLab binary source candidate `99899b76e006` · registry type 143</small>

## At a glance

| Property | Value |
| --- | --- |
| Category | [Notes & Sequencing](../) |
| Signal role | Event |
| Audio inputs | 2 |
| Audio outputs | 0 |
| MIDI input | No |
| MIDI output | Yes |
| CPU class | trivial |
| Reported latency | 0 |

## Parameters

| Parameter | ID | Range | Default | Unit / choices | Mod port |
| --- | --- | --- | --- | --- | ---: |
| Pitch In | `pmode` | 0 to 1 | 0 | `0..1>Range`, `Note# in` | 2 |
| Lo Note | `lo` | 0 to 127 | 36 | — | 3 |
| Hi Note | `hi` | 0 to 127 | 84 | — | 4 |
| Velocity | `vel` | 1 to 127 | 100 | — | 5 |
| Channel | `ch` | 1 to 16 | 1 | — | 6 |
| Retrig | `retrig` | 0 to 1 | 0 | `Off`, `On` | 7 |

## Declared ports

- Audio inputs: `A`, `B`

<details>
<summary>Registry implementation notes</summary>

CV -> MIDI NOTE: the one missing MIDI-bridge direction (MNodes MIDI Note Trigger). Pitch-CV + Gate inputs -> MIDI note on/off out. A rising Gate edge (Schmitt at 0.5) latches the pitch and emits a note-on; the Gate falling emits the note-off; Retrig re-fires on a note change while held (mono legato). Pitch In = '0..1>Range' maps the CV across Lo..Hi (LFO/Random/Sequencer -> melodies) or 'Note# in' reads the CV as a raw MIDI note number (chain ScaleQuant/MicroQuant straight in). Velocity + Channel set the emitted note; two CV inputs + MIDI out (no audio out). Unlocks MIDI Scale / Riff / arpeggiated-CV patches. Allocation-free (out pre-sized).

</details>

:::caution[Verify in context]
Ranges and declared latency are product facts. Audible outcome, stability, level, and CPU cost still depend on signal, sample rate, block size, routing, modulation, and surrounding blocks.
:::

