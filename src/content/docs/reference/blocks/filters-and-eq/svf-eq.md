---
title: "SVF EQ"
description: "modulatable EQ band (SVF bell/shelves): sweep Freq/Gain clickless - dynamic-EQ and motion-EQ cell"
sidebar:
  order: 37
---

<small>Generated from PatchLab binary source candidate `99899b76e006` · registry type 36</small>

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
| Mode | `mode` | 0 to 2 | 0 | `Bell`, `LoShelf`, `HiShelf` | 1 |
| Freq (frequency) | `freq` | 20 to 20000 | 1000 | Hz | 2 |
| Gain (gain) | `gaindb` | -18 to 18 | 0 | dB | 3 |
| Q (resonance) | `q` | 0.2 to 8 | 0.71 | — | 4 |

## Declared ports

- Audio inputs: `A`

<details>
<summary>Registry implementation notes</summary>

modulatable EQ band (SVF bell/shelves): sweep Freq/Gain clickless - dynamic-EQ and motion-EQ cell

</details>

:::caution[Verify in context]
Ranges and declared latency are product facts. Audible outcome, stability, level, and CPU cost still depend on signal, sample rate, block size, routing, modulation, and surrounding blocks.
:::

