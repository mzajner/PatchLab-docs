---
title: "CCTransform"
description: "CC TRANSFORM: remaps + scales + offsets ONE MIDI CC to another."
sidebar:
  order: 134
---

<small>Generated from PatchLab binary source candidate `99899b76e006` · registry type 133</small>

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
| Src CC | `src` | 0 to 127 | 1 | — | 0 |
| Dst CC | `dst` | 0 to 127 | 1 | — | 1 |
| Scale | `scale` | 0 to 4 | 1 | x | 2 |
| Offset | `offset` | -127 to 127 | 0 | — | 3 |

<details>
<summary>Registry implementation notes</summary>

CC TRANSFORM: remaps + scales + offsets ONE MIDI CC to another. Controller events whose number == Src are rewritten to Dst with value = round(value*Scale)+Offset (clamped 0..127); every other message passes untouched. Default Src=Dst=1, Scale=1, Offset=0 = identity. The MIDI utility for 'wire the mod wheel to expression', invert/rescale a pedal, or narrow a controller's range (MNodes MIDI-depth gap). MIDI in -> MIDI out, allocation-free (out buffer pre-sized)

</details>

:::caution[Verify in context]
Ranges and declared latency are product facts. Audible outcome, stability, level, and CPU cost still depend on signal, sample rate, block size, routing, modulation, and surrounding blocks.
:::

