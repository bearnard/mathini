# Question quality pipeline (ADR 0003 section 1a)

From the 2026-11 question audit (`audit/question-quality.md`). Goal: practice that prepares learners for exams, so a question that
gives its answer away, has a wrong key or wanders off topic must never be served or stored.

## What it is

| Piece | File |
|---|---|
| The checks (ONE pure module) | `src/lib/shared/questionQuality.ts` (`checkQuestion`, `checkBatch`, `acceptItems`) |
| Generator rules (7) added to every subject preamble | `src/lib/server/caps/qualityRules.ts`, applied in `caps/registry.ts` |
| Insert-time gate | `src/lib/server/topUp.ts` (cron / scheduled), `scripts/seed-questions.ts`, `gemini.ts persistItems`; `src/insertGuard.test.ts` fails if a new insert path skips the validator |
| Stored score | `item_cache.quality_score` / `quality_flags` (migration `0007_item_quality.sql`) |
| Serving | `src/lib/server/poolStore.ts` used by `/api/caps/grade6`, `/api/caps/[subject]`, `/api/revision` |
| Short pool -> curated bank | `src/lib/shared/topUpFromBank.ts`, used by all five practice hooks |
| Weekly job | `src/worker.ts` (custom Worker entry, `scheduled()`) -> `src/lib/server/scheduled.ts` -> `topUp.ts` |
| Backfill | `scripts/backfill-quality.ts` |
| Purge / refill planner | `scripts/pool-maintenance.ts` (+ `src/lib/server/poolMaintenance.ts`) |
| Task index (slug -> subject code, grade) | `src/lib/server/caps/taskIndex.generated.ts` (`scripts/build-task-index.ts`) |
| Curated banks | ratchet test `src/curatedBanks.quality.test.ts`, baseline `src/test-support/curatedBaseline.json` |

## Scores

- **0** = rejected (a defect: wrong or missing key, duplicate options, strong length tell, filler distractor, answer in the prompt, missing or
  scratchpad explanation, explanation that lands on another option or says the key is wrong, near-duplicate). Never stored by the generators; never
  served.
- **1-79** = warn (a weakness: the key is the longest option, list-count tell, absolutes cue, numeric word problem outside maths, place-name wrapper,
  "a student says" frame, all/none of the above). Served, but only after clean rows.
- **80-100** = clean. **NULL** = not scored yet; served exactly as before (this is what makes the rollout safe).

Strong length tell = the key is at least 1.4x the next longest option and at least 10 characters longer.

## Production runbook (the owner runs these; agents never do)

Order matters (apply migrations with `d1 execute --file`, never `d1 migrations apply`, see step 1): **migration first** (the new code reads the new columns), then **backfill**, then **deploy**. The old code ignores the new columns, so the
migration alone changes nothing for learners.

```bash
cd ~/Source/private/mathini/mathini   # main, after the merge
DB=46f7b6a0-c555-4168-ae45-681dba2ceec2

# 0. backup (read only)
npx wrangler d1 export preppals --remote --output ~/Source/private/mathini/backups/preppals_before_0007_$(date +%F).sql

# 1. migration 0007 (additive: two columns, an index, and a small pool_tasks table seeded from the tasks that have rows)
#    Production has NO d1_migrations table (every migration so far was applied by hand), so do NOT use `wrangler d1 migrations apply`:
#    it would try to replay 0001-0006 and fail part-way. Apply the one file directly. It is NOT idempotent (ALTER TABLE ADD COLUMN),
#    so run it exactly once; if it errors part-way, look at what exists (pragma_table_info) before retrying.
npx wrangler d1 execute preppals --remote --file migrations/0007_item_quality.sql
```
Check after step 1 (all three should look like this):
```bash
npx wrangler d1 execute preppals --remote --command "SELECT name FROM pragma_table_info('item_cache') WHERE name LIKE 'quality%'"      # quality_score, quality_flags
npx wrangler d1 execute preppals --remote --command "SELECT COUNT(*) AS pools FROM pool_tasks"                                     # about 860 (one per task that has rows)
npx wrangler d1 execute preppals --remote --command "SELECT COUNT(*) AS n, SUM(quality_score IS NULL) AS unscored FROM item_cache"   # n = 16,884, unscored = n
```

