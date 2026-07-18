---
title: Troubleshooting
description: Diagnose audio, MIDI, graph, project, Agent, Canvas, Debug, and export failures from the boundary inward.
sidebar:
  order: 11
---

Preserve the first error and reduce the system. Adding blocks to a failing patch usually
adds ambiguity.

## No audio

1. Check whether Panic is latched; choose **Edit → Resume Output** if appropriate.
2. Confirm standalone device or DAW routing.
3. Load or build a known Gain-only path.
4. Follow cables from AUDIO IN or a generator to AUDIO OUT.
5. Check generator level, bypass, gate/envelope state, and output gain.
6. Inspect per-block meters or use **Analyze this block**.

If the Gain-only path works, reconnect the original graph one subsystem at a time.

## No notes or stuck notes

- Confirm the MIDI source in the standalone settings or DAW track.
- Open Keys (`K`) to separate external-controller routing from the patch.
- Follow MIDI IN into the note-processing or voice structure.
- Verify voice level and envelope routing.
- Use Panic for stuck notes, then Resume Output deliberately.

## Unexpected level or tone

- Look for a direct dry cable creating a parallel path.
- Inspect Add, XFade, feedback, makeup gain, and nonlinear input level.
- Disable one branch at a time.
- Level-match before comparing tone.
- Measure before and after the smallest suspected subsystem.

## Patch or project does not open

Do not edit the original file first. Make a copy, preserve the reported reason, and
check whether the file is the expected `.plpatch`, project folder, or preset type.

A project must contain coherent `project.json` and `dsp/graph.json` files. A preset
cannot be opened as a graph. Use rotating autosaves only after preserving the current
state for diagnosis.

## Canvas control does nothing

Return to Edit rather than Preview, select the control, and inspect its binding. Confirm
the target still exists and that its range/taper is meaningful. Then test minimum,
midpoint, maximum, reset, preset recall, and host automation.

## Agent fails or appears idle

- Confirm the selected lane: External Agent, API Build, or Dry run.
- For External Agent, verify the CLI exists and the project is open when project context is required.
- For API Build, open settings and check endpoint origin, provider, model, and key status.
- Read the failed operation card and Console rather than submitting the same request repeatedly.
- After Stop, inspect whether earlier operations were already applied.

Never paste a provider key into the prompt or project files.

## Export fails

Record the first red checklist stage. Check identity, project save state, asset paths,
selected formats, SDK availability, signing identity, and the named validation output.

If **Run in background** was selected, remember that the build continues. Avoid starting
another export against the same output directory until the first process ends.

## Report a reproducible defect

Include PatchLab revision/artifact, platform, host, sample rate, buffer size, channel
layout, project or minimal patch, exact steps, expected result, observed result, and the
first relevant log line. Remove credentials and private audio before sharing.
