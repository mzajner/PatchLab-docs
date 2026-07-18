---
title: Using Generators blocks
description: Choose an audio source by control model, spectrum, note behavior, and aliasing requirements.
sidebar:
  order: 2
---

Generators create audio; silence at their input is therefore normal. PatchLab generators
default conservatively, and some require level, note, trigger, sample, table, or model
data before they produce sound.

## Choose by source model

- **Osc**, **NoteOsc**, and **Supersaw** begin with periodic waveforms.
- **Noise** supplies broadband stochastic material for synthesis and measurement.
- **Sampler** and **Wavetable** depend on loaded assets.
- **FMOp**, **ModalBank**, and **Waveguide** expose more structured synthesis models.
- **DrumSynth** provides event-driven percussive synthesis.
- **Impulse** is useful as a stimulus and transient source.
- **Phasor** is principally a ramp/phase source; decide whether the destination expects
  audio or control behavior.

## Verify a generator

Route one source to Meter and AUDIO OUT at a low monitor level. State note/trigger
conditions, frequency, waveform/model, and output level. For pitched sources, compare
the measured fundamental with the requested note. For bright or nonlinear sources,
inspect aliasing at the intended sample rate rather than assuming a waveform label
defines spectral quality.

Do not add a limiter solely to hide an unexplained level problem. Establish the source's
gain first, then add downstream safety intentionally.

See the generated [Generators reference](/reference/blocks/generators/).
