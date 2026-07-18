---
title: "FixDelay"
description: "clean fractional delay, interp quality enum None/Linear/Cubic/Thiran/Sinc: Haas, manual flanger/comb via Add, precise spacers; Time mod sweeps pitch-clean (Cubic/Sinc cleanest); no"
sidebar:
  order: 55
---

<small>Generated from PatchLab binary source candidate `99899b76e006` · registry type 54</small>

## At a glance

| Property | Value |
| --- | --- |
| Category | [Time & Motion](../) |
| Signal role | Audio |
| Audio inputs | 1 |
| Audio outputs | 1 |
| MIDI input | No |
| MIDI output | No |
| CPU class | trivial |
| Reported latency | 0 (Sinc mode: 4 smp kernel floor - shorter times render as 4 smp) |

## Parameters

| Parameter | ID | Range | Default | Unit / choices | Mod port |
| --- | --- | --- | --- | --- | ---: |
| Interp | `interp` | 0 to 4 | 1 | `None`, `Linear`, `Cubic`, `Thiran`, `Sinc` | 1 |
| Time (time) | `time` | 0 to 2000 | 100 | ms | 2 |
| Mix (mix) | `mix` | 0 to 1 | 1 | — | 3 |

## Declared ports

- Audio inputs: `A`

## Safety and limits

no feedback of its own (loop via Send/Receive); Sinc cannot go below its 4-smp kernel floor; Thiran is for static/slow times - under fast sweeps prefer Cubic/Sinc

<details>
<summary>Registry implementation notes</summary>

clean fractional delay, interp quality enum None/Linear/Cubic/Thiran/Sinc: Haas, manual flanger/comb via Add, precise spacers; Time mod sweeps pitch-clean (Cubic/Sinc cleanest); no feedback of its own - loop via Send/Receive

</details>

:::caution[Verify in context]
Ranges and declared latency are product facts. Audible outcome, stability, level, and CPU cost still depend on signal, sample rate, block size, routing, modulation, and surrounding blocks.
:::

