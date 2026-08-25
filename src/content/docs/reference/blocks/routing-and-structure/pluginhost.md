---
title: "PluginHost"
description: "PLUGIN HOST: loads a THIRD-PARTY VST3 or Audio Unit inside the patch as a node - right-click Load (or drop) a .vst3/.component bundle, audio + MIDI route through it, and double-cli"
sidebar:
  order: 168
---

<small>Generated from PatchLab binary source candidate `2a98ed460799` · registry type 167</small>

## At a glance

| Property | Value |
| --- | --- |
| Category | [Routing & Structure](../) |
| Signal role | Audio |
| Audio inputs | 1 |
| Audio outputs | 1 |
| MIDI input | Yes |
| MIDI output | No |
| CPU class | trivial |
| Reported latency | 0 |

## Parameters

| Parameter | ID | Range | Default | Unit / choices | Mod port |
| --- | --- | --- | --- | --- | ---: |
| Bypass | `bypass` | 0 to 1 | 0 | `Off`, `On` | 1 |

## Declared ports

- Audio inputs: `A`

## Safety and limits

instantiation runs IN-PROCESS on the message thread (no sandbox in v1) - a broken third-party plugin can still take the app down while loading, and a plugin that fails to load leaves a bypassed dry-through stub (error face, path + state kept). Plugin path is ABSOLUTE (machine-level, not a project asset): the patch is not portable across machines unless the same plugin is installed. Latency is forwarded live from the hosted plugin. Cannot export (host-only, emitter refuses). AUv3 plugins (async-only instantiation) are not supported in v1

<details>
<summary>Registry implementation notes</summary>

PLUGIN HOST: loads a THIRD-PARTY VST3 or Audio Unit inside the patch as a node - right-click Load (or drop) a .vst3/.component bundle, audio + MIDI route through it, and double-click the header (or click the face) to open the plugin's OWN editor in a separate window. Bypass is the one node param (the plugin's parameters are driven from its editor; exposing them as node params is a phase-2 mapping - a plugin's param list is only known after load, and mod-port bus indices must stay stable). The patch stores the plugin's ABSOLUTE path + full state blob (base64); a MISSING plugin on reload degrades to a bypassed dry-through stub with an error face - path and state are preserved on re-save, never a crash, never a dropped patch. HOST-ONLY: cannot export (a third-party binary cannot be compiled into an exported plugin - the emitter refuses it). Loading arbitrary third-party code can still crash the process (no out-of-process sandbox in v1).

</details>

:::caution[Verify in context]
Ranges and declared latency are product facts. Audible outcome, stability, level, and CPU cost still depend on signal, sample rate, block size, routing, modulation, and surrounding blocks.
:::

