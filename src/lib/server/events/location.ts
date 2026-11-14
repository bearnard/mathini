// Location from Cloudflare's request metadata (request.cf). No IP address is read.
// Coordinates are Cloudflare's city-level estimate, rounded to 1 decimal place (about 10 km).

export interface CfLike {
  country?: unknown;
  region?: unknown;
  regionCode?: unknown;
  city?: unknown;
  timezone?: unknown;
  latitude?: unknown;
  longitude?: unknown;
  verifiedBotCategory?: unknown;
}

export interface Location {
  country: string | null;
  region: string | null;
  region_code: string | null;
  city: string | null;
  timezone: string | null;
  lat: number | null;
  lon: number | null;
}

export const EMPTY_LOCATION: Location = {
  country: null,
  region: null,
  region_code: null,
  city: null,
  timezone: null,
  lat: null,
  lon: null,
};

function str(v: unknown, max: number): string | null {
  if (typeof v !== 'string') return null;
  const s = v.trim().slice(0, max);
  return s === '' ? null : s;
}

/** Round to 1 decimal place. Accepts numbers or numeric strings (Cloudflare gives strings). */
export function round1(v: unknown): number | null {
  const n = typeof v === 'string' ? Number(v) : v;
  if (typeof n !== 'number' || !Number.isFinite(n)) return null;
  const r = Math.round(n * 10) / 10;
  return Object.is(r, -0) ? 0 : r;
}

export function locationFromCf(cf: CfLike | null | undefined): Location {
  if (!cf) return { ...EMPTY_LOCATION };
  const lat = round1(cf.latitude);
  const lon = round1(cf.longitude);
  return {
    country: str(cf.country, 2)?.toUpperCase() ?? null,
    region: str(cf.region, 80),
    region_code: str(cf.regionCode, 10),
    city: str(cf.city, 80),
    timezone: str(cf.timezone, 64),
    lat: lat !== null && lon !== null ? lat : null,
    lon: lat !== null && lon !== null ? lon : null,
  };
}

/** Do Not Track: keep the country only. The flag can only reduce what is stored. */
export function reduceLocationForDnt(loc: Location): Location {
  return { ...EMPTY_LOCATION, country: loc.country };
}

/**
 * No parent/guardian consent (or anonymous): keep the country and province only.
 * City and coordinates are dropped.
 */
export function reduceLocationToRegion(loc: Location): Location {
  return {
    ...EMPTY_LOCATION,
    country: loc.country,
    region: loc.region,
    region_code: loc.region_code,
    timezone: loc.timezone,
  };
}
