---
title: "Transport"
description: "DAW PLAY STATE -> gate: outputs 1.0 while the host transport is running, else 0.0."
sidebar:
  order: 119
---

<small>Generated from PatchLab binary source candidate `99899b76e006` · registry type 118</small>

## At a glance

| Property | Value |
| --- | --- |
| Category | [Notes & Sequencing](../) |
| Signal role | Modulation |
| Audio inputs | 0 |
| Audio outputs | 1 |
| MIDI input | No |
| MIDI output | No |
| CPU class | trivial |
| Reported latency | 0 |

## Parameters

This block declares no editable parameters.

<details>
<summary>Registry implementation notes</summary>

DAW PLAY STATE -> gate: outputs 1.0 while the host transport is running, else 0.0. Gate a chain to only run during playback, or fire envelopes on play. Reads the playhead the graph forwards (the TempoSync plumbing); unhosted/offline = 0

</details>

:::caution[Verify in context]
Ranges and declared latency are product facts. Audible outcome, stability, level, and CPU cost still depend on signal, sample rate, block size, routing, modulation, and surrounding blocks.
:::

