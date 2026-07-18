---
title: "Notes & Sequencing"
description: "34 PatchLab blocks in Notes & Sequencing."
sidebar:
  order: 17
---

**34 blocks**. Select a block for its generated ports, parameters, ranges, defaults, CPU class, latency, and registry notes.

For selection advice, signal-flow patterns, and cautions, read [Using Notes & Sequencing blocks](/guides/block-families/notes-and-sequencing/).

| Block | Signal role | Audio I/O | MIDI |
| --- | --- | ---: | --- |
| [MidiFilt](./midifilt/) | Event | 0 in / 0 out | in/out |
| [Compare](./compare/) | Utility | 2 in / 1 out | — |
| [Logic](./logic/) | Utility | 2 in / 1 out | — |
| [TempoSync](./temposync/) | Modulation | 0 in / 1 out | — |
| [Timer](./timer/) | Modulation | 0 in / 1 out | — |
| [NoteToGate](./notetogate/) | Event | 0 in / 1 out | in |
| [Transpose](./transpose/) | Event | 0 in / 0 out | in/out |
| [Arp](./arp/) | Event | 0 in / 0 out | in/out |
| [ChordGen](./chordgen/) | Event | 0 in / 0 out | in/out |
| [EventDelay](./eventdelay/) | Event | 0 in / 0 out | in/out |
| [Change](./change/) | Modulation | 1 in / 1 out | — |
| [ScaleQuant](./scalequant/) | Modulation | 1 in / 1 out | — |
| [Button](./button/) | Modulation | 1 in / 1 out | — |
| [Sequencer](./sequencer/) | Modulation | 1 in / 2 out | — |
| [Dice](./dice/) | Modulation | 1 in / 1 out | — |
| [ClockDiv](./clockdiv/) | Modulation | 1 in / 1 out | — |
| [Burst](./burst/) | Modulation | 1 in / 1 out | — |
| [Euclidean](./euclidean/) | Modulation | 1 in / 1 out | — |
| [Turing](./turing/) | Modulation | 1 in / 1 out | — |
| [Transport](./transport/) | Modulation | 0 in / 1 out | — |
| [PPQ](./ppq/) | Modulation | 0 in / 1 out | — |
| [MicroQuant](./microquant/) | Modulation | 1 in / 1 out | — |
| [Humanize](./humanize/) | Event | 0 in / 0 out | in/out |
| [Probability](./probability/) | Event | 0 in / 0 out | in/out |
| [CCTransform](./cctransform/) | Event | 0 in / 0 out | in/out |
| [CVToMidiNote](./cvtomidinote/) | Event | 2 in / 0 out | out |
| [CVToMidiCC](./cvtomidicc/) | Event | 1 in / 0 out | out |
| [Scala](./scala/) | Modulation | 1 in / 1 out | — |
| [MIDIMerge](./midimerge/) | Event | 0 in / 0 out | in/out |
| [MidiPanic](./midipanic/) | Event | 1 in / 0 out | in/out |
| [NoteRemap](./noteremap/) | Event | 0 in / 0 out | in/out |
| [MidiScale](./midiscale/) | Event | 0 in / 0 out | in/out |
| [Pendulum](./pendulum/) | Modulation | 1 in / 2 out | — |
| [Keys](./keys/) | Event | 0 in / 0 out | out |

