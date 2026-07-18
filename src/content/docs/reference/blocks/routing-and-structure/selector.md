---
title: "Selector"
description: "4-way input switch with clickless crossfade on Select change (Ramp ms): pick which of four parallel chains feeds the output without a step; Select is a mod target (Timer/Random -> "
sidebar:
  order: 70
---

<small>Generated from PatchLab binary source candidate `99899b76e006` · registry type 69</small>

## At a glance

| Property | Value |
| --- | --- |
| Category | [Routing & Structure](../) |
| Signal role | Utility |
| Audio inputs | 4 |
| Audio outputs | 1 |
| MIDI input | No |
| MIDI output | No |
| CPU class | trivial |
| Reported latency | 0 |

## Parameters

| Parameter | ID | Range | Default | Unit / choices | Mod port |
| --- | --- | --- | --- | --- | ---: |
| Select | `sel` | 0 to 3 | 0 | `In 1`, `In 2`, `In 3`, `In 4` | 4 |
| Ramp (time) | `ramp` | 0 to 50 | 5 | ms | 5 |

## Declared ports

- Audio inputs: `In 1`, `In 2`, `In 3`, `In 4`

## Safety and limits

switches between four input buses with a Ramp-ms crossfade (clickless); Ramp 0 = instant (clicks); unconnected inputs read as silence - selecting one fades to silence

<details>
<summary>Registry implementation notes</summary>

4-way input switch with clickless crossfade on Select change (Ramp ms): pick which of four parallel chains feeds the output without a step; Select is a mod target (Timer/Random -> Select = sequenced routing) - scriptnode branch/selector cell

</details>

:::caution[Verify in context]
Ranges and declared latency are product facts. Audible outcome, stability, level, and CPU cost still depend on signal, sample rate, block size, routing, modulation, and surrounding blocks.
:::

