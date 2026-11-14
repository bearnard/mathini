-- PrepPals D1 migration: parent/guardian consent for activity and approximate-location
-- recording (ADR 0002, P1 addendum). Additive: existing learners keep NULL until they
-- agree in the one-time prompt.
--
--   parent_consent_at  ms epoch when the learner ticked the parent/guardian box (NULL = not consented)
--   consent_version    which notice text they agreed to (see CONSENT_VERSION in lib/privacyNotice.ts)

ALTER TABLE students ADD COLUMN parent_consent_at INTEGER;
ALTER TABLE students ADD COLUMN consent_version TEXT;
