---
title: Stereo, mid/side, and mono compatibility
description: Separate channel level, panning, width, correlation, polarity, delay, and mid/side processing while preserving a meaningful mono result.
sidebar:
  order: 11
---

## Objective

Predict which parts of a stereo design survive summing to mono and use more than one
measurement to explain the result.

**Prerequisite:** [Frequency, filters, and phase](/learn/frequency-filters-phase/).

## Stereo is two related signals

Width can arise from level differences, time/phase differences, spectral differences,
decorrelation, or independent content. Each behaves differently in mono.

Correlation summarizes one relationship over a window. Values near +1 indicate strong
similarity, near 0 weak linear similarity, and near -1 strong inverse relationship. It
does not measure artistic quality and can change over time and frequency.

## Mid/side representation

Mid/side converts left/right into sum-like and difference-like components. A common
energy-normalized convention is:

```text
M = (L + R) / √2
S = (L - R) / √2
L = (M + S) / √2
R = (M - S) / √2
```

Other systems use different scale factors. Verify PatchLab's encode/decode level as a
pair rather than assuming a convention from the names.

Removing Side yields a mono-compatible Mid-based result under the chosen scaling.
Boosting Side can increase apparent width but also increases content that cancels in a
mono sum.

## PatchLab experiment

1. Route stereo material through MS Enc directly into MS Dec.
2. Compare output to input with a null/residual test and level measurement.
3. Process only the Side path with a known gain or filter.
4. Observe L/R level, correlation, and goniometer.
5. Monitor the final result in mono and identify the changed/cancelled content.

## Common misconception

“Negative correlation means the stereo signal is invalid.” It signals inverse
relationship and possible mono cancellation; whether that is acceptable depends on
duration, frequency, intent, and delivery requirements.

## Primary reference

Alan Dower Blumlein's [British patent GB394325A](https://patents.google.com/patent/GB394325A/en)
describes foundational stereo sum/difference principles. Modern implementation claims
here are verified through the reversible encode/decode experiment rather than relying
on a brand-specific scaling convention.
