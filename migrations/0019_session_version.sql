-- Security review follow-up: a learner's pp_session cookie is a signature with no server record, so a PIN reset could not sign out a device that was already
-- signed in. The cookie now carries a per-learner version (see src/lib/server/session.ts); a PIN reset bumps it and the old cookies stop working at once.
-- One nullable-free column with a constant default: every existing learner is version 0 and every existing cookie (signed over the id alone) counts as version 0.
ALTER TABLE students ADD COLUMN session_version INTEGER NOT NULL DEFAULT 0;
