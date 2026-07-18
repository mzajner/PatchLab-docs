---
title: Install and start PatchLab
description: The honest installation status, first-run path, and checks that establish a safe working session.
sidebar:
  order: 1
---

PatchLab is currently a development product, not an approved public download. There is
no signed installer or stable update channel to recommend yet. This page deliberately
does not invent a download link, security exception, or release guarantee.

## Current development artifact

The current macOS build produces a standalone application and plugin targets. A build
used for documentation or evaluation must be identified by its source revision and
registry hash; a filename such as “latest” is not sufficient provenance.

When a public release exists, this page must state:

- the official download origin and checksum;
- supported operating-system and CPU versions;
- signing and notarization identity;
- installation destinations for each format;
- update and rollback behavior; and
- how projects are preserved across an update.

Until those facts are approved, treat any local build as a development artifact.

## First-run safety check

1. Turn down monitors or headphones.
2. Open PatchLab in standalone mode.
3. Choose **File → Audio/MIDI Settings…** and select the intended input and output.
4. Confirm the sample rate and buffer size are suitable for the device.
5. Start with **File → New Patch** before loading an unfamiliar graph.
6. Learn **Edit → Panic! Silence Output** (`Cmd+Shift+.`) before connecting generators or feedback.

The standalone requests two input and two output channels and enables available MIDI
inputs. A plugin instance instead receives audio, MIDI, sample rate, and buffer size
from its host.

## Choose a starting path

- **Load Example** opens a factory patch without making it an overwrite target.
- **New Patch** creates an untitled loose patch.
- **New Project (from current patch)…** makes the current graph part of a durable project.
- **Open Project…** opens an existing project folder.

After loading a factory example, `Cmd+S` opens Save As. This guard prevents a modified
example from overwriting shipped content.

## Verify the session

Open [Your first patch](/start-here/first-patch/) and build the Gain path. A usable
session has all of these properties:

- the intended audio device or host path is active;
- AUDIO IN reaches AUDIO OUT through a known block;
- meters respond without clipping;
- Panic silences output and **Resume Output** restores it; and
- the patch can be saved and reopened in the intended form.

If any condition fails, use [Troubleshooting](/manual/troubleshooting/) before adding
more blocks.
