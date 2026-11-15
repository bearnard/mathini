# Admin edit of a question (step 5)

Plan: [d1-serving-plan.md](d1-serving-plan.md) section 4.5. The owner can fix a reported question in minutes, without a deploy.

## Where

- Page: `/admin/questions`. Each reported question has **Edit wording** (next to Dismiss and Retire), and the top of the page has **Open any question by its id** (12 characters) for a question nobody reported.
- API (all behind Cloudflare Access, `adminWrite`/`adminGet`: Access assertion + `X-Admin-Action` header + same-origin `Origin`; the guard-scan test covers them):
  - `GET  /api/admin/questions/[id]` - current wording, history (30 versions), audit trail. Never cached.
  - `POST /api/admin/questions/[id]/edit` (`X-Admin-Action: question-edit`) - body up to 8 KB: `{ expectedVersionId, prompt, options[2-6], answer, explanation, sourceNote, changeKind: 'wording'|'meaning', acknowledgeWarnings? }`.
  - `POST /api/admin/questions/[id]/restore` (`X-Admin-Action: question-restore`) - `{ expectedVersionId, versionId, reason }`.
- Code: `src/lib/server/questions/edit.ts` (all rules, SQL over `AdminDb`), `src/lib/shared/questionEdit.ts` (limits and the "did it change / is it a change of meaning" judgements, shared with the form), `src/components/admin/QuestionEditPanel.tsx`.

## What an edit does (one `db.batch`)

1. Inserts the next version (`author 'owner'`, `status 'approved'`, `source_note` = your reason, the new wording's qkey is stored as an alias) and moves the pointer. The question id never changes, so review schedules and attempts keep working.
2. If the change is a **meaning** change, every **active** `review_items` row for the question goes back to box 1, due tomorrow (SAST), streak 0; retired review rows are left alone. The audit row records how many.
3. Writes the `question_edits` audit row (`change_kind` `wording`/`meaning`/`restore`, reason, admin email, the checker's findings, `reviews_reset`).
4. Closes the question's open **reports** as `actioned` and its open item-analysis **flags** as `resolved` (the statistics restart on the new version).
5. An **AI-pool question that a human edits becomes `curated`**, so the AI-only quality filter in serving no longer applies to it (the owner approved the wording). The `item_cache` row is not touched.

Every statement after the insert is guarded by "my version is now the current one". A concurrent edit therefore makes the batch a no-op and the caller gets 409 (nothing half-applied; tested).

## What is refused

| Case | Answer |
|---|---|
| bad id / no such question / not registered | 404 |
| missing reason (3-300 chars), answer not among the options, <2 or >6 options, text too long, bad `changeKind` | 400 |
| not multiple choice (order, label, explain) or a diagram item | 400 (they stay in the code) |
| nothing changed | 400 |
| stale (`expectedVersionId` is not current), retired question, the new wording is already another question's wording or alias | 409 |
| **reject-level quality finding** (answer not in options, duplicate options, strong length tell, near-duplicate of another live prompt, filler distractor, ...) | **422 with the findings; nothing is written** |
| **warn-level finding** without `acknowledgeWarnings` | 409 `needsAcknowledgement` with the findings; with the box ticked it saves and the findings are kept in the audit row |

The form runs the same checker as you type and disables Save for a reject-level finding; the server is authoritative (it also knows the topic's other prompts for the near-duplicate rule and the decimal-comma policy: Grade 6 maths rejects a decimal point, other maths-type topics warn).

## Meaning vs wording

The form asks. It is forced to "meaning" when the answer or the SET of options changed (a different order or a reworded question or explanation is wording). A key fix therefore can never leave learners' review boxes holding a schedule built on the wrong key. With the Grade 6 review pilot this is a handful of rows.

## Restore (undo)

"History and restore" lists the versions; **Restore this wording** writes a NEW version copying the old one (history stays linear, nothing is deleted), audited as `restore`; it resets review boxes when the answer or options differ from the current wording. Restore records the checker's findings but does not block (undo must stay possible).

## When learners see it

Practice fetches read the content by id on every request, so a new wording shows on the next fetch. Retiring or adding a question shows within a minute (the id list is cached 60 s per Worker). Only the questions served from D1 (flag `serve_from_d1`) are affected; with the flag OFF the old item_cache path serves the old text, so turn the flag on for the grade before relying on edits for it.

## Tests

`src/lib/server/questions/edit.test.ts` (16, real migrations over node:sqlite): a good edit and its alias; reports and flags closed (only that question's); review boxes (wording untouched, meaning resets active ones and counts them, forced meaning when the key changes); input validation; reject-level findings block with nothing written; warn-level needs acknowledgement and is recorded; stale and retired; kinds and diagrams; alias clash; near-duplicate; AI becomes curated; a concurrent edit between the checks and the batch leaves nothing half-applied; restore (new version, audit, refusals, review reset); the detail view; the decimal policy. The three routes are covered by the admin guard-scan test.

The form was checked in the browser at 390 and 1280 px with the real component and mocked API responses (the admin pages themselves are behind Access): Save is disabled for duplicate options, for a missing reason and for unticked warnings; the request body is what the route expects.
