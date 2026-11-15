import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { BarVsHistogram, DotGrid, MeanBars, SortedTiles, StemLeafPlot } from '../../../../../components/diagrams/maths/Grade8Graphs';
import { groupCounts, mean, median, modes, range, relativeFrequency, sorted, stemLeaf, sum } from '../../../../../components/diagrams/maths/grade8DataHelpers';
import { dc } from '../../../../../components/diagrams/maths/grade8NumberHelpers';

// Every number in the slides below comes from these tested helpers (grade8DataHelpers) and
// lessonsMaths6.test.ts checks that the rendered slides show them. The data sets are made-up class examples.
const meanData = [2, 4, 6, 8];
const meanV = mean(meanData);
const medData = [3, 11, 5, 9];
const wrongMed = (medData[1] + medData[2]) / 2; // the mistake: the middle of the unsorted list
const med = median(medData);
const modeData = [1, 2, 2, 3];
const mode = modes(modeData);
const rangeData = [9, 12, 14, 20];
const rng = range(rangeData);
const sport = [8, 5, 11, 6]; // learners choosing each of four sports
const heights = [142, 147, 151, 153, 155, 156, 158, 159, 160, 161, 162, 163, 164, 166, 167, 169, 171, 172, 175, 178];
const groups = groupCounts(heights, 140, 10, 4);
const marks = [34, 23, 45, 31, 38, 27, 34, 47, 42];
const plot = stemLeaf(marks);
const marksMed = median(marks);
const rel = relativeFrequency(6, 30);

// "Check yourself", answers computed from the same helpers
const c1 = [7, 3, 9, 3, 8];
const c1s = { mean: mean(c1), median: median(c1).value, mode: modes(c1), range: range(c1) };
const c2 = relativeFrequency(9, 36);

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: 'The mean: share the total equally',
    content: slide(
      <>
        <Rule>Mean = sum of the values ÷ number of values. It is the value each one would have if the total were shared out equally.</Rule>
        <MeanBars data={meanData} mean={meanV} />
        <Worked
          title={`Mean of ${meanData.join(', ')}`}
          steps={[
            <>Add the values: {meanData.join(' + ')} = {sum(meanData)}.</>,
            <>There are {meanData.length} values: {sum(meanData)} ÷ {meanData.length} = <strong>{dc(meanV)}</strong>.</>,
          ]}
        />
        <Mistake>Dividing by the largest value or by 2 instead of by how many values there are. Count the values: here {meanData.length}, so divide by {meanData.length}.</Mistake>
      </>,
    ),
  },
  {
    title: 'Median, mode and range',
    content: slide(
      <>
        <Rule>Median: the middle value after sorting (with two middle values, take halfway between them). Mode: the most common value. Range: largest minus smallest.</Rule>
        <SortedTiles values={sorted(medData)} middle={med.middle} caption={`median = (${med.middle.join(' + ')}) ÷ 2 = ${dc(med.value)}`} />
        <Worked
          steps={[
            <>{medData.join(', ')} sorted is {sorted(medData).join(', ')}. The middle two are {med.middle.join(' and ')}: median = <strong>{dc(med.value)}</strong>.</>,
            <>In {modeData.join(', ')} the value 2 occurs twice: mode = <strong>{mode.join(', ')}</strong>.</>,
            <>Range of {rangeData.join(', ')}: {Math.max(...rangeData)} − {Math.min(...rangeData)} = <strong>{rng}</strong>.</>,
          ]}
        />
        <Mistake>Taking the middle of the unsorted list: in {medData.join(', ')} that is {medData[1]} and {medData[2]}, giving {dc(wrongMed)}. Sorted, the middle values are {med.middle.join(' and ')}, so the median is {dc(med.value)}.</Mistake>
      </>,
    ),
  },
  {
    title: 'Bar graphs and histograms',
    content: slide(
      <>
        <Rule>A bar graph compares separate categories, so its bars have gaps. A histogram shows continuous data grouped in equal intervals, so its bars touch.</Rule>
        <BarVsHistogram bars={sport} hist={groups.map((g) => g.count)} edges={[...groups.map((g) => g.from), groups[groups.length - 1].to]} />
        <Worked
          title="Choose the graph"
          steps={[
            <>Favourite sport of each learner: categories, so a <strong>bar graph</strong>.</>,
            <>Heights of 20 learners in cm: measured data, so group it and draw a <strong>histogram</strong>.</>,
            <>Intervals 140–150, 150–160, 160–170, 170–180 hold {groups.map((g) => g.count).join(', ')} learners ({sum(groups.map((g) => g.count))} in all).</>,
          ]}
        />
        <Mistake>Leaving gaps between histogram bars. A height of 150 cm is the end of one interval and the start of the next, so there is no gap on the number line.</Mistake>
      </>,
    ),
  },
  {
    title: 'Stem-and-leaf plots',
    content: slide(
      <>
        <Rule>A stem-and-leaf plot orders the data and keeps every original value visible: the stem is the tens digit, the leaf the units digit.</Rule>
        <StemLeafPlot rows={plot} keyStem={3} keyLeaf={4} highlight={[4]} />
        <Worked
          title={`Test marks: ${marks.join(', ')}`}
          steps={[
            <>Stems 2, 3 and 4; write each units digit as a leaf, in order.</>,
            <>Read the values back: {sorted(marks).join(', ')}.</>,
            <>There are {marks.length} values, so the median is the 5th: <strong>{marksMed.value}</strong>.</>,
          ]}
        />
        <Mistake>Reading stem 3 and leaf 4 as 3 + 4 = 7. The key says 3 | 4 means 34.</Mistake>
      </>,
    ),
  },
  {
    title: 'Relative frequency as a percentage',
    content: slide(
      <>
        <Rule>Relative frequency = how often something happens ÷ the total. Multiply by 100 to write it as a percentage.</Rule>
        <DotGrid total={30} count={6} caption={`6 out of 30 = ${rel.percent}%`} />
        <Worked
          title="6 of 30 learners prefer option A"
          steps={[
            <>Relative frequency = <span className="whitespace-nowrap">6 ÷ 30 = {dc(rel.decimal)}</span>.</>,
            <>As a percentage: {dc(rel.decimal)} × 100 = <strong>{rel.percent}%</strong>.</>,
          ]}
        />
        <Mistake>Writing 6%. The 6 is a count, not a percentage: 6 out of 30 is one in every five learners, which is {rel.percent}%.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        question={
          <ol className="list-decimal space-y-2 pl-5">
            <li>For {c1.join(', ')} find the mean, median, mode and range.</li>
            <li>Rainfall in mm on 30 days: bar graph or histogram?</li>
            <li>9 of 36 learners walk to school. What percentage is that?</li>
          </ol>
        }
        answer={
          <ol className="list-decimal space-y-2 pl-5">
            <li>Mean {sum(c1)} ÷ 5 = {dc(c1s.mean)}; sorted {sorted(c1).join(', ')}, so median {dc(c1s.median)}; mode {c1s.mode.join(', ')}; range {c1s.range}.</li>
            <li>A histogram: rainfall is measured, continuous data.</li>
            <li>9 ÷ 36 = {dc(c2.decimal)} = {c2.percent}%.</li>
          </ol>
        }
      />,
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
