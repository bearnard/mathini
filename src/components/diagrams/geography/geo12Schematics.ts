// Grade 12 Geography schematics built on schematic.ts: the settlement hierarchy and the four economic sectors. No data, no scale.
import type { SchematicSpec } from '../schematic';

/** The hierarchy as the lesson lists it, lowest order first. */
export const HIERARCHY = ['hamlet', 'village', 'town', 'city', 'metropolitan'] as const;
const WIDTHS = [96, 80, 66, 56, 50];
const CX = 54;

export const SETTLEMENT_HIERARCHY: SchematicSpec = {
  id: 'geo12-hierarchy',
  title: 'The settlement hierarchy',
  desc: 'A schematic pyramid of five settlement levels. From the widest level at the bottom to the narrowest at the top: hamlet, village, town, city and metropolitan area. The higher the level, the fewer settlements there are, the more specialised the services and the larger the area served.',
  width: 170,
  height: 104,
  boxes: [
    ...HIERARCHY.map((name, i) => ({
      id: name,
      x: CX - WIDTHS[i] / 2,
      y: 82 - i * 19,
      w: WIDTHS[i],
      h: 16,
      lines: [name],
      tone: (['slate', 'sky', 'green', 'amber', 'violet'] as const)[i],
    })),
    { id: 'note', x: 108, y: 38, w: 60, h: 28, lines: ['higher up:', 'more services,', 'larger area'], tone: 'amber' },
  ],
  arrows: [],
  labels: [],
};

/** The four sectors in the order the lesson names them, each with an example that belongs there. */
export const SECTORS = [
  { id: 'primary', text: 'primary: farming, mining', tone: 'green' },
  { id: 'secondary', text: 'secondary: manufacturing', tone: 'sky' },
  { id: 'tertiary', text: 'tertiary: shops, transport', tone: 'amber' },
  { id: 'quaternary', text: 'quaternary: research, IT', tone: 'violet' },
] as const;

export const ECONOMIC_SECTORS: SchematicSpec = {
  id: 'geo12-sectors',
  title: 'The four economic sectors',
  desc: 'A schematic of four sectors, each with an example. Primary: farming and mining, which take raw materials from the earth. Secondary: manufacturing, which turns them into products. Tertiary: shops and transport, which are services. Quaternary: research and information technology, which are knowledge services.',
  width: 170,
  height: 104,
  boxes: SECTORS.map((s, i) => ({ id: s.id, x: 22, y: 4 + i * 26, w: 126, h: 18, lines: [s.text], tone: s.tone })),
  arrows: [
    { from: 'primary', to: 'secondary' },
    { from: 'secondary', to: 'tertiary' },
    { from: 'tertiary', to: 'quaternary' },
  ],
  labels: [],
};
