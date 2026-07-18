---
title: "Faders"
description: "CROSSFADE / MORPH bank: one Pos input (0..1) -> Count output gains that crossfade as Pos sweeps (triangular windows - Linear sums to 1, EqPower keeps constant power)."
sidebar:
  order: 122
---

<small>Generated from PatchLab binary source candidate `99899b76e006` · registry type 121</small>

## At a glance

| Property | Value |
| --- | --- |
| Category | [Modulators](../) |
| Signal role | Modulation |
| Audio inputs | 1 |
| Audio outputs | 4 |
| MIDI input | No |
| MIDI output | No |
| CPU class | trivial |
| Reported latency | 0 |

## Parameters

| Parameter | ID | Range | Default | Unit / choices | Mod port |
| --- | --- | --- | --- | --- | ---: |
| Count | `count` | 2 to 4 | 4 | — | 1 |
| Curve | `curve` | 0 to 1 | 1 | `Linear`, `EqPower` | 2 |

## Declared ports

- Audio inputs: `Pos`

<details>
<summary>Registry implementation notes</summary>

CROSSFADE / MORPH bank: one Pos input (0..1) -> Count output gains that crossfade as Pos sweeps (triangular windows - Linear sums to 1, EqPower keeps constant power). Multiply N sources by these gains for a smooth scene/timbre morph from a single knob/LFO/XY/Sequencer. The morph-macro cell (one position blends across many destinations)

</details>

:::caution[Verify in context]
Ranges and declared latency are product facts. Audible outcome, stability, level, and CPU cost still depend on signal, sample rate, block size, routing, modulation, and surrounding blocks.
:::

