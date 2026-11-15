import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { FlowRows } from '../../../../../components/diagrams/maths/PatternDiagrams';
import { FlowBack, FunctionTable } from '../../../../../components/diagrams/maths/Grade7Functions';
import { differences, evalLinear, linearRule, ruleFormula, runBackwards } from '../../../../../components/diagrams/maths/grade7Helpers2';
import { applyRules, type Rule as FlowRule } from '../../../../../components/diagrams/maths/mathsHelpers';

// Every number in the slides below comes from tested helpers (grade7Helpers2.test.ts, lessons2.test.ts).
const flow: [FlowRule, FlowRule] = [{ op: '×', n: 2 }, { op: '+', n: 3 }];
const flowMid = applyRules([flow[0]], 6);
const flowOut = applyRules(flow, 6);
const wrongOrder = (6 + 3) * 2;
const sub = { y1: evalLinear(2, 1, 4), y2: evalLinear(1, -2, 9) };
const xs = [1, 2, 3];
const ys = [4, 7, 10];
const found = linearRule(xs, ys) ?? { m: 0, c: 0 };
const step = differences(ys)[0];
const back = runBackwards(flow, flowOut);
const check = {
  a: applyRules([{ op: '×', n: 3 }, { op: '−', n: 4 }], 5),
  rule: linearRule([1, 2, 3], [7, 9, 11]) ?? { m: 0, c: 0 },
  back: runBackwards([{ op: '×', n: 4 }, { op: '+', n: 1 }], 29),
};
const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: 'Flow diagrams: input, rule, output',
    content: slide(
      <>
        <Rule>A flow diagram takes an input, does each step of the rule in order, and gives one output.</Rule>
        <FlowRows rules={flow} inputs={[1, 4, 6]} unknownRow={2} />
        <Worked
          title="Rule: × 2, then + 3. Input 6."
          steps={[
            <>First step: 6 × 2 = {flowMid}.</>,
            <>Second step: {flowMid} + 3 = <strong>{flowOut}</strong>.</>,
          ]}
        />
        <Mistake>Doing the steps in the wrong order. 6 + 3 = 9 and then 9 × 2 = {wrongOrder} is not the output. Follow the arrows: × 2 comes first.</Mistake>
      </>,
    ),
  },
  {
    title: 'Rules as formulas: substitute x',
    content: slide(
      <>
        <Rule>A rule such as y = 2x + 1 is a flow diagram written as a formula. 2x means 2 × x. Replace x with the input and work out y. Each input gives exactly one output.</Rule>
        <FunctionTable xs={[1, 2, 3, 4]} ys={[1, 2, 3, 4].map((x) => evalLinear(2, 1, x))} rule={ruleFormula(2, 1)} />
        <Worked
          title="y = 2x + 1 when x = 4, and y = x − 2 when x = 9"
          steps={[
            <>2 × 4 = 8, then 8 + 1 = <strong>{sub.y1}</strong>.</>,
            <>9 − 2 = <strong>{sub.y2}</strong>.</>,
          ]}
        />
        <Mistake>Reading 2x as the digits 2 and 4, so 24 + 1 = 25. The 2 and the x are multiplied: 2 × 4 = 8.</Mistake>
      </>,
    ),
  },
  {
    title: 'Finding the rule from a table',
    content: slide(
      <>
        <Rule>When x goes up by 1, see how much y goes up. That is the number x is multiplied by. Then find what to add, and test every pair.</Rule>
        <FunctionTable xs={xs} ys={ys} rule={ruleFormula(found.m, found.c)} />
        <Worked
          title="x: 1, 2, 3 and y: 4, 7, 10"
          steps={[
            <>y goes up by {step} each time, so start with {found.m}x.</>,
            <>For x = 1: 3 × 1 = 3, but y = 4, so add {found.c}.</>,
            <>Test x = 3: 3 × 3 + 1 = {evalLinear(found.m, found.c, 3)}. ✓ The rule is <strong>{ruleFormula(found.m, found.c)}</strong>.</>,
          ]}
        />
        <Mistake>Checking only the first pair. y = x + 3 gives 4 for x = 1, but 5 for x = 2, not 7. A rule must work for every pair.</Mistake>
      </>,
    ),
  },
  {
    title: 'Working backwards with inverse operations',
    content: slide(
      <>
        <Rule>To find the input from the output, undo each step with its inverse: − undoes +, ÷ undoes ×. Undo the last step first.</Rule>
        <FlowBack rules={flow} input={6} />
        <Worked
          title="Rule: × 2, then + 3. The output is 15. What was the input?"
          steps={[
            <>Undo + 3: {flowOut} − 3 = {back[0].value}.</>,
            <>Undo × 2: {back[0].value} ÷ 2 = <strong>{back[1].value}</strong>.</>,
            <>If y = 4x and y = 20, undo × 4: 20 ÷ 4 = <strong>{20 / 4}</strong>.</>,
          ]}
        />
        <Mistake>Undoing in the same order as the rule: 15 ÷ 2 first does not give a whole number. Start from the end.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        question={
          <ol className="list-decimal space-y-2 pl-5">
            <li>Rule: × 3, then − 4. What is the output for input 5?</li>
            <li>Find the rule: x: 1, 2, 3 and y: 7, 9, 11.</li>
            <li>Rule: × 4, then + 1. The output is 29. What was the input?</li>
            <li>What is the inverse of “subtract 6”?</li>
          </ol>
        }
        answer={
          <ol className="list-decimal space-y-2 pl-5">
            <li>5 × 3 = 15, then 15 − 4 = {check.a}.</li>
            <li>y goes up by {check.rule.m}, and 2 × 1 + 5 = 7, so {ruleFormula(check.rule.m, check.rule.c)}.</li>
            <li>29 − 1 = {check.back[0].value}, then {check.back[0].value} ÷ 4 = {check.back[1].value}.</li>
            <li>Add 6.</li>
          </ol>
        }
      />,
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'If the rule is y = 2x + 1, what is y when x = 4?',
    options: ['9', '8', '7', '10'],
    answer: '9',
    explanation: 'Substitute x = 4: y = 2(4) + 1 = 9.',
  },
  {
    prompt: 'For the rule “add 5”, what is the inverse operation?',
    options: ['subtract 5', 'multiply by 5', 'add 10', 'divide by 5'],
    answer: 'subtract 5',
    explanation: 'Inverse operations undo each other.',
  },
  {
    prompt: 'x: 1, 2, 3 and y: 4, 7, 10 follow which rule?',
    options: ['y = 3x + 1', 'y = x + 3', 'y = 2x + 2', 'y = x² + 3'],
    answer: 'y = 3x + 1',
    explanation: 'Each output is three times x plus 1.',
  },
  {
    prompt: 'If y = x − 2, what is y when x = 9?',
    options: ['7', '11', '18', '−7'],
    answer: '7',
    explanation: 'Substitute x = 9: y = 9 − 2 = 7.',
  },
  {
    prompt: 'If y = 4x and y = 20, what is x?',
    options: ['5', '4', '16', '80'],
    answer: '5',
    explanation: 'Divide both sides by 4: x = 20 ÷ 4 = 5.',
  },
  {
    prompt: 'A flow diagram says “×2, then +3”. What is the output for input 6?',
    options: ['15', '12', '9', '18'],
    answer: '15',
    explanation: '6 × 2 = 12, then 12 + 3 = 15.',
  },
  {
    prompt: 'In a function table, each input should have...',
    options: ['one output', 'two outputs', 'no output', 'many unrelated outputs'],
    answer: 'one output',
    explanation: 'A function links each input to exactly one output.',
  },
  {
    prompt: 'If x increases by 1 and y increases by 2 each time, which rule can fit?',
    options: ['y = 2x + c', 'y = x²', 'y = x ÷ 2', 'y = 10 − x'],
    answer: 'y = 2x + c',
    explanation: 'A constant increase of 2 in y suggests a linear rule with slope 2.',
  },
];

const FunctionsAndRelationships = () => (
  <CapsSubjectTopic
    title="Functions and Relationships"
    subtitle="Input-output rules, tables, and inverse thinking"
    learnSteps={learnSteps}
    task="gr7-functions-and-relationships-t2"
    bank={bank}
    apiPath="/api/caps/math"
  />
);

export default FunctionsAndRelationships;
