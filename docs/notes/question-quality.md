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
