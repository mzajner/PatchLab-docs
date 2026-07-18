# Deployment plan

## Preview

1. Create a GitHub repository for this folder.
2. Push `main` and enable GitHub Pages with **GitHub Actions** as the source.
3. The deploy workflow runs content checks, Astro checks, the production build, and
   uploads `dist/`.
4. Review the project URL before attaching a custom domain.

## Official domain

Recommended target: `docs.patchlab.dev`.

Before changing DNS:

- confirm domain ownership and repository visibility;
- add and verify the custom domain in GitHub;
- set the DNS record GitHub requests;
- enable HTTPS after certificate issuance;
- confirm `astro.config.mjs` `site` matches the final canonical origin;
- test redirects, sitemap, social previews, search, and 404 behavior; and
- keep the preview URL available during cutover.

## Release sequence

1. Freeze the PatchLab release candidate.
2. Build the candidate and emit registry/command/schema artifacts.
3. Sync generated docs and validate fixtures.
4. Capture or approve screenshots against the candidate.
5. Run technical, editorial, adversarial, accessibility, link, and build checks.
6. Tag docs and product with reciprocal revision metadata.
7. Deploy to preview and complete smoke checks.
8. Promote the same artifact to the official domain.
9. Monitor 404s, search gaps, and feedback.

Do not regenerate reference data from an unrelated development build during a release
documentation freeze.
