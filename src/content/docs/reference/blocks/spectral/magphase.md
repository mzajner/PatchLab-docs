---
title: "MagPhase"
description: "spectral mag/phase tap (inside an STFT zone): exposes magnitude (ch0) and phase (ch1) as separately patchable cables, with a Mag scale and a Phase Rotate."
sidebar:
  order: 96
---

<small>Generated from PatchLab binary source candidate `99899b76e006` · registry type 95</small>

## At a glance

| Property | Value |
| --- | --- |
| Category | [Spectral](../) |
| Signal role | Audio |
| Audio inputs | 1 |
| Audio outputs | 1 |
| MIDI input | No |
| MIDI output | No |
| CPU class | trivial |
| Reported latency | 0 |

## Parameters

| Parameter | ID | Range | Default | Unit / choices | Mod port |
| --- | --- | --- | --- | --- | ---: |
| Mag (gain) | `mag` | 0 to 4 | 1 | — | 1 |
| Rotate (phase) | `rot` | -3.1416 to 3.1416 | 0 | — | 2 |

## Declared ports

- Audio inputs: `A`

<details>
<summary>Registry implementation notes</summary>

spectral mag/phase tap (inside an STFT zone): exposes magnitude (ch0) and phase (ch1) as separately patchable cables, with a Mag scale and a Phase Rotate. Defaults = transparent passthrough (the COLA identity). The split/merge anchor for hand-built spectral patches

</details>

:::caution[Verify in context]
Ranges and declared latency are product facts. Audible outcome, stability, level, and CPU cost still depend on signal, sample rate, block size, routing, modulation, and surrounding blocks.
:::

