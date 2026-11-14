// Retention for raw events (ADR 0002: 400 days).
//
// The weekly cron trigger has no scheduled handler today, so /api/events calls
// this opportunistically (about 1 request in 200, via waitUntil). It is one
// bounded DELETE, so it can never run long. A cron route could call the same function.

export const RETENTION_DAYS = 400;
export const PURGE_BATCH = 500;
export const PURGE_PROBABILITY = 1 / 200;

export interface DbLike {
  prepare(sql: string): { bind(...values: unknown[]): { run(): Promise<unknown> } };
}

export function retentionCutoff(now: number, days = RETENTION_DAYS): number {
  return now - days * 24 * 60 * 60 * 1000;
}

/** Deletes up to `batch` events older than the retention window. */
export async function purgeOldEvents(
  db: DbLike,
  now: number = Date.now(),
  days: number = RETENTION_DAYS,
  batch: number = PURGE_BATCH,
): Promise<void> {
  await db
    .prepare('DELETE FROM events WHERE id IN (SELECT id FROM events WHERE ts < ? ORDER BY ts LIMIT ?)')
    .bind(retentionCutoff(now, days), batch)
    .run();
}

export function shouldPurge(random: number = Math.random()): boolean {
  return random < PURGE_PROBABILITY;
}
