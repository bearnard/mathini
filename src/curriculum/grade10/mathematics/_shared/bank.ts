import type { MathematicsItem } from './types';

/**
 * A Grade 10 Mathematics question as authored: the key and three wrong options are computed from the tested helpers
 * (grade10Helpers.ts) inside the spec files, then `compose` puts them in a fixed, varied order. scripts/gen-g10-maths-bank.ts writes the
 * result into each topic's `const bank` literal (so the question tooling, which reads string literals, sees ordinary items), and
 * g10MathsBank.test.ts proves the literal in every file equals what the spec computes.
 */
export interface Q {
  prompt: string;
  correct: string;
  wrong: [string, string, string];
  explanation: string;
}

export const q = (prompt: string, correct: string, wrong: [string, string, string], explanation: string): Q => ({ prompt, correct, wrong, explanation });

/** The key goes to position (3i + 1) mod 4: all four positions are used evenly, in a fixed order. */
export const compose = (qs: Q[]): MathematicsItem[] =>
  qs.map((x, i) => {
    const pos = (3 * i + 1) % 4;
    const options = [...x.wrong];
    options.splice(pos, 0, x.correct);
    return { prompt: x.prompt, options, answer: x.correct, explanation: x.explanation };
  });
