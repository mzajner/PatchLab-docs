---
title: Audio and MIDI setup
description: Configure standalone devices, understand host-controlled plugin I/O, and diagnose silence or missing notes.
sidebar:
  order: 2
---

Audio and MIDI enter PatchLab through different boundaries. Confirm the boundary before
debugging the graph behind it.

## Standalone application

Choose **File → Audio/MIDI Settings…**. The settings window is available only when the
standalone owns an audio-device manager.

Select:

- an audio device and output;
- an input when the patch processes live audio;
- sample rate;
- buffer size; and
- enabled MIDI inputs.

PatchLab initially requests two audio inputs and two outputs and enables every MIDI
input reported by the system. Review this selection when several controllers or virtual
MIDI ports are installed.

### Buffer size

A smaller buffer usually reduces monitoring latency but gives the audio callback less
time to finish. A larger buffer provides more processing margin but increases the delay
between input and output. Choose by measurement on the actual device; there is no
universally correct value.

## Plugin instance

In VST3, AU, CLAP, or AAX form, the DAW owns device selection. Configure the track,
channel layout, sample rate, buffer size, MIDI routing, and monitoring in the host.
PatchLab's **Audio/MIDI Settings…** item is therefore unavailable.

The current development target is a stereo input/stereo output design. Mono-track and
surround behavior are not yet public compatibility claims.

## Audio signal path

For an effect:

1. Connect **AUDIO IN** to the first processing block.
2. Connect the final processing output to **AUDIO OUT**.
3. Remove a direct bypass cable if it would create an unintended parallel path.
4. Observe output with Meter or the Debug page.

For an instrument, a generator or voice structure must create audio; AUDIO IN is not
the source.

## MIDI signal path

**MIDI IN** publishes incoming note and controller events. Connect it to a note-aware
block or Poly voice structure. A MIDI cable does not carry audio, and an oscillator does
not necessarily respond to notes unless its documented MIDI/event path is connected.

Use **Keys** or press `K` to audition notes inside PatchLab. In a DAW, confirm the track
is armed or monitored and that MIDI reaches the plugin instance.

## Diagnose systematically

If there is silence, inspect in this order:

1. device or host routing;
2. AUDIO IN / MIDI IN activity;
3. cable continuity and port compatibility;
4. generator level, envelope, gate, and note state;
5. block bypass and gain;
6. AUDIO OUT level; and
7. the Panic latch.

This order prevents a host-routing problem from being mistaken for a DSP problem.
