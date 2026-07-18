---
title: Support status
description: The formats, platforms, channel layouts, and hosts supported by current evidence—and those that remain unclaimed.
sidebar:
  order: 12
---

PatchLab has no approved public compatibility matrix yet. The table below describes the
development evidence, not a commercial support promise.

## Current evidence

| Surface | Evidence | Public claim status |
| --- | --- | --- |
| macOS arm64 standalone | Current development builds run locally | Development only |
| VST3 and AU | Build and automated plugin validation exist | Real-DAW matrix still required |
| CLAP | Build and lifecycle probe exist | Real-DAW matrix still required |
| AAX | Authorized development build path exists | Pro Tools and production signing remain gated |
| Stereo input/output | Current main bus configuration | Development baseline |
| Mono and surround | No completed host matrix | Not claimed |
| Windows | No current verification environment | Not claimed |

## Automated and real-host evidence differ

Plugin validators can exercise lifecycle, state, automation, bus changes, parameter
fuzzing, and repeated open/close behavior. They cannot reproduce every DAW's scanner,
wrapper, automation lane, sandbox, windowing, or offline-render behavior.

A host is supported only after the exact format and release artifact have been tested in
that host under the documented OS, channel layout, sample rates, and buffer sizes.

## Required host test

For every claimed host/format pair:

1. rescan and discover the plugin;
2. instantiate it on a supported track;
3. pass audio and/or MIDI;
4. automate exposed Canvas controls;
5. save, close, reopen, and recall state;
6. load factory and user presets;
7. reopen and resize the editor;
8. change supported sample rate and buffer size;
9. perform a real-time and offline render; and
10. remove the instance without a crash or orphan process.

Publish a green cell only with an artifact identifier and tester evidence. “Installed in
the scan folder” is not proof that a DAW loads it.
