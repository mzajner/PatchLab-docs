---
title: "LastChanged"
description: "LAST CHANGED: an N-input 'last-touched wins' mux - four control inputs A..D, the output follows whichever input MOST RECENTLY moved (crossed the Sens threshold) and holds that sele"
sidebar:
  order: 153
---

<small>Generated from PatchLab binary source candidate `99899b76e006` · registry type 152</small>

## At a glance

| Property | Value |
| --- | --- |
| Category | [Modulators](../) |
| Signal role | Modulation |
| Audio inputs | 4 |
| Audio outputs | 1 |
| MIDI input | No |
| MIDI output | No |
| CPU class | trivial |
| Reported latency | 0 |

## Parameters

| Parameter | ID | Range | Default | Unit / choices | Mod port |
| --- | --- | --- | --- | --- | ---: |
| Sens | `sens` | 0.0001 to 0.1 | 0.001 | — | 4 |

## Declared ports

- Audio inputs: `A`, `B`, `C`, `D`

<details>
<summary>Registry implementation notes</summary>

LAST CHANGED: an N-input 'last-touched wins' mux - four control inputs A..D, the output follows whichever input MOST RECENTLY moved (crossed the Sens threshold) and holds that selection until a different input moves. The niche convenience for 'let the source I just touched drive the destination' (four macro sources -> one param). Composable from Compare + gates but tedious; this is the named primitive. Block-rate change detection on the stereo pairs; the winning input's samples pass through. Unconnected inputs read silence -> never win. Native-first. (MNodes CV Last-Changed).

</details>

:::caution[Verify in context]
Ranges and declared latency are product facts. Audible outcome, stability, level, and CPU cost still depend on signal, sample rate, block size, routing, modulation, and surrounding blocks.
:::

