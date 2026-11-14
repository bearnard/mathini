import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { MathematicsItem, LearnStep } from '../../_shared/types';
import Formula from '../../../../../components/subjects/Formula';
import FunctionGraph from '../../../../../components/subjects/FunctionGraph';

const learnSteps: LearnStep[] = [
  {
    title: 'Read the Distribution First',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-slate-600">Before calculating anything, inspect the table or graph to understand the centre, spread, and shape of the data.</p>
        <div className="space-y-2">
          <Formula block>{String.raw`\text{median} = \text{middle value}`}</Formula>
          <Formula block>{String.raw`\text{IQR} = Q_3 - Q_1`}</Formula>
        </div>
        <FunctionGraph
          curves={[
            { fn: (x: number) => 100 / (1 + Math.exp(-(x - 5))), label: 'cumulative frequency (ogive)', color: '#6366f1' },
          ]}
          xRange={[0, 10]}
          yRange={[0, 100]}
        />
      </div>
    ),
  },
  {
    title: 'Calculate Mean and Standard Deviation Carefully',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-slate-600">Use the table method to keep totals organised, especially when frequencies are involved.</p>
        <div className="space-y-2">
          <Formula block>{String.raw`\bar{x} = \frac{\sum x}{n}`}</Formula>
          <Formula block>{String.raw`\sigma^2 = \frac{\sum (x_i - \bar{x})^2}{n}`}</Formula>
          <Formula block>{String.raw`\sigma = \sqrt{\sigma^2}`}</Formula>
        </div>
        <div className="rounded-xl bg-indigo-50 p-4">
          <p className="text-sm text-slate-600">A larger value of <Formula>{String.raw`\sigma`}</Formula> means the data points are more spread out from the mean.</p>
        </div>
      </div>
    ),
  },
  {
    title: 'Interpret the Statistics in Context',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-slate-600">Do not stop at the calculation. Explain what the numbers say about the real situation.</p>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-xl bg-emerald-50 p-4">
            <h4 className="font-semibold text-emerald-700">Centre</h4>
            <p className="text-sm text-slate-600">Compare mean and median to comment on typical performance.</p>
          </div>
          <div className="rounded-xl bg-cyan-50 p-4">
            <h4 className="font-semibold text-cyan-700">Spread</h4>
            <p className="text-sm text-slate-600">Use <Formula>{String.raw`\text{IQR}`}</Formula> or <Formula>{String.raw`\sigma`}</Formula> to describe consistency.</p>
          </div>
        </div>
      </div>
    ),
  },
];

const bank: MathematicsItem[] = [
  {
    prompt: 'An ogive displays:',
    options: ['Relative frequency', 'Cumulative frequency', 'Class width', 'Frequency density'],
    answer: 'Cumulative frequency',
    explanation: 'An ogive (cumulative frequency curve) plots the running total of frequencies against upper class boundaries.',
  },
  {
    prompt: 'Standard deviation measures:',
    options: ['The most common value', 'The middle value', 'Spread from the mean', 'The range of data'],
    answer: 'Spread from the mean',
    explanation: 'Standard deviation (σ) quantifies how far, on average, each data value lies from the mean.',
  },
  {
    prompt: 'A distribution has most data bunched on the left with a long tail stretching right. It is:',
    options: ['Positively skewed', 'Symmetrical', 'Negatively skewed', 'Uniform'],
    answer: 'Positively skewed',
    explanation: 'A long tail to the right indicates positive (right) skew.',
  },
  {
    prompt: 'Variance is calculated as:',
    options: ['Mean of absolute deviations', 'Mean of deviations from the mode', 'Mean of squared deviations from the mean', 'Square root of standard deviation'],
    answer: 'Mean of squared deviations from the mean',
    explanation: 'σ² = Σ(xᵢ − x̄)² / n. Squaring removes negative signs and emphasises larger deviations.',
  },
  {
    prompt: 'An outlier is a data value that:',
    options: ['Equals the mean of the data', 'Is less than the median of the data', 'Lies far from the rest of the data', 'Appears more than once in the data'],
    answer: 'Lies far from the rest of the data',
    explanation: 'Outliers are unusually high or low values that stand apart from the bulk of the data.',
  },
  {
    prompt: 'A frequency polygon is constructed by connecting:',
    options: ['The lower boundaries of histogram bars', 'The midpoints of the tops of histogram bars', 'The upper boundaries of each class', 'The cumulative frequencies'],
    answer: 'The midpoints of the tops of histogram bars',
    explanation: 'Plot a point at the midpoint of each class at the height of the frequency, then connect the points.',
  },
  {
    prompt: 'In a data set where mean > median > mode, the distribution is:',
    options: ['Negatively skewed', 'Symmetrical', 'Normal', 'Positively skewed'],
    answer: 'Positively skewed',
    explanation: 'When the mean is pulled right by high values, mean > median > mode indicates positive skew.',
  },
  {
    prompt: 'The standard deviation of the data set {2, 2, 2, 2} is:',
    options: ['2', '4', '1', '0'],
    answer: '0',
    explanation: 'All values equal the mean (2), so every deviation is 0. Standard deviation = 0.',
  },
  {
    prompt: 'In a negatively skewed distribution, the mean is:',
    options: ['Greater than the median', 'Equal to the median', 'Less than the median', 'Equal to the mode'],
    answer: 'Less than the median',
    explanation: 'Negative skew has a long left tail. The mean is pulled left by low outliers, so mean < median.',
  },
];

const Statistics = () => (
  <CapsSubjectTopic
    title="Statistics"
    subtitle="Histograms, ogives, standard deviation, skewness and outliers"
    learnSteps={learnSteps}
    task="gr11-statistics-t4"
    bank={bank}
    apiPath="/api/caps/math"
  />
);

export default Statistics;
