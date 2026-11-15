-- ADR 0003 section 1 and 6: school admins, and the teacher's in-app "new learner joined" marker.
-- Additive only: two new tables, nothing existing is altered, so the old code ignores them. Idempotent (CREATE ... IF NOT EXISTS).
-- A school admin is an adult with the user_roles role 'school_admin' AND a row here for each school they run: the role alone grants nothing.
-- They are appointed by the owner (the admin) per school, can confirm or decline teacher applications for THEIR school only, and see school-level
-- progress by nickname. They never see another school's data.

CREATE TABLE IF NOT EXISTS school_admins (
  user_id      TEXT    NOT NULL,
  school_id    TEXT    NOT NULL,
  appointed_by TEXT    NOT NULL,                  -- the owner's email
  appointed_at INTEGER NOT NULL,
  revoked_at   INTEGER,                           -- set when the owner removes them; the row is kept for the record
  PRIMARY KEY (user_id, school_id)
);
CREATE INDEX IF NOT EXISTS idx_school_admins_school ON school_admins (school_id);

-- When a teacher last looked at a class's new joiners. Learners who joined after seen_at are "new". No personal data.
CREATE TABLE IF NOT EXISTS class_join_seen (
  user_id  TEXT    NOT NULL,
  class_id TEXT    NOT NULL,
  seen_at  INTEGER NOT NULL,
  PRIMARY KEY (user_id, class_id)
);
