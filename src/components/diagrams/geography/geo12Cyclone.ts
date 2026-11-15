// A mid-latitude cyclone in the SOUTHERN hemisphere (north is up). Schematic: the shape of the idea, not a real storm or a scale.
// The polar front is a wave. The low sits at the wave's apex, on the polar (south) side. Two fronts rise from the low: the cold front
// to the north-west (behind, on the west side) and the warm front to the north-east (ahead, on the east side). Warm air fills the wedge
// between them and lies north of the front; cold polar air lies south of it. The whole system moves from west to east.
import { r3 } from '../round';

export type Pt = readonly [number, number];

export const W = 180;
export const H = 108;
export const BASE_Y = 20;
export const LOW: Pt = [88, 60];
/** From the low to the far end of each front, which lies on the old polar front line. */
export const COLD_FRONT: readonly Pt[] = [LOW, [78, 50], [66, 36], [54, BASE_Y]];
export const WARM_FRONT: readonly Pt[] = [LOW, [100, 54], [122, 42], [150, BASE_Y]];
/** Cold air: south of the old polar front and outside the wedge. Drawn as one polygon that follows the wave. */
export const COLD_AIR: readonly Pt[] = [[0, BASE_Y], ...COLD_FRONT.slice(-1), ...COLD_FRONT.slice(1, -1).reverse(), LOW, ...WARM_FRONT.slice(1, -1), ...WARM_FRONT.slice(-1), [W, BASE_Y], [W, H], [0, H]];

export const LABELS: readonly { text: string; x: number; y: number; anchor: 'start' | 'end' | 'middle'; tone: string }[] = [
  { text: 'warm air', x: 90, y: 11, anchor: 'middle', tone: '#fde68a' },
  { text: 'polar front', x: 4, y: 15, anchor: 'start', tone: '#e2e8f0' },
  { text: 'cold front', x: 54, y: 46, anchor: 'end', tone: '#7dd3fc' },
  { text: 'warm front', x: 126, y: 56, anchor: 'start', tone: '#fda4af' },
  { text: 'cold air', x: 14, y: 84, anchor: 'start', tone: '#7dd3fc' },
  { text: 'west to east', x: 90, y: 93, anchor: 'middle', tone: '#e2e8f0' },
];
export const MOTION = { from: [60, 98] as Pt, to: [120, 98] as Pt };
export const DESC =
  'A schematic of a mid-latitude cyclone in the southern hemisphere, with north at the top. A wave in the polar front separates warm air to the north from cold polar air to the south. The low is at the point of the wave. A cold front runs north-west from the low and a warm front runs north-east from it. Warm air fills the wedge between the two fronts. The whole system moves from west to east, so the warm front is ahead and the cold front catches up from behind.';

const len = (a: Pt, b: Pt) => Math.hypot(b[0] - a[0], b[1] - a[1]);
export function pointsAlong(path: readonly Pt[], spacing: number): { p: Pt; tangent: Pt }[] {
  const out: { p: Pt; tangent: Pt }[] = [];
  let carry = spacing / 2;
  for (let i = 0; i < path.length - 1; i++) {
    const a = path[i];
    const b = path[i + 1];
    const L = len(a, b);
    const t: Pt = [(b[0] - a[0]) / L, (b[1] - a[1]) / L];
    for (let d = carry; d <= L; d += spacing) out.push({ p: [r3(a[0] + t[0] * d), r3(a[1] + t[1] * d)], tangent: [r3(t[0]), r3(t[1])] });
    carry = spacing - ((L - carry) % spacing);
  }
  return out;
}
export const mid = (path: readonly Pt[]): Pt => {
  const m = pointsAlong(path, 1);
  return m[Math.floor(m.length / 2)].p;
};
/** The unit direction a front moves in: the normal of the front line that points toward `toward` (the air it is displacing). */
export function advance(path: readonly Pt[], toward: Pt): Pt {
  const a = path[0];
  const b = path[path.length - 1];
  const L = len(a, b);
  const n: Pt = [-(b[1] - a[1]) / L, (b[0] - a[0]) / L];
  const m = mid(path);
  const dot = (toward[0] - m[0]) * n[0] + (toward[1] - m[1]) * n[1];
  return dot >= 0 ? [r3(n[0]), r3(n[1])] : [r3(-n[0]), r3(-n[1])];
}
/** Points inside the wedge (warm sector) and in the cold air ahead of the warm front, used to say which way each front moves. */
export const WEDGE_POINT: Pt = [88, 34];
export const COLD_AHEAD_POINT: Pt = [160, 52];
export const COLD_ADVANCE = advance(COLD_FRONT, WEDGE_POINT);
export const WARM_ADVANCE = advance(WARM_FRONT, COLD_AHEAD_POINT);
export const SPACING = 9;
