---
title: "BinGate"
description: "per-bin spectral gate / denoise (inside an STFT zone): kills bins whose magnitude is below Thresh (toward Floor), with a soft cosine Knee to avoid 'birdies' (flickering bins)."
sidebar:
  order: 97
---

<small>Generated from PatchLab binary source candidate `99899b76e006` · registry type 96</small>

## At a glance

| Property | Value |
| --- | --- |
| Category | [Spectral](../) |
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
| Thresh (threshold) | `thr` | -80 to 40 | -20 | dB | 1 |
| Floor | `floor` | -120 to 0 | -120 | dB | 2 |
| Knee | `knee` | 0 to 24 | 6 | dB | 3 |
| Tilt (tone) | `tilt` | -24 to 24 | 0 | dB | 4 |
| Attack | `atk` | 0 to 0.99 | 0 | — | 5 |
| Releas | `rel` | 0 to 0.99 | 0.5 | — | 6 |

## Declared ports

- Audio inputs: `A`

## Safety and limits

operates on per-frame magnitude in dB (a full-scale sine bin ~ +48 dB at N=1024) - set Thresh in that frame-magnitude domain, not signal dBFS. A hard Knee (0) + fast settings cause 'birdies' (flickering isolated bins); raise Knee and Release to smooth. Floor -120 dB = full kill

<details>
<summary>Registry implementation notes</summary>

per-bin spectral gate / denoise (inside an STFT zone): kills bins whose magnitude is below Thresh (toward Floor), with a soft cosine Knee to avoid 'birdies' (flickering bins). Tilt slopes the threshold across the band (gate HF hiss harder); Attack/Release smooth the per-bin gain across frames. Spectral noise reduction + the spectral-gate effect

</details>

:::caution[Verify in context]
Ranges and declared latency are product facts. Audible outcome, stability, level, and CPU cost still depend on signal, sample rate, block size, routing, modulation, and surrounding blocks.
:::

