---
title: "Transpose"
description: "transposes note events by Semis (-48..+48 st, clamped 0..127), events thru: the single-purpose shifter - chain before NoteOsc/ADSR for octave/interval splits (MidiFilt also transpo"
sidebar:
  order: 72
---

<small>Generated from PatchLab binary source candidate `99899b76e006` · registry type 71</small>

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

| Parameter | ID | Range | Default | Unit / choices | Mod port |
| --- | --- | --- | --- | --- | ---: |
| Semis (pitch) | `semi` | -48 to 48 | 0 | st | 0 |

## Safety and limits

shifts note numbers by Semis and clamps to 0..127 (notes pushed past the ends stick at 0/127 - they do not wrap); events only, no audio path

<details>
<summary>Registry implementation notes</summary>

transposes note events by Semis (-48..+48 st, clamped 0..127), events thru: the single-purpose shifter - chain before NoteOsc/ADSR for octave/interval splits (MidiFilt also transposes alongside range/channel)

</details>

:::caution[Verify in context]
Ranges and declared latency are product facts. Audible outcome, stability, level, and CPU cost still depend on signal, sample rate, block size, routing, modulation, and surrounding blocks.
:::

