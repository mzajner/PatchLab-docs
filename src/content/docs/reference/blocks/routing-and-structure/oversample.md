---
title: "Oversample"
description: "Oversample zone: runs its nested graph at 2x/4x/8x with halfband anti-alias filtering (latency reported) - wrap a saturation core (Waveshaper/Clipper/Drive/RingMod) to kill aliasin"
sidebar:
  order: 66
---

<small>Generated from PatchLab binary source candidate `99899b76e006` · registry type 65</small>

## At a glance

| Property | Value |
| --- | --- |
| Category | [Routing & Structure](../) |
| Signal role | Structure |
| Audio inputs | 1 |
| Audio outputs | 1 |
| MIDI input | Yes |
| MIDI output | No |
| CPU class | trivial |
| Reported latency | halfband-filter group delay at the chosen factor (reported at prepare; 1x = 0; ~31-54 smp at 2x/4x/8x) |
| Macro slots | 8 |

## Parameters

| Parameter | ID | Range | Default | Unit / choices | Mod port |
| --- | --- | --- | --- | --- | ---: |
| Oversmp | `os` | 0 to 3 | 2 | `1x`, `2x`, `4x`, `8x` | 9 |

## Declared ports

- Audio inputs: `A`

## Safety and limits

runs children at 2x/4x/8x - CPU scales with the factor; adds halfband-filter latency (reported to the host); changing the factor live reseats the filters (brief click); MIDI/tempo nodes inside a zone see the oversampled rate (put them outside the zone)

<details>
<summary>Registry implementation notes</summary>

Oversample zone: runs its nested graph at 2x/4x/8x with halfband anti-alias filtering (latency reported) - wrap a saturation core (Waveshaper/Clipper/Drive/RingMod) to kill aliasing (hard-driven tanh: alias floor -14.6 -> -40.1 dB at 4x). 1x = plain container; has the 8 parent macro knobs too

</details>

:::caution[Verify in context]
Ranges and declared latency are product facts. Audible outcome, stability, level, and CPU cost still depend on signal, sample rate, block size, routing, modulation, and surrounding blocks.
:::

