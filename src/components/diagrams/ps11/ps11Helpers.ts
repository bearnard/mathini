import { r3 } from '../round';

/** Numbers for the Grade 11 Physical Sciences term 1 lessons (gravitation, atomic combinations, water). Tested in ps11Helpers.test.ts. */

// ---------- Newton's law of universal gravitation (NSC data sheet constants) ----------

export const G = 6.67e-11; // N·m²·kg⁻²
export const EARTH = { mass: 5.98e24, radius: 6.38e6 } as const; // kg, m (data sheet)
export const MOON = { mass: 7.35e22, radius: 1.74e6 } as const; // kg, m (given in the question)
/** F = G m1 m2 / r², with r the distance between the centres. */
export const gravForce = (m1: number, m2: number, r: number): number => (G * m1 * m2) / (r * r);
/** Gravitational field strength (acceleration) at the surface: g = G M / r². */
export const gField = (mass: number, radius: number): number => (G * mass) / (radius * radius);
export const weightN = (massKg: number, g: number): number => massKg * g;
/** How many times the force changes when the distance is multiplied by k (inverse square). */
export const forceFactor = (k: number): number => r3(1 / (k * k));
/** Scientific notation with a decimal comma and `sig` significant figures: 1,60 × 10⁻⁹. */
export function sci(x: number, sig = 3): string {
  if (x === 0) return '0';
  const e = Math.floor(Math.log10(Math.abs(x)));
  const m = (x / 10 ** e).toFixed(sig - 1);
  const sup = String(e).replace(/-/g, '⁻').replace(/\d/g, (d) => '⁰¹²³⁴⁵⁶⁷⁸⁹'[Number(d)]);
  return `${m.replace('.', ',')} × 10${sup}`;
}

// ---------- electronegativity (Pauling values on the data sheet) ----------

export const EN: Record<string, number> = { H: 2.1, Li: 1.0, Be: 1.5, B: 2.0, C: 2.5, N: 3.0, O: 3.5, F: 4.0, Na: 0.9, Mg: 1.2, Al: 1.5, Si: 1.8, P: 2.1, S: 2.5, Cl: 3.0, K: 0.8, Ca: 1.0, Br: 2.8 };
export const deltaEN = (a: string, b: string): number => r3(Math.abs(EN[a] - EN[b]));
export type BondKind = 'non-polar covalent' | 'polar covalent' | 'ionic';
/** Rule used in the lesson: 0 to 0,4 non-polar covalent, above 0,4 up to 1,7 polar covalent, above 1,7 ionic. */
export const bondKind = (a: string, b: string): BondKind => {
  const d = deltaEN(a, b);
  return d <= 0.4 ? 'non-polar covalent' : d <= 1.7 ? 'polar covalent' : 'ionic';
};

// ---------- VSEPR ----------

export interface Shape { name: string; angle: number; bonding: number; lone: number }
/** Molecular shapes for up to four electron pairs around the central atom. */
export const SHAPES: Shape[] = [
  { name: 'linear', angle: 180, bonding: 2, lone: 0 },
  { name: 'trigonal planar', angle: 120, bonding: 3, lone: 0 },
  { name: 'tetrahedral', angle: 109.5, bonding: 4, lone: 0 },
  { name: 'trigonal pyramidal', angle: 107, bonding: 3, lone: 1 },
  { name: 'bent', angle: 104.5, bonding: 2, lone: 2 },
];
export const shapeOf = (bonding: number, lone: number): Shape => {
  const s = SHAPES.find((x) => x.bonding === bonding && x.lone === lone);
  if (!s) throw new Error(`no shape for ${bonding} bonding and ${lone} lone pairs`);
  return s;
};
/** Lone pairs on a central atom that makes `bonds` single bonds (or, for CO₂, counts each double bond as one region and uses `valence - 2 * bondOrderSum`). */
export const lonePairs = (valenceElectrons: number, bondOrderSum: number): number => (valenceElectrons - bondOrderSum) / 2;

export interface Molecule { formula: string; central: string; terminal: string; terminals: number; valence: number; bondOrder: number; regions: number }
export const MOLECULES: Molecule[] = [
  { formula: 'CO₂', central: 'C', terminal: 'O', terminals: 2, valence: 4, bondOrder: 2, regions: 2 },
  { formula: 'BF₃', central: 'B', terminal: 'F', terminals: 3, valence: 3, bondOrder: 1, regions: 3 },
  { formula: 'CH₄', central: 'C', terminal: 'H', terminals: 4, valence: 4, bondOrder: 1, regions: 4 },
  { formula: 'NH₃', central: 'N', terminal: 'H', terminals: 3, valence: 5, bondOrder: 1, regions: 3 },
  { formula: 'H₂O', central: 'O', terminal: 'H', terminals: 2, valence: 6, bondOrder: 1, regions: 2 },
];
export const lonePairsIn = (m: Molecule): number => lonePairs(m.valence, m.terminals * m.bondOrder);
export const shapeOfMolecule = (m: Molecule): Shape => shapeOf(m.regions, lonePairsIn(m));

