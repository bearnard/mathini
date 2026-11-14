// Pure helpers for the NST item kinds. No React, no browser APIs, so they can be imported from anywhere
// (the practice shell, the mock test, and the spaced-review runner).
import type { Hotspot, NstItem, NstItemKind } from './types';

export const KIND_SEPARATOR = '|';

export type Rng = () => number;

export function kindOf(item: Pick<NstItem, 'kind'>): NstItemKind {
  return item.kind === 'order' || item.kind === 'label' || item.kind === 'explain' ? item.kind : 'mcq';
}

/** The memo mark points of an explain item, in memo order. */
export function explainPoints(item: Pick<NstItem, 'answer'>): string[] {
  return item.answer.split(KIND_SEPARATOR);
}

/** The marks an explain item is worth (one per mark point). */
export function explainMarks(item: Pick<NstItem, 'answer' | 'marks'>): number {
  return item.marks ?? explainPoints(item).length;
}

/**
 * Is a self-marked explain answer "correct" for recording (XP and the review schedule)? At least 70% of the marks,
 * rounded up: that is every mark on a 2 or 3 mark answer, and one miss allowed from 4 marks up.
 * Integer maths, so 10 marks needs exactly 7 (floating point would ask for 8).
 */
export function isExplainCorrect(got: number, total: number): boolean {
  return total > 0 && got >= Math.ceil((total * 7) / 10);
}

/** Marks a question is worth in a scored test: 1 for mcq/order/label (all or nothing), the points for explain. */
export function marksOf(item: NstItem): number {
  return kindOf(item) === 'explain' ? explainMarks(item) : 1;
}

/** The correct sequence of an order item. */
export function orderSequence(item: Pick<NstItem, 'answer'>): string[] {
  return item.answer.split(KIND_SEPARATOR);
}

/** Exact sequence match. Anything partial or reordered is wrong. */
export function isOrderCorrect(item: Pick<NstItem, 'answer'>, attempt: readonly string[]): boolean {
  const want = orderSequence(item);
  return attempt.length === want.length && want.every((step, i) => attempt[i] === step);
}

/** For each position: was the learner's step right there? (Used to colour the answer list.) */
export function orderPositionResults(item: Pick<NstItem, 'answer'>, attempt: readonly string[]): boolean[] {
  const want = orderSequence(item);
  return want.map((step, i) => attempt[i] === step);
}

/** The correct hotspot id -> label mapping of a label item. */
export function labelMapping(item: Pick<NstItem, 'answer'>): Record<string, string> {
  const out: Record<string, string> = {};
  for (const pair of item.answer.split(KIND_SEPARATOR)) {
    const eq = pair.indexOf('=');
    if (eq > 0) out[pair.slice(0, eq)] = pair.slice(eq + 1);
  }
  return out;
}

/** Per-hotspot results. A hotspot with no label chosen counts as wrong. */
export function labelResults(
  item: Pick<NstItem, 'answer'>,
  attempt: Readonly<Record<string, string | undefined>>,
): Record<string, boolean> {
  const want = labelMapping(item);
  const out: Record<string, boolean> = {};
  for (const id of Object.keys(want)) out[id] = attempt[id] === want[id];
  return out;
}

/** Fully right = every hotspot has its correct label. */
export function isLabelCorrect(
  item: Pick<NstItem, 'answer'>,
  attempt: Readonly<Record<string, string | undefined>>,
): boolean {
  const results = labelResults(item, attempt);
  const ids = Object.keys(results);
  return ids.length > 0 && ids.every((id) => results[id]);
}

