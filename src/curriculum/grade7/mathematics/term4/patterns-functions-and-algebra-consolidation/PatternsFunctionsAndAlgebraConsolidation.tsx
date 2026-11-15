import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { SquareGrid } from '../../../../../components/diagrams/maths/Grade7Pictures';
import { AlgebraTiles, CoordGrid, FlowBack, FunctionTable } from '../../../../../components/diagrams/maths/Grade7Functions';
import { collectLike, evalLinear, geometricTerms, linearRule, linearTerms, ruleFormula, runBackwards, solveLinear, termsText, type Term } from '../../../../../components/diagrams/maths/grade7Helpers2';

// Every number in the slides below comes from tested helpers (grade7Helpers2.test.ts, lessons3.test.ts).
const seq = linearTerms(3, 1, 4);
const seqRule = linearRule([1, 2, 3, 4], seq) ?? { m: 0, c: 0 };
const geo = geometricTerms(5, 2, 4);
const y6 = evalLinear(3, -2, 6);
const bSquared = 5 * 5;
const expr: Term[] = [{ coef: 2, letter: 'x' }, { coef: 5, letter: '' }, { coef: -1, letter: 'x' }, { coef: 3, letter: '' }];
const simple = termsText(collectLike(expr));
const eq = solveLinear(2, 3, 11);
const back = runBackwards([{ op: '×', n: 2 }, { op: '+', n: 3 }], 11);
const quarter = 3 * 4;
const pts = [1, 2, 3].map((x) => ({ x, y: evalLinear(2, 0, x) }));
const ptRule = linearRule(pts.map((p) => p.x), pts.map((p) => p.y)) ?? { m: 0, c: 0 };
const check = {
  rule: linearRule([1, 2, 3, 4], linearTerms(5, -1, 4)) ?? { m: 0, c: 0 },
  simp: termsText(collectLike([{ coef: 4, letter: 'a' }, { coef: -3, letter: '' }, { coef: 2, letter: 'a' }, { coef: 7, letter: '' }])),
  eq: solveLinear(3, -4, 17),
  sq: 3 + 4 * 4,
};
const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: 'Pattern rules: Tn and the next term',
    content: slide(
      <>
        <Rule>If the terms go up by the same amount d, the rule is Tn = d × n plus a fixed number. If they are multiplied by the same number, multiply again for the next term.</Rule>
        <FunctionTable xs={[1, 2, 3, 4]} ys={seq} heads={['n', 'Tn']} rule={`Tn = ${seqRule.m}n + ${seqRule.c}`} />
        <Worked
          title="4, 7, 10, 13, ... and 5, 10, 20, ..."
          steps={[
            <>Up by 3, so 3n. For n = 1: 3 × 1 = 3, and the term is 4, so add 1: <strong>Tn = 3n + 1</strong>.</>,
            <>10 ÷ 5 = 2 and 20 ÷ 10 = 2, so multiply by 2: 20 × 2 = <strong>{geo[3]}</strong>.</>,
          ]}
        />
        <Mistake>Adding 5 to get 25 after 5, 10, 20. The gaps are 5 and 10, not equal, so the pattern multiplies by 2.</Mistake>
      </>,
    ),
  },
  {
    title: 'Substitution, including squares',
    content: slide(
      <>
        <Rule>Replace each letter with its value. Work out powers first, then multiplication, then addition and subtraction.</Rule>
        <SquareGrid n={5} />
        <Worked
          title="y = 3x − 2 when x = 6, and a + b² when a = 2, b = 5"
          steps={[
            <>3 × 6 = 18, then 18 − 2 = <strong>{y6}</strong>.</>,
            <>b² = 5 × 5 = {bSquared}.</>,
            <>a + b² = 2 + {bSquared} = <strong>{2 + bSquared}</strong>.</>,
          ]}
        />
        <Mistake>Adding before squaring: (2 + 5)² = 49. In a + b² only the b is squared, so 2 + 25 = 27.</Mistake>
      </>,
    ),
  },
  {
    title: 'Simplify by collecting like terms',
    content: slide(
      <>
        <Rule>Group the terms with the same letter and the plain numbers. Keep each term’s sign with it.</Rule>
        <AlgebraTiles terms={expr} />
        <Worked
          title="Simplify 2x + 5 − x + 3"
          steps={[
            <>x-terms: 2x − x = x.</>,
            <>Numbers: 5 + 3 = 8.</>,
            <>Together: <strong>{simple}</strong>.</>,
          ]}
        />
        <Mistake>Losing the minus sign: 2x + x = 3x gives 3x + 8. The − belongs to the x, so 2x − x = x.</Mistake>
      </>,
    ),
  },
  {
    title: 'Solving equations in two steps',
    content: slide(
      <>
        <Rule>Undo the operations in reverse order, doing the same to both sides. To undo ÷ 4, multiply both sides by 4.</Rule>
        <FlowBack rules={[{ op: '×', n: 2 }, { op: '+', n: 3 }]} input={eq.x} />
        <Worked
          title="Solve 2x + 3 = 11, and x/4 = 3"
          steps={[
            <>Subtract 3 from both sides: 2x = 11 − 3 = {eq.afterB}.</>,
            <>Divide both sides by 2: x = {eq.afterB} ÷ 2 = <strong>{eq.x}</strong>. Check: 2 × {eq.x} + 3 = 11 ✓</>,
            <>x/4 = 3: multiply both sides by 4: x = 3 × 4 = <strong>{quarter}</strong>.</>,
          ]}
        />
        <Mistake>Dividing only some of the terms: 11 ÷ 2 = 5,5 and 2x ÷ 2 = x, giving x + 3 = 5,5 (the 3 was not divided). Instead undo the last step first: − 3 gives {back[0].value}, then ÷ 2 gives {back[1].value}.</Mistake>
      </>,
    ),
  },
  {
    title: 'From points to a rule',
    content: slide(
      <>
        <Rule>Points (x, y) from a table can be plotted. Find how y depends on x, and test the rule on every point.</Rule>
        <CoordGrid
          max={6}
          line={ptRule}
          points={pts.map((p) => ({ ...p, label: `(${p.x}, ${p.y})` }))}
          aria={`The points ${pts.map((p) => `(${p.x}, ${p.y})`).join(', ')} on a grid. They lie on a straight line through the origin, the graph of ${ruleFormula(ptRule.m, ptRule.c)}.`}
        />
        <Worked
          title="(1, 2), (2, 4), (3, 6)"
          steps={[
            <>Each y is double its x: 2 × 1 = 2, 2 × 2 = 4, 2 × 3 = 6.</>,
            <>The rule is <strong>{ruleFormula(ptRule.m, ptRule.c)}</strong>.</>,
          ]}
        />
        <Mistake>Choosing y = x + 2 without testing it. For x = 1 it gives 1 + 2 = 3, not 2, so it fails. Test every point before you choose a rule.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        question={
          <ol className="list-decimal space-y-2 pl-5">
            <li>Find the rule for 4, 9, 14, 19, ...</li>
            <li>Simplify 4a − 3 + 2a + 7.</li>
            <li>Solve 3x − 4 = 17.</li>
            <li>Evaluate p + q² when p = 3 and q = 4.</li>
          </ol>
        }
        answer={
          <ol className="list-decimal space-y-2 pl-5">
            <li>Up by 5, and 5 × 1 − 1 = 4, so Tn = {check.rule.m}n − {-check.rule.c}.</li>
            <li>{check.simp}.</li>
            <li>Add 4: 3x = {check.eq.afterB}. Divide by 3: x = {check.eq.x}.</li>
            <li>3 + 4 × 4 = 3 + 16 = {check.sq}.</li>
          </ol>
        }
      />,
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'Which rule matches 4, 7, 10, 13, ...?',
    options: ['3n + 1', '2n + 2', 'n² + 3', '4n'],
    answer: '3n + 1',
    explanation: 'The sequence increases by 3 and starts at 4 when n = 1.',
  },
  {
    prompt: 'Simplify 2x + 5 − x + 3.',
    options: ['x + 8', 'x + 2', '3x + 8', '2x + 8'],
    answer: 'x + 8',
    explanation: 'Combine like terms: 2x − x = x and 5 + 3 = 8.',
  },
  {
    prompt: 'Solve 2x + 3 = 11.',
    options: ['4', '7', '14', '5'],
    answer: '4',
    explanation: 'Subtract 3, then divide by 2.',
  },
  {
    prompt: 'If y = 3x − 2, what is y when x = 6?',
    options: ['16', '18', '10', '14'],
    answer: '16',
    explanation: 'y = 3(6) − 2 = 18 − 2 = 16.',
  },
  {
    prompt: 'Evaluate a + b² when a = 2 and b = 5.',
    options: ['27', '49', '35', '12'],
    answer: '27',
    explanation: '2 + 5² = 2 + 25 = 27.',
  },
  {
    prompt: 'What is the next term in 5, 10, 20, ...?',
    options: ['40', '25', '30', '35'],
    answer: '40',
    explanation: 'This geometric pattern doubles each term.',
  },
  {
    prompt: 'Solve x/4 = 3.',
    options: ['12', '7', '1', '0,75'],
    answer: '12',
    explanation: 'Multiply both sides by 4.',
  },
  {
    prompt: 'Points (1,2), (2,4), and (3,6) follow which relationship?',
    options: ['y = 2x', 'y = x + 2', 'y = x²', 'y = 3x'],
    answer: 'y = 2x',
    explanation: 'Each y-value is twice the x-value.',
  },
];

const PatternsFunctionsAndAlgebraConsolidation = () => (
  <CapsSubjectTopic
    title="Patterns, Functions and Algebra Consolidation"
    subtitle="Integrating sequences, rules, expressions, and equations"
    learnSteps={learnSteps}
    task="gr7-patterns-functions-and-algebra-consolidation-t4"
    bank={bank}
    apiPath="/api/caps/math"
  />
);

export default PatternsFunctionsAndAlgebraConsolidation;
