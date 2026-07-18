---
title: "Meter"
description: "patchable level tap (passthrough): reads the signal level on its face in dB, Mode = Peak (fast attack, Time release) or RMS (Time window) - a wired-in measurement point (every bloc"
sidebar:
  order: 73
---

<small>Generated from PatchLab binary source candidate `99899b76e006` · registry type 72</small>

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
| Mode | `mode` | 0 to 1 | 0 | `Peak`, `RMS` | 1 |
| Time (time) | `time` | 1 to 500 | 100 | ms | 2 |

## Declared ports

- Audio inputs: `A`

## Safety and limits

audio is passed through bit-exact (it only measures); the displayed value is a detector reading (Peak = fast attack + Time release ballistics, RMS = Time-window true RMS - a sine reads its A/sqrt2), not an instantaneous sample; for a control-rate level signal use EnvFollow instead

<details>
<summary>Registry implementation notes</summary>

patchable level tap (passthrough): reads the signal level on its face in dB, Mode = Peak (fast attack, Time release) or RMS (Time window) - a wired-in measurement point (every block already has a hidden peak meter; this is the one you read), drop it anywhere to inspect a level without breaking the chain

</details>

:::caution[Verify in context]
Ranges and declared latency are product facts. Audible outcome, stability, level, and CPU cost still depend on signal, sample rate, block size, routing, modulation, and surrounding blocks.
:::

