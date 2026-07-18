---
title: "StereoMerge"
description: "two ins -> stereo out (input L's left = output LEFT, input R's left = output RIGHT): the exact inverse of MonoSplit - split, process per side, merge back (MonoSplit -> StereoMerge "
sidebar:
  order: 69
---

<small>Generated from PatchLab binary source candidate `99899b76e006` · registry type 68</small>

## At a glance

| Property | Value |
| --- | --- |
| Category | [Routing & Structure](../) |
| Signal role | Utility |
| Audio inputs | 2 |
| Audio outputs | 1 |
| MIDI input | No |
| MIDI output | No |
| CPU class | trivial |
| Reported latency | 0 |

## Parameters

This block declares no editable parameters.

## Declared ports

- Audio inputs: `L`, `R`

## Safety and limits

reads input L's LEFT channel and input R's LEFT channel only (the MonoSplit convention) - the right channel of each input bus is ignored; MonoSplit -> StereoMerge is bit-exact

<details>
<summary>Registry implementation notes</summary>

two ins -> stereo out (input L's left = output LEFT, input R's left = output RIGHT): the exact inverse of MonoSplit - split, process per side, merge back (MonoSplit -> StereoMerge = bit-exact passthrough)

</details>

:::caution[Verify in context]
Ranges and declared latency are product facts. Audible outcome, stability, level, and CPU cost still depend on signal, sample rate, block size, routing, modulation, and surrounding blocks.
:::

