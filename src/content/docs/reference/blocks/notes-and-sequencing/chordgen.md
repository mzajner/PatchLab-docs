---
title: "ChordGen"
description: "chord generator (note-in -> chord-out): each played note becomes a chord rooted on it (Maj/Min/Maj7/Min7/Dom7/Sus2/Sus4/Dim/Aug/Oct), note-off releases the whole chord."
sidebar:
  order: 79
---

<small>Generated from PatchLab binary source candidate `99899b76e006` · registry type 78</small>

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
| Chord | `type` | 0 to 9 | 0 | `Maj`, `Min`, `Maj7`, `Min7`, `Dom7`, `Sus2`, `Sus4`, `Dim`, `Aug`, `Oct` | 0 |

<details>
<summary>Registry implementation notes</summary>

chord generator (note-in -> chord-out): each played note becomes a chord rooted on it (Maj/Min/Maj7/Min7/Dom7/Sus2/Sus4/Dim/Aug/Oct), note-off releases the whole chord. Notes past MIDI 127 are dropped. Chain before NoteOsc/Sampler for one-finger chords (pitch-wheel and other messages pass through, so a ChordGen -> synth chain still bends)

</details>

:::caution[Verify in context]
Ranges and declared latency are product facts. Audible outcome, stability, level, and CPU cost still depend on signal, sample rate, block size, routing, modulation, and surrounding blocks.
:::

