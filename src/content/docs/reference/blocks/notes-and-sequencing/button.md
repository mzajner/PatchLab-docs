---
title: "Button"
description: "manual + programmatic TRIGGER source (fires AR/Ramp/S&H/Sequencer on demand): Mode Bang = a one-sample pulse on each rising edge, Toggle = a latch that flips per edge, Gate = Value"
sidebar:
  order: 112
---

<small>Generated from PatchLab binary source candidate `99899b76e006` · registry type 111</small>

## At a glance

| Property | Value |
| --- | --- |
| Category | [Notes & Sequencing](../) |
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
| Mode | `mode` | 0 to 2 | 0 | `Bang`, `Toggle`, `Gate` | 1 |
| Press | `press` | 0 to 1 | 0 | — | 2 |
| Value | `value` | 0 to 1 | 1 | — | 3 |

## Declared ports

- Audio inputs: `Trig`

<details>
<summary>Registry implementation notes</summary>

manual + programmatic TRIGGER source (fires AR/Ramp/S&H/Sequencer on demand): Mode Bang = a one-sample pulse on each rising edge, Toggle = a latch that flips per edge, Gate = Value while held. An edge is the Press param (UI-clickable 0/1) OR a rising Trig cable edge (Schmitt). Out level = Value. The performable trigger the engine's Trig ports had no clean way to drive (Wave 1: Press via the param row; a big clickable face is a later UI step)

</details>

:::caution[Verify in context]
Ranges and declared latency are product facts. Audible outcome, stability, level, and CPU cost still depend on signal, sample rate, block size, routing, modulation, and surrounding blocks.
:::

