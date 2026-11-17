-- Owner decision: ONLY the platform admin (/admin/teachers) approves teachers. A school admin no longer grants the teacher role; they RECOMMEND an
-- applicant, and the recommendation is shown to the platform admin next to the application. Additive only: one new table, nothing existing is altered,
-- so the old code ignores it. Idempotent (CREATE ... IF NOT EXISTS). Existing approved teachers are not touched.
-- One row per applicant (the latest recommendation). It is removed when the applicant sends a new application or deletes their account.

CREATE TABLE IF NOT EXISTS teacher_endorsements (
  user_id     TEXT    NOT NULL PRIMARY KEY,       -- the applicant
  school_id   TEXT    NOT NULL,                   -- the school whose admin recommended
  verdict     TEXT    NOT NULL CHECK (verdict IN ('recommend', 'not_recommend')),
  note        TEXT,
  endorsed_by TEXT    NOT NULL,                   -- the school admin's email
  endorsed_at INTEGER NOT NULL
);
