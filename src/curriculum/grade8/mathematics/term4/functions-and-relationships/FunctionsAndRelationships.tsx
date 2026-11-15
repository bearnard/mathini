import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { FlowRows } from '../../../../../components/diagrams/maths/PatternDiagrams';
import { LinePlot, UndoFlow } from '../../../../../components/diagrams/maths/Grade8Graphs';
import { outputs, ruleFromTable, ruleText, solve } from '../../../../../components/diagrams/maths/grade8NumberHelpers';

// Every number in the slides below comes from these tested helpers (grade8NumberHelpers) and
// lessonsMaths6.test.ts checks that the rendered slides show them.
const [y1] = outputs(1, 4, [3]);
const flow = outputs(3, -2, [1, 5]);
const [y0] = outputs(4, 1, [0]);
const back1 = solve(1, 6, 11);
const back2 = solve(2, 1, 9);
const t1 = { xs: [1, 2, 3], ys: [2, 4, 6] };
const r1 = ruleFromTable(t1.xs, t1.ys) ?? { m: 0, c: 0 };
const t2 = { xs: [1, 2, 3, 4], ys: outputs(3, 2, [1, 2, 3, 4]) };
const r2 = ruleFromTable(t2.xs, t2.ys) ?? { m: 0, c: 0 };
const wrongR2 = outputs(1, 4, [2])[0]; // the mistake: y = x + 4 fits only the first pair
const grow = { xs: [0, 1, 2, 3], ys: outputs(5, 1, [0, 1, 2, 3]) };
const growR = ruleFromTable(grow.xs, grow.ys) ?? { m: 0, c: 0 };
const flat = ruleFromTable([1, 2, 3], [5, 5, 5]) ?? { m: 0, c: 0 };
const notLinear = ruleFromTable([1, 2, 3], [1, 4, 9]);

