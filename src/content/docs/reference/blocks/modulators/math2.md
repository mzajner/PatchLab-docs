---
title: "Math2"
description: "binary op on A,B: sub/div/min/max/mod/pow - control algebra; B Off adds a constant to B (Pow + B Off 2 = square)"
sidebar:
  order: 38
---

<small>Generated from PatchLab binary source candidate `99899b76e006` · registry type 37</small>

## At a glance

| Property | Value |
| --- | --- |
| Category | [Modulators](../) |
| Signal role | Utility |
| Audio inputs | 2 |
| Audio outputs | 1 |
| MIDI input | No |
| MIDI output | No |
| CPU class | trivial |
| Reported latency | 0 |

## Parameters

| Parameter | ID | Range | Default | Unit / choices | Mod port |
| --- | --- | --- | --- | --- | ---: |
| Mode | `mode` | 0 to 5 | 0 | `Sub`, `Div`, `Min`, `Max`, `Mod`, `Pow` | 2 |
| B Off | `boff` | -4 to 4 | 0 | — | 3 |

## Declared ports

- Audio inputs: `A`, `B`

## Safety and limits

div/mod by ~zero yields 0; pow is the sign-preserving shaper sign(a)*|a|^b

<details>
<summary>Registry implementation notes</summary>

binary op on A,B: sub/div/min/max/mod/pow - control algebra; B Off adds a constant to B (Pow + B Off 2 = square)

</details>

:::caution[Verify in context]
Ranges and declared latency are product facts. Audible outcome, stability, level, and CPU cost still depend on signal, sample rate, block size, routing, modulation, and surrounding blocks.
:::

