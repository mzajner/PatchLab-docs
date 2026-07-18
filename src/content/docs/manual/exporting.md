---
title: Export a plugin
description: Prepare a project, run PatchLab's export checklist, understand signing and installation, and distinguish a development artifact from a distributable release.
sidebar:
  order: 10
---

Export turns the current project into plugin artifacts. It is a build and validation
pipeline, not a substitute for project design, release signing, or real-host testing.

:::caution[Pre-release workflow]
The current exporter is a development workflow. Do not distribute its artifacts as a
public release until identity, licensing, signing, notarization, and host support have
been reviewed for that exact build.
:::

## Before export

1. Work from a project rather than an untitled loose patch.
2. Confirm **Project Info…** has the intended identity and I/O role.
3. Save the project and reopen it.
4. Test the Patch graph, active face, automation surface, and factory presets.
5. Remove absolute or missing asset references.
6. Measure output safety, latency-sensitive routing, and representative CPU load.

## Run the exporter

Choose **Compile → Export Plugin (VST3 + AU + CLAP)…**. In the Export Plugin window:

1. enter plugin and manufacturer names;
2. choose VST3, AU, CLAP, and—only in an authorized development environment—AAX;
3. choose **Ad-hoc**, **Developer ID**, or **None** signing;
4. decide whether successful artifacts should be installed locally; and
5. choose **Export**.

Selecting no format disables Export. **Run in background** closes the foreground wait;
it does not cancel the underlying build.

## Read the checklist

The pipeline reports these stages:

1. Generate Cmajor and C++
2. Compile plugin
3. Validate audio by render comparison
4. Validate Audio Unit
5. Validate CLAP
6. Verify host parameters
7. Verify the plugin editor

A failed stage marks later pending stages as skipped. Preserve the first failing stage,
its reason, the product revision, and the export log before retrying.

## Installation destinations on macOS

When local installation is enabled, selected bundles are copied under:

- `~/Library/Audio/Plug-Ins/VST3/`
- `~/Library/Audio/Plug-Ins/Components/`
- `~/Library/Audio/Plug-Ins/CLAP/`

AAX uses `/Library/Application Support/Avid/Audio/Plug-Ins/` only when the authorized
environment is available and writable. AAX distribution also requires the relevant
publisher and PACE signing path; an ad-hoc development bundle is not a public AAX release.

## Signing is not notarization

- **None** leaves the artifact unsigned.
- **Ad-hoc** provides a local development signature, not a trusted publisher identity.
- **Developer ID** requires a valid signing identity and still belongs in a complete
  notarization and distribution workflow.

Record signing identity, entitlements, notarization result, checksum, and tested hosts
in the release manifest.

## Validate in a host

A successful export pipeline does not prove every DAW integration. In each supported
host, test discovery, instantiation, audio/MIDI, automation, state recall, preset recall,
editor reopening, sample-rate/buffer changes, offline render, and clean removal.

See [Support status](/manual/support-status/) for claims the current evidence does and
does not support.
