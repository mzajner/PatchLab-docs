---
title: "Wavetable"
description: "mip-mapped band-limited wavetable oscillator with Position morph across waveform frames (default bank morphs sine->tri->saw->square; Position is a mod target - LFO/ADSR sweeps the "
sidebar:
  order: 76
---

<small>Generated from PatchLab binary source candidate `99899b76e006` · registry type 75</small>

## At a glance

| Property | Value |
| --- | --- |
| Category | [Generators](../) |
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
| Freq (frequency) | `freq` | 20 to 4000 | 220 | Hz | 1 |
| Level (level) | `level` | 0 to 1 | 0 | — | 2 |
| Position | `position` | 0 to 1 | 0 | — | 3 |
| Mod Oct (depth) | `modoct` | 0 to 4 | 0 | — | 4 |
| Unison | `unison` | 1 to 8 | 1 | — | 5 |
| Detune (depth) | `detune` | 0 to 100 | 12 | c | 6 |
| Spread | `spread` | 0 to 1 | 0.5 | — | 7 |
| PM (depth) | `pm` | 0 to 1 | 0 | — | 8 |

## Declared ports

- Audio inputs: `Mod`

## Safety and limits

generator: SILENT until Level is raised (house rule). Band-limited by FFT-built half-octave mip tables (alias floor < -107 dBc, no oversampling needed); Position morphs across frames, is a mod target, and is smoothed per sample (~15 ms) - sweeps are click-free by design. Tables: factory:basic (default sine->tri->saw->square), factory:sawsquare/pwm/formant/harmonics, or a Serum-style .wav (2048-sample frames, count = length/2048, max 256) via Load audio file / the zoom-in workbench; builds off-thread. Unison 1-8 voices (Detune cents, equal-power Spread; Unison 1 = legacy mono, both channels identical). PM phase-modulates the read from the Mod input (audio-rate, up to +-2 cycles at depth 1); Mod Oct remains block-rate FM from the same cable

<details>
<summary>Registry implementation notes</summary>

mip-mapped band-limited wavetable oscillator with Position morph across waveform frames (default bank morphs sine->tri->saw->square; Position is a mod target - LFO/ADSR sweeps the timbre). The mip tables ARE the band-limiter (alias floor -167 dBc, far below polyBLEP), so it stays clean across the whole range; Mod Oct = FM/vibrato via the Mod port - silent until Level up

</details>

:::caution[Verify in context]
Ranges and declared latency are product facts. Audible outcome, stability, level, and CPU cost still depend on signal, sample rate, block size, routing, modulation, and surrounding blocks.
:::

