---
title: "Tuner"
description: "monophonic Tuner / pitch detector (passthrough) that doubles as a MOD SOURCE: detects the fundamental with YIN (de Cheveigne & Kawahara - time-domain, octave-ROBUST: the CMNDF firs"
sidebar:
  order: 105
---

<small>Generated from PatchLab binary source candidate `99899b76e006` · registry type 104</small>

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
| Range | `range` | 0 to 2 | 1 | `Bass`, `Full`, `Treble` | 1 |
| Thresh (threshold) | `thresh` | 0.05 to 0.3 | 0.1 | — | 2 |
| Ref A4 (frequency) | `ref` | 400 to 480 | 440 | Hz | 3 |
| Smooth (time) | `smooth` | 1 to 500 | 60 | ms | 4 |
| Mod Out | `modmode` | 0 to 3 | 0 | `Off`, `Hz`, `Cents`, `Note01` | 5 |

## Declared ports

- Audio inputs: `A`

## Safety and limits

MONOPHONIC only (YIN tracks one fundamental - chords/polyphony report the dominant or jitter); detection has ~one analysis-window of inherent latency (cannot be lower - it needs >=2 periods of the lowest note) and runs at the ~60 Hz analyzer rate, so the read settles rather than jumping per-sample. Audio is bit-exact passthrough UNLESS Mod Out is set (then the out bus carries the control value, NOT the audio - place it as a TAP for display, or as a SOURCE for the mod value, not both at once). Unvoiced/noisy input is confidence-gated (no false octave-lock); pick the Range band that matches the source for the tightest tracking

<details>
<summary>Registry implementation notes</summary>

monophonic Tuner / pitch detector (passthrough) that doubles as a MOD SOURCE: detects the fundamental with YIN (de Cheveigne & Kawahara - time-domain, octave-ROBUST: the CMNDF first-dip rule rejects the octave-up error that fools autocorrelation), shows the note / Hz / cents-off on its face with a tuning needle. Detection runs OFF the audio + paint threads on the analysis hub (~60 Hz, ~one window of inherent latency), audio path is bit-exact passthrough. Set Mod Out {Hz, Cents, Note01} and it ALSO emits the smoothed pitch as a control signal on its out (the EnvFollow idiom) - patch Tuner -> Filter cutoff for pitch-tracking, or Tuner -> Convert for a Hz->note wire. Range Bass/Full/Treble sets the search band; Ref A4 the tuning reference. White noise / unvoiced input reads nothing (confidence-gated, no octave false-lock)

</details>

:::caution[Verify in context]
Ranges and declared latency are product facts. Audible outcome, stability, level, and CPU cost still depend on signal, sample rate, block size, routing, modulation, and surrounding blocks.
:::

