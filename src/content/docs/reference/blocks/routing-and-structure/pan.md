---
title: "Pan"
description: "equal-power panner (constant power, -3 dB at center): Pan is a mod target - LFO -> Pan = auto-pan, TempoSync -> LFO Sync -> Pan = synced tremolo-pan; smoothed so sweeps are click-f"
sidebar:
  order: 67
---

<small>Generated from PatchLab binary source candidate `99899b76e006` · registry type 66</small>

## At a glance

| Property | Value |
| --- | --- |
| Category | [Routing & Structure](../) |
| Signal role | Utility |
| Audio inputs | 1 |
| Audio outputs | 1 |
| MIDI input | No |
| MIDI output | No |
| CPU class | trivial |
| Reported latency | 0 |

## Parameters

| Parameter | ID | Range | Default | Unit / choices | Mod port |
| --- | --- | --- | --- | --- | ---: |
| Pan (pan) | `pan` | -1 to 1 | 0 | — | 1 |

## Declared ports

- Audio inputs: `A`

## Safety and limits

equal-power law: center is -3 dB on BOTH channels by design (constant power, no center loudness bump); a mono source pans correctly, a wide stereo source narrows toward the panned side

<details>
<summary>Registry implementation notes</summary>

equal-power panner (constant power, -3 dB at center): Pan is a mod target - LFO -> Pan = auto-pan, TempoSync -> LFO Sync -> Pan = synced tremolo-pan; smoothed so sweeps are click-free

</details>

:::caution[Verify in context]
Ranges and declared latency are product facts. Audible outcome, stability, level, and CPU cost still depend on signal, sample rate, block size, routing, modulation, and surrounding blocks.
:::

