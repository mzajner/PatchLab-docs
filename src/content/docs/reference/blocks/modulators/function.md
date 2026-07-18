---
title: "Function"
description: "FUNCTION GENERATOR (Maths/DAHDSR cell): a rising Trig ramps 0->1 over Rise then 1->0 over Fall, each through Curve (0.5 = linear, lower = slower start)."
sidebar:
  order: 126
---

<small>Generated from PatchLab binary source candidate `99899b76e006` · registry type 125</small>

## At a glance

| Property | Value |
| --- | --- |
| Category | [Modulators](../) |
| Signal role | Modulation |
| Audio inputs | 1 |
| Audio outputs | 1 |
| MIDI input | No |
| MIDI output | No |
| CPU class | trivial |
| Reported latency | 0 |

## Parameters

| Parameter | ID | Range | Default | Unit / choices | Mod port |
| --- | --- | --- | --- | --- | ---: |
| Rise (time) | `rise` | 1 to 5000 | 200 | ms | 1 |
| Fall (time) | `fall` | 1 to 5000 | 400 | ms | 2 |
| Curve | `curve` | 0 to 1 | 0.5 | — | 3 |
| Mode | `mode` | 0 to 2 | 0 | `Trig`, `Loop`, `Gate` | 4 |

## Declared ports

- Audio inputs: `Trig`

<details>
<summary>Registry implementation notes</summary>

FUNCTION GENERATOR (Maths/DAHDSR cell): a rising Trig ramps 0->1 over Rise then 1->0 over Fall, each through Curve (0.5 = linear, lower = slower start). Mode Trig (one-shot) / Loop (a shapeable ASYMMETRIC LFO - set Rise!=Fall for a ramp/saw-ish shape no fixed LFO has) / Gate (run while held). Beyond AR (adds curve + loop) and beyond the LFO's fixed symmetric shapes - the do-anything envelope/LFO

</details>

:::caution[Verify in context]
Ranges and declared latency are product facts. Audible outcome, stability, level, and CPU cost still depend on signal, sample rate, block size, routing, modulation, and surrounding blocks.
:::

