# Serving and review from D1, behind the flag (step 3)

Plan: [d1-serving-plan.md](d1-serving-plan.md) sections 4.1 and 4.2. Needs migration 0011 ([d1-serving-schema.md](d1-serving-schema.md)) for the flag; **works without it** (a missing table means OFF).

## What it does

- `src/lib/server/serving/flags.ts`: `serving_flags` row `serve_from_d1` = `{"grades":[],"tasks":[],"exclude":[]}`, cached 30 s. `exclude` wins, then `tasks`, then the task's grade (from the generated topic registry). Any problem (bad value, missing table, D1 error) is **OFF**.
- `src/lib/server/serving/served.ts`: `servePool` is what `/api/caps/<subject>` and `/api/caps/grade6` now call. OFF (the default), a task that is not switched on, an empty result or **any error**: exactly the old `fetchPoolItems`. ON: the current approved version of each registered question.
  - The task's id list is cached 60 s per Worker; the ~20 picked questions' content is read **by id on every request**, so an edit is live on the next fetch and a retire or a new question within a minute.
  - Order: curated first, then clean AI rows, then warn-level AI rows (`CURATED_FIRST`, owner question 1 in the plan).
  - Left out of D1 serving: retired questions, rejected AI rows (`quality_score = 0`; this filter applies to AI rows only, so a curated question linked to a retired seed copy is still served), versions that are not `approved`, questions that are not multiple choice, and diagram items. Those stay in the code banks.
  - Items carry `qid` (stable id) and `vid` (version served); AI items keep their `item_cache` `id`, curated items have none.
- `src/lib/server/serving/review.ts`: `/api/review/today` fills its `pool` map from D1 for candidates whose task is switched on, **by stable id**, so an edited question resolves even though its new wording hashes to another qkey. The review client already prefers the server's entry over the code bank, so no client change was needed. The existing item_cache lookup still runs for anything D1 did not resolve.

## Not in this step

- The browser does not use `qid` / `vid` yet. It still hashes the prompt it shows; the alias in `question_versions.qkey` resolves that to the canonical id, so attempts and reports are already correct.
- Topics without `task` + `apiPath` (static mode) never ask the server.
- The admin edit route and form, the sync, the rename map.

## Known behaviours to be aware of when you switch it on

1. Order / label / explain / diagram items are never served from D1 (a row cannot carry their fields). The Grade 6 NST, History and Geography hooks **already add the bank's non-multiple-choice items to every server batch, whatever its size** (`withCuratedExtras` runs before the top-up, which itself only runs below 10 items), so those items stay in practice with the flag ON; `curatedExtras.test.ts` pins this on the real banks (38 items, all Grade 6; the Afrikaans bank has none). Review also never resolves them from D1 (they would show as plain multiple choice): they fall back to the code bank.
2. Curated questions now come before AI questions in a mixed topic (today the AI pool is served and the bank only tops up).
3. AI rows that are not registered in `questions` yet are not served from D1; if the task has none registered at all, the old path serves it.

## Flip it (owner)

```
# Grade 6 only
npx wrangler d1 execute preppals --remote --command "UPDATE serving_flags SET value='{\"grades\":[6],\"tasks\":[],\"exclude\":[]}', updated_at=strftime('%s','now')*1000 WHERE key='serve_from_d1'"
# One task only
... value='{"grades":[],"tasks":["ancient-medicine"],"exclude":[]}' ...
# OFF again (takes effect within about 30 s, no deploy)
... value='{"grades":[],"tasks":[],"exclude":[]}' ...
```

## Tests

`src/lib/server/serving/serving.test.ts` (14, node:sqlite with the real migrations): flag parsing and precedence; every Grade 6 task slug is known to the grade lookup; flag caching and the OFF fallbacks; selection order; served fields; what is not served; edit visible at once and retire after the id cache expires; **flag OFF returns exactly what `fetchPoolItems` returns**; ON, fallbacks (nothing registered, D1 error); `exclude`; review resolves an edited question by its stable id.
