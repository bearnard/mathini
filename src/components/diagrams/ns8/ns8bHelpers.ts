import { r3 } from '../round';

/** Rules and numbers for the Grade 8 Natural Sciences Term 3 lessons (Energy and Change): static electricity, circuits, series and parallel circuits, visible light.
 * Circuits are treated qualitatively, as the Grade 8 CAPS says (brightness of bulbs); there is no V = IR. Tested in ns8bHelpers.test.ts. */

// ---------- static electricity ----------

export type Charge = 'positive' | 'negative' | 'neutral';
/** Rubbing moves electrons from one material to the other: the one that loses electrons becomes positive and the one that gains them becomes negative. */
export const afterRubbing = (loses: string, gains: string): Record<string, Charge> => ({ [loses]: 'positive', [gains]: 'negative' });
export const force = (a: Charge, b: Charge): 'repel' | 'attract' | 'none' => (a === 'neutral' || b === 'neutral' ? 'none' : a === b ? 'repel' : 'attract');
/** Only electrons move: the numbers of protons and neutrons stay the same. */
export const chargeAfter = (protons: number, electrons: number): Charge => (protons > electrons ? 'positive' : protons < electrons ? 'negative' : 'neutral');

// ---------- circuits ----------

export const COMPONENTS = [
  { name: 'cell', job: 'a source of energy (chemical potential energy)' },
  { name: 'wire', job: 'carries electricity along a conductor' },
  { name: 'switch', job: 'opens and closes the circuit' },
  { name: 'bulb', job: 'a resistor with a filament that heats up and gives light' },
  { name: 'resistor', job: 'opposes the flow of current' },
] as const;
/** A bulb lights only in a complete (closed) circuit with a source of energy: the switch is closed and there is no break in the wires. */
export const bulbLights = (hasCell: boolean, switchClosed: boolean, wiresIntact: boolean): boolean => hasCell && switchClosed && wiresIntact;
/** The current takes the path of lowest resistance: a wire joined straight across the cell makes a short circuit. */
export const isShortCircuit = (wireAcrossCell: boolean): boolean => wireAcrossCell;
export const EFFECTS = { heating: 'a bulb filament gets white hot and gives light', magnetic: 'a coil of wire makes an electromagnet', chemical: 'electrolysis breaks down water into hydrogen and oxygen' } as const;
export const ELECTROLYSIS = { water: { products: ['hydrogen', 'oxygen'] }, copperChloride: { products: ['copper', 'chlorine'] } } as const;

// ---------- series and parallel (qualitative) ----------

export type Layout = 'series' | 'parallel';
/** Adding a bulb in series makes the current in the circuit smaller; adding one in parallel makes the total current bigger. */
export const totalCurrentChange = (layout: Layout, bulbsBefore: number, bulbsAfter: number): 'decreases' | 'increases' | 'stays the same' => {
  if (bulbsAfter === bulbsBefore) return 'stays the same';
  const more = bulbsAfter > bulbsBefore;
  return layout === 'series' ? (more ? 'decreases' : 'increases') : more ? 'increases' : 'decreases';
};
/** Brightness of each bulb relative to a single bulb: series bulbs share the supply and are dimmer; parallel bulbs stay as bright as one bulb. */
export const brightnessEach = (layout: Layout, bulbs: number): 'dimmer than one bulb' | 'as bright as one bulb' | 'one bulb' => (bulbs === 1 ? 'one bulb' : layout === 'series' ? 'dimmer than one bulb' : 'as bright as one bulb');
export const pathways = (layout: Layout, bulbs: number): number => (layout === 'series' ? 1 : bulbs);
/** In a series circuit one bulb burning out breaks the only pathway, so all the bulbs go out; in a parallel circuit the others stay lit. */
export const othersStayLit = (layout: Layout): boolean => layout === 'parallel';

// ---------- visible light ----------

export const SPECTRUM = ['violet', 'indigo', 'blue', 'green', 'yellow', 'orange', 'red'] as const;
/** Highest frequency (shortest wavelength) at the violet end, lowest frequency (longest wavelength) at the red end. */
export const highestFrequency = (): string => SPECTRUM[0];
export const lowestFrequency = (): string => SPECTRUM[SPECTRUM.length - 1];
export const SPEED_OF_LIGHT_KM_PER_S = 300000;
export const SUN_EARTH_KM = 150000000; // about 150 million km
/** Time for light to travel a distance, in seconds. */
export const lightTravelSeconds = (km: number): number => r3(km / SPEED_OF_LIGHT_KM_PER_S);
export const minutesAndSeconds = (s: number): string => `${Math.floor(s / 60)} min ${r3(s % 60)} s`;
/** Law of reflection: the angle of reflection equals the angle of incidence, both measured from the normal. */
export const reflectionAngle = (incidence: number): number => incidence;
export const angleToSurface = (angleFromNormal: number): number => 90 - angleFromNormal;
/** Refraction: entering a denser transparent medium bends the ray towards the normal, leaving it bends the ray away from the normal. */
export const refractionBend = (entering: boolean): 'towards the normal' | 'away from the normal' => (entering ? 'towards the normal' : 'away from the normal');
/** Colour of an object in white light: it reflects its own colour and absorbs the others. */
export const looksColour = (reflects: readonly string[]): string => (reflects.length === 0 ? 'black' : reflects.length >= SPECTRUM.length ? 'white' : reflects.length === 1 ? reflects[0] : 'mixed');
export const absorbsAll = (colour: string): boolean => colour === 'black';
export const reflectsAll = (colour: string): boolean => colour === 'white';
export const passesLight = (kind: 'opaque' | 'transparent'): 'blocks light, so it casts a shadow' | 'lets most of the light pass' => (kind === 'opaque' ? 'blocks light, so it casts a shadow' : 'lets most of the light pass');
