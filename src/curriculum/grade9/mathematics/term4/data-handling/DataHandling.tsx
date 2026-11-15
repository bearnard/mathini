import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { MathematicsItem, LearnStep } from '../../_shared/types';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { DotPlot, FrequencyBars, PieChart, SPACE_COLORS } from '../../../../../components/diagrams/maths/Grade9SpaceData';
import { frequencyTable, mean, median, modes, pieAngles, range, sa, sorted, sum } from '../../../../../components/diagrams/maths/grade9SpaceDataHelpers';

// Every number in the slides below comes from these tested helpers (grade9SpaceDataHelpers.test.ts, lessonsMaths10.test.ts).
const { green: E, amber: A, rose: R } = SPACE_COLORS;

// slide 1: median and mode
const odd = [3, 5, 7, 9, 11];
const even = [4, 8, 12, 16];
const md = [2, 5, 5, 7, 9];

// slide 2: mean
const mn = mean(even);

// slide 3: range and outliers
const rg = range([3, 8, 12, 5, 20]);
const out = [1, 2, 3, 4, 100];

// slide 4: frequency table
const ft = [{ value: 1, freq: 5 }, { value: 2, freq: 3 }, { value: 3, freq: 2 }];
const fts = frequencyTable(ft);

// slide 5: pie chart
const travel = [{ label: 'Walk', count: 20 }, { label: 'Taxi', count: 12 }, { label: 'Bus', count: 8 }];
const angles = pieAngles(travel.map((t) => t.count));
const learners = sum(travel.map((t) => t.count));

