# The server never trusts the browser's marking (security fix, live QA finding 18)

Found by the live QA on prod (2026-11-16): `POST /api/attempts` believed `isCorrect:true` whenever the attempt named no question, so a console script could
add XP (+270 in 12 requests), and `POST /api/runs` + 20 such attempts + `/finish` produced a finished 100% mock test.

## The rule
An answer COUNTS (XP, runs, topic_progress, review schedule, leaderboard, badges, parent and teacher views) only when:
1. the server holds the question (the attempt resolves to a `questions` row and version) and **marks the answer itself** (`marking.ts`, `credited`):
   multiple choice (the option text is one of the question's options), order (the learner's steps joined by `|` are the question's steps, and the right order)
   and label (`hotspotId=Label` pairs joined by `|`). A missing or impossible choice is not marked: it does not count.
2. if the answer carries a run: it is the learner's own open run (< 2 h), and (`attemptTrust.ts`)
   - a mock test or exam practice takes only topics of that exam (`EXAM_SCOPES`); a spaced review takes only cards the learner has;
   - each question counts once per run, and never more answers than the run holds.

Everything else is not stored and earns nothing (`/api/attempts` answers 200 `{ xpAwarded: 0, credited: false }` so no screen breaks). Old rows with
`marked_by = 'client'` are excluded from run scores, topic progress, the progress page, class views and the parent activity numbers.

## Decisions
- **Self-marked written answers (explain items, exam practice) are not recorded on the server.** Only the learner can judge them against the memo, so they
  can never produce XP, mastery, a run score or a leaderboard place. They still work on screen (the learner marks them and sees their marks). A run's size
  (`nItems`) is the number of auto-marked questions, so the stored score is the auto-marked score. (The result screen shows marks including written
  answers: that is a separate display, reconciled in `fix/learner-results-consistency`.)
- **Generated exercises** (Grade 5 custom components: Rounding, Comparing, Mass...) send no question, so the server cannot mark them: they no longer count.
  To count them again the server would have to issue and check a signed challenge (seed) for each exercise: a future project.
- A mock test or exam practice sends the question key (so the server can find and mark the question) and the server, which knows the run kind, does not
  feed it to the spaced-review schedule (before, the missing key did that).
- `POST /api/review/retire` can no longer retire a card whose question still exists (retired cards count as "remembered for good").
- **Not solved here (owner decision):** answering a REAL question correctly many times is indistinguishable from honest practice and the answers are
  readable by the learner, so repeated practice still earns XP. The leaderboard redesign (volume vs learning) is a product decision.
