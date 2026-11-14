/**
 * Latitude data for the climate-zones globe. Every number drawn comes from here.
 *
 * Zone limits are the Tropic of Cancer / Capricorn and the Arctic / Antarctic Circle, rounded to
 * the Grade 6 values 23.5 and 66.5 degrees (exact today: 23.4358 and 90 - 23.4358 = 66.5642;
 * https://en.wikipedia.org/wiki/Tropic_of_Cancer, "currently 23°26'08.9\" (or 23.4358°) north").
 *
 * Cities (latitudes from the page infoboxes; the same two cities as the lesson's climate graphs):
 *   Manaus  3.1189 S  https://en.wikipedia.org/wiki/Manaus   ("3°07′08″S 60°01′18″W / 3.1189°S")
 *   Cairo  30.04444 N https://en.wikipedia.org/wiki/Cairo    ("30°2′40″N 31°14′9″E / 30.04444°N")
 */

export type Zone = 'tropical' | 'temperate' | 'polar';

export const TROPIC = 23.5;
export const POLAR_CIRCLE = 66.5;

export const zoneOf = (latitude: number): Zone => {
  const a = Math.abs(latitude);
  if (a <= TROPIC) return 'tropical';
  if (a <= POLAR_CIRCLE) return 'temperate';
  return 'polar';
};

export const CITIES = {
  manaus: { name: 'Manaus', climate: 'rainforest', lat: -3.1189 },
  cairo: { name: 'Cairo', climate: 'hot desert', lat: 30.04444 },
} as const;

const r1 = (n: number) => Math.round(n * 10) / 10;
const rad = (d: number) => (d * Math.PI) / 180;

/** Height above the equator line of a latitude on a side view of a globe of radius R. */
export const latOffset = (latitude: number, R: number): number => r1(R * Math.sin(rad(latitude)));

/** The point on the rim of the globe (right-hand edge) at a latitude. */
export const rimPoint = (latitude: number, cx: number, cy: number, R: number): { x: number; y: number } => ({
  x: r1(cx + R * Math.cos(rad(latitude))),
  y: r1(cy - R * Math.sin(rad(latitude))),
});
