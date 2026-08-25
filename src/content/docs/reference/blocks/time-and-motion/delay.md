---
title: "Delay"
description: "feedback delay; smoothed time bends pitch tape-style when modulated; Mode PingPong cross-feeds the L/R feedback (stereo bounce); Sync (Off = the ms knob) locks Time to a host-tempo"
sidebar:
  order: 11
---

<small>Generated from PatchLab binary source candidate `2a98ed460799` · registry type 10</small>

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
| Sync | `sync` | 0 to 16 | 0 | `Off`, `4/1`, `2/1`, `1/1`, `1/2D`, `1/2`, `1/2T`, `1/4D`, `1/4`, `1/4T`, `1/8D`, `1/8`, `1/8T`, `1/16D`, `1/16`, `1/16T`, `1/32` | 5 |

## Declared ports

- Audio inputs: `A`

## Safety and limits

feedback param clamped <= 0.95

<details>
<summary>Registry implementation notes</summary>

feedback delay; smoothed time bends pitch tape-style when modulated; Mode PingPong cross-feeds the L/R feedback (stereo bounce); Sync (Off = the ms knob) locks Time to a host-tempo division (1/4, 1/8., 1/16T ...)

</details>

:::caution[Verify in context]
Ranges and declared latency are product facts. Audible outcome, stability, level, and CPU cost still depend on signal, sample rate, block size, routing, modulation, and surrounding blocks.
:::

