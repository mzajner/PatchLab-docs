---
title: "Formula"
description: "VALUE REMAPPER, out = f(X,Y,A,B,C,D,t): pick a baked Formula (Linear a*x+b / Power skew / Exp / Sigmoid tanh / Smoothstep / Sine sin(2pi(a*x+b)) / Rectify / Wrap / Fold / dB>Gain /"
sidebar:
  order: 111
---

<small>Generated from PatchLab binary source candidate `99899b76e006` · registry type 110</small>

## At a glance

| Property | Value |
| --- | --- |
| Category | [Modulators](../) |
| Signal role | Modulation |
| Audio inputs | 2 |
| Audio outputs | 1 |
| MIDI input | No |
| MIDI output | No |
| CPU class | trivial |
| Reported latency | 0 |

## Parameters

| Parameter | ID | Range | Default | Unit / choices | Mod port |
| --- | --- | --- | --- | --- | ---: |
| Formula | `preset` | 0 to 15 | 0 | `Linear`, `Power`, `Exp`, `Sigmoid`, `Smoothstep`, `Sine`, `Rectify`, `Wrap`, `Fold`, `dB>Gain`, `Gain>dB`, `Crossfade`, `Clamp`, `Quadratic`, `Chebyshev`, `Custom` | 2 |
| A | `a` | -8 to 8 | 1 | — | 3 |
| B | `b` | -8 to 8 | 0 | — | 4 |
| C | `c` | -8 to 8 | 0 | — | 5 |
| D | `d` | -8 to 8 | 0 | — | 6 |

## Declared ports

- Audio inputs: `X`, `Y`

<details>
<summary>Registry implementation notes</summary>

VALUE REMAPPER, out = f(X,Y,A,B,C,D,t): pick a baked Formula (Linear a*x+b / Power skew / Exp / Sigmoid tanh / Smoothstep / Sine sin(2pi(a*x+b)) / Rectify / Wrap / Fold / dB>Gain / Gain>dB / Crossfade x<->y / Clamp / Quadratic / Chebyshev) or Custom = a typed expression (vars x y z a b c d t, consts pi e; funcs sin cos tan atan abs exp log sqrt floor ceil round tanh sign frac min max pow mod step clamp lerp smoothstep) stored in the patch and parsed ONCE into a sandboxed RT-safe evaluator (no SNEX/JIT). A/B/C/D are coefficient knobs AND mod targets (LFO -> A sweeps the curve); t is a 1 Hz phase so Custom can self-generate. The 'remap any value any way' cell - bespoke velocity/sidechain curves, custom LFO shapes, unit math

</details>

:::caution[Verify in context]
Ranges and declared latency are product facts. Audible outcome, stability, level, and CPU cost still depend on signal, sample rate, block size, routing, modulation, and surrounding blocks.
:::

