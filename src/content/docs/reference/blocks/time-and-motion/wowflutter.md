---
title: "WowFlutter"
description: "WOW & FLUTTER: tape pitch wobble via an LFO-modulated fractional delay."
sidebar:
  order: 136
---

<small>Generated from PatchLab binary source candidate `99899b76e006` · registry type 135</small>

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
| Rate (rate) | `rate` | 0.05 to 8 | 0.7 | Hz | 1 |
| Depth (depth) | `depth` | 0 to 1 | 0.3 | — | 2 |
| Flutter (amount) | `flutter` | 0 to 1 | 0.3 | — | 3 |
| Mix (mix) | `mix` | 0 to 1 | 1 | — | 4 |

## Declared ports

- Audio inputs: `A`

<details>
<summary>Registry implementation notes</summary>

WOW & FLUTTER: tape pitch wobble via an LFO-modulated fractional delay. A slow 'wow' (Rate) plus a fixed fast 'flutter' (~6.3 Hz, scaled by Flutter) sweep the read head around a ~6 ms centre so the pitch drifts like worn tape; Depth sets the sweep, Mix blends dry/wet. Drop it after a delay/echo or on a full mix for lo-fi/tape character (MNodes tape-damage gap). Stereo in -> out, allocation-free (owned FracDelayLine per channel)

</details>

:::caution[Verify in context]
Ranges and declared latency are product facts. Audible outcome, stability, level, and CPU cost still depend on signal, sample rate, block size, routing, modulation, and surrounding blocks.
:::

