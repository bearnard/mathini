# Serving questions from D1: design and migration plan

- **Status:** proposal for owner review. **No code in this document's branch.**
- **Date:** 2026-11-15
- **Closes:** ADR 0003 Phase 1a, last item: *"the owner can fix a reported question in minutes without a deploy."*
- **Builds on:** [question-ids.md](question-ids.md) (migration 0008, stable ids and versions), [question-reports.md](question-reports.md)
  (migrations 0009 and 0010, reports, retire, item analysis), [spaced-review.md](spaced-review.md), [question-quality.md](question-quality.md).
- **Goal (as for every phase):** help learners prepare for tests and exams and retain what they learn. A wrong key or a typo in a
  question teaches the wrong thing, so the fix has to reach learners fast and must never wipe out their review schedule.

## 1. Summary

1. **Serve the current approved version from D1** for every question that is registered there, through the endpoint the client
   already calls (`/api/caps/<subject>?task=`), with the code bank and `item_cache` as fallbacks. Gate it with a flag stored in D1
   so it can be switched off in seconds without a deploy.
2. **Spaced review resolves its cards on the server** from `questions` + the current version, not from the code banks in the
   browser. This is the change that makes editing a question that is in someone's review safe (it is gotcha 1 in `question-ids.md`).
3. **Code banks stop being the source of truth for questions that already exist in D1.** They stay the authoring path for NEW
   questions and the offline fallback. A one-way, careful **sync** (code to D1) updates only versions that were written by the
   seed, and **never overwrites a human edit**. Conflicts go to a report, not to a silent winner.
4. **Admin edit flow:** `POST /api/admin/questions/[id]/edit` runs the quality validator, writes the next version and the audit
   row in one batch, closes the open reports, and is live for the next fetch (seconds to a minute).
5. **Migration within the free D1 budget:** about **190,000 to 230,000 rows to write in total** (indexes count), so about **six
   nights at 40,000 rows a night**, always under the 60,000 a day ceiling, with a backup before every phase and a stop rule.
   Hitting the free plan's 100,000 a day hard limit would stop the whole app from querying D1, so the budget is the main risk.

## 2. Where we are (verified in the repo)

| Fact | Where |
|---|---|
| Three kinds of question content. (a) **Curated banks** in code, all grades, bundled in the app. (b) **AI pool**, about 17,000 rows in `item_cache`. (c) Items that cannot be plain rows: label items with a React `Diagram`, and the Grade 5 maths **generators**. | ADR 0003 Context; `scripts/gen-question-seed.ts` |
| `/api/caps/[subject]?task=&count=` returns rows from `item_cache` only (`fetchPoolItems`: unscored or `quality_score > 0`, clean first, random). `useCapsItems` falls back to the bank if the pool is empty, and tops a short pool up from the bank (`topUpFromBank`). | `poolStore.ts`, `useCapsItems.ts` |
| `questions` / `question_versions` exist (0008). **Serving does not read them.** `attempts` and reports already record the canonical id and version. | `store.ts` (`identifyAttempt`, `resolveQuestion`), `question-ids.md` |
| `createVersion` (atomic next version + pointer move, refuses stale/retired/colliding edits) exists but **no route calls it**. | `store.ts:130` |
| The curated seed covers **Grade 6 only** (1,203 questions, generated from `reviewBanks.ts`) and is `INSERT OR IGNORE`: re-running it **never changes an existing version**. If it was applied to production, production holds the wording from that day, and about 1,000 bank edits have been made since. Whether it was applied is not recorded in the repo: **to be checked**. | `0008_questions_curated.sql`, `sql.ts` |
| Review: the server sends due candidates (`qkey`, `task`) and resolves **only AI pool** text. Curated text is resolved **in the browser** by `makeQkey(prompt)` against the code banks. An edited prompt hashes to a different key, so the browser cannot find its own question. | `api/review/today/route.ts`, `question-ids.md` gotcha 1 |
| Retire works: pool rows get `quality_score = 0`, review excludes retired, curated questions are hidden by a public "retired prompts" list the browser fetches. | `moderation.ts`, `retired.ts` |
| `question_moderation.action` is `CHECK (action IN ('dismiss','retire','reinstate'))`. **An `edit` audit row cannot be written to it** without a new table. | `0009_question_reports.sql` |
| Cron runs daily at 03:00 UTC (top-up, item analysis). | `wrangler.jsonc`, `scheduled.ts` |

