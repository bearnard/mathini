// ADR 0003 phase 3: the teacher's in-app "new learner joined" marker (no email). A teacher has a "seen" time per class (class_join_seen); learners who
// joined after it and are still in the class are NEW. Opening the class marks them seen. A class made after this feature starts at its creation time; a
// class that already existed starts at the teacher's first look (so nobody is told that 30 learners "just joined" on the day the feature ships).
import type { AdminDb } from '../admin/db';
import { isUuid } from './classes';

export interface ClassNotice { classId: string; name: string; count: number }
export interface JoinNotices { total: number; classes: ClassNotice[] }

/** New joiners per active class of this teacher. Writes only to start the baseline for a class the teacher has never looked at (one small insert each). */
export async function joinNotices(db: AdminDb, teacherId: string, now: number): Promise<JoinNotices> {
  const classes = await db.all<{ id: string; name: string; seen_at: number | null }>(
    `SELECT c.id, c.name, s.seen_at FROM classes c LEFT JOIN class_join_seen s ON s.class_id = c.id AND s.user_id = ?
     WHERE c.teacher_user_id = ? AND c.status = 'active' ORDER BY c.created_at LIMIT 50`,
    [teacherId, teacherId],
  );
  const fresh = classes.filter((c) => c.seen_at === null);
  if (fresh.length > 0) {
    await db.batch(fresh.map((c) => ({ sql: 'INSERT OR IGNORE INTO class_join_seen (user_id, class_id, seen_at) VALUES (?, ?, ?)', params: [teacherId, c.id, now] })));
  }
  const known = classes.filter((c) => c.seen_at !== null);
  const out: ClassNotice[] = [];
  if (known.length > 0) {
    const counts = await db.all<{ class_id: string; n: number }>(
      `SELECT m.class_id, COUNT(*) AS n FROM class_members m JOIN class_join_seen s ON s.class_id = m.class_id AND s.user_id = ?
       WHERE m.left_at IS NULL AND m.joined_at > s.seen_at AND m.class_id IN (SELECT value FROM json_each(?)) GROUP BY m.class_id`,
      [teacherId, JSON.stringify(known.map((c) => c.id))],
    );
    for (const c of known) {
      const n = Number(counts.find((x) => x.class_id === c.id)?.n ?? 0);
      if (n > 0) out.push({ classId: c.id, name: c.name, count: n });
    }
  }
  return { total: out.reduce((s, c) => s + c.count, 0), classes: out };
}

/** The teacher has looked at the class's learners: everyone who joined so far is seen. Only their own class. */
export async function markJoinsSeen(db: AdminDb, teacherId: string, classId: unknown, now: number): Promise<{ ok: true } | { ok: false; status: number; error: string }> {
  if (!isUuid(classId)) return { ok: false, status: 404, error: 'Not found' };
  const c = (await db.all<{ id: string }>('SELECT id FROM classes WHERE id = ? AND teacher_user_id = ?', [classId, teacherId]))[0];
  if (!c) return { ok: false, status: 404, error: 'Not found' };
  await db.batch([{ sql: `INSERT INTO class_join_seen (user_id, class_id, seen_at) VALUES (?, ?, ?) ON CONFLICT(user_id, class_id) DO UPDATE SET seen_at = excluded.seen_at`, params: [teacherId, classId, now] }]);
  return { ok: true };
}

/** When the teacher last looked at this class's joiners, or null (never). Used to mark the roster's new learners. */
export async function seenAt(db: AdminDb, teacherId: string, classId: string): Promise<number | null> {
  const r = (await db.all<{ seen_at: number }>('SELECT seen_at FROM class_join_seen WHERE user_id = ? AND class_id = ?', [teacherId, classId]))[0];
  return r ? Number(r.seen_at) : null;
}
