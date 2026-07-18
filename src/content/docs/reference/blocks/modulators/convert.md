---
title: "Convert"
description: "unit conversion on the wire: dB<->linear, MIDI note<->Hz, ms<->Hz, semitone->ratio, bipolar<->unipolar (Sig/Mod)"
sidebar:
  order: 39
---

<small>Generated from PatchLab binary source candidate `99899b76e006` · registry type 38</small>

## At a glance

| Property | Value |
| --- | --- |
| Category | [Modulators](../) |
| Signal role | Utility |
| Audio inputs | 1 |
| Audio outputs | 1 |
| MIDI input | No |
| MIDI output | No |
| CPU class | trivial |
| Reported latency | 0 |

## Parameters

| Parameter | ID | Range | Default | Unit / choices | Mod port |
| --- | --- | --- | --- | --- | ---: |
| Mode | `mode` | 0 to 8 | 0 | `dB>Lin`, `Lin>dB`, `Note>Hz`, `Hz>Note`, `ms>Hz`, `Hz>ms`, `Semi>Ratio`, `Sig>Mod`, `Mod>Sig` | 1 |

## Declared ports

- Audio inputs: `A`

## Safety and limits

log/div modes guarded: lin<=0 floors at -120 dB, ms/Hz<=0 yields 0

<details>
<summary>Registry implementation notes</summary>

unit conversion on the wire: dB<->linear, MIDI note<->Hz, ms<->Hz, semitone->ratio, bipolar<->unipolar (Sig/Mod)

</details>

:::caution[Verify in context]
Ranges and declared latency are product facts. Audible outcome, stability, level, and CPU cost still depend on signal, sample rate, block size, routing, modulation, and surrounding blocks.
:::