## 3. Decisions for the owner (recommendations first)

| # | Decision | Recommendation |
|---|---|---|
| D1 | Where does the truth live for a question that exists in D1? | **D1.** Code banks are seed + fallback (ADR 0003 section 3 already says so). |
| D2 | How do code edits reach D1? | One-way sync that only touches **seed-authored** versions; a human-authored version always wins and the clash is reported. |
| D3 | How do we edit existing questions from now on? | Through the admin form. Code is for NEW questions and bulk authoring. Rewording a prompt in code needs the rename map (section 4.4), otherwise it creates a new question. |
| D4 | Is a "wrong answer fixed" edit different from a typo fix? | **Yes.** The form asks. A meaning change resets the review box of learners who have it scheduled; a wording fix does not. |
| D5 | Serve curated questions from D1 for grades 7 to 12 too? | **Yes, after Grade 6 is proven.** Without it the owner cannot fix a reported question in those grades without a deploy. |
| D6 | Feature flag store | A row in a small D1 table, cached 30 s in the Worker, flipped from the admin page or one `wrangler` command. |

## 4. Target design

### 4.1 Serving

Keep the URL and the response shape (`{ items }`), add fields. Old browsers keep working and so does the deploy order.

```
GET /api/caps/<subject>?task=<task>&count=20[&section=<s>]
items[] = { id, prompt, options, answer, explanation, section,   // as today
            qid, vid, kind, extra }                              // new: canonical question id + version id
```

- **Selection**, when the flag allows this task:
  1. `SELECT id FROM questions WHERE task = ? AND status = 'active'` (uses `idx_questions_task_status`), **cached in the Worker for 60 s per task**.
  2. Pick `count` ids at random in JavaScript, preferring (a) teacher-verified later, (b) clean AI rows, with curated rows first when the topic has a curated bank. (Today the pool wins and the bank only tops up; the order within a topic is a product choice for the owner, default: **curated first, AI fills to `count`**.)
  3. `SELECT ... FROM questions q JOIN question_versions v ON v.id = q.current_version_id WHERE q.id IN (...) AND v.status = 'approved'` and, for AI rows, drop `item_cache.quality_score = 0` (the join through `legacy_item_id`).
- **Why this shape:** it costs about 40 rows read per fetch (20 questions, two tables) plus one id-list query a minute per busy task. A plain `ORDER BY RANDOM()` over a 300-question curated task would read about 900 rows a fetch and spend the 5 million reads a day in about 5,500 fetches.
- **Edits are live in at most 60 s**: the id list is cached, the content is read fresh by id on every fetch.
- **Fallbacks, in order:** D1 request fails or times out, the browser uses its code bank (exactly as now); task has no registered questions, the old `item_cache` path runs; flag off, the old path runs. A learner is never blocked by moderation (fails open, like `retired.ts`).
- **The client** keeps hashing the prompt only for items that did not come with `qid/vid`. Items from D1 report their `qid` and `vid` directly, which also saves the lookup in `/api/attempts`.
- **Topics in static mode** (a `bank` and no `task`/`apiPath`) cannot ask the server. Moving them is a one-line codemod per topic (`task` + `apiPath`), done by grade as it is seeded.

### 4.2 Spaced review

`/api/review/today` resolves **every** candidate from D1:

```
SELECT q.id, q.task, v.id AS vid, v.prompt, v.options, v.answer, v.explanation, v.extra, q.kind
FROM questions q JOIN question_versions v ON v.id = q.current_version_id
WHERE q.id IN (<= 30 candidate ids) AND q.status = 'active' AND v.status = 'approved'
```

