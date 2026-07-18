---
title: "PhaseDelay"
description: "frequency-dependent (allpass) delay / dispersion: a cascade of Stages first-order allpasses at Freq - flat magnitude (|H|==1) but a frequency-dependent group delay."
sidebar:
  order: 128
---

<small>Generated from PatchLab binary source candidate `99899b76e006` · registry type 127</small>

## At a glance

| Property | Value |
| --- | --- |
| Category | [Filters & EQ](../) |
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
| Freq (frequency) | `freq` | 20 to 18000 | 800 | Hz | 1 |
| Stages | `stages` | 1 to 12 | 6 | — | 2 |
| Mix (mix) | `mix` | 0 to 1 | 0.5 | — | 3 |

## Declared ports

- Audio inputs: `A`

<details>
<summary>Registry implementation notes</summary>

frequency-dependent (allpass) delay / dispersion: a cascade of Stages first-order allpasses at Freq - flat magnitude (|H|==1) but a frequency-dependent group delay. Blended with dry (Mix) it is a STATIC phaser / metallic dispersion; modulate Freq for a manual phaser, or feed a transient for a 'boing'/'laser'. The dispersion counterpart to the Schroeder AllpassDelay (scriptnode phase_delay)

</details>

:::caution[Verify in context]
Ranges and declared latency are product facts. Audible outcome, stability, level, and CPU cost still depend on signal, sample rate, block size, routing, modulation, and surrounding blocks.
:::

