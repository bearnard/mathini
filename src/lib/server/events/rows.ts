import type { CleanEvent } from './validate';
import type { Location } from './location';
import { EMPTY_LOCATION, reduceLocationForDnt, reduceLocationToRegion } from './location';
import type { ParsedUa } from './ua';

export const INSERT_EVENT_SQL = `INSERT INTO events
  (ts, type, device_id, session_id, student_id, grade, subject, topic, path,
   country, region, region_code, city, timezone, lat, lon, device, browser, os, referrer, meta)
  VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;

/**
 * How much may be stored for this request. It can only ever REDUCE the data:
 *   full    signed in WITH parent/guardian consent: student id and full location
 *   region  anonymous, or signed in without consent: no student id, no city/coordinates
 *   country Do Not Track: no student id, country only
 */
export type PrivacyLevel = 'full' | 'region' | 'country';

export interface RowContext {
  /** Server clock, ms epoch. The client never supplies a timestamp. */
  now: number;
  /** From the verified session cookie only; never from the request body. Ignored unless privacy is 'full'. */
  studentId: string | null;
  location: Location | null;
  ua: ParsedUa;
  privacy: PrivacyLevel;
}

/** Bind values for INSERT_EVENT_SQL, one array per event. */
export function buildEventRows(events: readonly CleanEvent[], ctx: RowContext): (string | number | null)[][] {
  const full = ctx.location ?? EMPTY_LOCATION;
  const loc =
    ctx.privacy === 'full' ? full : ctx.privacy === 'region' ? reduceLocationToRegion(full) : reduceLocationForDnt(full);
  const studentId = ctx.privacy === 'full' ? ctx.studentId : null;
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
