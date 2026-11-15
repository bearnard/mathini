/**
 * Centre-radius form of a circle, (x - a)^2 + (y - b)^2 = r^2, written out for a given centre and
 * radius. The signs are the point of the picture: a centre of (2; -1) gives (x - 2)^2 + (y + 1)^2.
 * Coordinates use the South African semicolon, and a real minus sign.
 */

const MINUS = '−';

export const num = (n: number): string => (n < 0 ? `${MINUS}${Math.abs(n)}` : `${n}`);

/** "x - 2", "y + 1", or just "x" when the centre is on that axis. */
export const shifted = (variable: 'x' | 'y', centre: number): string =>
  centre === 0 ? variable : centre > 0 ? `${variable} ${MINUS} ${centre}` : `${variable} + ${Math.abs(centre)}`;

export interface CircleFacts {
  a: number;
  b: number;
  r: number;
  equation: string;
  centre: string;
}

export const circleFacts = (a: number, b: number, r: number): CircleFacts => {
  if (!Number.isInteger(a) || !Number.isInteger(b) || !Number.isInteger(r) || r < 1) throw new RangeError('whole-number centre and a radius of at least 1');
  return {
    a,
    b,
    r,
    equation: `(${shifted('x', a)})² + (${shifted('y', b)})² = ${r * r}`,
    centre: `(${num(a)}; ${num(b)})`,
  };
};

/** True when (x, y) lies on the circle with centre (a, b) and radius r. */
export const onCircle = (x: number, y: number, a: number, b: number, r: number): boolean => (x - a) ** 2 + (y - b) ** 2 === r * r;
