import CapsSubjectTopic from '@/components/CapsSubjectTopic';
import type { CapsItem } from '@/components/CapsSubjectTopic';
import type { MathematicalLiteracyItem, LearnStep } from '../../_shared/types';
import Formula from '@/components/subjects/Formula';
import DataChart from '@/components/subjects/DataChart';

const learnSteps: LearnStep[] = [
  {
    title: 'Read data displays carefully',
    content: (
      <div className="space-y-4 text-left">
        <p className="text-lg leading-8 text-slate-600">Tables, bar graphs, line graphs, pie charts and infographics all present information differently. Before answering, check the title, labels, units and source so that you know exactly what each axis or category measures.</p>
        <p className="text-lg leading-8 text-slate-600">A quick distribution chart helps you see where most values are grouped before you start interpreting the story behind the data.</p>
        <DataChart
          type="bar"
          xKey="band"
          data={[
            { band: '0–20', learners: 2 },
            { band: '21–40', learners: 5 },
            { band: '41–60', learners: 9 },
            { band: '61–80', learners: 7 },
            { band: '81–100', learners: 3 },
          ]}
          series={[{ key: 'learners', label: 'Learners', color: '#0f766e' }]}
          yLabel="Frequency"
          height={220}
        />
      </div>
    ),
  },
  {
    title: 'Use summary statistics in context',
    content: (
      <div className="space-y-4 text-left">
        <p className="text-lg leading-8 text-slate-600">Mean, median, mode and range summarise a data set, but each one tells a slightly different story. The mean uses all values, the median gives the middle value, the mode is the most common value and the range shows spread.</p>
        <Formula block>{String.raw`\text{Mean} = \frac{\text{sum of values}}{\text{number of values}}`}</Formula>
        <Formula block>{String.raw`\text{Range} = \text{highest value} - \text{lowest value}`}</Formula>
        <p className="text-lg leading-8 text-slate-600">For a data set such as 58, 60, 60, 64 and 68, the mean is <Formula>{String.raw`\frac{58+60+60+64+68}{5} = 62`}</Formula>, the median is 60 and the mode is 60. CAPS questions often ask which summary is most useful for a practical decision.</p>
      </div>
    ),
  },
  {
    title: 'Convert between fractions, decimals and percentages',
    content: (
      <div className="space-y-4 text-left">
        <p className="text-lg leading-8 text-slate-600">Survey and population questions frequently present results in different forms. Convert smoothly between a part of a whole, a decimal proportion and a percentage so that categories can be compared fairly.</p>
        <Formula block>{String.raw`\text{Percentage} = \frac{\text{part}}{\text{whole}} \times 100`}</Formula>
        <p className="text-lg leading-8 text-slate-600">If 36 out of 120 learners prefer soccer, then <Formula>{String.raw`\frac{36}{120} = 0.30 = 30\%`}</Formula>. Writing the same result in all three forms often makes the next comparison much easier.</p>
      </div>
    ),
  },
  {
    title: 'Spot misleading graphs and unsupported claims',
    content: (
      <div className="space-y-4 text-left">
        <p className="text-lg leading-8 text-slate-600">A graph can mislead if the vertical axis is cut off, bars are not equal width, or visuals exaggerate small differences. Good Mathematical Literacy answers explain why a claim is reasonable or doubtful instead of only stating yes or no.</p>
        <ul className="list-disc space-y-2 pl-6 text-lg leading-8 text-slate-600">
          <li>Check whether the scale starts at 0 or at another value.</li>
          <li>Compare categories using the same units.</li>
          <li>Ask whether the conclusion matches the evidence actually shown.</li>
        </ul>
      </div>
    ),
  },
];

const items: MathematicalLiteracyItem[] = [
  {
    "id": "data-handling-1",
    "question": "Find the median of 12, 15, 15, 18, 20.",
    "options": [
      "12",
      "15",
      "16",
      "18"
    ],
    "answer": 1,
    "explanation": "The middle value in the ordered set is 15."
  },
  {
    "id": "data-handling-2",
    "question": "What is the range of 44, 39, 51, 47, 39?",
    "options": [
      "10",
      "12",
      "14",
      "17"
    ],
    "answer": 1,
    "explanation": "Range = highest − lowest = 51 − 39 = 12."
  },
  {
    "id": "data-handling-3",
    "question": "If 36 out of 120 learners prefer soccer, what percentage is this?",
    "options": [
      "3%",
      "24%",
      "30%",
      "36%"
    ],
    "answer": 2,
    "explanation": "36 ÷ 120 = 0.30 = 30%."
  },
  {
    "id": "data-handling-4",
    "question": "Which feature would make a bar graph misleading?",
    "options": [
      "A clear title",
      "A labelled axis",
      "A vertical axis that starts at 90 instead of 0 to exaggerate differences",
      "Using equal bar widths"
    ],
    "answer": 2,
    "explanation": "A truncated axis can make small differences look much larger than they really are."
  },
  {
    "id": "data-handling-5",
    "question": "Set A has a range of 6 and Set B has a range of 20. Which set is more consistent?",
    "options": [
      "Set A",
      "Set B",
      "Both equally consistent",
      "It cannot be decided"
    ],
    "answer": 0,
    "explanation": "A smaller range means the values are closer together, so Set A is more consistent."
  },
  {
    "id": "data-handling-6",
    "question": "Which graph type is usually best for showing a trend over several months?",
    "options": [
      "Pie chart",
      "Line graph",
      "Pictograph only",
      "Single bar"
    ],
    "answer": 1,
    "explanation": "A line graph is designed to show change over time clearly."
  },
  {
    "id": "data-handling-7",
    "question": "Eight out of 20 commuters in a survey use taxis. What fraction of the commuters use taxis?",
    "options": [
      "1/5",
      "2/5",
      "3/5",
      "4/5"
    ],
    "answer": 1,
    "explanation": "8/20 simplifies to 2/5."
  },
  {
    "id": "data-handling-8",
    "question": "What is the mean of 5, 7, 9 and 11?",
    "options": [
      "7",
      "8",
      "9",
      "10"
    ],
    "answer": 1,
    "explanation": "Add the values to get 32, then divide by 4 to get 8."
  }
];

const bank: CapsItem[] = items.map((item) => ({
  prompt: item.question,
  options: item.options,
  answer: item.options[item.answer],
  explanation: item.explanation,
}));


const topicLearnSteps = learnSteps.map((step) => ({
  title: step.title,
  content: step.content,
}));

const DataHandling = () => (
  <CapsSubjectTopic
    title="Data Handling"
    subtitle="Graphs, statistics and critical interpretation of data"
    learnSteps={topicLearnSteps}
    task="gr12-data-handling-t1"
    bank={bank}
    apiPath="/api/caps/ml"
    grade={12}
  />
);

export default DataHandling;