/** Why an item cannot be played, or null if it is fine. Used by normaliseItem and by the bank tests. */
export function itemProblem(item: NstItem): string | null {
  if (typeof item.prompt !== 'string' || !item.prompt || !Array.isArray(item.options) || typeof item.answer !== 'string') {
    return 'missing prompt, options or answer';
  }
  const kind = kindOf(item);
  if (kind === 'mcq') {
    return item.options.includes(item.answer) ? null : 'mcq answer is not one of the options';
  }
  if (kind === 'order') {
    const seq = orderSequence(item);
    if (seq.length < 2) return 'order needs at least two steps';
    if (new Set(seq).size !== seq.length) return 'order steps repeat';
    if (seq.length !== item.options.length || !seq.every((s) => item.options.includes(s))) {
      return 'order answer is not a permutation of the options';
    }
    if (seq.some((s) => s.includes(KIND_SEPARATOR))) return 'order step contains the separator';
    return null;
  }
  if (kind === 'explain') {
    const pts = explainPoints(item);
    if (pts.length < 1) return 'explain needs at least one mark point';
    if (pts.some((p) => p.trim() === '')) return 'explain has an empty mark point';
    if (new Set(pts).size !== pts.length) return 'explain mark points repeat';
    if (pts.length !== item.options.length || !pts.every((p) => item.options.includes(p))) {
      return 'explain answer is not the same set as the options (mark points)';
    }
    if (item.marks !== undefined && item.marks !== pts.length) return 'explain marks must equal the number of mark points';
    return null;
  }
  // label
  if (!item.image && !item.Diagram) return 'label needs an image or a Diagram';
  const spots: Hotspot[] = item.hotspots ?? [];
  if (spots.length === 0) return 'label needs hotspots';
  const ids = spots.map((h) => h.id);
  if (new Set(ids).size !== ids.length) return 'hotspot ids repeat';
  if (spots.some((h) => !(h.x >= 0 && h.x <= 100 && h.y >= 0 && h.y <= 100))) return 'hotspot outside 0-100';
  const map = labelMapping(item);
  const mapped = Object.keys(map);
  if (mapped.length !== ids.length || !ids.every((id) => id in map)) return 'answer does not cover every hotspot exactly';
  const labels = Object.values(map);
  if (new Set(labels).size !== labels.length) return 'two hotspots share a label';
  if (!labels.every((l) => item.options.includes(l))) return 'a correct label is missing from options';
  return null;
}

/**
 * Makes an item safe to play. A known-good item is returned as is. An item with an unknown `kind`
 * (e.g. a future D1 row) is played as mcq if it is a valid mcq, otherwise null (skip it). Never throws.
 */
export function normaliseItem(item: NstItem): NstItem | null {
  try {
    if (!item || typeof item !== 'object') return null;
    const raw = (item as { kind?: unknown }).kind;
    const known = raw === undefined || raw === 'mcq' || raw === 'order' || raw === 'label' || raw === 'explain';
    const candidate: NstItem = known ? item : { ...item, kind: 'mcq' };
    return itemProblem(candidate) === null ? candidate : null;
  } catch {
    return null;
  }
}

export function shuffleWith<T>(arr: readonly T[], rng: Rng = Math.random): T[] {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

/**
 * Display order for an item's options. mcq and label options are shuffled. Order steps are shuffled
 * too, but never left in the correct sequence (that would give the answer away).
 */
export function shuffleOptions(item: NstItem, rng: Rng = Math.random): string[] {
  if (kindOf(item) === 'explain') return [...item.options]; // memo points keep the memo's order
  const shuffled = shuffleWith(item.options, rng);
  if (kindOf(item) === 'order' && shuffled.length > 1) {
    const want = orderSequence(item);
    if (shuffled.every((s, i) => s === want[i])) shuffled.push(shuffled.shift() as string);
  }
  return shuffled;
}

/** Drops items that cannot be played (unknown kinds fall back to mcq when valid), then shuffles items and options. */
export function prepareItems(items: readonly NstItem[], rng: Rng = Math.random): NstItem[] {
  const playable = items.map(normaliseItem).filter((it): it is NstItem => it !== null);
  return shuffleWith(playable, rng).map((it) => ({ ...it, options: shuffleOptions(it, rng) }));
}

/**
 * D1 rows carry no `kind` (they are all mcq), so on their own they would hide the curated order/label
 * items. Add those from the bank to every batch that comes from D1.
 */
export function withCuratedExtras(fetched: readonly NstItem[], bank: readonly NstItem[]): NstItem[] {
  return [...fetched, ...bank.filter((it) => kindOf(it) !== 'mcq')];
}
