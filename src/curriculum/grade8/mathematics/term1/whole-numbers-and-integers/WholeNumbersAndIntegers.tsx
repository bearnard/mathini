import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';

const learnSteps: LearnStep[] = [
  {
    title: 'Work fluently with whole numbers and integers',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Whole numbers and integers support calculations with gains, losses, temperature, and directed values.
          Learners use operation rules, place value, and order of operations to solve problems confidently.
        </p>
      </div>
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'What is -8 + 13?',
    options: ['5', '-5', '21', '-21'],
    answer: '5',
    explanation: 'Adding 13 to -8 moves 5 units above zero.',
  },
  {
    prompt: 'Which integer is the smallest?',
    options: ['-12', '-2', '0', '7'],
    answer: '-12',
    explanation: 'On a number line, -12 is farthest to the left.',
  },
  {
    prompt: 'Evaluate 18 - (6 - 2).',
    options: ['14', '10', '16', '22'],
    answer: '14',
    explanation: 'First calculate inside brackets: 6 - 2 = 4, then 18 - 4 = 14.',
  },
  {
    prompt: 'What is the absolute value of -17?',
    options: ['17', '-17', '0', '34'],
    answer: '17',
    explanation: 'Absolute value is distance from zero, so it is always non-negative.',
  },
  {
    prompt: 'A diver is at -9 m and rises 4 m. What is the new position?',
    options: ['-5 m', '-13 m', '5 m', '13 m'],
    answer: '-5 m',
    explanation: 'Start at -9 and add 4: -9 + 4 = -5.',
  },
  {
    prompt: 'What is (-4) × 7?',
    options: ['-28', '28', '-11', '11'],
    answer: '-28',
    explanation: 'A negative times a positive gives a negative result.',
  },
  {
    prompt: 'What is the additive inverse of 15?',
    options: ['-15', '15', '0', '1/15'],
    answer: '-15',
    explanation: 'A number and its additive inverse add to zero.',
  },
  {
    prompt: 'Which expression equals -6?',
    options: ['2 - 8', '-2 - 8', '8 - 2', '-2 + 8'],
    answer: '2 - 8',
    explanation: 'Start at 2 and subtract 8: 2 - 8 = -6, so this expression equals -6.',
  },
];

const WholeNumbersAndIntegers = () => (
  <CapsSubjectTopic
    title="Whole Numbers and Integers"
    subtitle="Operations, order, and contextual reasoning with positive and negative numbers"
    learnSteps={learnSteps}
    task="gr8-whole-numbers-and-integers-t1"
    bank={bank}
    apiPath="/api/caps/math"
  />
);

export default WholeNumbersAndIntegers;
