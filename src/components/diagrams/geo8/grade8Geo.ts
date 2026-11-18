/**
 * Grade 8 Geography helpers: the angle of the midday sun, world time and South African Standard Time, the cooling
 * with height, and a worked climate-graph example. Every number in the lessons and pictures comes from here, and
 * grade8Geo.test.ts checks them with independent arithmetic (trigonometry and Date arithmetic).
 * Time zones use standard time only; South Africa is UTC+2 all year and has no daylight saving.
 */

/** The tilt of the Earth's axis in degrees (CAPS: "angle of axis"). */
export const TILT = 23.5;

/** Latitude where the midday sun is overhead (north positive): 21 December, equinox, 21 June. */
export const OVERHEAD = { december: -TILT, equinox: 0, june: TILT } as const;

/** Angle of the midday sun above the horizon at a latitude (north positive) when it is overhead at `overhead`. */
export const sunAngle = (latitude: number, overhead: number): number => 90 - Math.abs(latitude - overhead);

/** Johannesburg and Cape Town, as plain South African latitudes (south is negative), rounded to whole degrees. */
export const PLACES = { johannesburg: { name: 'Johannesburg', lat: -26 }, capeTown: { name: 'Cape Town', lat: -34 } } as const;

/** Degrees of longitude per hour of time, and the standard meridian of South Africa. */
export const DEGREES_PER_HOUR = 15;
export const SA_MERIDIAN = 30; // degrees east, so UTC+2
export const meridianOffsetHours = (lon: number): number => lon / DEGREES_PER_HOUR;

/** Standard-time offsets from UTC in minutes. */
export const ZONES = {
  johannesburg: { name: 'Johannesburg', minutes: 120 },
  london: { name: 'London (GMT)', minutes: 0 },
  nairobi: { name: 'Nairobi', minutes: 180 },
  delhi: { name: 'Delhi', minutes: 330 },
  tokyo: { name: 'Tokyo', minutes: 540 },
} as const;

/** The clock time in another zone for a clock time in a first zone; dayShift is -1, 0 or 1. */
export const convertTime = (hour: number, minute: number, fromMinutes: number, toMinutes: number): { hour: number; minute: number; dayShift: -1 | 0 | 1 } => {
  const total = hour * 60 + minute + (toMinutes - fromMinutes);
  const day = Math.floor(total / 1440);
  const inDay = total - day * 1440;
  return { hour: Math.floor(inDay / 60), minute: inDay % 60, dayShift: day as -1 | 0 | 1 };
};

export const clock = (hour: number, minute: number): string => `${String(hour).padStart(2, '0')}:${String(minute).padStart(2, '0')}`;

/** Temperature at a height when it is `seaLevel` at sea level, cooling about 6,5 degrees per 1 000 m (an average). */
export const COOLING_PER_KM = 6.5;
export const coolerWithHeight = (seaLevel: number, metres: number): number => Math.round((seaLevel - (metres / 1000) * COOLING_PER_KM) * 10) / 10;

/** An invented example of a climate graph: rainfall (mm) and temperature (degrees C) for 12 months, January to December. */
export const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'] as const;
export interface ClimateData { name: string; rain: number[]; temp: number[] }
export const EXAMPLES: Record<'mediterranean' | 'tropical' | 'desert', ClimateData> = {
  mediterranean: { name: 'Example A', rain: [15, 15, 20, 45, 80, 100, 95, 85, 50, 35, 25, 15], temp: [21, 21, 20, 17, 14, 12, 11, 12, 14, 16, 18, 20] },
  tropical: { name: 'Example B', rain: [260, 240, 250, 230, 180, 120, 100, 110, 150, 200, 230, 250], temp: [27, 27, 27, 27, 27, 26, 26, 26, 27, 27, 27, 27] },
  desert: { name: 'Example C', rain: [5, 5, 5, 3, 2, 1, 1, 1, 2, 3, 4, 5], temp: [28, 27, 25, 21, 17, 14, 14, 16, 20, 23, 25, 27] },
};
const argExtreme = (a: number[], f: (x: number, y: number) => boolean): number => a.reduce((best, v, i) => (f(v, a[best]) ? i : best), 0);
export const summary = (d: ClimateData) => {
  const wettest = argExtreme(d.rain, (x, y) => x > y);
  const driest = argExtreme(d.rain, (x, y) => x < y);
  const warmest = argExtreme(d.temp, (x, y) => x > y);
  const coldest = argExtreme(d.temp, (x, y) => x < y);
  return {
    wettest: MONTHS[wettest], driest: MONTHS[driest], warmest: MONTHS[warmest], coldest: MONTHS[coldest],
    yearRain: d.rain.reduce((s, v) => s + v, 0),
    range: d.temp[warmest] - d.temp[coldest],
    winterWetter: d.rain.slice(4, 8).reduce((s, v) => s + v, 0) > d.rain.slice(10).concat(d.rain.slice(0, 2)).reduce((s, v) => s + v, 0),
  };
};
