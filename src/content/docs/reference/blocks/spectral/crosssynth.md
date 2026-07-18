---
title: "CrossSynth"
description: "spectral cross-synthesis / vocoder (inside an STFT zone, TWO inputs): the carrier (input A) keeps its phase; its magnitude is blended toward the modulator's (input B) spectral enve"
sidebar:
  order: 101
---

<small>Generated from PatchLab binary source candidate `99899b76e006` · registry type 100</small>

## At a glance

| Property | Value |
| --- | --- |
| Category | [Spectral](../) |
| Signal role | Audio |
| Audio inputs | 2 |
| Audio outputs | 1 |
| MIDI input | No |
| MIDI output | No |
| CPU class | trivial |
| Reported latency | 0 |

## Parameters

| Parameter | ID | Range | Default | Unit / choices | Mod port |
| --- | --- | --- | --- | --- | ---: |
| Depth (depth) | `depth` | 0 to 1 | 1 | — | 2 |
| Smooth | `smooth` | 0 to 0.99 | 0 | — | 3 |
| Mix (mix) | `mix` | 0 to 1 | 1 | — | 4 |

## Declared ports

- Audio inputs: `A`, `B`

## Safety and limits

TWO inputs (A = carrier, B = modulator): inside an STFT zone both must be in the SAME zone carrying mag/phase; OUTSIDE a zone the node auto-embeds paired carrier+modulator framers (1024/4x, +1024 smp reported latency). An unconnected B input reads as silence -> the carrier magnitude collapses toward -inf dB at Depth 1 (keep Depth < 1 or connect B). Geometric magnitude blend (carrier^(1-Depth)*mod^Depth); Smooth low-passes B's envelope to stop chatter

<details>
<summary>Registry implementation notes</summary>

spectral cross-synthesis / vocoder (inside an STFT zone, TWO inputs): the carrier (input A) keeps its phase; its magnitude is blended toward the modulator's (input B) spectral envelope - mag' = magA^(1-Depth)*magB^Depth. Depth 1 = full vocoder (B's formants on A's pitch), 0 = carrier untouched; Smooth low-passes the modulator envelope across frames (no chatter), Mix blends dry. Feed a rich carrier (Saw/Pad) on A and a voice/drums on B for the classic talkbox/vocoder

</details>

:::caution[Verify in context]
Ranges and declared latency are product facts. Audible outcome, stability, level, and CPU cost still depend on signal, sample rate, block size, routing, modulation, and surrounding blocks.
:::

