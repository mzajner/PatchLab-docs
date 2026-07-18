---
title: "Multitap"
description: "4-tap delay on one line: per-tap Time/Gain/Pan (equal-power) + Dry, all smoothed; additive, no feedback of its own (loop via Send/Receive) - rhythmic echoes, ping-pong, early-refle"
sidebar:
  order: 54
---

<small>Generated from PatchLab binary source candidate `99899b76e006` · registry type 53</small>

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
| Dry (level) | `dry` | 0 to 1 | 1 | — | 1 |
| T1 Time (time) | `t1` | 1 to 2000 | 125 | ms | 2 |
| T1 Gain (gain) | `g1` | 0 to 1 | 0.7 | — | 3 |
| T1 Pan (pan) | `p1` | -1 to 1 | -0.4 | — | 4 |
| T2 Time (time) | `t2` | 1 to 2000 | 250 | ms | 5 |
| T2 Gain (gain) | `g2` | 0 to 1 | 0.55 | — | 6 |
| T2 Pan (pan) | `p2` | -1 to 1 | 0.4 | — | 7 |
| T3 Time (time) | `t3` | 1 to 2000 | 375 | ms | 8 |
| T3 Gain (gain) | `g3` | 0 to 1 | 0.4 | — | 9 |
| T3 Pan (pan) | `p3` | -1 to 1 | -0.15 | — | 10 |
| T4 Time (time) | `t4` | 1 to 2000 | 500 | ms | 11 |
| T4 Gain (gain) | `g4` | 0 to 1 | 0.3 | — | 12 |
| T4 Pan (pan) | `p4` | -1 to 1 | 0.15 | — | 13 |

## Declared ports

- Audio inputs: `A`

## Safety and limits

taps are additive: four loud taps can sum above unity - keep tap gains modest or follow with a Limiter

<details>
<summary>Registry implementation notes</summary>

4-tap delay on one line: per-tap Time/Gain/Pan (equal-power) + Dry, all smoothed; additive, no feedback of its own (loop via Send/Receive) - rhythmic echoes, ping-pong, early-reflection sketches

</details>

:::caution[Verify in context]
Ranges and declared latency are product facts. Audible outcome, stability, level, and CPU cost still depend on signal, sample rate, block size, routing, modulation, and surrounding blocks.
:::

