---
title: "CVTranspose"
description: "CV TRANSPOSE: a CV-DOMAIN semitone + cent pitch shifter - multiplies a Hz-valued control wire by the musical ratio 2^((Semis + Cents/100)/12)."
sidebar:
  order: 150
---

<small>Generated from PatchLab binary source candidate `99899b76e006` · registry type 149</small>

## At a glance

| Property | Value |
| --- | --- |
| Category | [Modulators](../) |
| Signal role | Modulation |
| Audio inputs | 1 |
| Audio outputs | 1 |
| MIDI input | No |
| MIDI output | No |
| CPU class | trivial |
| Reported latency | 0 |

## Parameters

| Parameter | ID | Range | Default | Unit / choices | Mod port |
| --- | --- | --- | --- | --- | ---: |
| Semis (pitch) | `semi` | -48 to 48 | 0 | st | 1 |
| Cents (pitch) | `cents` | -100 to 100 | 0 | ct | 2 |

## Declared ports

- Audio inputs: `A`

<details>
<summary>Registry implementation notes</summary>

CV TRANSPOSE: a CV-DOMAIN semitone + cent pitch shifter - multiplies a Hz-valued control wire by the musical ratio 2^((Semis + Cents/100)/12). Composable already (Convert semitone->ratio x Hz via Math2) - this is the named sugar for 'transpose / detune a pitch CV'. Wire a Hz source (Convert Note>Hz, KeyTrack, a sequencer) through it into an Osc or Filter freq. DISTINCT from the MIDI-domain Transpose (which shifts note EVENTS): this shifts a control VALUE. The ratio is smoothed (~5 ms lag) so modulating Semis/Cents glides, not steps (house rule 5). Per-sample x ratio on both channels; inputs sanitized. Native-first. (MNodes CV Transpose/Detune).

</details>

:::caution[Verify in context]
Ranges and declared latency are product facts. Audible outcome, stability, level, and CPU cost still depend on signal, sample rate, block size, routing, modulation, and surrounding blocks.
:::

