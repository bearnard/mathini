// Weak-section detection for guided revision.
//
// Determines which sub-sections within a topic a student struggled with,
// based on their attempt history.

export interface SectionAccuracy {
  section: string;
  correct: number;
  total: number;
  accuracy: number;
}

export interface WeakSection {
  section: string;
  accuracy: number;
  attempts: number;
}

// Thresholds
const MIN_ATTEMPTS = 4;   // Don't judge a section on < 4 attempts
const ACCURACY_THRESHOLD = 0.6; // Flag sections with < 60% accuracy

/**
 * Aggregate multiple attempt records per section into one accuracy record per section.
 */
export function aggregateSections(attempts: SectionAccuracy[]): SectionAccuracy[] {
  const map = new Map<string, { correct: number; total: number }>();

  for (const a of attempts) {
    const existing = map.get(a.section);
    if (existing) {
      existing.correct += a.correct;
      existing.total += a.total;
    } else {
      map.set(a.section, { correct: a.correct, total: a.total });
    }
  }

  return Array.from(map.entries()).map(([section, data]) => ({
    section,
    correct: data.correct,
    total: data.total,
    accuracy: data.total > 0 ? data.correct / data.total : 0,
  }));
}

/**
 * Return sections that are flagged as weak (below accuracy threshold
 * and with enough attempts for a meaningful signal).
 */
export function pickWeakSections(
  sections: SectionAccuracy[],
  opts?: { minAttempts?: number; accuracyThreshold?: number },
): WeakSection[] {
  const minAtt = opts?.minAttempts ?? MIN_ATTEMPTS;
  const thresh = opts?.accuracyThreshold ?? ACCURACY_THRESHOLD;

  return sections
    .filter((s) => s.total >= minAtt && s.accuracy < thresh)
    .map((s) => ({ section: s.section, accuracy: s.accuracy, attempts: s.total }));
}
