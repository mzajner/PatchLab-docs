---
title: "Track&Hold"
description: "TRACK & HOLD: while the Gate is high (> Gate Lvl) the output TRACKS the In; when it falls the output HOLDS the last value."
sidebar:
  order: 124
---

<small>Generated from PatchLab binary source candidate `99899b76e006` · registry type 123</small>

## At a glance

| Property | Value |
| --- | --- |
| Category | [Modulators](../) |
| Signal role | Modulation |
| Audio inputs | 2 |
| Audio outputs | 1 |
| MIDI input | No |
| MIDI output | No |
| CPU class | trivial |
| Reported latency | 0 |

## Parameters

| Parameter | ID | Range | Default | Unit / choices | Mod port |
| --- | --- | --- | --- | --- | ---: |
| Gate Lvl (threshold) | `thresh` | 0.05 to 0.9 | 0.5 | — | 2 |

## Declared ports

- Audio inputs: `In`, `Gate`

<details>
<summary>Registry implementation notes</summary>

TRACK & HOLD: while the Gate is high (> Gate Lvl) the output TRACKS the In; when it falls the output HOLDS the last value. The continuous cousin of S&H (which samples only at a rising edge) - freeze a moving CV, hold an envelope, glide-then-freeze

</details>

:::caution[Verify in context]
Ranges and declared latency are product facts. Audible outcome, stability, level, and CPU cost still depend on signal, sample rate, block size, routing, modulation, and surrounding blocks.
:::

