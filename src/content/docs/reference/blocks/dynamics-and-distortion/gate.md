---
title: "Gate"
description: "noise gate with hysteresis: opens above Thresh, closes only below Thresh - Hyst and after Hold, Range sets the closed floor - drum gating, noise cleanup, chatter-free at the thresh"
sidebar:
  order: 59
---

<small>Generated from PatchLab binary source candidate `99899b76e006` · registry type 58</small>

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
| Thresh (threshold) | `thresh` | -80 to 0 | -40 | dB | 1 |
| Hyst | `hyst` | 0 to 24 | 4 | dB | 2 |
| Attack (time) | `attack` | 0.1 to 50 | 1 | ms | 3 |
| Hold (time) | `hold` | 0 to 500 | 50 | ms | 4 |
| Release (time) | `release` | 5 to 1000 | 100 | ms | 5 |
| Range | `range` | -80 to 0 | -80 | dB | 6 |

## Declared ports

- Audio inputs: `A`

## Safety and limits

starts closed (silent until the input first exceeds Thresh); Range 0 dB = no attenuation; detects its own input full-band - for sidechain keys patch EnvFollow -> GainComp -> Multiply instead

<details>
<summary>Registry implementation notes</summary>

noise gate with hysteresis: opens above Thresh, closes only below Thresh - Hyst and after Hold, Range sets the closed floor - drum gating, noise cleanup, chatter-free at the threshold by design

</details>

:::caution[Verify in context]
Ranges and declared latency are product facts. Audible outcome, stability, level, and CPU cost still depend on signal, sample rate, block size, routing, modulation, and surrounding blocks.
:::

