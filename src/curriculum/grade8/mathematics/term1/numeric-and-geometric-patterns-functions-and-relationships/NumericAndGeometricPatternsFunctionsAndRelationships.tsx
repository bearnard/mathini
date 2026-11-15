import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { ChainSteps, FlowRows } from '../../../../../components/diagrams/maths/PatternDiagrams';
import { DotSquares, TermBars } from '../../../../../components/diagrams/maths/Grade8Pictures';
import { sequence } from '../../../../../components/diagrams/maths/mathsHelpers';
import { commonDifference, commonRatio, differences, linearRule, linearText, linearValue } from '../../../../../components/diagrams/maths/grade8Helpers';

// Every number in the slides below comes from these tested helpers (mathsHelpers, grade8Helpers) and
// lessonsMaths4.test.ts checks that the rendered slides show them.
const lin = sequence(4, { op: '+', n: 3 }, 5); // 4, 7, 10, 13, 16
const linD = commonDifference(lin) ?? 0;
const rule = [5, 9, 13, 17];
const r = linearRule(rule) ?? { d: 0, c: 0 };
const wrongRule = { d: 1, c: r.d }; // the mistake: n + 4
const geo = sequence(3, { op: '×', n: 2 }, 5); // 3, 6, 12, 24, 48
const geoR = commonRatio(geo.slice(0, 4)) ?? 0;
const geo2 = [2, 6, 18, 54];
const geo2R = commonRatio(geo2) ?? 0;
const squares = [1, 4, 9, 16, 25];
const sqDiffs = differences(squares);
const table = { xs: [1, 2, 3], ys: [1, 2, 3].map((x) => linearValue(3, 1, x)) };
const wrongTable = linearValue(1, 3, 2); // y = x + 3 at x = 2 gives 5, not 7
const sub1 = linearValue(2, -1, 6);
const sub2 = linearValue(1, 5, -2);