- The browser no longer imports topic modules to find a card; it renders what the server sent. Candidates that are not in D1 (an unseeded bank) fall back to today's browser path, so nothing regresses mid-rollout.
- `review_items.qkey` is already the canonical id, so **an edit never moves or orphans a schedule**.
- **Meaning change (D4):** the edit route runs one bounded statement, `UPDATE review_items SET box = 1, due_day = <tomorrow> WHERE qkey = ? AND retired_at IS NULL`. Rows written = learners who have it scheduled (small in the pilot). If that ever gets large, switch to a lazy rule (compare `attempts.question_version_id` with the current version at scheduling time).
- Cards carry `vid`, so the attempt records exactly which wording was shown and item analysis (current version only) restarts cleanly after an edit.

### 4.3 Attempts and reports

Already done in 0008 to 0010 (canonical id, `question_version_id`, `chosen`, reports keyed by id and version). Two small changes: the client sends `qid/vid` when it has them; and an edit **closes the question's open reports** as `actioned` (one `UPDATE`).

### 4.4 Code banks: how they stay in sync, and where they stop being the truth

**Rule.** For a question registered in D1, the current version in D1 is what learners see. A code bank holds that question's *seed* wording. Sync moves code changes into D1 only while D1 still holds the seed's own version.

**Drift report (read-only, runs first, decides the work).** `scripts/question-sync.ts --report --remote` reads `questions` + current versions from production and classifies every bank question:

| Class | Meaning | Action |
|---|---|---|
| 1 identical | prompt, options, answer, explanation, extra all match | none |
| 2 edited, same prompt | same id (qkey), different options/answer/explanation. This is what **most** of today's ~1,000 fixes should be (wrong keys, distractors, explanations) | new version, `author = 'seed'`, pointer moved; the id and the schedule are untouched |
| 3 reworded prompt | the qkey changed, so it looks like a new question and the old one looks removed | match to the old question by (same task, same answer and option set) or, failing that, by prompt similarity >= 0.8 with a unique best match; anything ambiguous goes to a **human-checked rename map** `migrations/seeds/question-renames.json` (`oldQkey -> new prompt`). A matched rename becomes a version with the old id kept (the new qkey becomes an alias, which `question_versions.qkey` already supports). Unmatched = class 4 + 5. |
| 4 new in code | no such question in D1 | register as a new curated question |
| 5 gone from code | in D1, not in the bank | **keep active**, list for the owner (retire is an owner decision, never automatic) |
| 6 conflict | the current D1 version is human-authored (`author` is `owner` or an adult) **and** the code wording differs | **skip, report.** The human edit wins. The owner chooses: keep, or copy the code wording into an edit. |

- The report prints counts per class and per grade before anything is written. **We size the real work from it.** If class 3 is small, the rename map is tiny.
- **Apply** (`--apply`) writes only classes 2, 3 (matched) and 4, in chunks (section 5), through the same idempotent SQL builders in `sql.ts`.
- **Forward policy.** After cutover for a grade: new questions are authored in code and seeded; changes to existing questions are made in the admin form. If someone does reword a prompt in code, `questionSeed.test.ts` already fails until the seed is regenerated, and the regenerated seed plus the rename map is what tells sync it was a reword and not a new question. Add one guard test: a prompt present in the previous committed snapshot, absent now, with the same answer and options, and not in the rename map, fails the build.
- **Offline fallback** is unchanged: the bundle still ships the banks. It shows the seed wording, so after an admin edit an offline or failed-fetch learner can briefly see the old text. Accepted; the retired list still covers retirements.

### 4.5 Admin edit flow

`POST /api/admin/questions/[id]/edit` (new). Same protection as retire: `adminWrite` (Cloudflare Access + `X-Admin-Action: question-edit` + same-origin `Origin`), covered automatically by the guard-scan test.

Request: `{ expectedVersionId, prompt, options[], answer, explanation, sourceNote, changeKind: 'wording' | 'meaning', acknowledgeWarnings?: boolean }`.

