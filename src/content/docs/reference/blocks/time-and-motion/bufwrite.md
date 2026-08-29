---
title: "BufWrite"
description: "BUFFER WRITE: the advancing write head - writes every input sample into Slot's memory and advances one frame per frame (circular)."
sidebar:
  order: 173
---

<small>Generated from PatchLab binary source candidate `7fd3876b4e75` · registry type 172</small>

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
| Reported latency | 0 |

## Parameters

| Parameter | ID | Range | Default | Unit / choices | Mod port |
| --- | --- | --- | --- | --- | ---: |
| Slot | `slot` | 0 to 7 | 0 | `1`, `2`, `3`, `4`, `5`, `6`, `7`, `8` | 1 |
| Mode | `mode` | 0 to 1 | 0 | `Overwrite`, `Add` | 2 |

## Declared ports

- Audio inputs: `A`

## Safety and limits

ONE write head per slot. A second BufWrite on the same slot advances the head twice per block, halving every read's effective delay - UNDEFINED and unguarded. Audio is passed through bit-exact (it only writes). With no Buffer declaring the slot this is a plain wire, silently

<details>
<summary>Registry implementation notes</summary>

BUFFER WRITE: the advancing write head - writes every input sample into Slot's memory and advances one frame per frame (circular). PASSTHROUGH: the audio continues unchanged, so its output is what you cable into BufRead's Order pin, and that cable is what puts the write BEFORE the read in the graph and lets the read see THIS block's samples. Mode Overwrite replaces, Add overdubs onto what is already there. ONE write head per slot: a second BufWrite on the same slot advances the head twice per block and halves every read's effective delay - undefined, do not. With no Buffer declaring the slot this is a plain wire.

</details>

:::caution[Verify in context]
Ranges and declared latency are product facts. Audible outcome, stability, level, and CPU cost still depend on signal, sample rate, block size, routing, modulation, and surrounding blocks.
:::

