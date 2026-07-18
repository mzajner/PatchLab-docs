---
title: Build a first playable instrument
description: Connect MIDI to a conservative note oscillator, verify pitch and note lifetime, then add tone shaping without hiding the voice model.
sidebar:
  order: 3
---

This patch turns MIDI notes into audio with one NoteOsc block. It isolates note routing,
voice behavior, and output level before you add a larger Poly structure.

:::caution[Protect your hearing]
Lower monitoring first and keep `Cmd+Shift+.` available.
:::

## Build the voice

1. Choose **File → New Patch**.
2. Add **NoteOsc**.
3. Connect MIDI IN to NoteOsc's MIDI input.
4. Connect NoteOsc's audio output to AUDIO OUT.
5. Open Keys with `K` and play one note.

NoteOsc's current default level is 0.5, with a short attack and 220 ms release. It is
silent until it receives a note.

## Verify

- One held note produces a stable pitched output.
- Releasing the note starts the release rather than stopping at an arbitrary time.
- Panic stops all held notes.
- Consecutive notes do not increase level without bound.

Use Tuner or Debug to compare the measured pitch with the played note. Use Meter to
check headroom while playing overlapping notes.

## Extend carefully

Add SVF after NoteOsc and start with moderate resonance. Once the monolithic voice is
understood, rebuild the idea inside **Poly** when you need explicit per-voice structure,
filters, envelopes, and macros.

For a complete factory example, inspect [Supersaw Pad](/examples/supersaw-pad.plpatch),
then save it as your own project before editing.
