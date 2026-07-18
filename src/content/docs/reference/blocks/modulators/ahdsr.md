---
title: "AHDSR"
description: "MIDI-gated AHDSR -> control out, per-stage curve knobs (0.5 = linear, lower = slower start) - the shaped synth envelope, stages land exactly on time"
sidebar:
  order: 52
---

<small>Generated from PatchLab binary source candidate `99899b76e006` · registry type 51</small>

## At a glance

| Property | Value |
| --- | --- |
| Category | [Modulators](../) |
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
| Attack (time) | `a` | 1 to 2000 | 10 | ms | 0 |
| Hold (time) | `h` | 0 to 500 | 0 | ms | 1 |
| Decay (time) | `d` | 1 to 2000 | 80 | ms | 2 |
| Sustain (level) | `s` | 0 to 1 | 0.7 | — | 3 |
| Release (time) | `r` | 1 to 5000 | 300 | ms | 4 |
| A Curve | `ac` | 0 to 1 | 0.5 | — | 5 |
| D Curve | `dc` | 0 to 1 | 0.5 | — | 6 |
| R Curve | `rc` | 0 to 1 | 0.5 | — | 7 |

<details>
<summary>Registry implementation notes</summary>

MIDI-gated AHDSR -> control out, per-stage curve knobs (0.5 = linear, lower = slower start) - the shaped synth envelope, stages land exactly on time

</details>

:::caution[Verify in context]
Ranges and declared latency are product facts. Audible outcome, stability, level, and CPU cost still depend on signal, sample rate, block size, routing, modulation, and surrounding blocks.
:::