1. **Validate.** Run `checkQuestion` (the same rules as the audit: answer in options, no length or list-count tell, no joke distractors, no answer in the prompt, explanation present). **Reject-level findings block the save** and are returned. Warn-level findings are returned and need `acknowledgeWarnings`. The same function runs in the browser as the owner types.
2. **Write**, in **one `db.batch`**: the next version (`author = 'owner'`, `status = 'approved'`, `source_note` required, 3 to 300 characters), the pointer move (existing `createVersion` logic, `stale`/`retired`/`qkey_collision` handled), and the audit row. `createVersion` is extended to accept extra statements so the audit cannot be missed.
3. **After the batch:** `UPDATE question_reports ... status = 'actioned'` for this question; if `changeKind = 'meaning'`, the bounded review reset (4.2); if `legacy_item_id` is set, keep `item_cache` untouched (it is intake only after cutover; serving reads `question_versions`).
4. **Audit** goes in a **new table `question_edits`** (migration 0011): id, question_id, from_version_id, to_version_id, change_kind, reason, admin_email, validator findings (JSON), created_at. (`question_moderation` cannot hold it because of its `CHECK` on `action`; rebuilding that table is not worth it.)
5. **UI** (extend `/admin/questions`): "Edit" next to a reported question. Prefilled form, a before/after diff, the validator result live, an "as a learner sees it" preview, and the `wording` / `meaning` choice with one line of help for each.
6. **Undo:** "Restore version N" writes a **new** version that copies N (history stays linear, nothing is deleted) and is audited as a restore.
7. **Scope of v1:** multiple-choice questions only. Order, label and explain items, and anything with `extra.diagram`, stay in code (they cannot be serialised, `question-ids.md` gotcha 5); the form edits their explanation text only.
8. **Later (ADR 0003 Phase 1b):** teachers' proposals use the same route with version `status = 'proposed'`, which serving already excludes (`v.status = 'approved'`), and approval is the pointer move.

### 4.6 What stays in code

Grade 5 maths **generators** (answers are computed, not stored), label items with diagrams, mock-test assembly logic, and the lesson slides. Lessons are not questions and keep their normal code review.

## 5. Migration plan within the free D1 budget

### 5.1 The budget

