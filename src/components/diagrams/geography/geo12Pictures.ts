// Grade 12 Geography pictures. Schematic: the shape of the idea, not a real river or scale.

export type Pt = readonly [number, number];

/** Ray-casting point-in-polygon; a point exactly on the boundary counts as inside. */
export function inPolygon(p: Pt, poly: readonly Pt[]): boolean {
  const [x, y] = p;
  let inside = false;
  for (let i = 0, j = poly.length - 1; i < poly.length; j = i++) {
    const [xi, yi] = poly[i];
    const [xj, yj] = poly[j];
    const cross = (x - xi) * (yj - yi) - (y - yi) * (xj - xi);
    if (Math.abs(cross) < 1e-9 && x >= Math.min(xi, xj) && x <= Math.max(xi, xj) && y >= Math.min(yi, yj) && y <= Math.max(yi, yj)) return true;
    if (yi > y !== yj > y && x < ((xj - xi) * (y - yi)) / (yj - yi) + xi) inside = !inside;
  }
  return inside;
}

// ---- A drainage basin ----
/** The watershed: the boundary of the basin. */
export const WATERSHED: readonly Pt[] = [[20, 40], [50, 12], [95, 8], [135, 25], [158, 60], [150, 92], [115, 102], [70, 96], [35, 78]];
/** The main river from its source to its mouth. The mouth is where the river leaves the basin, on the watershed. */
export const MAIN_RIVER: readonly Pt[] = [[38, 38], [52, 50], [66, 58], [82, 66], [98, 80], [108, 92], [115, 102]];
/** Tributaries run into the main river; each one ENDS on a vertex of the main river, and that point is a confluence. */
export const TRIBUTARIES: readonly (readonly Pt[])[] = [
  [[100, 20], [94, 36], [88, 52], [82, 66]],
  [[148, 62], [132, 64], [114, 72], [98, 80]],
];
export const SOURCE: Pt = MAIN_RIVER[0];
export const MOUTH: Pt = MAIN_RIVER[MAIN_RIVER.length - 1];
export const CONFLUENCE: Pt = TRIBUTARIES[0][TRIBUTARIES[0].length - 1];

export const BASIN = { id: 'geo12-basin', width: 170, height: 112 } as const;
/** Six labels, each with its anchor. Placed outside the watershed or on empty basin, never on a river. */
export const BASIN_LABELS: readonly { text: string; x: number; y: number; anchor: 'start' | 'end' | 'middle'; tone: string }[] = [
  { text: 'drainage basin', x: 40, y: 22, anchor: 'start', tone: '#cbd5e1' },
  { text: 'source', x: 42, y: 34, anchor: 'start', tone: '#7dd3fc' },
  { text: 'tributary', x: 104, y: 35, anchor: 'start', tone: '#7dd3fc' },
  { text: 'confluence', x: 78, y: 75, anchor: 'end', tone: '#fde68a' },
  { text: 'mouth', x: 122, y: 108, anchor: 'start', tone: '#6ee7b7' },
  { text: 'watershed', x: 126, y: 13, anchor: 'start', tone: '#fda4af' },
];
export const BASIN_DESC =
  'A schematic of a drainage basin, not a real river. A dashed line, the watershed, marks the edge of the basin. Inside it a main river runs from its source to its mouth, where it leaves the basin. Two tributaries run into the main river. The point where a tributary meets the main river is a confluence. The whole area drained by the main river and its tributaries is the drainage basin.';
