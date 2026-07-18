---
title: "CombBank"
description: "parallel damped feedback comb bank (the Schroeder/Moorer reverb front end): N (4-8) Freeverb-form combs summed, coprime lengths so the resonances interleave (no metallic reinforcem"
sidebar:
  order: 90
---

<small>Generated from PatchLab binary source candidate `99899b76e006` · registry type 89</small>

## At a glance

| Property | Value |
| --- | --- |
| Category | [Time & Motion](../) |
| Signal role | Audio |
| Audio inputs | 1 |
| Audio outputs | 1 |
| MIDI input | No |
| MIDI output | No |
| CPU class | light |
| Reported latency | 0 |

## Parameters

| Parameter | ID | Range | Default | Unit / choices | Mod port |
| --- | --- | --- | --- | --- | ---: |
| Combs | `combs` | 4 to 8 | 8 | — | 1 |
| Decay (time) | `rt60` | 0.1 to 12 | 2 | s | 2 |
| Damp | `damp` | 0 to 0.95 | 0.2 | — | 3 |
| Mix (mix) | `mix` | 0 to 1 | 0.3 | — | 4 |

## Declared ports

- Audio inputs: `A`

<details>
<summary>Registry implementation notes</summary>

parallel damped feedback comb bank (the Schroeder/Moorer reverb front end): N (4-8) Freeverb-form combs summed, coprime lengths so the resonances interleave (no metallic reinforcement). Per-comb feedback is derived from the Decay (RT60) target g=10^(-3*D*Ts/RT60) so the whole bank decays at the designed rate; Damp is the in-loop one-pole low-pass (darker tail). A single comb shows resonant peaks at fs/D; the bank is the diffuse body. Each comb is a sample-rate loop core; 0 latency (denormal-flushed Freeverb tail)

</details>

:::caution[Verify in context]
Ranges and declared latency are product facts. Audible outcome, stability, level, and CPU cost still depend on signal, sample rate, block size, routing, modulation, and surrounding blocks.
:::

