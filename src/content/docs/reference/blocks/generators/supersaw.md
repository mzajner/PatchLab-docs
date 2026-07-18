---
title: "Supersaw"
description: "SUPERSAW: the JP-8000 'hyper saw' lead - up to 9 detuned saw oscillators summed with an equal-power stereo spread."
sidebar:
  order: 135
---

<small>Generated from PatchLab binary source candidate `99899b76e006` · registry type 134</small>

## At a glance

| Property | Value |
| --- | --- |
| Category | [Generators](../) |
| Signal role | Audio |
| Audio inputs | 0 |
| Audio outputs | 1 |
| MIDI input | No |
| MIDI output | No |
| CPU class | trivial |
| Reported latency | 0 |

## Parameters

| Parameter | ID | Range | Default | Unit / choices | Mod port |
| --- | --- | --- | --- | --- | ---: |
| Freq (frequency) | `freq` | 20 to 4000 | 220 | Hz | 0 |
| Level (level) | `level` | 0 to 1 | 0 | — | 1 |
| Voices | `voices` | 1 to 9 | 7 | — | 2 |
| Detune | `detune` | 0 to 50 | 20 | ct | 3 |
| Spread (width) | `spread` | 0 to 1 | 0.7 | — | 4 |

<details>
<summary>Registry implementation notes</summary>

SUPERSAW: the JP-8000 'hyper saw' lead - up to 9 detuned saw oscillators summed with an equal-power stereo spread. Voices sets the stack size; Detune spreads them symmetrically around Freq (+/- cents at the extremes); Spread pans the outer voices L/R for width. SILENT by default (Level 0). The instant-gratification trance/EDM lead (MNodes instrument gap); stack -> Filter -> ADSR for a classic supersaw patch. Stereo audio out, allocation-free (fixed per-voice arrays)

</details>

:::caution[Verify in context]
Ranges and declared latency are product facts. Audible outcome, stability, level, and CPU cost still depend on signal, sample rate, block size, routing, modulation, and surrounding blocks.
:::

