---
title: "Cmaj"
description: "CMAJOR JIT BLOCK (v2 backend): hosts a live-compiled Cmajor dsp.cmajor behind the NodeProcessor seam - the data-driven, AI-/community-extensible DSP block."
sidebar:
  order: 130
---

<small>Generated from PatchLab binary source candidate `99899b76e006` · registry type 129</small>

## At a glance

| Property | Value |
| --- | --- |
| Category | [Routing & Structure](../) |
| Signal role | Audio |
| Audio inputs | 1 |
| Audio outputs | 1 |
| MIDI input | No |
| MIDI output | No |
| CPU class | trivial |
| Reported latency | 0 |

## Parameters

This block declares no editable parameters.

## Declared ports

- Audio inputs: `A`

<details>
<summary>Registry implementation notes</summary>

CMAJOR JIT BLOCK (v2 backend): hosts a live-compiled Cmajor dsp.cmajor behind the NodeProcessor seam - the data-driven, AI-/community-extensible DSP block. A block.json manifest drives the param rows (1:1 with addParam) and the cmajor source is JIT-compiled (LLVM) into a per-node performer; audio marshals in->performer->out per block, each Param::effective() pushed to its value endpoint. Bare/failed = labelled SILENT PASSTHROUGH, never a crash. Block identity persists as a 'cmajType' prop (the folder name), not a registry index, so unbounded blocks stay append-only-safe

</details>

:::caution[Verify in context]
Ranges and declared latency are product facts. Audible outcome, stability, level, and CPU cost still depend on signal, sample rate, block size, routing, modulation, and surrounding blocks.
:::

