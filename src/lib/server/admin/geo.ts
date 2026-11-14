// "Where" and "When" aggregates for the admin dashboard (ADR 0002, section 3).
//
// Location comes from events only (country, province, and city for learners whose parent agreed).
// A row without a city is province-level: anonymous visitors and learners without agreement.

import type { AdminDb, Param } from './db';
import { eventWhere } from './queries';
import { SAST_OFFSET_MS, type Filters } from './filters';
import { PROVINCE_IDS, provinceFor, type ProvinceId } from './provinces';

export interface Metrics {
  /** All recorded events (activity). */
  events: number;
  /** Unique devices (Do Not Track visits are counted separately, per visit). */
  visitors: number;
  dntSessions: number;
  /** Unique signed-in learners (only learners with parent agreement are ever linked to events). */
  learners: number;
  /** Questions practised: sum of the total of finished practice runs. */
  questions: number;
}

const ZERO: Metrics = { events: 0, visitors: 0, dntSessions: 0, learners: 0, questions: 0 };
const num = (v: unknown): number => (typeof v === 'number' ? v : Number(v ?? 0)) || 0;

const METRICS_SQL = `
  COUNT(*) AS events,
  COUNT(DISTINCT CASE WHEN device_id != 'dnt' THEN device_id END) AS visitors,
  COUNT(DISTINCT CASE WHEN device_id = 'dnt' THEN session_id END) AS dnt,
  COUNT(DISTINCT student_id) AS learners,
  COALESCE(SUM(CASE WHEN type = 'practice_finish' THEN json_extract(meta, '$.total') ELSE 0 END), 0) AS questions`;

interface MetricRow {
  events: number;
  visitors: number;
  dnt: number;
  learners: number;
  questions: number;
}
const toMetrics = (r: MetricRow): Metrics => ({
  events: num(r.events),
  visitors: num(r.visitors),
  dntSessions: num(r.dnt),
  learners: num(r.learners),
  questions: num(r.questions),
});
const add = (a: Metrics, b: Metrics): Metrics => ({
  events: a.events + b.events,
  visitors: a.visitors + b.visitors,
  dntSessions: a.dntSessions + b.dntSessions,
  learners: a.learners + b.learners,
  questions: a.questions + b.questions,
});

export interface ProvinceStat extends Metrics {
  id: ProvinceId;
}
export interface CityStat extends Metrics {
  city: string;
  country: string | null;
  region: string | null;
  province: ProvinceId | null;
  lat: number | null;
  lon: number | null;
}
export interface PlaceRow extends Metrics {
  country: string | null;
  region: string | null;
  /** null = province-level (anonymous, or no parent agreement) */
  city: string | null;
  province: ProvinceId | null;
}
export interface CountryStat extends Metrics {
  country: string | null;
}
export interface GeoData {
  total: Metrics;
  /** All nine provinces, zero-filled. */
  provinces: ProvinceStat[];
  /** South African activity with no province (e.g. Do Not Track keeps only the country). */
  southAfricaUnlocated: Metrics;
  /** South African cities (map bubbles), busiest first. */
  cities: CityStat[];
  /** Country / province / city rows, busiest first (capped). */
  table: PlaceRow[];
  /** Everything outside South Africa, by country. */
  world: CountryStat[];
}

const TABLE_LIMIT = 200;

