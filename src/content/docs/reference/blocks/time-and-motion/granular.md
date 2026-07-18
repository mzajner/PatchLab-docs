---
title: "Granular"
description: "GRANULAR texture/cloud engine: a circular capture buffer + a grain scheduler firing overlapping Hann-windowed grains from a 64-voice pre-allocated pool (0 RT alloc)."
sidebar:
  order: 103
---

<small>Generated from PatchLab binary source candidate `99899b76e006` · registry type 102</small>

## At a glance

| Property | Value |
| --- | --- |
| Category | [Time & Motion](../) |
| Signal role | Audio |
| Audio inputs | 1 |
| Audio outputs | 1 |
| MIDI input | No |
| MIDI output | No |
| CPU class | medium |
| Reported latency | 0 |

## Parameters

| Parameter | ID | Range | Default | Unit / choices | Mod port |
| --- | --- | --- | --- | --- | ---: |
| Density (rate) | `density` | 1 to 200 | 40 | /s | 1 |
| Size (time) | `size` | 5 to 200 | 80 | ms | 2 |
| Pitch (pitch) | `pitch` | -24 to 24 | 0 | st | 3 |
| Position | `pos` | 0 to 1 | 0.3 | — | 4 |
| Spray (time) | `spray` | 0 to 200 | 0 | ms | 5 |
| Mix (mix) | `mix` | 0 to 1 | 1 | — | 6 |

## Declared ports

- Audio inputs: `A`

## Safety and limits

per-grain params (Position, Pitch, Size, Spray) are LATCHED at each grain's onset - they do NOT smooth mid-grain (that is the granular sound). 64-voice pool, steal-oldest when full -> very high Density x long Size thins (grains get stolen before they finish). 0 RT allocation (pool/window/ring built in prepare). Jitter RNG is seeded -> deterministic. At 1x Pitch + full Hann overlap the cloud replays the input flat; Mix 0 = dry only. Capture buffer is 2 s - Position reaches ~1 s back

<details>
<summary>Registry implementation notes</summary>

GRANULAR texture/cloud engine: a circular capture buffer + a grain scheduler firing overlapping Hann-windowed grains from a 64-voice pre-allocated pool (0 RT alloc). Density (grains/sec) sets the onset rate; Size (5-200 ms) the grain length; Pitch (+/-24 st, per-grain) the playback ratio; Position scans into the captured buffer; Spray jitters each grain's start (latched at onset - the granular sound); Mix blends dry. At 1x pitch + full Hann overlap the cloud replays the input flat (COLA floor); sparse + large = a textural shimmer, dense + small = a smooth wash. The async-granular workhorse (Roads, Microsound). Deterministic jitter RNG; denormal-flushed voice sum

</details>

:::caution[Verify in context]
Ranges and declared latency are product facts. Audible outcome, stability, level, and CPU cost still depend on signal, sample rate, block size, routing, modulation, and surrounding blocks.
:::

