import CapsSubjectTopic from '../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../components/CapsSubjectTopic';
import { Check, Mistake, Rule as RuleBox, Worked } from '../../../../components/subjects/lesson/LessonBlocks';
import { FlowRows } from '../../../../components/diagrams/maths/PatternDiagrams';
import { inputFor, rulesFitting, twoStep } from '../../../../components/diagrams/maths/grade6FlowHelpers';
import { applyRule } from '../../../../components/diagrams/maths/mathsHelpers';

// Every number in the slides below comes from tested helpers (grade6FlowHelpers.test.ts, flowDiagramsLesson.test.ts).
const times4 = { op: '×' as const, n: 4 };
const plus9 = { op: '+' as const, n: 9 };
const div5 = { op: '÷' as const, n: 5 };
const plus7 = { op: '+' as const, n: 7 };
const out1 = applyRule(times4, 6);
const wrong1 = applyRule({ op: '+', n: 4 }, 6);
const out2 = applyRule(div5, 30);
const out3 = applyRule(plus7, 4);
const back = { out: 17, input: inputFor(plus9, 17), again: 17 + 9 };
const pairs: [number, number][] = [[3, 12], [5, 20], [7, 28]];
const first = rulesFitting([pairs[0]]).map((r) => `${r.op} ${r.n}`);
const all = rulesFitting(pairs);
const two = twoStep({ op: '×', n: 2 }, { op: '+', n: 1 }, 5);
const check = {
  a: applyRule({ op: '×', n: 6 }, 7),
  b: inputFor({ op: '+', n: 8 }, 20),
  c: rulesFitting([[2, 10], [3, 15]])[0],
  d: twoStep({ op: '×', n: 3 }, { op: '+', n: 2 }, 4).right,
};
const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: 'Input, rule, output',
    content: slide(
      <>
        <RuleBox>A flow diagram sends an input number through a rule. What comes out is the output.</RuleBox>
        <FlowRows rules={[times4]} inputs={[6]} />
        <Worked
          title="Rule × 4, input 6"
          steps={[<>Start with the input: 6.</>, <>Do the rule: 6 × 4 = <strong>{out1}</strong>.</>, <>The output is {out1}.</>]}
        />
        <Mistake>Using a different rule from the one in the machine. The rule is × 4, so it is not 6 + 4 = {wrong1}.</Mistake>
      </>,
    ),
  },
  {
    title: 'Finding the output: divide and add',
    content: slide(
      <>
        <RuleBox>Do exactly what the rule says to the input. The input is the number the rule works on.</RuleBox>
        <FlowRows rules={[div5]} inputs={[30]} />
        <Worked
          steps={[
            <>Rule ÷ 5, input 30: 30 ÷ 5 = <strong>{out2}</strong>.</>,
            <>Rule + 7, input 4: 4 + 7 = <strong>{out3}</strong>.</>,
          ]}
        />
        <Mistake>Turning a division around. 30 ÷ 5 means 30 shared into groups of 5. It is not 5 ÷ 30.</Mistake>
      </>,
    ),
  },
  {
    title: 'Work backwards to find the input',
    content: slide(
      <>
        <RuleBox>To find the input, start at the output and do the opposite of the rule. The opposite of + is −, and the opposite of × is ÷.</RuleBox>
        <FlowRows rules={[plus9]} inputs={[back.input]} />
        <Worked
          title="Rule + 9, output 17, input = ?"
          steps={[
            <>The rule adds 9, so undo it by taking 9 away.</>,
            <>17 − 9 = <strong>{back.input}</strong>.</>,
            <>Check: {back.input} + 9 = {back.out}.</>,
          ]}
        />
        <Mistake>Adding 9 again. 17 + 9 = {back.again} is not the input: going backwards uses the opposite rule.</Mistake>
      </>,
    ),
  },
  {
    title: 'Find the rule from the pairs',
    content: slide(
      <>
        <RuleBox>Try a rule on the first pair, then check it on every other pair. Only a rule that works for all of them is the rule.</RuleBox>
        <FlowRows rules={[times4]} inputs={pairs.map((p) => p[0])} />
        <Worked
          title={pairs.map((p) => `${p[0]} → ${p[1]}`).join(', ')}
          steps={[
            <>3 → 12 fits {first.join(' and ')}.</>,
            <>Check 5: 5 + 9 = {applyRule(plus9, 5)}, which is not 20. But 5 × 4 = 20.</>,
            <>Check 7: 7 × 4 = {applyRule(times4, 7)}. The rule is <strong>{all[0].op} {all[0].n}</strong>.</>,
          ]}
        />
        <Mistake>Checking only the first pair. 3 → 12 fits two rules, so you need the other pairs to choose.</Mistake>
      </>,
    ),
  },
  {
    title: 'Two-step rules',
    content: slide(
      <>
        <RuleBox>A two-step rule is done in order, first step then second step.</RuleBox>
        <FlowRows rules={[{ op: '×', n: 2 }, { op: '+', n: 1 }]} inputs={[5]} />
        <Worked
          title="× 2, then + 1, input 5"
          steps={[<>Step 1: 5 × 2 = 10.</>, <>Step 2: 10 + 1 = <strong>{two.right}</strong>.</>]}
        />
        <Mistake>Swapping the steps. (5 + 1) × 2 = {two.swapped}, which is not the output of × 2 then + 1.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        question={
          <ol className="list-decimal space-y-2 pl-5">
            <li>Rule × 6, input 7. What is the output?</li>
            <li>Rule + 8, output 20. What is the input?</li>
            <li>The pairs are 2 → 10 and 3 → 15. What is the rule?</li>
            <li>Rule × 3, then + 2, input 4. What is the output?</li>
          </ol>
        }
        answer={
          <ol className="list-decimal space-y-2 pl-5">
            <li>7 × 6 = {check.a}.</li>
            <li>20 − 8 = {check.b}.</li>
            <li>2 × 5 = 10 and 3 × 5 = 15, so the rule is {check.c.op} {check.c.n}.</li>
            <li>4 × 3 = 12, then 12 + 2 = {check.d}.</li>
          </ol>
        }
      />,
    ),
  },
];

