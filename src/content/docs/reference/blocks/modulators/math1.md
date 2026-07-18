---
title: "Math1"
description: "unary shaper: abs/invert/1-x/clip/tanh/rectify + square/sqrt(signed)/sin(2pi x: phasor->sine)/floor/wrap/fold"
sidebar:
  order: 23
---

<small>Generated from PatchLab binary source candidate `99899b76e006` · registry type 22</small>

## At a glance

| Property | Value |
| --- | --- |
| Category | [Modulators](../) |
| Signal role | Utility |
| Audio inputs | 1 |
| Audio outputs | 1 |
| MIDI input | No |
| MIDI output | No |
| CPU class | trivial |
| Reported latency | 0 |

## Parameters

| Parameter | ID | Range | Default | Unit / choices | Mod port |
| --- | --- | --- | --- | --- | ---: |
| Mode | `mode` | 0 to 14 | 0 | `Abs`, `Invert`, `1 - x`, `Clip`, `Tanh`, `HalfRect`, `Square`, `Sqrt`, `Sin`, `Floor`, `Wrap`, `Fold`, `Cos`, `Ceil`, `Ln` | 1 |
| Pre (gain) | `pre` | -24 to 24 | 0 | dB | 2 |

## Declared ports

- Audio inputs: `A`

<details>
<summary>Registry implementation notes</summary>

unary shaper: abs/invert/1-x/clip/tanh/rectify + square/sqrt(signed)/sin(2pi x: phasor->sine)/floor/wrap/fold

</details>

:::caution[Verify in context]
Ranges and declared latency are product facts. Audible outcome, stability, level, and CPU cost still depend on signal, sample rate, block size, routing, modulation, and surrounding blocks.
:::

