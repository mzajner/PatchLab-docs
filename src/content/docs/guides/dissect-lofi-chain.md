---
title: Dissect a lo-fi processing chain
description: Separate sample/bit reduction, pitch drift, saturation, and output control so each audible change has a cause.
sidebar:
  order: 7
---

Open the validated [Lofi Hip-Hop example](/examples/lofi-hip-hop.plpatch). Its top-level
order is:

```text
AUDIO IN → Crush → WowFlutter → Drive → Limiter → AUDIO OUT
```

## Study one stage at a time

1. Begin with a level-controlled source and record input peak/RMS.
2. Set Crush to its neutral end—1× downsampling and 16 bits—then move one parameter.
3. Bypass Crush and explore WowFlutter rate, depth, flutter, and mix.
4. Bypass WowFlutter, raise Drive gradually, and level-match its output.
5. Inspect how often the final limiter changes gain rather than assuming it is inactive.

Crush reduces temporal and amplitude resolution. WowFlutter uses a modulated delay to
move pitch. Drive is nonlinear and creates harmonics. Those mechanisms can all be
described casually as “lo-fi,” but they produce different measurable artifacts.

## Reorder as an experiment

Save a copy, then swap Drive and WowFlutter. A nonlinear stage before pitch modulation
creates harmonics that the time-varying stage moves; the reverse order modulates first
and distorts the result. Compare at matched output level.

The lesson is not that one order is universally correct. It is that processor order is
part of the design.
