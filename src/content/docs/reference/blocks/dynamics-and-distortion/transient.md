---
title: "Transient"
description: "transient shaper (SPL-style dual follower): Attack boosts/cuts onsets, Sustain boosts/cuts the body/tail, steady state passes untouched - drum punch or de-room without a threshold;"
sidebar:
  order: 62
---

<small>Generated from PatchLab binary source candidate `99899b76e006` · registry type 61</small>

## At a glance

| Property | Value |
| --- | --- |
| Category | [Dynamics & Distortion](../) |
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
| Attack (gain) | `attack` | -18 to 18 | 0 | dB | 1 |
| Sustain (gain) | `sustain` | -24 to 24 | 0 | dB | 2 |
| Speed (time) | `speed` | 0.5 to 20 | 5 | ms | 3 |

## Declared ports

- Audio inputs: `A`

## Safety and limits

level-dependent detector: full Attack/Sustain effect needs healthy input (~-18 dBFS peaks or louder); both knobs at 0 = bit-transparent

<details>
<summary>Registry implementation notes</summary>

transient shaper (SPL-style dual follower): Attack boosts/cuts onsets, Sustain boosts/cuts the body/tail, steady state passes untouched - drum punch or de-room without a threshold; Speed sets the onset window

</details>

:::caution[Verify in context]
Ranges and declared latency are product facts. Audible outcome, stability, level, and CPU cost still depend on signal, sample rate, block size, routing, modulation, and surrounding blocks.
:::