```bash
# 2. backfill. Dry run first: reads production (SELECT only) and writes SQL files, changes nothing.
node --import tsx scripts/backfill-quality.ts --source remote --out ~/Source/private/mathini/backups/quality-backfill
cat ~/Source/private/mathini/backups/quality-backfill/summary.json   # expect roughly: clean 51%, warn 26%, rejected 22% (see the audit)
# apply
node --import tsx scripts/backfill-quality.ts --source remote --out ~/Source/private/mathini/backups/quality-backfill \
     --apply --remote --confirm-prod=$DB
```
Check after step 2:
```bash
npx wrangler d1 execute preppals --remote --command "SELECT SUM(quality_score IS NULL) AS unscored FROM item_cache"                  # 0
npx wrangler d1 execute preppals --remote --command "SELECT CASE WHEN quality_score = 0 THEN 'rejected' WHEN quality_score >= 80 THEN 'clean' ELSE 'warn' END AS band, COUNT(*) AS n FROM item_cache GROUP BY band"
```
Note what step 3 does: the rejected rows (about a fifth of the pool) stop being served. Pools that fall below 10 questions are topped up from the
curated bank (only bank questions that pass the validator). `/api/review/today` is unchanged; a rejected question simply stops coming due.

```bash
# 3. deploy with the new Worker entry (wrangler.jsonc "main" is now src/worker.ts)
npm run deploy
```
Check after step 3:
- the deploy output shows the trigger `schedule: 0 3 * * SUN` and the bindings DB, QUESTIONS_IDX, AUDIO, ASSETS;
- `curl 'https://scholar.hibbins.org/api/caps/grade6?task=<a task with rejected rows>&count=40'` returns items and none of the prompts of the rows with
  `quality_score = 0` (`SELECT prompt FROM item_cache WHERE task='<task>' AND quality_score = 0`);
- the site loads as before (`/`, `/app`, a practice topic);
- the manual top-up: `curl 'https://scholar.hibbins.org/api/cron/top-up?secret=<CRON_SECRET>'` returns `{ok:true, poolsBelowTarget, accepted, rejected, ops, ...}`;
- the scheduled path itself runs at Sunday 03:00 UTC (05:00 SAST). Open Workers Logs (observability is on) and look for ONE line:
  `scheduled: top-up stored N, rejected M, pools below target P, api calls A, ops O; events purged E`. It was proven locally with
  `wrangler dev --test-scheduled` and a `wrangler deploy --dry-run` bundle.

### Limits of the weekly job

Each run is bounded: at most 8 pools, 60 stored questions, 200 generate/embed calls and **45 external operations of any kind** (every Gemini, embedding,
Vectorize and D1 call), which fits the free plan (50 subrequests and D1 queries per invocation). On a paid plan set Worker variables to raise it:
`TOPUP_MAX_OPS` (up to about 900), `TOPUP_MAX_ACCEPTED`, `TOPUP_MAX_API_CALLS`. The weekly job therefore keeps small gaps filled. A bulk refill after a
purge uses the seed script (below) or the manual route with `?maxOps=900&maxAccepted=400&maxTasks=40` (paid plan).
Without `GEMINI_API_KEY` the top-up is a no-op; the events retention purge still runs.

### Purge and refill (optional, when you decide)

