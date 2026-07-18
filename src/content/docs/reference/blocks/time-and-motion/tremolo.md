---
title: "Tremolo"
description: "TREMOLO / AUTOPAN: rhythmic amplitude modulation by an LFO."
sidebar:
  order: 140
---

<small>Generated from PatchLab binary source candidate `99899b76e006` · registry type 139</small>

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
| Rate (rate) | `rate` | 0.05 to 20 | 5 | Hz | 1 |
| Depth (depth) | `depth` | 0 to 1 | 0.6 | — | 2 |
| Shape | `shape` | 0 to 2 | 0 | — | 3 |
| Stereo | `stereo` | 0 to 1 | 0 | — | 4 |
| Mix (mix) | `mix` | 0 to 1 | 1 | — | 5 |

## Declared ports

- Audio inputs: `A`

<details>
<summary>Registry implementation notes</summary>

TREMOLO / AUTOPAN: rhythmic amplitude modulation by an LFO. Depth sets how far the level dips, Rate the LFO speed, Shape the LFO (Sine/Tri/Square), Mix the dry/wet. Stereo offsets the R-channel LFO phase up to half a cycle: at 0 it's classic mono-linked tremolo, at 1.0 the channels are anti-phase = AUTO-PAN (the sound swings L<->R). The staple amplitude-mod effect that sat alongside the Chorus/Phaser/Flanger set. Unity-safe by construction (gain in [1-depth, 1], never exceeds 1). Stereo in -> out, allocation-free (phase accumulator only).

</details>

:::caution[Verify in context]
Ranges and declared latency are product facts. Audible outcome, stability, level, and CPU cost still depend on signal, sample rate, block size, routing, modulation, and surrounding blocks.
:::

