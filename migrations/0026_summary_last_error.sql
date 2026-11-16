-- Why the last weekly-summary attempt for a parent failed: a SHORT text (error name and message, at most 200 characters, with any address or link
-- removed). Additive: a nullable column. The job still works if this migration has not been applied yet (it falls back to a write without it).
ALTER TABLE summary_sent ADD COLUMN last_error TEXT;
