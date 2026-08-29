---
title: "AudioPlayer"
description: "AUDIO PLAYER: the simple drag-and-drop audio-file player / looper - drop a WAV/AIFF/FLAC/MP3 onto the block (or right-click Load) and it decodes OFF the audio thread into RAM, then"
sidebar:
  order: 167
---

<small>Generated from PatchLab binary source candidate `7fd3876b4e75` · registry type 166</small>

## At a glance

| Property | Value |
| --- | --- |
| Category | [Generators](../) |
| Signal role | Audio |
| Audio inputs | 0 |
| Audio outputs | 1 |
| MIDI input | No |
| MIDI output | No |
| CPU class | trivial |
| Reported latency | 0 |

## Parameters

| Parameter | ID | Range | Default | Unit / choices | Mod port |
| --- | --- | --- | --- | --- | ---: |
| Play | `play` | 0 to 1 | 0 | `Stop`, `Play` | 0 |
| Loop | `loop` | 0 to 1 | 0 | `Off`, `On` | 1 |
| Gain (level) | `gain` | 0 to 1 | 0 | — | 2 |
| Speed (ratio) | `speed` | 0.25 to 4 | 1 | x | 3 |
| Loop A | `lstart` | 0 to 1 | 0 | — | 4 |
| Loop B | `lend` | 0 to 1 | 1 | — | 5 |
| Seam XF | `xfade` | 0 to 50 | 5 | ms | 6 |

<details>
<summary>Registry implementation notes</summary>

AUDIO PLAYER: the simple drag-and-drop audio-file player / looper - drop a WAV/AIFF/FLAC/MP3 onto the block (or right-click Load) and it decodes OFF the audio thread into RAM, then plays it back with a full transport on the face. Play/Stop, Loop On/Off with normalized Loop A/B, Speed 0.25x-4x (+/-2 octaves, VARISPEED - pitch shifts with speed like tape, by design), Gain, and a click/drag position scrubber. SILENT BY DEFAULT (Gain 0, hard rule #2): a loaded file makes no sound until you raise Gain and press Play. The loop wrap is sample-accurate with an equal-power CROSSFADE at the seam (Seam XF ms) so it never clicks. Distinct from the Looper node (which records/overdubs the live wire) - this loads and plays FILES. File path persists as a project-relative path-ref (Sampler pattern); a missing file on reload stays silent and the face reads 'load failed' (never a crash). v1 fully loads into memory (~10 min @48k cap); no disk streaming yet.

</details>

:::caution[Verify in context]
Ranges and declared latency are product facts. Audible outcome, stability, level, and CPU cost still depend on signal, sample rate, block size, routing, modulation, and surrounding blocks.
:::

