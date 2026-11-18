import { r3 } from '../round';

/** Rules and numbers for the Grade 8 Technology lessons (graphic communication, frame structures and failure, packaging, gears and mechanical advantage...).
 * Tested in tech8Helpers.test.ts. Term 1 part: line types, scale, dimensions, isometric projection, trusses and structural failure. */

// ---------- graphic communication ----------

export const LINE_TYPES = [
  { name: 'outline', look: 'thick, dark line', use: 'the edges you can see' },
  { name: 'construction line', look: 'thin, feint line', use: 'guides for laying out the drawing' },
  { name: 'hidden detail', look: 'dashed line', use: 'edges hidden behind the surface' },
  { name: 'centre line', look: 'chain line (dash-dot)', use: 'the centre of circles and symmetrical parts' },
] as const;
export const lineFor = (use: string): string => LINE_TYPES.find((l) => l.use.includes(use))!.name;

/** Scale: 1:n scales down (the drawing is n times smaller) and n:1 scales up. Lengths are in mm. */
export const scaleDown = (realMm: number, n: number): number => r3(realMm / n);
export const scaleUp = (realMm: number, n: number): number => r3(realMm * n);
/** The real size from a drawing and its scale 1:n. */
export const realFromDrawing = (drawingMm: number, n: number): number => r3(drawingMm * n);
/** Dimensions are written in mm on the drawing. A dimension shows the real size, whatever the scale. */
export const dimensionLabel = (realMm: number): string => `${realMm} mm`;

/** Isometric projection: the x and y axes are drawn at 30 degrees to the horizontal and z is vertical. Returns drawing coordinates (y points down). */
export const isometric = (x: number, y: number, z: number): { x: number; y: number } => ({
  x: r3((x - y) * Math.cos(Math.PI / 6)) + 0,
  y: r3(-z + (x + y) * Math.sin(Math.PI / 6)) + 0,
});
export const ISO_ANGLE = 30;
export const isoEdgeCount = 12;
export const visibleIsoFaces = 3;
/** Double vanishing-point perspective: two vanishing points on the horizon line. */
export const VANISHING_POINTS = 2;

// ---------- frame structures: truss members and forces ----------

export type Force = 'tension' | 'compression' | 'shear' | 'torsion';
export const TRUSS_MEMBERS = [
  { name: 'rafter', job: 'the sloping top members that carry the roof', force: 'compression' },
  { name: 'tie beam', job: 'the horizontal bottom member that stops the rafters spreading', force: 'tension' },
  { name: 'king post', job: 'the central upright that holds up the middle of the tie beam', force: 'tension' },
  { name: 'queen post', job: 'two uprights used in a wider truss', force: 'tension' },
  { name: 'strut', job: 'a sloping brace that supports a rafter', force: 'compression' },
] as const;
export const forceIn = (member: string): Force => TRUSS_MEMBERS.find((m) => m.name === member)!.force;
/** Points of a king-post truss: apex, left foot, right foot, and the foot of the king post on the tie beam. */
export const kingPostTruss = (span: number, rise: number): { apex: [number, number]; left: [number, number]; right: [number, number]; kingFoot: [number, number] } => ({
  apex: [r3(span / 2), rise], left: [0, 0], right: [span, 0], kingFoot: [r3(span / 2), 0],
});
/** Rafter length from the span and the rise (Pythagoras on half the span). */
export const rafterLength = (span: number, rise: number): number => r3(Math.hypot(span / 2, rise));
/** A triangle is rigid: a frame needs triangulation (cross-bracing) to keep its shape. A rectangle with no brace can collapse sideways. */
export const isRigid = (sides: number, braced: boolean): boolean => sides === 3 || braced;

// ---------- spanning structures and failure ----------

export const SPANS = {
  beam: ['steel I-beam (girder)', 'concrete lintel', 'beam and column bridge'],
  bridge: ['suspension bridge', 'cable-stayed bridge'],
  arch: ['arches in buildings', 'arch bridges', 'dam walls'],
  cantilever: ['simple cantilever', 'cable-stayed cantilever'],
} as const;
export const FAILURES = [
  { name: 'fracture', cause: 'lack of strength', meaning: 'a member breaks' },
  { name: 'bending (buckling)', cause: 'lack of stiffness (rigidity)', meaning: 'a member flexes or buckles' },
  { name: 'toppling', cause: 'lack of stability', meaning: 'the structure tips over (top heavy, narrow base)' },
] as const;
export const failureFor = (cause: string): string => FAILURES.find((f) => f.cause.includes(cause))!.name;
/** A structure is stable while the vertical line down from its centre of gravity falls inside its base. Positions are measured from the centre of the base. */
export const stable = (baseWidth: number, cgOffset: number): boolean => Math.abs(cgOffset) < baseWidth / 2;
/** Tilt at which a block begins to topple: the angle whose tangent is half the base over the height of the centre of gravity. */
export const toppleAngle = (baseWidth: number, cgHeight: number): number => r3((Math.atan(baseWidth / 2 / cgHeight) * 180) / Math.PI);
