# ADR 0003: Families, teachers, schools and teacher-moderated question quality

- **Status:** Accepted (owner decisions 2026-11-14); phases not yet built
- **Date:** 2026-11-14
- **Goal (applies to every phase):** prepare learners for tests and exams and **maximise learning
  and retention**. A feature that doesn't serve that, directly or by getting learners to the right
  practice, waits.

## Context

PrepPals (scholar.hibbins.org) is going **public**, for **families, teachers and schools**. Today:

- Only **learners** have accounts: a login code + 4-digit PIN, nickname, real name, school, age and
  grade. Parent "consent" is a tick-box the learner sets (ADR 0002). There are no adult accounts,
  no recovery for a forgotten code or PIN, and no classes or schools.
- **Questions** come from two places: curated `bank` arrays in code (deploy to change) and about
  17,000 AI-generated rows in D1 `item_cache`. Nobody outside the owner can report or fix a
  question. An audit of question quality is running (see `~/Source/private/mathini/audit/`).
- Spaced review keys a question by `qkey = hash(task + normalised prompt)` (see
  `docs/notes/spaced-review.md`). **Editing a prompt orphans every learner's review schedule for
  it.** Any moderation workflow must fix this first.
- The admin console (`/admin`, ADR 0002) is behind Cloudflare Access for the owner only.

### Owner decisions

| Question | Decision |
|---|---|
| Who keeps questions accurate | **Verified teachers in subject moderator groups** (by subject + phase), proposing changes with discussion and approval |
| Teacher verification | **SACE registration number + confirmation by the teacher's school** |
| Approval rule at start | **The owner approves every change until a subject+phase group has 5 moderators**; then 1 moderator approval (2 later) |
| Adult sign-in | **Magic link by email** |
| Audience | Public: learners, parents/families, teachers, schools |

## Decision

### 1. Roles

| Role | How you get it | Can do |
|---|---|---|
| **Learner** | Sign-up (as today) or class join code | Practise, review, report a problem (fixed reasons + ≤200 chars) |
| **Parent/guardian** | Email magic link, then **link** a child (the child's code + PIN, or an invite from the child's screen) | Give/withdraw consent, see linked children's progress, reset a child's PIN, report a problem |
| **Teacher** | Email magic link + **SACE number** + school confirmation | Everything a parent can for their CLASSES; create classes; set exam scope; propose question changes; join discussions |
| **Subject moderator** | Appointed by admin, per **subject + phase** (e.g. NST · Intermediate) | Approve/reject proposals in that group, with a written reason |
| **School admin** | Appointed by admin for one school | Confirm the school's teachers; see school-level progress |
| **Admin** | The owner (Cloudflare Access, ADR 0002) | Everything; appoints moderators and school admins; overrides |

**Child safety rules (non-negotiable):**
- Learners never see or post in discussions, and there's no messaging between learners and adults.
- Learner reports use fixed reasons, with a short note that only moderators see.
- Teachers see only learners in their own classes; parents see only children linked to them.

### 2. Adult sign-in (magic link)

- Email → single-use link valid **15 minutes**. The token is stored hashed, rate-limited per
  email and per IP, and the response never reveals whether an email exists.
- Adult sessions use a **separate cookie** from learners' `pp_session`: HttpOnly, Secure,
  SameSite=Lax, 30 days, revocable. Every action is checked server-side by role.
