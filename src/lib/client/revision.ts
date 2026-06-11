// Client-side revision helpers for guided revision.
//
// Aggregates per-section results and picks weak sections
// to target in the revision flow.

import type { CapsItem } from './useCapsItems';

export interface PerSectionResult {
  section: string;
  total: number;
  correct: number;
}

/**
 * Aggregate per-question results by section.
 */
export function aggregateResultsBySection(
  results: { section?: string; correct: boolean }[],
): PerSectionResult[] {
  const map = new Map<string, PerSectionResult>();

  for (const r of results) {
    const section = r.section ?? 'general';
    const existing = map.get(section);
    if (existing) {
      existing.total++;
      if (r.correct) existing.correct++;
    } else {
      map.set(section, { section, total: 1, correct: r.correct ? 1 : 0 });
    }
  }

  return Array.from(map.values());
}

/**
 * Pick weak sections (accuracy < 0.6 and at least 4 attempts).
 */
export function pickWeakSections(
  results: PerSectionResult[],
  opts?: { minAttempts?: number; accuracyThreshold?: number },
): string[] {
  const minAtt = opts?.minAttempts ?? 4;
  const thresh = opts?.accuracyThreshold ?? 0.6;

  return results
    .filter((r) => r.total >= minAtt && (r.correct / r.total) < thresh)
    .map((r) => r.section);
}
