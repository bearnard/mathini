-- Teacher/parent progress reads finished runs per learner ("WHERE student_id IN (...) AND status = 'finished' ORDER BY finished_at DESC").
-- Until now they used idx_runs_status (a scan of every finished run); this lets them seek by learner. Additive and safe to re-run.
CREATE INDEX IF NOT EXISTS idx_runs_student_status_finished ON runs (student_id, status, finished_at);
