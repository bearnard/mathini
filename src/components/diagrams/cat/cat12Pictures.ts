// Specs for the Grade 12 CAT pictures. Schematic: how the parts relate; no data from anywhere.
import type { SchematicSpec } from '../schematic';

// ---- A table: field names across the top, one record per row ----
export const TABLE = {
  id: 'cat12-table',
  width: 180,
  height: 86,
  cols: [10, 46, 82] as const,
  colW: 34,
  headerY: 18,
  rowY: (i: number) => 30 + i * 12,
  rowH: 10,
  rows: 3,
  /** The row picked out as "one record", the column as "one field", and the cell that breaks a validation rule. */
  recordRow: 1,
  fieldCol: 1,
  badCell: { row: 2, col: 2 },
} as const;
export const TABLE_LABELS = ['field names', 'one record', 'invalid value', 'one field'] as const;
export const TABLE_DESC =
  'A schematic of a database table. The top row holds the field names. Each row below it is one record. One column is picked out as a single field, one row as a single record, and one cell is marked because its value breaks the validation rule for its field. No real data.';

// ---- HTML: html contains head and body ----
export const HTML_TREE: SchematicSpec = {
  id: 'cat12-html',
  title: 'The structure of an HTML page',
  desc: 'A schematic tree. The html element contains two sections, head and body. The head holds the title. The body holds the visible content, such as a heading (h1) and a paragraph (p). Each tag sits inside its parent and is closed before the parent closes.',
  width: 150,
  height: 90,
  boxes: [
    { id: 'html', x: 60, y: 6, w: 30, h: 14, lines: ['html'], tone: 'amber' },
    { id: 'head', x: 14, y: 36, w: 30, h: 14, lines: ['head'], tone: 'sky' },
    { id: 'body', x: 104, y: 36, w: 30, h: 14, lines: ['body'], tone: 'green' },
    { id: 'title', x: 14, y: 68, w: 30, h: 14, lines: ['title'], tone: 'sky' },
    { id: 'h1', x: 82, y: 68, w: 22, h: 14, lines: ['h1'], tone: 'green' },
    { id: 'p', x: 114, y: 68, w: 22, h: 14, lines: ['p'], tone: 'green' },
  ],
  arrows: [
    { from: 'html', to: 'head' },
    { from: 'html', to: 'body' },
    { from: 'head', to: 'title' },
    { from: 'body', to: 'h1' },
    { from: 'body', to: 'p' },
  ],
  labels: [],
};

// ---- LAN and WAN: devices in one place join a router; the router reaches the wider network ----
export const LAN_WAN: SchematicSpec = {
  id: 'cat12-lanwan',
  title: 'A LAN and a WAN',
  desc: 'A schematic. Several computers and a printer in one place are joined by a switch and form a LAN. The switch connects to a router. The router links the LAN to the wider network, and many networks joined together over long distances make a WAN, of which the internet is the biggest.',
  width: 170,
  height: 90,
  boxes: [
    { id: 'pc1', x: 4, y: 8, w: 30, h: 16, lines: ['PC'], tone: 'sky' },
    { id: 'pc2', x: 4, y: 34, w: 30, h: 16, lines: ['PC'], tone: 'sky' },
    { id: 'print', x: 4, y: 60, w: 30, h: 16, lines: ['printer'], tone: 'sky' },
    { id: 'switch', x: 48, y: 34, w: 34, h: 16, lines: ['switch'], tone: 'amber' },
    { id: 'router', x: 94, y: 34, w: 34, h: 16, lines: ['router'], tone: 'amber' },
    { id: 'wan', x: 138, y: 28, w: 30, h: 28, lines: ['WAN'], tone: 'violet' },
  ],
  arrows: [
    { from: 'pc1', to: 'switch', both: true },
    { from: 'pc2', to: 'switch', both: true },
    { from: 'print', to: 'switch', both: true },
    { from: 'switch', to: 'router', both: true },
    { from: 'router', to: 'wan', both: true },
  ],
  labels: [],
};
