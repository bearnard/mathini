import { hcf } from './mathsHelpers';

/**
 * Algebra behind the Grade 8 Algebraic Expressions lesson (term 2): like terms, expanding,
 * factorising and substituting. grade8AlgebraHelpers.test.ts pins the values the lesson shows.
 */

export interface Term {
  /** The coefficient; a term without a letter is a constant. */
  n: number;
  /** The letter part, e.g. "x" or "x²". */
  letter?: string;
}

/** "5m + 4", "5x − 10", "−3x": terms written out with real minus signs, zero terms dropped. */
export const exprText = (terms: Term[]): string => {
  const out: string[] = [];
  for (const t of terms) {
    if (t.n === 0) continue;
    const size = Math.abs(t.n);
    const body = t.letter ? `${size === 1 ? '' : size}${t.letter}` : String(size);
    if (out.length === 0) out.push(`${t.n < 0 ? '−' : ''}${body}`);
    else out.push(`${t.n < 0 ? '−' : '+'} ${body}`);
  }
  return out.length ? out.join(' ') : '0';
};

/** Like terms have exactly the same letter part (the coefficient may differ). */
export const isLike = (a: Term, b: Term): boolean => (a.letter ?? '') === (b.letter ?? '');

/** Collect like terms: one term per letter part, in the order they first appear. */
export const collectTerms = (terms: Term[]): Term[] => {
  const order: string[] = [];
  const sum = new Map<string, number>();
  for (const t of terms) {
    const k = t.letter ?? '';
    if (!sum.has(k)) order.push(k);
    sum.set(k, (sum.get(k) ?? 0) + t.n);
  }
  return order.map((k) => (k ? { n: sum.get(k) ?? 0, letter: k } : { n: sum.get(k) ?? 0 }));
};

/** k(terms): multiply every term in the brackets by k. */
export const expand = (k: number, terms: Term[]): Term[] => terms.map((t) => ({ ...t, n: k * t.n }));

/** Take out the highest common factor of a·x + b: a·x + b = k(p·x + q). */
export const factorOut = (a: number, b: number): { k: number; p: number; q: number } => {
  const k = hcf(Math.abs(a), Math.abs(b));
  return { k, p: a / k, q: b / k };
};

/** The value of an expression for a given value of its letter (one letter only). */
export const evaluate = (terms: Term[], value: number): number => terms.reduce((s, t) => s + t.n * (t.letter ? value : 1), 0);
