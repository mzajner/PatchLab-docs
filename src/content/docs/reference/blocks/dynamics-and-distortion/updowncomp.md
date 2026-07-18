---
title: "UpDownComp"
description: "two-sided OTT cell: compresses DOWN above Hi Thr and UP below Lo Thr toward the zone between (upward capped +24 dB, fades out at silence; ratios 1 = off) - per-band loudness; 3 on "
sidebar:
  order: 61
---

<small>Generated from PatchLab binary source candidate `99899b76e006` · registry type 60</small>

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
| Hi Thr (threshold) | `hithresh` | -60 to 0 | 0 | dB | 1 |
| Hi Ratio (ratio) | `hiratio` | 1 to 20 | 1 | :1 | 2 |
| Lo Thr (threshold) | `lothresh` | -80 to 0 | -80 | dB | 3 |
| Lo Ratio (ratio) | `loratio` | 1 to 20 | 1 | :1 | 4 |
| Knee | `knee` | 0 to 12 | 6 | dB | 5 |
| Attack (time) | `attack` | 0.1 to 200 | 10 | ms | 6 |
| Release (time) | `release` | 5 to 1000 | 100 | ms | 7 |

## Declared ports

- Audio inputs: `A`

## Safety and limits

defaults are fully transparent (both ratios 1); upward half is capped +24 dB and crossfades to unity below -82 dBFS so silence/noise floors are not boosted; inverted thresholds simply sum both curves

<details>
<summary>Registry implementation notes</summary>

two-sided OTT cell: compresses DOWN above Hi Thr and UP below Lo Thr toward the zone between (upward capped +24 dB, fades out at silence; ratios 1 = off) - per-band loudness; 3 on a Crossover = full OTT

</details>

:::caution[Verify in context]
Ranges and declared latency are product facts. Audible outcome, stability, level, and CPU cost still depend on signal, sample rate, block size, routing, modulation, and surrounding blocks.
:::

