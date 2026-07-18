---
title: "MixMatrix"
description: "lossless NxN orthogonal mixing matrix (the FDN/waveguide enabler): rotates N stereo lines into N stereo lines preserving energy (||Mx||==||x||), so dropped in a Feedback zone aroun"
sidebar:
  order: 81
---

<small>Generated from PatchLab binary source candidate `99899b76e006` · registry type 80</small>

## At a glance

| Property | Value |
| --- | --- |
| Category | [Routing & Structure](../) |
| Signal role | Utility |
| Audio inputs | 4 |
| Audio outputs | 4 |
| MIDI input | No |
| MIDI output | No |
| CPU class | trivial |
| Reported latency | 0 |

## Parameters

| Parameter | ID | Range | Default | Unit / choices | Mod port |
| --- | --- | --- | --- | --- | ---: |
| Type | `type` | 0 to 2 | 0 | `Hadamard`, `Householdr`, `Random` | 4 |
| Lines | `size` | 0 to 1 | 1 | `2`, `4` | 5 |

## Declared ports

- Audio inputs: `In 1`, `In 2`, `In 3`, `In 4`

<details>
<summary>Registry implementation notes</summary>

lossless NxN orthogonal mixing matrix (the FDN/waveguide enabler): rotates N stereo lines into N stereo lines preserving energy (||Mx||==||x||), so dropped in a Feedback zone around N delay lines it gives a colourless, stable, non-blowing-up tail. Type Hadamard (fast Walsh-Hadamard, +/-1/sqrtN) / Householder (max-diffusion reflection) / Random (QR-baked orthogonal); Lines 2 or 4. Structural - set at prepare, no smoothing

</details>

:::caution[Verify in context]
Ranges and declared latency are product facts. Audible outcome, stability, level, and CPU cost still depend on signal, sample rate, block size, routing, modulation, and surrounding blocks.
:::

