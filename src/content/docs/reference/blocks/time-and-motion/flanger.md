---
title: "Flanger"
description: "FLANGER: the metallic swept-comb 'jet' effect."
sidebar:
  order: 139
---

<small>Generated from PatchLab binary source candidate `99899b76e006` · registry type 138</small>

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
| Rate (rate) | `rate` | 0.02 to 8 | 0.3 | Hz | 1 |
| Depth (depth) | `depth` | 0 to 1 | 0.7 | — | 2 |
| Delay (time) | `delay` | 0.1 to 10 | 2 | ms | 3 |
| Feedbk (feedback) | `fb` | -0.95 to 0.95 | 0.5 | — | 4 |
| Mix (mix) | `mix` | 0 to 1 | 0.5 | — | 5 |

## Declared ports

- Audio inputs: `A`

<details>
<summary>Registry implementation notes</summary>

FLANGER: the metallic swept-comb 'jet' effect. A single very short (0.1-10 ms) LFO-modulated delay summed with the dry signal makes a harmonically spaced comb; strong Feedback (delayed output -> line) resonates the teeth into the classic whoosh. Distinct from Chorus (longer/softer, no strong feedback) and Phaser (allpass notches, not a harmonic comb). Delay sets the centre/manual delay, Depth the sweep, Rate the LFO speed, Feedbk the resonance (+/- for tone), Mix the dry/wet. Completes the Chorus/Phaser/Flanger modulation trio. Stereo in -> out, allocation-free (owned FracDelayLine per channel), unconditionally-stable 1-sample feedback loop.

</details>

:::caution[Verify in context]
Ranges and declared latency are product facts. Audible outcome, stability, level, and CPU cost still depend on signal, sample rate, block size, routing, modulation, and surrounding blocks.
:::

