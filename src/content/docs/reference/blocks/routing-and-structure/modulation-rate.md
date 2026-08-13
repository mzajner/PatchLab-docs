---
title: "Modulation Rate"
description: "MODULATION RATE ZONE: the per-region CONTROL-ACCURACY setting (the fourth zone kind after Oversample/Poly/STFT)."
sidebar:
  order: 170
---

<small>Generated from PatchLab binary source candidate `96ae72bb5451` · registry type 169</small>

## At a glance

| Property | Value |
| --- | --- |
| Category | [Routing & Structure](../) |
| Signal role | Structure |
| Audio inputs | 1 |
| Audio outputs | 1 |
| MIDI input | Yes |
| MIDI output | No |
| CPU class | medium |
| Reported latency | 0 |
| Macro slots | 8 |

## Parameters

| Parameter | ID | Range | Default | Unit / choices | Mod port |
| --- | --- | --- | --- | --- | ---: |
| Mod Rate | `acc` | 0 to 6 | 0 | `Block`, `64`, `32`, `16`, `8`, `4`, `1` | 9 |

## Declared ports

- Audio inputs: `A`

## Safety and limits

changes WHEN the region is resolved, not what it computes. Mod Rate Block is the DEFAULT and is bit-identical to a plain Container (the same single inner processBlock call) - an existing patch moves zero. At N the nested graph is stepped once per N samples, so CPU scales roughly with block/N: 64 smp is near-free, 1 smp costs what a Feedback zone costs (no block vectorisation inside). It fixes TIMING ONLY - at 1 smp a BIPOLAR-tagged mod target becomes genuinely sample-accurate and signed, but a plain non-bipolar param still reads the magnitude of that sample, so this does not turn a rectified mod into a signed one. Only the region INSIDE the zone gets the finer rate; a mod cable that crosses the zone boundary is still resolved at the outer rate (put the modulator inside too). Latency 0. FUSION: a zone at any setting other than Block has no fused equivalent (a Cmajor program renders one flat block rate), so it DEMOTES - its own sub-graph and every enclosing fused container fall back to the native path for as long as the setting is non-Block; sibling containers keep their own fused programs, and putting it back to Block re-fuses. Flipping it live is safe (checked per block, no click). EXPORT: the legacy Cmajor export REFUSES a non-Block zone by name rather than silently baking it as a plain Container; the native PatchIR export refuses every container. Set it back to Block to export (the audio is then identical)

<details>
<summary>Registry implementation notes</summary>

MODULATION RATE ZONE: the per-region CONTROL-ACCURACY setting (the fourth zone kind after Oversample/Poly/STFT). PatchLab's audio path is sample-accurate everywhere, but a mod cable into a PARAMETER is block-rate: the whole block of the modulator collapses to ONE value that is held for the block, so slow LFOs are fine while fast LFOs, sharp envelopes and audio-rate modulators step and mis-track. Put that region inside this zone and set Mod Rate to how often it should be resolved: Block (the default - exactly today's behaviour, bit-identical to a plain Container) or every 64/32/16/8/4/1 samples. The zone changes TIMING ONLY: at 1 smp a bipolar-tagged mod target becomes genuinely sample-accurate and signed, while a plain (non-bipolar) param still reads the magnitude of that sample - finer, not re-polarised. CPU scales with the granularity (1 smp = the nested graph is stepped once per sample, like the Feedback zone), so wrap only the region that needs it. Like the other zones, the inner graph + macros + serialization are untouched; the setting is one extra param.

</details>

:::caution[Verify in context]
Ranges and declared latency are product facts. Audible outcome, stability, level, and CPU cost still depend on signal, sample rate, block size, routing, modulation, and surrounding blocks.
:::

