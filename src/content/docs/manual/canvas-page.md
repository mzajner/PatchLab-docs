---
title: Design on the Canvas page
description: Create a musician-facing interface, bind it to DSP, preview it, and manage reusable faces without confusing appearance with behavior.
sidebar:
  order: 4
---

The Canvas page designs the interface that a musician uses. The Patch graph owns DSP;
the face document owns presentation and bindings. A control is useful only when its
binding reaches the intended signal or parameter.

## Begin with a working graph

Design the signal path first, expose the parameters that belong in the public interface,
then open **Canvas**. This keeps unresolved DSP decisions from becoming decorative UI.

For a fast starting point, choose **Generate UI**. PatchLab creates controls from the
currently exposed patch surface. Generation replaces the current layout; Undo restores
the previous face.

## Add and arrange elements

The quick Add strip provides common controls. **Insert** opens the organized component
library for controls, displays, visuals, layout elements, and preset components.

Use the design surface to:

- select, marquee-select, drag, resize, and rotate elements;
- align or distribute several selections;
- group elements and manage their layer order;
- pan with the middle button or Space-drag;
- zoom and fit the design;
- enable grid and pixel snapping; and
- use the Pen tool for authored paths.

The Properties panel edits the selected element. The Face panel owns face dimensions,
theme, background, reusable styles, prototype links, and library content.

## Bind behavior

A control binding identifies the target signal/parameter and the relationship between
control travel and target travel. Label the user decision—such as **Tone**, **Space**,
or **Drive**—without concealing what an extreme setting does.

One control may coordinate several targets when that relationship is intentional. Test
the minimum, midpoint, maximum, automation, and reset behavior. A visually correct knob
with the wrong taper is a functional defect.

Canvas controls form the exported plugin's stable DAW-automation surface. Avoid exposing
temporary internal details merely because they are available.

## Preview and verify

Choose **Preview** to render the validated face rather than its editor chrome. Check:

- labels and values remain readable at the intended window size;
- every interactive control changes the expected target;
- keyboard focus and pointer gestures are usable;
- states are not distinguished by color alone;
- automation and preset recall restore the same values; and
- the interface remains safe at every control extreme.

Escape returns from preview to editing.

## Faces, block faces, and reusable components

A project can own multiple faces under **File → Face (UI)** and choose one active face.
You can create, rename, duplicate, or switch faces without replacing the DSP graph.

Use **Block face…** to design a selected block's local face. A block face can remain an
instance-specific design, become the default for that block type, or be saved with its
preset as a reusable custom block. These scopes are different; name and review the
intended one before saving.

Use [Patch presets and Canvas presets](/manual/presets-and-faces/) when saving a face
snapshot. A Canvas preset changes design, not graph topology.