/** Directions (degrees, anticlockwise from the +x axis) of the bonds, drawn flat, symmetrical about the x axis pointing up. */
export function bondDirections(s: Shape): number[] {
  if (s.name === 'linear') return [90, 270];
  if (s.name === 'trigonal planar') return [90, 210, 330];
  if (s.name === 'tetrahedral') return [90 - s.angle / 2, 90 + s.angle / 2, 270 - 35, 270 + 35]; // flat sketch of a 3D shape
  if (s.name === 'trigonal pyramidal') return [90 - s.angle / 2, 90 + s.angle / 2, 270];
  return [270 - s.angle / 2, 270 + s.angle / 2]; // bent: the two bonds hang down, the lone pairs are above
}
/** Unit vectors along the bonds of a shape in 3D, built from the bond angle (the tetrahedron from its corners of a cube). */
export function bondVectors(s: Shape): [number, number, number][] {
  const rad = (d: number) => (d * Math.PI) / 180;
  if (s.name === 'linear') return [[1, 0, 0], [-1, 0, 0]];
  if (s.name === 'trigonal planar') return [0, 120, 240].map((d) => [Math.cos(rad(d)), Math.sin(rad(d)), 0] as [number, number, number]);
  if (s.name === 'tetrahedral') return ([[1, 1, 1], [1, -1, -1], [-1, 1, -1], [-1, -1, 1]] as [number, number, number][]).map(([x, y, z]) => [x / Math.sqrt(3), y / Math.sqrt(3), z / Math.sqrt(3)] as [number, number, number]);
  if (s.name === 'trigonal pyramidal') {
    // three bonds, each at polar angle phi from the axis, 120° apart: cos(angle) = 1,5 cos²(phi) - 0,5
    const cosPhi = Math.sqrt((Math.cos(rad(s.angle)) + 0.5) / 1.5);
    const sinPhi = Math.sqrt(1 - cosPhi * cosPhi);
    return [0, 120, 240].map((d) => [sinPhi * Math.cos(rad(d)), sinPhi * Math.sin(rad(d)), -cosPhi] as [number, number, number]);
  }
  const h = rad(s.angle / 2); // bent
  return [[Math.sin(h), 0, -Math.cos(h)], [-Math.sin(h), 0, -Math.cos(h)]];
}
/** Net dipole of a molecule in units of one bond's ΔEN: the vector sum of its bond dipoles (lone pairs are not counted as bonds). */
export function netDipole(m: Molecule): number {
  const d = deltaEN(m.central, m.terminal);
  const v = bondVectors(shapeOfMolecule(m)).reduce((acc, [x, y, z]) => [acc[0] + d * x, acc[1] + d * y, acc[2] + d * z], [0, 0, 0]);
  return r3(Math.hypot(v[0], v[1], v[2]));
}
export const isPolarMolecule = (m: Molecule): boolean => netDipole(m) > 1e-6;

// ---------- water ----------

export const WATER_ANGLE = 104.5;
/** Boiling points of the group 16 hydrides (°C, rounded). Water is far above the trend, because of hydrogen bonding. */
export const HYDRIDES = [
  { formula: 'H₂S', period: 3, bp: -60 },
  { formula: 'H₂Se', period: 4, bp: -41 },
  { formula: 'H₂Te', period: 5, bp: -2 },
] as const;
export const WATER_BP = 100;
/** Water density (g·cm⁻³): liquid at some temperatures (°C) and ice at 0 °C. */
export const DENSITY: { label: string; t: number; rho: number }[] = [
  { label: '0 °C (liquid)', t: 0, rho: 0.9998 },
  { label: '4 °C', t: 4, rho: 1.0 },
  { label: '10 °C', t: 10, rho: 0.9997 },
  { label: '20 °C', t: 20, rho: 0.9982 },
];
export const ICE_DENSITY = 0.917;
/** Volume (cm³) taken by a given mass (g) at a density (g·cm⁻³). */
export const volumeOf = (massG: number, rho: number): number => massG / rho;
/** Percent the volume grows when `massG` of water at 4 °C freezes to ice. */
export const freezeExpansionPercent = (): number => r3(((volumeOf(1000, ICE_DENSITY) - volumeOf(1000, 1.0)) / volumeOf(1000, 1.0)) * 100);
