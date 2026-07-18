---
title: Using Filters & EQ blocks
description: Choose a filter by topology, response, modulation behavior, phase, and task—not cutoff alone.
sidebar:
  order: 3
---

Two filters with the same cutoff can have different magnitude, phase, resonance,
modulation, and numerical behavior.

## A practical selection sequence

1. State the task: remove a band, shape tone, split bands, create resonance, or form a
   time-domain effect.
2. Choose the simplest topology that exposes the needed response.
3. Set conservative input level and resonance.
4. Measure magnitude and phase at the intended sample rate.
5. Sweep or modulate only after the static response is understood.

**OnePole** is a minimal smoothing/filtering building block. **SVF**, **Biquad**, and
**SVF EQ** provide general selectable responses. **Ladder**, **Formant**, and
**HarmonicBank** serve more characteristic or structured tasks. **Crossover** is for
complementary band splitting. **Cascade** and **Filterbank** organize multiple filter
stages or bands. **FIR** is appropriate when its finite impulse response and latency
tradeoff are required. **Allpass**, **Comb**, and **PhaseDelay** primarily change phase
or time relationships even when magnitude looks flat.

Never call a crossover sum “flat” without recombining its bands under the documented
mode and measuring level and phase. Never infer audible transparency from a magnitude
plot alone.

See [Frequency, filters, and phase](/learn/frequency-filters-phase/) and the generated
[Filters & EQ reference](/reference/blocks/filters-and-eq/).
