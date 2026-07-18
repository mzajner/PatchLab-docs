---
title: "Clipper"
description: "ceiling clipper: Hard = exact flat-top at Ceiling, Soft = tanh rounded into the same ceiling (transparent at low level) - peak shaving before Limiter, deliberate edge on drums"
sidebar:
  order: 60
---

<small>Generated from PatchLab binary source candidate `99899b76e006` · registry type 59</small>

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
| Ceiling (threshold) | `ceiling` | -36 to 0 | -1 | dB | 1 |
| Mode | `mode` | 0 to 1 | 0 | `Hard`, `Soft` | 2 |

## Declared ports

- Audio inputs: `A`

## Safety and limits

clipping creates harmonics that alias - wrap in an Oversample zone for alias control; Soft mode starts shading ~12 dB below Ceiling, Hard is exact up to it

<details>
<summary>Registry implementation notes</summary>

ceiling clipper: Hard = exact flat-top at Ceiling, Soft = tanh rounded into the same ceiling (transparent at low level) - peak shaving before Limiter, deliberate edge on drums

</details>

:::caution[Verify in context]
Ranges and declared latency are product facts. Audible outcome, stability, level, and CPU cost still depend on signal, sample rate, block size, routing, modulation, and surrounding blocks.
:::

