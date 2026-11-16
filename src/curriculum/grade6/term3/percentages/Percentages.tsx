import CapsSubjectTopic from '../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '../../../../components/subjects/lesson/LessonBlocks';
import { LineList, PercentBar, PercentGrid } from '../../../../components/diagrams/maths/Grade6Maths';
import { group as g } from '../../../../components/diagrams/maths/grade6AddSub';
import * as p from '../../../../components/diagrams/maths/grade6Percent';

// Every number in the slides below comes from the tested helpers in grade6Percent.ts (grade6Percent.test.ts, g6MathsNewBank.test.ts).
// CAPS Grade 6: tenths and hundredths, fractions with denominators that are factors of 100, decimals in tenths and hundredths, and a percentage of a whole number.
const R = (n: number) => `R${g(n)}`;
const tenth = p.fractionToPercent(3, 10);
const hundredth = p.fractionToPercent(7, 100);
const quarter = p.hundredths(1, 4)!;
const threeQ = p.hundredths(3, 4)!;
const fifth = p.fractionToPercent(1, 5);
const twentieth = p.fractionToPercent(1, 20);
const half = p.fractionToPercent(1, 2);
const roundTrip = { quarter: p.percentOf(25, 300)!, tenOfR450: p.percentOf(10, 450)!, fifty: p.percentOf(50, 80)!, twenty: p.percentOf(20, 250)!, five: p.percentOf(5, 360)!, ten360: p.tenPercent(360)! };
const jacket = { price: 450, off: p.percentOf(10, 450)!, pay: p.afterDiscount(450, 10)! };
const c = { a: p.fractionToPercent(2, 5), b: p.percentOf(75, 200)!, c: p.partAsPercent(9, 10), d: p.afterDiscount(800, 25)! };

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: 'Per cent means out of 100',
    content: slide(
      <>
        <Rule>Per cent means out of 100. The sign % is written after the number. 1 per cent is 1/100, so 7% is 7/100. Tenths are hundredths in disguise: 1/10 = 10/100 = 10%.</Rule>
        <PercentGrid n={tenth as number} caption={`${tenth} out of 100 squares are shaded.`} />
        <Worked
          title="Tenths and hundredths as percentages"
          steps={[
            <>3/10: multiply the top and bottom by 10 to get 30/100, which is <strong>{tenth}%</strong>.</>,
            <>7/100 is already out of 100, so it is <strong>{hundredth}%</strong>.</>,
            <>1/10 = 10/100 = <strong>{p.fractionToPercent(1, 10)}%</strong>.</>,
            <>The grid has 100 squares, so {tenth} shaded squares are {tenth}%.</>,
          ]}
        />
        <Mistake>Writing 3/10 as 3%. 3% is 3/100. 3/10 is ten times bigger: 30/100 = 30%.</Mistake>
      </>,
    ),
  },
  {
    title: 'Fractions with denominators that fit into 100',
    content: slide(
      <>
        <Rule>When the denominator is 2, 4, 5, 20, 25 or 50, find what you multiply it by to get 100, and multiply the top by the same number. You only need to do this for these fractions.</Rule>
        <PercentGrid n={quarter.n} caption="One quarter of the squares are shaded." />
        <Worked
          title="Equivalent fractions with denominator 100"
          steps={[
            <>1/4: 4 × {quarter.k} = 100, so 1/4 = {quarter.n}/100 = <strong>{p.fractionToPercent(1, 4)}%</strong>.</>,
            <>3/4: 4 × {threeQ.k} = 100, so 3/4 = {threeQ.n}/100 = <strong>{p.fractionToPercent(3, 4)}%</strong>.</>,
            <>1/2 = 50/100 = <strong>{half}%</strong>. 1/5 = 20/100 = <strong>{fifth}%</strong>. 1/20 = 5/100 = <strong>{twentieth}%</strong>.</>,
            <>Fractions such as 1/3 do not fit into 100, and you do not need to change them.</>,
          ]}
        />
        <Mistake>Multiplying only the denominator. If you multiply 4 by 25 you must also multiply the 1 by 25, so 1/4 = 25/100, not 1/100.</Mistake>
      </>,
    ),
  },
  {
    title: 'Decimals and percentages',
    content: slide(
      <>
        <Rule>A decimal in tenths or hundredths is a fraction out of 100, so it is a percentage. 0,3 = 30/100 = 30%. 0,07 = 7/100 = 7%. 0,25 = 25/100 = 25%.</Rule>
        <LineList
          lines={[{ text: '0,3 = 3/10 = 30/100 = 30%', color: '#fbbf24' }, { text: '0,07 = 7/100 = 7%', color: '#86efac' }, { text: '0,25 = 25/100 = 25%', color: '#e2e8f0' }]}
          aria="Three decimals written as percentages: 0,3 is 30 per cent, 0,07 is 7 per cent and 0,25 is 25 per cent."
        />
        <Worked
          title="From decimals to percentages and back"
          steps={[
            <>0,3 is 3 tenths = 30 hundredths = <strong>{p.decimalToPercent(30)}%</strong>.</>,
            <>0,07 is 7 hundredths = <strong>{p.decimalToPercent(7)}%</strong>.</>,
            <>Back again: 25% = 25/100 = <strong>0,25</strong>.</>,
            <>To change a percentage to a decimal, think of the hundredths: {p.percentToHundredths(60)}% is 60 hundredths = 0,6.</>,
          ]}
        />
        <Mistake>Reading 0,3 as 3 hundredths. 0,3 has only one decimal place, so it is 3 tenths = 30%.</Mistake>
      </>,
    ),
  },
  {
    title: 'A percentage of a number',
    content: slide(
      <>
        <Rule>Use what you know about fractions. 50% is a half, 25% is a quarter, 10% is a tenth and 20% is a fifth. Find that fraction of the number. For other percentages, find 10% first and build up.</Rule>
        <PercentBar percent={25} whole={300} part={roundTrip.quarter} unit="R" />
        <Worked
          title="Percentages of whole numbers"
          steps={[
            <>25% of {R(300)} = 1/4 of {R(300)} = {R(300)} ÷ 4 = <strong>{R(roundTrip.quarter)}</strong>.</>,
            <>10% of {R(450)} = {R(450)} ÷ 10 = <strong>{R(roundTrip.tenOfR450)}</strong>. 50% of 80 = 80 ÷ 2 = <strong>{roundTrip.fifty}</strong>.</>,
            <>5% of 360: 10% is {roundTrip.ten360}, and 5% is half of that: <strong>{roundTrip.five}</strong>.</>,
            <>A {R(jacket.price)} jacket has a 10% discount: {R(jacket.price)} − {R(jacket.off)} = <strong>{R(jacket.pay)}</strong>.</>,
          ]}
        />
        <Mistake>Dividing by the percentage number. 25% of R300 is R300 ÷ 4, not R300 ÷ 25.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <>
        <Check
          questions={[
            <>Write 2/5 as a percentage.</>,
            <>What is 75% of 200?</>,
            <>Nomsa gets 9 out of 10 for a spelling test. What percentage is that?</>,
            <>A bag costs R800. It has a 25% discount. What does it cost now?</>,
          ]}
          answers={[
            <>5 × 20 = 100, so 2/5 = 40/100 = <strong>{c.a}%</strong>.</>,
            <>75% is 3/4: 200 ÷ 4 = 50, and 3 × 50 = <strong>{c.b}</strong>.</>,
            <>9/10 = 90/100 = <strong>{c.c}%</strong>.</>,
            <>25% of R800 = R800 ÷ 4 = R200. R800 − R200 = <strong>{R(c.d)}</strong>.</>,
          ]}
        />
      </>,
    ),
  },
];

