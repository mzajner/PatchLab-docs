---
title: "Smoother"
description: "de-zipper for control wires: Lag = one-pole (tau = Time ms), Slew = linear ramp (full swing in Time) - smooth S&H/Random/CC steps"
sidebar:
  order: 45
---

<small>Generated from PatchLab binary source candidate `99899b76e006` · registry type 44</small>

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
| Time (time) | `time` | 0 to 2000 | 50 | ms | 1 |
| Mode | `mode` | 0 to 1 | 0 | `Lag`, `Slew` | 2 |

## Declared ports

- Audio inputs: `A`

<details>
<summary>Registry implementation notes</summary>

de-zipper for control wires: Lag = one-pole (tau = Time ms), Slew = linear ramp (full swing in Time) - smooth S&H/Random/CC steps

</details>

:::caution[Verify in context]
Ranges and declared latency are product facts. Audible outcome, stability, level, and CPU cost still depend on signal, sample rate, block size, routing, modulation, and surrounding blocks.
:::

