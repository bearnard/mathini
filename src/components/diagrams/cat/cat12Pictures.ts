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

// ---- LAN and WAN: devices in one place join a switch and make a LAN; the router links the LAN to the wider network ----
export const LAN_WAN: SchematicSpec = {
  id: 'cat12-lanwan',
  title: 'A LAN and a WAN',
  desc: 'A schematic. A computer and a printer in one place are joined by a switch. Together they form a LAN, drawn inside the dashed line. The switch connects to a router at the edge of the LAN. The router links the LAN to a WAN, which joins networks over much larger distances.',
  width: 190,
  height: 92,
  zones: [{ x: 2, y: 2, w: 96, h: 88, tone: 'amber' }],
  boxes: [
    { id: 'pc', x: 8, y: 20, w: 26, h: 16, lines: ['PC'], tone: 'sky' },
    { id: 'print', x: 8, y: 58, w: 38, h: 16, lines: ['printer'], tone: 'sky' },
    { id: 'switch', x: 58, y: 38, w: 34, h: 16, lines: ['switch'], tone: 'amber' },
    { id: 'router', x: 108, y: 38, w: 34, h: 16, lines: ['router'], tone: 'amber' },
    { id: 'wan', x: 154, y: 32, w: 32, h: 28, lines: ['WAN'], tone: 'violet' },
  ],
  arrows: [
    { from: 'pc', to: 'switch', both: true, toShift: -4 },
    { from: 'print', to: 'switch', both: true, toShift: 4 },
    { from: 'switch', to: 'router', both: true },
    { from: 'router', to: 'wan', both: true },
  ],
  labels: [{ x: 8, y: 12, text: 'LAN', tone: 'amber' }],
};

// ---- A nested IF: each test either gives its result (TRUE, solid arrow) or passes to the next test (FALSE, dashed arrow) ----
export const NESTED_IF: SchematicSpec = {
  id: 'cat12-nestedif',
  title: 'A nested IF',
  desc: 'A schematic of =IF(test 1, result 1, IF(test 2, result 2, result 3)). Test 1 is checked first. If it is TRUE (solid arrow) the answer is result 1. If it is FALSE (dashed arrow) test 2 is checked. If test 2 is TRUE the answer is result 2, and if it is FALSE the answer is result 3. Only one result is ever shown.',
  width: 170,
  height: 94,
  boxes: [
    { id: 't1', x: 6, y: 8, w: 36, h: 16, lines: ['test 1'], tone: 'amber' },
    { id: 'r1', x: 66, y: 8, w: 40, h: 16, lines: ['result 1'], tone: 'green' },
    { id: 't2', x: 6, y: 40, w: 36, h: 16, lines: ['test 2'], tone: 'amber' },
    { id: 'r2', x: 66, y: 40, w: 40, h: 16, lines: ['result 2'], tone: 'green' },
    { id: 'r3', x: 6, y: 72, w: 40, h: 16, lines: ['result 3'], tone: 'green' },
  ],
  arrows: [
    { from: 't1', to: 'r1' },
    { from: 't1', to: 't2', dashed: true },
    { from: 't2', to: 'r2' },
    { from: 't2', to: 'r3', dashed: true },
  ],
  labels: [{ x: 66, y: 83, text: 'dashed = FALSE', tone: 'amber' }],
};

// ---- Choosing the right tool: each application suits one kind of job ----
export const TOOL_CHOICE: SchematicSpec = {
  id: 'cat12-tools',
  title: 'Choosing the right tool',
  desc: 'A schematic. A spreadsheet suits calculations and modelling. A database suits storing structured records. A word processor suits communicating polished findings. A solution developer matches the tool to the job and can explain why.',
  width: 170,
  height: 84,
  boxes: [
    { id: 'sheet', x: 4, y: 6, w: 58, h: 18, lines: ['spreadsheet'], tone: 'green' },
    { id: 'db', x: 4, y: 33, w: 58, h: 18, lines: ['database'], tone: 'sky' },
    { id: 'wp', x: 4, y: 60, w: 58, h: 18, lines: ['word processor'], tone: 'amber' },
    { id: 'calc', x: 94, y: 6, w: 72, h: 18, lines: ['calculations'], tone: 'green' },
    { id: 'records', x: 94, y: 33, w: 72, h: 18, lines: ['structured records'], tone: 'sky' },
    { id: 'findings', x: 94, y: 60, w: 72, h: 18, lines: ['polished findings'], tone: 'amber' },
  ],
  arrows: [
    { from: 'sheet', to: 'calc' },
    { from: 'db', to: 'records' },
    { from: 'wp', to: 'findings' },
  ],
  labels: [],
};
