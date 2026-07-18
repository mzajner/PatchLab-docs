---
title: "Limiter"
description: "brickwall safety limiter: output never exceeds Ceiling (Lookahd ms of lookahead + Release), transparent below it, no hidden makeup - end of chain; Lookahd 0 = zero-latency instant-"
sidebar:
  order: 25
---

<small>Generated from PatchLab binary source candidate `99899b76e006` · registry type 24</small>

## At a glance

| Property | Value |
| --- | --- |
| Category | [Dynamics & Distortion](../) |
| Signal role | Audio |
| Audio inputs | 1 |
| Audio outputs | 1 |
| MIDI input | No |
| MIDI output | No |
| CPU class | light |
| Reported latency | Lookahd ms (default 2 ms = 96 smp at 48 kHz, reported at prepare; 0 = zero latency) |

## Parameters

| Parameter | ID | Range | Default | Unit / choices | Mod port |
| --- | --- | --- | --- | --- | ---: |
| Ceiling (threshold) | `thresh` | -24 to 0 | -1 | dB | 1 |
| Release (time) | `release` | 10 to 500 | 100 | ms | 2 |
| Lookahd (time) | `lookahd` | 0 to 10 | 2 | ms | 3 |

## Declared ports

- Audio inputs: `A`

## Safety and limits

lookahead delays audio by Lookahd ms (latency reported at prepare; changing Lookahd live resets the window - brief click possible); transparent below Ceiling since F5 (the old juce::dsp backing added ~+4.75 dB makeup)

<details>
<summary>Registry implementation notes</summary>

brickwall safety limiter: output never exceeds Ceiling (Lookahd ms of lookahead + Release), transparent below it, no hidden makeup - end of chain; Lookahd 0 = zero-latency instant-gain mode

</details>

:::caution[Verify in context]
Ranges and declared latency are product facts. Audible outcome, stability, level, and CPU cost still depend on signal, sample rate, block size, routing, modulation, and surrounding blocks.
:::

