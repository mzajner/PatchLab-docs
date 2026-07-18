---
title: "Delay"
description: "feedback delay; smoothed time bends pitch tape-style when modulated; Mode PingPong cross-feeds the L/R feedback (stereo bounce)"
sidebar:
  order: 11
---

<small>Generated from PatchLab binary source candidate `99899b76e006` · registry type 10</small>

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
| Time (time) | `time` | 1 to 2000 | 350 | ms | 1 |
| Feedbk (feedback) | `fb` | 0 to 0.95 | 0.35 | — | 2 |
| Mix (mix) | `mix` | 0 to 1 | 0.3 | — | 3 |
| Mode | `mode` | 0 to 1 | 0 | `Stereo`, `PingPong` | 4 |

## Declared ports

- Audio inputs: `A`

## Safety and limits

feedback param clamped <= 0.95

<details>
<summary>Registry implementation notes</summary>

feedback delay; smoothed time bends pitch tape-style when modulated; Mode PingPong cross-feeds the L/R feedback (stereo bounce)

</details>

:::caution[Verify in context]
Ranges and declared latency are product facts. Audible outcome, stability, level, and CPU cost still depend on signal, sample rate, block size, routing, modulation, and surrounding blocks.
:::

