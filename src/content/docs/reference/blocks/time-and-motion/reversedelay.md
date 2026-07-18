---
title: "ReverseDelay"
description: "REVERSE ECHO: captures the input and plays each Time-ms window BACKWARD (the reverse-tape swoosh)."
sidebar:
  order: 129
---

<small>Generated from PatchLab binary source candidate `99899b76e006` · registry type 128</small>

## At a glance

| Property | Value |
| --- | --- |
| Category | [Time & Motion](../) |
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
| Time (time) | `time` | 50 to 2000 | 400 | ms | 1 |
| Feedback (feedback) | `fb` | 0 to 0.95 | 0.3 | — | 2 |
| Mix (mix) | `mix` | 0 to 1 | 0.5 | — | 3 |

## Declared ports

- Audio inputs: `A`

<details>
<summary>Registry implementation notes</summary>

REVERSE ECHO: captures the input and plays each Time-ms window BACKWARD (the reverse-tape swoosh). A reversed window must be captured before it can play, so it carries Time latency by nature; two read heads half a window apart are equal-power crossfaded so the wrap is click-free. Feedback recirculates the reversed signal (cascading reversals into a wash), Mix blends dry. The swelling backward echo a forward Delay can't make

</details>

:::caution[Verify in context]
Ranges and declared latency are product facts. Audible outcome, stability, level, and CPU cost still depend on signal, sample rate, block size, routing, modulation, and surrounding blocks.
:::

