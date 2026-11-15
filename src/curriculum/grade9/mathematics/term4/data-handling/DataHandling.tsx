import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { MathematicsItem, LearnStep } from '../../_shared/types';

const learnSteps: LearnStep[] = [
  {
    title: 'Data Collection and Representation',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Collect data and represent it using appropriate graphs, tables, and charts.
        </p>
      </div>
    ),
  },
  {
    title: 'Summary Measures',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Calculate mean, median, mode, and range; interpret what these measures reveal about data.
        </p>
      </div>
    ),
  },
  {
    title: 'Critical Data Analysis',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Compare data sets, identify bias, discuss spread, and critique representation choices.
        </p>
      </div>
    ),
  },
];

const bank: MathematicsItem[] = [
  {
    prompt: 'What is the median of the data set: 3, 5, 7, 9, 11?',
    options: ['5', '7', '9', '6'],
    answer: '7',
    explanation: 'The median is the middle value when data is ordered: 3, 5, 7, 9, 11.',
  },
  {
    prompt: 'Find the mean of: 4, 8, 12, 16',
    options: ['10', '12', '14', '16'],
    answer: '10',
    explanation: 'Mean = (4 + 8 + 12 + 16) ÷ 4 = 40 ÷ 4 = 10.',
  },
  {
    prompt: 'What is the mode of: 2, 5, 5, 7, 9?',
    options: ['2', '5', '7', 'No mode'],
    answer: '5',
    explanation: 'The mode is the value appearing most frequently, which is 5 (appears twice).',
  },
  {
    prompt: 'The range of the data set: 3, 8, 12, 5, 20 is:',
    options: ['3', '12', '17', '20'],
    answer: '17',
    explanation: 'Range = highest - lowest = 20 - 3 = 17.',
  },
  {
    prompt: 'Which measure is best for describing a typical value when data is normally distributed?',
    options: ['Mode', 'Range', 'Mean', 'Spread'],
    answer: 'Mean',
    explanation: 'The mean best represents a typical value in a normally distributed data set.',
  },
  {
    prompt: 'If a data set has values 1, 2, 3, 4, 100, which is most affected by the outlier 100?',
    options: ['Median', 'Mode', 'Mean', 'Minimum value'],
    answer: 'Mean',
    explanation: 'The mean is heavily influenced by extreme values like 100.',
  },
  {
    prompt: 'A frequency table shows: Value 1 (5 times), Value 2 (3 times), Value 3 (2 times). What is the total frequency?',
    options: ['3', '6', '10', '15'],
    answer: '10',
    explanation: 'Total frequency = 5 + 3 + 2 = 10.',
  },
  {
    prompt: 'Which graph type is most suitable for comparing parts of a whole?',
    options: ['Bar graph', 'Pie chart', 'Line graph', 'Scatter plot'],
    answer: 'Pie chart',
    explanation: 'Pie charts effectively show proportional parts of a whole.',
  },
];

const DataHandling = () => (
  <CapsSubjectTopic
    title="Data Handling"
    subtitle="Collecting, representing, analysing and reporting data"
    learnSteps={learnSteps}
    task="gr9-data-handling-t4"
    bank={bank}
    apiPath="/api/caps/math"
  />
);

export default DataHandling;
