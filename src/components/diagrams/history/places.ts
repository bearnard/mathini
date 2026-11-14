import { SA_PROVINCES, projectSA } from '../../admin/saProvinces';

/**
 * Places for the Term 2 frontier maps. Coordinates are decimal degrees (negative latitude is
 * south), taken from the infoboxes of the Wikipedia pages below and placed with the same tested
 * projection as the Natural Earth province map (src/components/admin/saProvinces.ts).
 *   Cape Town: 33.92528 S, 18.42389 E   https://en.wikipedia.org/wiki/Cape_Town
 *   Great Fish River mouth (near Seafield, Eastern Cape): 33.49278 S, 27.13111 E
 *     https://en.wikipedia.org/wiki/Great_Fish_River
 * Only places, never boundaries: the frontier moved over time, so the map shows the river the
 * lessons name, not a drawn border.
 */
export const PLACES = {
  capeTown: { name: 'Cape Town', lat: -33.92528, lon: 18.42389 },
  greatFishRiver: { name: 'Great Fish River', lat: -33.49278, lon: 27.13111 },
} as const;

export type PlaceId = keyof typeof PLACES;

const r1 = (n: number) => Math.round(n * 10) / 10;

/** A place on the map, rounded so server and browser agree. */
export const place = (id: PlaceId): { x: number; y: number } => {
  const p = projectSA(PLACES[id].lat, PLACES[id].lon);
  return { x: r1(p.x), y: r1(p.y) };
};

/** Polygon points for a broad arrow from (x1,y1) to (x2,y2), `w` wide, with a head. */
export const broadArrow = (x1: number, y1: number, x2: number, y2: number, w: number): string => {
  const dx = x2 - x1;
  const dy = y2 - y1;
  const len = Math.hypot(dx, dy);
  const ux = dx / len;
  const uy = dy / len;
  const nx = -uy;
  const ny = ux;
  const head = Math.min(len * 0.4, w * 1.6);
  const bx = x2 - ux * head;
  const by = y2 - uy * head;
  const hw = w * 1.1;
  const pts = [
    [x1 + (nx * w) / 2, y1 + (ny * w) / 2],
    [bx + (nx * w) / 2, by + (ny * w) / 2],
    [bx + nx * hw, by + ny * hw],
    [x2, y2],
    [bx - nx * hw, by - ny * hw],
    [bx - (nx * w) / 2, by - (ny * w) / 2],
    [x1 - (nx * w) / 2, y1 - (ny * w) / 2],
  ];
  return pts.map(([x, y]) => `${r1(x)},${r1(y)}`).join(' ');
};

/** Parse the M/L/Z path data of a province into rings of points. */
export const ringsOf = (path: string): [number, number][][] =>
  path
    .split('M')
    .filter(Boolean)
    .map((seg) => [...seg.matchAll(/(-?[\d.]+) (-?[\d.]+)/g)].map((m) => [Number(m[1]), Number(m[2])] as [number, number]));

const inRing = (x: number, y: number, ring: [number, number][]): boolean => {
  let inside = false;
  for (let i = 0, j = ring.length - 1; i < ring.length; j = i++) {
    const [xi, yi] = ring[i];
    const [xj, yj] = ring[j];
    if (yi > y !== yj > y && x < ((xj - xi) * (y - yi)) / (yj - yi) + xi) inside = !inside;
  }
  return inside;
};

/** Distance from a point to the nearest edge of any ring of the province. */
export const edgeDistance = (x: number, y: number, province: string): number => {
  const p = SA_PROVINCES.find((s) => s.id === province);
  if (!p) throw new Error(`unknown province ${province}`);
  let best = Infinity;
  for (const ring of ringsOf(p.path)) {
    for (let i = 0; i < ring.length; i++) {
      const [x1, y1] = ring[i];
      const [x2, y2] = ring[(i + 1) % ring.length];
      const l2 = (x2 - x1) ** 2 + (y2 - y1) ** 2;
      const t = l2 === 0 ? 0 : Math.max(0, Math.min(1, ((x - x1) * (x2 - x1) + (y - y1) * (y2 - y1)) / l2));
      best = Math.min(best, Math.hypot(x - (x1 + t * (x2 - x1)), y - (y1 + t * (y2 - y1))));
    }
  }
  return best;
};

export const insideProvince = (x: number, y: number, province: string): boolean => {
  const p = SA_PROVINCES.find((s) => s.id === province);
  return !!p && ringsOf(p.path).some((r) => inRing(x, y, r));
};
