---
title: "BufRead"
description: "BUFFER READ: a fractional read head on Slot's memory, Time behind the write head."
sidebar:
  order: 174
---

<small>Generated from PatchLab binary source candidate `7fd3876b4e75` · registry type 173</small>

## At a glance

| Property | Value |
| --- | --- |
| Category | [Time & Motion](../) |
| Signal role | Audio |
| Audio inputs | 2 |
| Audio outputs | 1 |
| MIDI input | No |
| MIDI output | No |
| CPU class | light |
| Reported latency | 0 when ORDERED (BufWrite's out cabled into the Order pin: the read sees this block's samples and the delay is exactly Time). UNORDERED - no Order cable, or the write sits downstream - the delay is exactly Time + ONE BLOCK, deterministically, and the face reports which case you are in. Separately, each interpolation policy has a MINIMUM reachable delay declared in its own name (Nearest 0 / Linear 1 / Cubic 2 samples); a Time below that clamps up to it and the face says so |

## Parameters

| Parameter | ID | Range | Default | Unit / choices | Mod port |
| --- | --- | --- | --- | --- | ---: |
| Slot | `slot` | 0 to 7 | 0 | `1`, `2`, `3`, `4`, `5`, `6`, `7`, `8` | 2 |
| Time (time) | `time` | 0 to 2000 | 100 | ms | 3 |
| Interp | `interp` | 0 to 2 | 2 | `Nearest (>=0)`, `Linear (>=1)`, `Cubic (>=2)` | 4 |
| Mod Depth (depth) | `moddepth` | 0 to 50 | 0 | ms | 5 |

## Declared ports

- Audio inputs: `Order`, `Mod`

## Safety and limits

The delay you get depends on graph ORDER: cable BufWrite's out into the Order pin and it is exactly Time; without that ordering it is exactly Time + one block. Both are deterministic and the face reports which. Interp's minimum reachable delay is declared IN THE POLICY NAME (Nearest 0 / Linear 1 / Cubic 2 smp) because readHermite is a 4-point CENTRED form needing x[k-1..k+2]; a shorter Time clamps up VISIBLY. Thiran and Sinc are deliberately not offered - both carry per-reader state, which would break one-buffer-many-heads. A BufWrite->BufRead->BufWrite cycle is not a legal graph; loop inside a Feedback zone

<details>
<summary>Registry implementation notes</summary>

BUFFER READ: a fractional read head on Slot's memory, Time behind the write head. Interp is a DECLARED POLICY, not a hidden quality switch: Nearest (>=0, the bit-exact integer tap) / Linear (>=1) / Cubic (>=2, the modulation default) - the minimum delay each policy can actually reach is IN ITS NAME, and a Time below it clamps VISIBLY (the face says so) instead of silently. Contrast Delay, which switches integer->Hermite only while its Time mod port happens to be live; this block runs the same read whether or not you modulate it. The Mod input modulates Time per SAMPLE, which is what makes chorus/flanger/doppler sweeps real rather than block-stepped. The Order input is the ORDERING PIN - wire BufWrite's out to it: ordered, the read sees this block's samples and the delay is exactly Time; unordered, the delay is exactly Time + one block, and the face tells you which one you got. Stateless, so any number of BufReads share one slot for free. No feedback of its own: a write-read cycle is not a legal graph - loop inside a Feedback zone.

</details>

:::caution[Verify in context]
Ranges and declared latency are product facts. Audible outcome, stability, level, and CPU cost still depend on signal, sample rate, block size, routing, modulation, and surrounding blocks.
:::

