// Rate limits for adult sign-in (ADR 0003 section 2): a soft in-memory limit per Worker isolate that stops a runaway client without touching
// the database, plus a small durable counter in D1 (auth_rate) so the limit holds across isolates. A key that is already blocked costs a
// READ only, so an attacker cannot spend the free-plan write budget by hammering one key.
import type { AdminDb } from '../admin/db';

export interface Limiter {
  allow(key: string, now: number): boolean;
}

/** Fixed-window counter in memory. At the key cap it forgets the OLDEST key, never everything (a client must not be able to flush the limit). */
export function createLimiter(limit: number, windowMs: number, maxKeys = 5000): Limiter {
  const buckets = new Map<string, { start: number; count: number }>();
  return {
    allow(key, now) {
      if (buckets.size >= maxKeys && !buckets.has(key)) buckets.delete(buckets.keys().next().value as string);
      const b = buckets.get(key);
      if (!b || now - b.start >= windowMs) {
        buckets.set(key, { start: now, count: 1 });
        return true;
      }
      if (b.count >= limit) return false;
      b.count += 1;
      return true;
    },
  };
}

/** True while `key` is under `limit` for the current window; counts this call. Blocked keys are read, not written. */
export async function allowDurable(db: AdminDb, key: string, limit: number, windowMs: number, now: number): Promise<boolean> {
  const row = (await db.all<{ window_start: number; count: number }>('SELECT window_start, count FROM auth_rate WHERE key = ?', [key]))[0];
  if (row && now - Number(row.window_start) < windowMs) {
    if (Number(row.count) >= limit) return false;
    await db.batch([{ sql: 'UPDATE auth_rate SET count = count + 1 WHERE key = ? AND window_start = ?', params: [key, row.window_start] }]);
    return true;
  }
  await db.batch([{ sql: 'INSERT INTO auth_rate (key, window_start, count) VALUES (?, ?, 1) ON CONFLICT(key) DO UPDATE SET window_start = excluded.window_start, count = 1', params: [key, now] }]);
  return true;
}
