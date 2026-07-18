---
title: "RingMod"
description: "ring modulator: input x internal sine carrier (Freq) -> metallic sum/difference sidebands, Mix blends dry; Freq low = tremolo-ish, high = clangorous - Multiply is the bare atom, th"
sidebar:
  order: 65
---

<small>Generated from PatchLab binary source candidate `99899b76e006` · registry type 64</small>

## At a glance

| Property | Value |
| --- | --- |
| Category | [Time & Motion](../) |
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
| Freq (frequency) | `freq` | 0.5 to 5000 | 200 | Hz | 1 |
| Mix (mix) | `mix` | 0 to 1 | 1 | — | 2 |

## Declared ports

- Audio inputs: `A`

## Safety and limits

true ring mod (not tremolo): suppresses the input partials and emits sum/difference sidebands - inharmonic/metallic by design; sweeping Freq fast is smoothed but extreme rates alias (oversample)

<details>
<summary>Registry implementation notes</summary>

ring modulator: input x internal sine carrier (Freq) -> metallic sum/difference sidebands, Mix blends dry; Freq low = tremolo-ish, high = clangorous - Multiply is the bare atom, this is the carrier-equipped cell

</details>

:::caution[Verify in context]
Ranges and declared latency are product facts. Audible outcome, stability, level, and CPU cost still depend on signal, sample rate, block size, routing, modulation, and surrounding blocks.
:::

