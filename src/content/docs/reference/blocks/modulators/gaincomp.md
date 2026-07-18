---
title: "GainComp"
description: "gain computer: envelope in -> gain multiplier out, the dynamics brain (pair with EnvFollow + Multiply); Curve = Comp / Expand (downward) / Gate (hard -80 dB floor) / Upward (boost "
sidebar:
  order: 22
---

<small>Generated from PatchLab binary source candidate `99899b76e006` · registry type 21</small>

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
| Thresh (threshold) | `thresh` | -60 to 0 | -24 | dB | 1 |
| Ratio (ratio) | `ratio` | 1 to 20 | 4 | :1 | 2 |
| Knee | `knee` | 0 to 12 | 3 | dB | 3 |
| Curve | `curve` | 0 to 3 | 0 | `Comp`, `Expand`, `Gate`, `Upward` | 4 |

## Declared ports

- Audio inputs: `A`

## Safety and limits

Gate curve is hard by convention (Knee ignored); Upward boost is capped +24 dB and fades to unity below -82 dBFS input

<details>
<summary>Registry implementation notes</summary>

gain computer: envelope in -> gain multiplier out, the dynamics brain (pair with EnvFollow + Multiply); Curve = Comp / Expand (downward) / Gate (hard -80 dB floor) / Upward (boost below Thresh)

</details>

:::caution[Verify in context]
Ranges and declared latency are product facts. Audible outcome, stability, level, and CPU cost still depend on signal, sample rate, block size, routing, modulation, and surrounding blocks.
:::

