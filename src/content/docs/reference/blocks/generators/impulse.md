---
title: "Impulse"
description: "IMPULSE: a test / utility CLICK source - a periodic single-sample impulse train at Rate Hz."
sidebar:
  order: 152
---

<small>Generated from PatchLab binary source candidate `99899b76e006` · registry type 151</small>

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
| Level (level) | `level` | 0 to 1 | 0 | — | 0 |
| Rate (rate) | `rate` | 0.1 to 50 | 2 | Hz | 1 |
| Polarity | `pol` | 0 to 1 | 0 | `Uni`, `Bi` | 2 |

<details>
<summary>Registry implementation notes</summary>

IMPULSE: a test / utility CLICK source - a periodic single-sample impulse train at Rate Hz. The classic bench generator for measuring an impulse response (drive a Delay/Reverb/Filter and watch its tail), clocking S&H, or seeding a physical-modeling exciter. SILENT BY DEFAULT (Level 0, hard rule #2): the phase advances but every impulse is 0 until you raise Level. Polarity Uni = all +Level; Bi = alternating +/-Level. Allocation-free; the face draws recent impulse ticks (one block-decimated peak per point) and reads 'silent' while Level is 0. Native-first. (MNodes Impulse).

</details>

:::caution[Verify in context]
Ranges and declared latency are product facts. Audible outcome, stability, level, and CPU cost still depend on signal, sample rate, block size, routing, modulation, and surrounding blocks.
:::

