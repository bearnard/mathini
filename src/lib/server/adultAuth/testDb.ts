// Test helper: migration 0013 over node:sqlite, behind the same AdminDb interface the code uses on D1.
import fs from 'node:fs';
import { openTestD1 } from '../testD1';
import type { AdminDb } from '../admin/db';

export const NOW = 1_800_000_000_000;

export async function openAuthDb() {
  const t = await openTestD1();
  if (!t) return null;
  t.raw.exec(fs.readFileSync('migrations/0013_adult_auth.sql', 'utf8'));
  const db: AdminDb = {
    async all<T>(sql: string, params: (string | number | null)[] = []) {
      return t.raw.prepare(sql).all(...params) as unknown as T[];
    },
    async batch(statements) {
      t.raw.exec('BEGIN');
      try {
        for (const s of statements) t.raw.prepare(s.sql).run(...(s.params ?? []));
        t.raw.exec('COMMIT');
      } catch (e) {
        t.raw.exec('ROLLBACK');
        throw e;
      }
    },
  };
  return { t, raw: t.raw, db };
}

export type AuthTestDb = NonNullable<Awaited<ReturnType<typeof openAuthDb>>>;

/** A mailer that records what it was asked to send. */
export function recordingMailer() {
  const sent: { to: string; subject: string; text: string; html?: string }[] = [];
  return { sent, mailer: { async send(m: { to: string; subject: string; text: string; html?: string }) { sent.push(m); } } };
}

/** The token in a sign-in link inside an email body. */
export const tokenIn = (text: string): string => /#([A-Za-z0-9_-]{43})/.exec(text)?.[1] ?? '';
