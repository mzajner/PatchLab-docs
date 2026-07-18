---
title: "FDN"
description: "FEEDBACK DELAY NETWORK (Jot & Chaigne - the reference reverb topology): N delay lines (2/4/8) whose outputs are rotated by a LOSSLESS NxN MixMatrix (Hadamard/Householder/Random, ||"
sidebar:
  order: 91
---

<small>Generated from PatchLab binary source candidate `99899b76e006` · registry type 90</small>

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
| Lines | `lines` | 0 to 2 | 2 | `2`, `4`, `8` | 1 |
| Matrix | `matrix` | 0 to 2 | 0 | `Hadamard`, `Householder`, `Random` | 2 |
| Decay (time) | `rt60` | 0.1 to 12 | 2.5 | s | 3 |
| Size | `size` | 0.2 to 2 | 1 | — | 4 |
| Damp (frequency) | `damp` | 500 to 20000 | 9000 | Hz | 5 |
| Mix (mix) | `mix` | 0 to 1 | 0.3 | — | 6 |

## Declared ports

- Audio inputs: `A`

<details>
<summary>Registry implementation notes</summary>

FEEDBACK DELAY NETWORK (Jot & Chaigne - the reference reverb topology): N delay lines (2/4/8) whose outputs are rotated by a LOSSLESS NxN MixMatrix (Hadamard/Householder/Random, ||Mx||==||x||) and fed back, with per-line Jot damping + decorrelated I/O taps. Reads ALL lines then writes ALL in one sample (the delay-free coupling a DAG cannot schedule - this is why the Feedback zone + MixMatrix shipped first). The lossless rotation keeps the recursion energy-neutral so the tail is colourless, dense and never blows up; Decay (RT60) sets the slope (measured +/-10%), Size scales the room, Damp the brightness. The grown-up reverb core; 0 latency

</details>

:::caution[Verify in context]
Ranges and declared latency are product facts. Audible outcome, stability, level, and CPU cost still depend on signal, sample rate, block size, routing, modulation, and surrounding blocks.
:::

