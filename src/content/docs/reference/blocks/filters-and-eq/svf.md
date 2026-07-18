---
title: "SVF"
description: "TPT state-variable filter (Simper/Cytomic trapezoidal) - LP/HP/BP/Notch/AP/Peak, modulation-safe; cutoff mod = wah/sweep."
sidebar:
  order: 6
---

<small>Generated from PatchLab binary source candidate `99899b76e006` · registry type 5</small>

## At a glance

| Property | Value |
| --- | --- |
| Category | [Filters & EQ](../) |
| Signal role | Audio |
| Audio inputs | 2 |
| Audio outputs | 1 |
| MIDI input | No |
| MIDI output | No |
| CPU class | trivial |
| Reported latency | 0 |

## Parameters

| Parameter | ID | Range | Default | Unit / choices | Mod port |
| --- | --- | --- | --- | --- | ---: |
| Type | `type` | 0 to 5 | 0 | `LP`, `HP`, `BP`, `Notch`, `AP`, `Peak` | 2 |
| Cutoff (frequency) | `cutoff` | 20 to 20000 | 1200 | Hz | 3 |
| Reso (resonance) | `res` | 0.2 to 8 | 0.71 | — | 4 |
| Mod Oct (depth) | `modoct` | 0 to 6 | 0 | — | 5 |

## Declared ports

- Audio inputs: `In`, `Mod`

<details>
<summary>Registry implementation notes</summary>

TPT state-variable filter (Simper/Cytomic trapezoidal) - LP/HP/BP/Notch/AP/Peak, modulation-safe; cutoff mod = wah/sweep. Renamed from 'Filter' (2026-07-09) for topology clarity

</details>

:::caution[Verify in context]
Ranges and declared latency are product facts. Audible outcome, stability, level, and CPU cost still depend on signal, sample rate, block size, routing, modulation, and surrounding blocks.
:::

