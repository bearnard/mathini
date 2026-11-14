import CapsSubjectTopic from '../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../components/CapsSubjectTopic';
import { FlowRows } from '../../../../components/diagrams/maths/PatternDiagrams';

const learnSteps: LearnStep[] = [
  {
    title: 'What is a Flow Diagram?',
    content: (
      <div className="space-y-6 text-center">
        <p className="text-lg text-slate-600">A flow diagram shows how numbers change when you apply a rule to them.</p>
        <FlowRows rules={[{ op: '+', n: 3 }]} inputs={[5]} />
        <p className="text-slate-500">5 goes in, add 3, and 8 comes out!</p>
      </div>
    ),
  },
  {
    title: 'The Rule Machine',
    content: (
      <div className="space-y-6 text-center">
        <p className="text-lg text-slate-600">Think of it as a machine. The rule is what the machine does to every number.</p>
        <FlowRows rules={[{ op: '×', n: 2 }]} inputs={[2, 5]} />
      </div>
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
