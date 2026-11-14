import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';

const learnSteps: LearnStep[] = [
  {
    title: 'Find and explain pattern rules',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Patterns and relationships connect tables, rules, and sequences. Learners describe how terms grow, find
          missing values, and represent the same relationship in different forms.
        </p>
      </div>
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
