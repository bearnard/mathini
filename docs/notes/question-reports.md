# Question reports and the moderation queue: maintainer notes

ADR 0003 section 4 (phase 1a-C1). Migration `0009_question_reports.sql`. Builds on [question-ids.md](question-ids.md).

## What exists

- **Learner side**: `<ReportProblem>` (`src/components/items/ReportProblem.tsx`) under every question in practice (`PracticeRunner`, `CapsSubjectTopic`, the Grade 6 NST/Geo/His/Afrikaans shells), the NST mock tests and Today's review. `reportProblemPlacement.test.ts` fails if a shell stops rendering it, so **a new shell must render it** (with `key=` per question).
- `POST /api/questions/report` (session cookie required): reasons are fixed (`src/lib/shared/questionReport.ts`), note <= 200 chars (control chars stripped), D1-based rate limit (10 per hour, 30 per day per learner), only `student_id` stored. The question is identified exactly like an attempt (`identifyAttempt`): canonical id + version shown. A question not registered in D1 is keyed by its qkey and keeps a <= 300 char `prompt_snapshot` (unverified, shown escaped and labelled).
- **Admin**: `/admin/questions` (nav link "Questions") and `GET /api/admin/questions/reports` (never cached: children's notes). Ranked by distinct reporters, then attempts, then newest. Shows the current version (prompt, options, key, explanation, source), reasons, notes, and answers / % correct from `attempts`. Learner ids are NOT in the response.
- **Actions** (`POST /api/admin/questions/[id]/{dismiss,retire,reinstate}`, `{ "reason": "..." }` 3-300 chars): `adminWrite` = Access guard + `X-Admin-Action: question-<action>` + same-origin `Origin`, like Delete learner. The guard-scan test covers the routes automatically. Every decision is logged in `question_moderation` (admin email, reason, version).
- **Retire really stops serving**:
  - AI pool row: `questions.status='retired'` and `item_cache.quality_score=0`, `quality_flags` gets `retired` first. The previous score/flags are kept in `question_moderation.detail`, so **reinstate restores them exactly**. `poolStore` never serves score 0.
  - Review: `/api/review/today` excludes retired questions (history untouched).
  - Curated (served from the app bundle): `GET /api/questions/retired` returns `{prompts:[...]}` (hashes of the wording of EVERY version of each retired question, public, cached 5 min). `src/lib/client/retired.ts` loads it once per session (App.tsx), keeps it in sessionStorage, and `dropRetired()` is applied in `useCapsItems`, `useNstItems`, `useAfrikaansItems`, `itemKinds.prepareItems` (Geo/His) and `buildMockTest`. **Fails open**: if the list cannot be loaded nothing is hidden.
- `deleteLearner` also deletes that learner's reports and counts them in the audit row.
- Mock-test topic groups now carry their task slug (`TopicBank.task`), needed to identify a reported question.

## Gotchas

1. A curated question retired in D1 disappears on the learner's NEXT page load / practice run (not mid-session). The curated filter is by WORDING (task-independent), so identical wording in two topics is hidden in both.
2. Only registered questions can be retired: Grade 6 curated (seeded) and AI pool rows. Questions from unseeded banks (other grades) can be reported (snapshot) and dismissed, not retired.
3. **Re-running the full quality backfill (`scripts/backfill-quality.ts` without `--only`) rescoring every row would overwrite `quality_score=0` of retired pool rows.** Either skip retired ids or reinstate from the queue afterwards. (`--only decimal-point` only touches rows whose score changes for that rule; check before running.)
4. Reinstating a curated question needs no extra step (the list is recomputed; clients see it within 5 minutes + their next page load).
5. Rate limits are per learner. A report on a question the learner cannot be identified for (no qkey and no item id) is refused.

## Production runbook (owner; `wrangler d1 execute --remote --file`, never `migrations apply`)

0. Baseline (read only): `npx wrangler d1 execute preppals --remote --command "SELECT COUNT(*) FROM questions"` (must already be the 0008 total).
1. Schema (additive; the old code ignores it): `npx wrangler d1 execute preppals --remote --file migrations/0009_question_reports.sql`.
   Check: `SELECT name FROM sqlite_master WHERE name IN ('question_reports','question_moderation')` returns both; `SELECT COUNT(*) FROM question_reports` = 0.
2. Deploy the code. No seed or backfill is needed. (Deploy BEFORE step 1 is also safe for learners, but a report would fail with a 500 until the tables exist, and `deleteLearner` would fail. Apply step 1 first.)
3. Smoke (as a learner on prod): report a question, open `/admin/questions` (Access), dismiss it with a reason.

Rollback: revert the code (safe any time). Data: `DROP TABLE question_reports; DROP TABLE question_moderation;` only if nothing was retired; a retired pool row keeps `quality_score=0` and a retired curated question stays in `questions.status='retired'`, so reinstate those first.

Local rehearsal (what was run): migrations 0001-0009 + curated seed on local D1, two learners and pool/curated/unregistered reports through the real routes, CSRF refusals (no header, foreign Origin, no Origin), retire of a pool row and a curated question (pool no longer served, review today empty, retired list present), reinstate, phone (390px) and desktop screenshots of the report sheet and the queue.

---

# C2: item analysis (ADR 0003 section 5), migration `0010_item_analysis.sql`

## What exists

- `attempts.chosen` (nullable, <= 200 chars): the option tapped, multiple-choice only. Sent by `useAttemptRecorder` (NST/Geo/His/Afrikaans shells), `PracticeRunner`, `CapsSubjectTopic` and Today's review. `chosenPlumbing.test.ts` fails if a shell stops sending it. Old rows and order/label/explain answers are NULL.
- `question_flags` (one row per version + kind): `too_easy` (p > 0.95), `too_hard` (p < 0.20), `negative_discrimination` (point-biserial < 0), `distractor` (a wrong option picked more than the key). Only versions with **>= 30 answers** (distractor: >= 30 recorded choices) and only the **current version of an active question** are analysed: an edit starts afresh, a retired question is dropped. Maths is pure and tested in `src/lib/shared/itemAnalysis.ts`.
- Discrimination: correlation between getting THIS question right and the learner's accuracy on everything ELSE (`student_xp` overall tally minus this answer); learners with < 10 answers overall are left out of that figure.
- `refreshItemFlags` (`src/lib/server/questions/itemAnalysis.ts`) = 2 SELECTs + ONE batch (3 D1 round trips). It upserts flags (a **dismissed** flag stays dismissed for that version) and deletes open flags that no longer apply. It runs in the scheduled job (`scheduled.ts`, step 3, never throws) and from an admin button (`POST /api/admin/questions/flags/refresh`, CSRF-protected like the other writes).
- The queue (`/admin/questions`) lists flagged questions next to reported ones, after them (ranking: distinct reporters, then answers). Dismiss closes a question's reports AND flags; retire marks its flags resolved.
- **Cron is now DAILY** (`wrangler.jsonc`: `0 3 * * *`, 03:00 UTC).

## Cost at daily frequency (confirmed)

- Top-up caps are PER RUN: `maxTasks 8, maxAccepted 60, maxApiCalls 200, maxOps 45`. Daily = 7x the runs, so the ceiling is 7x the weekly ceiling (<= 420 accepted questions and <= 1,400 Gemini calls a week) but it only spends that while pools are BELOW target (`pool_tasks.target`, 50): with full pools a run is one query and no API call. Retiring or purging questions is what creates refill work. If Gemini quota is a concern, set the Worker variables `TOPUP_MAX_API_CALLS` / `TOPUP_MAX_ACCEPTED` lower; nothing else needs to change.
- Item analysis uses no external API. Worker subrequests per run: top-up <= 45 + analysis 3 = 48 (a free-plan invocation allows 50). D1 reads: it scans `attempts` rows that carry a version id and joins `student_xp` once per attempt, so roughly 2-3 row reads per attempt: ~300k reads a night at 100k attempts (free-plan limit 5M reads a day). Revisit (incremental per-version aggregates) around 1M attempts.

## Gotchas

1. Statistics only exist for answers recorded AFTER 0008 (they carry `question_version_id`); `chosen` only after 0010. Expect no flags for a while on thin data. The 30-answer floor keeps it quiet.
2. A 0 correlation threshold is noisy near 30 answers: treat `negative_discrimination` as "look at it", not "wrong". The queue shows `n`.
3. Pool (AI) questions answered through `PracticeRunner`/`CapsSubjectTopic` are matched by qkey, so they also get a version id (the batch POST sends no item id).
4. `/api/attempts` is deploy-order safe: it falls back in stages (full row, then without `chosen` keeping the version, then the plain row), so an answer is never lost if 0010 is not applied yet.

## Production runbook for 0010 (owner)

1. Schema (additive): `npx wrangler d1 execute preppals --remote --file migrations/0010_item_analysis.sql`.
   Check: `SELECT COUNT(*) FROM pragma_table_info('attempts') WHERE name='chosen'` = 1; `SELECT name FROM sqlite_master WHERE name='question_flags'` returns it; `SELECT COUNT(*) FROM question_flags` = 0.
2. Deploy (this also switches the cron to daily; `wrangler deploy` registers the new trigger).
3. First flags: open `/admin/questions`, press "Recompute item-analysis flags now" (or wait for 03:00 UTC). With little data there will be none; that is expected.
4. Check the scheduled log line after the first night: `scheduled: ... item flags N`.

Rollback: revert the code (safe). Data: `DROP TABLE question_flags;` (the nullable `attempts.chosen` column can stay). To go back to weekly, restore `"0 3 * * SUN"` in `wrangler.jsonc` and deploy.

Local rehearsal: migrations 0001-0009 + seed, an attempt WITH `chosen` before 0010 (stored, version kept), then 0010; 40 learners with a wrong-key pattern; the admin refresh route (403 without the header), the scheduled job through `runScheduled` (log `item flags 2`), the queue (flags-only question), dismiss, and recompute (stays dismissed); phone and desktop screenshots.
