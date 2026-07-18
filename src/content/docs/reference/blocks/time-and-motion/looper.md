---
title: "Looper"
description: "LOOPER: record / overdub / play a loop buffer inline - the performance capture cell."
sidebar:
  order: 158
---

<small>Generated from PatchLab binary source candidate `99899b76e006` · registry type 157</small>

## At a glance

| Property | Value |
| --- | --- |
| Category | [Time & Motion](../) |
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
| Mode | `mode` | 0 to 3 | 0 | `Stop`, `Play`, `Record`, `Overdub` | 1 |
| Level (level) | `level` | 0 to 1 | 1 | — | 2 |
| Decay (feedback) | `decay` | 0 to 1 | 1 | — | 3 |
| Clear | `clear` | 0 to 1 | 0 | `-`, `Clear` | 4 |

## Declared ports

- Audio inputs: `A`

## Safety and limits

loop audio is RUNTIME-ONLY (never saved with the patch - reload = empty). Entering Record ALWAYS starts a fresh loop (it does not punch-in; layering lives in Overdub); the buffer caps at 60 s - hitting the cap pins the length and keeps writing wrap-around, replace-style. Overdub with no loop captured is a dry passthrough. Overdub Decay 1 layers forever - watch the sum level (follow with a Limiter for dense stacks)

<details>
<summary>Registry implementation notes</summary>

LOOPER: record / overdub / play a loop buffer inline - the performance capture cell. Mode Stop / Play / Record / Overdub: the FIRST Record pass DEFINES the loop length (entering Record always starts a fresh loop; buffer caps at 60 s - the cap pins the length and keeps writing wrap-around). Play adds the loop under the dry input at Level; Overdub layers input on top with the previous pass kept at Decay (1 = layer forever, < 1 = older passes fade like tape sound-on-sound). Clear = a trigger param that drops the loop. Input always monitors through dry. Loop audio is RUNTIME-ONLY (never saved with the patch). Face = the loop as a waveform ring with a riding playhead + a REC tape strip while defining. Buffer allocated at prepare (never on the audio thread); lock-free face state. Stereo in -> out. (MNodes Looper)

</details>

:::caution[Verify in context]
Ranges and declared latency are product facts. Audible outcome, stability, level, and CPU cost still depend on signal, sample rate, block size, routing, modulation, and surrounding blocks.
:::

