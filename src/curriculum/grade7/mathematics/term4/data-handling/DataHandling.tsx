import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { NumberLine } from '../../../../../components/diagrams/maths/Grade7Pictures';
import { MeanLevel, PieSectors, ScaleBars, SortedCards } from '../../../../../components/diagrams/maths/Grade7Data';
import { barValue, percentOf, sectorAngle, turnFraction } from '../../../../../components/diagrams/maths/grade7Helpers2';
import { stats } from '../../../../../components/diagrams/maths/mathsHelpers';

// Every number in the slides below comes from tested helpers (mathsHelpers.test.ts, grade7Helpers2.test.ts, lessons3.test.ts).
const meanData = [6, 8, 10];
const m = stats(meanData);
const medData = [4, 1, 9, 2, 7];
const med = stats(medData);
const modeData = [2, 3, 3, 4, 5];
const mode = stats(modeData);
const rangeData = [12, 8, 15, 10];
const rng = stats(rangeData);
const clubs = [
  { label: 'soccer', value: 20 },
  { label: 'netball', value: 15 },
  { label: 'chess', value: 10 },
  { label: 'cricket', value: 5 },
];
const sports = [
  { label: 'soccer', value: 10 },
  { label: 'netball', value: 15 },
  { label: 'cricket', value: 5 },
  { label: 'chess', value: 10 },
];
const learners = 40;
const soccerAngle = sectorAngle(10, learners);
const soccerShare = turnFraction(soccerAngle);
const check = { data: stats([5, 9, 7, 9, 10]), pct: percentOf(6, 24), bar: barValue(3, 10), fr: turnFraction(sectorAngle(15, learners)) };
const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: 'The mean: share the total equally',
    content: slide(
      <>
        <Rule>The mean (average) is the total of the values divided by how many values there are.</Rule>
        <MeanLevel data={meanData} />
        <Worked
          title="Find the mean of 6, 8 and 10"
          steps={[
            <>Add the values: 6 + 8 + 10 = {meanData.reduce((a, b) => a + b, 0)}.</>,
            <>There are {m.n} values: {meanData.reduce((a, b) => a + b, 0)} ÷ {m.n} = <strong>{m.mean}</strong>.</>,
          ]}
        />
        <Mistake>Picking the middle number of the list as the mean. That works here by chance; for 1, 2, 9 the mean is 12 ÷ 3 = {stats([1, 2, 9]).mean}, not 2.</Mistake>
      </>,
    ),
  },
  {
    title: 'Median and mode: sort first',
    content: slide(
      <>
        <Rule>The median is the middle value once the data is in order. The mode is the value that occurs most often.</Rule>
        <SortedCards data={medData} />
        <Worked
          title="Median of 4, 1, 9, 2, 7 and mode of 2, 3, 3, 4, 5"
          steps={[
            <>In order: {med.sorted.join(', ')}. The middle (3rd of 5) value is <strong>{med.median}</strong>.</>,
            <>In 2, 3, 3, 4, 5 the value 3 appears twice, more than any other: the mode is <strong>{mode.modes.join(', ')}</strong>.</>,
          ]}
        />
        <Mistake>Taking the middle of the list as given. In 4, 1, 9, 2, 7 the middle is 9, but the median is {med.median}: always sort first.</Mistake>
      </>,
    ),
  },
  {
    title: 'The range: how spread out the data is',
    content: slide(
      <>
        <Rule>The range is the biggest value minus the smallest value. It tells you how spread out the data is.</Rule>
        <NumberLine
          min={6}
          max={16}
          marks={rangeData.map((v) => ({ value: v, label: String(v), color: v === rng.min || v === rng.max ? '#fbbf24' : '#818cf8' }))}
          jumps={[{ from: rng.min, to: rng.max, label: `range ${rng.range}`, color: '#34d399' }]}
          aria={`The values ${rangeData.join(', ')} on a number line. The smallest is ${rng.min} and the biggest is ${rng.max}. The jump from ${rng.min} to ${rng.max} is ${rng.range}, the range.`}
        />
        <Worked
          title="Range of 12, 8, 15, 10"
          steps={[
            <>Biggest {rng.max}, smallest {rng.min}.</>,
            <>{rng.max} − {rng.min} = <strong>{rng.range}</strong>.</>,
          ]}
        />
        <Mistake>Taking the last value minus the first (10 − 12). Find the biggest and the smallest wherever they are in the list.</Mistake>
      </>,
    ),
  },
  {
    title: 'Bar graphs: read the scale',
    content: slide(
      <>
        <Rule>A bar graph compares categories. Read a bar by following its top across to the scale. Count the intervals and multiply by the size of one interval.</Rule>
        <ScaleBars items={clubs} step={5} read={0} />
        <Worked
          title="Learners in four school clubs (scale goes up in 5s)"
          steps={[
            <>The soccer bar reaches 4 intervals.</>,
            <>4 × 5 = <strong>{barValue(4, 5)}</strong> learners.</>,
          ]}
        />
        <Mistake>Reading the number of grid lines (4) as the value. Each interval is worth 5, so multiply: 4 × 5 = 20.</Mistake>
      </>,
    ),
  },
  {
    title: 'Pie charts and percentages',
    content: slide(
      <>
        <Rule>A pie chart shows parts of a whole. The whole circle is 360° and 100%. A sector’s angle is its fraction of 360°.</Rule>
        <PieSectors items={sports} />
        <Worked
          title={`${learners} learners chose a sport; 10 chose soccer`}
          steps={[
            <>Fraction: 10 out of {learners} = {soccerShare.n}/{soccerShare.d}.</>,
            <>Percentage: 10 ÷ {learners} × 100 = <strong>{percentOf(10, learners)}%</strong>.</>,
            <>Angle: {soccerShare.n}/{soccerShare.d} of 360° = <strong>{soccerAngle}°</strong>. So a 90° sector is a quarter.</>,
          ]}
        />
        <Mistake>Reading 90° as 90%. Degrees are out of 360, percentages out of 100: 90° is {percentOf(90, 360)}%.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        question={
          <ol className="list-decimal space-y-2 pl-5">
            <li>For 5, 9, 7, 9, 10 find the mean, median, mode and range.</li>
            <li>6 of 24 learners walk to school. What percentage is that?</li>
            <li>A scale goes up in 10s and a bar reaches 3 intervals. What is its value?</li>
            <li>What fraction of a pie chart is a 135° sector?</li>
          </ol>
        }
        answer={
          <ol className="list-decimal space-y-2 pl-5">
            <li>Mean 40 ÷ 5 = {check.data.mean}. In order {check.data.sorted.join(', ')}: median {check.data.median}, mode {check.data.modes.join(', ')}, range 10 − 5 = {check.data.range}.</li>
            <li>6 ÷ 24 × 100 = {check.pct}%.</li>
            <li>3 × 10 = {check.bar}.</li>
            <li>135/360 = {check.fr.n}/{check.fr.d}.</li>
          </ol>
        }
      />,
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
