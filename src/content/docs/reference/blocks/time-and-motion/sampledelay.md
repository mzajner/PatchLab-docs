---
title: "SampleDelay"
description: "z^-n integer spacer (0-256 smp, sample-exact): align parallel paths, set feedback-loop timing after Receive; n steps click by design - musical time lives in FixDelay/Delay"
sidebar:
  order: 53
---

<small>Generated from PatchLab binary source candidate `99899b76e006` · registry type 52</small>

## At a glance

| Property | Value |
| --- | --- |
| Category | [Time & Motion](../) |
| Signal role | Audio |
| Audio inputs | 1 |
| Audio outputs | 1 |
| MIDI input | No |
| MIDI output | No |
| CPU class | trivial |
| Reported latency | 0 |

## Parameters

| Parameter | ID | Range | Default | Unit / choices | Mod port |
| --- | --- | --- | --- | --- | ---: |
| Samples (time) | `n` | 0 to 256 | 0 | — | 1 |

## Declared ports

- Audio inputs: `A`

## Safety and limits

n is exact and unsmoothed: changing it steps instantly (clicks by design) - use FixDelay/Delay for musical time

<details>
<summary>Registry implementation notes</summary>

z^-n integer spacer (0-256 smp, sample-exact): align parallel paths, set feedback-loop timing after Receive; n steps click by design - musical time lives in FixDelay/Delay

</details>

:::caution[Verify in context]
Ranges and declared latency are product facts. Audible outcome, stability, level, and CPU cost still depend on signal, sample rate, block size, routing, modulation, and surrounding blocks.
:::

