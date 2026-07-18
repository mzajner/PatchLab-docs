---
title: "NoteOsc"
description: "8-voice MIDI oscillator with AR envelope (silent until notes)"
sidebar:
  order: 28
---

<small>Generated from PatchLab binary source candidate `99899b76e006` · registry type 27</small>

## At a glance

| Property | Value |
| --- | --- |
| Category | [Generators](../) |
| Signal role | Event |
| Audio inputs | 0 |
| Audio outputs | 1 |
| MIDI input | Yes |
| MIDI output | No |
| CPU class | trivial |
| Reported latency | 0 |

## Parameters

| Parameter | ID | Range | Default | Unit / choices | Mod port |
| --- | --- | --- | --- | --- | ---: |
| Shape | `shape` | 0 to 3 | 0 | `Sine`, `Tri`, `Saw`, `Square` | 0 |
| Attack (time) | `attack` | 1 to 500 | 5 | ms | 1 |
| Release (time) | `release` | 5 to 2000 | 220 | ms | 2 |
| Level (level) | `level` | 0 to 1 | 0.5 | — | 3 |

<details>
<summary>Registry implementation notes</summary>

8-voice MIDI oscillator with AR envelope (silent until notes)

</details>

:::caution[Verify in context]
Ranges and declared latency are product facts. Audible outcome, stability, level, and CPU cost still depend on signal, sample rate, block size, routing, modulation, and surrounding blocks.
:::

