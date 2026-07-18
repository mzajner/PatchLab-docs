---
title: Projects, patches, and saving
description: Choose the correct unit of work, understand context-aware Save behavior, and protect assets and history.
sidebar:
  order: 7
---

A **project folder** is the primary unit of durable work. A loose `.plpatch` is a
portable graph snapshot. They overlap, but they are not interchangeable.

## Save commands by context

| Current context | `Cmd+S` | `Cmd+Shift+S` |
| --- | --- | --- |
| Project open | Save graph and project metadata | Fork to a new project folder and switch to it |
| Previously saved loose patch | Overwrite that `.plpatch` | Choose another `.plpatch` destination |
| Untitled loose patch | Open Save Patch As | Open Save Patch As |

PatchLab refuses to use an existing project as a Save Project As destination because
that could replace or confuse another unit of work. Use **Open Project…** when the goal
is to enter an existing project.

## Create a project

Choose **File → New Project (from current patch)…**. The project receives the active
graph, project identity, UI and preset locations, asset folders, export output, and
agent-context files.

The core layout is:

```text
My Project/
  project.json
  dsp/graph.json
  blocks/
  presets/
  ui/
  samples/ audio/ images/ wavetables/ midi/
  exports/
  .patchlab/
```

Keep referenced assets in the project. An absolute link to a file elsewhere on one
machine is not a portable project dependency.

## Portable patches

In project mode, **File → Export Patch as .plpatch…** writes the graph as a portable
single file. In loose-patch mode, **Save Patch As…** already serves that purpose.

A `.plpatch` can include graph and face state, but it is not the complete project
workspace or its asset-management contract.

## Autosave and recovery

Project mode writes the active graph to `dsp/graph.json` and maintains rotating graph
autosaves. Loose mode also has application-level recovery state. Recovery files are a
safety net, not a version history.

For important work:

1. use a project folder;
2. save at named milestones;
3. keep assets inside it;
4. put source files under version control; and
5. exclude generated exports and private local context where the project template marks them ignored.

Read [File types and project layout](/reference/file-types/) for the full artifact map.
