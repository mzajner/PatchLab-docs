---
title: "Arp"
description: "arpeggiator (note-in -> timed note-out): holds the chord and plays it one note per step at a tempo Rate division (1/16 default), Mode Up/Down/UpDown/Random, Gate = note length, Oct"
sidebar:
  order: 78
---

<small>Generated from PatchLab binary source candidate `99899b76e006` · registry type 77</small>

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
| Mode | `mode` | 0 to 3 | 0 | `Up`, `Down`, `UpDown`, `Random` | 0 |
| Rate | `div` | 0 to 15 | 13 | `4/1`, `2/1`, `1/1`, `1/2D`, `1/2`, `1/2T`, `1/4D`, `1/4`, `1/4T`, `1/8D`, `1/8`, `1/8T`, `1/16D`, `1/16`, `1/16T`, `1/32` | 1 |
| Gate | `gate` | 0.05 to 1 | 0.5 | — | 2 |
| Octaves | `oct` | 1 to 4 | 1 | — | 3 |

<details>
<summary>Registry implementation notes</summary>

arpeggiator (note-in -> timed note-out): holds the chord and plays it one note per step at a tempo Rate division (1/16 default), Mode Up/Down/UpDown/Random, Gate = note length, Octaves spans the pattern up. Onsets are sample-exact to the host tempo (120 unhosted). Chain before NoteOsc/Sampler to arpeggiate a held chord

</details>

:::caution[Verify in context]
Ranges and declared latency are product facts. Audible outcome, stability, level, and CPU cost still depend on signal, sample rate, block size, routing, modulation, and surrounding blocks.
:::

