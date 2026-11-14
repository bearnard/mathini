import CapsSubjectTopic from '@/components/CapsSubjectTopic';
import type { MLItem, LearnStep } from '../../_shared/types';
import Formula from '@/components/subjects/Formula';
import DataChart from '@/components/subjects/DataChart';

const learnSteps: LearnStep[] = [
  { title: 'Organising data and choosing graph types', content: (<div className="space-y-4 text-center"><p className="text-lg text-slate-600">Before displaying data, you must collect and organise it. The choice of graph depends on the data type and what you want to show.</p><div className="grid gap-3 md:grid-cols-2 text-left"><div className="rounded-xl bg-blue-50 p-4"><strong className="text-blue-700">Bar graph</strong><p className="text-slate-600 text-sm">Comparing quantities in different categories. E.g. number of learners per province.</p></div><div className="rounded-xl bg-green-50 p-4"><strong className="text-green-700">Pie chart</strong><p className="text-slate-600 text-sm">Showing proportions of a whole. E.g. percentage budget spent on each category.</p></div><div className="rounded-xl bg-yellow-50 p-4"><strong className="text-yellow-700">Line graph</strong><p className="text-slate-600 text-sm">Showing change over time (trends). E.g. monthly rainfall over a year.</p></div><div className="rounded-xl bg-orange-50 p-4"><strong className="text-orange-700">Histogram</strong><p className="text-slate-600 text-sm">Showing frequency distribution of continuous data in intervals (no gaps between bars).</p></div></div><div className="rounded-xl border border-slate-200 bg-white p-4 text-left"><p className="text-sm text-slate-500 mb-3">Sample class survey data can be displayed clearly on a bar chart.</p><DataChart type="bar" xKey="category" data={[{ category: 'Taxi', learners: 14 },{ category: 'Walk', learners: 9 },{ category: 'Bus', learners: 6 },{ category: 'Lift club', learners: 5 }]} series={[{ key: 'learners', label: 'Learners', color: '#6366f1' }]} yLabel="Number of learners" height={220} /></div></div>) },
  { title: 'Measures of central tendency', content: (<div className="space-y-4 text-center"><p className="text-lg text-slate-600">The <strong>mean</strong>, <strong>median</strong> and <strong>mode</strong> are measures that describe the centre of a data set.</p><div className="bg-indigo-50 p-6 rounded-xl text-left space-y-3"><Formula block>{String.raw`\text{Mean} = \frac{\text{sum of all values}}{\text{number of values}}`}</Formula><p className="text-slate-700"><strong>Median:</strong> Middle value when data is arranged in order. If two middle values, find their mean.</p><p className="text-slate-700"><strong>Mode:</strong> The most frequently occurring value (there may be more than one).</p><p className="text-slate-700 mt-2">Data set: 3, 5, 7, 7, 9, 11</p><Formula block>{String.raw`\text{Mean} = \frac{3 + 5 + 7 + 7 + 9 + 11}{6} = 7`}</Formula><Formula block>{String.raw`\text{Median} = \frac{7 + 7}{2} = 7`}</Formula><Formula block>{String.raw`\text{Mode} = 7`}</Formula></div></div>) },
  { title: 'Range and interpreting spread', content: (<div className="space-y-4 text-center"><p className="text-lg text-slate-600">The <strong>range</strong> measures how spread out the data is.</p><div className="bg-yellow-50 p-6 rounded-xl text-left space-y-3"><Formula block>{String.raw`\text{Range} = \text{maximum value} - \text{minimum value}`}</Formula><p className="text-slate-700">Data: 12, 25, 8, 31, 19, 14</p><Formula block>{String.raw`31 - 8 = 23`}</Formula><p className="text-slate-700 mt-2">A large range indicates the data is widely spread. A small range means the values are clustered together.</p></div><p className="text-sm text-slate-500">In context: if test scores have a large range, there is a big difference between the highest and lowest performers.</p></div>) },
  { title: 'Critiquing graphs and writing conclusions', content: (<div className="space-y-4 text-center"><p className="text-lg text-slate-600">Graphs can be misleading. You must be able to identify problems and write evidence-based conclusions.</p><div className="grid gap-3 md:grid-cols-2 text-left"><div className="rounded-xl bg-red-50 p-4"><strong className="text-red-700">Common misleading features</strong><p className="text-slate-600 text-sm">Truncated y-axis (not starting at 0), unequal intervals, missing labels or titles, 3D effects that distort sizes.</p></div><div className="rounded-xl bg-green-50 p-4"><strong className="text-green-700">Writing a conclusion</strong><p className="text-slate-600 text-sm">State the trend clearly. Refer to specific values from the graph. Use the context of the question.</p></div></div><p className="text-sm text-slate-500">E.g. "Sales increased from R12 000 in January to R18 500 in March, a growth of R6 500 (54%)."</p></div>) },
];

