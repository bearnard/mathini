# Learner progress: runs and measures (ADR 0005, parts 1 and 2)

Definitions live in `src/lib/shared/progressMeasures.ts` (pure, tested). The page shows what `GET /api/progress` sends (`src/lib/shared/progressTypes.ts`); every number is computed on the server.

## Apply order (nothing here is applied automatically)

1. `npx wrangler d1 execute preppals --remote --file migrations/0014_progress.sql`: `runs`, `attempts.run_id`, `topic_progress`. Run once (the `ALTER TABLE` is not idempotent, like 0005). Back up first.
2. Deploy. Until step 1 the new code still works: answers are stored without `run_id`, run starts answer 503, the nightly progress step reports "n/a", `/api/progress` answers 503.
3. Optional, for history from before 0014: export attempts and run `scripts/backfill-topic-progress.ts` (it writes idempotent SQL chunk files; it never touches D1). New activity is refreshed on every finished run and nightly, so without a backfill a learner's topics appear as they practise.

## Runs

A run is one practice session, quiz, term mock test, exam practice or spaced-review session. The client makes the id and starts it (`POST /api/runs`), answers carry `runId`, and `POST /api/runs/<id>/finish` makes the server count the attempts. Score = correct over the questions the run holds (a skipped question counts as wrong). A run open for more than 2 hours is abandoned: its answers so far are kept, it has no score and is left out of trends. Anonymous learners keep a summary on the device only.

## Measures

| Measure | Rule |
|---|---|
| Topic accuracy | weighted accuracy over the learner's latest 20 attempts in the task; weights rise from 1 (oldest) to 2 (newest) |
| Mastery level | Not started (no attempts); Learning (< 50%); Getting there (50 to 79%); Mastered (>= 80% over >= 10 attempts in the window on >= 2 SAST days; high accuracy on less is only Getting there) |
| Improvement | latest 10 attempts minus first 10, in points; null until 20 attempts |
| Trend | the weighted last-20 accuracy after each of the latest sessions (runs; answers outside a run count one session per day); at most 6 points; empty with fewer than 2 sessions |
| Subject mastery | mean accuracy of the practised topics |
| Exam readiness | mastery over every topic in the scope (an untried topic counts 0), the latest mock and the share practised: 50% / 35% / 15% with a mock, 75% / 25% without; null with nothing practised and no mock |
| Retention | review cards answered correctly this week (finished review runs), cards retired (remembered three times), cards due |
| Consistency | days practised in the last 14 (SAST) and the streak (it survives a morning with nothing done yet) |
| Order | topics weakest first; topics not started last |
| Next step | due reviews, then the weakest practised topic in the exam scope below Mastered, then an untried topic, then "all caught up" |

Exam scopes are data in `src/lib/shared/examScopes.ts` (Grade 6 Natural Sciences Terms 3 and 4 today; a test keeps it equal to the exam practice page).

## Cost (free D1 plan)

- Finishing a run: one read and one batch (the topics that run touched).
- Nightly job: one read (pairs with attempts in the last 3 days newer than their cached row, at most 150, most recent first) and one batch (the upserts plus one statement that abandons stale runs). That is 2 of the 50 subrequests.
- `GET /api/progress`: at most 8 reads, all for the signed-in learner.
