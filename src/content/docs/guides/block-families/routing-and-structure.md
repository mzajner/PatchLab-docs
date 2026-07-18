---
title: Using Routing & Structure blocks
description: Split, combine, encode, nest, oversample, polyphonize, and feed back signals with explicit laws and boundaries.
sidebar:
  order: 8
---

Routing blocks determine relationships. A visually tidy graph can still use the wrong
mix law, channel convention, or structural boundary.

Use **Add** for weighted summing, **Multiply** for product/amplitude relationships,
**Gain** for a single-path level change, **XFade** for a controlled two-path
transition, and **Matrix/MixMatrix** for larger
routing systems. **Pan**, **Width**, **StereoMerge**, **MonoSplit**, **MS Enc**, and
**MS Dec** manage channel relationships. **Send/Receive**, **Branch**, and **Selector**
manage non-local or conditional flow.

**Container** groups one subsystem. **Oversample** changes the sample rate of its nested
graph. **Poly** creates multiple note-driven voices. **Feedback** creates an explicitly
scheduled recursive zone. **Cmaj** hosts supported custom DSP.

## Boundary review

For every structural block, document inputs, outputs, public controls, latency, CPU,
state/tail behavior, and export support. Measure recombination gain and phase. A routing
choice is not complete merely because both branches are audible.

See [Containers and macros](/concepts/containers-macros/) and the generated
[Routing & Structure reference](/reference/blocks/routing-and-structure/).