// BANK:START
export const bank: CapsItem[] = [
  {
    prompt: "What is 1/10 written as a percentage?",
    options: ["1%", "10%", "100%", "0,1%"],
    answer: "10%",
    explanation: "1/10 = 10/100, and 10/100 is 10 per cent.",
  },
  {
    prompt: "What is 7/100 written as a percentage?",
    options: ["7%", "70%", "17%", "0,07%"],
    answer: "7%",
    explanation: "Per cent means out of 100, so 7/100 is 7%.",
  },
  {
    prompt: "What is 3/10 written as a percentage?",
    options: ["3%", "33%", "300%", "30%"],
    answer: "30%",
    explanation: "3/10 = 30/100, which is 30%.",
  },
  {
    prompt: "What is 1/4 written as a percentage?",
    options: ["14%", "40%", "25%", "75%"],
    answer: "25%",
    explanation: "4 × 25 = 100, so 1/4 = 25/100 = 25%.",
  },
  {
    prompt: "What is 3/4 written as a percentage?",
    options: ["34%", "75%", "60%", "25%"],
    answer: "75%",
    explanation: "3/4 = 75/100, which is 75%.",
  },
  {
    prompt: "What is 1/5 written as a percentage?",
    options: ["20%", "15%", "50%", "5%"],
    answer: "20%",
    explanation: "5 × 20 = 100, so 1/5 = 20/100 = 20%.",
  },
  {
    prompt: "A grid has 100 squares and 40 of them are shaded. What percentage is shaded?",
    options: ["4%", "60%", "140%", "40%"],
    answer: "40%",
    explanation: "40 out of 100 is 40%.",
  },
  {
    prompt: "Which decimal fraction is equal to 25%?",
    options: ["2,5", "0,025", "0,25", "0,52"],
    answer: "0,25",
    explanation: "25% is 25/100, and 25 hundredths is 0,25.",
  },
  {
    prompt: "What is 0,3 written as a percentage?",
    options: ["3%", "30%", "0,3%", "300%"],
    answer: "30%",
    explanation: "0,3 is 3 tenths, which is 30/100, so it is 30%.",
  },
  {
    prompt: "What is 25% of R300?",
    options: ["R75", "R25", "R7 500", "R225"],
    answer: "R75",
    explanation: "25% = 1/4, so find a quarter of R300: R300 ÷ 4 = R75.",
  },
  {
    prompt: "What is 50% of 80 learners?",
    options: ["50", "4", "30", "40"],
    answer: "40",
    explanation: "50% is half, and half of 80 is 40.",
  },
  {
    prompt: "What is 10% of R450?",
    options: ["R4,50", "R450", "R45", "R405"],
    answer: "R45",
    explanation: "10% is 1/10, so R450 ÷ 10 = R45.",
  },
  {
    prompt: "A jacket costs R450. It is sold with a 10% discount. What is the new price?",
    options: ["R45", "R405", "R445", "R495"],
    answer: "R405",
    explanation: "10% of R450 is R45. The new price is R450 − R45 = R405.",
  },
  {
    prompt: "Sipho gets 18 out of 20 in a test. What percentage is this?",
    options: ["90%", "18%", "80%", "20%"],
    answer: "90%",
    explanation: "20 × 5 = 100, so 18/20 = 90/100 = 90%.",
  },
];
// BANK:END

const Percentages = () => (
  <CapsSubjectTopic
    title="Percentages"
    subtitle="Per cent, fractions and decimals as percentages, and finding a percentage of a number"
    learnSteps={learnSteps}
    task="gr6-percentages-t3"
    bank={bank}
    apiPath="/api/caps/grade6"
  />
);

export default Percentages;
