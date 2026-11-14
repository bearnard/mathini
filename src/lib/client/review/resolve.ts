// Turns the server's due list into renderable questions. Pure: loaders are injected so it can be unit-tested
// and so each topic module is only downloaded when a due question actually needs it.

import { makeQkey } from '../../shared/qkey';
import type { ReviewBankItem } from './types';
import { normaliseItem } from '../../../curriculum/grade6/natural-sciences/_shared/itemKinds';

export interface DueCandidate { qkey: string; task: string; subject: string; section: string }
export interface PoolQuestion { id: number; prompt: string; options: string[]; answer: string; explanation: string; section: string }
export interface TodayPayload { dueCount: number; candidates: DueCandidate[]; pool: Record<string, PoolQuestion> }

export interface ReviewQuestion {
  qkey: string;
  task: string;
  subject: string;
  section: string;
  itemId?: number;
  /** The playable item, exactly as practice would render it (any kind; may carry a Diagram component). */
  item: ReviewBankItem;
}

export type BankLoaders = Record<string, () => Promise<ReviewBankItem[]>>;

export interface Resolved {
  questions: ReviewQuestion[];
  /** Scheduled, but the question no longer exists in its (successfully loaded) bank: safe to retire. */
  gone: string[];
}

/**
 * Can this item be played? Uses the same normaliseItem as practice (mcq, order and label are all supported;
 * an unknown kind is played as mcq when valid, otherwise skipped). Returns the playable item or null.
 */
export const reviewable = (it: ReviewBankItem): ReviewBankItem | null => normaliseItem(it);

export async function resolveCandidates(payload: TodayPayload, loaders: BankLoaders, limit: number): Promise<Resolved> {
  const questions: ReviewQuestion[] = [];
  const gone: string[] = [];
  const banks = new Map<string, ReviewBankItem[] | null>(); // null = failed to load: never retire on a load failure

  for (const c of payload.candidates) {
    if (questions.length >= limit) break;
    const pooled = payload.pool[c.qkey];
    if (pooled) {
      const item = reviewable({ id: pooled.id, section: pooled.section, prompt: pooled.prompt, options: pooled.options, answer: pooled.answer, explanation: pooled.explanation || undefined });
      if (item) { questions.push({ ...c, itemId: pooled.id, section: pooled.section || c.section, item }); continue; }
    }
    const load = loaders[c.task];
    if (!load) { gone.push(c.qkey); continue; }
    if (!banks.has(c.task)) {
      try { banks.set(c.task, await load()); } catch { banks.set(c.task, null); }
    }
    const bank = banks.get(c.task);
    if (!bank) continue;
    const hit = bank.find((it) => makeQkey(c.task, it.prompt) === c.qkey);
    if (!hit) { gone.push(c.qkey); continue; }
    const item = reviewable(hit);
    if (!item) continue; // malformed: stays scheduled, never shown broken
    questions.push({ ...c, section: item.section ?? c.section, item });
  }
  return { questions, gone };
}
