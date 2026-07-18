---
title: "Correlation"
description: "stereo phase-correlation meter (passthrough), -1..+1 on its face: +1 mono/in-phase, 0 decorrelated, -1 anti-phase (mono-incompatible - the bass will cancel on a mono sum)."
sidebar:
  order: 75
---

<small>Generated from PatchLab binary source candidate `99899b76e006` · registry type 74</small>

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

This block declares no editable parameters.

## Declared ports

- Audio inputs: `A`

## Safety and limits

audio passes through unchanged; the coefficient is a leaky (~0.2 s) windowed cross-correlation computed off-thread, so it settles rather than jumping per-sample; silence/single-channel reads 0 (undefined correlation), NOT +1; a sustained reading below 0 means the mix will partially cancel on a mono sum

<details>
<summary>Registry implementation notes</summary>

stereo phase-correlation meter (passthrough), -1..+1 on its face: +1 mono/in-phase, 0 decorrelated, -1 anti-phase (mono-incompatible - the bass will cancel on a mono sum). The single number for 'is my mix mono-safe'; computed off-thread (E2). Pair with Goniometer for the picture

</details>

:::caution[Verify in context]
Ranges and declared latency are product facts. Audible outcome, stability, level, and CPU cost still depend on signal, sample rate, block size, routing, modulation, and surrounding blocks.
:::

