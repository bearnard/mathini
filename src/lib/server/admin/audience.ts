// Funnel and devices (ADR 0002, section 3).

import type { AdminDb } from './db';
import { eventWhere } from './queries';
import { SAST_OFFSET_MS, type Filters } from './filters';

const num = (v: unknown): number => (typeof v === 'number' ? v : Number(v ?? 0)) || 0;
const DAY_MS = 24 * 60 * 60 * 1000;

export interface FunnelStep {
  key: 'visitors' | 'onboarding' | 'signed_up' | 'practised' | 'returned';
  label: string;
  count: number;
}
export interface FunnelData {
  /** Every step counts devices (a random id per browser), so steps nest: each is a subset of the one above. */
  unit: 'devices';
  steps: FunnelStep[];
}

/**
 * Visitors -> started onboarding -> signed up -> finished a practice run -> came back on a later day.
 * Date range only: grade and subject filters do not apply (they would hide the untagged early steps).
 * Do Not Track visits have no device id, so they cannot be followed and are left out.
 *   signed up   = had onboarding_start, then a signup event, in the period
 *   practised   = ...then finished a practice run (any shell, anonymous or not) after signing up, in the period
 *   returned    = ...and was active again on a LATER South Africa day than the sign-up day, in the period
 * Using events for every step keeps one unit and one source, and does not depend on parent agreement
 * or on which topic shells record answers.
 */
export async function funnel(db: AdminDb, f: Filters): Promise<FunnelData> {
  const rows = await db.all<{ s1: number; s2: number; s3: number; s4: number; s5: number }>(
    `WITH base AS (
       SELECT device_id,
              MIN(CASE WHEN type = 'onboarding_start' THEN ts END) AS ob,
              MIN(CASE WHEN type = 'signup' THEN ts END) AS su
         FROM events
        WHERE ts >= ? AND ts < ? AND type != 'admin_delete' AND device_id != 'dnt'
        GROUP BY device_id),
     s3 AS (SELECT device_id, su FROM base WHERE ob IS NOT NULL AND su IS NOT NULL AND su >= ob),
     s4 AS (SELECT device_id, su FROM s3 WHERE EXISTS (
              SELECT 1 FROM events e WHERE e.device_id = s3.device_id AND e.type = 'practice_finish' AND e.ts >= s3.su AND e.ts < ?)),
     s5 AS (SELECT device_id FROM s4 WHERE EXISTS (
              SELECT 1 FROM events e WHERE e.device_id = s4.device_id AND e.type != 'admin_delete'
                AND e.ts >= ((CAST((s4.su + ${SAST_OFFSET_MS}) / ${DAY_MS} AS INTEGER) + 1) * ${DAY_MS} - ${SAST_OFFSET_MS}) AND e.ts < ?))
     SELECT (SELECT COUNT(*) FROM base) AS s1,
            (SELECT COUNT(*) FROM base WHERE ob IS NOT NULL) AS s2,
            (SELECT COUNT(*) FROM s3) AS s3,
            (SELECT COUNT(*) FROM s4) AS s4,
            (SELECT COUNT(*) FROM s5) AS s5`,
    [f.fromMs, f.toMs, f.toMs, f.toMs],
  );
  const r = rows[0] ?? { s1: 0, s2: 0, s3: 0, s4: 0, s5: 0 };
  return {
    unit: 'devices',
    steps: [
      { key: 'visitors', label: 'Visitors', count: num(r.s1) },
      { key: 'onboarding', label: 'Started sign-up', count: num(r.s2) },
      { key: 'signed_up', label: 'Signed up', count: num(r.s3) },
      { key: 'practised', label: 'Finished a practice run', count: num(r.s4) },
      { key: 'returned', label: 'Came back on a later day', count: num(r.s5) },
    ],
  };
}

export interface Share {
  name: string;
  count: number;
  /** count / total of this list, 0..1 */
  share: number;
}
export interface DevicesData {
  devices: Share[];
  browsers: Share[];
  os: Share[];
  /** Do Not Track visits (per visit); they have a device class, browser and OS but no device id. */
  dntSessions: number;
}

const TOP = 6;

/** Ranked shares; the tail beyond `top` is folded into "Other". null names read "Unknown". */
export function toShares(rows: { name: string | null; n: number }[], top = TOP): Share[] {
  const list = rows
    .map((r) => ({ name: r.name && r.name.trim() ? r.name : 'Unknown', count: num(r.n) }))
    .filter((r) => r.count > 0)
    .sort((a, b) => b.count - a.count || a.name.localeCompare(b.name));
  const head = list.slice(0, top);
  const tail = list.slice(top);
  if (tail.length > 0) head.push({ name: 'Other', count: tail.reduce((n, r) => n + r.count, 0) });
  const total = head.reduce((n, r) => n + r.count, 0);
  return head.map((r) => ({ ...r, share: total > 0 ? r.count / total : 0 }));
}

/** Unique devices by device class, browser family and OS family. */
export async function devices(db: AdminDb, f: Filters): Promise<DevicesData> {
  const w = eventWhere(f, `device_id != 'dnt'`);
  const by = (col: 'device' | 'browser' | 'os') =>
    db.all<{ name: string | null; n: number }>(`SELECT ${col} AS name, COUNT(DISTINCT device_id) AS n FROM events WHERE ${w.sql} GROUP BY ${col}`, w.params);
  const dw = eventWhere(f, `device_id = 'dnt'`);
  const [d, b, o, dnt] = await Promise.all([
    by('device'),
    by('browser'),
    by('os'),
    db.all<{ n: number }>(`SELECT COUNT(DISTINCT session_id) AS n FROM events WHERE ${dw.sql}`, dw.params),
  ]);
  return { devices: toShares(d), browsers: toShares(b), os: toShares(o), dntSessions: num(dnt[0]?.n) };
}
