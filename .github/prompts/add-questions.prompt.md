---
agent: agent
description: Add new trivia questions to the SPOTLIGHT question bank
tools:
  - codebase
  - editFiles
---

Add **${count|5}** new trivia questions to the `BANK` array in `index.html`.

## Category distribution

Unless told otherwise, spread questions evenly across categories:
- `movies` — 🎬 Movies
- `tv` — 📺 TV Shows  
- `music` — 🎵 Music
- `celeb` — ⭐ Celebrity
- `pop` — 🌟 Pop Culture

## Your task

1. Read the existing `BANK` array to avoid duplicating questions that already exist.
2. Generate `${count|5}` new, factually accurate questions covering the categories above.
3. Follow the **strict format** (from the `question-bank.instructions.md`):
   - `ans` is always `3`.
   - Correct answer is always `opts[3]`.
   - Exactly 4 options per question.
   - Plausible-but-wrong distractors — no trivially obvious duds.
4. Insert each new question inside the correct category comment block in `BANK`.
5. Do not reorder any existing entries.

## Quality checklist (verify before inserting)

- [ ] Correct answer is at index 3 (`ans: 3`).
- [ ] Fact is accurate and verifiable.
- [ ] Question is not already in the bank.
- [ ] Every distractor is plausible.
- [ ] No politics, controversy, or mature content.
- [ ] Written in English, ending with a question mark.

## Topic focus (optional)

${topic|Any pop culture topic from 2010–present}
