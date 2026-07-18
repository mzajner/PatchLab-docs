---
title: "Matrix"
description: "rectangular weighted routing matrix (memoryless, block-rate): out_i = sum  w[i][j]*in_j over 4 stereo lines - move/blend any input to any output."
sidebar:
  order: 82
---

<small>Generated from PatchLab binary source candidate `99899b76e006` · registry type 81</small>

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
| O1←I1 (gain) | `w00` | -1 to 1 | 1 | — | 4 |
| O1←I2 (gain) | `w01` | -1 to 1 | 0 | — | 5 |
| O1←I3 (gain) | `w02` | -1 to 1 | 0 | — | 6 |
| O1←I4 (gain) | `w03` | -1 to 1 | 0 | — | 7 |
| O2←I1 (gain) | `w10` | -1 to 1 | 0 | — | 8 |
| O2←I2 (gain) | `w11` | -1 to 1 | 1 | — | 9 |
| O2←I3 (gain) | `w12` | -1 to 1 | 0 | — | 10 |
| O2←I4 (gain) | `w13` | -1 to 1 | 0 | — | 11 |
| O3←I1 (gain) | `w20` | -1 to 1 | 0 | — | 12 |
| O3←I2 (gain) | `w21` | -1 to 1 | 0 | — | 13 |
| O3←I3 (gain) | `w22` | -1 to 1 | 1 | — | 14 |
| O3←I4 (gain) | `w23` | -1 to 1 | 0 | — | 15 |
| O4←I1 (gain) | `w30` | -1 to 1 | 0 | — | 16 |
| O4←I2 (gain) | `w31` | -1 to 1 | 0 | — | 17 |
| O4←I3 (gain) | `w32` | -1 to 1 | 0 | — | 18 |
| O4←I4 (gain) | `w33` | -1 to 1 | 1 | — | 19 |

## Declared ports

- Audio inputs: `In 1`, `In 2`, `In 3`, `In 4`

<details>
<summary>Registry implementation notes</summary>

rectangular weighted routing matrix (memoryless, block-rate): out_i = sum  w[i][j]*in_j over 4 stereo lines - move/blend any input to any output. 16 weight params (-1..+1, default identity = passthrough), each a mod port so the routing itself can be modulated. Distinct from MixMatrix: no orthogonality/energy preservation, just an arbitrary weighted sum - the 'patchbay', not the FDN rotation

</details>

:::caution[Verify in context]
Ranges and declared latency are product facts. Audible outcome, stability, level, and CPU cost still depend on signal, sample rate, block size, routing, modulation, and surrounding blocks.
:::