// "Check yourself", answers computed from the same helpers
const c1 = [7, 12, 17, 22];
const c1r = linearRule(c1) ?? { d: 0, c: 0 };
const c2 = [5, 10, 20];
const c2r = commonRatio(c2) ?? 0;
const c3 = linearValue(4, -3, 5);

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: 'Linear patterns have a constant difference',
    content: slide(
      <>
        <Rule>Subtract each term from the next one. If the difference is always the same, the pattern is linear and you add that difference each time.</Rule>
        <ChainSteps start={lin[0]} rule={{ op: '+', n: linD }} count={5} hideLast />
        <Worked
          title={lin.slice(0, 4).join(', ') + ', …'}
          steps={[
            <>Differences: {differences(lin.slice(0, 4)).map((d) => `+${d}`).join(', ')}.</>,
            <>The common difference is <strong>+{linD}</strong>.</>,
            <>Next term: {lin[3]} + {linD} = <strong>{lin[4]}</strong>.</>,
          ]}
        />
        <Mistake>Calling the rule ×3 because the difference is 3. Check: 4 × 3 = 12, not 7. The pattern adds 3 each time.</Mistake>
      </>,
    ),
  },
  {
    title: 'The general term of a linear pattern',
    content: slide(
      <>
        <Rule>If the common difference is d, the rule starts with d × n. Then add or subtract the number that makes term 1 correct.</Rule>
        <TermBars d={r.d} c={r.c} count={4} />
        <Worked
          title={rule.join(', ') + ', …'}
          steps={[
            <>The difference is {r.d}, so start with {r.d}n.</>,
            <>For n = 1: {r.d} × 1 = {r.d}, but term 1 is {rule[0]}. Add {r.c}.</>,
            <>Rule: T<sub>n</sub> = <strong>{linearText(r.d, r.c)}</strong>. Check n = 4: {r.d} × 4 + {r.c} = {linearValue(r.d, r.c, 4)}.</>,
          ]}
        />
        <Mistake>
          Writing {linearText(wrongRule.d, wrongRule.c)} because the pattern adds {r.d}. That gives {linearValue(wrongRule.d, wrongRule.c, 1)}, {linearValue(wrongRule.d, wrongRule.c, 2)}, … The difference {r.d} multiplies n.
        </Mistake>
      </>,
    ),
  },
  {
    title: 'Geometric patterns have a constant ratio',
    content: slide(
      <>
        <Rule>Divide each term by the one before it. If the answer is always the same, the pattern is geometric and you multiply by that ratio each time.</Rule>
        <ChainSteps start={geo[0]} rule={{ op: '×', n: geoR }} count={5} hideLast />
        <Worked
          title={geo.slice(0, 4).join(', ') + ', …'}
          steps={[
            <>6 ÷ 3 = 12 ÷ 6 = 24 ÷ 12 = {geoR}: the ratio is ×{geoR}.</>,
            <>Next term: {geo[3]} × {geoR} = <strong>{geo[4]}</strong>.</>,
            <>{geo2.join(', ')} is also geometric: each term is ×{geo2R}.</>,
          ]}
        />
        <Mistake>Looking only at the first gap: 3 to 6 is +3, so 27 next. But 6 to 12 is +6. The differences change; the ratio ×{geoR} stays.</Mistake>
      </>,
    ),
  },
  {
    title: 'Square numbers: 1, 4, 9, 16, …',
    content: slide(
      <>
        <Rule>The square numbers follow T<sub>n</sub> = n². Their differences are not constant: they grow by 2 each time.</Rule>
        <DotSquares upTo={4} />
        <Worked
          steps={[
            <>The terms are 1², 2², 3², 4²: {squares.slice(0, 4).join(', ')}.</>,
            <>Differences: {sqDiffs.slice(0, 3).map((d) => `+${d}`).join(', ')}, so the next difference is +{sqDiffs[3]}.</>,
            <>Next term: 16 + {sqDiffs[3]} = <strong>{squares[4]}</strong>, which is 5².</>,
          ]}
        />
        <Mistake>Adding the last difference again: 16 + 7 = 23. The difference grows by 2 each time, so the next one is {sqDiffs[3]}.</Mistake>
      </>,
    ),
  },
  {
    title: 'Input, output and the rule y = …',
    content: slide(
      <>
        <Rule>A rule such as y = 3x + 1 turns every input x into one output y. Substitute x to find y; test a rule on every pair in the table.</Rule>
        <FlowRows rules={[{ op: '×', n: 3 }, { op: '+', n: 1 }]} inputs={table.xs} />
        <Worked
          steps={[
            <>Table: x = {table.xs.join(', ')} gives y = {table.ys.join(', ')}. When x goes up 1, y goes up 3, so try y = 3x + 1.</>,
            <>Test every pair: 3 × 1 + 1 = {table.ys[0]}, 3 × 2 + 1 = {table.ys[1]}, 3 × 3 + 1 = {table.ys[2]} ✓.</>,
            <>y = 2x − 1 with x = 6: y = 2 × 6 − 1 = <strong>{sub1}</strong>.</>,
            <>y = x + 5 with x = −2: y = −2 + 5 = <strong>{sub2}</strong>.</>,
          ]}
        />
        <Mistake>Testing only the first pair. y = x + 3 also gives 4 when x = 1, but when x = 2 it gives {wrongTable}, not 7.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          <>Find the next term and the rule T<sub>n</sub> of {c1.join(', ')}, …</>,
          <>Is {c2.join(', ')}, … linear or geometric? Give the next term.</>,
          <>If y = 4x − 3, find y when x = 5.</>,
          <>What is the 6th square number?</>,
        ]}
        answers={[
          <>Difference {c1r.d}: next term {linearValue(c1r.d, c1r.c, 5)}; T<sub>n</sub> = {linearText(c1r.d, c1r.c)}.</>,
          <>Geometric (×{c2r}); the next term is {c2[2] * c2r}.</>,
          <>y = 4 × 5 − 3 = {c3}.</>,
          <>6² = {6 * 6}.</>,
        ]}
      />,
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'What is the common difference in 4, 7, 10, 13, ...?',
    options: ['+3', '+2', '+4', '×3'],
    answer: '+3',
    explanation: 'Each term increases by 3.',
  },
  {
    prompt: 'Which rule matches 5, 9, 13, 17, ...?',
    options: ['4n + 1', '3n + 2', 'n + 4', '2n + 3'],
    answer: '4n + 1',
    explanation: 'Substituting n = 1, 2, 3 gives 5, 9, 13.',
  },
  {
    prompt: 'If y = 2x - 1, what is y when x = 6?',
    options: ['11', '13', '10', '12'],
    answer: '11',
    explanation: '2(6) - 1 = 12 - 1 = 11.',
  },
  {
    prompt: 'In the sequence 3, 6, 12, 24, ..., what is the next term?',
    options: ['48', '30', '36', '40'],
    answer: '48',
    explanation: 'Each term doubles.',
  },
  {
    prompt: 'A table has x: 1, 2, 3 and y: 4, 7, 10. What is the rule?',
    options: ['y = 3x + 1', 'y = 2x + 2', 'y = x + 3', 'y = x² + 3'],
    answer: 'y = 3x + 1',
    explanation: 'The outputs increase by 3 and match 3x + 1.',
  },
  {
    prompt: 'If y = x + 5, what is y when x = -2?',
    options: ['3', '-7', '-3', '7'],
    answer: '3',
    explanation: 'Substitute x = -2: y = -2 + 5 = 3.',
  },
  {
    prompt: 'Which sequence is geometric?',
    options: ['2, 6, 18, 54', '2, 5, 8, 11', '4, 7, 10, 13', '1, 4, 7, 10'],
    answer: '2, 6, 18, 54',
    explanation: 'Each term is multiplied by 3.',
  },
  {
    prompt: 'What comes next in 1, 4, 9, 16, ...?',
    options: ['25', '20', '24', '18'],
    answer: '25',
    explanation: 'These are square numbers: 1², 2², 3², 4², then 5².',
  },
];

const NumericAndGeometricPatternsFunctionsAndRelationships = () => (
  <CapsSubjectTopic
    title="Numeric and Geometric Patterns; Functions and Relationships"
    subtitle="Pattern rules, tables, and relationship representations"
    learnSteps={learnSteps}
    task="gr8-numeric-and-geometric-patterns-functions-and-relationships-t1"
    bank={bank}
    apiPath="/api/caps/math"
  />
);

export default NumericAndGeometricPatternsFunctionsAndRelationships;
