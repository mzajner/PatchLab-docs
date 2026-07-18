---
title: Prepare an export release candidate
description: Convert a successful local export into an evidence-backed artifact that can enter signing and host qualification.
sidebar:
  order: 9
---

A green Export window creates a candidate. Release readiness requires a traceable
artifact and supported-host evidence.

## Candidate checklist

- Project reopens with the intended graph and active face.
- Exposed DAW parameters are stable, named, ranged, and ordered.
- Presets recall correctly and factory content is included intentionally.
- Referenced assets are inside the project and licensed for distribution.
- Representative DSP measurements and CPU/latency conditions are recorded.
- Export stages finish without a skipped required validation.
- Artifact format, architecture, signature, and checksum are recorded.
- The installed candidate is the same bytes that enter host testing.

## Host qualification

Test the matrix in [Support status](/manual/support-status/). A host scan-path presence
check is insufficient. Save a session, restart the host, reopen the editor, automate the
public surface, recall state, and render offline.

## Release manifest

Record product and docs commits, registry hash, project fixture hash, exporter version,
formats, signing identity, notarization result, checksums, host evidence, known issues,
and rollback destination.

Only then should an artifact move from “development export” to “release candidate.”
