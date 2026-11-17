import { r3 } from '../round';
import { towardVP, vpBox, type Pt } from '../g7tech/drawingHelpers';

export { towardVP, vpBox, backScale } from '../g7tech/drawingHelpers';
export type { Pt };

/** Geometry for the Grade 9 single vanishing point perspective lesson. Tested in perspectiveHelpers.test.ts. */

/** Which faces of a box you can see in one-point perspective. y points DOWN the page, as in the SVG, so the horizon at vp.y is eye level. */
export interface Visible { top: boolean; bottom: boolean; left: boolean; right: boolean }
export function visibleFaces(front: Pt[], vp: Pt): Visible {
  // front is bottom-left, bottom-right, top-right, top-left (as in vpBox)
  const left = Math.min(...front.map((p) => p.x)), right = Math.max(...front.map((p) => p.x));
  const top = Math.min(...front.map((p) => p.y)), bottom = Math.max(...front.map((p) => p.y));
  return {
    top: top > vp.y, // the whole box is below eye level, so you look down on its top
    bottom: bottom < vp.y, // the whole box is above eye level, so you look up at its underside
    left: left > vp.x, // the box is to the right of the vanishing point, so you see its left side
    right: right < vp.x, // the box is to the left of the vanishing point, so you see its right side
  };
}

/** Width of the back face from the front width and how far (t) toward the vanishing point it is drawn. */
export const backWidth = (frontWidth: number, t: number): number => r3(frontWidth * (1 - t));

// ---------- shading ----------

export type V3 = [number, number, number];
const norm = (v: V3): V3 => {
  const m = Math.hypot(...v);
  return [v[0] / m, v[1] / m, v[2] / m];
};
/** Light direction: from the upper left and in front of the object (x right, y up, z toward the viewer). */
export const LIGHT: V3 = norm([-0.5, 0.7, 0.5]);
export const NORMALS = { top: [0, 1, 0], front: [0, 0, 1], left: [-1, 0, 0], right: [1, 0, 0] } as const satisfies Record<string, V3>;
/** How bright a face is, from 0 (dark) to 1 (bright): the cosine of the angle between its normal and the light, never below 0. */
export const brightness = (normal: V3, light: V3 = LIGHT): number => r3(Math.max(0, normal[0] * light[0] + normal[1] * light[1] + normal[2] * light[2]));
/** Brightness with a little light everywhere (ambient), so a face turned away from the light is dark, not black. */
export const shade = (normal: V3, ambient = 0.25): number => r3(ambient + (1 - ambient) * brightness(normal));

// ---------- the classroom ----------

/** The four corners of the page (the near wall) and of the back wall, which is smaller and lies toward the vanishing point. */
export function room(page: { w: number; h: number }, vp: Pt, t: number): { near: Pt[]; back: Pt[] } {
  const near = [{ x: 0, y: page.h }, { x: page.w, y: page.h }, { x: page.w, y: 0 }, { x: 0, y: 0 }];
  return { near, back: near.map((p) => towardVP(p, vp, t)) };
}
