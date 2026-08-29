---
title: "BufPoke"
description: "BUFFER POKE: a POSITIONED write - writes Value into Slot at Index instead of at an advancing head."
sidebar:
  order: 178
---

<small>Generated from PatchLab binary source candidate `7fd3876b4e75` · registry type 177</small>

## At a glance

| Property | Value |
| --- | --- |
| Category | [Time & Motion](../) |
| Signal role | Audio |
| Audio inputs | 2 |
| Audio outputs | 1 |
| MIDI input | No |
| MIDI output | No |
| CPU class | trivial |
| Reported latency | 0 |

## Parameters

| Parameter | ID | Range | Default | Unit / choices | Mod port |
| --- | --- | --- | --- | --- | ---: |
| Slot | `slot` | 0 to 7 | 0 | `1`, `2`, `3`, `4`, `5`, `6`, `7`, `8` | 2 |
| Mode | `mode` | 0 to 1 | 0 | `Overwrite`, `Add` | 3 |

## Declared ports

- Audio inputs: `Value`, `Index`

## Safety and limits

Add mode with a STATIONARY Index sums every sample into one cell - an integrator, not an overdub. The sum is clamped so it cannot run away, but the result is a held ramp; move the index. Unlike BufWrite, poke advances no head, so the cell it reads in Add mode IS the cell it writes - there is no one-lap-back subtlety here, and that asymmetry is deliberate

<details>
<summary>Registry implementation notes</summary>

BUFFER POKE: a POSITIONED write - writes Value into Slot at Index instead of at an advancing head. BufWrite is the tape; this is the pencil. Mode Overwrite replaces the cell, Add sums into it (overdub). Index is normalized 0..1 as TableRead's is, but the two do NOT land on the same cell mid-block: TableRead compensates for the write head advancing under it during a block, and Poke, which advances nothing, does not. They coincide at a block boundary and drift by up to one block within one. If you are painting cells to read back, poke and read in the same graph position. Poke advances NOTHING, which is what makes it different from BufWrite in one way that matters: hold Index still in Add mode and every sample sums into ONE cell, which is an integrator - the sum is clamped so it cannot run away, but a stationary index in Add mode is a held ramp, not an overdub. Move the index.

</details>

:::caution[Verify in context]
Ranges and declared latency are product facts. Audible outcome, stability, level, and CPU cost still depend on signal, sample rate, block size, routing, modulation, and surrounding blocks.
:::