// "Check yourself", answers computed from the same helpers
const c1 = outputs(2, -3, [7])[0];
const c2 = solve(3, 4, 19);
const c3 = ruleFromTable([1, 2, 3], [7, 11, 15]) ?? { m: 0, c: 0 };

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: 'From input to output: substitute',
    content: slide(
      <>
        <Rule>A formula such as y = 3x − 2 tells you what to do to every input x. Replace x by the input and calculate: × before + and −.</Rule>
        <FlowRows rules={[{ op: '×', n: 3 }, { op: '−', n: 2 }]} inputs={[1, 5]} />
        <Worked
          steps={[
            <>y = x + 4 and x = 3: y = 3 + 4 = <strong>{y1}</strong>.</>,
            <>y = 3x − 2 and x = 5: y = 3 × 5 − 2 = 15 − 2 = <strong>{flow[1]}</strong>.</>,
            <>y = 4x + 1 and x = 0: y = 4 × 0 + 1 = <strong>{y0}</strong>. The input 0 leaves only the constant.</>,
          ]}
        />
        <Mistake>Working from left to right in 3x − 2 with x = 5 as 3 × (5 − 2) = 9. Multiply first: 3 × 5 = 15, then subtract 2.</Mistake>
      </>,
    ),
  },
  {
    title: 'From output back to input',
    content: slide(
      <>
        <Rule>When you know the output and need the input, put the output into the formula and solve the equation by undoing each step.</Rule>
        <UndoFlow ops={[{ op: '×', n: 2 }, { op: '+', n: 1 }]} result={9} />
        <Worked
          steps={[
            <>y = x + 6 and y = 11: x + 6 = 11, so x = 11 − 6 = <strong>{back1.x}</strong>.</>,
            <>y = 2x + 1 and y = 9: 2x + 1 = 9, so 2x = {back2.rhs} and x = <strong>{back2.x}</strong>.</>,
            <>Check: 2 × {back2.x} + 1 = {2 * back2.x + 1} ✓.</>,
          ]}
        />
        <Mistake>Putting 9 in as the input: 2 × 9 + 1 = 19 is the output for x = 9, not the input that gives 9.</Mistake>
      </>,
    ),
  },
  {
    title: 'Finding the rule from a table',
    content: slide(
      <>
        <Rule>See how much y changes when x goes up by 1: that number multiplies x. Then add or subtract what is needed to make the first pair right. Test every pair.</Rule>
        <LinePlot
          lines={[{ m: r2.m, c: r2.c, color: '#818cf8', label: ruleText(r2.m, r2.c) }]}
          xMax={4}
          yMax={15}
          xStep={1}
          yStep={5}
          aria={`The points (${t2.xs.map((x, i) => `${x}; ${t2.ys[i]}`).join('), (')}) lie on one straight line, ${ruleText(r2.m, r2.c)}.`}
        />
        <Worked
          steps={[
            <>x: {t1.xs.join(', ')} and y: {t1.ys.join(', ')}. y goes up {r1.m} each time and 2 × 1 = 2 already fits: <strong>{ruleText(r1.m, r1.c)}</strong>.</>,
            <>x: {t2.xs.join(', ')} and y: {t2.ys.join(', ')}. y goes up {r2.m}, so start with 3x. For x = 1: 3 × 1 = 3, add 2.</>,
            <>Rule: <strong>{ruleText(r2.m, r2.c)}</strong>. Test x = 4: 3 × 4 + 2 = {t2.ys[3]} ✓.</>,
          ]}
        />
        <Mistake>Testing only the first pair. y = x + 4 also gives 5 when x = 1, but for x = 2 it gives {wrongR2}, not {t2.ys[1]}.</Mistake>
      </>,
    ),
  },
  {
    title: 'Linear and constant relationships',
    content: slide(
      <>
        <Rule>If y changes by the same amount each time x goes up by 1, the relationship is linear and its graph is a straight line. That amount is the gradient. If y never changes, the relationship is constant.</Rule>
        <LinePlot
          lines={[{ m: growR.m, c: growR.c, color: '#818cf8', label: ruleText(growR.m, growR.c) }, { m: flat.m, c: flat.c, color: '#fbbf24', label: ruleText(flat.m, flat.c) }]}
          xMax={4}
          yMax={25}
          xStep={1}
          yStep={5}
          aria={`Two graphs. ${ruleText(growR.m, growR.c)} rises 5 for every step of 1 to the right. ${ruleText(flat.m, flat.c)} is a horizontal line: y stays 5.`}
        />
        <Worked
          steps={[
            <>x: {grow.xs.join(', ')} gives y: {grow.ys.join(', ')}. Each step adds {growR.m}: linear with gradient {growR.m}, <strong>{ruleText(growR.m, growR.c)}</strong>.</>,
            <>x: 1, 2, 3 gives y: 5, 5, 5. y does not change: a constant relationship, <strong>{ruleText(flat.m, flat.c)}</strong>.</>,
            <>x: 1, 2, 3 gives y: 1, 4, 9. The steps are +3, +5: {notLinear === null ? 'not linear' : 'linear'} (y = x²).</>,
          ]}
        />
        <Mistake>Calling y = 5 “no relationship”. Every input still has an output; it is always 5, so the graph is a horizontal line.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        question={
          <ol className="list-decimal space-y-2 pl-5">
            <li>If y = 2x − 3, find y when x = 7.</li>
            <li>If y = 3x + 4, find x when y = 19.</li>
            <li>Find the rule for x: 1, 2, 3 and y: 7, 11, 15.</li>
          </ol>
        }
        answer={
          <ol className="list-decimal space-y-2 pl-5">
            <li>y = 2 × 7 − 3 = {c1}.</li>
            <li>3x + 4 = 19, 3x = {c2.rhs}, x = {c2.x}.</li>
            <li>y goes up {c3.m} each time: {ruleText(c3.m, c3.c)} (check x = 3: 4 × 3 + 3 = 15).</li>
          </ol>
        }
      />,
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'If y = x + 4, what is y when x = 3?',
    options: ['7', '1', '12', '8'],
    answer: '7',
    explanation: 'Substitute x = 3: y = 3 + 4.',
  },
  {
    prompt: 'Which rule matches x: 1, 2, 3 and y: 2, 4, 6?',
    options: ['y = 2x', 'y = x + 2', 'y = x²', 'y = 2x + 2'],
    answer: 'y = 2x',
    explanation: 'Each y-value is twice x.',
  },
  {
    prompt: 'If the input increases by 1 and output increases by 5, the relationship is...',
    options: ['linear with gradient 5', 'constant output', 'inverse only', 'random'],
    answer: 'linear with gradient 5',
    explanation: 'A constant first difference indicates a linear rule.',
  },
  {
    prompt: 'For y = 3x - 2, what is y when x = 5?',
    options: ['13', '15', '17', '8'],
    answer: '13',
    explanation: '3(5) - 2 = 15 - 2 = 13.',
  },
  {
    prompt: 'Which value of x gives y = 11 for y = x + 6?',
    options: ['5', '17', '6', '11'],
    answer: '5',
    explanation: 'Solve x + 6 = 11, so x = 5.',
  },
  {
    prompt: 'What is the output if input is 0 in y = 4x + 1?',
    options: ['1', '0', '4', '5'],
    answer: '1',
    explanation: 'Substitute the input 0: y = 4(0) + 1 = 0 + 1 = 1.',
  },
  {
    prompt: 'Which table shows a constant relationship?',
    options: ['x: 1, 2, 3; y: 5, 5, 5', 'x: 1, 2, 3; y: 2, 4, 6', 'x: 1, 2, 3; y: 1, 4, 9', 'x: 1, 2, 3; y: 3, 7, 12'],
    answer: 'x: 1, 2, 3; y: 5, 5, 5',
    explanation: 'The output stays the same for all inputs.',
  },
  {
    prompt: 'If y = 2x + 1, what is x when y = 9?',
    options: ['4', '5', '3', '8'],
    answer: '4',
    explanation: '2x + 1 = 9 gives 2x = 8, so x = 4.',
  },
];

const FunctionsAndRelationships = () => (
  <CapsSubjectTopic
    title="Functions and Relationships"
    subtitle="Rules, tables, and interpreting variable relationships"
    learnSteps={learnSteps}
    task="gr8-functions-and-relationships-t4"
    bank={bank}
    apiPath="/api/caps/math"
  />
);

export default FunctionsAndRelationships;
