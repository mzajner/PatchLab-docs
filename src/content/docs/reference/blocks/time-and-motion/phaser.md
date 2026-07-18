---
title: "Phaser"
description: "PHASER: the classic swept-notch effect."
sidebar:
  order: 138
---

<small>Generated from PatchLab binary source candidate `99899b76e006` · registry type 137</small>

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
| Rate (rate) | `rate` | 0.02 to 8 | 0.4 | Hz | 1 |
| Depth (depth) | `depth` | 0 to 1 | 0.6 | — | 2 |
| Base (frequency) | `base` | 50 to 2000 | 300 | Hz | 3 |
| Feedbk (feedback) | `fb` | -0.95 to 0.95 | 0.3 | — | 4 |
| Stages | `stages` | 2 to 8 | 6 | — | 5 |
| Mix (mix) | `mix` | 0 to 1 | 0.5 | — | 6 |

## Declared ports

- Audio inputs: `A`

<details>
<summary>Registry implementation notes</summary>

PHASER: the classic swept-notch effect. Up to 8 cascaded first-order allpass stages have their break frequency swept by an LFO; summed with the dry signal that moving phase carves Stages/2 notches through the spectrum. Feedback (last stage -> first) sharpens the notches into a resonant, vocal sweep; Base sets the low sweep corner, Depth the sweep span (up to ~4 octaves), Rate the LFO speed, Mix the dry/wet. The staple modulation FX that sat alongside Chorus/Flanger yet was missing from the Motion set. Stereo in -> out, allocation-free (owned FirstOrderAllpass cascade per channel), one swept coefficient/sample.

</details>

:::caution[Verify in context]
Ranges and declared latency are product facts. Audible outcome, stability, level, and CPU cost still depend on signal, sample rate, block size, routing, modulation, and surrounding blocks.
:::

