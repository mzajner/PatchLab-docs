---
title: "MIDIMerge"
description: "MIDI MERGE: the explicit, LEGIBLE multi-stream MIDI junction."
sidebar:
  order: 151
---

<small>Generated from PatchLab binary source candidate `99899b76e006` · registry type 150</small>

## At a glance

| Property | Value |
| --- | --- |
| Category | [Notes & Sequencing](../) |
| Signal role | Event |
| Audio inputs | 0 |
| Audio outputs | 0 |
| MIDI input | Yes |
| MIDI output | Yes |
| CPU class | trivial |
| Reported latency | 0 |

## Parameters

This block declares no editable parameters.

<details>
<summary>Registry implementation notes</summary>

MIDI MERGE: the explicit, LEGIBLE multi-stream MIDI junction. The graph already merges every MIDI cable feeding a node's single MIDI input into one time-ordered buffer, so a merge is free by fanning several sources in - this named node makes that merge point VISIBLE and gives ONE clean output to fan back out (keyboard + Arp + ChordGen -> one stream -> a synth). Pure passthrough (the graph did the merge): it leaves the MIDI untouched and only reads it to surface the combined event count + activity pulse. No audio path, allocation-free. Native-first. (MNodes MIDI Merge).

</details>

:::caution[Verify in context]
Ranges and declared latency are product facts. Audible outcome, stability, level, and CPU cost still depend on signal, sample rate, block size, routing, modulation, and surrounding blocks.
:::

