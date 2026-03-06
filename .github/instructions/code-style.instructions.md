---
applyTo: "index.html"
---

# SPOTLIGHT — Code Style & Conventions

## File Structure

```
css/base.css      — Shared design system (tokens, reset, layout, header, footer)
css/<game>.css    — Per-game component styles
js/shared.js      — Shared utilities: seededRNG(), dateSeed()
js/<game>.js      — Per-game question bank and logic
index.html        — Hub / game-picker page
<game>/index.html — Individual game page
```

- All game pages load `../css/base.css` and `../js/shared.js` using relative paths.
- Do not duplicate tokens or utilities across files — extend what exists.

## JavaScript Style
- **Vanilla JS only** — no libraries, no frameworks, no npm.
- Use `const` and `let`. Never use `var`.
- Use `addEventListener` — never inline `onclick` or `onchange` attributes on dynamically created elements.
- Prefer template literals for multi-part strings.
- Use `textContent` for plain strings, `innerHTML` only when building structured HTML (e.g., option buttons).
- Keep new JS blocks inside the existing `<script>` tag, separated by the section-comment convention:
  ```js
  /* ================================================================
     SECTION NAME
  ================================================================ */
  ```

## CSS Style
- **Always use CSS custom properties** from `:root` (defined in `css/base.css`) — never hard-code hex values or pixel lengths that duplicate an existing token.
- Add new tokens to `:root` in `css/base.css` if a value is reused across files.
- Shared structural CSS belongs in `css/base.css`; game-specific component CSS belongs in `css/<game>.css`.
- Inside CSS files, group rules by component with section header comments:
  ```css
  /* ============================================================
     COMPONENT NAME
  ============================================================ */
  ```
- Mobile-first responsive styles go at the end of the `<style>` block in the existing `@media (max-width: 500px)` block.

## HTML Markup
- Use semantic elements where appropriate (`<header>`, `<footer>`, `<button>`, etc.).
- Screens are `<div class="screen">` elements toggled with the `.active` class via `showScreen(id)`.
- Cards use `<div class="card">` — do not create new wrapper patterns without reason.

## Security
- Never insert unsanitized external input into the DOM via `innerHTML`.
- Game data comes only from the hard-coded `BANK` array or `localStorage` — both are trusted internal sources.
- `localStorage` values are parsed with `JSON.parse` inside a try-safe pattern; validate the shape before using.

## What NOT to Do
- No `var`, no `document.write`, no `eval`.
- No inline event handlers (`onclick="..."`) on elements created by JS.
- No hard-coded color hex values outside of `:root`.
- No third-party scripts except the existing Google Fonts link.
