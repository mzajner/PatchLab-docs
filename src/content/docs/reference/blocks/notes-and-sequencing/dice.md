---
title: "Dice"
description: "Bernoulli PROBABILITY GATE: on each rising Trig edge, passes the trigger (a one-sample pulse) with probability Prob, seeded so the pattern is deterministic/repeatable."
sidebar:
  order: 114
---

<small>Generated from PatchLab binary source candidate `99899b76e006` · registry type 113</small>

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
| Prob | `prob` | 0 to 100 | 50 | % | 1 |
| Seed | `seed` | 0 to 9999 | 1 | — | 2 |

## Declared ports

- Audio inputs: `Trig`

<details>
<summary>Registry implementation notes</summary>

Bernoulli PROBABILITY GATE: on each rising Trig edge, passes the trigger (a one-sample pulse) with probability Prob, seeded so the pattern is deterministic/repeatable. The cheapest 'make it alive' cell - Timer -> Dice -> AR = randomly-skipped hits, Sequencer.Gate -> Dice = probabilistic steps. Prob 1 = always, 0 = never

</details>

:::caution[Verify in context]
Ranges and declared latency are product facts. Audible outcome, stability, level, and CPU cost still depend on signal, sample rate, block size, routing, modulation, and surrounding blocks.
:::

