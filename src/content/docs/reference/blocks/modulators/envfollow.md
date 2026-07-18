---
title: "EnvFollow"
description: "audio -> control envelope, Peak or RMS detector; Duck inverts it for sidechain ducking; Auto release = program-dependent (fast after transients, the Release value on steady materia"
sidebar:
  order: 17
---

<small>Generated from PatchLab binary source candidate `99899b76e006` · registry type 16</small>

## At a glance

| Property | Value |
| --- | --- |
| Category | [Modulators](../) |
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
| Attack (time) | `attack` | 0.1 to 200 | 10 | ms | 1 |
| Release (time) | `release` | 5 to 1000 | 150 | ms | 2 |
| Gain (gain) | `gain` | 0 to 4 | 1 | — | 3 |
| Mode | `invert` | 0 to 1 | 0 | `Follow`, `Duck` | 4 |
| Detect | `detect` | 0 to 1 | 0 | `Peak`, `RMS` | 5 |
| Rel Mode | `relmode` | 0 to 1 | 0 | `Manual`, `Auto` | 6 |

## Declared ports

- Audio inputs: `A`

<details>
<summary>Registry implementation notes</summary>

audio -> control envelope, Peak or RMS detector; Duck inverts it for sidechain ducking; Auto release = program-dependent (fast after transients, the Release value on steady material)

</details>

:::caution[Verify in context]
Ranges and declared latency are product facts. Audible outcome, stability, level, and CPU cost still depend on signal, sample rate, block size, routing, modulation, and surrounding blocks.
:::

