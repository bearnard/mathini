# The server marks multiple-choice answers (security review follow-up)

Until now `/api/attempts` believed the `isCorrect` the browser sent, so XP, mastery, test scores and everything a parent sees (dashboard and weekly email) could be inflated with one edited request. Now `src/lib/server/marking.ts` decides.

## What the server does with an answer

1. It finds the question version as before (`identifyAttempt`: the version the learner was shown, else the current one).
2. **Multiple choice, with a chosen option:** `isCorrect` is whether the option the learner tapped (`chosen`) is the answer of that version. Whitespace is collapsed and the text cut at 200 characters on both sides (what `chosen` is stored as). If an edit has reached the database before the code bank the learner is looking at, the other approved versions of the question are consulted, so an old option is judged by the old version that offered it.
3. **Multiple choice without a chosen option, or with an option no version offers:** not right. A real tap always sends one of the options.
4. **Everything the server cannot mark** (a generated exercise such as the Grade 5 maths tutors, an order/label/explain question, a question the server does not hold, or a failed lookup): the browser's value is kept, and the attempt is flagged.
5. The streak the browser sends is capped at the run of right answers the server has seen in a row (plus this one), so XP and streak badges follow marked answers too.

The verdict feeds everything downstream: `attempts.is_correct`, XP, the XP rows, badges, the spaced-review schedule, run scores, topic mastery and so the parent views. The response now carries `isCorrect` (the server's verdict).

## Migration 0018 (apply BEFORE deploying)

`attempts.marked_by` (`'server'`, `'client'`, NULL for older rows) and `attempts.client_correct` (what the browser claimed). Both nullable. If the migration is missing the answer is still stored (the plan falls back to the old columns, at the cost of a few failed inserts), but nothing is flagged.

Useful queries: attempts the server corrected: `SELECT COUNT(*) FROM attempts WHERE marked_by = 'server' AND client_correct <> is_correct` (a tampered client, or a client bug). How much of the progress rests on the browser's word: `SELECT marked_by, COUNT(*) FROM attempts GROUP BY marked_by`.

## Runs

`startRun` now refuses a run whose kind, scope, grade, subject or size the app does not have: a review must be `spaced-review`; a mock test or exam practice must be a known exam scope (`EXAM_SCOPES`) with its grade and subject and at least 5 questions (one easy question used to be a "100%" mock); practice may be any topic except those reserved keys.

## Still the browser's word

Flagged `client` attempts still count toward XP, mastery and run scores, because for generated and non-multiple-choice exercises there is nothing to check them against. Marking order, label and explain items on the server is the next step if those need to be trusted; until then they are identifiable (`marked_by = 'client'`).
