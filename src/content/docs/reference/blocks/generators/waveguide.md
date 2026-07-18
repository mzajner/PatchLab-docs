---
title: "Waveguide"
description: "DIGITAL WAVEGUIDE string/tube (Extended Karplus-Strong, Smith CCRMA / Jaffe & Smith 1983): the audio IN is the EXCITER (feed a pluck/mallet/noise burst - e.g."
sidebar:
  order: 93
---

<small>Generated from PatchLab binary source candidate `99899b76e006` · registry type 92</small>

## At a glance

| Property | Value |
| --- | --- |
| Category | [Generators](../) |
| Signal role | Audio |
| Audio inputs | 1 |
| Audio outputs | 1 |
| MIDI input | No |
| MIDI output | No |
| CPU class | light |
| Reported latency | 0 |

## Parameters

| Parameter | ID | Range | Default | Unit / choices | Mod port |
| --- | --- | --- | --- | --- | ---: |
| Pitch (frequency) | `pitch` | 27.5 to 4186 | 220 | Hz | 1 |
| Decay | `decay` | 0.8 to 0.9995 | 0.99 | — | 2 |
| Damp (frequency) | `damp` | 500 to 20000 | 6000 | Hz | 3 |
| Stiff | `stiff` | 0 to 1 | 0 | — | 4 |
| Mix (mix) | `mix` | 0 to 1 | 1 | — | 5 |

## Declared ports

- Audio inputs: `A`

<details>
<summary>Registry implementation notes</summary>

DIGITAL WAVEGUIDE string/tube (Extended Karplus-Strong, Smith CCRMA / Jaffe & Smith 1983): the audio IN is the EXCITER (feed a pluck/mallet/noise burst - e.g. Noise -> AR -> here), rung through a tuned delay loop. Pitch tunes the loop to a CENT-ACCURATE fundamental via an in-loop Thiran fractional-delay allpass (no buffer-jump click on a pitch change); Decay (loop gain <1) sets the sustain; Damp is the bridge-loss low-pass - brighter Damp keeps the upper partials ringing longer (the physical HF-decay tilt); Stiff adds a dispersion-allpass cascade that stretches the partials sharp (piano-string inharmonicity). Mix blends dry. Single-sample recursion core; SILENT with no exciter; 0 latency. Karplus-Strong is the degenerate case (Exciter -> Comb-FB recipe); this is the tuning-accurate/stiffness upgrade

</details>

:::caution[Verify in context]
Ranges and declared latency are product facts. Audible outcome, stability, level, and CPU cost still depend on signal, sample rate, block size, routing, modulation, and surrounding blocks.
:::

