---
title: "Feedback"
description: "FEEDBACK ZONE (the missing 6th combinator - single-sample recursive loop): wraps its nested graph in a TRUE sample-rate feedback loop out[n]=G(in[n]+g*state), state=out[n]."
sidebar:
  order: 83
---

<small>Generated from PatchLab binary source candidate `99899b76e006` · registry type 82</small>

## At a glance

| Property | Value |
| --- | --- |
| Category | [Routing & Structure](../) |
| Signal role | Structure |
| Audio inputs | 1 |
| Audio outputs | 1 |
| MIDI input | Yes |
| MIDI output | No |
| CPU class | medium |
| Reported latency | 0 |
| Macro slots | 8 |

## Parameters

| Parameter | ID | Range | Default | Unit / choices | Mod port |
| --- | --- | --- | --- | --- | ---: |
| Feedbk (feedback) | `fb` | 0 to 0.999 | 0.5 | — | 9 |
| Damp | `damp` | 0 to 1 | 0 | — | 10 |

## Declared ports

- Audio inputs: `A`

<details>
<summary>Registry implementation notes</summary>

FEEDBACK ZONE (the missing 6th combinator - single-sample recursive loop): wraps its nested graph in a TRUE sample-rate feedback loop out[n]=G(in[n]+g*state), state=out[n]. The enabler for FDN/waveguide/comb-tank - what Send/Receive (~1 block late) cannot do. Feedbk sets loop gain (|g|<1, stability-clamped); Damp is an in-loop one-pole low-pass (musical self-oscillation, kills metallic ring). State is NaN-scrubbed + soft-saturated so a past-the-edge loop bounds, never blows up. Author a delay/filter inside and it becomes a tuned resonator/echo tank. Like the other zones: inner graph + macros + serialization untouched, loop state runtime-only

</details>

:::caution[Verify in context]
Ranges and declared latency are product facts. Audible outcome, stability, level, and CPU cost still depend on signal, sample rate, block size, routing, modulation, and surrounding blocks.
:::

