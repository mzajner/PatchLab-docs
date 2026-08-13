---
title: "DcBlocker"
description: "DC BLOCKER: the named first-order DC-removal primitive - y[n] = x[n] - x[n-1] + r*y[n-1], a zero exactly at 0 Hz and a pole just inside it, so DC is nulled EXACTLY (an infinite-dep"
sidebar:
  order: 171
---

<small>Generated from PatchLab binary source candidate `96ae72bb5451` · registry type 170</small>

## At a glance

| Property | Value |
| --- | --- |
| Category | [Filters & EQ](../) |
| Signal role | Audio |
| Audio inputs | 1 |
| Audio outputs | 1 |
| MIDI input | No |
| MIDI output | No |
| CPU class | trivial |
| Reported latency | 0 |

## Parameters

| Parameter | ID | Range | Default | Unit / choices | Mod port |
| --- | --- | --- | --- | --- | ---: |
| Cutoff (frequency) | `cutoff` | 2 to 40 | 10 | Hz | 1 |

## Declared ports

- Audio inputs: `A`

## Safety and limits

Cutoff is CLAMPED to 2..40 Hz - the param displays what you set but the pole never leaves the design range (same clamp as OnePole's DC Block mode); for a real highpass above 40 Hz use OnePole HP or SVF. It removes DC, it does not remove rumble

<details>
<summary>Registry implementation notes</summary>

DC BLOCKER: the named first-order DC-removal primitive - y[n] = x[n] - x[n-1] + r*y[n-1], a zero exactly at 0 Hz and a pole just inside it, so DC is nulled EXACTLY (an infinite-depth null, not an approximation) while the audio band passes within ~0.1 dB an octave above the corner. Every framework in the fundamentals audit ships this under this name (Cmajor dcblocker, gen~ dcblock, Faust fi.dcblocker, HISE dc_remover). Put it after anything that parks an offset on the bus: an asymmetric waveshaper or Bias'd saturator, a rectifier, a chaotic or feedback core, a DC-heavy sample. An offset eats headroom, biases every downstream nonlinearity into a different curve, and thumps whenever a gain changes. Cutoff is CLAMPED to the 2..40 Hz design range: below 2 Hz the pole collides with the zero in float and the settling time runs to seconds; above 40 Hz this stops being a DC blocker and is just a shallow rumble filter - reach for OnePole HP or SVF HP for that. Cutoff is coefficient-smoothed (8 ms), so a mod-cabled or automated corner glides instead of clicking. Identical core to OnePole's DC Block mode; this is its first-class name.

</details>

:::caution[Verify in context]
Ranges and declared latency are product facts. Audible outcome, stability, level, and CPU cost still depend on signal, sample rate, block size, routing, modulation, and surrounding blocks.
:::

