---
title: "Biquad"
description: "RBJ cookbook biquad: LP/HP/BP/Notch/AP/Peak/Shelves - static tone; for swept duty use Filter"
sidebar:
  order: 34
---

<small>Generated from PatchLab binary source candidate `99899b76e006` · registry type 33</small>

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
| Mode | `mode` | 0 to 7 | 0 | `LP`, `HP`, `BP`, `Notch`, `AP`, `Peak`, `LoShelf`, `HiShelf` | 1 |
| Freq (frequency) | `freq` | 20 to 20000 | 1000 | Hz | 2 |
| Gain (gain) | `gaindb` | -18 to 18 | 0 | dB | 3 |
| Q (resonance) | `q` | 0.1 to 8 | 0.71 | — | 4 |

## Declared ports

- Audio inputs: `A`

<details>
<summary>Registry implementation notes</summary>

RBJ cookbook biquad: LP/HP/BP/Notch/AP/Peak/Shelves - static tone; for swept duty use Filter

</details>

:::caution[Verify in context]
Ranges and declared latency are product facts. Audible outcome, stability, level, and CPU cost still depend on signal, sample rate, block size, routing, modulation, and surrounding blocks.
:::

