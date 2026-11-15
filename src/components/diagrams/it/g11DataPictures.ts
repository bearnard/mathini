// Specs for the Grade 11 IT data pictures (databases, ADO link, validation). Schematic: parts and how they relate, no data from anywhere.
import type { SchematicSpec } from '../schematic';

// ---- Primary key and foreign key: two tables, colour = which customer ----
export const CUSTOMERS = [{ id: 1 }, { id: 2 }] as const;
export const ORDERS = [
  { id: 1, customerId: 1 },
  { id: 2, customerId: 1 },
  { id: 3, customerId: 2 },
] as const;

/** Why a keyed-tables picture would teach something false. An empty list means: primary keys are unique, every foreign key points at a real primary key. */
export function keyProblems(customers: readonly { id: number }[], orders: readonly { customerId: number }[]): string[] {
  const bad: string[] = [];
  const ids = new Set(customers.map((c) => c.id));
  if (ids.size !== customers.length) bad.push('a primary key value is repeated');
  for (const o of orders) if (!ids.has(o.customerId)) bad.push(`a foreign key (${o.customerId}) matches no primary key`);
  return bad;
}

export const KEY_COLOURS = ['#38bdf8', '#fbbf24', '#34d399', '#a78bfa'] as const;
export const KEYED = {
  id: 'g11-keyed',
  width: 170,
  height: 84,
  pk: { x: 46, w: 18, rowY: (i: number) => 26 + i * 12, h: 10 },
  fk: { x: 100, w: 18, rowY: (i: number) => 26 + i * 12, h: 10 },
  customersData: { x: 6, w: 38 },
  ordersData: { x: 120, w: 44 },
} as const;
export const KEYED_LABELS = ['Customers', 'Orders', 'primary key', 'foreign key'] as const;
export const KEYED_DESC =
  'A schematic of two tables. The Customers table has a primary key column in which every value is different, shown as one colour per customer. The Orders table has a foreign key column. Each order has a line to the customer it belongs to, so two orders can point at the same customer, but no order can point at a customer who is not in the Customers table. No real data.';

// ---- A Delphi program reaches a database: TADOQuery -> TADOConnection -> database file ----
export const ADO_LINK: SchematicSpec = {
  id: 'g11-ado',
  title: 'How a Delphi program reaches a database',
  desc: 'A schematic. Two TADOQuery components each send SQL to one TADOConnection. The single TADOConnection holds the link to the database file, so one connection can serve many queries.',
  width: 170,
  height: 84,
  boxes: [
    { id: 'q1', x: 4, y: 10, w: 40, h: 18, lines: ['TADOQuery'], tone: 'sky' },
    { id: 'q2', x: 4, y: 56, w: 40, h: 18, lines: ['TADOQuery'], tone: 'sky' },
    { id: 'conn', x: 58, y: 33, w: 58, h: 18, lines: ['TADOConnection'], tone: 'amber' },
    { id: 'db', x: 130, y: 29, w: 38, h: 26, lines: ['database', 'file'], tone: 'green' },
  ],
  arrows: [
    { from: 'q1', to: 'conn', label: 'SQL' },
    { from: 'q2', to: 'conn' },
    { from: 'conn', to: 'db', both: true },
  ],
  labels: [],
};

// ---- Validation: the checks run in order, type before range ----
export const VALIDATION_ORDER = ['presence', 'type', 'range'] as const;
export const VALIDATION: SchematicSpec = {
  id: 'g11-validate',
  title: 'Validation checks in order',
  desc: 'A schematic. An entry goes through three checks in this order: presence (was anything typed), type (is it the right kind of data) and range (is it within the limits). Passing all three means the entry is accepted. Failing any check means it is rejected, and the type check comes before the range check because letters cannot be compared with numbers.',
  width: 170,
  height: 92,
  boxes: [
    { id: 'in', x: 3, y: 10, w: 26, h: 18, lines: ['input'], tone: 'slate' },
    { id: 'presence', x: 38, y: 10, w: 34, h: 18, lines: ['presence'], tone: 'sky' },
    { id: 'type', x: 81, y: 10, w: 26, h: 18, lines: ['type'], tone: 'sky' },
    { id: 'range', x: 116, y: 10, w: 28, h: 18, lines: ['range'], tone: 'sky' },
    { id: 'rejected', x: 70, y: 62, w: 48, h: 18, lines: ['rejected'], tone: 'rose' },
    { id: 'accepted', x: 126, y: 62, w: 36, h: 18, lines: ['accepted'], tone: 'green' },
  ],
  arrows: [
    { from: 'in', to: 'presence' },
    { from: 'presence', to: 'type' },
    { from: 'type', to: 'range' },
    { from: 'range', to: 'accepted' },
    { from: 'presence', to: 'rejected', dashed: true, toShift: -11 },
    { from: 'type', to: 'rejected', dashed: true },
    { from: 'range', to: 'rejected', dashed: true, toShift: 11 },
  ],
  labels: [],
};
