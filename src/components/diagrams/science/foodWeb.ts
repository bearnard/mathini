/**
 * A small food web for the Grade 8 ecosystems lesson. Each edge is "X is eaten by Y": the arrow
 * shows the direction energy moves. Questions about it (who are the producers, who eats what, what
 * loses its predator) are answered from the edges, not typed.
 */

export const ORGANISMS = ['grass', 'grasshopper', 'rabbit', 'frog', 'snake'] as const;
export type Organism = (typeof ORGANISMS)[number];

/** [food, eater] */
export const EATEN_BY: readonly [Organism, Organism][] = [
  ['grass', 'grasshopper'],
  ['grass', 'rabbit'],
  ['grasshopper', 'frog'],
  ['frog', 'snake'],
  ['rabbit', 'snake'],
];

export const eaters = (food: Organism): Organism[] => EATEN_BY.filter(([f]) => f === food).map(([, e]) => e);
export const prey = (predator: Organism): Organism[] => EATEN_BY.filter(([, e]) => e === predator).map(([f]) => f);

/** Producers eat nothing in the web (they make their own food). */
export const producers = (): Organism[] => ORGANISMS.filter((o) => prey(o).length === 0);

/** Top predators are eaten by nothing in the web. */
export const topPredators = (): Organism[] => ORGANISMS.filter((o) => eaters(o).length === 0);

/** Organisms that lose a predator when `removed` disappears: its prey. */
export const loseAPredator = (removed: Organism): Organism[] => prey(removed);

/** Organisms that lose a food source when `removed` disappears: the ones that eat it. */
export const loseFood = (removed: Organism): Organism[] => eaters(removed);