```bash
# dry run: reads production (SELECT only), prints per pool what would be deleted / left / regenerated, writes plan.json
node --import tsx scripts/pool-maintenance.ts --triage ~/Source/private/mathini/audit/task-triage.csv --actions purge \
     --source remote --out ~/Source/private/mathini/backups/pool-maintenance
# apply: backs the rows up to JSON first (aborts if that fails), deletes, enables the pools in pool_tasks, deletes their Vectorize vectors
node --import tsx scripts/pool-maintenance.ts --triage ~/Source/private/mathini/audit/task-triage.csv --actions purge \
     --source remote --out ~/Source/private/mathini/backups/pool-maintenance --apply --remote --confirm-prod=$DB
```
Without `--apply` nothing changes. `--remote` or `--confirm-prod` without `--apply` is refused, and `--apply --remote` without the exact database id is
refused. The vectors matter: if they stay in the index, regenerated questions on the same concept are rejected as duplicates of deleted ones.

Refill: for pools purged to zero, `npx tsx scripts/seed-questions.ts --grade <N> --sync` marks them "phantom-done -> failed" and the next
`npx tsx scripts/seed-questions.ts --grade <N>` regenerates them, now through the quality gate (needs `GEMINI_API_KEY`, `CF_ACCOUNT_ID`, `CF_API_TOKEN`;
migration 0007 must already be applied or its INSERT fails). Partly pruned pools are refilled by the weekly job or the manual route.
Deleting an item_cache row leaves its learners' review schedules pointing at a question that no longer exists; the review screen retires those on its own.

### Grade 6 purge + refill plan (reviewed and run by the owner)

Artifacts in `audit/g6-pools/`: `plan.txt` (per pool: rows, delete, left, servable, vectors, generate), `plan/plan.json`, `g6-triage.csv`,
`g6-rejected-ids.txt`, `refill-purge-slugs.txt`, `refill-fix-slugs.txt`. The dry run below produced them from the audit export scored with the same
validator the production backfill used (so it excludes the 52 deleted hard-error rows). Vector ids in that plan are the deterministic recipe
(`base64url("task|prompt").slice(0,64)`); the exact counts come from running the same dry run with `--source remote` (read only).

```bash
cd ~/Source/private/mathini/mathini && A=~/Source/private/mathini/audit/g6-pools
# 1. exact numbers from production (SELECT only, changes nothing)
node --import tsx scripts/pool-maintenance.ts --triage $A/g6-triage.csv --actions purge,fix --ids $A/g6-rejected-ids.txt \
     --source remote --target 50 --out ~/Source/private/mathini/backups/g6-pools
# 2. apply: backup JSON first (aborts if it fails), delete, enable the pools in pool_tasks, delete their Vectorize vectors
node --import tsx scripts/pool-maintenance.ts --triage $A/g6-triage.csv --actions purge,fix --ids $A/g6-rejected-ids.txt \
     --source remote --target 50 --out ~/Source/private/mathini/backups/g6-pools --apply --remote --confirm-prod=46f7b6a0-c555-4168-ae45-681dba2ceec2
# 3. refill through the quality gate. Needs GEMINI_API_KEY, CF_ACCOUNT_ID, CF_API_TOKEN. --slugs names the pools explicitly (the seed script's
#    component scan cannot see the Grade 6 History/Geography/NST shells), so nothing else is seeded.
export GEMINI_API_KEY=... CF_ACCOUNT_ID=... CF_API_TOKEN=...
npx tsx scripts/seed-questions.ts --grade 6 --slugs "$(cat $A/refill-purge-slugs.txt)"   # the 8 emptied pools, 400 questions
npx tsx scripts/seed-questions.ts --grade 6 --slugs "$(cat $A/refill-fix-slugs.txt)"     # 62 pools short by 15 or more, about 1,540 questions
# 4. the other 44 pools are short by fewer than 15 (about 430 questions): the weekly job or GET /api/cron/top-up?secret=...&maxOps=900&maxAccepted=400 (paid plan)
```
Check: `SELECT task, COUNT(*) AS servable FROM item_cache WHERE task IN (<slugs>) AND (quality_score IS NULL OR quality_score > 0) GROUP BY task`;
every refilled row has a score (`quality_score IS NOT NULL`) because the seed script scores at insert. While a purged pool is empty, learners get the
curated bank (the five hooks fall back to it), so run steps 2 and 3 in the same sitting. `--slugs` may re-run safely (INSERT OR IGNORE; Vectorize dedup).

