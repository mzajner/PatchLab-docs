---
title: "Formant"
description: "vowel resonator bank: 3 resonant SVF bandpasses at the chosen Voice's (Soprano/Alto/Tenor/Bass) formant frequencies F1-F3, summed."
sidebar:
  order: 88
---

<small>Generated from PatchLab binary source candidate `99899b76e006` · registry type 87</small>

## At a glance

| Property | Value |
| --- | --- |
| Category | [Filters & EQ](../) |
| Signal role | Audio |
| Audio inputs | 1 |
| Audio outputs | 1 |
| MIDI input | No |
| MIDI output | No |
| CPU class | light |
| Reported latency | 0 |

## Parameters

| Parameter | ID | Range | Default | Unit / choices | Mod port |
| --- | --- | --- | --- | --- | ---: |
| Voice | `voice` | 0 to 3 | 2 | `Soprano`, `Alto`, `Tenor`, `Bass` | 1 |
| Vowel | `vowel` | 0 to 1 | 0 | — | 2 |
| Shift | `shift` | 0.25 to 4 | 1 | — | 3 |
| Q (resonance) | `q` | 0.25 to 4 | 1 | — | 4 |
| Mix (mix) | `mix` | 0 to 1 | 1 | — | 5 |

## Declared ports

- Audio inputs: `A`

<details>
<summary>Registry implementation notes</summary>

vowel resonator bank: 3 resonant SVF bandpasses at the chosen Voice's (Soprano/Alto/Tenor/Bass) formant frequencies F1-F3, summed. Vowel 0..1 morphs A->E->I->O->U (log-interpolated, click-free via the SVF), Shift scales all formants (octave-ish), Q tightens the resonances, Mix blends dry. Talk-box / vocoder vowel colour - feed it a harmonically-rich source (Saw/Pulse/Noise) and sweep Vowel for a voice gliding between vowels

</details>

:::caution[Verify in context]
Ranges and declared latency are product facts. Audible outcome, stability, level, and CPU cost still depend on signal, sample rate, block size, routing, modulation, and surrounding blocks.
:::

