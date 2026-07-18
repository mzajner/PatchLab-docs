---
title: "MapRange"
description: "control glue (scriptnode pma): maps In Lo..Hi onto Out Lo..Hi, optional clamp - depth/offset/inversion for mod signals"
sidebar:
  order: 43
---

<small>Generated from PatchLab binary source candidate `99899b76e006` · registry type 42</small>

## At a glance

| Property | Value |
| --- | --- |
| Category | [Modulators](../) |
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
| In Lo | `inlo` | -1 to 1 | 0 | — | 1 |
| In Hi | `inhi` | -1 to 1 | 1 | — | 2 |
| Out Lo | `outlo` | -1 to 1 | 0 | — | 3 |
| Out Hi | `outhi` | -1 to 1 | 1 | — | 4 |
| Clamp | `clamp` | 0 to 1 | 1 | `Off`, `On` | 5 |

## Declared ports

- Audio inputs: `A`

## Safety and limits

In Lo==In Hi yields Out Lo; Clamp Off extrapolates beyond the Out range

<details>
<summary>Registry implementation notes</summary>

control glue (scriptnode pma): maps In Lo..Hi onto Out Lo..Hi, optional clamp - depth/offset/inversion for mod signals

</details>

:::caution[Verify in context]
Ranges and declared latency are product facts. Audible outcome, stability, level, and CPU cost still depend on signal, sample rate, block size, routing, modulation, and surrounding blocks.
:::

