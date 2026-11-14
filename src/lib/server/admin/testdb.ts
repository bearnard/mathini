// Test helper: an in-memory SQLite (node:sqlite, built into Node) built from the REAL
// migrations, so the admin SQL is tested exactly as it will run on D1.
// Returns null when node:sqlite is unavailable so callers can skip (never hard-fail).

import fs from 'node:fs';
import path from 'node:path';
import type { AdminDb, Param, Statement } from './db';

export interface TestDb {
  db: AdminDb;
  exec(sql: string, params?: Param[]): void;
  raw: { exec(sql: string): void };
}

export async function openTestDb(): Promise<TestDb | null> {
  let DatabaseSync: typeof import('node:sqlite').DatabaseSync;
  try {
    ({ DatabaseSync } = await import('node:sqlite'));
  } catch {
    return null;
  }
  const raw = new DatabaseSync(':memory:');
  const mig = (name: string) => fs.readFileSync(path.join(process.cwd(), 'migrations', name), 'utf8');
  // 0002 also alters item_cache (not needed here); drop those two statements.
  const m2 = mig('0002_students_results_gamification.sql')
    .replace(/ALTER TABLE item_cache[^;]*;/g, '')
    .replace(/CREATE INDEX IF NOT EXISTS idx_item_cache_task_section[^;]*;/g, '');
  raw.exec(m2);
  raw.exec(mig('0003_events.sql'));
  raw.exec(mig('0004_parent_consent.sql'));
  raw.exec(mig('0005_attempts_qkey.sql'));
  raw.exec(mig('0006_review_items.sql'));
  raw.exec(mig('0008_questions.sql'));
  raw.exec(mig('0009_question_reports.sql'));
  raw.exec(mig('0010_item_analysis.sql'));

  const run = (sql: string, params: Param[] = []) => raw.prepare(sql).run(...params);
  const db: AdminDb = {
    async all<T>(sql: string, params: Param[] = []) {
      return raw.prepare(sql).all(...params) as unknown as T[];
    },
    async batch(statements: Statement[]) {
      raw.exec('BEGIN');
      try {
        for (const s of statements) run(s.sql, s.params ?? []);
        raw.exec('COMMIT');
      } catch (e) {
        raw.exec('ROLLBACK');
        throw e;
      }
    },
  };
  return { db, exec: (sql, params) => void run(sql, params), raw };
}

/** Insert helpers for fixtures. */
export function insertStudent(t: TestDb, o: { id: string; created: number; grade?: number; consent?: number | null; name?: string }) {
  t.exec(
    `INSERT INTO students (id, login_code, pin_hash, pin_salt, display_name, real_name, grade, created_at, last_seen_at, parent_consent_at, consent_version)
     VALUES (?, ?, 'h', 's', ?, ?, ?, ?, ?, ?, ?)`,
    [o.id, `TEST-${o.id}`, o.name ?? o.id, `Real ${o.id}`, o.grade ?? 6, o.created, o.created, o.consent ?? null, o.consent ? 'v' : null],
  );
}
export function insertAttempt(t: TestDb, o: { student: string; ts: number; correct: boolean; grade?: number; subject?: string; topic?: string; section?: string }) {
  t.exec(
    `INSERT INTO attempts (student_id, task, section, grade, subject, topic, is_correct, xp_awarded, streak_at, created_at)
     VALUES (?, ?, ?, ?, ?, ?, ?, 0, 0, ?)`,
    [o.student, o.topic ?? 'electric-circuits', o.section ?? 'general', o.grade ?? 6, o.subject ?? 'nst', o.topic ?? 'electric-circuits', o.correct ? 1 : 0, o.ts],
  );
}
export function insertEvent(
  t: TestDb,
  o: { ts: number; type?: string; device?: string; session?: string; student?: string | null; grade?: number | null; subject?: string | null; topic?: string | null; country?: string | null; region?: string | null; city?: string | null; lat?: number | null; lon?: number | null; deviceClass?: string; browser?: string; os?: string; meta?: string | null; path?: string | null },
) {
  t.exec(
    `INSERT INTO events (ts, type, device_id, session_id, student_id, grade, subject, topic, path, country, region, region_code, city, timezone, lat, lon, device, browser, os, referrer, meta)
     VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, NULL, ?, NULL, ?, ?, ?, ?, ?, NULL, ?)`,
    [o.ts, o.type ?? 'page_view', o.device ?? 'dev-1', o.session ?? 'ses-1', o.student ?? null, o.grade ?? null, o.subject ?? null, o.topic ?? null, o.path ?? null, o.country ?? null, o.region ?? null, o.city ?? null, o.lat ?? null, o.lon ?? null, o.deviceClass ?? 'mobile', o.browser ?? 'Chrome', o.os ?? 'Android', o.meta ?? null],
  );
}
