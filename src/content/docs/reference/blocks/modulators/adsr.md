---
title: "ADSR"
description: "MIDI-gated ADSR -> control out (VCA / filter envelopes)"
sidebar:
  order: 29
---

<small>Generated from PatchLab binary source candidate `99899b76e006` · registry type 28</small>

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
| Attack (time) | `a` | 1 to 1000 | 10 | ms | 0 |
| Decay (time) | `d` | 1 to 1000 | 80 | ms | 1 |
| Sustain (level) | `s` | 0 to 1 | 0.7 | — | 2 |
| Release (time) | `r` | 5 to 3000 | 300 | ms | 3 |

<details>
<summary>Registry implementation notes</summary>

MIDI-gated ADSR -> control out (VCA / filter envelopes)

</details>

:::caution[Verify in context]
Ranges and declared latency are product facts. Audible outcome, stability, level, and CPU cost still depend on signal, sample rate, block size, routing, modulation, and surrounding blocks.
:::

