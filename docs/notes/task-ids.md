# Task ids

A task id (`task="..."` on a lesson's `CapsSubjectTopic`, the key in `src/lib/server/caps/tasks/*.json`) names ONE question pool. Questions live in D1 keyed by (task, prompt) (`qkey`), practice serves pool items from `item_cache` by task, and review cards, attempts and topic progress are all keyed by task.

**Rule: a task id belongs to exactly one lesson.** Two lessons on one id share one pool, so a learner of one subject is served the other subject's questions (found 2026-11-17, #905: Afrikaans and English, Afrikaans and isiXhosa, Life Sciences and Physical Sciences).

When a topic exists in two subjects of the same grade (for example Afrikaans FAL and English HL both have "Exam Writing Practice" in Term 4), give the second one a subject prefix: `gr7-exam-writing-practice-t4` (English) and `gr7-afr-exam-writing-practice-t4` (Afrikaans); `gr10-revision-examination-practice-t4` (Life Sciences) and `gr10-ps-revision-examination-practice-t4` (Physical Sciences).

Enforced by `src/taskIdsUnique.test.ts` (lists the files that clash) and by `scripts/question-sync.ts`, which refuses to run while two lessons share a task id. Renaming a task id on a live lesson is a data change: questions are keyed by qkey(task, prompt), so the old rows must be retired and the lesson's bank re-registered by the sync (see audit/wave-a/dup-task-ids-apply.sql for the worked example).

Registry topic ids (`id:` in a grade's index.ts) are looked up inside one grade and one subject by the deep link (`?grade=&subject=&topic=`), and public slugs come from titles within a subject, so the same registry id in two grades (the isiXhosa ones) is not a problem.
