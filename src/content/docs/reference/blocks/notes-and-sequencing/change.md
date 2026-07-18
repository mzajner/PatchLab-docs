---
title: "Change"
description: "edge detector -> trigger BANG: fires a one-sample 1.0 pulse when the input crosses Thresh (Schmitt window Hyst = chatter-free) in the chosen direction (Rising/Falling/Both)."
sidebar:
  order: 109
---

<small>Generated from PatchLab binary source candidate `99899b76e006` · registry type 108</small>

## At a glance

| Property | Value |
| --- | --- |
| Category | [Notes & Sequencing](../) |
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
| Mode | `mode` | 0 to 2 | 0 | `Rising`, `Falling`, `Both` | 1 |
| Thresh (threshold) | `thresh` | -1 to 1 | 0.5 | — | 2 |
| Hyst | `hyst` | 0 to 0.5 | 0.02 | — | 3 |

## Declared ports

- Audio inputs: `A`

<details>
<summary>Registry implementation notes</summary>

edge detector -> trigger BANG: fires a one-sample 1.0 pulse when the input crosses Thresh (Schmitt window Hyst = chatter-free) in the chosen direction (Rising/Falling/Both). Distinct from Compare, which HOLDS a gate high while above - Change fires only on the TRANSITION, the trigger source for AR/Ramp/S&H/Sequencer (EnvFollow -> Change -> AR re-triggers on every onset; LFO/Phasor -> Change = a clock from any shape)

</details>

:::caution[Verify in context]
Ranges and declared latency are product facts. Audible outcome, stability, level, and CPU cost still depend on signal, sample rate, block size, routing, modulation, and surrounding blocks.
:::

