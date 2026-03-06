---
agent: agent
description: Debug localStorage, streak, or scoring issues in SPOTLIGHT
tools:
  - codebase
  - editFiles
---

Debug the following issue in SPOTLIGHT's game logic: **${issue|Describe the bug}**

## Investigation checklist

Work through these in order and report findings for each step:

### 1. localStorage state
- Identify all `localStorage` keys used (`spotlight_stats`, `spotlight_YYYY_M_D`).
- Trace `getStats()`, `saveStats()`, `saveTodayResult()`, and `getTodayResult()` for logic errors.
- Check that `todayKey()` produces the correct key for the current date.

### 2. Streak logic
- Verify the streak increment/reset logic in `finishGame()`.
  - Streak increments only if `stats.lastDate === yesterday`.
  - Streak resets to 1 if `lastDate` is anything else (including empty).
  - `lastDate` is set to `new Date().toDateString()` after each completed game.

### 3. Score & answer log
- Confirm `score` is incremented only when `chosen === correctDisp`.
- Confirm `answerLog.push(correct)` is called exactly once per question.
- Check `answerLog` has exactly 5 entries after `finishGame()`.

### 4. Daily deduplication
- Verify `init()` calls `getTodayResult()` and redirects to `showPlayedScreen()` if a result exists.
- Confirm `showPlayedScreen()` reads emojis and score from the stored result, not live game state.

### 5. Seeded question selection
- Verify `getDailyQuestions()` always returns exactly 5 questions (one per category).
- Confirm `dateSeed()` produces the same value for all users on the same calendar day.

## Output

Report each finding and apply a fix if a bug is confirmed. Show the before/after diff for any changed code.
