---
title: "Accumulate"
description: "LEAKY INTEGRATOR / CLOCK COUNTER on a control wire (the math algebra cell - a touch of state)."
sidebar:
  order: 107
---

<small>Generated from PatchLab binary source candidate `99899b76e006` · registry type 106</small>

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
| Rate (rate) | `rate` | -16 to 16 | 1 | x | 2 |
| Leak | `leak` | 0 to 1 | 1 | — | 3 |
| Mode | `mode` | 0 to 1 | 0 | `Integrate`, `Count` | 4 |

## Declared ports

- Audio inputs: `In`, `Reset`

## Safety and limits

RUNS AWAY with Leak = 1 (lossless integrate) and NO Reset: a non-zero input integrates unbounded toward the internal finite clamp - always pair a lossless accumulate with a periodic Reset (Timer/Compare -> Reset), or use Leak < 1 so it settles to the steady state Rate*In/(1-Leak). A rising edge on the Reset wire (Schmitt at 0.5) zeroes it; the output holds 0 until the first input/edge. Count mode ignores the In wire (it steps by Rate per Reset edge). The output is a raw magnitude (a sum/count, not 0..1) - feed Math/MapRange to scale it for a Mod port

<details>
<summary>Registry implementation notes</summary>

LEAKY INTEGRATOR / CLOCK COUNTER on a control wire (the math algebra cell - a touch of state). Integrate mode: out = Leak*out + Rate*In per sample, so Leak = 1 is a running SUM / ramp generator (feed a Const for a slope; a constant c integrates to c*n) and Leak < 1 is a decaying integrator that settles to the steady state Rate*In/(1-Leak) - a smoother/envelope. Count mode: out increments by Rate (the step) on each rising edge of the Reset input - a clock/event counter (Timer -> Reset = a beat counter; x1/16 step = a step sequencer index). A rising edge on the Reset wire (Schmitt at 0.5, the S&H/Compare trigger idiom) zeroes the accumulator. Output is clamped finite - but with Leak = 1 and NO Reset an Integrate run RUNS AWAY toward the clamp, so pair a periodic Reset (Timer/Compare) with a lossless accumulate. Holds 0 until the first input/edge

</details>

:::caution[Verify in context]
Ranges and declared latency are product facts. Audible outcome, stability, level, and CPU cost still depend on signal, sample rate, block size, routing, modulation, and surrounding blocks.
:::

