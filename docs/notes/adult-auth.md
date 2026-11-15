# Adult sign-in (ADR 0003 section 2): how it works and what the owner must set up

Parents, teachers, moderators and school admins sign in with an **email magic link**. Learners keep login code + PIN and the `pp_session` cookie; nothing here touches them. The admin (the owner) stays on Cloudflare Access (ADR 0002) and is not a role here.

## What the owner must do before it works

1. **Apply migration 0013** (five new tables, additive): `npx wrangler d1 execute preppals --remote --file migrations/0013_adult_auth.sql`. Back up first (`wrangler d1 export`). Until then, `/api/auth/*` returns errors and the daily job skips its housekeeping.
2. **Create a Resend account**, verify the sending domain, and set two Worker settings:
   - secret `RESEND_API_KEY` (`npx wrangler secret put RESEND_API_KEY`)
   - variable `MAIL_FROM`, for example `PrepPals <login@scholar.hibbins.org>` (must be on the verified domain)
3. Without the key (or without `MAIL_FROM`) production **refuses to send**: `/api/auth/request` answers 503 "Email sign-in is not available yet". It never falls back to printing links. In development with no key, links are printed to the terminal by the dev mailer.

## The flow

1. `/sign-in`: the adult types an email. `POST /api/auth/request` always answers the same 200 (known address, unknown, malformed, or over its own limit). Only the caller's IP limit gives 429, and a missing mail setup gives 503.
2. The email holds `https://scholar.hibbins.org/sign-in/verify#<token>` (built from the site address, never from a request header). The token is 32 random bytes; only its SHA-256 is stored. It works **once** and for **15 minutes**.
3. The page reads the token from the URL fragment (never sent to a server), removes it from the address bar, and waits for a **click**, so a mail scanner that opens the link cannot use it up. `POST /api/auth/verify` uses the link, creates the adult (a first sign-in makes them a `parent`) and a session.
4. The session is a random token in the **`pp_adult`** cookie (HttpOnly, Secure, SameSite=Lax, 30 days), stored only as a hash, revocable. `/account` shows who is signed in; `POST /api/auth/logout` revokes it.

## Server-side checks

- `requireRole(req, db, roles, now)` in `src/lib/server/adultAuth/roles.ts`: 401 with no session, 403 without any of the roles (an empty list means any signed-in adult). The 403 never says which roles would have worked. Every adult API must call it; a hidden button is not a permission.
- State-changing calls need the `X-Auth-Action` header naming the action and a matching `Origin`.
- Roles live in `user_roles` (`parent`, `teacher`, `moderator`, `school_admin`). New roles are granted by the admin (a later admin page); a first sign-in only ever adds `parent`, and signing in again never re-adds a role that was taken away.
- Revoking sessions: `revokeSession` (one browser) and `revokeAllSessions` (everywhere).

## Limits and the free-plan budget

- Per email: 5 links an hour. Per IP: 20 requests an hour. Both are durable counters in `auth_rate` (hashes, never a raw email or IP), with a softer in-memory limit in front. **A key that is already blocked costs a read only**, so hammering one key cannot spend the write budget. A normal sign-in is about 8 row writes.
- `last_seen_at` on a session is refreshed at most once a day.
- The daily job (`runScheduled`) deletes links older than a day, sessions expired or revoked more than 7 days ago, and old counters, in one batch (200 rows per table at most).

## Not built here (later phases)

Teacher verification (SACE + school confirmation), moderator groups, and the parent features (linking a child, consent, PIN reset, dashboard) come in `feat/parents` and ADR 0003 phase 1b.