- Needs an **email-sending provider** (Cloudflare can't send arbitrary mail by itself). Options:
  Resend, Postmark or Amazon SES. **To decide in Phase 2.** Adult emails are personal
  information, so pick a provider with a data-processing agreement suitable for POPIA.
- Learners keep code + PIN. Parent-assisted **PIN reset** replaces "lost code = lost progress".

### 3. Questions become versioned data, with stable IDs

- New table **`questions`** (stable `id`) and **`question_versions`** (prompt, options, answer,
  explanation, kind fields, source/citation, author, status, created_at). A question points to its
  current approved version.
- **Migration keeps review schedules valid:** each existing question's `id` = its CURRENT `qkey`.
  Afterwards, edits create new versions and **keep the id**, so schedules never orphan again.
  `attempts` gains `question_version_id` so we know exactly what was shown.
- **Source of truth moves to D1.** Curated banks are seeded into `questions` (marked `curated`),
  with the code banks kept as an offline/fallback copy. Content changes then no longer need a deploy.
- Status flow: `draft → proposed → approved → retired`. Retired questions leave practice and
  review, but their history stays.

### 4. Reports, proposals, discussion, approval

- **Report** (any signed-in user): question id + version, reason (`wrong answer`, `confusing`,
  `typo`, `not in syllabus`, `other`) + optional note. Reports group onto the question.
- **Proposal** (teachers): edit / retire / new, with before/after, a reason, and a **source**
  (CAPS document, textbook + page, or lesson slide). Every proposal first runs the **automated
  quality checks** (the audit's rules: answer in options, no length or list-count giveaway, no
  joke distractors, no answer in the prompt, an explanation present). Failing proposals go back to
  the author with the reasons.
- **Discussion:** threaded comments **attached to a question or proposal**, teachers and
  moderators only. **No general forum** (moderation burden, drift, child-safety exposure);
  revisit only if teachers ask for one.
- **Approval:** until a subject+phase group has **5 moderators**, the **owner approves** every
  proposal in it; then **1 moderator** approval (raise to 2 once groups are bigger). Approve or
  reject always carries a reason. For factual disputes, **the cited source decides**, not votes.
- **Reputation:** accepted proposals earn points that unlock rights (propose → review queue →
  eligible for moderator). No popularity up/down votes.
- **Verified questions:** an approved teacher edit, or an explicit "verified" review, marks a
  question **teacher-verified**. Verified questions are preferred in exam practice and mock tests.

### 5. Data-driven flags (item analysis)

Once a version has at least 30 answers, compute nightly:
- **Difficulty (p-value):** flag above 0.95 (likely a giveaway) or below 0.20 (likely a wrong key
  or out of syllabus).
- **Discrimination (point-biserial vs the learner's overall accuracy):** flag below 0, i.e.
  strong learners get it wrong more often than weak ones (classic sign of a wrong answer key).
- **Distractor analysis:** flag when one wrong option draws more picks than the right one.

Flags join learner reports in the **moderation queue**, ranked by how many learners the question
affects. Needs a scheduled job: fix the cron (it doesn't run today; OpenNext exports no
`scheduled` handler).

### 6. Schools and classes

- **`schools`** (name, province, EMIS number optional), **`classes`** (school, grade, subject(s),
  teacher, **join code**), **`class_members`**.
- A learner joins a class with its code. The teacher sees class progress, the weakest topics
  across the class, and who is behind on reviews.
- **Exam scope:** a teacher sets "Grade 6 NST test, Terms 3–4, on 28 Nov". Learners in the class
  get matching exam practice and a **daily plan** counting down to it. This removes the guessing
  about what an exam covers.
- **School admin** confirms teacher accounts claiming that school.

### 7. Consent (POPIA)

- When a parent links a child, **the parent's consent replaces the learner's tick** (recorded with
  the parent's account, time and notice version). An existing tick stays valid as learner-attested
  until a parent links. Parents can withdraw consent; the learner's data then falls back to the
  ADR 0002 reduced level.
- A school may record that it has collected consent through its own process. Store who said so
  and when; the parent route stays available.

## Phases (each shippable; each judged against the learning goal)

| Phase | Contents | Done when |
|---|---|---|
| **1a Foundation** | Stable question ids + versions (migration keeps qkeys); learner/parent **Report a problem**; admin **moderation queue**; item-analysis flags; **purge/regenerate** bad pools from the audit; tighter generator rules | No schedule is orphaned by an edit; the owner can fix a reported question in minutes without a deploy |
| **1b Teachers** | Email magic link; teacher accounts with SACE + school confirmation; subject moderator groups; proposals with automated checks; per-question discussion; owner approval until 5 moderators | A verified teacher can propose a fix with a source, and the owner can approve it |
| **2 Families** | Parent accounts, child linking, parent consent, **PIN reset**, parent dashboard, weekly progress email | A parent can recover a child's access and see weak topics |
| **3 Schools** | Schools, classes, join codes, teacher dashboard, **exam scope + daily plan**, school admin | A teacher sets an exam scope and the class gets a matching plan |
| **4 Public** | SEO topic pages + structured data, proper domain, landing paths for learners, parents and teachers | Search brings people to the right practice page |

Pilot: **Bay Primary**, one Grade 6 class and NST teacher, as the first moderators (NST ·
Intermediate) and the first class.

## Consequences

**Good:** accuracy improves continuously and scales beyond one owner; teachers shape the exam
scope; parents get recovery and visibility; schools can enrol; every edit keeps learners' review
schedules intact.

**Costs / risks:**
- Real **authentication and authorisation** surface (adult accounts, roles): needs careful tests
  and a security review before each phase ships.
- An **email provider** handling adults' personal information.
- **Moving questions to D1** is a sizeable migration. Mitigation: the code banks stay as a
  fallback, migrate in one deploy with a backup, and verify the migration with schedule continuity
  tests.
- **Cold start:** few teachers at first. Mitigation: owner approval until 5, the automated checks,
  and item analysis do most of the early work.
- **Moderation load:** keep discussions per-question; no forum.
- **More personal data** (teachers' SACE numbers, school links): restrict SACE numbers to the
  admin/verification view and exclude them from exports.
