import CapsSubjectTopic from '../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../components/CapsSubjectTopic';
import { ChainSteps, JumpLine } from '../../../../components/diagrams/maths/PatternDiagrams';

const learnSteps: LearnStep[] = [
  {
    title: 'What is a Number Pattern?',
    content: (
      <div className="space-y-6 text-center">
        <p className="text-lg text-slate-600">A number pattern is a list of numbers that follow a <strong>rule</strong>.</p>
        <JumpLine start={2} rule={{ op: '+', n: 2 }} count={4} />
        <p className="text-slate-500">Can you guess the rule? It's <strong>Add 2</strong>!</p>
      </div>
    ),
  },
  {
    title: 'Finding the Rule',
    content: (
      <div className="space-y-6 text-center">
        <p className="text-lg text-slate-600">To find the rule, look at how to get from one number to the next.</p>
        <JumpLine start={5} rule={{ op: '+', n: 5 }} count={3} />
        <p className="text-slate-500">Sometimes you add, subtract, or multiply. This rule is multiply by 3:</p>
        <ChainSteps start={2} rule={{ op: '×', n: 3 }} count={4} />
      </div>
    ),
  },
];

export const bank: CapsItem[] = [
  {
    prompt: 'What is the rule for 2, 4, 6, 8, ...?',
    options: ['Add 2', 'Multiply by 2', 'Add 4', 'Subtract 2'],
    answer: 'Add 2',
    explanation: 'Each term increases by 2: 2 + 2 = 4, 4 + 2 = 6, and so on.',
  },
  {
    prompt: 'What is the next number in 5, 10, 15, 20, ...?',
    options: ['22', '24', '25', '30'],
    answer: '25',
    explanation: 'The rule is add 5 each time. 20 + 5 = 25.',
  },
  {
    prompt: 'What is the missing number in 3, 6, __, 12, 15?',
    options: ['7', '8', '9', '10'],
    answer: '9',
    explanation: 'The rule is add 3. 6 + 3 = 9, and 9 + 3 = 12. The missing number is 9.',
  },
  {
    prompt: 'What is the rule for 2, 6, 18, 54, ...?',
    options: ['Add 4', 'Multiply by 2', 'Multiply by 3', 'Add 12'],
    answer: 'Multiply by 3',
    explanation: '2 × 3 = 6, 6 × 3 = 18, 18 × 3 = 54. The rule is multiply by 3.',
  },
  {
    prompt: 'What are the next two numbers in 1, 4, 9, 16, ...?',
    options: ['20, 24', '23, 30', '25, 36', '25, 34'],
    answer: '25, 36',
    explanation: 'These are square numbers: 1², 2², 3², 4², so next are 5² = 25 and 6² = 36.',
  },
  {
    prompt: 'In the pattern 100, 92, 84, 76, ..., what is the rule?',
    options: ['Subtract 6', 'Subtract 7', 'Subtract 8', 'Subtract 9'],
    answer: 'Subtract 8',
    explanation: '100 − 92 = 8, 92 − 84 = 8, 84 − 76 = 8. The rule is subtract 8 each time.',
  },
];

const NumberPatterns = () => (
  <CapsSubjectTopic
    title="Number Patterns"
    subtitle="Discover the rules behind number sequences"
    learnSteps={learnSteps}
    task="gr6-number-patterns-t1"
    bank={bank}
    apiPath="/api/caps/grade6"
  />
);

export default NumberPatterns;
