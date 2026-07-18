---
title: "Comb"
description: "tuned comb, Freq = notch/peak spacing: FF notches (flanger core), FB resonator (Karplus body; Amount>0.9 rings); Damp at max = off"
sidebar:
  order: 36
---

<small>Generated from PatchLab binary source candidate `99899b76e006` · registry type 35</small>

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
| Mode | `mode` | 0 to 1 | 0 | `FF`, `FB` | 1 |
| Freq (frequency) | `freq` | 20 to 16000 | 440 | Hz | 2 |
| Amount (amount) | `amount` | -0.95 to 0.95 | 0.5 | — | 3 |
| Damp (frequency) | `damp` | 200 to 20000 | 20000 | Hz | 4 |

## Declared ports

- Audio inputs: `A`

<details>
<summary>Registry implementation notes</summary>

tuned comb, Freq = notch/peak spacing: FF notches (flanger core), FB resonator (Karplus body; Amount>0.9 rings); Damp at max = off

</details>

:::caution[Verify in context]
Ranges and declared latency are product facts. Audible outcome, stability, level, and CPU cost still depend on signal, sample rate, block size, routing, modulation, and surrounding blocks.
:::

