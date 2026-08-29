---
title: "EventStep"
description: "EVENT STEP: MIDI event -> control stream, stepping at the event's OWN sample offset (zero-order hold, latency 0)."
sidebar:
  order: 176
---

<small>Generated from PatchLab binary source candidate `7fd3876b4e75` · registry type 175</small>

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
| Source | `source` | 0 to 4 | 0 | `CC`, `PitchBend`, `Aftertouch`, `Velocity`, `Note` | 0 |
| CC# | `cc` | 0 to 127 | 1 | — | 1 |
| Initial (level) | `initial` | 0 to 1 | 0 | — | 2 |

## Safety and limits

No smoothing whatsoever: a CC jump is a one-sample step, by design (chain a Smoother for the de-zipper). Outputs the Initial value until the first matching event arrives - 0, i.e. silent, by default. Sample-accurate where MidiCC is block-quantised

<details>
<summary>Registry implementation notes</summary>

EVENT STEP: MIDI event -> control stream, stepping at the event's OWN sample offset (zero-order hold, latency 0). Source picks the payload: CC value / PitchBend / Aftertouch / Velocity / Note number. This is the sample-accurate sibling of MidiCC, which drains the whole block's events BEFORE the sample loop, collapses them to one value and then lags it - fine for a knob, wrong for a fast controller sweep or a step sequencer feeding a pitch, and invisible either way. No smoothing at all here: chain a Smoother if you want the de-zipper, so the conversion and the smoothing are two visible acts instead of one hidden one.

</details>

:::caution[Verify in context]
Ranges and declared latency are product facts. Audible outcome, stability, level, and CPU cost still depend on signal, sample rate, block size, routing, modulation, and surrounding blocks.
:::

