import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { FunctionTable } from '../../../../../components/diagrams/maths/Grade7Functions';
import { PlusStages, SquareStages, TermRow } from '../../../../../components/diagrams/maths/Grade7Patterns';
import { signed } from '../../../../../components/diagrams/maths/grade7Helpers';
import { commonDifference, commonRatio, geometricTerms, linearRule, linearTerms, plusStage } from '../../../../../components/diagrams/maths/grade7Helpers2';

// Every number in the slides below comes from tested helpers (grade7Helpers2.test.ts, lessons3.test.ts).
const sevens = linearTerms(7, 0, 5);
const down = [30, 27, 24, 21];
const downStep = commonDifference(down) ?? 0;
const fives = linearTerms(3, 2, 4);
const rule = linearRule([1, 2, 3, 4], fives) ?? { m: 0, c: 0 };
const t10 = linearTerms(2, 1, 10)[9];
const tiles = plusStage(6).length;
const doubles = geometricTerms(2, 2, 5);
const ratio = commonRatio(doubles.slice(0, 4)) ?? 0;
const check = {
  next: linearTerms(4, 3, 5),
  rule: linearRule([1, 2, 3, 4], linearTerms(4, 1, 4)) ?? { m: 0, c: 0 },
  t20: linearTerms(5, -2, 20)[19],
  geo: geometricTerms(3, 3, 4),
};
const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: 'Constant difference: add or subtract the same number',
    content: slide(
      <>
        <Rule>Many patterns add or subtract the same number every time. Find that difference, then use it to get the next or a missing term.</Rule>
        <TermRow terms={sevens} mode="difference" hide={3} />
        <Worked
          title="7, 14, 21, __, 35 and 30, 27, 24, 21, ..."
          steps={[
            <>14 − 7 = 7 and 21 − 14 = 7, so add 7: 21 + 7 = <strong>{sevens[3]}</strong>. Check: {sevens[3]} + 7 = {sevens[4]} ✓</>,
            <>27 − 30 = {signed(downStep)}: the rule is <strong>subtract 3 each time</strong>, so the next term is 21 − 3 = {21 + downStep}.</>,
          ]}
        />
        <Mistake>Checking only one gap. Look at every gap: if they are not all the same, the pattern does not add a constant number.</Mistake>
      </>,
    ),
  },
  {
    title: 'The general rule: from position to term',
    content: slide(
      <>
        <Rule>Write the position n above each term. If the terms go up by d each time, the rule starts with d × n. Then add or subtract to fit, and test it.</Rule>
        <FunctionTable xs={[1, 2, 3, 4]} ys={fives} heads={['n', 'Tn']} rule={`Tn = ${rule.m}n + ${rule.c}`} />
        <Worked
          title="5, 8, 11, 14, ..."
          steps={[
            <>The terms go up by 3, so start with 3n.</>,
            <>n = 1: 3 × 1 = 3, but the term is 5, so add {rule.c}.</>,
            <>Test n = 4: 3 × 4 + 2 = {rule.m * 4 + rule.c} ✓ The rule is <strong>Tn = 3n + 2</strong>.</>,
          ]}
        />
        <Mistake>Writing n + 3 because the terms go up by 3. Then n = 2 gives 5, not 8. The difference multiplies n.</Mistake>
      </>,
    ),
  },
  {
    title: 'Using the rule to find any term',
    content: slide(
      <>
        <Rule>With a rule for Tn you can jump straight to any term: put the position in place of n.</Rule>
        <PlusStages stages={[1, 2, 3]} />
        <Worked
          title="Tn = 2n + 1, and a tile pattern"
          steps={[
            <>T10 = 2 × 10 + 1 = <strong>{t10}</strong>.</>,
            <>Stage 1 has 5 tiles and each stage adds 4, so Tn = 4n + 1.</>,
            <>Stage 6: 4 × 6 + 1 = <strong>{tiles} tiles</strong>.</>,
          ]}
        />
        <Mistake>Adding 4 six times to 5 (5 + 24 = 29). Stage 1 already has 5 tiles, so stage 6 needs only 5 more groups of 4: 5 + 20 = 25.</Mistake>
      </>,
    ),
  },
  {
    title: 'Geometric patterns: multiply by the same number',
    content: slide(
      <>
        <Rule>In a geometric pattern each term is multiplied by the same number (the ratio) to get the next term.</Rule>
        <TermRow terms={doubles} mode="ratio" hide={4} />
        <Worked
          title="2, 4, 8, 16, ..."
          steps={[
            <>4 ÷ 2 = 2, 8 ÷ 4 = 2, 16 ÷ 8 = 2: the ratio is {ratio}.</>,
            <>Next term: 16 × 2 = <strong>{doubles[4]}</strong>.</>,
          ]}
        />
        <Mistake>Calling 2, 4, 6, 8 geometric. It adds 2 each time; the ratios 4 ÷ 2 = 2 and 6 ÷ 4 are not equal, so it is not multiplying.</Mistake>
      </>,
    ),
  },
  {
    title: 'Square numbers: Tn = n²',
    content: slide(
      <>
        <Rule>The square numbers 1, 4, 9, 16, ... are n × n = n². The differences grow: 3, 5, 7, ..., so this pattern does not add a constant.</Rule>
        <SquareStages upTo={4} />
        <Worked
          title="1, 4, 9, 16, ..."
          steps={[
            <>1 × 1 = 1, 2 × 2 = 4, 3 × 3 = 9, 4 × 4 = 16.</>,
            <>The next term is n = 5: 5 × 5 = <strong>25</strong>.</>,
          ]}
        />
        <Mistake>Reading n² as n × 2. For n = 3 that gives 6, but 3² = 3 × 3 = 9.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        question={
          <ol className="list-decimal space-y-2 pl-5">
            <li>What is the next term in 7, 11, 15, 19, ...?</li>
            <li>Find the rule for 5, 9, 13, 17, ...</li>
            <li>If Tn = 5n − 2, what is T20?</li>
            <li>What is the next term in 3, 9, 27, ...?</li>
          </ol>
        }
        answer={
          <ol className="list-decimal space-y-2 pl-5">
            <li>Add 4: 19 + 4 = {check.next[4]}.</li>
            <li>Up by 4, and 4 × 1 + 1 = 5, so Tn = {check.rule.m}n + {check.rule.c}.</li>
            <li>5 × 20 − 2 = {check.t20}.</li>
            <li>Multiply by 3: 27 × 3 = {check.geo[3]}.</li>
          </ol>
        }
      />,
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'What is the next term in 3, 6, 9, ...?',
    options: ['12', '11', '15', '18'],
    answer: '12',
    explanation: 'The pattern increases by 3 each time.',
  },
  {
    prompt: 'Which rule matches 5, 8, 11, 14, ...?',
    options: ['3n + 2', '2n + 3', 'n² + 4', '3n'],
    answer: '3n + 2',
    explanation: 'Substitute n = 1, 2, 3 to get 5, 8, 11.',
  },
  {
    prompt: 'Which sequence is geometric with ratio 2?',
    options: ['2, 4, 8, 16', '2, 4, 6, 8', '2, 6, 10, 14', '2, 3, 5, 8'],
    answer: '2, 4, 8, 16',
    explanation: 'Each term is multiplied by 2.',
  },
  {
    prompt: 'Find the missing term: 7, 14, 21, __, 35.',
    options: ['28', '24', '27', '30'],
    answer: '28',
    explanation: 'The sequence increases by 7.',
  },
  {
    prompt: 'Which pattern is represented by n²?',
    options: ['1, 4, 9, 16', '1, 2, 3, 4', '2, 4, 6, 8', '3, 6, 9, 12'],
    answer: '1, 4, 9, 16',
    explanation: 'These are square numbers.',
  },
  {
    prompt: 'What is the rule for 30, 27, 24, 21, ...?',
    options: ['subtract 3 each time', 'add 3 each time', 'multiply by 3', 'divide by 3'],
    answer: 'subtract 3 each time',
    explanation: 'Each term is 3 less than the previous term.',
  },
  {
    prompt: 'If Tn = 2n + 1, what is T10?',
    options: ['21', '19', '11', '12'],
    answer: '21',
    explanation: 'Substitute n = 10: 2(10) + 1 = 21.',
  },
  {
    prompt: 'If stage 1 has 5 tiles and each stage adds 4 tiles, how many tiles in stage 6?',
    options: ['25', '24', '29', '21'],
    answer: '25',
    explanation: 'Stage n = 4n + 1, so stage 6 = 4(6) + 1 = 25.',
  },
];

const NumericAndGeometricPatterns = () => (
  <CapsSubjectTopic
    title="Numeric and Geometric Patterns"
    subtitle="Rules, sequences, and pattern growth"
    learnSteps={learnSteps}
    task="gr7-numeric-and-geometric-patterns-t3"
    bank={bank}
    apiPath="/api/caps/math"
  />
);

export default NumericAndGeometricPatterns;
