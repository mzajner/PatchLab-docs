---
title: "Random"
description: "per-trigger random 0..1: rising Trig edge draws the next seeded value (same Seed = same sequence), Slew lags steps - Timer -> Trig = random LFO"
sidebar:
  order: 46
---

<small>Generated from PatchLab binary source candidate `99899b76e006` · registry type 45</small>

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
| Seed | `seed` | 0 to 9999 | 1 | — | 1 |
| Slew (time) | `slew` | 0 to 1000 | 0 | ms | 2 |

## Declared ports

- Audio inputs: `Trig`

## Safety and limits

holds 0 until the first Trig edge; changing Seed reseeds and restarts the sequence

<details>
<summary>Registry implementation notes</summary>

per-trigger random 0..1: rising Trig edge draws the next seeded value (same Seed = same sequence), Slew lags steps - Timer -> Trig = random LFO

</details>

:::caution[Verify in context]
Ranges and declared latency are product facts. Audible outcome, stability, level, and CPU cost still depend on signal, sample rate, block size, routing, modulation, and surrounding blocks.
:::

