import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';

const learnSteps: LearnStep[] = [
  {
    title: 'Recognise and extend numeric and geometric patterns',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Patterns can be described using words, tables, and formulas. Learners find missing terms, extend sequences,
          and identify how patterns grow.
        </p>
      </div>
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
