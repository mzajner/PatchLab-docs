---
title: "NoteToGate"
description: "note on/off -> gate control (1.0 while a note is held, else 0.0), latency 0: bridges MIDI into the control plane so any block (Filter cutoff, Multiply VCA) can be note-gated withou"
sidebar:
  order: 71
---

<small>Generated from PatchLab binary source candidate `99899b76e006` · registry type 70</small>

## At a glance

| Property | Value |
| --- | --- |
| Category | [Notes & Sequencing](../) |
| Signal role | Event |
| Audio inputs | 0 |
| Audio outputs | 1 |
| MIDI input | Yes |
| MIDI output | No |
| CPU class | trivial |
| Reported latency | 0 |

## Parameters

| Parameter | ID | Range | Default | Unit / choices | Mod port |
| --- | --- | --- | --- | --- | ---: |
| Retrig | `retrig` | 0 to 1 | 0 | — | 0 |

## Safety and limits

gate is 1.0 while ANY note is held (polyphonic hold), 0.0 when all released; Retrig dips one sample on each new note so re-triggers re-fire; latency 0 (held state reflects this buffer)

<details>
<summary>Registry implementation notes</summary>

note on/off -> gate control (1.0 while a note is held, else 0.0), latency 0: bridges MIDI into the control plane so any block (Filter cutoff, Multiply VCA) can be note-gated without an ADSR; Retrig dips one sample on each new note

</details>

:::caution[Verify in context]
Ranges and declared latency are product facts. Audible outcome, stability, level, and CPU cost still depend on signal, sample rate, block size, routing, modulation, and surrounding blocks.
:::

