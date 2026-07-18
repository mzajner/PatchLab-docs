---
title: "OnLoad"
description: "ON LOAD: fires ONE one-sample 1.0 pulse (both channels) Delay ms after playback starts - the load/startup trigger."
sidebar:
  order: 157
---

<small>Generated from PatchLab binary source candidate `99899b76e006` · registry type 156</small>

## At a glance

| Property | Value |
| --- | --- |
| Category | [Modulators](../) |
| Signal role | Modulation |
| Audio inputs | 0 |
| Audio outputs | 1 |
| MIDI input | No |
| MIDI output | No |
| CPU class | trivial |
| Reported latency | 0 |

## Parameters

| Parameter | ID | Range | Default | Unit / choices | Mod port |
| --- | --- | --- | --- | --- | ---: |
| Delay (time) | `delay` | 0 to 5000 | 0 | ms | 0 |
| Retrig | `retrig` | 0 to 1 | 0 | `Once`, `Every Play` | 1 |

<details>
<summary>Registry implementation notes</summary>

ON LOAD: fires ONE one-sample 1.0 pulse (both channels) Delay ms after playback starts - the load/startup trigger. Retrig = Once fires only on the FIRST prepareToPlay after the node loads (project/preset-load automation: kick something exactly once as the patch comes up); Every Play re-arms on every prepareToPlay (each transport/graph start). Aim it at any Trig port: OnLoad -> Ramp = an automatic fade-in on load, OnLoad -> S&H = latch an initial random, OnLoad -> Sequencer.Clock = step once. Sample-exact (the countdown is kept in samples; the pulse lands inside the crossing block). Audio out only, silent except the single pulse; face = a power-on glyph that lights once fired. Allocation-free. Native-first. (MNodes On Load).

</details>

:::caution[Verify in context]
Ranges and declared latency are product facts. Audible outcome, stability, level, and CPU cost still depend on signal, sample rate, block size, routing, modulation, and surrounding blocks.
:::

