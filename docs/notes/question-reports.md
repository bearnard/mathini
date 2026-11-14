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
