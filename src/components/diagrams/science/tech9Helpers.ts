/**
 * Tested helpers for the Grade 9 Technology pictures: the three views of a block model, drawing
 * scale, pulley systems, gear ratio and direction, and hydraulic force. Every number in a picture
 * or a worked example comes from here.
 */

/** A model made of unit cubes: [x, y, z] = [width, depth, height] positions, each from 0. */
export type Cube = [number, number, number];

/** The cells that each orthographic view of the cubes fills. */
export const views = (cubes: Cube[]) => {
  const key = (a: number, b: number) => `${a},${b}`;
  const set = (f: (c: Cube) => [number, number]) => [...new Set(cubes.map((c) => key(...f(c))))].map((s) => s.split(',').map(Number) as [number, number]);
  return {
    front: set((c) => [c[0], c[2]]), // seen from the front: width and height
    top: set((c) => [c[0], c[1]]), // seen from above: width and depth
    side: set((c) => [c[1], c[2]]), // seen from the side: depth and height
  };
};

/** The block used in the lesson: a base 4 wide, 2 deep and 1 high, with a step 2 wide on top of its left end. */
export const STEP_BLOCK: Cube[] = [
  ...[0, 1, 2, 3].flatMap((x) => [0, 1].map((y): Cube => [x, y, 0])),
  ...[0, 1].flatMap((x) => [0, 1].map((y): Cube => [x, y, 1])),
];

/** Scale 1:n: one unit on the drawing is n units in real life. */
export const realLength = (drawing: number, n: number): number => {
  if (!(n >= 1) || drawing < 0) throw new RangeError('scale must be 1:n with n of at least 1');
  return drawing * n;
};
export const drawingLength = (real: number, n: number): number => real / n;

/** Ideal effort to lift a load with a pulley system whose load is held by `segments` rope segments. */
export const pulleyEffort = (load: number, segments: number): number => {
  if (!(segments >= 1) || !Number.isInteger(segments)) throw new RangeError('count whole rope segments');
  return load / segments;
};

/** SA textbook convention: gear ratio = teeth on the driven gear / teeth on the driving gear. */
export const gearRatio = (driver: number, driven: number): number => {
  if (!(driver > 0) || !(driven > 0)) throw new RangeError('teeth must be positive');
  return driven / driver;
};

/** In a gear train, each meshing gear turns the opposite way to the one before. Returns the direction of gear i (0 = first). */
export const trainDirection = (i: number, first: 'clockwise' | 'anticlockwise'): 'clockwise' | 'anticlockwise' =>
  i % 2 === 0 ? first : first === 'clockwise' ? 'anticlockwise' : 'clockwise';

/** Pressure (N per cm squared) in a hydraulic system from the input force and the input piston area. */
export const pressure = (force: number, area: number): number => {
  if (!(area > 0)) throw new RangeError('area must be positive');
  return force / area;
};

/** Output force of the large piston: pressure x output area. The pressure is the same everywhere in the fluid (Pascal's principle). */
export const outputForce = (inputForce: number, inputArea: number, outputArea: number): number => pressure(inputForce, inputArea) * outputArea;

/** 1 N per cm squared is 10 000 pascals (N per m squared); 1 bar is 100 000 pascals. */
export const toPascals = (nPerCm2: number): number => nPerCm2 * 10000;
export const BAR = 100000;
