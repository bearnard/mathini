import { r3 } from '../round';

/** Rules and numbers for the Grade 8 Technology Term 2 lessons: impact of technology and packaging; forces on materials, reinforcing and metal sections.
 * Tested in tech8bHelpers.test.ts. */

// ---------- packaging: the development (net) of an opened container ----------

/** A box (cuboid) of length l, width w and height h in mm. Its net has 6 faces and the card needed (without flaps) is the total surface area. */
export const boxSurfaceArea = (l: number, w: number, h: number): number => 2 * (l * w + l * h + w * h);
export const netFaces = 6;
/** A cross-shaped net: four side faces in a row (l, w, l, w) with the top and bottom attached to one of the l sides. Sheet size (without flaps). */
export const netSheet = (l: number, w: number, h: number): { width: number; height: number } => ({ width: 2 * l + 2 * w, height: h + 2 * w });
/** Area of the faces on the net (equals the surface area); the rest of the sheet is waste. */
export const netWaste = (l: number, w: number, h: number): number => netSheet(l, w, h).width * netSheet(l, w, h).height - boxSurfaceArea(l, w, h);
export const PACKAGING_RULE = 'the nature of the product determines the design and the properties of the packaging material';
export const packagingFor = (product: 'eggs' | 'cereal' | 'cold drink'): string =>
  product === 'eggs' ? 'moulded cardboard or pulp tray that cushions each egg' : product === 'cereal' ? 'a printed cardboard box with a sealed inner bag' : 'a waterproof bottle or can that holds pressure';

// ---------- impact of technology ----------

export const IMPACT = {
  positive: ['new or improved materials replace natural materials', 'some new materials are biodegradable', 'recycling waste paper and cardboard makes packaging'],
  negative: ['plastic shopping bags litter the environment', 'products that pollute or use up resources'],
} as const;
export const RECYCLE_PAPER_STEPS = ['collect and sort waste paper and cardboard', 'break it down in water to make pulp', 'clean the pulp and remove ink and glue', 'press and dry the pulp into new sheets', 'make new cardboard packaging'] as const;
export const isBiodegradable = (material: string): boolean => ['paper', 'cardboard', 'cotton', 'wood', 'starch-based plastic'].includes(material);

// ---------- forces on materials ----------

export const FORCES = [
  { name: 'tension', action: 'pulls the material apart', example: 'a rope pulled at both ends' },
  { name: 'compression', action: 'squashes the material together', example: 'a pillar under a heavy roof' },
  { name: 'bending', action: 'curves the material, with tension on one side and compression on the other', example: 'a plank across a stream' },
  { name: 'torsion', action: 'twists the material', example: 'a screwdriver turning a screw' },
  { name: 'shear', action: 'makes layers slide past each other', example: 'the blades of scissors cutting' },
] as const;
export const forceNamed = (action: string): string => FORCES.find((f) => f.action.includes(action))!.name;
/** In a beam that is loaded in the middle and supported at the ends, the bottom edge is in tension and the top edge is in compression. */
export const beamSides = { top: 'compression', bottom: 'tension' } as const;
/** Concrete is strong in compression and weak in tension; steel is strong in tension. So steel bars are placed on the tension side. */
export const reinforcementSide = (): 'bottom' => 'bottom';
export const PLYWOOD = { layers: 'thin layers (veneers) glued together', grain: 'the grain of each layer is at right angles to the next', result: 'strong in both directions and less likely to split or warp' } as const;

// ---------- metal sections ----------

export interface Section { name: string; area: number; use: string }
/** Cross-section area of a solid rectangular bar and of an I-beam of the same depth and flange width (mm2). */
export const rectArea = (width: number, depth: number): number => width * depth;
export const iBeamArea = (depth: number, flangeWidth: number, flangeThick: number, webThick: number): number => 2 * flangeWidth * flangeThick + webThick * (depth - 2 * flangeThick);
export const materialSaved = (solid: number, section: number): number => r3(((solid - section) / solid) * 100);
export const SECTIONS = [
  { name: 'I-beam', use: 'beams and girders that resist bending' },
  { name: 'angle iron', use: 'frames, corners and bracing' },
  { name: 'T-bar', use: 'supports and frames where one flange is needed' },
  { name: 'channel', use: 'frames and supports' },
] as const;
