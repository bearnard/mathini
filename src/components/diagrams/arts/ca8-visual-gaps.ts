/**
 * Facts for the Grade 8 Creative Arts visual arts lessons that follow the CAPS visual arts plan: the art elements and design
 * principles, complementary colours, the grades of pencil, and the order of the steps in a pinch pot and in a wax-and-ink
 * scraperboard drawing. Every pair, grade and step that a slide, picture or question shows comes from here
 * (ca8-visual-gaps.test.ts and g8CaVisual.test.ts check them independently).
 */

// ---------- colour ----------

export type Colour = 'red' | 'orange' | 'yellow' | 'green' | 'blue' | 'purple';

/** Complementary colours sit opposite each other on the colour wheel: red and green, blue and orange, yellow and purple. */
export const COMPLEMENT: Record<Colour, Colour> = { red: 'green', green: 'red', blue: 'orange', orange: 'blue', yellow: 'purple', purple: 'yellow' };
export const complementOf = (c: Colour): Colour => COMPLEMENT[c];
/** The three complementary pairs, each written once. */
export const PAIRS: readonly [Colour, Colour][] = [['red', 'green'], ['blue', 'orange'], ['yellow', 'purple']];
export const SWATCH: Record<Colour, string> = { red: '#ef4444', green: '#22c55e', blue: '#3b82f6', orange: '#f97316', yellow: '#facc15', purple: '#a855f7' };

// ---------- tone and pencil grades ----------

/** From the hardest, lightest mark to the softest, darkest: B means black and a higher number is softer and darker. */
export const PENCILS = ['HB', '2B', '3B', '4B'] as const;
export const darkness = (grade: string): number => PENCILS.indexOf(grade as (typeof PENCILS)[number]) + 1;
export const darker = (a: string, b: string): string => (darkness(a) > darkness(b) ? a : b);
export const TONE_GREY: Record<(typeof PENCILS)[number], string> = { HB: '#cbd5e1', '2B': '#94a3b8', '3B': '#64748b', '4B': '#334155' };

// ---------- art elements and design principles ----------

export const ELEMENTS = ['shape', 'line', 'tone', 'texture', 'complementary colour'] as const;
/** The design principles named for the Term 1 lettering project. */
export const PRINCIPLES_T1 = ['contrast', 'proportion', 'emphasis', 'unity', 'balance'] as const;
/** The Term 4 drawing adds harmony and rhythm. */
export const PRINCIPLES_T4 = ['balance', 'proportion', 'harmony', 'rhythm', 'emphasis', 'contrast'] as const;
export const extraInT4 = (): string[] => PRINCIPLES_T4.filter((p) => !(PRINCIPLES_T1 as readonly string[]).includes(p));

// ---------- the steps of two craft methods ----------

export const PINCH_STEPS = [
  'Roll a ball of clay in your hands',
  'Press your thumb into the middle of the ball',
  'Pinch and turn the clay to raise even walls',
  'Smooth the surface and the rim',
  'Decorate by scratching or pressing marks',
] as const;

export const SCRAPER_STEPS = [
  'Cover the paper heavily with white wax crayon',
  'Paint black ink or tempera over the wax',
  'Let the paint dry completely',
  'Scratch your drawing with a sharp tool',
] as const;

/** Which step number (1 first) a method has for a phrase, 0 when the phrase is not a step. */
export const stepNumber = (steps: readonly string[], start: string): number => steps.findIndex((s) => s.startsWith(start)) + 1;
