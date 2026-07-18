---
title: "VideoPlayer"
description: "VIDEO PLAYER: decodes a video file OFF the audio thread via AVFoundation (a macOS system framework - in-process, no external tool install, never silently inert) and exposes THREE s"
sidebar:
  order: 162
---

<small>Generated from PatchLab binary source candidate `99899b76e006` · registry type 161</small>

## At a glance

| Property | Value |
| --- | --- |
| Category | [Visual](../) |
| Signal role | Audio |
| Audio inputs | 0 |
| Audio outputs | 3 |
| MIDI input | No |
| MIDI output | No |
| CPU class | light |
| Reported latency | 0 |

## Parameters

| Parameter | ID | Range | Default | Unit / choices | Mod port |
| --- | --- | --- | --- | --- | ---: |
| Play | `play` | 0 to 1 | 0 | `Stop`, `Play` | 0 |
| Loop | `loop` | 0 to 1 | 0 | `Off`, `On` | 1 |
| Level (level) | `level` | 0 to 1 | 0 | — | 2 |
| Rate | `rate` | 0.25 to 4 | 1 | x | 3 |
| Loop A | `lstart` | 0 to 1 | 0 | — | 4 |
| Loop B | `lend` | 0 to 1 | 1 | — | 5 |

<details>
<summary>Registry implementation notes</summary>

VIDEO PLAYER: decodes a video file OFF the audio thread via AVFoundation (a macOS system framework - in-process, no external tool install, never silently inert) and exposes THREE stereo outs - Audio (the video's own audio track, transport-synced), Rate (a one-sample pulse on every DECODED frame boundary - read it with a Meter/Timer for the true frame rate), and Bright (the frame-to-frame luma delta, held per frame 0..1, from a REAL 16x9 grayscale downsample of every frame - picks up black/white differences). Silent/stopped by default (hard rule #2). FULL TRANSPORT on the face: play/pause button, click/drag the bottom bar to scrub (works while stopped - the preview frame follows), Rate 0.25x-4x VARISPEED (pitch shifts with speed like tape, by design - NOT pitch-corrected), Loop A/B set the wrap region while Loop = On. The preview is a sampled thumbnail strip (<= 40 frames) that refreshes with the playhead - honest granularity, not a full-rate video surface. File path persists as a project-relative path-ref (Sampler pattern); a video with no audio stream just leaves Audio silent, Rate/Bright are unaffected.

</details>

:::caution[Verify in context]
Ranges and declared latency are product facts. Audible outcome, stability, level, and CPU cost still depend on signal, sample rate, block size, routing, modulation, and surrounding blocks.
:::

