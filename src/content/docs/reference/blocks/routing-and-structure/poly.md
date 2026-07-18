---
title: "Poly"
description: "polyphony zone (container variant): CLONES its inner graph per voice (Voices param, up to 16) and fans each held note to its own voice clone, summing the outputs - author NoteOsc/S"
sidebar:
  order: 80
---

<small>Generated from PatchLab binary source candidate `99899b76e006` · registry type 79</small>

## At a glance

| Property | Value |
| --- | --- |
| Category | [Routing & Structure](../) |
| Signal role | Structure |
| Audio inputs | 1 |
| Audio outputs | 1 |
| MIDI input | Yes |
| MIDI output | No |
| CPU class | medium |
| Reported latency | 0 |
| Macro slots | 8 |

## Parameters

| Parameter | ID | Range | Default | Unit / choices | Mod port |
| --- | --- | --- | --- | --- | ---: |
| Voices | `voices` | 1 to 16 | 8 | — | 9 |

## Declared ports

- Audio inputs: `A`

## Safety and limits

CPU scales with Voices: each voice is a full clone of the inner graph (N graphs run per block). The clones are pre-built in prepare (0 RT alloc); changing Voices live re-clones (a brief glitch). Voice-stealing takes the quietest sounding voice. Author a FLAT synth graph inside (NoteOsc/Sampler + Filter + ADSR) - a nested container inside a Poly zone is cloned shallow (its own internals are NOT voice-split). The inner graph + macros serialize normally; the voice clones are runtime-only

<details>
<summary>Registry implementation notes</summary>

polyphony zone (container variant): CLONES its inner graph per voice (Voices param, up to 16) and fans each held note to its own voice clone, summing the outputs - author NoteOsc/Sampler + Filter + ADSR ONCE inside and it becomes a real polysynth. Voice-stealing takes the quietest sounding voice. Like the Oversample zone, the inner graph + macros + serialization are untouched; the clones are runtime-only

</details>

:::caution[Verify in context]
Ranges and declared latency are product facts. Audible outcome, stability, level, and CPU cost still depend on signal, sample rate, block size, routing, modulation, and surrounding blocks.
:::

