import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';

const learnSteps: LearnStep[] = [
  {
    title: 'Analyse tables and derive function rules',
    image: {
      src: '/curriculum/grade8/math/term4/functions-and-relationships/diagram.webp',
      alt: 'Grade 8 learners deriving rules from input-output tables',
    },
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Functions describe relationships between variables. Learners move between tables, verbal rules, and symbolic
          rules to interpret and predict values.
        </p>
      </div>
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
