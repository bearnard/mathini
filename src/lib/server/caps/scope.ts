// Scope grounding for the question generator.
//
// A generation prompt may only be built for a task that has real scope text (the CAPS content, key terms and facts of the
// topic). The 2026-11 audit of the Grade 6 pools found that topics generated from a bare slug come out as nonsense:
// 'trappe-van-vergelyking' (degrees of comparison) became the trapezoid rule, 'lidwoord' (article) became a quantifier.
// This module is the single place that decides whether a task is grounded; topUp.ts, the seed script and the tests use it.
import { registry } from './registry';
import { TASK_INDEX } from './taskIndex.generated';

/** A scope shorter than this cannot name the content, key terms and question types of a topic. */
export const MIN_SCOPE_CHARS = 60;
export const MIN_SCOPE_WORDS = 10;

/**
 * Returns the scope text if it is real scope, else null. Real scope is a non-empty string of at least MIN_SCOPE_CHARS
 * characters and MIN_SCOPE_WORDS words. A bare slug, an empty string or a one-line label does not qualify.
 */
export function usableScope(text: unknown): string | null {
  if (typeof text !== 'string') return null;
  const t = text.trim();
  if (t.length < MIN_SCOPE_CHARS) return null;
  if (t.split(/\s+/).filter(Boolean).length < MIN_SCOPE_WORDS) return null;
  return t;
}

export interface TaskScope {
  code: string;
  grade: number;
  scope: string;
}

/** The registry scope of a task, or null when the task is not indexed or has no usable scope text. */
export function scopeFor(task: string): TaskScope | null {
  const spec = TASK_INDEX[task];
  if (!spec) return null;
  const [code, grade] = spec;
  const scope = usableScope(registry[code]?.tasks[task]);
  return scope ? { code, grade, scope } : null;
}
