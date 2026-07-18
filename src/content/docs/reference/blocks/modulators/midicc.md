---
title: "MidiCC"
description: "MIDI control -> 0..1 signal: CC number, PitchBend (centred 0.5) or Aftertouch, lag-smoothed - hardware knobs as mod sources"
sidebar:
  order: 49
---

<small>Generated from PatchLab binary source candidate `99899b76e006` · registry type 48</small>

## At a glance

| Property | Value |
| --- | --- |
| Category | [Modulators](../) |
| Signal role | Modulation |
| Audio inputs | 0 |
| Audio outputs | 1 |
| MIDI input | Yes |
| MIDI output | No |
| CPU class | trivial |
| Reported latency | 0 |

## Parameters

| Parameter | ID | Range | Default | Unit / choices | Mod port |
| --- | --- | --- | --- | --- | ---: |
| Mode | `mode` | 0 to 2 | 0 | `CC`, `PitchBend`, `Aftertouch` | 0 |
| CC# | `cc` | 0 to 127 | 1 | — | 1 |
| Smooth (time) | `smooth` | 0 to 500 | 20 | ms | 2 |

<details>
<summary>Registry implementation notes</summary>

MIDI control -> 0..1 signal: CC number, PitchBend (centred 0.5) or Aftertouch, lag-smoothed - hardware knobs as mod sources

</details>

:::caution[Verify in context]
Ranges and declared latency are product facts. Audible outcome, stability, level, and CPU cost still depend on signal, sample rate, block size, routing, modulation, and surrounding blocks.
:::

