---
title: "CVToMidiCC"
description: "CV -> MIDI CC: injects an LFO/env/any-CV wire out as a MIDI CC, Pitch Bend or Channel Pressure (Aftertouch)."
sidebar:
  order: 145
---

<small>Generated from PatchLab binary source candidate `99899b76e006` · registry type 144</small>

## At a glance

| Property | Value |
| --- | --- |
| Category | [Notes & Sequencing](../) |
| Signal role | Event |
| Audio inputs | 1 |
| Audio outputs | 0 |
| MIDI input | No |
| MIDI output | Yes |
| CPU class | trivial |
| Reported latency | 0 |

## Parameters

| Parameter | ID | Range | Default | Unit / choices | Mod port |
| --- | --- | --- | --- | --- | ---: |
| Type | `type` | 0 to 2 | 0 | `CC`, `Pitch Bend`, `Aftertouch` | 1 |
| CC # | `cc` | 0 to 127 | 1 | — | 2 |
| Channel | `ch` | 1 to 16 | 1 | — | 3 |
| Lo | `lo` | 0 to 127 | 0 | — | 4 |
| Hi | `hi` | 0 to 127 | 127 | — | 5 |

## Declared ports

- Audio inputs: `A`

<details>
<summary>Registry implementation notes</summary>

CV -> MIDI CC: injects an LFO/env/any-CV wire out as a MIDI CC, Pitch Bend or Channel Pressure (Aftertouch). Distinct from CCTransform (which REMAPS an existing CC) - this SOURCES a controller from the control plane. The CV (input 0) is read block-rate and mapped Lo..Hi across 0..127; a controller event is emitted ONLY when the value changes (rate-limited, no MIDI flooding). Type = CC / Pitch Bend / Aftertouch; CC# + Channel address it. One CV input, MIDI out (incoming messages pass thru). The 'wire an LFO to the mod wheel / automate a synth CC from modulation' utility (MNodes MIDI CC Inject gap). Allocation-free (out pre-sized).

</details>

:::caution[Verify in context]
Ranges and declared latency are product facts. Audible outcome, stability, level, and CPU cost still depend on signal, sample rate, block size, routing, modulation, and surrounding blocks.
:::

