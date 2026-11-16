# Leaderboard: scoped to classes and schools, ranked on learning (2026-11)

Replaces the old global XP board (every learner saw every other child's nickname, avatar, XP and correct/total). Owner decision, POPIA-driven.

## Who sees what
| Board | Who may see it | Rows |
| --- | --- | --- |
| Class | current members (`class_members.left_at IS NULL`) of an ACTIVE class | classmates: nickname, avatar, weekly points, rank |
| School | learners in an active class of that school (`classes.school_id`, from a teacher's verified class; the free-text school typed at sign-up is never used) | nickname, avatar, weekly points, rank (top 25 plus own row) |
| District / Province | learners in such a school | SCHOOLS only: name, active learners, school score, rank. Never a child |
| No class | the learner alone | own week points, best week, streak, and a "join a class with a code" line |

No accuracy, no correct/total, no real name, no school text, no ids in any response (`src/lib/shared/leaderboardTypes.ts`). The teacher's class dashboard keeps its no-ranking rule: there is no leaderboard in the teacher view.

District boards need `schools.district` (set by the owner in /admin/schools, migration 0024); a school without one is simply not on a district board. Province comes from `schools.province`. A school appears on an area board only with at least 5 active learners this week (an active learner has at least one server-marked answer this week), so a child cannot be identified; the school's own learners see "not ranked yet" with the reason. School score = total weekly points / active learners.

## Weekly points (`weeklyPoints()` in src/lib/shared/weeklyPoints.ts, the only scoring code)
Week = Monday 00:00 to Sunday 24:00 SAST. Only server-marked data (`attempts.marked_by IS NOT 'client'`, see attempt-trust.md).

| Event | Points |
| --- | --- |
| correct answer to a question not answered correctly in the 7 days before it | 10 |
| repeat-correct of the same question within 7 days | 0 |
| wrong answer | 0 |
| answer without a question key | 0 |
| spaced-review card remembered (correct answer inside a review run), once per card per week; replaces the answer points | 5 |
| topic reaching Mastered for the first time this week (`topic_mastered`) | 40 |
| finished mock test / exam practice (at least 5 questions) scoring higher than the learner's best earlier finished run on the same `scope_key` (a first run has no previous best, so no bonus) | 25 |
| daily cap on answer + review points (per SAST day); bonuses are not capped, each is bounded by real learning | 100 |

Lifetime XP (`student_xp`) is unchanged and still drives the learner's own level and badges; it is no longer shown to anyone else.

## How it is computed and stored (choice: cache table, rebuilt after writes)
`weekly_points (student_id, week_start, points, answered)` is rebuilt for ONE learner by `refreshWeeklyPoints` (one D1 batch of 4 reads, indexed by `(student_id, created_at)`, plus one upsert) after an answer is stored and when a run finishes, in `waitUntil` so the learner never waits. It is idempotent, so a lost or repeated run is harmless. Reads are then one query per board over the cache: a class of 40 or a school of 1,000 is one round trip (~175 ms), area boards one aggregate query. Computing on read would need every member's two weeks of attempts per view (thousands of rows, with the repeat rule needing history), which is slower and costlier than one small rebuild per answer.
Past weeks stay in the table, which gives "best week". Staleness: a board is at most one in-flight rebuild behind.
`topic_mastered` is written by the topic_progress refresh only on a change from "not Mastered or no row" to Mastered, so topics already Mastered when the table appears do not count as new. If the table is missing the progress write still succeeds.

## Endpoints (all GET, `Cache-Control: private, no-store`, learner cookie `pp_session`; 401 signed out)
- `/api/leaderboard`: own classes, schools, personal bests
- `/api/leaderboard/class/:id`: 404 unless a current member of that active class
- `/api/leaderboard/school/:id`: 404 unless in an active class of that school
- `/api/leaderboard/area?level=district|province[&school=:id]`: schools only; 404 if in no class, bad level, or `school` is not one of the learner's own; `{available:false}` for a district board when the school has no district

## Migrations (applied by hand, in order)
`0024_school_district.sql` (ALTER, run once), `0025_weekly_points.sql` (idempotent: weekly_points, topic_mastered, index on attempts).
Weekly points of the current week appear as learners answer after deploy; nothing is backfilled.
