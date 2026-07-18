---
title: "AllpassDelay"
description: "Schroeder allpass DELAY (the reverb-diffusion atom, NOT the 1-2-sample biquad Allpass): a long delay line wrapped in an allpass topology - |H|==1 (perfectly flat magnitude), but th"
sidebar:
  order: 89
---

<small>Generated from PatchLab binary source candidate `99899b76e006` · registry type 88</small>

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
| Time (time) | `time` | 1 to 100 | 20 | ms | 1 |
| Diffuse (amount) | `g` | 0 to 0.95 | 0.7 | — | 2 |
| Damp (frequency) | `damp` | 200 to 20000 | 20000 | Hz | 3 |
| Mod (depth) | `moddepth` | 0 to 1 | 0 | — | 4 |
| Rate (rate) | `modrate` | 0.05 to 8 | 0.5 | Hz | 5 |
| Mix (mix) | `mix` | 0 to 1 | 1 | — | 6 |

## Declared ports

- Audio inputs: `A`

<details>
<summary>Registry implementation notes</summary>

Schroeder allpass DELAY (the reverb-diffusion atom, NOT the 1-2-sample biquad Allpass): a long delay line wrapped in an allpass topology - |H|==1 (perfectly flat magnitude), but the memory is z-D with D in the tens of ms. An impulse becomes a recirculating echo train at spacing Time, decaying geometrically by Diffuse (g). In-loop Damp (one-pole LPF on the delayed term) darkens each recirculation; the Mod port (depth + Rate) wobbles the read for chorusing. Static reads snap to an integer sample so the allpass is EXACT - chain several with coprime times = a Diffuser. Single-sample recursion core; 0 latency

</details>

:::caution[Verify in context]
Ranges and declared latency are product facts. Audible outcome, stability, level, and CPU cost still depend on signal, sample rate, block size, routing, modulation, and surrounding blocks.
:::

