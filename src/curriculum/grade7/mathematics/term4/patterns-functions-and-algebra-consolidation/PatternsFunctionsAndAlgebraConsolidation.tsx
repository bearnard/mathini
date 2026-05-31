import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';

const learnSteps: LearnStep[] = [
  {
    title: 'Consolidate pattern, function, and algebra skills',
    image: {
      src: '/curriculum/grade7/math/term4/patterns-functions-and-algebra-consolidation/diagram.webp',
      alt: 'Grade 7 learners consolidating pattern rules, function tables, and algebra equations',
    },
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          This consolidation topic integrates sequences, function rules, expressions, and equations. Learners connect
          table patterns with symbolic reasoning.
        </p>
      </div>
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
    options: ['12', '7', '1', '0.75'],
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