export async function geo(db: AdminDb, f: Filters): Promise<GeoData> {
  const ev = eventWhere(f);
  const run = <T,>(sql: string, params: Param[] = ev.params) => db.all<T>(sql, params);

  const [placeRows, regionRows, countryRows, totalRow] = await Promise.all([
    run<MetricRow & { country: string | null; region: string | null; region_code: string | null; city: string | null; lat: number | null; lon: number | null }>(
      `SELECT country, region, region_code, city, AVG(lat) AS lat, AVG(lon) AS lon, ${METRICS_SQL}
         FROM events WHERE ${ev.sql} GROUP BY country, region, region_code, city`,
    ),
    run<MetricRow & { country: string | null; region: string | null; region_code: string | null }>(
      `SELECT country, region, region_code, ${METRICS_SQL} FROM events WHERE ${ev.sql} GROUP BY country, region, region_code`,
    ),
    run<MetricRow & { country: string | null }>(`SELECT country, ${METRICS_SQL} FROM events WHERE ${ev.sql} GROUP BY country`),
    run<MetricRow>(`SELECT ${METRICS_SQL} FROM events WHERE ${ev.sql}`),
  ]);

  // Provinces: distinct counts come from the region-level query so a device seen in two cities counts once.
  const byProvince = new Map<ProvinceId, Metrics>(PROVINCE_IDS.map((id) => [id, { ...ZERO }]));
  let unlocated: Metrics = { ...ZERO };
  for (const r of regionRows) {
    if (r.country !== 'ZA') continue;
    const id = provinceFor(r.region, r.region_code);
    if (id) byProvince.set(id, add(byProvince.get(id)!, toMetrics(r)));
    else unlocated = add(unlocated, toMetrics(r));
  }

  const cities: CityStat[] = placeRows
    .filter((r) => r.country === 'ZA' && r.city)
    .map((r) => ({
      city: r.city as string,
      country: r.country,
      region: r.region,
      province: provinceFor(r.region, r.region_code),
      lat: r.lat === null ? null : num(r.lat),
      lon: r.lon === null ? null : num(r.lon),
      ...toMetrics(r),
    }))
    .sort((a, b) => b.events - a.events || a.city.localeCompare(b.city));

  const table: PlaceRow[] = placeRows
    .map((r) => ({
      country: r.country,
      region: r.region,
      city: r.city,
      province: r.country === 'ZA' ? provinceFor(r.region, r.region_code) : null,
      ...toMetrics(r),
    }))
    .sort((a, b) => b.visitors + b.dntSessions - (a.visitors + a.dntSessions) || b.events - a.events)
    .slice(0, TABLE_LIMIT);

  const world: CountryStat[] = countryRows
    .filter((r) => r.country !== 'ZA')
    .map((r) => ({ country: r.country, ...toMetrics(r) }))
    .sort(
      (a, b) =>
        b.visitors + b.dntSessions - (a.visitors + a.dntSessions) ||
        b.events - a.events ||
        (a.country === null ? 1 : 0) - (b.country === null ? 1 : 0) || // unknown country last
        (a.country ?? '').localeCompare(b.country ?? ''),
    );

  return {
    total: toMetrics(totalRow[0] ?? { events: 0, visitors: 0, dnt: 0, learners: 0, questions: 0 }),
    provinces: PROVINCE_IDS.map((id) => ({ id, ...byProvince.get(id)! })),
    southAfricaUnlocated: unlocated,
    cities,
    table,
    world,
  };
}

export interface HeatmapData {
  /** [weekday Monday..Sunday][hour 0..23], South Africa time */
  visits: number[][];
  runs: number[][];
  peak: { visits: Peak | null; runs: Peak | null };
}
export interface Peak {
  weekday: number;
  hour: number;
  count: number;
}

const grid = () => Array.from({ length: 7 }, () => Array<number>(24).fill(0));

/** Hour of day x weekday, SAST. "Visits" = visits started (session_start); "Runs" = finished practice runs. */
export async function heatmap(db: AdminDb, f: Filters): Promise<HeatmapData> {
  const hours = `strftime('%H', ts / 1000 + ${SAST_OFFSET_MS / 1000}, 'unixepoch')`;
  const dow = `strftime('%w', ts / 1000 + ${SAST_OFFSET_MS / 1000}, 'unixepoch')`;
  const q = (type: string) => {
    const w = eventWhere(f, `type = '${type}'`);
    return db.all<{ d: string; h: string; n: number }>(`SELECT ${dow} AS d, ${hours} AS h, COUNT(*) AS n FROM events WHERE ${w.sql} GROUP BY d, h`, w.params);
  };
  const [v, r] = await Promise.all([q('session_start'), q('practice_finish')]);

  const fill = (rows: { d: string; h: string; n: number }[]) => {
    const g = grid();
    let peak: Peak | null = null;
    for (const row of rows) {
      const weekday = (Number(row.d) + 6) % 7; // SQLite: 0 = Sunday. We want Monday first.
      const hour = Number(row.h);
      const count = num(row.n);
      g[weekday][hour] += count;
      if (!peak || g[weekday][hour] > peak.count) peak = { weekday, hour, count: g[weekday][hour] };
    }
    return { g, peak };
  };
  const a = fill(v);
  const b = fill(r);
  return { visits: a.g, runs: b.g, peak: { visits: a.peak, runs: b.peak } };
}
