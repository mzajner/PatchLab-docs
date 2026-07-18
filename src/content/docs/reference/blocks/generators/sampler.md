---
title: "Sampler"
description: "polyphonic pitched sample playback (8 voices, NoteOsc event path): a note at Root plays the buffer at ratio 1.0, others resampled by the semitone ratio (Hermite)."
sidebar:
  order: 77
---

<small>Generated from PatchLab binary source candidate `99899b76e006` · registry type 76</small>

## At a glance

| Property | Value |
| --- | --- |
| Category | [Generators](../) |
| Signal role | Audio |
| Audio inputs | 0 |
| Audio outputs | 1 |
| MIDI input | Yes |
| MIDI output | No |
| CPU class | light |
| Reported latency | 0 |

## Parameters

| Parameter | ID | Range | Default | Unit / choices | Mod port |
| --- | --- | --- | --- | --- | ---: |
| Root | `root` | 0 to 127 | 60 | — | 0 |
| Level (level) | `level` | 0 to 1 | 0.5 | — | 1 |
| Attack (time) | `attack` | 0.5 to 500 | 2 | ms | 2 |
| Release (time) | `release` | 5 to 2000 | 120 | ms | 3 |
| Start | `start` | 0 to 1 | 0 | — | 4 |
| Loop | `loop` | 0 to 1 | 0 | `Off`, `On` | 5 |
| Loop St | `loopstart` | 0 to 1 | 0 | — | 6 |
| Loop End | `loopend` | 0 to 1 | 1 | — | 7 |
| End | `end` | 0 to 1 | 1 | — | 8 |
| RR Mode | `rrmode` | 0 to 2 | 0 | `Round Robin`, `Random`, `Crossfade` | 9 |
| Start Mod | `startmod` | 0 to 1 | 0 | — | 10 |
| Preload | `preload` | 0 to 300 | 0 | s | 11 |
| Stream | `stream` | 0 to 1 | 0 | `Off`, `On` | 12 |
| Decay (time) | `decay` | 1 to 4000 | 80 | ms | 13 |
| Sustain | `sustain` | 0 to 1 | 1 | — | 14 |
| Group XF | `groupxf` | 0 to 1 | 0 | — | 15 |

## Safety and limits

SILENT until a note triggers a voice (8-voice poly, steals the quietest). Pitch = 2^((note-Root)/12) x (fileSr/engineSr), clamped to +-5 octaves; ratio 1.0 (note==Root, matching SR) from an integer Start is BIT-EXACT. Loop On crossfades the wrap click-free (256-smp default); changing loop points rebuilds the crossfade off-thread. File path persists in the patch (path-ref): a MOVED/missing file falls back to the built-in two-tone default sample - re-set the path to relink. File decode is OFF the audio thread (no I/O or alloc on the RT path); E4: voices apply per-channel pitch-bend (basic MPE)

<details>
<summary>Registry implementation notes</summary>

polyphonic pitched sample playback (8 voices, NoteOsc event path): a note at Root plays the buffer at ratio 1.0, others resampled by the semitone ratio (Hermite). Start/End frame playback; Loop On wraps Loop St->Loop End with a click-free crossfade. File loads OFF the audio thread (path-ref stored in the patch); plays a built-in two-tone default until a file is set - silent until a note triggers a voice

</details>

:::caution[Verify in context]
Ranges and declared latency are product facts. Audible outcome, stability, level, and CPU cost still depend on signal, sample rate, block size, routing, modulation, and surrounding blocks.
:::

