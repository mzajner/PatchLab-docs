---
title: "Humanize"
description: "HUMANIZE: adds natural per-note variation to a MIDI stream."
sidebar:
  order: 132
---

<small>Generated from PatchLab binary source candidate `99899b76e006` · registry type 131</small>

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
| Vel | `vel` | 0 to 64 | 12 | — | 0 |
| Time (time) | `time` | 0 to 30 | 4 | ms | 1 |
| Seed | `seed` | 0 to 9999 | 1 | — | 2 |

<details>
<summary>Registry implementation notes</summary>

HUMANIZE: adds natural per-note variation to a MIDI stream. Vel jitters each note-on's velocity by +/- its amount; Time jitters note-on timing by +/- ms (clamped to the block); Seed makes the feel repeatable (deterministic). Note-offs pass through untouched - only note-ons are perturbed. The 'play it like a human' event tool vs the rigid grid of Sequencer/Arp - drop it after Arp/ChordGen/Sequencer for groove. MIDI in -> MIDI out, allocation-free (out buffer pre-sized)

</details>

:::caution[Verify in context]
Ranges and declared latency are product facts. Audible outcome, stability, level, and CPU cost still depend on signal, sample rate, block size, routing, modulation, and surrounding blocks.
:::

