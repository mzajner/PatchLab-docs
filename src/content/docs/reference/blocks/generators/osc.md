---
title: "Osc"
description: "oscillator / FM carrier (silent by default; legacy Mod bus + freq mod port): naive Sine/Tri/Saw/Square + polyBLEP Saw/Square/Pulse/Tri BL - BL shapes for tone duty (~30 dB less ali"
sidebar:
  order: 1
---

<small>Generated from PatchLab binary source candidate `99899b76e006` · registry type 0</small>

## At a glance

| Property | Value |
| --- | --- |
| Category | [Generators](../) |
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
| Freq (frequency) | `freq` | 20 to 4000 | 220 | Hz | 1 |
| Level (level) | `level` | 0 to 1 | 0 | — | 2 |
| Shape | `shape` | 0 to 7 | 0 | `Sine`, `Tri`, `Saw`, `Square`, `Saw BL`, `Square BL`, `Pulse BL`, `Tri BL` | 3 |
| Mod Oct (depth) | `modoct` | 0 to 4 | 0 | — | 4 |
| Pulse W (width) | `pw` | 0.05 to 0.95 | 0.5 | — | 5 |

## Declared ports

- Audio inputs: `Mod`

<details>
<summary>Registry implementation notes</summary>

oscillator / FM carrier (silent by default; legacy Mod bus + freq mod port): naive Sine/Tri/Saw/Square + polyBLEP Saw/Square/Pulse/Tri BL - BL shapes for tone duty (~30 dB less aliasing), Pulse W only shapes Pulse BL

</details>

:::caution[Verify in context]
Ranges and declared latency are product facts. Audible outcome, stability, level, and CPU cost still depend on signal, sample rate, block size, routing, modulation, and surrounding blocks.
:::

