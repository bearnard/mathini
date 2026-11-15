# Teacher review: owner's guide

For the owner. Teachers check questions and lesson lines by a private link, you read their answers, and the accepted changes go live. Design: [ADR 0004](../adr/0004-teacher-review-links.md). Scripts: [teacher-review-scripts.md](teacher-review-scripts.md).

**The short version:** make or open a pack, create one link per teacher, send it, read the results, decide each item, then apply (questions go live by themselves, lesson lines need one script run and a deploy).

## 1. Before you start

- Everything on this side is at **`/admin/reviews`** (behind Cloudflare Access, like the rest of `/admin`).
- **A pack must be `open` to be used.** A `draft` pack has no invite form and a teacher's link answers "not found". The 29 packs imported on 2026-11-15 were `draft` and were opened in production on the same day; `scripts/import-teacher-check.ts` now creates packs as `open`. If you ever see a `draft` pack, open it (production database, after a backup):
  `UPDATE review_packs SET status = 'open' WHERE id = <pack id> AND status = 'draft';`

## 2. Make a pack (or use an imported one)

The imported packs (Afrikaans and isiXhosa by grade, the Grade 9 new questions, the NST exam scope question) already hold the items from `audit/teacher-check.md`, each with the doubt that put it there. Use them as they are.

To make your own: `/admin/reviews`, **New pack**.

1. Give it a title (3 to 120 characters).
2. Questions: filter by subject, grade, language, "needs teacher check", or paste question ids, press **Find**, tick the ones you want (**Pick the first 60** is a shortcut), and type a doubt for each ("is Kusasa morning or tomorrow?"). The teacher sees the doubt.
3. Lesson lines: **Add a lesson line**, enter the file (path under `src/curriculum`), the exact text, and a doubt. The text must occur **exactly once** in that file.
4. **Create pack**. A pack holds at most **60 items**; 10 to 40 is easier for a teacher on a phone.

## 3. Invite a teacher

Open the pack, **Reviewers**, then:

1. Enter a display name ("Ms N.", used only so you can tell the links apart), an optional note (a WhatsApp number or school) and how many **days** the link lasts (1 to 90, default 14). Press **Create link**.
2. The link looks like `https://<site>/teacher-review#<long token>`. **Copy it now: it is shown once and cannot be recovered.** Send it by WhatsApp or email yourself; the app sends nothing.
3. Each teacher gets their own link. Give two teachers the same pack and they each answer independently; they never see each other, the learners or anything outside the pack.

Reviewer states you will see: *not opened*, *in progress*, *finished*, *expired*, *revoked*.

**Lost or leaked link?** Press **Revoke** next to that reviewer. It stops working at once, and their answers so far stay. Make a new link for them.

**Close pack** (top of the pack page) stops new links; links already made keep working until they end. Close a pack when its review is done. The teachers' names and notes are deleted 90 days after the pack closes (their answers stay as "Reviewer 1", "Reviewer 2").

What the teacher does: opens the link on a phone, reads a short intro, then goes through the items one at a time and marks each **Correct as is**, **Suggest a change** (edits the wording in place) or **Not sure**, with an optional confidence and reason. It saves as they go and they can come back with the same link until it expires.

## 4. Read the results

`/admin/reviews/<pack>` lists every item with all reviewers' answers side by side and a line saying how far they agree ("3/3 correct", "2 suggest the same change", "disagree"). Filter: **All**, **Not decided**, **With suggestions**, **Disagreements**.

## 5. Decide each item

For an item where reviewers suggested a change:

- **Suggest a merge** asks the AI (Gemini, already configured) for one merged proposal, a one-line reason and the points where reviewers disagree. If all the suggestions are the same it just uses that and makes no AI call. If the AI is down you get "decide manually". The AI **never applies anything**, and reviewer names are never sent to it.
- Then choose one:
  - **Accept the merged version** (after Suggest a merge)
  - **Accept <Reviewer N>'s** version
  - **Edit then accept** (type your own wording)
  - **Keep original** (the item is marked *verified by a teacher*)
  - **Ask again** (copies the item into a new pack called "Ask again: <title>" for another reviewer)
- Set **Change is a** to *wording fix* or *change of meaning* (a meaning change resets spaced-review progress on that question), and add an optional note for the audit trail.
- An item already decided cannot be decided twice, except *Ask again*.

If the page says **"This question was edited after the pack was made"**, the teacher saw an older wording, so you cannot accept a change. Keep the original or ask again.

## 6. What happens when you accept

**A question** goes through the normal edit pipeline (the same as `/admin/questions`): the validator runs, a new version is written, an audit row records "Teacher review", the pack and the reviewers, and the change is **live within a minute**. Nothing to deploy. A change made this way is a human edit, so a later code-to-D1 sync will not overwrite it ([d1-sync.md](d1-sync.md)). If the validator refuses the new wording the page shows why and nothing is written.

**A lesson line** lives in code, so accepting it only adds a row to `lesson_change_queue` (status `pending`). It reaches learners after steps 7 to 9.

## 7. Apply the lesson changes (needs the repo)

Do this on a clean branch off `main` (the script refuses files with uncommitted edits).

1. Export the pending queue, with the repeat count from the pack item:
   ```
   npx wrangler d1 execute preppals --remote --json --command "SELECT q.*, json_extract(i.context, '$.occurrences') AS expected_count FROM lesson_change_queue q LEFT JOIN review_pack_items i ON i.id = q.item_id WHERE q.status = 'pending'" > queue.json
   ```
2. Dry run (writes nothing, writes a report):
   ```
   node --import tsx scripts/apply-review-changes.ts queue.json --sql status.sql
   ```
   Read `review-changes-report.md`. A row is refused, with the reason, if the old text is not found, occurs more or fewer times than expected, or the file has uncommitted edits. A sentence the lesson repeats is replaced everywhere, only when the count matches what the import recorded.
3. Apply and run the tests:
   ```
   node --import tsx scripts/apply-review-changes.ts queue.json --apply --test --sql status.sql --commit <short sha or label>
   ```
4. Look at the lessons in a browser (390 and 1280 px, [browser-check.md](browser-check.md)), then commit and merge as usual.

## 8. Deploy

Deploy the merged code as usual. Lesson text changes reach learners with that deploy.

## 9. Close the loop

- Run `status.sql` against the production database: it marks each queue row `applied` (with the commit) or `failed`. Refused rows stay for you to fix by hand or re-queue.
- If a lesson change also changed a **bank question** in code (a lesson line that is also a bank key), run the code-to-D1 sync so learners see it ([d1-sync.md](d1-sync.md), [merge-checklist.md](merge-checklist.md)). Fixing the question in `/admin/questions` instead avoids that.
- When a pack is finished, each item shows its outcome (*verified*, *changed*, *still unsure*); close the pack.

## Quick troubleshooting

| What you see | Why | What to do |
|---|---|---|
| No invite form on a pack | The pack is `draft` or closed | Open a draft pack (section 1); a closed pack stays closed, make a new one |
| Teacher says "not found" | The link is revoked, expired or its pack is draft | Check the reviewer's state; make a new link |
| "Suggest a merge" says decide manually | The AI is unavailable | Pick a reviewer's version or edit it yourself |
| Accept is refused with validator messages | The new wording breaks a question rule | Edit the wording and accept again |
| A row is refused by `apply-review-changes.ts` | The lesson text changed since, or the text repeats | Read the reason in the report; fix by hand in the file |
