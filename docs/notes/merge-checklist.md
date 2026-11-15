# Merge checklist (things CI cannot check)

Run through this when merging. The code-only gates (`npx tsc --noEmit`, the full `npm test` with `ℹ fail 0`, bank bytes unchanged where the task says so) are separate.

## Content and questions

- [ ] **Bank edit → sync.** Did this merge change a curated bank question (prompt, options, answer or explanation) or add/remove one? Then learners will not see it until the code-to-D1 sync runs. After the deploy: fresh exports, `node --import tsx scripts/question-drift.ts`, and if anything differs run `scripts/question-sync.ts --tag <name> --write`, back up, apply, re-check for zero drift. See [d1-sync.md](d1-sync.md).
- [ ] **New banks:** every new question is registered by that sync (class "new"). Until then the topic is served from whatever D1 has (or the bank, if D1 has none).
- [ ] **Question tables or migrations:** any new migration is applied to production by hand, with `wrangler d1 execute --remote --file`, before the code that reads it is deployed; and a backup is taken first.
- [ ] **Write budget:** anything that writes many rows (a sync, a backfill, a regeneration) stays under the free-plan day budget; check the chunk estimate and `meta.rows_written`.

## Lessons

- [ ] A lesson rewritten to the lesson standard does not repeat a bank question word for word (the overlap guard enforces it; a failing guard means reword the lesson, not the baseline).
- [ ] Pictures were looked at in the browser at 390 and 1280 px.

## After the deploy

- [ ] If the flag `serve_from_d1` covers the grade, spot-check one changed question with a GET of `/api/caps/<subject>?task=<task>&count=40`: it should show the new wording and carry a `qid`.
