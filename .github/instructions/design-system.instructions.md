---
applyTo: "index.html"
---

# SPOTLIGHT — Design System

## Tokens (CSS Custom Properties)

All visual values are defined in `:root` inside **`css/base.css`**. **Never hard-code a hex color or a repeated spacing value — always use or extend a token.**

```css
:root {
    /* Backgrounds */
    --bg:         #07080F;   /* Page background */
    --surface:    #0D0F1E;   /* Card background */
    --surface-2:  #131629;   /* Progress bar track, inset areas */

    /* Borders */
    --border:     rgba(240,180,41,0.14);  /* Gold-tinted card borders */
    --border-dim: rgba(255,255,255,0.06); /* Subtle option borders */

    /* Brand gold */
    --gold:       #F0B429;
    --gold-light: #FFD166;
    --gold-glow:  rgba(240,180,41,0.18);

    /* Text */
    --cream:      #F0E8D5;   /* Primary body text */
    --muted:      #5E5E78;   /* De-emphasized text */
    --muted-mid:  #8787A0;   /* Labels, secondary copy */

    /* Feedback states */
    --correct:    #06D6A0;
    --correct-bg: rgba(6,214,160,0.09);
    --wrong:      #EF4565;
    --wrong-bg:   rgba(239,69,101,0.09);

    /* Category accents */
    --cat-movie:  #F0B429;
    --cat-tv:     #A78BFA;
    --cat-music:  #34D399;
    --cat-celeb:  #F472B6;
    --cat-pop:    #60A5FA;
}
```

## Typography

| Role | Font | Weight |
|---|---|---|
| Headings, scores, results | Playfair Display | 700 / 900 |
| Body, buttons, labels | DM Sans | 300–600 |

Both fonts are loaded from Google Fonts. Do not add additional Google Fonts imports without a strong reason.

## Component Patterns

### Cards
```html
<div class="card">
  <!-- Gold rule auto-injected by ::before -->
</div>
```
Cards use `background: var(--surface)`, gold border, 22px radius, and a 2px gold gradient top rule via `::before`.

### Buttons
- **Primary action** — `.btn-play`, `.btn-share`: gold fill, dark text, pill shape, hover lifts with glow shadow.
- **Secondary action** — `.btn-next`: transparent with border, turns gold on hover.
- Never create a new primary button style without extending one of these.

### Category Pills
```html
<span class="cpill movies">🎬 Movies</span>
```
Use the existing `.cpill` + category class. Colors are derived from `--cat-*` tokens.

### Screens
```html
<div class="screen" id="scr-myscreen">...</div>
```
Toggle visibility only via `showScreen('scr-myscreen')` which manages `.active` classes. Never show/hide screens with `display` style directly.

## Animation Guidelines

- Screen transitions: `screenIn` keyframe (fade + translateY) — already applied via `.screen.active`.
- Interactive elements: `.opt` hover does `translateX(5px)` — keep micro-interactions subtle and consistent.
- Duration sweet spot: 150–400 ms. Stay within this range for new transitions.

## Responsive Breakpoint

One breakpoint at `max-width: 500px`. Tighten card padding and font sizes here. Add mobile overrides in the existing `@media` block at the end of `<style>`.
