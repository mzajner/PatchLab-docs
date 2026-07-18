---
title: Envelopes, detectors, and dynamics
description: Separate control envelopes, level detection, gain computation, smoothing, lookahead, and makeup gain in compressors, gates, and limiters.
sidebar:
  order: 9
---

## Objective

Trace a dynamics processor from input detector to applied gain and measure static and
time-dependent behavior separately.

**Prerequisite:** [Amplitude and decibels](/learn/amplitude-and-decibels/).

## Two meanings of envelope

A synthesis envelope such as ADSR is an authored control contour triggered by an event.
A level detector estimates the amplitude of an incoming signal. Both produce control
signals, but their causes and time constants differ.

Peak, rectified/averaged, and RMS-style detectors respond differently. Attack and
release smooth the detector or gain control over time. Their displayed times require a
defined coefficient convention before an exact settling-time claim can be made.

## Gain computer

Threshold identifies the level region where behavior changes. Ratio describes the
input/output slope above or around that region. Knee changes how abruptly the slopes
join. The gain computer produces a desired gain; smoothing and the gain element apply it
over time.

Makeup gain is independent output gain. It can make a compressed signal louder even
when compression reduced its peaks, so bypass comparisons must be level-matched.

## Gate, compressor, limiter

A gate attenuates signals according to low-level detection and often uses hysteresis,
hold, attack, and release to avoid chatter. A compressor reduces a level-dependent
range according to its curve. A limiter uses a high ratio/control strategy near a
ceiling; lookahead delays audio so the control path can react earlier, adding latency.

## PatchLab experiment

1. Feed Comp a stepped sine: several seconds below threshold, then above.
2. Measure steady input/output levels to infer the static curve.
3. Use a transient or step edge to observe attack and release.
4. Repeat with makeup gain at 0 dB, then level-match intentionally.
5. Compare peak and RMS measurements; state the detector being tested.

## Common misconception

“A 4:1 ratio means the output is divided by four.” It describes the slope of level
change in the compression region: a 4 dB input increase above threshold ideally produces
about a 1 dB output increase under the stated static convention.

## Primary reference

Dimitrios Giannoulis, Michael Massberg, and Joshua D. Reiss,
[*Digital Dynamic Range Compressor Design—A Tutorial and Analysis*](https://aes2.org/publications/elibrary-page/?id=16354),
*Journal of the Audio Engineering Society*, 60(6), 2012. PatchLab behavior must still be
verified by measurement rather than inferred from a general topology.