### The seed script is now safe to leave running (fix/seed-robust, after refill run 1 failed on 2026-11-14)

`scripts/seed-questions.ts` (via `scripts/seed.sh`, which sources `scripts/load-secrets.sh`) now:
- **Auth:** refreshes the wrangler OAuth token before reading it (`wrangler whoami`), before the run, every 30 minutes, and on the first 401/403 (re-reads
  the config, retries once). A cheap D1 `SELECT 1` runs BEFORE any Gemini quota is spent. Still unauthorised, or a token you exported yourself
  (`CF_API_TOKEN`, not refreshable) -> **abort with exit code 3** and a clear message; nothing is inserted after an auth failure.
- **Gemini:** retries 429 / 5xx / network errors up to 4 times (embeddings 5) with exponential backoff and jitter (15s, 30s, 60s +/-30%), the RPM limiter
  still runs before every attempt and a 429 waits the full window. Out of attempts -> the batch's tasks are marked failed for a later run.
- **Summary:** per task and grand total for THIS run only (generated, validator-rejected, deduped, not checked, inserted, errors); the progress-file
  totals are printed on a separate line labelled "NOT this run".
- **Dedup:** a Vectorize query that fails (not auth) is retried, then the row is SKIPPED and counted "not checked", never inserted. Why not fall back to the
  near-duplicate text check against D1? It only sees reworded copies by word overlap, not paraphrases, so it would quietly weaken the duplicate guarantee,
  which is what hid this failure; rows are cheap to regenerate, a polluted pool and index are not. Three unchecked rows in a row stop the task (Vectorize is
  down), five insert errors in a row stop it too; stopped tasks are marked failed for the next run.
