---
title: "Scope"
description: "passthrough wave/spectrum display"
sidebar:
  order: 20
---

<small>Generated from PatchLab binary source candidate `99899b76e006` · registry type 19</small>

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
| Mode | `mode` | 0 to 1 | 0 | `Wave`, `Spectrum` | 1 |
| Zoom | `zoom` | 1 to 8 | 2 | — | 2 |
| Trig (threshold) | `trig` | -1 to 1 | 0 | — | 3 |

## Declared ports

- Audio inputs: `A`

## Safety and limits

audio is passed through bit-exact (display only); the FFT and the triggered-frame extraction run on the off-thread analyzer (E2), never in paint() - Trig != 0 locks the Wave trace to the most recent rising crossing of that level for a stable scope (0 = free-run); Spectrum mode is log-frequency, relative dB

<details>
<summary>Registry implementation notes</summary>

passthrough wave/spectrum display

</details>

:::caution[Verify in context]
Ranges and declared latency are product facts. Audible outcome, stability, level, and CPU cost still depend on signal, sample rate, block size, routing, modulation, and surrounding blocks.
:::

