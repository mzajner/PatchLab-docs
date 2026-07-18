---
title: "MultiEnv"
description: "MULTIENV: a draw-your-own looping multi-segment envelope - up to 8 breakpoint levels (drag them on the node face) swept over Time."
sidebar:
  order: 141
---

<small>Generated from PatchLab binary source candidate `99899b76e006` · registry type 140</small>

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
| Segs | `segs` | 2 to 8 | 4 | — | 1 |
| Time (time) | `time` | 0.05 to 20 | 1 | s | 2 |
| Mode | `mode` | 0 to 1 | 1 | `OneShot`, `Loop` | 3 |

## Declared ports

- Audio inputs: `Trig`

<details>
<summary>Registry implementation notes</summary>

MULTIENV: a draw-your-own looping multi-segment envelope - up to 8 breakpoint levels (drag them on the node face) swept over Time. Loop mode free-runs = an LFO with a hand-drawn shape; OneShot plays once per Trig rising edge and holds its final level. Trig restarts the sweep in either mode (clock it from Timer/NoteToGate/Euclidean for rhythmic shapes). Breakpoints + per-segment time weights live in the props bag (the LIVE_NODE_BODIES array-props seam, like Sequencer steps) and serialize with the patch. Control 0..1 out on both channels - aim it at any param's mod port. Allocation-free (fixed arrays + a phase accumulator).

</details>

:::caution[Verify in context]
Ranges and declared latency are product facts. Audible outcome, stability, level, and CPU cost still depend on signal, sample rate, block size, routing, modulation, and surrounding blocks.
:::

