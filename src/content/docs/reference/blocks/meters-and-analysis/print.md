---
title: "Print"
description: "PRINT / VALUE MONITOR: a numeric readout of ANY wire - the current value (Mode = Raw / dB / Note), a recent-history sparkline, a running recent min/max, and a change-log ring of th"
sidebar:
  order: 143
---

<small>Generated from PatchLab binary source candidate `99899b76e006` · registry type 142</small>

## At a glance

| Property | Value |
| --- | --- |
| Category | [Meters & Analysis](../) |
| Signal role | Visual |
| Audio inputs | 1 |
| Audio outputs | 1 |
| MIDI input | No |
| MIDI output | No |
| CPU class | trivial |
| Reported latency | 0 |

## Parameters

| Parameter | ID | Range | Default | Unit / choices | Mod port |
| --- | --- | --- | --- | --- | ---: |
| Mode | `mode` | 0 to 2 | 0 | `Raw`, `dB`, `Note` | 1 |

## Declared ports

- Audio inputs: `A`

<details>
<summary>Registry implementation notes</summary>

PRINT / VALUE MONITOR: a numeric readout of ANY wire - the current value (Mode = Raw / dB / Note), a recent-history sparkline, a running recent min/max, and a change-log ring of the last distinct values. The debug AND agent-legibility primitive: insert it inline to READ what a CV or audio wire is actually doing (CV = audio bus, so it monitors both). PASSTHROUGH - the audio is untouched; all capture is lock-free (atomics + SPSC rings), drawFace only reads. Pairs with ScaleQuant/MicroQuant (Note mode shows the fractional MIDI note). MNodes Print / HISE gap.

</details>

:::caution[Verify in context]
Ranges and declared latency are product facts. Audible outcome, stability, level, and CPU cost still depend on signal, sample rate, block size, routing, modulation, and surrounding blocks.
:::

