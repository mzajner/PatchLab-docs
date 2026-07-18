---
title: "Clamp"
description: "CLAMP: a NAMED hard clamp - passes any audio or CV wire through, limiting every sample to [Lo, Hi]."
sidebar:
  order: 149
---

<small>Generated from PatchLab binary source candidate `99899b76e006` · registry type 148</small>

## At a glance

| Property | Value |
| --- | --- |
| Category | [Modulators](../) |
| Signal role | Modulation |
| Audio inputs | 1 |
| Audio outputs | 1 |
| MIDI input | No |
| MIDI output | No |
| CPU class | trivial |
| Reported latency | 0 |

## Parameters

| Parameter | ID | Range | Default | Unit / choices | Mod port |
| --- | --- | --- | --- | --- | ---: |
| Lo | `lo` | -2 to 2 | -1 | — | 1 |
| Hi | `hi` | -2 to 2 | 1 | — | 2 |

## Declared ports

- Audio inputs: `A`

<details>
<summary>Registry implementation notes</summary>

CLAMP: a NAMED hard clamp - passes any audio or CV wire through, limiting every sample to [Lo, Hi]. Composable already (Math1 Clip is fixed +/-1; MapRange clamps to a mapped range) - this is the legibility primitive: an explicit two-knob floor + ceiling. Lo/Hi auto-order so the bounds never invert; inputs are sanitized (NaN/Inf -> 0). CV = audio bus so it clamps both planes (a safety clip on a modulation wire, a hard ceiling on audio). Per-sample, both channels; face draws the clamp transfer curve + the live in->out point. (MNodes Clamp / legibility sugar over Math1/MapRange).

</details>

:::caution[Verify in context]
Ranges and declared latency are product facts. Audible outcome, stability, level, and CPU cost still depend on signal, sample rate, block size, routing, modulation, and surrounding blocks.
:::

