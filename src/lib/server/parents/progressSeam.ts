// What a parent sees of a linked child's progress: the SAME ProgressResponse the learner's own page gets from GET /api/progress (ADR 0005),
// built by the same function (src/lib/server/progress/progressApi.ts). The only difference is who may ask: the learner's route takes the
// learner from their own session; the parent route takes the child from a parent_links row, checked in http.ts BEFORE this is called, so a
// parent can only ever build the progress of a child linked to them.
import type { AdminDb } from '../admin/db';
import { buildProgress } from '../progress/progressApi';
import type { ProgressResponse } from '../../shared/progressTypes';

export const loadChildProgress = (db: AdminDb, studentId: string, now: number): Promise<ProgressResponse | null> => buildProgress(db, studentId, now);
