# Parents (ADR 0003 phase 2): linking, consent, PIN reset, dashboard

Needs migration **0013** (adult accounts, see adult-auth.md) and **0015** (four new tables: `parent_links`, `child_invites`, `consent_events`, `pin_resets`; no ALTER). Apply both before using any of it; the learner consent route tolerates 0015 not being there yet.

## Linking a child (parent role required; every write needs the `X-Auth-Action` header and a matching Origin)

- **Code + PIN** (`POST /api/parent/link`): the PIN is only 4 digits, so a wrong PIN counts against the CHILD (5 an hour, durable) as well as the parent (10 attempts an hour). A blocked child is refused before the PIN is checked and with the same answer as a wrong PIN or an unknown code, and an unknown code or a blocked child still pays for one PIN hash, so neither the answer nor the time says which codes exist.
- **Invite from the child's own screen** (`POST /api/students/me/parent-invite`, learner's `pp_session`): a one-time link `/parent/link#<token>` for 60 minutes, at most 3 waiting, stored hashed. The parent must be signed in; the page reads the token from the fragment, clears it from the address bar and links on a click. The learner page is `/invite-parent`: **link to it from the learner screen** (the learner header was not touched).
- Ticking "I am the parent or guardian and I agree" records consent while linking. Linking without ticking links only.

## Consent

A parent's consent **replaces** the learner's tick: `students.parent_consent_at` and `consent_version` are set (what the app already reads) and `consent_events` records who, when and which notice version. Withdrawing sets `parent_consent_at` to NULL (the reduced ADR 0002 level) and the learner's own tick can no longer switch it back on (`/api/consent` checks the newest event). Unlinking does not change consent.

## PIN reset

`POST /api/parent/children/<id>/reset-pin`: a new 4-digit PIN made on the server, shown to the parent once (`no-store`), stored as a salted PBKDF2 hash, logged in `pin_resets` without the PIN. 3 a day per child, 5 a day per parent. A learner who is already signed in keeps their `pp_session` cookie (it is a signature, not a stored session); only the next login needs the new PIN.

## Who sees what

Every `/api/parent/children/<id>/...` route first checks that the signed-in parent is linked to that child. A child who is not yours, not linked any more, or not real all answer **404**. A parent sees `id, displayName, grade, avatar, linkedAt, lastSeenAt, consent` and activity counts: never the login code, PIN hash, real name, school or age.

## Dashboard

`/parent`: linked children with their **progress** (exam readiness, days practised of 14, streak, and on request next step, subjects with the weakest topics, recent tests and review cards), consent, reset PIN, unlink, link another. The progress is the SAME `ProgressResponse` the learner's own page gets from `GET /api/progress` (ADR 0005): `GET /api/parent/children/<id>/progress` builds it with the same `buildProgress`, for a child taken from a `parent_links` row instead of from the learner's session (`src/lib/server/parents/progressSeam.ts`).

## Weekly summary email (ADR 0005 section 4)

Needs migration **0017** (`summary_prefs`, `summary_sent`; additive) and the same mail setup as sign-in (`RESEND_API_KEY` secret and `MAIL_FROM`; without them the job does nothing and claims nobody). It also needs a **deploy**, because it adds a second cron trigger to `wrangler.jsonc` (`30 3 * * 0,1,2`, 05:30 South African time on Sunday, Monday and Tuesday). It has its own trigger so it gets a whole invocation's subrequests; the daily job's top-up already uses most of its own.

- **Who gets it:** a parent with at least one linked child whose consent is on file, who has not switched it off. One email per parent covers all their consenting linked children (never anyone else's), up to 6.
- **What it says, per child:** days practised in the last 7 (and answers), tests this week with the change since last time, topics getting better, topics needing attention, the next step. A parent whose children have been quiet (no practice for 14 days and no test this week) gets nothing that week. Plain text plus simple HTML, with the POPIA wording (why they get it, that it only uses their child's practice results, that Resend delivers it, one-click stop).
- **Once a week, never twice:** each parent is claimed in `summary_sent` for the week (the Sunday's date, South African time) before anything is sent, so a re-run, an overlap or Monday's catch-up cannot send a second copy. A failed send is retried on the next run, up to 3 times that week. Sunday is the send day; Monday and Tuesday only catch up. On any other day the job does nothing.
- **Budget:** at most 12 parents per run and a hard cap of 44 D1 and mail calls per run (`SUMMARY_MAX_OPS` raises it on a paid plan). One parent with one child costs about 13 calls, so the free plan covers about 3 parents per run and about 9 a week across the three days; on a paid plan set `SUMMARY_MAX_OPS` to a few hundred. When the budget runs out the job gives the current claim back and stops; the next run carries on.
- **Unsubscribe:** every email has a signed link (`/unsubscribe#<token>`, one button) and the `List-Unsubscribe` one-click headers for mail apps' own button (`POST /api/unsubscribe?token=...`). There is no GET: a mail scanner cannot unsubscribe anyone by accident. The token is `<user id>.<HMAC>` with its own purpose label, so a learner session signature never works as one. A parent can also switch the email on and off on `/parent`. Unsubscribing changes nothing about linking or consent.
