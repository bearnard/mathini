import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { MathematicsItem, LearnStep } from '../../_shared/types';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { BoxPlot, GroupedBars, QuartileDots } from '../../../../../components/diagrams/maths/Grade10Maths';
import { dec } from '../../../../../components/diagrams/maths/grade10Helpers';
import * as t from '../../../../../components/diagrams/maths/grade10Helpers3';

// Every number in the slides below comes from the tested helpers in grade10Helpers3.ts (grade10Helpers3.test.ts, g10MathsBankT3.test.ts).
const d = (n: number) => (Number.isInteger(n) ? String(n) : dec(n, 2).replace(/0+$/, ''));

// slides 1 and 2: one data set
const data = [12, 15, 11, 18, 20, 14, 17, 16];
const sorted = t.sortAsc(data);
const q = t.quartiles(data);
const five = t.fiveNumber(data);
// slide 2: a second data set and its mean
const data2 = [2, 4, 4, 5, 7, 8, 9, 11];
const five2 = t.fiveNumber(data2);
const mean2 = t.mean(data2);
// slide 3: grouped data
const rows: t.ClassRow[] = [
  { from: 0, to: 10, freq: 4 },
  { from: 10, to: 20, freq: 8 },
  { from: 20, to: 30, freq: 10 },
];
const gm = t.groupedMean(rows);
const modal = t.modalClass(rows);
const medClass = t.medianClass(rows);
const cls = (c: t.ClassRow | null) => (c ? `${c.from} – ${c.to}` : '?');

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: 'Median and quartiles',
    content: slide(
      <>
        <Rule>Order the data first. The median is the middle value. The lower quartile Q₁ is the median of the lower half and the upper quartile Q₃ is the median of the upper half. Each quarter of the data holds the same number of values.</Rule>
        <QuartileDots sorted={sorted} q1={q.q1} q2={q.q2} q3={q.q3} />
        <Worked
          title={`Data: ${data.join('; ')}`}
          steps={[
            <>Ordered: {sorted.join('; ')}. There are {sorted.length} values.</>,
            <>Median: the mean of the 4th and 5th values: ({sorted[3]} + {sorted[4]}) ÷ 2 = <strong>{d(q.q2)}</strong>.</>,
            <>Lower half {sorted.slice(0, 4).join('; ')}: Q₁ = ({sorted[1]} + {sorted[2]}) ÷ 2 = <strong>{d(q.q1)}</strong>.</>,
            <>Upper half {sorted.slice(4).join('; ')}: Q₃ = ({sorted[5]} + {sorted[6]}) ÷ 2 = <strong>{d(q.q3)}</strong>.</>,
          ]}
        />
        <Mistake>Finding the quartiles before ordering the data. Always sort from smallest to biggest first.</Mistake>
      </>,
    ),
  },
  {
    title: 'Five-number summary and box-and-whisker plots',
    content: slide(
      <>
        <Rule>The five-number summary is minimum, Q₁, median, Q₃, maximum. The range is max − min, and the interquartile range IQR = Q₃ − Q₁. The middle 50% of the data lies between Q₁ and Q₃.</Rule>
        <BoxPlot plots={[{ name: 'Data', min: five.min, q1: five.q1, med: five.median, q3: five.q3, max: five.max }]} scale={[8, 22]} />
        <Worked
          title="From the same data"
          steps={[
            <>Five-number summary: {five.min}; {d(five.q1)}; {d(five.median)}; {d(five.q3)}; {five.max}.</>,
            <>Range: {five.max} − {five.min} = <strong>{five.range}</strong>.</>,
            <>IQR: {d(five.q3)} − {d(five.q1)} = <strong>{d(five.iqr)}</strong>.</>,
            <>For {data2.join('; ')} the summary is {five2.min}; {d(five2.q1)}; {d(five2.median)}; {d(five2.q3)}; {five2.max} and the mean is {data2.reduce((a, b) => a + b, 0)} ÷ {data2.length} = <strong>{d(mean2)}</strong>.</>,
          ]}
        />
        <Mistake>Confusing the range with the interquartile range. The range uses the minimum and maximum; the IQR uses the quartiles.</Mistake>
      </>,
    ),
  },
  {
    title: 'Grouped data',
    content: slide(
      <>
        <Rule>For grouped data, use the midpoint of each class. The estimated mean = Σ(midpoint × frequency) ÷ Σ frequency. The modal class has the highest frequency. The median class holds the middle position.</Rule>
        <GroupedBars rows={rows.map((r) => ({ label: cls(r), freq: r.freq }))} />
        <Worked
          title="Classes 0–10, 10–20, 20–30 with frequencies 4, 8 and 10"
          steps={[
            <>Midpoints: 5, 15 and 25. Total frequency: 4 + 8 + 10 = {t.cumulative(rows)[2]}.</>,
            <>Estimated mean = (5 × 4 + 15 × 8 + 25 × 10) ÷ 22 = {5 * 4 + 15 * 8 + 25 * 10} ÷ 22 ≈ <strong>{dec(gm, 1)}</strong>.</>,
            <>Modal class (highest frequency, {modal.freq}): <strong>{cls(modal)}</strong>.</>,
            <>Cumulative frequencies {t.cumulative(rows).join('; ')}: the 11th and 12th values lie in the class <strong>{cls(medClass)}</strong>.</>,
          ]}
        />
        <Mistake>Using the class limits instead of the class midpoints. The midpoint stands for every value in the class.</Mistake>
      </>,
    ),
  },
  {
    title: 'Reading quartiles and the effect of changes',
    content: slide(
      <>
        <Rule>Q₁ = 25% of the values are at or below it; the median = 50%; Q₃ = 75%. If every value is increased by the same amount, the quartiles and the mean move by that amount, but the range and the IQR do not change.</Rule>
        <BoxPlot
          plots={[
            { name: 'Data', min: five.min, q1: five.q1, med: five.median, q3: five.q3, max: five.max },
            { name: 'All + 5', min: five.min + 5, q1: five.q1 + 5, med: five.median + 5, q3: five.q3 + 5, max: five.max + 5, color: '#f59e0b' },
          ]}
          scale={[8, 28]}
        />
        <Worked
          title="What the numbers tell you"
          steps={[
            <>Q₃ = {d(q.q3)} means 75% of the values are {d(q.q3)} or less.</>,
            <>Between Q₁ and Q₃ lie 50% of the data.</>,
            <>Add 5 to every value: the new median is {d(q.q2)} + 5 = {d(q.q2 + 5)}.</>,
            <>The range is still {five.range} and the IQR is still {d(five.iqr)}, because the spread does not change.</>,
          ]}
        />
        <Mistake>Believing that adding 5 to every value also adds 5 to the range. A shift moves all the values together, so the distances between them stay the same.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <>
        <Check
          questions={[
            <>Find the median of {data.join('; ')}.</>,
            <>Find the interquartile range of the same data.</>,
            <>Find the five-number summary of {data2.join('; ')}.</>,
            <>Which class is the modal class for frequencies 4, 8 and 10 on 0–10, 10–20 and 20–30?</>,
          ]}
          answers={[
            <><strong>{d(q.q2)}</strong>.</>,
            <>{d(q.q3)} − {d(q.q1)} = <strong>{d(five.iqr)}</strong>.</>,
            <><strong>{five2.min}; {d(five2.q1)}; {d(five2.median)}; {d(five2.q3)}; {five2.max}</strong>.</>,
            <><strong>{cls(modal)}</strong>.</>,
          ]}
        />
      </>,
    ),
  },
];