export const bank: CapsItem[] = [
  {
    prompt: 'If the rule is × 4 and the input is 6, what is the output?',
    options: ['10', '20', '24', '28'],
    answer: '24',
    explanation: 'The rule is × 4, so multiply the input 6 by 4: 6 × 4 = 24.',
  },
  {
    prompt: 'If the rule is + 9 and the output is 17, what is the input?',
    options: ['6', '7', '8', '26'],
    answer: '8',
    explanation: 'Work backwards: 17 − 9 = 8. The input is 8.',
  },
  {
    prompt: 'A flow diagram has rule ÷ 5. Input is 30. Output is...',
    options: ['5', '6', '25', '150'],
    answer: '6',
    explanation: 'The rule is ÷ 5, so divide the input 30 by 5: 30 ÷ 5 = 6.',
  },
  {
    prompt: 'If input → rule → output is 4 → + 7 → ?, what is the output?',
    options: ['3', '9', '11', '28'],
    answer: '11',
    explanation: 'The rule is + 7, so add 7 to the input 4: 4 + 7 = 11.',
  },
  {
    prompt: 'What rule changes 3 → 12, 5 → 20, 7 → 28?',
    options: ['+ 9', '× 4', '+ 7', '× 3'],
    answer: '× 4',
    explanation: '3 × 4 = 12, 5 × 4 = 20, 7 × 4 = 28. The rule is multiply by 4.',
  },
  {
    prompt: 'A two-step rule is × 2, then + 1. Input = 5. Output = ?',
    options: ['8', '10', '11', '12'],
    answer: '11',
    explanation: 'Step 1: 5 × 2 = 10. Step 2: 10 + 1 = 11.',
  },
];

const FlowDiagrams = () => (
  <CapsSubjectTopic
    title="Flow Diagrams"
    subtitle="Understand input and output rules"
    learnSteps={learnSteps}
    task="gr6-flow-diagrams-t1"
    bank={bank}
    apiPath="/api/caps/grade6"
  />
);

export default FlowDiagrams;
