// Housekeeping for adult sign-in tables, run by the daily scheduled job: old links, long-expired sessions and old rate counters. One batch
// (one D1 round trip), each delete bounded.
import type { AdminDb } from '../admin/db';

const DAY_MS = 86_400_000;
export const PURGE_BATCH = 200;

export async function purgeAuthData(db: AdminDb, now: number): Promise<void> {
  await db.batch([
    { sql: 'DELETE FROM magic_links WHERE id IN (SELECT id FROM magic_links WHERE created_at < ? LIMIT ?)', params: [now - DAY_MS, PURGE_BATCH] },
    { sql: 'DELETE FROM sessions WHERE id IN (SELECT id FROM sessions WHERE expires_at < ? OR revoked_at < ? LIMIT ?)', params: [now - 7 * DAY_MS, now - 7 * DAY_MS, PURGE_BATCH] },
    { sql: 'DELETE FROM auth_rate WHERE key IN (SELECT key FROM auth_rate WHERE window_start < ? LIMIT ?)', params: [now - DAY_MS, PURGE_BATCH] },
  ]);
}
