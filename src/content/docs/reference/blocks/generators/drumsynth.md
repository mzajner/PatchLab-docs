---
title: "DrumSynth"
description: "DRUMSYNTH: a curated one-shot drum VOICE (Voice = Kick / Snare / Hat), MIDI-note triggered like NoteOsc -- no samples, pure analog-model synthesis."
sidebar:
  order: 137
---

<small>Generated from PatchLab binary source candidate `99899b76e006` · registry type 136</small>

## At a glance

| Property | Value |
| --- | --- |
| Category | [Generators](../) |
| Signal role | Audio |
| Audio inputs | 0 |
| Audio outputs | 1 |
| MIDI input | Yes |
| MIDI output | No |
| CPU class | trivial |
| Reported latency | 0 |

## Parameters

| Parameter | ID | Range | Default | Unit / choices | Mod port |
| --- | --- | --- | --- | --- | ---: |
| Voice | `voice` | 0 to 2 | 0 | `Kick`, `Snare`, `Hat` | 0 |
| Tune | `tune` | 0 to 1 | 0.5 | — | 1 |
| Decay (time) | `decay` | 0.02 to 2 | 0.4 | s | 2 |
| Tone (tone) | `tone` | 0 to 1 | 0.5 | — | 3 |
| Level (level) | `level` | 0 to 1 | 0.8 | — | 4 |

<details>
<summary>Registry implementation notes</summary>

DRUMSYNTH: a curated one-shot drum VOICE (Voice = Kick / Snare / Hat), MIDI-note triggered like NoteOsc -- no samples, pure analog-model synthesis. KICK = a pitch-swept sine (Tune = body pitch) + exp amp decay + tanh Drive (Tone); SNARE = two detuned sines (tone) + a bandpassed noise burst, blended by Tone; HAT = highpassed noise (Tune = brightness) + short exp decay. Four macros -- Tune / Decay / Tone / Level -- drive all three voices; velocity scales the hit. SILENT until a note arrives (env-gated); a ~1.5 ms declick ramp kills the trigger click. Drop three for a kit, or sequence one from an Arp/Sequencer (the MNodes curated-drum-voice gap -- 136 processing blocks but no drum voice). Stereo out, 0 RT alloc.

</details>

:::caution[Verify in context]
Ranges and declared latency are product facts. Audible outcome, stability, level, and CPU cost still depend on signal, sample rate, block size, routing, modulation, and surrounding blocks.
:::

