/**
 * Grade 12 Geography: mapwork calculations (CAPS "Geographical skills and techniques": scale, distance, area, direction and bearing, magnetic
 * declination, gradient, vertical exaggeration, cross-sections and intervisibility, GIS cells, degrees and minutes). Every number in a lesson, picture or
 * bank key comes from these functions; mapwork.test.ts pins the values. No React here. Lengths are in metres on the ground and centimetres on the map.
 */

// ---------------------------------------------------------------- scale, distance and area

/** Ground distance in metres for a map distance in cm at the scale 1:denominator. 7,2 cm at 1:50 000 -> 3 600 m. */
export const groundMetres = (mapCm: number, denominator: number): number => Math.round(((mapCm * denominator) / 100) * 1e6) / 1e6;
/** Map distance in cm for a ground distance in metres. */
export const mapCmFor = (groundM: number, denominator: number): number => Math.round(((groundM * 100) / denominator) * 1e6) / 1e6;
/** The scale denominator from a map distance (cm) and the ground distance it stands for (metres): 4 cm and 2 000 m -> 50 000. */
export const scaleDenominator = (mapCm: number, groundM: number): number => Math.round(((groundM * 100) / mapCm) * 1e6) / 1e6;
/** A curved route measured in straight pieces: the total map length in cm. */
export const routeCm = (pieces: readonly number[]): number => Math.round(pieces.reduce((a, b) => a + b, 0) * 1e6) / 1e6;
/** How many times larger scale a is than b (1:10 000 against 1:50 000 -> 5): the bigger the scale, the smaller the denominator. */
export const scaleRatio = (denominatorA: number, denominatorB: number): number => denominatorB / denominatorA;
/** Area in km2 of a rectangle given its ground sides in km. */
export const areaKm2 = (lengthKm: number, breadthKm: number): number => Math.round(lengthKm * breadthKm * 1e6) / 1e6;
/** Hectares in km2: 1 km2 = 100 ha. */
export const hectares = (km2: number): number => Math.round(km2 * 100 * 1e6) / 1e6;
/** A square of the grid on a map, side `gridCm` on the map, in km2 of ground. On 1:50 000 maps the grid squares are 2 cm, so 1 km x 1 km = 1 km2. */
export const gridSquareKm2 = (denominator: number, gridCm = 2): number => {
  const side = groundMetres(gridCm, denominator) / 1000;
  return Math.round(side * side * 1e6) / 1e6;
};
/** Ground area (km2) of a rectangle measured on the map in cm. */
export const mapRectKm2 = (lengthCm: number, breadthCm: number, denominator: number): number => areaKm2(groundMetres(lengthCm, denominator) / 1000, groundMetres(breadthCm, denominator) / 1000);
/** Metres in km, as a decimal-comma text without a trailing ",0": 3600 -> "3,6 km", 500 -> "0,5 km" is written "500 m" by metresText. */
export const kmText = (m: number): string => `${String(m / 1000).replace('.', ',')} km`;
export const metresText = (m: number): string => (m >= 1000 ? kmText(m) : `${String(m).replace('.', ',')} m`);

// ---------------------------------------------------------------- direction: compass points, bearings and magnetic declination

export const POINTS16 = ['N', 'NNE', 'NE', 'ENE', 'E', 'ESE', 'SE', 'SSE', 'S', 'SSW', 'SW', 'WSW', 'W', 'WNW', 'NW', 'NNW'] as const;
export type Point16 = (typeof POINTS16)[number];
/** The true bearing of a compass point, clockwise from north: E = 90, SW = 225, NNW = 337,5. */
export const pointBearing = (p: Point16): number => POINTS16.indexOf(p) * 22.5;
/** The nearest of the 16 compass points to a bearing. */
export const nearestPoint = (bearing: number): Point16 => POINTS16[Math.round((((bearing % 360) + 360) % 360) / 22.5) % 16];
/** A bearing is always written 000 to 360 clockwise from north, as three digits. */
export const bearingText = (b: number): string => `${String(Math.round(b)).padStart(3, '0')}°`;
const mod360 = (b: number): number => ((b % 360) + 360) % 360;
/** The bearing back from B to A when the bearing from A to B is b. */
export const backBearing = (b: number): number => mod360(b + 180);
/** Bearing from A to B when B is `east` and `north` metres from A (negative = west / south), as degrees clockwise from north. */
export const bearingFromOffsets = (east: number, north: number): number => mod360((Math.atan2(east, north) * 180) / Math.PI);
/** Where magnetic north lies. In South Africa it is WEST of true north: a bearing measured from magnetic north is then LARGER than the true bearing. */
export type Side = 'W' | 'E';
export const magneticFromTrue = (trueBearing: number, declination: number, side: Side = 'W'): number => mod360(side === 'W' ? trueBearing + declination : trueBearing - declination);
export const trueFromMagnetic = (magneticBearing: number, declination: number, side: Side = 'W'): number => mod360(side === 'W' ? magneticBearing - declination : magneticBearing + declination);
/** Degrees and minutes: dm(22, 30) = 22,5 degrees. */
export const dm = (deg: number, min: number): number => deg + min / 60;
/** Minutes as a whole number from degrees: 22,5 -> 1 350. */
export const toMinutes = (deg: number): number => Math.round(deg * 60);
export const dmText = (deg: number): string => {
  const total = toMinutes(deg);
  return `${Math.floor(total / 60)}°${String(total % 60).padStart(2, '0')}'`;
};
/** The declination after some years with a yearly change in MINUTES (positive = increasing). */
export const declinationAfter = (startDeg: number, yearlyChangeMin: number, years: number): number => (toMinutes(startDeg) + yearlyChangeMin * years) / 60;

