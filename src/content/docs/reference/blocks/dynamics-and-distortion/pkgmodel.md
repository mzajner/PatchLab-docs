---
title: "PkgModel"
description: "PACKAGE MODEL: hosts a content-addressed model through a compiled-in Pack runtime."
sidebar:
  order: 169
---

<small>Generated from PatchLab binary source candidate `96ae72bb5451` · registry type 168</small>

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
| Input | `inputGainDb` | -24 to 24 | 0 | dB | 1 |
| Output | `outputGainDb` | -24 to 24 | 0 | dB | 2 |
| Mix | `mix` | 0 to 100 | 100 | % | 3 |

## Declared ports

- Audio inputs: `A`

<details>
<summary>Registry implementation notes</summary>

PACKAGE MODEL: hosts a content-addressed model through a compiled-in Pack runtime. The first Pack is org.patchlab.nam/model: stereo is processed as two independent mono NAM instances, with off-thread hash verification/loading/prewarm, a 200-tap sample-rate island, Full/Lite saved quality, and 20 ms model/bypass transitions. Missing Packs or resources preserve the node and pass latency-aligned dry audio. Input, Output and Mix are the fixed automatable parameters; model identity and quality are saved properties.

</details>

:::caution[Verify in context]
Ranges and declared latency are product facts. Audible outcome, stability, level, and CPU cost still depend on signal, sample rate, block size, routing, modulation, and surrounding blocks.
:::

