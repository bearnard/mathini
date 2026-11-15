// The open (four-sector) circular flow, Grade 12 Economics. Schematic: which sectors exchange money and goods, no amounts.
import type { SchematicSpec } from '../schematic';

/** The links of the four-sector model: households and firms trade with each other; government deals with both (taxes, spending); the foreign sector deals with both (imports, exports). */
export const OPEN_FLOW_LINKS = ['firms-households', 'government-households', 'firms-government', 'foreign-households', 'firms-foreign'] as const;

export const OPEN_CIRCULAR_FLOW: SchematicSpec = {
  id: 'econ12-open-flow',
  title: 'The open circular flow',
  desc: 'A schematic with no amounts. Four sectors: households, firms, government and the foreign sector. Households and firms exchange money and goods with each other. The government takes taxes from, and spends money on, both households and firms. The foreign sector is what makes the economy open: it buys exports and sells imports. Every link has an arrow head at both ends because money and goods move both ways.',
  width: 170,
  height: 100,
  boxes: [
    { id: 'government', x: 62, y: 4, w: 46, h: 16, lines: ['government'], tone: 'amber' },
    { id: 'households', x: 4, y: 42, w: 46, h: 16, lines: ['households'], tone: 'sky' },
    { id: 'firms', x: 120, y: 42, w: 46, h: 16, lines: ['firms'], tone: 'green' },
    { id: 'foreign', x: 54, y: 80, w: 62, h: 16, lines: ['foreign sector'], tone: 'violet' },
  ],
  arrows: [
    { from: 'households', to: 'firms', both: true },
    { from: 'government', to: 'households', both: true, fromShift: -8 },
    { from: 'government', to: 'firms', both: true, fromShift: 8 },
    { from: 'foreign', to: 'households', both: true, fromShift: -8 },
    { from: 'foreign', to: 'firms', both: true, fromShift: 8 },
  ],
  labels: [],
};
