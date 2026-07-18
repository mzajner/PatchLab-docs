---
title: "MicroQuant"
description: "MICROTONAL quantizer (the xenharmonic melody-maker): snaps a 0..1 control wire to the nearest tone of an N-EDO (Equal Divisions of the Octave) tuning."
sidebar:
  order: 131
---

<small>Generated from PatchLab binary source candidate `99899b76e006` · registry type 130</small>

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
| EDO | `edo` | 2 to 72 | 12 | — | 1 |
| Base | `base` | 0 to 127 | 48 | — | 2 |
| Range | `range` | 1 to 48 | 24 | st | 3 |
| Detune (pitch) | `detune` | -50 to 50 | 0 | ct | 4 |
| System | `system` | 0 to 4 | 0 | `EDO`, `5-limit JI`, `7-limit JI`, `Pythagorean`, `Harmonic` | 5 |

## Declared ports

- Audio inputs: `A`

<details>
<summary>Registry implementation notes</summary>

MICROTONAL quantizer (the xenharmonic melody-maker): snaps a 0..1 control wire to the nearest tone of an N-EDO (Equal Divisions of the Octave) tuning. EDO = steps per octave (12 = standard chromatic, 24 = quarter-tones, 19/31/53 = historic temperaments), Base = the note at input 0, Range = span in semitones, Detune = a global cents offset. Output is a FRACTIONAL MIDI NOTE NUMBER - chain Convert(Note>Hz) -> Osc/Filter freq (the fraction carries the microtones). Random/LFO -> MicroQuant = in-tune xenharmonic melodies; the equal-temperament counterpart to ScaleQuant's 12-TET diatonic snap (the microtonality niche neither rival's scale node covers); quantizes per sample

</details>

:::caution[Verify in context]
Ranges and declared latency are product facts. Audible outcome, stability, level, and CPU cost still depend on signal, sample rate, block size, routing, modulation, and surrounding blocks.
:::