// "Check yourself"
const q = [6, 2, 9, 4, 9];
const qs = sorted(q);

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: 'Median and mode',
    content: slide(
      <>
        <Rule>The median is the middle value once the data are in order. With an even number of values, it is halfway between the two middle values. The mode is the value that occurs most often.</Rule>
        <DotPlot
          data={md}
          min={0}
          max={10}
          marks={[{ value: modes(md)[0], label: `mode ${modes(md)[0]}`, color: A }]}
          aria={`A dot plot of ${md.join(', ')}. Two dots stack at 5, so the mode is ${modes(md)[0]}.`}
        />
        <Worked
          steps={[
            <>{odd.join(', ')}: five values, the 3rd is the middle. Median = <strong>{median(odd)}</strong>.</>,
            <>{even.join(', ')}: the middle two are 8 and 12. Median = (8 + 12) ÷ 2 = <strong>{median(even)}</strong>.</>,
            <>{md.join(', ')}: 5 occurs twice, the others once. Mode = <strong>{modes(md)[0]}</strong>.</>,
          ]}
        />
        <Mistake>Taking the middle of the list before sorting it. For 9, 3, 11, 5, 7 the middle number written is 11, but the median is {median([9, 3, 11, 5, 7])}.</Mistake>
      </>,
    ),
  },
  {
    title: 'The mean, and when an outlier pulls it',
    content: slide(
      <>
        <Rule>Mean = sum of the values ÷ number of values. It suits data that are spread evenly with no extreme values. An outlier pulls the mean towards it; the median hardly moves.</Rule>
        <DotPlot
          data={out}
          min={0}
          max={100}
          step={10}
          marks={[
            { value: median(out), label: `median ${median(out)}`, color: E },
            { value: mean(out), label: `mean ${mean(out)}`, color: R },
          ]}
          aria={`A dot plot of ${out.join(', ')}. Four values sit near 0 and the outlier 100 is far away. The median is ${median(out)} but the mean is ${mean(out)}.`}
        />
        <Worked
          steps={[
            <>{even.join(', ')}: sum = {sum(even)}; mean = {sum(even)} ÷ {even.length} = <strong>{mn}</strong>.</>,
            <>{out.join(', ')}: sum = {sum(out)}; mean = {sum(out)} ÷ {out.length} = <strong>{mean(out)}</strong>.</>,
            <>Its median is {median(out)}. The outlier 100 affects the <strong>mean</strong> most.</>,
          ]}
        />
        <Mistake>Quoting the mean as the &quot;typical&quot; value when there is an outlier. Here {mean(out)} is bigger than four of the five values; the median {median(out)} describes them better.</Mistake>
      </>,
    ),
  },
  {
    title: 'Range: how spread out the data are',
    content: slide(
      <>
        <Rule>Range = highest value − lowest value. It measures spread, not a typical value.</Rule>
        <DotPlot
          data={[3, 8, 12, 5, 20]}
          min={0}
          max={20}
          step={2}
          marks={[
            { value: rg.min, label: `lowest ${rg.min}`, color: E },
            { value: rg.max, label: `highest ${rg.max}`, color: R },
          ]}
          aria={`A dot plot of 3, 8, 12, 5, 20. The lowest value is ${rg.min} and the highest is ${rg.max}, so the range is ${rg.range}.`}
        />
        <Worked
          title="3, 8, 12, 5, 20"
          steps={[
            <>In order: {sorted([3, 8, 12, 5, 20]).join(', ')}.</>,
            <>Range = {rg.max} − {rg.min} = <strong>{rg.range}</strong>.</>,
          ]}
        />
        <Mistake>Using the first and last numbers as they are written. For 12, 3, 20, 5 that gives 5 − 12; the range is highest − lowest: 20 − 3 = {range([12, 3, 20, 5]).range}.</Mistake>
      </>,
    ),
  },
  {
    title: 'Frequency tables',
    content: slide(
      <>
        <Rule>A frequency table counts how often each value occurs. The total frequency is the number of data values. For the mean, multiply each value by its frequency, add, and divide by the total.</Rule>
        <FrequencyBars rows={ft} caption={`total frequency: ${ft.map((r) => r.freq).join(' + ')} = ${fts.total}`} />
        <Worked
          title="Value 1: 5 times; value 2: 3 times; value 3: 2 times"
          steps={[
            <>Total frequency = {ft.map((r) => r.freq).join(' + ')} = <strong>{fts.total}</strong>.</>,
            <>Sum of the values: {ft.map((r) => `${r.value} × ${r.freq}`).join(' + ')} = {fts.products.join(' + ')} = {fts.sum}.</>,
            <>Mean = {fts.sum} ÷ {fts.total} = <strong>{sa(fts.mean)}</strong>. The mode is 1 (highest frequency).</>,
          ]}
        />
        <Mistake>Adding the values 1 + 2 + 3 = 6 for the total. The total is the sum of the frequencies, because each value was counted that many times.</Mistake>
      </>,
    ),
  },
  {
    title: 'Choose the right graph',
    content: slide(
      <>
        <Rule>A pie chart shows parts of a whole. A bar graph compares separate categories. A line graph shows change over time. In a pie chart each sector is its share of 360°.</Rule>
        <PieChart parts={travel} />
        <Worked
          title={`How ${learners} learners travel to school: ${travel.map((t) => `${t.label.toLowerCase()} ${t.count}`).join(', ')}`}
          steps={[
            <>These are parts of one whole class, so use a <strong>pie chart</strong>.</>,
            <>Walk: {travel[0].count} ÷ {learners} × 360° = {sa(angles[0])}°. Taxi: {sa(angles[1])}°. Bus: {sa(angles[2])}°.</>,
            <>Check: {angles.map(sa).join(' + ')} = {sa(sum(angles))}°.</>,
          ]}
        />
        <Mistake>Drawing a pie chart for data that are not parts of one whole, such as a town&apos;s temperature each month. That change over time needs a line graph.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        question={
          <ol className="list-decimal space-y-2 pl-5">
            <li>For 6, 2, 9, 4, 9 find the mean, median, mode and range.</li>
            <li>Which of mean or median is pulled more by one very large value?</li>
            <li>Which graph would you use to show how a household budget is split?</li>
          </ol>
        }
        answer={
          <ol className="list-decimal space-y-2 pl-5">
            <li>
              Mean = {sum(q)} ÷ 5 = {sa(mean(q))}; in order {qs.join(', ')}, median = {median(q)}; mode = {modes(q)[0]}; range = {range(q).max} − {range(q).min} = {range(q).range}.
            </li>
            <li>The mean.</li>
            <li>A pie chart, because the parts make up one whole budget.</li>
          </ol>
        }
      />,
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
