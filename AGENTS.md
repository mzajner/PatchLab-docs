# PatchLab docs working agreement

## Authority

1. Product behavior: the PatchLab user path and current source.
2. Block facts: the running `--registry` snapshot in `src/data/registry.json`.
3. Terminology: `project/terminology.json`.
4. Editorial rules: `project/CONTENT_STANDARD.md`.
5. Roadmap and scope: `project/DOCUMENTATION_STRATEGY.md` and `project/ROADMAP.md`.

Do not copy behavior from the PatchLab README when a current source or user-path check
is available. The product is moving quickly and historical status prose can lag.

## Authoring rules

- Use **block**, not **node**, for the PatchLab user concept.
- Separate current behavior from planned or north-star material.
- State units and conditions for every quantitative claim.
- Never hand-edit generated block pages.
- Keep each page independently useful and link to prerequisites instead of repeating
  them.
- Prefer a small tested example over a broad unverified explanation.
- Give every image meaningful alt text and a recorded product revision.

## Before handoff

Run `npm run check`. For changed product procedures, also perform the relevant steps in
the matching PatchLab build and record the evidence in the change description.
