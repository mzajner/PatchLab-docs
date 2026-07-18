---
title: "Phasor"
description: "0..1 ramp at Hz (0.02 Hz to 20 kHz), the generator atom - Math1 Sin makes it a sine, CurveMap/Quantize shape it, Sync port resets phase; silent until Level up"
sidebar:
  order: 56
---

<small>Generated from PatchLab binary source candidate `99899b76e006` · registry type 55</small>

## At a glance

| Property | Value |
| --- | --- |
| Category | [Generators](../) |
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
| Freq (frequency) | `freq` | 0.02 to 20000 | 1 | Hz | 1 |
| Level (level) | `level` | 0 to 1 | 0 | — | 2 |

## Declared ports

- Audio inputs: `Sync`

## Safety and limits

raw unipolar ramp: has DC and aliases at audio rates by design - band-limited tone duty lives in Osc; output is 0 until Level is raised

<details>
<summary>Registry implementation notes</summary>

0..1 ramp at Hz (0.02 Hz to 20 kHz), the generator atom - Math1 Sin makes it a sine, CurveMap/Quantize shape it, Sync port resets phase; silent until Level up

</details>

:::caution[Verify in context]
Ranges and declared latency are product facts. Audible outcome, stability, level, and CPU cost still depend on signal, sample rate, block size, routing, modulation, and surrounding blocks.
:::

