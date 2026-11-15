import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { DistributeArrows, FactorArea, TermCards, UnitBars } from '../../../../../components/diagrams/maths/Grade8Algebra';
import { collectTerms, evaluate, expand, exprText, factorOut, isLike, type Term } from '../../../../../components/diagrams/maths/grade8AlgebraHelpers';

// Every number in the slides below comes from these tested helpers (grade8AlgebraHelpers) and
// lessonsMaths5.test.ts checks that the rendered slides show them.
const X = (n: number, letter?: string): Term => (letter ? { n, letter } : { n });
const T = (terms: Term[]) => exprText(terms);

const target = X(8, 'x');
const candidates = [X(-3, 'x'), X(8, 'x²'), X(8, 'y'), X(8)];
const like = candidates.filter((c) => isLike(c, target));
const sevenA = collectTerms([X(7, 'a'), X(-3, 'a')]);
const mixed = [X(2, 'm'), X(5), X(3, 'm'), X(-1)];
const mixedR = collectTerms(mixed);
const exp1 = expand(5, [X(1, 'x'), X(-2)]);
const exp2a = expand(4, [X(2, 'k'), X(1)]);
const exp2 = collectTerms([...exp2a, X(-3, 'k')]);
const fac = factorOut(6, 12);
const fac2 = factorOut(4, 6); // the mistake: 2 is a common factor of 4x + 6 — 2(2x + 3)
const words = [X(2, 'n'), X(-7)];
const wordsAt10 = evaluate(words, 10);
const sub = evaluate([X(3, 'p'), X(2)], 4);
const checkL = 4 * (2 * 2 + 1) - 3 * 2; // 4(2k + 1) − 3k with k = 2
const checkR = evaluate(exp2, 2);

