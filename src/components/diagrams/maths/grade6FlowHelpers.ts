import { applyRule, applyRules, type Rule, type RuleOp } from './mathsHelpers';

/** Arithmetic behind the Grade 6 Flow Diagrams lesson (grade6FlowHelpers.test.ts). */

const INVERSE: Record<RuleOp, RuleOp> = { '+': '−', '−': '+', '×': '÷', '÷': '×' };

/** The rule that undoes r: + becomes −, × becomes ÷, and so on. */
export const inverseRule = (r: Rule): Rule => ({ op: INVERSE[r.op], n: r.n });

/** Work backwards: the input that gives this output under one rule. 17 under + 9 gives 8. */
export const inputFor = (r: Rule, output: number): number => applyRule(inverseRule(r), output);

/** Every single rule (+, −, ×, ÷ with n up to 12) that takes every input to its output. */
export const rulesFitting = (pairs: [number, number][]): Rule[] => {
  const ops: RuleOp[] = ['+', '−', '×', '÷'];
  const out: Rule[] = [];
  for (const op of ops) {
    for (let n = 1; n <= 12; n++) {
      try {
        if (pairs.every(([x, y]) => applyRule({ op, n }, x) === y)) out.push({ op, n });
      } catch {
        // an inexact division never fits
      }
    }
  }
  return out;
};

/** Two-step rule in the order given, and the order swapped (the common mistake). */
export const twoStep = (a: Rule, b: Rule, input: number): { right: number; swapped: number } => ({
  right: applyRules([a, b], input),
  swapped: applyRules([b, a], input),
});
