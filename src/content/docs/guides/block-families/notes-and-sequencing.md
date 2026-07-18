---
title: Using Notes & Sequencing blocks
description: Build event paths with explicit clock, note lifetime, pitch, probability, and panic behavior.
sidebar:
  order: 7
---

Event graphs decide *when* something happens and which note/control data accompanies
it. They do not carry the resulting audio.

Use **Transport**, **PPQ**, **TempoSync**, **Timer**, and **ClockDiv** for time bases.
Use **Sequencer**, **Arp**, **Euclidean**, **Turing**, **Pendulum**, **Burst**, and
**Probability** to generate or transform event patterns. Use **Transpose**, **MidiScale**,
**ScaleQuant**, **Scala**, **NoteRemap**, and related converters for pitch mapping.
Use **MidiFilt**, **MIDIMerge**, **CCTransform**, **Logic**, **Compare**, and **Change**
to route decisions.

The registered event toolkit also includes **NoteToGate**, **ChordGen**,
**EventDelay**, **Button**, **Dice**, **MicroQuant**, **Humanize**, **CVToMidiNote**,
**CVToMidiCC**, and **Keys**. Treat similarly named blocks as distinct:
consult their generated port and parameter tables before substituting one in a patch.

State the clock source and transport state before debugging rhythm. For note paths,
trace note-on and note-off together; a design that creates a note but loses its release
can leave a voice held. Use **MidiPanic** or the application Panic path when necessary.

Randomized systems require a statistical observation window. One pleasing bar is not a
measurement of probability or long-term event density.

See the generated [Notes & Sequencing reference](/reference/blocks/notes-and-sequencing/).
