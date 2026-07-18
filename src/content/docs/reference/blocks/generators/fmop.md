---
title: "FMOp"
description: "DX7-style phase-mod operator: pitch = last MIDI note x Ratio + Fine ct (Base Hz until a note arrives), audio-rate PM input chains operators, internal Feedback bounded at max."
sidebar:
  order: 58
---

<small>Generated from PatchLab binary source candidate `99899b76e006` · registry type 57</small>

## At a glance

| Property | Value |
| --- | --- |
| Category | [Generators](../) |
| Signal role | Audio |
| Audio inputs | 1 |
| Audio outputs | 1 |
| MIDI input | Yes |
| MIDI output | No |
| CPU class | trivial |
| Reported latency | 0 |

## Parameters

| Parameter | ID | Range | Default | Unit / choices | Mod port |
| --- | --- | --- | --- | --- | ---: |
| Ratio (ratio) | `ratio` | 0.25 to 16 | 1 | x | 1 |
| Fine | `fine` | -100 to 100 | 0 | ct | 2 |
| Index (depth) | `index` | 0 to 4 | 1 | — | 3 |
| Feedback (feedback) | `fb` | 0 to 1 | 0 | — | 4 |
| Base (frequency) | `base` | 20 to 4000 | 220 | Hz | 5 |
| Level (level) | `level` | 0 to 1 | 0 | — | 6 |
| Release (time) | `release` | 5 to 2000 | 200 | ms | 7 |

## Declared ports

- Audio inputs: `PM`

## Safety and limits

feedback is internally bounded (DX7 2-tap average, max ~pi rad peak - pitched noise at the extreme by design); deep Index at high pitch aliases (no oversampling yet); pitch holds the LAST note (last-note priority) - Base applies only until the first note. A built-in gate (instant attack + Release) releases the tone to silence on note-off (a note-off is no longer ignored); before any note ever arrives the operator drones free-run so it still works with no MIDI wired

<details>
<summary>Registry implementation notes</summary>

DX7-style phase-mod operator: pitch = last MIDI note x Ratio + Fine ct (Base Hz until a note arrives), audio-rate PM input chains operators, internal Feedback bounded at max. A built-in gate (instant attack + Release) makes a note-off RELEASE the tone to silence (no hung notes); onset stays instant and it drones free-run until the first note arrives. FMOp x2 + ADSR + Multiply = FM keys; silent until Level up

</details>

:::caution[Verify in context]
Ranges and declared latency are product facts. Audible outcome, stability, level, and CPU cost still depend on signal, sample rate, block size, routing, modulation, and surrounding blocks.
:::

