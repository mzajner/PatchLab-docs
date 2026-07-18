---
title: "MidiScale"
description: "MIDI SCALE: snaps incoming MIDI note-ons to a musical scale - the event-domain counterpart of the CV-domain ScaleQuant (which quantizes a control wire, not notes)."
sidebar:
  order: 159
---

<small>Generated from PatchLab binary source candidate `99899b76e006` · registry type 158</small>

## At a glance

| Property | Value |
| --- | --- |
| Category | [Notes & Sequencing](../) |
| Signal role | Event |
| Audio inputs | 0 |
| Audio outputs | 0 |
| MIDI input | Yes |
| MIDI output | Yes |
| CPU class | trivial |
| Reported latency | 0 |

## Parameters

| Parameter | ID | Range | Default | Unit / choices | Mod port |
| --- | --- | --- | --- | --- | ---: |
| Root | `root` | 0 to 11 | 0 | `C`, `C#`, `D`, `D#`, `E`, `F`, `F#`, `G`, `G#`, `A`, `A#`, `B` | 0 |
| Scale | `scale` | 0 to 9 | 1 | `Chromatic`, `Major`, `Minor`, `Dorian`, `Mixolyd`, `MajPent`, `MinPent`, `Blues`, `HarmMin`, `WholeTone` | 1 |
| Mode | `mode` | 0 to 2 | 0 | `Nearest`, `Up`, `Down` | 2 |

## Safety and limits

two held input notes can snap to the SAME output note (e.g. C# and D -> D in C major): the shared note re-triggers and the earlier note-off releases it - voice sharing by design, never a hang. Note-offs always follow their note-on's remap (held table), even across Root/Scale/Mode changes

<details>
<summary>Registry implementation notes</summary>

MIDI SCALE: snaps incoming MIDI note-ons to a musical scale - the event-domain counterpart of the CV-domain ScaleQuant (which quantizes a control wire, not notes). Root picks the tonic, Scale the set (Chromatic / Major / Minor / Dorian / Mixolyd / MajPent / MinPent / Blues / HarmMin / WholeTone), Mode how an out-of-scale note resolves: Nearest (ties prefer down) / Up / Down. Note-offs follow the SAME remap as their note-on via a per-channel held-note table, so changing Root/Scale/Mode mid-note can NEVER hang a note. Non-note messages pass untouched. Wrong-note-proof keyboards, in-key Arp/Sequencer streams, drum-pad melodies. Face = the scale as 12 pitch-class pads (root dotted) + the last snap in note names. MIDI in -> MIDI out, allocation-free (out pre-sized; fixed table). (MNodes MIDI Scale)

</details>

:::caution[Verify in context]
Ranges and declared latency are product facts. Audible outcome, stability, level, and CPU cost still depend on signal, sample rate, block size, routing, modulation, and surrounding blocks.
:::

