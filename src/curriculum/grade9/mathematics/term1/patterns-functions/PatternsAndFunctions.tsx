import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { MathematicsItem, LearnStep } from '../../_shared/types';

const learnSteps: LearnStep[] = [
  {
    title: 'Finding Pattern Rules',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Identify linear and geometric patterns; develop general rules using tables and sequences.
        </p>
      </div>
    ),
  },
  {
    title: 'Input-Output Relationships',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Understand functions as relationships between inputs and outputs; justify pattern growth logically.
        </p>
      </div>
    ),
  },
  {
    title: 'Applying Function Thinking',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Use patterns to predict missing terms and solve contextual problems using function notation.
        </p>
      </div>
    ),
  },
];

const bank: MathematicsItem[] = [
  {
    prompt: 'What is the next number in the sequence: 2, 5, 8, 11, ...',
    options: ['13', '14', '15', '16'],
    answer: '14',
    explanation: 'The pattern increases by 3 each time: 11 + 3 = 14.',
  },
  {
    prompt: 'The rule for a pattern is: y = 2x + 1. What is y when x = 3?',
    options: ['6', '7', '8', '9'],
    answer: '7',
    explanation: 'y = 2(3) + 1 = 6 + 1 = 7.',
  },
  {
    prompt: 'In a geometric pattern 1, 2, 4, 8, ..., what is the constant factor?',
    options: ['1', '2', '4', '8'],
    answer: '2',
    explanation: 'Each term is multiplied by 2 to get the next term.',
  },
  {
    prompt: 'What is the 5th term of the sequence defined by y = n², where n = 1, 2, 3, ...?',
    options: ['10', '20', '25', '30'],
    answer: '25',
    explanation: 'When n = 5, y = 5² = 25.',
  },
  {
    prompt: 'Identify the pattern in the table: x=1, y=3; x=2, y=6; x=3, y=9',
    options: ['y = x + 2', 'y = 3x', 'y = 2x + 1', 'y = x²'],
    answer: 'y = 3x',
    explanation: 'Each y-value is 3 times the corresponding x-value.',
  },
  {
    prompt: 'A pattern starts 3, 7, 11, 15. What is the 8th term?',
    options: ['30', '31', '32', '33'],
    answer: '31',
    explanation: 'The pattern increases by 4; the 8th term is 3 + 7×4 = 31.',
  },
  {
    prompt: 'Which relationship is linear?',
    options: ['y = x²', 'y = 2ˣ', 'y = 3x + 2', 'y = 1/x'],
    answer: 'y = 3x + 2',
    explanation: 'A linear relationship has the form y = mx + b, which is y = 3x + 2.',
  },
  {
    prompt: 'If the rule is y = x + 4, what value of x gives y = 10?',
    options: ['6', '5', '4', '14'],
    answer: '6',
    explanation: 'Solving x + 4 = 10 gives x = 6.',
  },
];

const PatternsAndFunctions = () => (
  <CapsSubjectTopic
    title="Numeric and Geometric Patterns; Functions and Relationships"
    subtitle="Pattern rules, tables, and input-output mapping"
    learnSteps={learnSteps}
    task="gr9-patterns-functions-t1"
    bank={bank}
    apiPath="/api/caps/math"
  />
);

export default PatternsAndFunctions;
