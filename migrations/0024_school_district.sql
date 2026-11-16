-- Leaderboard redesign: schools get an optional education DISTRICT (the province already exists). Set by the owner in /admin/schools.
-- Schools without a district never appear on a district board. Additive and nullable, so the old code ignores it.
-- NOT idempotent: ALTER TABLE ... ADD COLUMN fails if run twice. Run once:
--   npx wrangler d1 execute preppals --remote --file migrations/0024_school_district.sql
ALTER TABLE schools ADD COLUMN district TEXT;
