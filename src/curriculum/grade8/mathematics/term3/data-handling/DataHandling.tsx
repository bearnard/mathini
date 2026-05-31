import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';

const learnSteps: LearnStep[] = [
  {
    title: 'Represent and interpret data critically',
    image: {
      src: '/curriculum/grade8/math/term3/data-handling/diagram.webp',
      alt: 'Grade 8 learners drawing and interpreting data displays',
    },
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Data handling includes collecting, summarising, displaying, and interpreting information. Learners compare
          graph choices and use measures like mean, median, mode, and range.
        </p>
      </div>
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'Find the mean of 2, 4, 6, 8.',
    options: ['5', '4', '6', '8'],
    answer: '5',
    explanation: '(2 + 4 + 6 + 8) ÷ 4 = 20 ÷ 4 = 5.',
  },
  {
    prompt: 'Find the median of 3, 5, 9, 11.',
    options: ['7', '8', '5', '9'],
    answer: '7',
    explanation: 'Middle two are 5 and 9, so median is (5 + 9) ÷ 2.',
  },
  {
    prompt: 'What is the mode of 1, 2, 2, 3?',
    options: ['2', '1', '3', 'None'],
    answer: '2',
    explanation: '2 appears most often.',
  },
  {
    prompt: 'Which graph is best for comparing categories?',
    options: ['Bar graph', 'Histogram', 'Line graph', 'Scatter plot'],
    answer: 'Bar graph',
    explanation: 'Bar graphs compare separate categories clearly.',
  },
  {
    prompt: 'A histogram is mainly used for...',
    options: ['continuous grouped data', 'alphabetical data', 'single values only', 'map locations'],
    answer: 'continuous grouped data',
    explanation: 'Histograms display frequencies for class intervals.',
  },
  {
    prompt: 'Find the range of 9, 12, 14, 20.',
    options: ['11', '29', '20', '9'],
    answer: '11',
    explanation: 'Range = highest - lowest = 20 - 9.',
  },
  {
    prompt: 'If 6 learners out of 30 prefer option A, what is the relative frequency?',
    options: ['20%', '6%', '24%', '50%'],
    answer: '20%',
    explanation: '6/30 = 0.2 = 20%.',
  },
  {
    prompt: 'A stem-and-leaf plot is useful because it...',
    options: ['keeps original data values visible', 'always shows percentages', 'works only with categories', 'cannot show spread'],
    answer: 'keeps original data values visible',
    explanation: 'You can still read each original value from the plot.',
  },
];

const DataHandling = () => (
  <CapsSubjectTopic
    title="Data Handling"
    subtitle="Data displays, summaries, and interpretation of information"
    learnSteps={learnSteps}
    task="gr8-data-handling-t3"
    bank={bank}
    apiPath="/api/caps/math"
  />
);

export default DataHandling;
