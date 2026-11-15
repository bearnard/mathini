# Teacher review scripts (ADR 0004, parts 4 and 5)

Both scripts are **dry run by default** and never touch D1. Shared code lives in `src/lib/server/teacherReview/`.

## `scripts/apply-review-changes.ts` (part 4)

Applies accepted lesson-line changes from an export of the D1 table `lesson_change_queue`.

```
node --import tsx scripts/apply-review-changes.ts QUEUE.json [--apply] [--root src/curriculum] [--report FILE] [--sql FILE] [--commit SHA] [--test]
```

- Input: rows with `id, file, old_text, new_text, status` (an array, `{results: [...]}` or `[{results: [...]}]`).
- A row is applied only if its status is `pending`, `old_text` occurs **exactly once** in the file, `old_text` differs from `new_text`, the path is a relative `.ts`/`.tsx` file with no `..` (test files excluded), and the file has no uncommitted edits. Anything else is refused with a reason; the other rows still apply.
- Rows to one file run in id order, each against the result of the one before.
- Without `--apply` nothing is written. A markdown report is always written (`review-changes-report.md` by default). `--sql` writes `UPDATE lesson_change_queue ...` statements (applied or failed) for the owner to run. `--test` runs `npm test` after `--apply`.
- Exit code 0 when every row was fine, 1 when any row was refused or the tests failed, 2 for bad arguments.

## `scripts/import-teacher-check.ts` (part 5)

Turns `audit/teacher-check.md` into review packs.

```
node --import tsx scripts/import-teacher-check.ts [--md ../audit/teacher-check.md] [--d1 ../audit/d1-serving] [--out DIR] [--size 40] [--include-repeated]
```

- Question items resolve to a D1 question id and current version id (matched on prompt and key in the D1 exports `questions.json` and `question_versions.json`). Lesson items resolve to `{file, anchor_text}` and must occur exactly once in the file. Scope items (the NST exam scope) have no file.
- Packs: `isixhosa-gN`, `afrikaans-gN`, `afrikaans-g9-new-questions` (items 7 to 12 of every G9 Afrikaans bank), `nst-exam-scope`; split into packs of at most `--size` items.
- Output in `--out`: one idempotent `pack-NN-<key>.sql` per pack (safe to run twice; it finds the pack by title) and `report.md` with every unresolved item and why.
- `--include-repeated` also makes items for sentences that occur more than once in their file (`context.repeated = true`). A teacher can still check them, but `apply-review-changes.ts` refuses to change them, so a person has to.
- The SQL assumes the ADR's table and column names (`review_packs`, `review_pack_items`). Check it against migration 0012 before running.
