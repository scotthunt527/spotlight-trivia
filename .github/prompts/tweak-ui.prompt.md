---
agent: agent
description: Tweak the visual theme, colors, or layout of SPOTLIGHT
tools:
  - codebase
  - editFiles
---

Apply the following visual change to SPOTLIGHT: **${change|Describe the UI change}**

## Before making changes

1. Read the `<style>` block in `index.html` to understand existing rules.
2. Identify which CSS custom properties in `:root` are relevant.
3. Check if the change can be achieved purely by editing token values — prefer that over adding new rules.

## Constraints

- **Only use CSS custom properties** from `:root` — never hard-code hex colors.
- Add new `:root` tokens if a new color or value is needed and will be reused.
- Stay within the existing Hollywood Awards Night dark-gold aesthetic:
  - Dark navy/black backgrounds (`--bg`, `--surface`)
  - Gold accents (`--gold`, `--gold-light`)
  - Cream/warm white text (`--cream`)
- All responsive overrides go inside the existing `@media (max-width: 500px)` block.
- Do not change font families — Playfair Display and DM Sans are the brand fonts.

## Output

- Show the before/after for any CSS rules changed.
- Confirm which token(s) were modified or added.
- If the change affects a screen that has a specific `id`, name the screen.
