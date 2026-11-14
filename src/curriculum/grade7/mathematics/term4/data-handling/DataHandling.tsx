import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';

const learnSteps: LearnStep[] = [
  {
    title: 'Interpret and summarise data',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Data handling includes collecting, organising, representing, and interpreting information from tables and
          graphs to make conclusions.
        </p>
      </div>
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'Find the mode: 2, 3, 3, 4, 5.',
    options: ['3', '2', '4', '5'],
    answer: '3',
    explanation: 'The mode is the value that appears most often.',
  },
  {
    prompt: 'Find the median of 4, 1, 9, 2, 7.',
    options: ['4', '2', '7', '9'],
    answer: '4',
    explanation: 'Order values: 1, 2, 4, 7, 9. The middle value is 4.',
  },
  {
    prompt: 'Find the range of 12, 8, 15, 10.',
    options: ['7', '5', '23', '3'],
    answer: '7',
    explanation: 'Range = largest − smallest = 15 − 8 = 7.',
  },
  {
    prompt: 'Which graph is best for comparing categories?',
    options: ['Bar graph', 'Line graph', 'Scatter plot', 'Number line'],
    answer: 'Bar graph',
    explanation: 'Bar graphs compare different categories clearly.',
  },
  {
    prompt: 'A pie chart sector of 90° represents what fraction of the whole?',
    options: ['1/4', '1/2', '1/3', '1/8'],
    answer: '1/4',
    explanation: '90° out of 360° is 90/360 = 1/4.',
  },
  {
    prompt: 'In a survey of 40 learners, 10 chose soccer. What percentage is that?',
    options: ['25%', '10%', '40%', '50%'],
    answer: '25%',
    explanation: '10/40 = 1/4 = 25%.',
  },
  {
    prompt: 'Find the mean of 6, 8, and 10.',
    options: ['8', '7', '6', '9'],
    answer: '8',
    explanation: 'Mean = (6 + 8 + 10) ÷ 3 = 24 ÷ 3 = 8.',
  },
  {
    prompt: 'A bar graph scale increases by 5 each interval. A bar reaches 4 intervals. The value is...',
    options: ['20', '9', '15', '25'],
    answer: '20',
    explanation: '4 intervals × 5 each = 20.',
  },
];

const DataHandling = () => (
  <CapsSubjectTopic
    title="Data Handling"
    subtitle="Collecting, representing, and interpreting data"
    learnSteps={learnSteps}
    task="gr7-data-handling-t4"
    bank={bank}
    apiPath="/api/caps/math"
  />
);

export default DataHandling;
