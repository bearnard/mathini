# ADR 0004: Teacher review by secure link, with AI-assisted merge

- **Status:** Proposed (2026-11-15)
- **Goal:** get first-language and subject teachers to check our content (about 600 items waiting
  in `audit/teacher-check.md`, mainly Afrikaans and isiXhosa) quickly and safely, then apply
  their corrections without a deploy where possible.
- **Relation to ADR 0003:** this is a light version of Phase 1b that ships now. Reviewers don't
  need accounts. The owner invites them by link. It reuses ADR 0003's question versions,
  validator and audit trail, and the `/admin/questions` edit pipeline.

## The flow

1. **Owner creates a review pack** (`/admin/reviews` → New). A pack holds about 10–60 *review
   items*, picked by filter: subject, grade, language, "needs teacher check", or a list of question
   ids. Each item is one of:
   - a **question** (the current version from D1: prompt, options, key, explanation), or
   - a **lesson line** (a sentence or example from a lesson, with its file, slide title and the
     slides around it for context).
   Each item carries the *doubt* that put it there, for example "is 'Kusasa' morning or tomorrow?".
2. **Owner invites reviewers.** For each reviewer: a display name (for example "Ms N.") and an
   optional note. The system makes a **secure link** for each reviewer for that pack. The owner copies
   it into WhatsApp or email. There is no email sending in v1. Several reviewers can get the same
   pack, each with their own link.
3. **Teacher opens the link** on a phone. There is no sign-up. They see a short "what we need"
   intro, then one item at a time:
   - the content as a learner sees it, plus the context and the doubt
   - three actions: **Correct as is** / **Suggest a change** (edit in place: for a question,
     the prompt, options, key and explanation; for a lesson line, the text) / **Not sure / comment**
   - an optional confidence (sure / fairly sure) and a free-text reason
   - autosave and a progress bar. They can stop and come back with the same link until it
     expires.
   They never see learners, other reviewers or anything outside the pack.
4. **Owner reviews the results** (`/admin/reviews/<pack>`), item by item:
   - all reviewers' answers side by side, with agreement shown (for example "3/3 correct", "2 suggest the same
     change", "disagree")
   - **AI merge suggestion** where reviewers suggested changes. The server asks Gemini, which is
     already configured (`GEMINI_API_KEY`), so there's no new provider. It sends the original, every
     suggestion with its reason, and the subject and grade. It gets back **one merged proposal**, a
     one-line rationale, and an explicit list of the points where reviewers **disagree**. The AI
     never applies anything.
   - the owner chooses **Accept merged** / **Accept reviewer X's version** / **Edit then accept** /
     **Keep original** / **Ask again** (re-send the item in a new pack).
5. **Apply.**
   - **Questions** go through the existing edit pipeline (`POST /api/admin/questions/[id]/edit`).
     It runs the validator, writes a new version with change_kind `meaning` or `wording`, records
     an audit row with reviewer names and the pack id in the reason, and resets reviews on meaning
     changes. The change is live within a minute, with no deploy.
   - **Lesson lines** live in code, so accepted changes go into a **change queue**.
     `scripts/apply-review-changes.ts` exports the queue as exact `{file, old, new}` replacements.
     It refuses to apply a change if `old` is not found exactly once, then runs the tests. The owner
     (or an agent) applies, commits and deploys. A later step could move lesson text into D1.
6. **Close the loop.** When a pack is finished, each item gets a status (verified / changed / still
   unsure). An item marked *verified by a teacher* is also shown in `/admin/questions`, which ADR 0003
   §4 prefers for exam practice.

## Security and privacy

- **Link token:** 32 random bytes (base64url) in the path, `/review/<token>`. Only the
  **SHA-256 hash** is stored. Comparison is constant-time. The link expires after **14 days**
  (adjustable). The owner can **revoke** it at any time. It's scoped to one reviewer and one pack.
- **Responses:** pages are `noindex`, served with `Cache-Control: no-store` and
  `Referrer-Policy: no-referrer`. The token never appears in logs. Posts are rate-limited per
  token. Saves need the token and an `X-Review-Action` header (CSRF-style, like `adminWrite`).
- **Isolation:** all review routes sit outside `/admin`, so outside Cloudflare Access, and read only
  pack data: no learner, attempt or admin data. A guard test checks that the review routes import
  nothing from the learner or admin modules.
- **POPIA:** we store only what the owner types (a display name and an optional contact note) plus
  the responses. Personal fields are deleted 90 days after the pack closes, and the responses are
  kept, attributed to "Reviewer 1/2/3".
- **AI:** only the content and the suggestions go to Gemini. No reviewer names or contact details.

## Data (migration 0012, additive)

`review_packs` (id, title, created_by, created_at, status), `review_pack_items` (pack_id, kind
'question'|'lesson_line', question_id, version_id, file, anchor_text, context JSON, doubt, sort),
`reviewers` (id, pack_id, display_name, contact_note, token_hash, expires_at, revoked_at,
last_seen_at, done_at), `review_responses` (reviewer_id, item_id, verdict
'correct'|'change'|'unsure', proposal JSON, confidence, reason, updated_at; unique per reviewer and
item), `review_decisions` (item_id, decision, merged JSON, ai_rationale, ai_disagreements,
decided_by, applied_version_id, change_queue_id, decided_at), `lesson_change_queue` (id, file,
old_text, new_text, item_id, status 'pending'|'applied'|'failed', applied_commit).
D1 cost is small: a 40-item pack with 3 reviewers is about 400 rows.

## Seeding the first packs

`scripts/import-teacher-check.ts` turns today's `audit/teacher-check.md` sections into packs:
- isiXhosa (A, B, C, F and the isiXhosa lesson rewrites)
- Afrikaans G6, G7, G8 and G9
- Afrikaans G9 new questions (T)
- the NST exam scope (E)

Question items resolve to D1 question ids. Lesson items resolve to `{file, anchor_text}`, checked
to be present exactly once.

## Alternatives considered

| Option | Why not (for now) |
|---|---|
| Teacher accounts with magic link (ADR 0003 Phase 1b) | Needs an email provider and SACE verification. Too slow for getting ~600 items checked now. The links can later be attached to accounts. |
| Shared Google Doc or Sheet | No structure, no merge, manual re-typing into code and D1, and learner-facing content would leave our system. |
| Let AI apply merged changes automatically | Accuracy matters most. Teachers can disagree and AI can be wrong, so the owner always decides. |
| Claude instead of Gemini for merging | Gemini is already configured with a key and data-processing terms; adding a provider means another key and DPA. Easy to swap later behind one function. |

## Build plan (each part ships separately)

1. Migration 0012, token library and tests, the `/review/<token>` reviewer flow (mobile-first), and
   the guard tests.
2. Admin: create a pack, invite (links), revoke, a results view with agreement.
3. AI merge suggestion (Gemini, one function, tested with fixtures) and decisions → the question
   edit pipeline.
4. Lesson-line change queue and the apply script.
5. Importing teacher-check.md into the first packs.
