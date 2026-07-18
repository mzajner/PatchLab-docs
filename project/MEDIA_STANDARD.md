# Screenshot and media standard

Screenshots are release evidence, not decoration. Capture them only after the product revision is frozen.

## Naming and storage

Use `public/media/<product-version>/<page-slug>/<sequence>-<purpose>.<ext>`. Keep the original capture and a presentation crop when cropping is instructional.

Every asset receives a record in `project/media-manifest.json` with:

- product commit and artifact identifier;
- platform, scale factor, theme, window size, and locale;
- capture command or sanctioned manual method;
- page and claim the media supports;
- alt text;
- crop/annotation history; and
- reviewer and review date.

## Capture rules

- Use PatchLab's self-rendered snapshot for native UI and its sanctioned system-shot path for WebView surfaces.
- Start from a deterministic fixture and isolated application data.
- Hide credentials, usernames, private paths, provider keys, and unrelated applications.
- Do not use color alone for annotations.
- Use a screenshot for recognition, a diagram for relationships, and a short video only when motion is the lesson.
- Re-review an image whenever the relevant label, control, layout, state, or theme changes.

## Release rule

A cosmetically older screenshot may remain only when none of its instructional pixels changed and the manifest records that review. Otherwise recapture from the same product artifact used by the manual.
