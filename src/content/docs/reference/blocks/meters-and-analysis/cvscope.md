---
title: "CVScope"
description: "CV SCOPE: a SLOW time-base plot of a control signal over a seconds-scale Window (distinct from the audio Scope's millisecond frame)."
sidebar:
  order: 146
---

<small>Generated from PatchLab binary source candidate `99899b76e006` · registry type 145</small>

## At a glance

| Property | Value |
| --- | --- |
| Category | [Meters & Analysis](../) |
| Signal role | Visual |
| Audio inputs | 1 |
| Audio outputs | 1 |
| MIDI input | No |
| MIDI output | No |
| CPU class | trivial |
| Reported latency | 0 |

## Parameters

| Parameter | ID | Range | Default | Unit / choices | Mod port |
| --- | --- | --- | --- | --- | ---: |
| Window (time) | `window` | 0.25 to 30 | 4 | s | 1 |
| Range | `range` | 0 to 2 | 0 | `Uni`, `Bi`, `Auto` | 2 |

## Declared ports

- Audio inputs: `A`

<details>
<summary>Registry implementation notes</summary>

CV SCOPE: a SLOW time-base plot of a control signal over a seconds-scale Window (distinct from the audio Scope's millisecond frame). You can finally SEE modulation move - an LFO / env / random wire drawn as a scrolling history over Window (0.25-30 s). PASSTHROUGH (insert inline on a CV wire; CV = audio bus). The audio thread decimates the signal into a lock-free ring (one averaged point per decim samples); drawFace + the web viz plane (host.telemetry 'scope') only read it. Range = Uni 0..1 / Bi -1..1 / Auto (min..max of the window). The 'watch the modulation' analysis tool (MNodes CV Scope gap).

</details>

:::caution[Verify in context]
Ranges and declared latency are product facts. Audible outcome, stability, level, and CPU cost still depend on signal, sample rate, block size, routing, modulation, and surrounding blocks.
:::

