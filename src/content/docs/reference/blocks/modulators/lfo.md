---
title: "LFO"
description: "0..1 centred control signal, the workhorse modulator - tempo Sync divisions, Phase offset, Uni/Bi polarity, Retrig port, shapes incl."
sidebar:
  order: 3
---

<small>Generated from PatchLab binary source candidate `99899b76e006` · registry type 2</small>

## At a glance

| Property | Value |
| --- | --- |
| Category | [Modulators](../) |
| Signal role | Modulation |
| Audio inputs | 0 |
| Audio outputs | 1 |
| MIDI input | No |
| MIDI output | No |
| CPU class | trivial |
| Reported latency | 0 |

## Parameters

| Parameter | ID | Range | Default | Unit / choices | Mod port |
| --- | --- | --- | --- | --- | ---: |
| Shape | `shape` | 0 to 6 | 0 | `Sine`, `Tri`, `Saw`, `Square`, `Ramp Dn`, `S&H`, `Drift` | 0 |
| Rate (rate) | `rate` | 0.02 to 20 | 1 | Hz | 1 |
| Depth (depth) | `depth` | 0 to 1 | 0.5 | — | 2 |
| Center | `center` | 0 to 1 | 0.5 | — | 3 |
| Sync | `sync` | 0 to 16 | 0 | `Off`, `4/1`, `2/1`, `1/1`, `1/2D`, `1/2`, `1/2T`, `1/4D`, `1/4`, `1/4T`, `1/8D`, `1/8`, `1/8T`, `1/16D`, `1/16`, `1/16T`, `1/32` | 4 |
| Phase (phase) | `phase` | 0 to 1 | 0 | — | 5 |
| Polar | `polar` | 0 to 1 | 0 | `Uni`, `Bi` | 6 |
| Retrig | `retrig` | 0 to 1 | 0 | — | 7 |

<details>
<summary>Registry implementation notes</summary>

0..1 centred control signal, the workhorse modulator - tempo Sync divisions, Phase offset, Uni/Bi polarity, Retrig port, shapes incl. S&H/Drift random

</details>

:::caution[Verify in context]
Ranges and declared latency are product facts. Audible outcome, stability, level, and CPU cost still depend on signal, sample rate, block size, routing, modulation, and surrounding blocks.
:::

