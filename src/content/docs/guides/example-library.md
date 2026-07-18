---
title: Example patch library
description: Download product-backed PatchLab examples with recorded provenance and use them as inspected starting points rather than unexplained presets.
sidebar:
  order: 2
---

These examples are copied from PatchLab's factory library by a validator that checks
JSON structure, registry types, node IDs, connection endpoints, and file hashes. They
remain examples—not proof that every setting is suitable for every source.

| Example | What to inspect | Download |
| --- | --- | --- |
| Shimmer Reverb | Crossover, pitch shift, feedback-delay network, output safety | [`.plpatch`](/examples/shimmer-reverb.plpatch) |
| Supersaw Pad | A complete nested instrument with public macros | [`.plpatch`](/examples/supersaw-pad.plpatch) |
| Vocal Chain | Gate, detection, dynamics, EQ, and output ordering | [`.plpatch`](/examples/vocal-chain.plpatch) |
| Lofi Hip-Hop | Bit/sample reduction, pitch drift, saturation, output limiting | [`.plpatch`](/examples/lofi-hip-hop.plpatch) |
| Parallel Compressor | Dynamics, saturation, and routing structure | [`.plpatch`](/examples/parallel-compressor.plpatch) |
| Space Echo | A containerized delay design and macro surface | [`.plpatch`](/examples/space-echo.plpatch) |
| Mid-Side Master | Encode, process, width, and decode ordering | [`.plpatch`](/examples/mid-side-master.plpatch) |
| Spectral Freeze | STFT boundary followed by harmonic and time processing | [`.plpatch`](/examples/spectral-freeze.plpatch) |

## How to study an example

1. Save unrelated work.
2. Open the example as a loose patch.
3. Turn monitoring down and identify its source, output, and safety stages.
4. Predict one block's effect, bypass or change only that block, then measure.
5. Use **New Project (from current patch)…** before turning the example into your own work.

Factory examples do not become quick-save overwrite targets. `Cmd+S` after changing one
opens Save As, protecting the source example.

The machine-readable provenance is in [the example manifest](/examples/manifest.json).
