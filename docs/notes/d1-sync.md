# One-way sync: code banks to D1 questions (step 4)

Plan: [d1-serving-plan.md](d1-serving-plan.md) section 4.4. Tool: `scripts/question-sync.ts` (reuses the drift classes in `scripts/question-drift.ts`). **It never touches a database**: it reads two wrangler exports and writes `.sql` chunk files that you apply by hand.

## Run

```
# 1. fresh read-only exports (rows in [0].results)
npx wrangler d1 execute preppals --remote --json --command "SELECT * FROM questions"          > audit/d1-serving/questions.json
npx wrangler d1 execute preppals --remote --json --command "SELECT * FROM question_versions"  > audit/d1-serving/question_versions.json
# 2. dry run (default): prints the plan and the rows each chunk will write; writes nothing
node --import tsx scripts/question-sync.ts
# 3. write the chunk files (audit/d1-serving/sync/*.sql, sync-plan.md, manifest.json)
node --import tsx scripts/question-sync.ts --write
# 4. apply one chunk at a time, after a backup, checking the ledger and meta.rows_written
npx wrangler d1 execute preppals --remote --file audit/d1-serving/sync/sync-g06-001.sql --json
```

Options: `--grades 6,7`, `--reset-reviews`, `--keep-source`, `--renames <json>` (`{"<oldQuestionId>": "<new prompt>"}` to settle an ambiguous reword), `--out <dir>`.

## What each class becomes

| Drift class | SQL |
|---|---|
| edited, same prompt | new `question_versions` row (`author 'seed'`, `status 'approved'`, `source_note 'sync from v<N>'`), the pointer move, a `question_edits` row (`change_kind 'sync'`, `admin_email 'sync'`) |
| reworded (matched) | the same, on the OLD question id; the new wording's qkey is stored as the version's alias, so review and attempts keep resolving. A new prompt that already belongs to another question is refused by the statement |
| new in code | `registerQuestionSql` (curated, version 1), exactly as the seed does |
| conflict (current version human-authored), retired question, ambiguous reword | **skipped and listed**; the human edit wins |

An edited question that is currently `source = 'ai'` becomes `'curated'`: it now holds the bank's wording, and the curated filter in serving does not depend on the pool row's quality score (which the stale-copy retire set to 0). `--keep-source` leaves it.

## Safety properties (all tested)

- Every statement is guarded by "the current version is still the one in the export". So **applying a chunk twice does nothing**, and **a human edit made after the export wins** (the sync skips that question).
- A fresh export after a sync classifies the same code as identical (aliases resolve to the canonical id), so a second run plans **zero** items. Rehearsed on the production exports loaded into a local database: round 1 = 3,187 items in 9 chunks, round 2 = 0 items, at most 2 versions per question.
- Chunks: one grade each, at most 1,000 questions, each ends with a `migration_ledger` row (guarded, so a re-apply adds none).

## Reviews (Grade 6)

Grade 6 changes to the **answer or options** are HELD (61 today) unless `--reset-reviews`. With the flag they are applied and every **active** `review_items` row of that question goes back to box 1, due tomorrow (SAST), streak 0; retired review rows are left alone; the audit row records how many were reset (`reviews_reset`). Without the flag no review box is touched. Wording-only Grade 6 edits (explanation, extra) always apply.

## Rows written

Per edited or reworded question: 6 (version row 3 with its two indexes, pointer 1, audit row 2 with its index); per new question 7; 1 per chunk ledger row; `--reset-reviews` adds 2 per active review row. The test checks the arithmetic against the real schema (table rows changed and the index counts). With the exports of 2026-11-15: **19,921 rows** in 9 chunks (about half a night at the 40,000 cap); calibrate on the first chunk with `meta.rows_written` and the ledger.

## Tests

`src/lib/server/questions/questionSync.test.ts` (13, real migrations over node:sqlite): a sync edit, idempotence, human edit wins, retired skipped, reword keeps the id and its alias resolves (clash refused), AI row becomes curated (and `--keep-source`), Grade 6 hold and `--reset-reviews` (counts, retired rows, other questions), wording-only Grade 6, `planSync` skips and the rename map, chunk sizes and ledger, the row-estimate arithmetic, a fresh export after a sync plans nothing, and a later change to a reworded question edits the original id.

## Keeping code and D1 in step ("bank edit → sync")

D1 is what learners see (flag `serve_from_d1`), so **a change to a bank in code reaches them only after a sync**. This slipped once: the Grade 11 IT banks were switched to Delphi after the first sync, and three Python questions kept being served until a second sync. CI cannot see production, so this is a human step:

1. **Any merge that edits, rewords, adds or removes a curated bank question** (anything under `src/curriculum/**` that changes a `prompt`, `options`, `answer` or `explanation` of a multiple-choice item) needs a sync afterwards. Run `node --import tsx scripts/question-drift.ts` on a fresh export: it lists exactly what differs, per grade. Zero drift = nothing to do.
2. Re-export `questions` and `question_versions`, run `node --import tsx scripts/question-sync.ts --tag <short name> --write`, back up, apply the chunks, re-export and confirm the plan is empty. The tag keeps this run's ledger steps apart from earlier runs.
3. Prefer fixing a single reported question with the admin editor (`/admin/questions`, [question-edit.md](question-edit.md)) instead of editing code: a human edit is never overwritten by a later sync.
4. A reworded prompt in code is matched to its old question automatically (same answer and options, or a unique 0.8 similarity). When the wording AND the options both changed, or the match is ambiguous, add a line to `migrations/seeds/question-renames.json` (`"<old question id>": "<new prompt>"`; the old id is in the drift report or the questions export). The sync reads that file by default and turns the pair into an edit of the OLD question; without the line it would add a new question and leave the old wording served. Never delete and re-add a question to reword it.

See also [merge-checklist.md](merge-checklist.md).

## AI pool rows are registered when they are stored

`runTopUp` (the nightly job), `persistItems` (`gemini.ts`) and `scripts/seed-questions.ts` now register every accepted AI row in `questions` + `question_versions` (source `ai`, version 1, id = qkey, pool row linked) **in the same batch** as the `item_cache` insert (`src/lib/server/questions/register.ts`). The statements are idempotent, and if the question tables are missing the plain insert still runs, so generation never breaks. Rows stored before this existed are registered once by `scripts/question-register-pool.ts` (dry-run chunks from an item_cache export, expected file name in its header).
