---
title: "Chaos"
description: "CHAOTIC mod source: iterates a strange attractor at Rate Hz and smooths between steps (Smooth)."
sidebar:
  order: 125
---

<small>Generated from PatchLab binary source candidate `99899b76e006` · registry type 124</small>

## At a glance

| Property | Value |
| --- | --- |
| Category | [Modulators](../) |
| Signal role | Modulation |
| Audio inputs | 0 |
| Audio outputs | 1 |
| MIDI input | No |
| MIDI output | No |
| CPU class | trivial |
| Reported latency | 0 |

## Parameters

| Parameter | ID | Range | Default | Unit / choices | Mod port |
| --- | --- | --- | --- | --- | ---: |
| Mode | `mode` | 0 to 2 | 0 | `Logistic`, `Lorenz`, `Henon` | 0 |
| Rate (rate) | `rate` | 0.05 to 50 | 4 | Hz | 1 |
| Smooth (time) | `smooth` | 0 to 500 | 30 | ms | 2 |
| Seed | `seed` | 0 to 9999 | 1 | — | 3 |

<details>
<summary>Registry implementation notes</summary>

CHAOTIC mod source: iterates a strange attractor at Rate Hz and smooths between steps (Smooth). Mode Logistic / Lorenz / Henon, Seed for repeatability. Bounded + escape-scrubbed so it never settles or blows up - organic, never-exactly-repeating modulation (vs Random's flat draws or the LFO's strict periodicity). Chaos -> filter cutoff / pan / ScaleQuant for living, evolving movement

</details>

:::caution[Verify in context]
Ranges and declared latency are product facts. Audible outcome, stability, level, and CPU cost still depend on signal, sample rate, block size, routing, modulation, and surrounding blocks.
:::