const bank: MLItem[] = [
  {
    prompt: 'Calculate the mean of: 8, 12, 15, 9, 6, 10.',
    options: ['9', '10', '11', '12'],
    answer: '10',
    explanation: 'Sum = 8+12+15+9+6+10 = 60. Mean = 60 ÷ 6 = 10.',
  },
  {
    prompt: 'Find the median of: 3, 7, 2, 9, 5, 1, 8.',
    options: ['5', '6', '7', '4'],
    answer: '5',
    explanation: 'Arranged in order: 1, 2, 3, 5, 7, 8, 9. Middle value (4th of 7) = 5.',
  },
  {
    prompt: 'A data set is: 4, 7, 7, 9, 11, 7, 3. What is the mode?',
    options: ['4', '9', '7', '11'],
    answer: '7',
    explanation: '7 appears 3 times — more than any other value — so it is the mode.',
  },
  {
    prompt: 'The highest score in a class test is 92 and the lowest is 38. What is the range?',
    options: ['54', '65', '46', '48'],
    answer: '54',
    explanation: 'Range = 92 − 38 = 54.',
  },
  {
    prompt: 'Which type of graph is MOST suitable for showing how a company\'s monthly sales changed over a year?',
    options: ['Pie chart', 'Histogram', 'Bar graph', 'Line graph'],
    answer: 'Line graph',
    explanation: 'Line graphs are best for showing trends and changes over time.',
  },
  {
    prompt: 'A bar graph\'s y-axis starts at 900 instead of 0. What is the effect?',
    options: ['The graph becomes more accurate overall', 'Differences between bars look larger than they are', 'The graph becomes much easier to read', 'There is no effect on how the graph looks'],
    answer: 'Differences between bars look larger than they are',
    explanation: 'A truncated axis (not starting at 0) exaggerates differences and can mislead the reader.',
  },
  {
    prompt: 'A pie chart shows that 40% of a school budget is spent on salaries. If the total budget is R2 500 000, how much is spent on salaries?',
    options: ['R1 000 000', 'R250 000', 'R500 000', 'R2 000 000'],
    answer: 'R1 000 000',
    explanation: '40% × R2 500 000 = 0,40 × 2 500 000 = R1 000 000.',
  },
  {
    prompt: 'The mean of five values is 14. What is the sum of the five values?',
    options: ['70', '19', '60', '75'],
    answer: '70',
    explanation: 'Sum = mean × number of values = 14 × 5 = 70.',
  },
  {
    prompt: 'A histogram differs from a bar graph in that:',
    options: ['Histograms use categories; bar graphs use intervals', 'Histograms show continuous data with no gaps between bars', 'Histograms are always horizontal', 'They are identical'],
    answer: 'Histograms show continuous data with no gaps between bars',
    explanation: 'Histograms represent continuous data grouped in intervals — bars touch each other; bar graphs compare separate categories with gaps.',
  },
  {
    prompt: 'A data set has mean = 20, median = 15 and mode = 12. What does a mean larger than the median suggest?',
    options: ['The data is perfectly symmetrical', 'Skewed right; high values pull the mean up', 'The data contains no outliers at all', 'All three of the measures are wrong'],
    answer: 'Skewed right; high values pull the mean up',
    explanation: 'When mean > median, there are high outliers that pull the mean upward, resulting in a right-skewed distribution.',
  },
];

const DataHandling = () => (
  <CapsSubjectTopic
    title="Data Handling"
    subtitle="Organising, representing, interpreting data and writing evidence-based conclusions"
    learnSteps={learnSteps}
    task="gr11-ml-data-handling-t4"
    bank={bank}
    apiPath="/api/caps/ml"
  />
);

export default DataHandling;
