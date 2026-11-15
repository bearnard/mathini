# Migration 0011: serving flags, edit audit and migration ledger

Step 2 of the plan in [d1-serving-plan.md](d1-serving-plan.md) (section 5.5). Additive only: three new tables and **one** seed row. Nothing existing is altered, so the running code ignores all of it, and nothing reads it until the serving branch (step 3) is deployed with its flag still OFF.

| Table | Purpose | Rows written when applied |
|---|---|---|
| `serving_flags` | `serve_from_d1` = `{"grades":[],"tasks":[],"exclude":[]}`. Empty = **OFF**. | 1 row + its primary-key index = 2 |
| `question_edits` | Audit of every admin edit, restore and scripted sync (`change_kind` is `wording`, `meaning`, `restore` or `sync`). `question_moderation` cannot hold these because of its `CHECK` on `action`. | 0 |
| `migration_ledger` | What each migration chunk wrote, against the daily budget. | 0 |

Total about **2 rows written**.

## Production runbook (owner; `wrangler d1 execute --remote --file`, never `migrations apply`)

0. Backup first (see the plan, section 5.6): `npx wrangler d1 export preppals --remote --output ~/Source/private/mathini/backups/preppals-<date>.sql`.
1. Baseline (read only): `npx wrangler d1 execute preppals --remote --command "SELECT name FROM sqlite_master WHERE name IN ('serving_flags','question_edits','migration_ledger')"` must return nothing.
2. Apply: `npx wrangler d1 execute preppals --remote --file migrations/0011_serving.sql`. Safe to run twice.
3. Check: the same query returns all three; `SELECT value FROM serving_flags WHERE key='serve_from_d1'` returns `{"grades":[],"tasks":[],"exclude":[]}`.

Flip the flag later (step 3 and after): `npx wrangler d1 execute preppals --remote --command "UPDATE serving_flags SET value='{\"grades\":[6],\"tasks\":[],\"exclude\":[]}', updated_at=strftime('%s','now')*1000 WHERE key='serve_from_d1'"`. Back to OFF: set the value back to the empty object above.

## Rollback

The code does not read these tables yet, so reverting is a no-op. To remove: `DROP TABLE migration_ledger; DROP TABLE question_edits; DROP TABLE serving_flags;`. Do **not** drop `question_edits` after the first real edit: it is the audit of who changed what.

## Tests

`src/lib/server/questions/servingSchema.test.ts` (node:sqlite, the real migration): the file contains no `DROP`, `ALTER`, `DELETE` or `UPDATE`; every `CREATE` is `IF NOT EXISTS`; applying it leaves every existing table and index byte-identical and adds exactly the three tables and one index; applying it twice does not reset the flag; the default flag is empty (OFF); the `change_kind` check refuses anything else; the ledger stores a chunk; `createVersion` still works on the migrated schema.
