---
title: "BlockPeak"
description: "BLOCK PEAK: the param-modulation law made VISIBLE."
sidebar:
  order: 175
---

<small>Generated from PatchLab binary source candidate `7fd3876b4e75` · registry type 174</small>

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
| Polarity | `polarity` | 0 to 1 | 0 | `Magnitude`, `Signed` | 1 |

## Declared ports

- Audio inputs: `A`

## Safety and limits

In front of a param it is a mathematical no-op - the engine's own collapse of a constant block returns that same constant on BOTH polarities, so inserting it to inspect the staircase changes nothing. Everywhere else it is a real block-rate staircase. Cables SUM before the collapse, so BlockPeak on one leg of a sum yields peak(A) + B, not peak(A + B). Magnitude into a bipolar-tagged param gives a RECTIFIED drive - a legitimate choice, but a different one than the param's own default

<details>
<summary>Registry implementation notes</summary>

BLOCK PEAK: the param-modulation law made VISIBLE. Every mod cable into a PARAMETER already collapses its whole block to ONE number and holds it for the block - this block performs that exact collapse explicitly and outputs the result as a held stream you can scope, meter or reshape. Polarity Magnitude = max|x| (what an ordinary param takes); Signed = the largest-magnitude sample WITH its sign (what a bipolar-tagged param takes). Placed in front of a param it is a mathematical NO-OP: the engine collapsing a constant block returns that same constant, bit-for-bit, on both polarities - so you can insert it to LOOK at the staircase without changing a single sample. Placed anywhere else it shows you the staircase you have been getting all along. NOTE: cables SUM before the collapse, so BlockPeak on one leg of a sum gives peak(A) + B rather than peak(A + B) - where you put the bridge changes the answer, which is exactly the point of making it a block.

</details>

:::caution[Verify in context]
Ranges and declared latency are product facts. Audible outcome, stability, level, and CPU cost still depend on signal, sample rate, block size, routing, modulation, and surrounding blocks.
:::