- Free plan: **100,000 rows written and 5,000,000 rows read per day, 5 GB total** ([Cloudflare D1 pricing](https://developers.cloudflare.com/d1/platform/pricing/)). Indexes count as rows written. **Past the daily write limit queries stop working**, so that would take the app down, not just the migration.
- **Self-imposed ceiling: 60,000 rows written a day**, of which the migration may use **40,000** and live traffic and the cron keep the rest. (The live baseline is **unknown and must be measured first**: see section 9.)

### 5.2 What each registration costs

From `sql.ts` (three statements per question) and the indexes in 0008:

| Write | Rows written |
|---|---|
| `questions` row + its primary-key index + `idx_questions_task_status` | 3 |
| plus `idx_questions_legacy_item` (AI rows only) | +1 |
| `question_versions` row + `idx_question_versions_qkey` + the `(question_id, version_no)` unique index | 3 |
| pointer `UPDATE questions SET current_version_id` | 1 |
| **Curated question** | **7** |
| **AI pool question** | **8** |

### 5.3 What has to be written

| Block | Count | Rows (x7 or x8) |
|---|---|---|
| Grade 6 curated (seed exists) | 1,203 | about 8,400 |
| Sync of today's edits (classes 2 to 4), **upper bound** | at most about 1,000 | at most about 5,000 (a new version is 3 + 1 rows) |
| Grades 5, 7 to 12 curated | at least about 6,200 `answer:` lines counted in the code; **likely 6,000 to 12,000** (Grade 6 has 1,203 questions but only about 630 `answer:` lines, so this is an undercount) | 43,000 to 84,000 |
| AI pool (`item_cache`) | about 17,000 | about 136,000 |
| **Total** | | **about 190,000 to 230,000** |

AI rows do **not** need eager registration to start serving: they are registered lazily at first attempt (`ensureQuestionForItem`), and serving falls back to `item_cache` for a task until it is fully registered. They are registered by a nightly drip so editing a reported pool question is always possible.

### 5.4 Schedule (about six nights; every step has a stop rule)

| Night | Step | Rows | Notes |
|---|---|---|---|
| **0** | Backup, drift report, schema | about 0 | 4 additive tables (0011, section 5.5). Read-only report. No data written. |
| **1** | Grade 6 curated: apply the **regenerated** seed (or only the diff if production already has v1) + sync classes 2 to 4 | about 13,000 | Flag on for **Grade 6 only**, behind a 1-learner-per-class pilot (Bay Primary). Watch two days. |
| **2** | Grades 7 to 9 curated seed | up to about 40,000 | In chunks of at most 1,000 questions (about 7,000 rows). |
| **3** | Grades 10 to 12 and 5 curated seed | up to about 40,000 | Same chunks. Flag on per grade after its checks pass. |
| **4 to 6** | AI pool drip, Grade 6 tasks first: **about 4,000 questions a night** (about 32,000 rows) via the existing 03:00 cron | about 32,000 a night | The cron stops itself at the night's cap. |

- **Chunks** are SQL files of at most 1,000 questions (~7,000 rows). The script prints the expected rows for each chunk and the running total for the day before it runs anything.
- **Stop rule:** before each chunk, read the day's rows written (`wrangler d1 insights preppals`, marked experimental, or the dashboard Metrics tab); **do not start a chunk if today's total plus the chunk exceeds 55,000**. Each `wrangler d1 execute --json` result carries `meta.rows_written`, and the script adds them up and stops at the cap.
- **Never run two heavy things the same night** (migration and a quality backfill, for example): `backfill-quality.ts` rewrites many `item_cache` rows.
- Production schema and seeds are applied with `wrangler d1 execute --remote --file` (never `migrations apply`), as the earlier runbooks say.

### 5.5 New schema (migration 0011, additive, about 0 rows)

```sql
CREATE TABLE IF NOT EXISTS serving_flags (key TEXT PRIMARY KEY, value TEXT NOT NULL, updated_at INTEGER NOT NULL);
  -- 'serve_from_d1' = {"grades":[6],"tasks":[],"exclude":[]}; read per request, cached 30 s in the Worker
CREATE TABLE IF NOT EXISTS question_edits (
  id INTEGER PRIMARY KEY AUTOINCREMENT, question_id TEXT NOT NULL, from_version_id INTEGER, to_version_id INTEGER NOT NULL,
  change_kind TEXT NOT NULL CHECK (change_kind IN ('wording','meaning','restore','sync')),
  reason TEXT NOT NULL, admin_email TEXT NOT NULL, findings TEXT, created_at INTEGER NOT NULL);
CREATE INDEX IF NOT EXISTS idx_question_edits_question ON question_edits (question_id, created_at);
CREATE TABLE IF NOT EXISTS migration_ledger (id INTEGER PRIMARY KEY AUTOINCREMENT, step TEXT NOT NULL, rows_written INTEGER NOT NULL, ran_at INTEGER NOT NULL, note TEXT);
```

`migration_ledger` is the running record of what each night wrote, so the cap check does not depend on remembering.

### 5.6 Backups first

1. Before Night 0: `npx wrangler d1 export preppals --remote --output ~/Source/private/mathini/backups/preppals-<date>.sql` (the owner's backups folder, outside the repo; the export contains learners' data, so it never goes into git). Check the file's size and that it contains `questions`, `review_items`, `attempts`.
2. Before **each** night: note the D1 Time Travel bookmark (`wrangler d1 time-travel info preppals`) in `migration_ledger.note`. Time Travel retention differs by plan and **must be confirmed on the D1 limits page before relying on it**; the export file is the backup we rely on.
3. A full export is a point-in-time copy. **Do not restore it over live data** unless the schema is damaged: it would erase learners' attempts since then. Repairs are done by pointer moves (versions are append-only).

## 6. Build order (each step shippable and reversible)

| Step | What | Done when |
|---|---|---|
| S0 | Drift report script + owner runs it (Night 0). Size classes 2, 3, 6. | Counts per class and grade are in the report. |
| S1 | Migration 0011; extend `createVersion` (extra statements); `POST .../edit` + validator + audit + form; restore. **No serving change yet.** | The owner can edit a Grade 6 curated or pool question; the new version is recorded, reports closed, audit row present. |
| S2 | Serving from D1 behind the flag (4.1); review resolved on the server (4.2); client uses `qid/vid`. Grade 6, pilot class. | An edit shows to a learner within 60 s; a scheduled question edited mid-review still appears and keeps its box; flag off restores the old behaviour. |
| S3 | Sync (apply) + rename map + guard test (4.4). | Today's edits are live in D1; class 6 conflicts are zero or listed. |
| S4 | Grades 7 to 12 and 5 curated seeds; topic codemod to `task` + `apiPath`; AI pool drip. | All grades editable from admin; pool registration complete; `item_cache` is intake only. |
| S5 | Cutover review: remove the "retired prompts" client filter for questions served from D1 (keep it for fallback). | Owner sign-off. |

## 7. Risks

| Risk | Impact | Mitigation |
|---|---|---|
| Daily write limit (100,000) hit | **App stops querying D1 until the next UTC day** | 40,000 migration cap, 55,000 stop rule, chunking, `migration_ledger`, no overlap with backfills |
| Daily read limit (5M) | Same | id-list cache (about 40 rows per fetch), measure after S2 |
| Code and D1 drift | Learners see a different wording than the code reviewed | classes 1 to 6, nightly read-only report, human edit wins, guard test |
| **Silent overwrite of a human edit by a later seed** | An owner fix is undone | Seeds already never overwrite; sync only touches seed-authored current versions; conflicts reported |
| A reworded prompt in code looks like a new question | Duplicate question, orphaned schedule | rename map + guard test; classes 3 and 5 reported |
| D1 slow or down | Practice stalls | 3 s timeout (as `retired.ts`), bank fallback, flag off |
| Meaning edit resets many learners | Write burst | bounded `UPDATE`, only learners who have the question; lazy rule if large |
| Wrong edit by the owner | Learners see a wrong key | validator on save, preview, restore button, item analysis restarts on the new version |
| Qkey collision race (`question-ids.md` gotcha 7) | Two edits claim one alias | owner-only edits for now; add a unique alias table before teachers can edit |
| Old tabs/bundles running old client code | Mixed behaviour during rollout | response shape is additive; both client paths stay until S5 |
| Items D1 cannot render (diagrams, generators) | Missing from serving | they stay in code, served from the bundle |
| Learner notes in reports | Children's free text | unchanged: admin-only, never in public views |

## 8. Rollback

- **Serving:** set `serve_from_d1` to `{"grades":[],"tasks":[]}` (a one-line `wrangler d1 execute` or the admin button). Within 30 s every request is served as it is today. No deploy.
- **Per task or grade:** use `exclude` in the same flag.
- **Review:** the browser path for curated cards is kept until S5, selected by the same flag.
- **Code:** every step only adds tables, columns and routes, so reverting the deploy is safe at any time.
- **Data:** versions are append-only. A bad edit is undone by "Restore version N". A bad sync is undone by restoring the previous seed-authored version (the sync records `change_kind = 'sync'` rows in `question_edits`, so each can be reversed). Dropping the new tables is safe only before the first real edit; after that the versions are the only copy of the edited wording (same rule as `question-ids.md`).
- **Worst case:** restore the export taken before the night in question, **only** if the schema is damaged, and expect to lose learners' attempts since then.

## 9. Things to check before building (cheap, read-only)

1. **Was `0008_questions_curated.sql` applied to production, and when?** `SELECT source, COUNT(*) FROM questions GROUP BY source;` (runbook in `question-ids.md`). It decides whether Night 1 is a full seed or a diff.
2. **Run the drift report (S0).** The real numbers for classes 2, 3 and 6 replace the guesses in section 5.3.
3. **Measure the live write and read rate** (D1 insights or the dashboard) for a normal school day and a busy one. It sets the real migration cap; 40,000 is a guess against an unknown baseline.
4. **Confirm Time Travel retention** for the free plan on the D1 limits page.
5. **Count the curated questions per grade properly** (the `answer:` grep undercounts); use the same registry approach as `gen-question-seed.ts` extended to all grades.

## 10. Questions for the owner

1. Curated first, or AI first, in topics that have both? (4.1, default: curated first.)
2. Is it acceptable that an offline learner briefly sees the old wording after an edit? (4.4)
3. For a "meaning" edit, reset review boxes for learners who have it scheduled? (4.2, default: yes.)
4. Are you happy with the pilot order (Grade 6, Bay Primary class, then 7 to 12), or should another grade go first?
5. Is the 60,000 a day ceiling the number you want, or should the migration go slower and stay further from the limit?
