---
title: "Probability"
description: "PROBABILITY: a chance gate on a MIDI note stream."
sidebar:
  order: 133
---

<small>Generated from PatchLab binary source candidate `99899b76e006` · registry type 132</small>

## At a glance

| Property | Value |
| --- | --- |
| Category | [Notes & Sequencing](../) |
| Signal role | Event |
| Audio inputs | 0 |
| Audio outputs | 0 |
| MIDI input | Yes |
| MIDI output | Yes |
| CPU class | trivial |
| Reported latency | 0 |

## Parameters

| Parameter | ID | Range | Default | Unit / choices | Mod port |
| --- | --- | --- | --- | --- | ---: |
| Chance | `chance` | 0 to 100 | 100 | % | 0 |
| Seed | `seed` | 0 to 9999 | 1 | — | 1 |

<details>
<summary>Registry implementation notes</summary>

PROBABILITY: a chance gate on a MIDI note stream. Each note-on passes with probability Chance (0..1); a dropped note-on is omitted (Chance 1.0 = pure passthrough). Note-offs + all non-note messages ALWAYS pass, so a dropped note leaves NO stuck note. Seed makes the pattern repeatable. The generative 'thinning / variation' tool - feed a busy Arp/Sequencer through it for evolving note dropouts (MNodes Math/Logic Probability gap). MIDI in -> MIDI out, allocation-free (out buffer pre-sized)

</details>

:::caution[Verify in context]
Ranges and declared latency are product facts. Audible outcome, stability, level, and CPU cost still depend on signal, sample rate, block size, routing, modulation, and surrounding blocks.
:::

