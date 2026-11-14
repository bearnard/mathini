# ADR 0002 — Admin usage console (analytics, locations, learners)

- **Status:** Accepted (to build after ADR 0001 layer 2)
- **Date:** 2026-11-14
- **Scope:** new `events` table and migration, `/api/events`, client `track()` helper,
  `/admin` pages, `/api/admin/*` read-only APIs, Cloudflare Access setup. No changes to
  learning content.

## Context

The owner wants to see how the app (scholar.hibbins.org) is used, by whom and from where:
a dashboard with charts, a map and per-learner detail.

What exists today (production D1 `preppals`, 2026-11-14):

- `students`: 14 rows. Nickname, real name, school, age, grade, `created_at`, `last_seen_at`.
- `attempts`: 78 rows. One row per answered question (student, grade, subject, topic,
  section, correct, XP, streak, time). Only signed-in learners and only practice runs
  that pass a `task` are recorded.
- **Not recorded:** page views, sessions, anonymous visitors, location, device, the learn
  vs practice split, mock tests, the onboarding funnel. There is no admin area or admin
  auth.

Most users are **children** (Grade 5–12). Location and identity data about minors is
sensitive
personal information under POPIA, so collection must be minimal and access tightly controlled.

### Decisions made by the owner

| Question | Decision |
|---|---|
| Admin login | **Cloudflare Access** (Zero Trust) in front of `/admin*` and `/api/admin*`, owner's email only |
| Location precision | **Country, province (region), city.** Never store IP addresses. Coordinates only as Cloudflare's city-level estimate rounded to 1 decimal place (≈10 km), used to place city bubbles on the map |
| Who to track | **Both** anonymous visitors (random device id, no personal data) and signed-in learners (linked to `students.id`) |
| Builder | `mathini-nst` agent, after ADR 0001 layer 2 |

## Decision

### 1. Event pipeline (ship first, so data starts accumulating)

**Table `events`** (new migration `0003_events.sql`):

```
id INTEGER PK AUTOINCREMENT
ts INTEGER NOT NULL              -- ms epoch, set by the SERVER
type TEXT NOT NULL               -- allowlisted, see below
device_id TEXT NOT NULL          -- random UUID kept in localStorage (or a per-tab fallback)
session_id TEXT NOT NULL         -- random id per visit; new after 30 min idle
student_id TEXT                  -- NULL when anonymous; from the session cookie on the server, never from the client body
grade INTEGER, subject TEXT, topic TEXT, path TEXT   -- context, all optional
country TEXT, region TEXT, region_code TEXT, city TEXT, timezone TEXT
lat REAL, lon REAL               -- cf.latitude/longitude rounded to 1 dp
device TEXT                      -- mobile | tablet | desktop (from UA, server side)
browser TEXT, os TEXT            -- family only (e.g. "Chrome", "Android"), no version and no full UA string
referrer TEXT                    -- host only
meta TEXT                        -- small JSON, ≤ 1 KB (e.g. score, duration)
```

Indexes: `(ts)`, `(student_id, ts)`, `(device_id, ts)`, `(type, ts)`, `(country, region, city)`.

**Event types (allowlist):** `page_view`, `session_start`, `onboarding_start`, `signup`, `login`,
`topic_open`, `learn_complete`, `practice_start`, `practice_finish`, `mock_test_start`,
`mock_test_finish`. Answered questions stay in `attempts` (the source of truth). Don't duplicate
them into `events`.

**`POST /api/events`:** accepts a batch of ≤ 20 events, total body ≤ 16 KB.
- It drops unknown types and over-long fields.
- The server sets `ts`, location (from `getCloudflareContext().cf`: `country`, `region`,
  `regionCode`, `city`, `timezone`, `latitude`/`longitude` rounded), device, browser and os
  (parsed from `User-Agent`, then the raw UA is discarded), and `student_id` from the
  existing `pp_session` cookie.
- The client cannot set location or identity.
- Drop obvious bots (UA regex, `cf.verifiedBotCategory` when present).
- Per-device soft limit of 300 events per hour.
- Returns `204`. A failure never breaks the app.

**Client `track(type, props)`** in `src/lib/client/analytics.ts`:
- Queues events in memory and flushes every 10 s, plus on `pagehide`/`visibilitychange`
  via `navigator.sendBeacon`.
- `device_id` and `session_id` live in localStorage/sessionStorage, wrapped in try/catch so a
  blocked storage still works (per-tab ids).
- Respects `navigator.doNotTrack === '1'` by sending only a `page_view` without a device_id.
- Instrument these: app shell page views and route changes; onboarding start, sign-up and
  login; topic open; learn finished (last slide reached); practice start and finish
  (score, duration); mock test start and finish (hooks already isolated in `NstMockTest`).
- Keep instrumentation to one line per call site.

**Retention:** raw events are kept 400 days. The existing weekly cron deletes older rows.

**Privacy notice:** one plain-language line in onboarding, plus a short `/privacy` section:
what is collected (activity, approximate city), why (to improve the app), that IP addresses
are not stored, and who can see it (the owner).

### 2. Admin access

- **Cloudflare Access** application `scholar-admin` covering `scholar.hibbins.org/admin*`
  and `scholar.hibbins.org/api/admin*`, policy *Allow → Emails → owner's email*,
  one-time PIN login. The owner sets this up in the Zero Trust dashboard; see the steps below.
