---
title: "Velocity"
description: "note-on VELOCITY -> 0..1 control signal, shaped through a 5-breakpoint transfer curve (the velocity-sensitivity cell - touch response without an ADSR)."
sidebar:
  order: 108
---

<small>Generated from PatchLab binary source candidate `99899b76e006` · registry type 107</small>

## At a glance

| Property | Value |
| --- | --- |
| Category | [Modulators](../) |
| Signal role | Modulation |
| Audio inputs | 0 |
| Audio outputs | 1 |
| MIDI input | Yes |
| MIDI output | No |
| CPU class | trivial |
| Reported latency | 0 |

## Parameters

| Parameter | ID | Range | Default | Unit / choices | Mod port |
| --- | --- | --- | --- | --- | ---: |
| Y 0% | `y0` | 0 to 1 | 0 | — | 0 |
| Y 25% | `y1` | 0 to 1 | 0.25 | — | 1 |
| Y 50% | `y2` | 0 to 1 | 0.5 | — | 2 |
| Y 75% | `y3` | 0 to 1 | 0.75 | — | 3 |
| Y 100% | `y4` | 0 to 1 | 1 | — | 4 |
| Interp | `interp` | 0 to 1 | 0 | `Linear`, `Smooth` | 5 |
| Glide (time) | `glide` | 0 to 500 | 0 | ms | 6 |

## Safety and limits

holds 0 until the FIRST note-on (no value before then). Mono last-note: the most recent note-on overwrites the latched velocity (inside a Poly zone each voice latches its own). Reads note-ON velocity only - it does not follow note-off or aftertouch (use MidiCC Aftertouch for continuous pressure). The curve maps 0..1 -> 0..1 (identity by default = exactly the velocity); the held value persists through note-off until the next note (the KeyTrack hold idiom), and Glide lags between notes

<details>
<summary>Registry implementation notes</summary>

note-on VELOCITY -> 0..1 control signal, shaped through a 5-breakpoint transfer curve (the velocity-sensitivity cell - touch response without an ADSR). On each note-on the velocity (0..1) is latched, mapped through the same curve as CurveMap (identity by default = exactly the velocity; raise/lower the breakpoints for a soft/hard playing curve; Smooth = Catmull-Rom), and HELD on the out wire (the KeyTrack idiom; the value persists through note-off until the next note). Glide lags between notes for legato swells. Patch Velocity -> VCA Gain for dynamics, -> Filter cutoff for brightness-by-touch, or -> any mod port. Holds 0 until the first note. Mono last-note velocity (inside a Poly zone each voice latches its own)

</details>

:::caution[Verify in context]
Ranges and declared latency are product facts. Audible outcome, stability, level, and CPU cost still depend on signal, sample rate, block size, routing, modulation, and surrounding blocks.
:::

