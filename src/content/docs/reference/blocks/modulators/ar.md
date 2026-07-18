---
title: "AR"
description: "attack/release envelope from the Trig input (Gate = follow level, Trig = one-shot per edge; exact stage times) - Timer/Compare -> AR = control envelopes"
sidebar:
  order: 51
---

<small>Generated from PatchLab binary source candidate `99899b76e006` · registry type 50</small>

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
| Attack (time) | `a` | 0.1 to 2000 | 10 | ms | 1 |
| Release (time) | `r` | 1 to 5000 | 200 | ms | 2 |
| Mode | `mode` | 0 to 1 | 0 | `Gate`, `Trig` | 3 |

## Declared ports

- Audio inputs: `Trig`

<details>
<summary>Registry implementation notes</summary>

attack/release envelope from the Trig input (Gate = follow level, Trig = one-shot per edge; exact stage times) - Timer/Compare -> AR = control envelopes

</details>

:::caution[Verify in context]
Ranges and declared latency are product facts. Audible outcome, stability, level, and CPU cost still depend on signal, sample rate, block size, routing, modulation, and surrounding blocks.
:::

