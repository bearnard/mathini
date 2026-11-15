// The three branches of government (Grade 11 LO). Schematic: roles and the checks between them, no data.
import type { SchematicSpec } from '../schematic';

export const BRANCHES = ['Legislature', 'Executive', 'Judiciary'] as const;

export const GOVERNMENT: SchematicSpec = {
  id: 'lo11-branches',
  title: 'The three branches of government',
  desc: 'A schematic. Power is separated into three branches. The legislature makes laws, the executive implements laws and policies, and the judiciary interprets the law. Each branch is linked to the other two by a dashed double arrow, because each one checks the others.',
  width: 170,
  height: 100,
  boxes: [
    { id: 'leg', x: 6, y: 6, w: 62, h: 24, lines: ['Legislature', 'makes laws'], tone: 'sky' },
    { id: 'exe', x: 102, y: 6, w: 62, h: 24, lines: ['Executive', 'implements laws'], tone: 'green' },
    { id: 'jud', x: 54, y: 50, w: 62, h: 24, lines: ['Judiciary', 'interprets law'], tone: 'violet' },
  ],
  arrows: [
    { from: 'leg', to: 'exe', both: true, dashed: true },
    { from: 'leg', to: 'jud', both: true, dashed: true },
    { from: 'exe', to: 'jud', both: true, dashed: true },
  ],
  labels: [{ x: 85, y: 92, text: 'each branch checks the others', anchor: 'middle', tone: 'amber' }],
};
