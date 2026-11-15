// ADR 0005: an anonymous learner's runs stay on the device (localStorage), capped, and are never sent. When the learner signs up, the history can be
// offered for upload on a consent screen (a later step). Every access is wrapped: storage can be blocked or full, and practice must not care.
import type { LocalRunSummary } from './runTracker';

export const LOCAL_RUNS_KEY = 'pp_local_runs_v1';
export const MAX_LOCAL_RUNS = 100;

export interface StorageLike {
  getItem(k: string): string | null;
  setItem(k: string, v: string): void;
}

export function readLocalRuns(storage: StorageLike | null): LocalRunSummary[] {
  try {
    const raw = storage?.getItem(LOCAL_RUNS_KEY);
    if (!raw) return [];
    const v = JSON.parse(raw);
    return Array.isArray(v) ? (v as LocalRunSummary[]).filter((r) => r && typeof r.scopeKey === 'string' && typeof r.at === 'number') : [];
  } catch {
    return [];
  }
}

export function saveLocalRun(storage: StorageLike | null, s: LocalRunSummary): void {
  try {
    if (!storage) return;
    const next = [...readLocalRuns(storage), s].slice(-MAX_LOCAL_RUNS);
    storage.setItem(LOCAL_RUNS_KEY, JSON.stringify(next));
  } catch {
    /* blocked or full: ignore */
  }
}
