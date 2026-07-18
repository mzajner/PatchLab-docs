---
title: "Sequencer"
description: "STEP SEQUENCER (value + gate): a rising Clock edge advances the step (Dir Fwd/Rev/PingPong/Random); Value out = the current step's 0..1 level (held), Gate out = a one-sample pulse "
sidebar:
  order: 113
---

<small>Generated from PatchLab binary source candidate `99899b76e006` · registry type 112</small>

## At a glance

| Property | Value |
| --- | --- |
| Category | [Notes & Sequencing](../) |
| Signal role | Modulation |
| Audio inputs | 1 |
| Audio outputs | 2 |
| MIDI input | No |
| MIDI output | No |
| CPU class | trivial |
| Reported latency | 0 |

## Parameters

| Parameter | ID | Range | Default | Unit / choices | Mod port |
| --- | --- | --- | --- | --- | ---: |
| Steps | `steps` | 1 to 16 | 8 | — | 1 |
| Dir | `dir` | 0 to 3 | 0 | `Fwd`, `Rev`, `PingPong`, `Random` | 2 |
| Seed | `seed` | 0 to 9999 | 1 | — | 3 |

## Declared ports

- Audio inputs: `Clock`
- Data ports: `Step`

<details>
<summary>Registry implementation notes</summary>

STEP SEQUENCER (value + gate): a rising Clock edge advances the step (Dir Fwd/Rev/PingPong/Random); Value out = the current step's 0..1 level (held), Gate out = a one-sample pulse on each enabled step. Steps (1-16) = length; the 16 step values + per-step gate mask persist in the patch (props bag). The pattern source nothing else made - Timer/Button -> Clock; Sequencer.Value -> ScaleQuant -> Convert -> Osc for melodies, Sequencer.Gate -> AR for rhythmic envelopes. Wave 1: step data via patch JSON; the editable step-grid face is a later UI increment

</details>

:::caution[Verify in context]
Ranges and declared latency are product facts. Audible outcome, stability, level, and CPU cost still depend on signal, sample rate, block size, routing, modulation, and surrounding blocks.
:::

