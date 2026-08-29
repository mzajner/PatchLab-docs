---
title: "BufClear"
description: "BUFFER CLEAR: zero a whole Slot on a trigger - the looper's Clear, the sampler's flush, the 'start again' every memory patch needs."
sidebar:
  order: 179
---

<small>Generated from PatchLab binary source candidate `7fd3876b4e75` · registry type 178</small>

## At a glance

| Property | Value |
| --- | --- |
| Category | [Time & Motion](../) |
| Signal role | Audio |
| Audio inputs | 1 |
| Audio outputs | 0 |
| MIDI input | No |
| MIDI output | No |
| CPU class | light |
| Reported latency | 0 for the audio path (it has none). The WIPE is amortized across blocks and completes within about 85 ms at any block size - so a slot is not fully zero the instant Trig fires, and a re-trigger during a wipe restarts it |

## Parameters

| Parameter | ID | Range | Default | Unit / choices | Mod port |
| --- | --- | --- | --- | --- | ---: |
| Slot | `slot` | 0 to 7 | 0 | `1`, `2`, `3`, `4`, `5`, `6`, `7`, `8` | 1 |

## Declared ports

- Audio inputs: `Trig`

## Safety and limits

The wipe is AMORTIZED, not instant: a bounded slice per block completing within about 85 ms at any block size, because zeroing ten seconds of stereo is a million floats and no audio thread may do that in one block. A slot is therefore partially cleared for a few blocks after Trig, and a re-trigger restarts the wipe. Deliberately a real wipe rather than an epoch flag - a flag would lie to BufPoke's Add path, which would go on summing onto bytes readers were pretending were zero

<details>
<summary>Registry implementation notes</summary>

BUFFER CLEAR: zero a whole Slot on a trigger - the looper's Clear, the sampler's flush, the 'start again' every memory patch needs. Fires on a rising edge at the Trig input (sample-accurate Schmitt, the same discipline as S&H and Random - NOT a block-peak param port). Clearing ten seconds of stereo is a million floats, which no audio thread may do in one block, so the wipe is AMORTIZED: a bounded slice per block, completing within about 85 ms at any block size, and a re-trigger during a wipe restarts it. It is honest work rather than a flag: heads reading a cleared region genuinely read zero, so a poke overdubbing into it sums onto real silence and not onto bytes a flag was pretending were gone.

</details>

:::caution[Verify in context]
Ranges and declared latency are product facts. Audible outcome, stability, level, and CPU cost still depend on signal, sample rate, block size, routing, modulation, and surrounding blocks.
:::

