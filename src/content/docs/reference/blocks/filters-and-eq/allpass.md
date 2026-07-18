---
title: "Allpass"
description: "pure phase shifter, |H|=1: chain several + blend dry = phaser; Freq mod sweeps the notches"
sidebar:
  order: 33
---

<small>Generated from PatchLab binary source candidate `99899b76e006` · registry type 32</small>

## At a glance

| Property | Value |
| --- | --- |
| Category | [Filters & EQ](../) |
| Signal role | Audio |
| Audio inputs | 1 |
| Audio outputs | 1 |
| MIDI input | No |
| MIDI output | No |
| CPU class | trivial |
| Reported latency | 0 |

## Parameters

| Parameter | ID | Range | Default | Unit / choices | Mod port |
| --- | --- | --- | --- | --- | ---: |
| Order | `order` | 0 to 1 | 0 | `1st`, `2nd` | 1 |
| Freq (frequency) | `freq` | 20 to 20000 | 1000 | Hz | 2 |
| Q (resonance) | `q` | 0.2 to 8 | 0.71 | — | 3 |

## Declared ports

- Audio inputs: `A`

<details>
<summary>Registry implementation notes</summary>

pure phase shifter, |H|=1: chain several + blend dry = phaser; Freq mod sweeps the notches

</details>

:::caution[Verify in context]
Ranges and declared latency are product facts. Audible outcome, stability, level, and CPU cost still depend on signal, sample rate, block size, routing, modulation, and surrounding blocks.
:::

