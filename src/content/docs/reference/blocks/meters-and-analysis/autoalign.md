---
title: "AutoAlign"
description: "AUTO-ALIGN: the phase/latency CORRECTOR - two paths ride the per-channel cable model (input L = path A, input R = path B); the block LIVE cross-correlates them (bounded incremental"
sidebar:
  order: 164
---

<small>Generated from PatchLab binary source candidate `99899b76e006` · registry type 163</small>

## At a glance

| Property | Value |
| --- | --- |
| Category | [Meters & Analysis](../) |
| Signal role | Utility |
| Audio inputs | 1 |
| Audio outputs | 1 |
| MIDI input | No |
| MIDI output | No |
| CPU class | trivial |
| Reported latency | 0 |

## Parameters

| Parameter | ID | Range | Default | Unit / choices | Mod port |
| --- | --- | --- | --- | --- | ---: |
| Mode | `mode` | 0 to 2 | 0 | `Auto`, `Freeze`, `Manual` | 1 |
| Delay (time) | `delay` | 0 to 20 | 0 | ms | 2 |

## Declared ports

- Audio inputs: `A`

<details>
<summary>Registry implementation notes</summary>

AUTO-ALIGN: the phase/latency CORRECTOR - two paths ride the per-channel cable model (input L = path A, input R = path B); the block LIVE cross-correlates them (bounded incremental coarse->fine scan on the audio thread, deterministic under offline render) and applies a slewed FRACTIONAL delay (cubic read, sub-sample via parabolic peak refine) to whichever path LEADS, bringing parallel dry/wet chains, multiband recombinations or mic pairs back into time alignment - the in-patch Align-IT. Mode Auto tracks continuously; Freeze holds the last confident correction; Manual is a symmetric fractional stereo TRIM (Delay ms on both channels - what the Debug page's Apply Correction splices after the leading node to persist a measured lag). A low-confidence window (silence, unrelated signals) HOLDS instead of chasing noise. Face: who-leads headline, centre-zero lag bar, applied dA/dB ms + confidence; 'align' telemetry = [lag smp, conf, dA ms, dB ms].

</details>

:::caution[Verify in context]
Ranges and declared latency are product facts. Audible outcome, stability, level, and CPU cost still depend on signal, sample rate, block size, routing, modulation, and surrounding blocks.
:::

