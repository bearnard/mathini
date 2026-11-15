import { r3 } from '../round';

/** Layout maths for the Life Skills (Grade 7 Personal and Social Well-being) pictures. Tested in pswHelpers.test.ts. */

/** Greedy word wrap: no line is longer than `max` characters unless a single word is. */
export const wrapLabel = (text: string, max: number): string[] => {
  const lines: string[] = [];
  let line = '';
  for (const word of text.split(/\s+/).filter(Boolean)) {
    if (line && (line + ' ' + word).length > max) {
      lines.push(line);
      line = word;
    } else {
      line = line ? line + ' ' + word : word;
    }
  }
  if (line) lines.push(line);
  return lines;
};

const LINE_H = 6.4;
const PAD = 3.4;

export interface StackItem {
  lines: string[];
  y: number;
  h: number;
}

/** Vertical stack of boxes (one per step) with a gap for the arrow between them. */
export const stackLayout = (steps: string[], max: number, gap = 6, top = 4): { items: StackItem[]; height: number } => {
  let y = top;
  const items = steps.map((s) => {
    const lines = wrapLabel(s, max);
    const h = r3(PAD * 2 + lines.length * LINE_H);
    const it = { lines, y: r3(y), h };
    y += h + gap;
    return it;
  });
  return { items, height: r3(y - gap + top) };
};

/** Where up to four hub labels sit around the centre: top, right, bottom, left. */
export const hubSlots = (n: number): { x: number; y: number }[] => {
  const all = [
    { x: 60, y: 9 },
    { x: 100, y: 50 },
    { x: 60, y: 91 },
    { x: 20, y: 50 },
  ];
  return all.slice(0, Math.max(0, Math.min(4, n)));
};

/** Bars for a week plan: heights are proportional to the minutes, the tallest fills `maxH`. */
export const weekPlan = (minutes: number[], maxH = 40) => {
  const total = minutes.reduce((a, b) => a + b, 0);
  const top = Math.max(...minutes);
  return {
    total,
    bars: minutes.map((m) => ({ minutes: m, h: top === 0 ? 0 : r3((m / top) * maxH) })),
  };
};

/** Segments of one session laid end to end across `width`, each proportional to its minutes. */
export const planSegments = (parts: { label: string; minutes: number }[], width = 108, x0 = 6) => {
  const total = parts.reduce((a, p) => a + p.minutes, 0);
  let x = x0;
  const segs = parts.map((p) => {
    const w = r3((p.minutes / total) * width);
    const seg = { ...p, x: r3(x), w };
    x += w;
    return seg;
  });
  return { total, segs };
};
