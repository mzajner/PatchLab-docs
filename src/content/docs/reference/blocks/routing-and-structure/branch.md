---
title: "Branch"
description: "control DEMUX: routes the In signal to ONE of 4 outputs (Route, a mod target); unselected outputs read 0 (Zero) or hold their last routed value (Hold)."
sidebar:
  order: 121
---

<small>Generated from PatchLab binary source candidate `99899b76e006` · registry type 120</small>

## At a glance

| Property | Value |
| --- | --- |
| Category | [Routing & Structure](../) |
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
| Route | `route` | 0 to 3 | 0 | `Out 1`, `Out 2`, `Out 3`, `Out 4` | 1 |
| Mode | `mode` | 0 to 1 | 0 | `Zero`, `Hold` | 2 |

## Declared ports

- Audio inputs: `A`

<details>
<summary>Registry implementation notes</summary>

control DEMUX: routes the In signal to ONE of 4 outputs (Route, a mod target); unselected outputs read 0 (Zero) or hold their last routed value (Hold). 'Send this mod/trigger to a chosen destination' - and with a counter/Sequencer/Turing into Route it becomes a sequential switch (the 4015 idiom). The selectable counterpart to free DAG fan-out (one out -> many ins, which needs no block)

</details>

:::caution[Verify in context]
Ranges and declared latency are product facts. Audible outcome, stability, level, and CPU cost still depend on signal, sample rate, block size, routing, modulation, and surrounding blocks.
:::

