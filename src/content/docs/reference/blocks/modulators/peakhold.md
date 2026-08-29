---
title: "PeakHold"
description: "PEAK HOLD: the running maximum, held then bled away - what a peak METER does to a number, available as a signal you can patch."
sidebar:
  order: 180
---

<small>Generated from PatchLab binary source candidate `7fd3876b4e75` · registry type 179</small>

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
| Hold (time) | `hold` | 0 to 5000 | 250 | ms | 1 |
| Decay | `decay` | 0 to 120 | 12 | dB/s | 2 |

## Declared ports

- Audio inputs: `A`

## Safety and limits

Per-channel and INDEPENDENT - the registry types this element-wise, so a loud left channel does not hold the right. Put a Math2 Max in front to link them. Decay 0 holds the captured peak forever (until reset), which is the intended meter-style behaviour, not a stuck block

<details>
<summary>Registry implementation notes</summary>

PEAK HOLD: the running maximum, held then bled away - what a peak METER does to a number, available as a signal you can patch. Hold keeps the captured peak for a time; Decay then bleeds it at a fixed dB per second (0 = hold forever, until reset). Distinct from EnvFollow, which is a detector with attack/release ballistics that chases the signal down as well as up, and from Meter, which is bit-exact passthrough whose reading goes to a face rather than a cable. Per-channel and independent: put a Math2 Max in front if you want the channels linked.

</details>

:::caution[Verify in context]
Ranges and declared latency are product facts. Audible outcome, stability, level, and CPU cost still depend on signal, sample rate, block size, routing, modulation, and surrounding blocks.
:::

