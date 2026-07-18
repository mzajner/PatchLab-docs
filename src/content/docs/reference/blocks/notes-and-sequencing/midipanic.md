---
title: "MidiPanic"
description: "MIDI PANIC: the all-notes-off broadcast - the stuck-note rescue button."
sidebar:
  order: 155
---

<small>Generated from PatchLab binary source candidate `99899b76e006` · registry type 154</small>

## At a glance

| Property | Value |
| --- | --- |
| Category | [Notes & Sequencing](../) |
| Signal role | Event |
| Audio inputs | 1 |
| Audio outputs | 0 |
| MIDI input | Yes |
| MIDI output | Yes |
| CPU class | trivial |
| Reported latency | 0 |

## Parameters

| Parameter | ID | Range | Default | Unit / choices | Mod port |
| --- | --- | --- | --- | --- | ---: |
| Panic | `panic` | 0 to 1 | 0 | `-`, `Fire` | 1 |

## Declared ports

- Audio inputs: `A`

<details>
<summary>Registry implementation notes</summary>

MIDI PANIC: the all-notes-off broadcast - the stuck-note rescue button. When the Panic param crosses 0.5 upward (click the row / automate it) OR a rising edge lands on the Trig audio input (Schmitt at 0.5, so any Button/Timer/Compare wire can fire it), it emits All Notes Off (CC 123) + All Sound Off (CC 120) + sustain-pedal-off (CC 64 = 0) on ALL 16 channels into its MIDI output, timestamped at the edge sample. Incoming MIDI passes through, so it sits inline before a synth and shares the wire. Face = one big round PANIC button that flashes when fired (+ a fire counter). Allocation-free (out pre-sized). Native-first. (MNodes MIDI Panic).

</details>

:::caution[Verify in context]
Ranges and declared latency are product facts. Audible outcome, stability, level, and CPU cost still depend on signal, sample rate, block size, routing, modulation, and surrounding blocks.
:::

