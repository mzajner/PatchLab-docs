---
title: Using Spectral blocks
description: Build frequency-domain processing inside an STFT boundary while accounting for framing, phase, latency, and reconstruction.
sidebar:
  order: 10
---

Spectral blocks operate on framed frequency-domain data. They belong inside an **STFT**
structure unless their reference says otherwise.

STFT size determines a time/frequency tradeoff and contributes latency. Overlap and
window determine reconstruction conditions and processing cadence. Changing them is a
system change, not a display preference.

Use **MagPhase** to access magnitude/phase relationships; **BinGate**, **BinShift**, and
**BinFreeze** for bin-domain decisions; **SpectralBlur** to spread spectral behavior;
and **CrossSynth** when two spectral sources interact.

## Verify reconstruction first

Before adding a spectral operation, pass an identity interior through STFT and compare
level, latency, and residual against the source at the intended settings. Then add one
operation. Test steady tones, impulses, noise, and program material because phase and
frame artifacts do not appear equally in every stimulus.

See the generated [Spectral reference](/reference/blocks/spectral/).
