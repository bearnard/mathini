# Parents (ADR 0003 phase 2): linking, consent, PIN reset, dashboard

Needs migration **0013** (adult accounts, see adult-auth.md) and **0014** (four new tables: `parent_links`, `child_invites`, `consent_events`, `pin_resets`; no ALTER). Apply both before using any of it; the learner consent route tolerates 0014 not being there yet.

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

`/parent`: linked children, activity (answers in 7 days, days practised of 14, accuracy of the last answers), consent, reset PIN, unlink, link another. ADR 0005's full progress (mastery, exam readiness) will come through the same server function that backs `GET /api/progress`: `src/lib/server/parents/progressSeam.ts` is the one place to change when it exists on main (today it is plain activity from `attempts`).
