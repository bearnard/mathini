# Security review, 2026-11-15: adult accounts, parents, learner progress, teacher applications

Scope: everything adult-, parent- or progress-facing that landed on 2026-11-15: adult sign-in (`adultAuth/`), parents (`parents/`), the weekly summary, learner runs and progress (`progress/`, `/api/runs`, `/api/progress`, `/api/attempts` as it feeds them), and the teacher application and approval (`schools/`). Fixes are on `fix/security-review-1`.

## Checked and fine

- **No cross-learner reads in the progress code.** Every query in `progressApi.ts`, `topicProgress.ts` and `runs.ts` is bound to one `student_id`; `GET /api/progress` takes the learner only from the signed `pp_session` cookie (there is no parameter to ask for anyone else); a run can only be started, finished or attached to answers by its owner; finishing and abandoning are guarded on `student_id` and `status = 'open'`.
- **Parent progress path:** the child comes from a `parent_links` row for the signed-in parent, checked before `buildProgress` is called. Another parent's child, an unlinked child and a made-up id all answer 404.
- **Teacher applications:** the role is only ever granted by the admin's approve (`granted_by = 'admin'`); the SACE number is shown to the admin only (masked to the applicant); revoking a role takes effect on the very next request because roles are read live, and revoking archives that teacher's classes. All routes use the same `requireRole`, action-header and Origin checks as the rest of adult auth.
- Adult sessions, magic links, tokens and the parent routes: see `adult-auth.md` and `parents.md`; the tests there cover single use, expiry, hashing at rest, enumeration, rate limits and role checks.

## Found and fixed on this branch

| # | Severity | Finding | Fix |
|---|---|---|---|
| 1 | High (POPIA) | **Deleting a learner left their progress and family data behind**: `runs`, `topic_progress`, `parent_links`, `child_invites`, `consent_events` and `pin_resets` were not deleted (ADR 0005 promises runs and topic_progress go). | `deleteLearner` now deletes them and counts them in the audit row; tests prove only that learner's rows go. |
| 2 | High | **Learner PIN brute force.** The login limit (10 tries per 5 minutes) lived in one Worker isolate's memory, so other isolates started again from zero; a PIN has only 10 000 values. | A durable counter per login code (10 wrong tries an hour, `auth_rate`), checked before the lookup. |
| 3 | Medium | **Login codes could be told apart from wrong PINs**: "Invalid login code" vs "Invalid PIN", and an unknown code answered instantly while a real one paid for a PIN hash. | One message for a wrong code, a wrong PIN and a blocked code, and every failure costs one PIN hash (a test checks the time). |
| 4 | Medium | **Open sign-up with no limit** (any script could create accounts and spend the shared D1 write budget), and its 500 answer carried the raw error text (SQL and schema details). | 60 sign-ups an hour per connection (a whole class fits), durable; the 500 is now generic. |
| 5 | Medium | **No limit on the practice write endpoints** (`/api/attempts`, `/api/runs`, `/api/runs/<id>/finish`): a script with one free account could spend the 100 000 daily D1 writes everyone shares. | A per-learner burst limit in memory (400 answers a minute, 40 run starts and 80 finishes per 10 minutes: loose enough for a session sent all at once). This only stops a runaway client. |

The durable counters fail open (a missing table or a D1 error never locks a learner out).

## Open: needs a decision or a bigger change

1. **Progress is only as honest as the client.** `/api/attempts` takes `isCorrect` from the browser, and a run's `kind`, `scopeKey` and `nItems` too. A learner can mark every answer right, so XP, mastery, test scores and the parent dashboard and email can be inflated (only for their own account, but parents and teachers will rely on them). Fix: for multiple-choice questions, work out correctness on the server from `chosen` and the question version's answer, and check `kind`/`scopeKey` against the known exam scopes.
2. **A real rate limit.** The in-memory limits are per isolate. Add Cloudflare rate-limiting rules (dashboard, no code) for `/api/attempts`, `/api/students`, `/api/session` and `/api/auth/request`.
3. **Learner sessions cannot be revoked.** `pp_session` is a signed id valid for a year with no server record, so a parent's PIN reset does not log out a device that is already signed in, and a lost device stays signed in. Fix: a sessions table, or a per-learner session version in the signature.
4. **Sign-in lock-out by a third party.** The magic-link limit is 5 an hour per email address, so someone who requests 5 links for your address uses them up (you get the 5 emails, and they work for 15 minutes, but a new one cannot be requested until the hour is over). Same shape for the learner login: 10 wrong tries on a code blocks that code for an hour. Mitigation if it happens: shorter windows.
5. **Account deletion for adults** does not exist yet (a parent or teacher cannot erase their own account, their `parent_links` rows, or their SACE number). Needed before the public launch for POPIA.
6. Low: starting a run with another learner's run id answers 409 (it confirms that UUID exists; 122 random bits make it unguessable). Unsubscribe tokens never expire (the only thing they can do is stop the email). A rejected teacher application can be re-sent at once (admin spam, one pending at a time).
