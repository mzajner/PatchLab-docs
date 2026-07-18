---
title: Real-time audio architecture
description: Design bounded audio callbacks, safe parameter/state handoffs, deterministic graph changes, latency, and resource ownership.
sidebar:
  order: 13
---

## Objective

Explain why correct offline DSP can still fail in a plugin and identify operations that
do not belong on the real-time audio thread.

## Deadline

With block size `B` and sample rate `fs`, the callback interval is approximately:

```text
deadline seconds = B / fs
```

At 64 samples and 48 kHz, that is about 1.33 ms. The complete host graph shares the CPU;
PatchLab cannot consume the whole interval merely because its isolated average is lower.

## Real-time constraints

Avoid unbounded or blocking work in the callback:

- file and network I/O;
- memory allocation/deallocation with unpredictable locks;
- waiting on mutexes or other threads;
- logging and UI calls;
- graph compilation or asset decoding; and
- work whose worst case is not bounded by the block.

Prepare on a non-real-time thread, then hand off immutable/preallocated state using an
appropriate lock-free or bounded synchronization design. The exact mechanism depends on
ownership and lifetime; “atomic” alone does not make a compound object safe.

## Parameters and state

Host automation and modulation can change values while audio runs. Use thread-safe
value transfer and smoothing where discontinuity would create artifacts. Preserve
deterministic reset, sample-rate change, block-size change, and state-recall behavior.

Graph changes may require fade/suspend/swap/fade or another bounded transition so audio
does not read half-replaced state. Report algorithmic latency to the host and include
latency differences when recombining parallel paths.

## PatchLab experiment

Build a representative project, enable per-block CPU display, and test several sample
rates/buffer sizes. Change parameters, load state, and edit topology while audio runs.
Observe maximum/dropout behavior rather than relying only on average CPU. Then export and
repeat in a host, because editor and wrapper lifecycle add another concurrency surface.

## Common misconception

“The callback usually finishes in time, so it is real-time safe.” Dropouts are caused by
the worst deadline misses; an occasional allocation, lock, or cold path can matter even
when the average is low.

## Primary reference

Ross Bencina, [*Real-time audio programming 101: time waits for nothing*](https://www.rossbencina.com/code/real-time-audio-programming-101-time-waits-for-nothing).
