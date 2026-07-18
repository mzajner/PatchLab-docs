---
title: "Pendulum"
description: "PENDULUM: a swinging trigger sequencer - the bob sweeps across Segments zones in harmonic (sine) motion; each zone CROSSING fires a one-sample trigger on Gate out while Pos out str"
sidebar:
  order: 160
---

<small>Generated from PatchLab binary source candidate `99899b76e006` · registry type 159</small>

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
| Segments | `segments` | 2 to 16 | 8 | — | 1 |
| Rate (rate) | `rate` | 0.05 to 8 | 0.5 | Hz | 2 |
| Sync | `sync` | 0 to 16 | 0 | `Off`, `4/1`, `2/1`, `1/1`, `1/2D`, `1/2`, `1/2T`, `1/4D`, `1/4`, `1/4T`, `1/8D`, `1/8`, `1/8T`, `1/16D`, `1/16`, `1/16T`, `1/32` | 3 |
| Damp (amount) | `damp` | 0 to 1 | 0 | — | 4 |
| Push | `push` | 0 to 1 | 0 | `-`, `Push` | 5 |

## Declared ports

- Audio inputs: `Push`

## Safety and limits

with Damp > 0 the swing comes to REST at the centre - no more crossings until a Push edge (param or Trig cable) re-excites it; Pos out idles at 0.5 (not 0). Gate pulses are one sample (the house trigger idiom); crossings are unevenly spaced BY DESIGN (harmonic motion)

<details>
<summary>Registry implementation notes</summary>

PENDULUM: a swinging trigger sequencer - the bob sweeps across Segments zones in harmonic (sine) motion; each zone CROSSING fires a one-sample trigger on Gate out while Pos out streams the bob position 0..1 (centre 0.5). Crossings bunch at the swing edges and stretch through the middle - the accelerate/decelerate feel a plain clock cannot make (Gate -> AR/DrumSynth/Dice for swung hits, Pos -> any mod port for the matching sweep). Rate = the full swing cycle in Hz, or a tempo division via Sync. Damp decays the swing toward rest at the centre (crossings slow, cluster, STOP); a rising Push edge (param click or Trig cable) re-excites to full width. Face = a live animated pendulum over the segment arc. Two outs (the Sequencer Gate+Value port model). Allocation-free (a phase + an amplitude). (MNodes Pendulum)

</details>

:::caution[Verify in context]
Ranges and declared latency are product facts. Audible outcome, stability, level, and CPU cost still depend on signal, sample rate, block size, routing, modulation, and surrounding blocks.
:::