// BANK:START
const bank: MathematicsItem[] = [
  {
    prompt: "What is the median of this data: 12; 15; 11; 18; 20; 14; 17; 16?",
    options: ["19", "15,5", "15", "16"],
    answer: "15,5",
    explanation: "Put the data in order: 11; 12; 14; 15; 16; 17; 18; 20. The two middle values are 15 and 16, so the median is (15 + 16) ÷ 2 = 15,5.",
  },
  {
    prompt: "What is the lower quartile (Q₁) of the data: 12; 15; 11; 18; 20; 14; 17; 16 (marks of eight learners)?",
    options: ["13", "12", "14", "15"],
    answer: "13",
    explanation: "In order: 11; 12; 14; 15; 16; 17; 18; 20. The lower half is 11; 12; 14; 15 and its median is (12 + 14) ÷ 2 = 13.",
  },
  {
    prompt: "What is the upper quartile (Q₃) of the data: 12; 15; 11; 18; 20; 14; 17; 16 (ages of eight club members)?",
    options: ["17", "18", "18,5", "17,5"],
    answer: "17,5",
    explanation: "The upper half is 16; 17; 18; 20 and its median is (17 + 18) ÷ 2 = 17,5.",
  },
  {
    prompt: "What is the interquartile range of the data: 12; 15; 11; 18; 20; 14; 17; 16 (minutes taken by eight runners)?",
    options: ["9", "17,5", "4,5", "13"],
    answer: "4,5",
    explanation: "IQR = Q₃ − Q₁ = 17,5 − 13 = 4,5.",
  },
  {
    prompt: "What is the range of the data: 12; 15; 11; 18; 20; 14; 17; 16 (prices in rand of eight books)?",
    options: ["4,5", "9", "31", "15,5"],
    answer: "9",
    explanation: "Range = highest − lowest = 20 − 11 = 9.",
  },
  {
    prompt: "What is the five-number summary (minimum; Q₁; median; Q₃; maximum) of 2; 4; 4; 5; 7; 8; 9; 11?",
    options: ["2; 4; 6; 8,5; 11", "2; 4; 5; 8; 11", "2; 5; 6; 8; 11", "2; 4,5; 6; 9; 11"],
    answer: "2; 4; 6; 8,5; 11",
    explanation: "The median is (5 + 7) ÷ 2 = 6. Lower half 2; 4; 4; 5 has median 4. Upper half 7; 8; 9; 11 has median (8 + 9) ÷ 2 = 8,5.",
  },
  {
    prompt: "What is the mean of 2; 4; 4; 5; 7; 8; 9; 11?",
    options: ["6", "5,5", "6,5", "6,25"],
    answer: "6,25",
    explanation: "The sum is 50 and there are 8 values: 50 ÷ 8 = 6,25. (6 is the median.)",
  },
  {
    prompt: "A box-and-whisker plot has minimum 4, Q₁ = 10, median 14, Q₃ = 22 and maximum 30. What is the interquartile range?",
    options: ["26", "8", "12", "18"],
    answer: "12",
    explanation: "The IQR is the width of the box: 22 − 10 = 12.",
  },
  {
    prompt: "What percentage of the data lies between Q₁ and Q₃?",
    options: ["25%", "50%", "75%", "100%"],
    answer: "50%",
    explanation: "Each quarter of the data holds 25%. Between Q₁ and Q₃ there are two quarters: 50%. That is the box in a box-and-whisker plot.",
  },
  {
    prompt: "Classes 0–10, 10–20 and 20–30 have frequencies 4, 8 and 10. What is the estimated mean?",
    options: ["17,7", "15", "22,7", "12,7"],
    answer: "17,7",
    explanation: "Use the class midpoints 5, 15 and 25: (5 × 4 + 15 × 8 + 25 × 10) ÷ 22 = 390 ÷ 22 ≈ 17,7.",
  },
  {
    prompt: "A frequency table has the classes 0–10, 10–20 and 20–30 with frequencies 4, 8 and 10. Which is the modal class (the class with the highest frequency)?",
    options: ["0 to 10", "10 to 20", "22", "20 to 30"],
    answer: "20 to 30",
    explanation: "The modal class is the class with the highest frequency: 10 values lie in 20 to 30.",
  },
  {
    prompt: "Grouped data: classes 0–10, 10–20 and 20–30 have frequencies 4, 8 and 10 (22 values). Which class contains the median?",
    options: ["0 to 10", "20 to 30", "10 to 20", "12"],
    answer: "10 to 20",
    explanation: "There are 22 values, so the median lies between the 11th and 12th. The cumulative frequencies are 4, 12 and 22, so both values are in 10 to 20.",
  },
  {
    prompt: "For a data set Q₃ = 17,5. What does this tell you?",
    options: ["25% of the values are 17,5 or less", "75% of the values are 17,5 or less", "The mean is 17,5", "17,5% of the values are in the top quarter"],
    answer: "75% of the values are 17,5 or less",
    explanation: "The upper quartile has three quarters (75%) of the data at or below it.",
  },
  {
    prompt: "Every value in a data set is increased by 5. Which statement is true?",
    options: ["The range and the interquartile range stay the same", "The median and the mean both stay the same", "The mean stays the same but the range goes up", "The lower quartile and the upper quartile stay the same"],
    answer: "The range and the interquartile range stay the same",
    explanation: "Every value, the mean, the median and the quartiles all go up by 5. Differences such as the range and the IQR do not change.",
  },
];
// BANK:END

const Statistics = () => (
  <CapsSubjectTopic
    title="Statistics"
    subtitle="Grouped data, quartiles, the five-number summary and box-and-whisker plots"
    learnSteps={learnSteps}
    task="gr10-statistics-t3"
    bank={bank}
    apiPath="/api/caps/math"
  />
);

export default Statistics;