// "Check yourself", answers computed from the same helpers
const c1 = collectTerms([X(9, 'y'), X(4), X(-2, 'y'), X(-6)]);
const c2 = expand(-3, [X(1, 'a'), X(-4)]);
const c3 = factorOut(5, 20);
const c4 = evaluate([X(4, 'n'), X(-9)], 3);

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: 'Like terms have the same letter part',
    content: slide(
      <>
        <Rule>Like terms have exactly the same letters with the same exponents. Only the coefficient (the number in front) may differ, and only like terms can be added or subtracted.</Rule>
        <TermCards
          cards={[{ text: T([target]), group: 0 }, ...candidates.map((c) => ({ text: T([c]), group: isLike(c, target) ? 0 : null }))]}
          caption={`like ${T([target])}: only ${like.map((c) => T([c])).join(', ')}`}
          aria={`Term cards ${[target, ...candidates].map((c) => T([c])).join(', ')}. Only ${like.map((c) => T([c])).join(', ')} is coloured like ${T([target])}; the others are greyed out because their letter part is different.`}
        />
        <Worked
          steps={[
            <>{T([target])} and {T([like[0]])}: both have the letter part x, so they are like terms.</>,
            <>8x² has x², 8y has y and 8 has no letter: none of them is like 8x.</>,
            <>7a − 3a: subtract the coefficients, 7 − 3 = 4, so 7a − 3a = <strong>{T(sevenA)}</strong>.</>,
          ]}
        />
        <Mistake>Thinking 8x² is like 8x because both have an 8 and an x. x² = x × x is a different letter part; the coefficient does not decide.</Mistake>
      </>,
    ),
  },
  {
    title: 'Collecting letter terms and constants',
    content: slide(
      <>
        <Rule>Underline the like terms, keeping the sign in front of each term with it. Collect the letter terms, then the constants.</Rule>
        <TermCards
          cards={[{ text: '2m', group: 0 }, { text: '+5', group: 1 }, { text: '+3m', group: 0 }, { text: '−1', group: 1 }]}
          result={[{ text: T([mixedR[0]]), group: 0 }, { text: `+${mixedR[1].n}`, group: 1 }]}
          aria={`Term cards 2m, plus 5, plus 3m, minus 1. The m-terms are indigo and the constants amber. Collected: ${T(mixedR)}.`}
        />
        <Worked
          title={T(mixed)}
          steps={[
            <>The m-terms: 2m + 3m = {T([mixedR[0]])}.</>,
            <>The constants: +5 − 1 = +{mixedR[1].n}.</>,
            <>So {T(mixed)} = <strong>{T(mixedR)}</strong>.</>,
          ]}
        />
        <Mistake>Adding everything into one term: {T(mixed)} is not 9m. 5 and −1 have no letter, so they stay as a separate constant: {T(mixedR)}.</Mistake>
      </>,
    ),
  },
  {
    title: 'Expanding brackets, then simplifying',
    content: slide(
      <>
        <Rule>The term outside the brackets multiplies every term inside, sign included. After expanding, collect like terms.</Rule>
        <DistributeArrows k="5" inside={['x', '−2']} products={exp1.map((t) => T([t]))} />
        <Worked
          steps={[
            <>5(x − 2) = 5 × x + 5 × (−2) = <strong>{T(exp1)}</strong>.</>,
            <>4(2k + 1) − 3k: expand first, 4(2k + 1) = {T(exp2a)}.</>,
            <>Then {T(exp2a)} − 3k: 8k − 3k = {T([exp2[0]])}, so the answer is <strong>{T(exp2)}</strong>.</>,
          ]}
        />
        <Mistake>Multiplying only the first term: 5(x − 2) is not 5x − 2. The 5 multiplies the −2 as well, giving {T([exp1[1]])}.</Mistake>
      </>,
    ),
  },
  {
    title: 'Factorising: take out the common factor',
    content: slide(
      <>
        <Rule>Factorising undoes expanding. Find the highest common factor (HCF) of the terms, write it outside the brackets, and divide each term by it.</Rule>
        <FactorArea k={fac.k} p={fac.p} letter="x" q={fac.q} />
        <Worked
          title="6x + 12"
          steps={[
            <>Factors of 6: 1, 2, 3, 6. Factors of 12: 1, 2, 3, 4, 6, 12. The HCF is {fac.k}.</>,
            <>6x ÷ {fac.k} = x and 12 ÷ {fac.k} = {fac.q}.</>,
            <>So 6x + 12 = <strong>{fac.k}(x + {fac.q})</strong>. Check by expanding: {fac.k} × x + {fac.k} × {fac.q} = 6x + 12 ✓.</>,
          ]}
        />
        <Mistake>Taking out a factor that is not the highest: 6x + 12 = 2(3x + 6) is true but not fully factorised, because 3x + 6 still has the factor 3. For 4x + 6 the HCF is {fac2.k}: {fac2.k}({fac2.p}x + {fac2.q}).</Mistake>
      </>,
    ),
  },
  {
    title: 'Writing expressions and substituting values',
    content: slide(
      <>
        <Rule>Build the expression in the order the words give it. To substitute, replace the letter by its value and calculate: × before + and −.</Rule>
        <UnitBars groups={3} value={4} extra={2} letter="p" />
        <Worked
          steps={[
            <>Twice a number n, minus 7: twice n is 2n, then subtract 7, so <strong>{T(words)}</strong>. If n = 10: 2 × 10 − 7 = {wordsAt10}.</>,
            <>3p + 2 when p = 4: 3 × 4 + 2 = 12 + 2 = <strong>{sub}</strong>.</>,
            <>Substituting also checks a simplification: with k = 2, 4(2k + 1) − 3k = {checkL} and {T(exp2)} = {checkR} ✓.</>,
          ]}
        />
        <Mistake>Writing “twice a number minus 7” as 2(n − 7). That takes 7 away first. The words subtract 7 after doubling: {T(words)}.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          <>Simplify 9y + 4 − 2y − 6.</>,
          <>Expand −3(a − 4).</>,
          <>Factorise 5x + 20.</>,
          <>Find the value of 4n − 9 when n = 3.</>,
        ]}
        answers={[
          <>{T(c1)}.</>,
          <>{T(c2)} (−3 × −4 = +12).</>,
          <>{c3.k}(x + {c3.q}).</>,
          <>4 × 3 − 9 = {c4}.</>,
        ]}
      />,
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'Simplify 7a - 3a.',
    options: ['4a', '10a', '4', 'a'],
    answer: '4a',
    explanation: 'Subtract coefficients of like terms: 7 - 3 = 4.',
  },
  {
    prompt: 'Expand 5(x - 2).',
    options: ['5x - 10', '5x - 2', 'x - 10', '10x - 2'],
    answer: '5x - 10',
    explanation: 'Distribute 5 to both terms in the bracket.',
  },
  {
    prompt: 'Factorise 6x + 12.',
    options: ['6(x + 2)', '3(2x + 4)', '12(x + 1)', '6(x + 12)'],
    answer: '6(x + 2)',
    explanation: 'The greatest common factor is 6.',
  },
  {
    prompt: 'If p = 4, what is 3p + 2?',
    options: ['14', '10', '18', '12'],
    answer: '14',
    explanation: 'Substitute p = 4: 3(4) + 2 = 14.',
  },
  {
    prompt: 'Simplify 2m + 5 + 3m - 1.',
    options: ['5m + 4', '5m + 6', '6m + 4', '5m - 4'],
    answer: '5m + 4',
    explanation: 'Combine like terms and constants separately.',
  },
  {
    prompt: 'Which expression means “twice a number n minus 7”?',
    options: ['2n - 7', 'n - 7', '2(n - 7)', '7 - 2n'],
    answer: '2n - 7',
    explanation: 'Twice a number is 2n, then subtract 7.',
  },
  {
    prompt: 'Simplify 4(2k + 1) - 3k.',
    options: ['5k + 4', '8k + 1', '5k + 1', '8k - 3k + 1'],
    answer: '5k + 4',
    explanation: 'Expand first: 8k + 4, then subtract 3k.',
  },
  {
    prompt: 'Which term is like 8x?',
    options: ['-3x', '8y', 'x²', '8'],
    answer: '-3x',
    explanation: 'Like terms must have the same variable and power.',
  },
];

const AlgebraicExpressions = () => (
  <CapsSubjectTopic
    title="Algebraic Expressions"
    subtitle="Expanding, factorising, and simplifying symbolic forms"
    learnSteps={learnSteps}
    task="gr8-algebraic-expressions-t2"
    bank={bank}
    apiPath="/api/caps/math"
  />
);

export default AlgebraicExpressions;
