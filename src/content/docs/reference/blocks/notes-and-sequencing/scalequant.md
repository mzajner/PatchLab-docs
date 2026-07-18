---
title: "ScaleQuant"
description: "MUSICAL scale quantizer (the melody-maker): snaps a 0..1 control wire to the nearest in-scale MIDI note."
sidebar:
  order: 110
---

<small>Generated from PatchLab binary source candidate `99899b76e006` · registry type 109</small>

## At a glance

| Property | Value |
| --- | --- |
| Category | [Notes & Sequencing](../) |
| Signal role | Modulation |
| Audio inputs | 1 |
| Audio outputs | 1 |
| MIDI input | No |
| MIDI output | No |
| CPU class | trivial |
| Reported latency | 0 |

## Parameters

| Parameter | ID | Range | Default | Unit / choices | Mod port |
| --- | --- | --- | --- | --- | ---: |
| Scale | `scale` | 0 to 9 | 1 | `Chromatic`, `Major`, `Minor`, `Dorian`, `Phrygian`, `Lydian`, `Mixolyd`, `Locrian`, `MajPent`, `MinPent` | 1 |
| Key | `key` | 0 to 11 | 0 | `C`, `C#`, `D`, `D#`, `E`, `F`, `F#`, `G`, `G#`, `A`, `A#`, `B` | 2 |
| Base | `base` | 0 to 127 | 48 | — | 3 |
| Range | `range` | 1 to 48 | 24 | st | 4 |

## Declared ports

- Audio inputs: `A`

<details>
<summary>Registry implementation notes</summary>

MUSICAL scale quantizer (the melody-maker): snaps a 0..1 control wire to the nearest in-scale MIDI note. Scale = Chromatic/Major/Minor/the modes/pentatonics, Key = tonic pitch class, Base = the note at input 0, Range = span in semitones. Output is a MIDI NOTE NUMBER - chain Convert(Note>Hz) -> Osc/Filter freq. Random/LFO -> ScaleQuant = in-key generative melodies (vs Quantize's bare numeric step snap); quantizes per sample so a swept input glides through the scale degrees

</details>

:::caution[Verify in context]
Ranges and declared latency are product facts. Audible outcome, stability, level, and CPU cost still depend on signal, sample rate, block size, routing, modulation, and surrounding blocks.
:::

