---
title: "Cascade"
description: "classical high-order IIR (designer + the shipping BiquadCascade runner): pick a Family (Butterworth flat / ChebyI equiripple-pass / ChebyII equiripple-stop / Elliptic steepest / Be"
sidebar:
  order: 85
---

<small>Generated from PatchLab binary source candidate `99899b76e006` · registry type 84</small>

## At a glance

| Property | Value |
| --- | --- |
| Category | [Filters & EQ](../) |
| Signal role | Audio |
| Audio inputs | 1 |
| Audio outputs | 1 |
| MIDI input | No |
| MIDI output | No |
| CPU class | light |
| Reported latency | 0 |

## Parameters

| Parameter | ID | Range | Default | Unit / choices | Mod port |
| --- | --- | --- | --- | --- | ---: |
| Family | `family` | 0 to 5 | 0 | `Butterwth`, `ChebyI`, `ChebyII`, `Elliptic`, `Bessel`, `Legendre` | 1 |
| Shape | `shape` | 0 to 1 | 0 | `LP`, `HP` | 2 |
| Order | `order` | 2 to 12 | 4 | — | 3 |
| Cutoff (frequency) | `cutoff` | 20 to 20000 | 1000 | Hz | 4 |
| Ripple | `ripple` | 0.1 to 6 | 1 | dB | 5 |
| Stop | `stop` | 20 to 100 | 60 | dB | 6 |

## Declared ports

- Audio inputs: `A`

<details>
<summary>Registry implementation notes</summary>

classical high-order IIR (designer + the shipping BiquadCascade runner): pick a Family (Butterworth flat / ChebyI equiripple-pass / ChebyII equiripple-stop / Elliptic steepest / Bessel flat-group-delay / Legendre optimum-L) and an Order (2-12 even -> ceil(order/2) sections), LP or HP at Cutoff. Ripple sets the ChebyI/Elliptic passband ripple, Stop the ChebyII/Elliptic stopband floor. Coeffs are designed OFFLINE on a param change (double precision, message thread) and crossfaded in over a few ms - never redesigned per sample (click-free swaps). The precision brickwall/anti-image filter

</details>

:::caution[Verify in context]
Ranges and declared latency are product facts. Audible outcome, stability, level, and CPU cost still depend on signal, sample rate, block size, routing, modulation, and surrounding blocks.
:::

