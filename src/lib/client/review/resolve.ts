// Turns the server's due list into renderable questions. Pure: loaders are injected so it can be unit-tested
// and so each topic module is only downloaded when a due question actually needs it.

import { makeQkey } from '../../shared/qkey';
import type { ReviewBankItem } from './types';

export interface DueCandidate { qkey: string; task: string; subject: string; section: string }
export interface PoolQuestion { id: number; prompt: string; options: string[]; answer: string; explanation: string; section: string }
export interface TodayPayload { dueCount: number; candidates: DueCandidate[]; pool: Record<string, PoolQuestion> }

export interface ReviewQuestion {
  qkey: string;
  task: string;
  subject: string;
  section: string;
  itemId?: number;
  prompt: string;
  options: string[];
  answer: string;
  explanation?: string;
}

export type BankLoaders = Record<string, () => Promise<ReviewBankItem[]>>;

export interface Resolved {
  questions: ReviewQuestion[];
  /** Scheduled, but the question no longer exists in its (successfully loaded) bank: safe to retire. */
  gone: string[];
}

/** Only multiple choice can be rendered by the review screen in v1 (absent kind = multiple choice). */
export const isReviewable = (it: ReviewBankItem): boolean => (it.kind === undefined || it.kind === 'mcq') && Array.isArray(it.options) && it.options.length >= 2 && !!it.answer;

export async function resolveCandidates(payload: TodayPayload, loaders: BankLoaders, limit: number): Promise<Resolved> {
  const questions: ReviewQuestion[] = [];
  const gone: string[] = [];
  const banks = new Map<string, ReviewBankItem[] | null>(); // null = failed to load: never retire on a load failure

  for (const c of payload.candidates) {
    if (questions.length >= limit) break;
    const pooled = payload.pool[c.qkey];
    if (pooled && pooled.options.length >= 2) {
      questions.push({ ...c, itemId: pooled.id, prompt: pooled.prompt, options: pooled.options, answer: pooled.answer, explanation: pooled.explanation || undefined, section: pooled.section || c.section });
      continue;
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
    if (!isReviewable(hit)) continue; // stays scheduled until its kind has a renderer
    questions.push({ ...c, prompt: hit.prompt, options: hit.options, answer: hit.answer, explanation: hit.explanation, section: hit.section ?? c.section });
  }
  return { questions, gone };
}
