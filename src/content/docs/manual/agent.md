---
title: Use the Agent safely
description: Choose an Agent lane, understand review and provider trust, protect credentials, and verify graph edits.
sidebar:
  order: 9
---

The Agent can plan, build, and edit a patch through PatchLab's supported graph
operations. It does not make an unsafe connection safe or an unmeasured claim true.

Open the dock with `Cmd+L`.

## Choose a lane

| Lane | What runs | Credentials |
| --- | --- | --- |
| **External Agent** | Your installed agent CLI connects through PatchLab's MCP/graph-operation surface | Managed by that external tool |
| **API Build** | PatchLab calls the provider configuration you supply | Your endpoint, key, and model |
| **Dry run** | An offline keyword planner demonstrates a proposed chain | None; it is not an AI model |

External Agent is the primary first-run lane. API Build is an advanced bring-your-own-
provider path. Dry run is useful for learning the operation flow but must not be
represented as model reasoning.

## Review before applying

Review mode is the safe default. The Agent shows proposed operations and waits for
approval before applying them. **Auto-apply** removes that pause; enable it only when
the task and allowed change surface are bounded and recoverable.

Before approval, check:

- the intended blocks and exact parameter IDs;
- cable direction and signal kind;
- generator levels, summing, feedback, and output gain;
- whether existing work will be replaced;
- whether a project save or version-control checkpoint exists; and
- what observation will prove the result.

Stop terminates the active run. A stopped or failed run may have applied earlier
approved operations, so inspect the graph rather than assuming atomic rollback.

## Provider configuration and secrets

API Build supports hosted presets and compatible HTTPS endpoints. The endpoint, model,
and key remain in memory unless **remember** is enabled. When enabled, the configuration
is stored in PatchLab's private application settings on that machine—not in the patch,
project, or Agent transcript.

Changing endpoint origin invalidates a previously stored key relationship. Re-enter the
appropriate credential instead of reusing a key across an untrusted origin.

A loopback/local endpoint is offered only after native authorization through
**View → Local LLM Endpoint…**. The web panel cannot grant that permission to itself.

## Verify the result

After a run:

1. inspect the operation cards and final status;
2. compare the actual graph with the request;
3. look for orphan blocks and unintended parallel paths;
4. audition at a controlled output level;
5. measure the claim in Debug when it is measurable; and
6. save only after the result is understood.

The optional Educator role can explain the resulting blocks and cables. Treat that
explanation as guidance to verify, not as independent evidence that the patch is correct.