Not verified here: that `wrangler whoami` refreshes a really expired token (it is wrangler's documented behaviour; the code treats a failed refresh as an abort).

### The decimal-comma rule (maths-type pools)

South African CAPS writes decimals with a comma (3,5 km; R18,50) and times with a colon (14:30). `questionQuality` has a `decimal_point` reason
(a digit, a full stop, a digit anywhere in the prompt, options, answer or explanation; times like 14.30 are caught the same way). Whether it applies, and how
hard, is decided by `src/lib/server/caps/formatPolicy.ts`, never by the validator itself:

| Where | Policy |
|---|---|
| Grade 6 maths tasks (`gr6-*`, code grade6) | **reject**: never stored, never served (the Grade 6 lessons and banks are converted) |
| Maths and Mathematical Literacy of Grades 7-12 (codes math, ml) | **warn**: served after clean rows (their lessons are not converted yet; hiding them would gut those pools) |
| IT, CAT (code, versions, IP addresses), sciences (LaTeX), accounting, languages, Grade 6 non-maths | not checked |

The same policy runs at insert time (top-up/scheduled, seed script) and in the backfill. The generators are told the same thing: the Grade 6 preamble requires
the comma, a space for thousands and a colon for times. Grades 7-12 are NOT told (their maths is LaTeX, where `$3,5$` renders with a stray space).

Targeted backfill (touches only the rows the rule can change; re-scores each with the FULL validator so nothing else shifts):
```bash
# dry run: reads production (SELECT only), prints counts per grade first, writes ONE SQL file, changes nothing
node --import tsx scripts/backfill-quality.ts --only decimal-point --source remote --out ~/Source/private/mathini/backups/decimal-rule
# apply (the owner)
node --import tsx scripts/backfill-quality.ts --only decimal-point --source remote --out ~/Source/private/mathini/backups/decimal-rule \
     --apply --remote --confirm-prod=46f7b6a0-c555-4168-ae45-681dba2ceec2
```
Check after: `SELECT COUNT(*) FROM item_cache WHERE task LIKE 'gr6-%' AND (quality_score IS NULL OR quality_score > 0) AND (prompt GLOB '*[0-9].[0-9]*' OR options GLOB '*[0-9].[0-9]*' OR answer GLOB '*[0-9].[0-9]*' OR explanation GLOB '*[0-9].[0-9]*')` should be 0.
After applying, refill the two emptied Grade 6 decimal pools right away (`seed.sh --grade 6 --slugs gr6-decimal-fractions-t2,gr6-decimal-place-value-t1`); until then learners
get the few remaining pool rows plus the curated bank.

### Rollback

Re-deploy the previous build (`wrangler rollback`). The migration is additive and can stay: old code ignores the columns. To undo a backfill:
`UPDATE item_cache SET quality_score = NULL, quality_flags = NULL;` (everything is then served as before).

## Curated banks (not changed here)

The curated `bank` arrays fail the validator too (2,123 strong length tells outside Grade 6, 53 in Grade 6 NST/History/Geography, plus a few explanations
missing), and **the curated banks of grades 7-12 largely duplicate the AI pool** (the same questions were saved as seeds): Grade 7 568 of 664, Grade 8
852 of 948, Grade 9 996 of 1,224, Grade 10 330 of 330, Grade 11 1,964 of 1,976, Grade 12 232 of 344; Grade 6: 535 of 1,169. Fixing them once, at the
source, fixes both. `src/curatedBanks.quality.test.ts` is a ratchet: a reject-level count may only go down (fix questions, then run
`node --import tsx scripts/curated-quality-baseline.ts`). Editing only a question's options/answer keeps its qkey (the key is task + prompt), so
review schedules survive such fixes; changing a prompt does not.

## Curated banks, Grades 7-12: needs prompt change (after stable IDs)

The Grades 7-12 curated bank repair (branch `fix/curated-g7-12`) changes options, answers and (rarely) explanations only, because a
prompt edit changes the qkey and orphans spaced-review schedules. These items cannot be fixed without a prompt change; revisit them
once stable question IDs exist.

- Grade 9 Geography, "What percentage of South African development involves healthcare?": the key lists healthcare programmes and
  gives no percentage. The prompt needs to ask "What does healthcare in development include?".
- Grade 9 Technology, "What is IDMEC in the context of accessible design?": not a recognised accessibility term; the key looks
  invented. Replace with "What is universal design?" (or drop it).
- Grade 9 (several subjects): stems that are truncated fragments ("A scale is...", "Alignment in dance means...").
- Grade 9 Afrikaans: the 12 identical placeholders ("How should you approach this skill?" and "What supports learning?") were
  deleted outright (not Afrikaans content; nothing depended on them).
- Grade 8 Technology, "An AND gate gives output 1 only when..." / "An OR gate gives output 1 when...": the validator flags them as
  near-duplicates (same 80% of words, they differ only in the gate name). They are different questions; either reword the stems
  or teach the validator that a differing logic-gate name makes them distinct. Held by NEEDS_PROMPT_CHANGE in curatedBanks.quality.test.ts.

## Retired questions are never rescored or purged

Moderation (report-a-problem queue) retires a question by setting `questions.status = 'retired'` and `item_cache.quality_score = 0`, and keeps
the score it had in `question_moderation.detail` so a reinstate restores it. A full `backfill-quality` run that rescored by id would overwrite
that 0 and serve the retired question again; a `pool-maintenance` purge/fix would delete the row a reinstate needs. Both scripts therefore read
`SELECT legacy_item_id FROM questions WHERE status = 'retired'` first and skip those rows (they still count as existing questions for the
near-duplicate check). With an exported `--source file:` there is no questions table, so nothing is skipped (a warning says so).