- **Defence in depth:** every `/api/admin/*` handler and the `/admin` layout verify the
  `Cf-Access-Jwt-Assertion` JWT using WebCrypto RS256:
  - keys come from `https://<team>.cloudflareaccess.com/cdn-cgi/access/certs`, cached
  - checks `aud`, `iss`, `exp`, and that the email is in `ADMIN_EMAILS`
  - config `ACCESS_TEAM_DOMAIN`, `ACCESS_AUD`, `ADMIN_EMAILS` comes from vars/secrets
  - add no JWT dependency
  - **Fail closed:** if the config is missing or verification fails → 403
- `/admin` is `noindex` and disallowed in `robots.ts`.
- **Admin APIs are read-only**, with one exception, *Delete learner*, which removes a
  student and their attempts, xp, badges and events. It needs a typed confirmation, and
  makes POPIA erasure requests possible.

### 3. Dashboard (`/admin`)

Built with **recharts** (already a dependency) and Tailwind. Light and dark themes, works on
a phone. One consistent categorical palette. Every chart has a title, units, and a tooltip
with exact values. Global filters: **date range** (today, 7, 30 or 90 days, custom),
**grade**, **subject**. All times in **Africa/Johannesburg**.

| Section | Contents |
|---|---|
| **Overview tiles** | Visitors (unique devices), active learners, new sign-ups, questions answered, accuracy %, average session length. Each shows the change vs the previous period and a sparkline |
| **Activity over time** | Daily visitors, active learners and questions answered (area or line), with sign-ups as markers |
| **When** | Heatmap of hour of day × weekday (SAST), to show study habits and the exam rush |
| **Where** | Map of South Africa: provinces shaded by learners, city bubbles sized by activity; non-SA traffic in a "rest of world" list. Table: country, province, city, visitors, learners, questions. The map is an inline SVG of SA provinces from simplified GeoJSON, pre-rendered to a static asset, with bubbles projected from the rounded lat/lon. **No map tiles and no new dependency** |
| **What** | Top subjects and topics by learners and by questions. Accuracy by topic, lowest first ("where learners struggle"). Learn → practice conversion per topic. Mock-test score distribution |
| **Funnel** | Visitors → started onboarding → signed up → answered ≥ 1 question → came back on a later day |
| **Devices** | Mobile, tablet or desktop share; browsers; OS |
| **Live** | Active in the last 5 minutes: learner or "anonymous", city, current topic. Auto-refreshes every 30 s |
| **Learners** | Searchable, sortable table: nickname, real name, school, grade, last city, first seen, last seen, questions, accuracy, XP, badges. CSV export |
| **Learner detail** | Activity timeline, accuracy over time, topics and weak sections, locations seen (cities), devices, badges, and *Delete learner* |

**APIs:** `GET /api/admin/{overview,timeseries,heatmap,geo,content,funnel,devices,live,learners,learners/:id}`,
each taking `from`, `to`, `grade` and `subject`. Use SQL aggregates in D1, not raw rows to the
client. Answer each in under 300 ms at the current scale. Cache an identical query for 60 s
in memory.

**Historical data:** question stats come from `attempts`, so they cover all history.
Visits, location and devices start from the day the pipeline ships. The dashboard says
"location data since <date>".

### 4. Build order

1. **P1, pipeline:** migration, `/api/events`, `track()`, instrumentation, retention,
   privacy notice. Deploy this first, so data accumulates while the dashboard is built.
2. **P2, access:** the owner sets up Access, then JWT verification and an `/admin` shell
   with the overview tiles and activity chart.
3. **P3, full dashboard:** where (map), when, what, funnel, devices, live, learners table
   and detail, CSV, delete.

Gates for each phase:
- `tsc` clean and `npm test` passing.
- Unit tests for UA parsing, event validation, JWT verification (good, expired, wrong aud,
  wrong email) and the aggregate SQL (against a local D1 via `wrangler d1 execute --local`).
- A test that `/api/admin/*` returns 403 without a valid assertion.
- Production migrations and deploys need the owner's go-ahead.

## Alternatives considered

| Option | Why not |
|---|---|
| Cloudflare Web Analytics / Workers Analytics Engine only | Can't link activity to a learner, and AE queries need the SQL API plus a token. Fine for raw traffic, but not for "who". D1 is enough at this scale |
| Third-party analytics (GA, PostHog…) | Sends children's data to a third party, plus cookie consent. Disproportionate under POPIA |
| Password login in the app | Weaker, and more auth code to get right. Access is free for ≤ 50 users |
| Storing IP addresses | Personal information about minors; not needed |
| Map tiles (Leaflet + OSM) | New dependency and an external tile requests; a provinces SVG is enough |

## Consequences

- The owner can see adoption, engagement, struggle points and geography, and can
  handle data-deletion requests.
- About 10–50 small event rows per visit. Fine for D1 at this scale. Revisit with daily
  rollups if events exceed about 5 M rows.
- New personal-data processing: the privacy notice must ship with P1.
- Cloudflare Access is an external dependency for admin login. If it's misconfigured, admin
  fails closed (403), never open.

## Owner setup: Cloudflare Access (once, about 10 min)

1. Cloudflare dashboard → **Zero Trust** (pick the free plan and a team name if asked).
2. **Access → Applications → Add → Self-hosted.** Name `scholar-admin`. Add destinations
   `scholar.hibbins.org/admin` and `scholar.hibbins.org/api/admin`.
3. Policy: **Allow**, include **Emails** = your email. Login method: One-time PIN.
4. Copy the **Application Audience (AUD) tag** and your **team domain**
   (`<team>.cloudflareaccess.com`) and give them to Claude. They become `ACCESS_AUD` and
   `ACCESS_TEAM_DOMAIN`.
