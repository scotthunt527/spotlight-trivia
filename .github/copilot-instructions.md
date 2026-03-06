# SPOTLIGHT — Copilot Workspace Instructions

## Project Overview

**SPOTLIGHT** is a single-page daily pop-culture trivia game deployed as a static GitHub Pages site. There is one source file: `index.html`. All HTML, CSS, and JavaScript live in that single file — there is no build step, no framework, and no backend.

The game serves 5 questions per day, seeded by the calendar date so every visitor sees the same quiz. Scores and streaks are persisted in `localStorage`.

## Architecture

```
spotlight-trivia/
├── index.html          # Hub / game-picker page
├── trivia/
│   └── index.html      # Daily trivia game
├── css/
│   ├── base.css        # Shared: design tokens, reset, layout, header, footer
│   └── trivia.css      # Trivia-specific: screens, cards, buttons, game UI
└── js/
    ├── shared.js       # seededRNG(), dateSeed() — reusable across games
    └── trivia.js       # BANK, getDailyQuestions(), full game logic
```

| Concern | Location |
|---|---|
| Hub markup | `index.html` |
| Game markup | `trivia/index.html` |
| Shared styles | `css/base.css` |
| Trivia styles | `css/trivia.css` |
| Shared JS utilities | `js/shared.js` |
| Question bank & game logic | `js/trivia.js` |
| Persistence | `localStorage` — keys `spotlight_stats` and `spotlight_YYYY_M_D` |
| Ads | `.ad-placeholder` divs (swap for real AdSense tags when live) |

## Design System

All visual tokens are CSS custom properties defined in `:root`. **Never hard-code colors or spacing — always reference a token.**

| Token | Purpose |
|---|---|
| `--bg` | Page background (`#07080F`) |
| `--surface` | Card background |
| `--surface-2` | Progress bar track |
| `--gold` / `--gold-light` | Primary accent |
| `--cream` | Body text |
| `--muted` / `--muted-mid` | Secondary text |
| `--correct` / `--correct-bg` | Right-answer state |
| `--wrong` / `--wrong-bg` | Wrong-answer state |
| `--cat-movie/tv/music/celeb/pop` | Per-category accent colors |

Fonts: **Playfair Display** (headings, scores) and **DM Sans** (body, buttons) — both loaded from Google Fonts.

## Question Bank Format

Every entry in `BANK` must follow this exact shape:

```js
{
  cat:  'movies' | 'tv' | 'music' | 'celeb' | 'pop',
  icon: '🎬' | '📺' | '🎵' | '⭐' | '🌟',
  label: 'Movies' | 'TV Shows' | 'Music' | 'Celebrity' | 'Pop Culture',
  q:    'Question text?',
  opts: ['Wrong', 'Wrong', 'Wrong', 'Correct'],   // ALWAYS 4 options; correct is ALWAYS index 3
  ans:  3                                          // ALWAYS 3
}
```

> **Rule:** The correct answer is always the last element (`opts[3]`, `ans: 3`). The game shuffles display order at render time, so the array position is only meaningful internally.

The daily quiz picks exactly **one question per category** using a date-based seeded RNG, guaranteeing daily variety without repeats within a session.

## Coding Conventions

- **Vanilla JS only** — no libraries, no imports, no modules.
- Prefer `const` / `let`; never `var`.
- DOM manipulation uses `getElementById`, `querySelector`, `querySelectorAll`, and `innerHTML` / `textContent` as appropriate.
- All user-visible strings are set via `textContent` (not `innerHTML`) unless the string contains intentional HTML.
- Event listeners are attached with `addEventListener` (never inline `onclick` in dynamically created elements).
- Maintain the existing section-comment style (`/* === SECTION === */`) when adding new code blocks.

## Screen Flow

```
init()
  ├─ already played today? → showPlayedScreen()  [scr-played]
  └─ not played           → shows splash         [scr-splash]
                                ↓ startGame()
                              [scr-game]  renderQuestion() × 5
                                ↓ finishGame()
                              [scr-results]
```

Screens are toggled by adding/removing the `.active` class via `showScreen(id)`.

## Monetization

Ad placeholders are marked with comments in `index.html`. When replacing with real AdSense tags, only swap the inner content of `.ad-zone` divs — preserve the wrapper elements.

## Adding a New Game

1. Create `<game-name>/index.html` — the game page.
2. Add game-specific styles to a new `css/<game-name>.css` file.
3. Add game logic to a new `js/<game-name>.js` file.
4. Load `css/base.css` and `js/shared.js` from the game page (paths relative: `../css/base.css`).
5. Add a new `.game-card` entry to `index.html` linking to the new game directory.

## Deployment

The site is hosted on GitHub Pages (custom domain set in `CNAME`). Merging to `main` auto-deploys. No CI needed — just commit valid HTML/CSS/JS.

## What to Avoid

- Do not introduce package.json, npm, or any build tooling.
- Do not add `innerHTML` with unsanitized user-supplied content.
- Do not change `ans` values to anything other than `3` in new questions.
- Do not use `var` or legacy ES5 patterns.
- Do not duplicate design tokens — always reference `css/base.css` variables.
