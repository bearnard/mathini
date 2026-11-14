// "Live": who is active right now (ADR 0002, section 3). Filters do not apply: this is the last 5 minutes.

import type { AdminDb } from './db';

const num = (v: unknown): number => (typeof v === 'number' ? v : Number(v ?? 0)) || 0;
export const LIVE_WINDOW_MS = 5 * 60 * 1000;
const LIMIT = 50;

export interface LiveSession {
  /** Learner nickname (never the real name), or null for an anonymous visitor. */
  nickname: string | null;
  country: string | null;
  region: string | null;
  /** Only present when the learner's parent agreed. */
  city: string | null;
  device: string | null;
  /** The most recent topic this visit touched. */
  topic: string | null;
  subject: string | null;
  grade: number | null;
  lastType: string;
  ageSeconds: number;
}
export interface LiveData {
  windowMinutes: number;
  /** Visits (sessions) with any event in the window. */
  active: number;
  learners: number;
  anonymous: number;
  sessions: LiveSession[];
  generatedAt: number;
}

export async function live(db: AdminDb, now: number = Date.now()): Promise<LiveData> {
  const since = now - LIVE_WINDOW_MS;
  const rows = await db.all<{
    session_id: string; ts: number; type: string; student_id: string | null; display_name: string | null;
    country: string | null; region: string | null; city: string | null; device: string | null;
    topic: string | null; subject: string | null; grade: number | null;
  }>(
    `WITH recent AS (SELECT * FROM events WHERE ts >= ? AND ts <= ? AND type != 'admin_delete'),
          last AS (SELECT *, ROW_NUMBER() OVER (PARTITION BY session_id ORDER BY ts DESC, id DESC) AS rn FROM recent),
          topics AS (SELECT session_id, topic, subject, grade,
                            ROW_NUMBER() OVER (PARTITION BY session_id ORDER BY ts DESC, id DESC) AS rn
                       FROM recent WHERE topic IS NOT NULL)
     SELECT l.session_id, l.ts, l.type, l.student_id, s.display_name, l.country, l.region, l.city, l.device,
            t.topic, t.subject, t.grade
       FROM last l
       LEFT JOIN topics t ON t.session_id = l.session_id AND t.rn = 1
       LEFT JOIN students s ON s.id = l.student_id
      WHERE l.rn = 1
      ORDER BY l.ts DESC`,
    [since, now],
  );

  const sessions: LiveSession[] = rows.slice(0, LIMIT).map((r) => ({
    nickname: r.student_id ? (r.display_name ?? null) : null,
    country: r.country,
    region: r.region,
    city: r.city,
    device: r.device,
    topic: r.topic,
    subject: r.subject,
    grade: r.grade === null ? null : num(r.grade),
    lastType: r.type,
    ageSeconds: Math.max(0, Math.round((now - num(r.ts)) / 1000)),
  }));
  const learners = rows.filter((r) => r.student_id).length;
  return { windowMinutes: LIVE_WINDOW_MS / 60000, active: rows.length, learners, anonymous: rows.length - learners, sessions, generatedAt: now };
}