/** The declination in a later year: the map gives the declination in its base year and the mean annual change in minutes (positive = increasing westwards). 24°10' W in 2006, +6' a year -> 26°10' W in 2026. */
export const declinationOnYear = (baseDeg: number, baseYear: number, yearlyChangeMin: number, year: number): number => declinationAfter(baseDeg, yearlyChangeMin, year - baseYear);
/** Add a declination in degrees and minutes to a bearing in degrees and minutes (both as decimal degrees): the carry from 60 minutes is automatic. */
export const addDeclination = (bearingDeg: number, declinationDeg: number): number => Math.round(((toMinutes(bearingDeg) + toMinutes(declinationDeg)) / 60) * 1e6) / 1e6;

// ---------------------------------------------------------------- contours, gradient, vertical exaggeration, cross-sections, intervisibility

/** Gradient as 1:x, where x = horizontal distance / vertical interval (both in metres). 100 m rise over 2 500 m -> 25. */
export const gradientRatio = (verticalM: number, horizontalM: number): number => Math.round((horizontalM / verticalM) * 1e6) / 1e6;
/** Gradient as a percentage: vertical / horizontal x 100. */
export const gradientPercent = (verticalM: number, horizontalM: number): number => Math.round(((verticalM / horizontalM) * 100) * 1e6) / 1e6;
/** Vertical exaggeration = vertical scale / horizontal scale. Horizontal 1:50 000 and vertical 1 cm = 20 m (1:2 000) -> 25. */
export const verticalExaggeration = (horizontalDenominator: number, verticalDenominator: number): number => horizontalDenominator / verticalDenominator;
/** Vertical scale denominator when 1 cm on the section stands for `metresPerCm` m of height. */
export const verticalDenominator = (metresPerCm: number): number => metresPerCm * 100;
/** Height of the section line (cm) for a ground height, when 1 cm stands for metresPerCm m and the base of the section is baseM. */
export const sectionCm = (heightM: number, baseM: number, metresPerCm: number): number => Math.round(((heightM - baseM) / metresPerCm) * 1e6) / 1e6;
/** Heights at equal steps along the line A to B (metres above sea level), A first. */
export type Profile = readonly number[];
/** Two points can see each other when every height between them lies BELOW the straight sight line (eye heights ignored). Profile includes both ends. */
export const intervisible = (profile: Profile): boolean => {
  const n = profile.length - 1;
  for (let i = 1; i < n; i++) {
    const line = profile[0] + ((profile[n] - profile[0]) * i) / n;
    if (profile[i] >= line) return false;
  }
  return true;
};
/** The first position (index) that blocks the view, or -1. */
export const blockingIndex = (profile: Profile): number => {
  const n = profile.length - 1;
  for (let i = 1; i < n; i++) if (profile[i] >= profile[0] + ((profile[n] - profile[0]) * i) / n) return i;
  return -1;
};
/** The contour interval from two neighbouring index contours' heights and how many intervals lie between them. */
export const contourInterval = (lowerM: number, upperM: number, intervals: number): number => (upperM - lowerM) / intervals;
/** The height of a point that lies n contour lines above a contour of height h. */
export const heightAbove = (h: number, interval: number, n: number): number => h + interval * n;

// ---------------------------------------------------------------- GIS: raster cells, buffers, queries, resolution

/** Area of one raster cell in m2: a 30 m cell is 900 m2. */
export const cellAreaM2 = (cellM: number): number => cellM * cellM;
/** Ground area in hectares of `count` cells of side cellM (1 ha = 10 000 m2). */
export const cellsHa = (count: number, cellM: number): number => Math.round(((count * cellAreaM2(cellM)) / 10000) * 1e6) / 1e6;
/** Number of cells of side cellM that cover a rectangle of length x breadth metres (exact fit only). */
export const cellsCovering = (lengthM: number, breadthM: number, cellM: number): number => (lengthM / cellM) * (breadthM / cellM);
/** A buffer of `d` metres around a line (a river) is a strip d wide each side: the strip is 2d wide, and its area for a length L is 2 d L. */
export const bufferWidth = (d: number): number => 2 * d;
export const bufferAreaHa = (lengthM: number, d: number): number => Math.round(((2 * d * lengthM) / 10000) * 1e6) / 1e6;
/** Query: the names that satisfy BOTH conditions (intersection), in the order of the first list. */
export const both = (a: readonly string[], b: readonly string[]): string[] => a.filter((x) => b.includes(x));
/** Query: the names that satisfy EITHER condition (union), without repeats. */
export const either = (a: readonly string[], b: readonly string[]): string[] => [...new Set([...a, ...b])];
