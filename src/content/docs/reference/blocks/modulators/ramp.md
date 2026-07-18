---
title: "Ramp"
description: "one-shot line on a Trig edge: From -> To over Time with Curve (0.5 = linear), holds To after; retrigger replays from From - fades, sweep-on-hit, Timer -> Ramp = repeating shaped LF"
sidebar:
  order: 57
---

<small>Generated from PatchLab binary source candidate `99899b76e006` · registry type 56</small>

## At a glance

| Property | Value |
| --- | --- |
| Category | [Modulators](../) |
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
| Time (time) | `time` | 1 to 10000 | 100 | ms | 1 |
| Curve | `curve` | 0 to 1 | 0.5 | — | 2 |
| From | `from` | 0 to 1 | 0 | — | 3 |
| To | `to` | 0 to 1 | 1 | — | 4 |

## Declared ports

- Audio inputs: `Trig`

## Safety and limits

a mid-flight Trig replays From->To from the start (jumps by design - clicks on audio paths); click-free retrigger envelopes live in AR/AHDSR

<details>
<summary>Registry implementation notes</summary>

one-shot line on a Trig edge: From -> To over Time with Curve (0.5 = linear), holds To after; retrigger replays from From - fades, sweep-on-hit, Timer -> Ramp = repeating shaped LFO

</details>

:::caution[Verify in context]
Ranges and declared latency are product facts. Audible outcome, stability, level, and CPU cost still depend on signal, sample rate, block size, routing, modulation, and surrounding blocks.
:::

