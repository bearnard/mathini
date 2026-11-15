// Box-and-arrow schematics for the Grade 11-12 lessons (IT, CAT, LO, Economics, Geography). Every picture is DATA (boxes, arrows, labels)
// drawn by Schematic.tsx, and every picture is checked by checkSchematic: at most 6 labels, everything inside the frame, no two boxes
// overlapping, every arrow joins two real boxes, and each label fits its box. These are SCHEMATIC pictures: they show how the parts relate,
// with no data and no scale, and each one says so in its description.
import { r3 } from './round';

export const TONES = {
  sky: '#38bdf8',
  green: '#34d399',
  amber: '#fbbf24',
  rose: '#fb7185',
  violet: '#a78bfa',
  slate: '#94a3b8',
} as const;
export type Tone = keyof typeof TONES;

export const MAX_LABELS = 6;
export const FONT = 6.2;
/** Width of one bold character as a share of the font size (a generous estimate, so a label that "fits" here fits on screen). */
export const CHAR_W = 0.6;

export interface SBox {
  id: string;
  x: number;
  y: number;
  w: number;
  h: number;
  /** One label, one or two lines. A box without lines is a plain shape. */
  lines?: string[];
  tone: Tone;
}
export interface SArrow {
  from: string;
  to: string;
  label?: string;
  dashed?: boolean;
  /** An arrow head at both ends. */
  both?: boolean;
  /** Slides the arrow's end along the side it enters, so several arrows into one box do not land on the same point. */
  toShift?: number;
  /** The same for the start of the arrow. */
  fromShift?: number;
}
export interface SLabel {
  x: number;
  y: number;
  text: string;
  anchor?: 'start' | 'middle' | 'end';
  tone?: Tone;
}
/** A dashed region drawn behind the boxes, such as a LAN around its devices. Boxes must sit fully inside or fully outside it. */
export interface SZone {
  x: number;
  y: number;
  w: number;
  h: number;
  tone: Tone;
}
export interface SchematicSpec {
  /** Short, unique per page (used for the aria ids). */
  id: string;
  title: string;
  desc: string;
  width: number;
  height: number;
  boxes: SBox[];
  arrows: SArrow[];
  labels: SLabel[];
  zones?: SZone[];
}

export const textWidth = (t: string, fs = FONT): number => r3(t.length * fs * CHAR_W);
const boxById = (s: SchematicSpec, id: string): SBox => {
  const b = s.boxes.find((x) => x.id === id);
  if (!b) throw new Error(`schematic ${s.id}: no box "${id}"`);
  return b;
};

export interface Point { x: number; y: number }
/** Where an arrow leaves box a and enters box b: the middle of the side that faces the other box. */
export function arrowEnds(s: SchematicSpec, a: SArrow): { from: Point; to: Point } {
  const A = boxById(s, a.from);
  const B = boxById(s, a.to);
  const ac = { x: A.x + A.w / 2, y: A.y + A.h / 2 };
  const bc = { x: B.x + B.w / 2, y: B.y + B.h / 2 };
  const dx = bc.x - ac.x;
  const dy = bc.y - ac.y;
  const side = (box: SBox, c: Point, towardX: number, towardY: number): Point => {
    // Prefer the horizontal sides unless the boxes are mainly above/below each other.
    const useX = Math.abs(towardX) * box.h >= Math.abs(towardY) * box.w;
    return useX
      ? { x: r3(c.x + Math.sign(towardX) * (box.w / 2)), y: r3(c.y) }
      : { x: r3(c.x), y: r3(c.y + Math.sign(towardY) * (box.h / 2)) };
  };
  const to = side(B, bc, -dx, -dy);
  const from = side(A, ac, dx, dy);
  if (a.toShift) {
    if (Math.abs(dx) * B.h >= Math.abs(dy) * B.w) to.y = r3(to.y + a.toShift); else to.x = r3(to.x + a.toShift);
  }
  if (a.fromShift) {
    if (Math.abs(dx) * A.h >= Math.abs(dy) * A.w) from.y = r3(from.y + a.fromShift); else from.x = r3(from.x + a.fromShift);
  }
  return { from, to };
}

export const labelsOf = (s: SchematicSpec): string[] => [
  ...s.boxes.filter((b) => b.lines && b.lines.length > 0).map((b) => (b.lines as string[]).join(' ')),
  ...s.arrows.filter((a) => a.label).map((a) => a.label as string),
  ...s.labels.map((l) => l.text),
];

/** Every way a schematic can be wrong. An empty list is a pass. */
export function checkSchematic(s: SchematicSpec): string[] {
  const bad: string[] = [];
  const n = labelsOf(s).length;
  if (n > MAX_LABELS) bad.push(`${n} labels (the limit is ${MAX_LABELS})`);
  const ids = new Set<string>();
  for (const b of s.boxes) {
    if (ids.has(b.id)) bad.push(`duplicate box id ${b.id}`);
    ids.add(b.id);
    if (b.x < 0 || b.y < 0 || b.x + b.w > s.width || b.y + b.h > s.height) bad.push(`box ${b.id} leaves the frame`);
    for (const line of b.lines ?? []) if (textWidth(line) > b.w - 3) bad.push(`label "${line}" does not fit box ${b.id}`);
    if ((b.lines?.length ?? 0) * FONT * 1.25 > b.h) bad.push(`box ${b.id} is too short for its lines`);
  }
  for (let i = 0; i < s.boxes.length; i++) {
    for (let j = i + 1; j < s.boxes.length; j++) {
      const a = s.boxes[i];
      const b = s.boxes[j];
      if (a.x < b.x + b.w && b.x < a.x + a.w && a.y < b.y + b.h && b.y < a.y + a.h) bad.push(`boxes ${a.id} and ${b.id} overlap`);
    }
  }
  for (const z of s.zones ?? []) {
    if (z.x < 0 || z.y < 0 || z.x + z.w > s.width || z.y + z.h > s.height) bad.push('a zone leaves the frame');
    for (const b of s.boxes) {
      const inside = b.x >= z.x && b.y >= z.y && b.x + b.w <= z.x + z.w && b.y + b.h <= z.y + z.h;
      const apart = b.x >= z.x + z.w || b.x + b.w <= z.x || b.y >= z.y + z.h || b.y + b.h <= z.y;
      if (!inside && !apart) bad.push(`box ${b.id} straddles a zone edge`);
    }
  }
  for (const a of s.arrows) {
    if (!ids.has(a.from) || !ids.has(a.to)) { bad.push(`arrow ${a.from}->${a.to} joins a missing box`); continue; }
    const e = arrowEnds(s, a);
    for (const p of [e.from, e.to]) if (p.x < 0 || p.y < 0 || p.x > s.width || p.y > s.height) bad.push(`arrow ${a.from}->${a.to} leaves the frame`);
    if (a.label && Math.abs(e.to.x - e.from.x) >= Math.abs(e.to.y - e.from.y) && Math.abs(e.to.x - e.from.x) < textWidth(a.label) + 4) bad.push(`arrow label "${a.label}" is wider than its arrow`);
  }
  for (const l of s.labels) {
    const w = textWidth(l.text);
    const x0 = l.anchor === 'end' ? l.x - w : l.anchor === 'middle' ? l.x - w / 2 : l.x;
    if (x0 < 0 || x0 + w > s.width || l.y < 0 || l.y > s.height) bad.push(`label "${l.text}" leaves the frame`);
  }
  if (!s.desc.toLowerCase().includes('schematic') && !s.desc.toLowerCase().includes('sketch')) bad.push('the description does not say the picture is schematic');
  return bad;
}
