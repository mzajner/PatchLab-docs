---
title: Using Visual blocks
description: Add face media without confusing a visual timeline or layer with audio DSP.
sidebar:
  order: 11
---

Visual blocks and Canvas media communicate state or provide presentation. They do not
replace audio measurement and should not silently become critical DSP dependencies.

The current **VideoPlayer** surface is for visual media. Keep media inside the project,
verify path portability, define playback/transport behavior, provide a useful static
fallback, and avoid relying on color or motion alone to convey essential state.

Check CPU/GPU use and editor behavior in the exported plugin. A face that performs well
in the standalone may interact differently with a host's editor lifecycle.

See the generated [Visual reference](/reference/blocks/visual/).
