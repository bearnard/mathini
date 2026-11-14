import type { CleanEvent } from './validate';
import type { Location } from './location';
import { EMPTY_LOCATION, reduceLocationForDnt } from './location';
import type { ParsedUa } from './ua';

export const INSERT_EVENT_SQL = `INSERT INTO events
  (ts, type, device_id, session_id, student_id, grade, subject, topic, path,
   country, region, region_code, city, timezone, lat, lon, device, browser, os, referrer, meta)
  VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;

export interface RowContext {
  /** Server clock, ms epoch. The client never supplies a timestamp. */
  now: number;
  /** From the verified session cookie only; never from the request body. */
  studentId: string | null;
  location: Location | null;
  ua: ParsedUa;
  dnt: boolean;
}

/**
 * Bind values for INSERT_EVENT_SQL, one array per event.
 * Do Not Track can only reduce what is stored: student id, region, city and
 * coordinates are dropped and only the country is kept.
 */
export function buildEventRows(events: readonly CleanEvent[], ctx: RowContext): (string | number | null)[][] {
  const loc = ctx.dnt ? reduceLocationForDnt(ctx.location ?? EMPTY_LOCATION) : (ctx.location ?? EMPTY_LOCATION);
  const studentId = ctx.dnt ? null : ctx.studentId;
  return events.map((e) => [
    ctx.now,
    e.type,
    e.deviceId,
    e.sessionId,
    studentId,
    e.grade,
    e.subject,
    e.topic,
    e.path,
    loc.country,
    loc.region,
    loc.region_code,
    loc.city,
    loc.timezone,
    loc.lat,
    loc.lon,
    ctx.ua.device,
    ctx.ua.browser,
    ctx.ua.os,
    e.referrer,
    e.meta,
  ]);
}
