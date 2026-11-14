// When the AI pool runs short (a pool was purged, or its rejected rows are no longer served), the client tops the
// question set up from the topic's curated `bank` instead of showing a handful of questions. Pure, so the same rule
// is used by every practice hook and tested once.
import { normalisePrompt } from './qkey';
import { checkQuestion } from './questionQuality';

/** A practice run is thin below this many questions. */
export const MIN_PRACTICE_ITEMS = 10;

/**
 * True for a bank item worth adding to a short pool: order, label and explain items are always usable; a multiple-choice
 * item must pass the quality validator. Curated banks for grades 7-12 largely duplicate the AI pool (the same questions were
 * saved as seeds), so topping up with an unchecked bank item would bring back the very question the pool just rejected.
 */
export function usableForTopUp(item: { prompt: string; options?: readonly string[]; answer?: string; explanation?: string | null; kind?: string }): boolean {
  if (item.kind && item.kind !== 'mcq') return true;
  if (!Array.isArray(item.options) || typeof item.answer !== 'string') return true;
  return checkQuestion({ prompt: item.prompt, options: item.options, answer: item.answer, explanation: item.explanation }).ok;
}

/**
 * Returns `fetched`, plus enough curated-bank items to reach `min` when fetched is shorter. Bank items already present
 * (same normalised prompt) are skipped; the bank items to add are chosen at random, so the same few do not always appear.
 * `usable` filters the bank items that may be added (pass usableForTopUp). Never mutates its inputs; never returns fewer than `fetched`.
 */
export function topUpFromBank<T extends { prompt: string }>(
  fetched: readonly T[],
  bank: readonly T[],
  min: number = MIN_PRACTICE_ITEMS,
  rng: () => number = Math.random,
  usable: (item: T) => boolean = () => true,
): T[] {
  const out = [...fetched];
  if (out.length >= min) return out;
  const have = new Set(out.map((i) => normalisePrompt(i.prompt)));
  const candidates = bank.filter((b) => !have.has(normalisePrompt(b.prompt)) && usable(b));
  for (let i = candidates.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    [candidates[i], candidates[j]] = [candidates[j], candidates[i]];
  }
  return [...out, ...candidates.slice(0, min - out.length)];
}
