---
title: "MonoSplit"
description: "stereo -> two mono buses (L bus = input left, R bus = input right): process each side on its own chain, then StereoMerge them back - per-channel routing without container gymnastic"
sidebar:
  order: 68
---

<small>Generated from PatchLab binary source candidate `99899b76e006` · registry type 67</small>

## At a glance

| Property | Value |
| --- | --- |
| Category | [Routing & Structure](../) |
| Signal role | Utility |
| Audio inputs | 1 |
| Audio outputs | 2 |
| MIDI input | No |
| MIDI output | No |
| CPU class | trivial |
| Reported latency | 0 |

## Parameters

This block declares no editable parameters.

## Declared ports

- Audio inputs: `A`

## Safety and limits

carries the input's left in the L bus (both channels) and right in the R bus - pair with StereoMerge to reconstruct; feeding a non-MonoSplit signal in treats each bus as a mono dup of its channel 0

<details>
<summary>Registry implementation notes</summary>

stereo -> two mono buses (L bus = input left, R bus = input right): process each side on its own chain, then StereoMerge them back - per-channel routing without container gymnastics

</details>

:::caution[Verify in context]
Ranges and declared latency are product facts. Audible outcome, stability, level, and CPU cost still depend on signal, sample rate, block size, routing, modulation, and surrounding blocks.
:::

