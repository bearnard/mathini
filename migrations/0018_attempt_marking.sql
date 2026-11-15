-- Security review follow-up: the SERVER marks multiple-choice answers (ADR 0005 progress must not depend on what the browser claims). Two new columns on attempts,
-- both nullable, so every existing row and every old client keeps working. Run once (D1 migrations run once); /api/attempts still stores an answer if they are missing.
--   marked_by       'server' = the server worked out is_correct from the option the learner chose and the question's answer;
--                   'client' = the server could not mark it (a generated or non-multiple-choice exercise, a question it does not hold), so is_correct is the browser's word;
--                   NULL     = an attempt from before this migration.
--   client_correct  what the browser claimed (1 or 0). It differs from is_correct when the server corrected it, which is how a tampered client shows up.
ALTER TABLE attempts ADD COLUMN marked_by TEXT;
ALTER TABLE attempts ADD COLUMN client_correct INTEGER;
