// Retention for raw events (ADR 0002: 400 days).
//
// /api/events calls purgeOldEvents opportunistically (about 1 request in 200, via waitUntil); it is one bounded DELETE, so
// it can never run long. The weekly scheduled handler (src/worker.ts -> runScheduled) calls purgeOldEventsBounded.

export const RETENTION_DAYS = 400;
export const PURGE_BATCH = 500;
export const PURGE_PROBABILITY = 1 / 200;

export interface DbLike {
  prepare(sql: string): { bind(...values: unknown[]): { run(): Promise<unknown> } };
}

function changesOf(res: unknown): number {
  const n = (res as { meta?: { changes?: number } } | null)?.meta?.changes;
  return typeof n === 'number' ? n : 0;
}

export function retentionCutoff(now: number, days = RETENTION_DAYS): number {
  return now - days * 24 * 60 * 60 * 1000;
}

/** Deletes up to `batch` events older than the retention window. Returns how many rows it deleted (0 if unknown). */
export async function purgeOldEvents(
  db: DbLike,
  now: number = Date.now(),
  days: number = RETENTION_DAYS,
  batch: number = PURGE_BATCH,
): Promise<number> {
  const res = await db
    .prepare('DELETE FROM events WHERE id IN (SELECT id FROM events WHERE ts < ? ORDER BY ts LIMIT ?)')
    .bind(retentionCutoff(now, days), batch)
    .run();
  return changesOf(res);
}

/** The weekly job: keeps deleting batches until none is left or `maxBatches` is reached (bounded, so it cannot run long). */
export async function purgeOldEventsBounded(db: DbLike, now: number = Date.now(), maxBatches = 20): Promise<number> {
  let total = 0;
  for (let i = 0; i < maxBatches; i++) {
    const n = await purgeOldEvents(db, now);
    total += n;
    if (n < PURGE_BATCH) break;
  }
  return total;
}

export function shouldPurge(random: number = Math.random()): boolean {
  return random < PURGE_PROBABILITY;
}
