---
applyTo: "index.html"
---

# SPOTLIGHT — Question Bank Guidelines

## Format (strict)

Every entry in the `BANK` array **must** follow this exact shape:

```js
{
  cat:   'movies' | 'tv' | 'music' | 'celeb' | 'pop',
  icon:  '🎬'    | '📺' | '🎵'   | '⭐'    | '🌟',
  label: 'Movies' | 'TV Shows' | 'Music' | 'Celebrity' | 'Pop Culture',
  q:     'Question text ending with a question mark?',
  opts:  ['Distractor A', 'Distractor B', 'Distractor C', 'Correct Answer'],
  ans:   3
}
```

### Non-negotiable rules
1. `ans` is **always `3`** — the correct answer is always `opts[3]`.
2. There are **always exactly 4 options** in `opts`.
3. The first three options are plausible-but-wrong distractors.
4. The correct answer goes **last** in the array.
5. Do not repeat questions that already exist in `BANK`.

## Category Metadata

| `cat` | `icon` | `label` |
|---|---|---|
| `'movies'` | `'🎬'` | `'Movies'` |
| `'tv'` | `'📺'` | `'TV Shows'` |
| `'music'` | `'🎵'` | `'Music'` |
| `'celeb'` | `'⭐'` | `'Celebrity'` |
| `'pop'` | `'🌟'` | `'Pop Culture'` |

## Writing Good Questions

- **Difficulty:** Aim for a mix — some should be easy crowd-pleasers, others genuinely tricky.
- **Distractors:** Make them plausible, not absurd. A savvy guesser should not trivially eliminate 3 bad choices.
- **Freshness:** Favour questions about content from 2015–present unless the reference is iconic (pre-2015 classics are fine).
- **Accuracy:** Verify every fact. Do not hallucinate release dates, award winners, or real names.
- **Tone:** Light, fun, and celebratory — no politics, controversy, or edgy content.
- **Question phrasing:** Avoid yes/no questions. Use "Which", "Who", "What", "In what year", "How many", etc.

## Balance Targets (per category)

Try to maintain at least **10 questions per category** in `BANK` so the seeded daily picker has variety.

| Category | Min questions |
|---|---|
| movies | 10 |
| tv | 10 |
| music | 10 |
| celeb | 10 |
| pop | 10 |

## Adding Questions

The question bank lives in `js/trivia.js`. Place new questions inside the matching category comment block in `BANK`, e.g.:

```js
/* ── MOVIES ── */
{ cat:'movies', icon:'🎬', label:'Movies',
  q:'Your question here?',
  opts:['Wrong A', 'Wrong B', 'Wrong C', 'Correct Answer'], ans:3 },
```

Never reorder existing entries — the seeded RNG relies on stable array positions to avoid changing today's quiz for returning visitors.
