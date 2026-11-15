import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';
import Formula from '../../../../../components/subjects/Formula';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import DecimalGrids from '../../../../../components/diagrams/maths/DecimalGrids';
import FractionRows from '../../../../../components/diagrams/maths/FractionRows';
import { FractionOfAmount } from '../../../../../components/diagrams/maths/Grade7Pictures';
import { DecimalColumns, PlaceValueShift } from '../../../../../components/diagrams/maths/Grade8Graphs';
import { fractionOf } from '../../../../../components/diagrams/maths/grade7Helpers';
import { addCommon, addDecimals, dc, decimalDigits, decimalToFraction, fractionToDecimal, timesPow10 } from '../../../../../components/diagrams/maths/grade8NumberHelpers';

// Every number in the slides below comes from these tested helpers (grade7Helpers, grade8NumberHelpers) and
// lessonsMaths6.test.ts checks that the rendered slides show them.
const F = ({ n, d }: { n: number; d: number }) => <Formula>{String.raw`\frac{${n}}{${d}}`}</Formula>;

const four = decimalDigits(0.04);
const ten = timesPow10(1.2, 1);
const hundred = timesPow10(0.35, 2);
const sumD = addDecimals(2.5, 0.37);
const wrongSum = addDecimals(0.25, 0.37); // the mistake: lining up the last digits
const toDec = fractionToDecimal(3, 4);
const toFrac = decimalToFraction(0.6);
const add = addCommon(1, 2, 1, 4);
const sub = addCommon(3, 5, 1, 10, -1);
const of = fractionOf(5, 8, 40);

// "Check yourself", answers computed from the same helpers
const c1 = timesPow10(0.47, 2);
const c2 = addDecimals(3.8, 1.25);
const c3 = fractionToDecimal(2, 5);
const c4 = addCommon(3, 4, 1, 8, -1);
const c5 = fractionOf(3, 4, 36);

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: 'Decimal place value and multiplying by 10',
    content: slide(
      <>
        <Rule>After the comma come tenths, then hundredths, then thousandths. Multiplying by 10 moves every digit one place to the left; by 100, two places.</Rule>
        <PlaceValueShift value={1.2} times={10} />
        <Worked
          steps={[
            <>In 0,04 the 4 is in the second place after the comma: {four.hundredths} <strong>hundredths</strong> (0 tenths).</>,
            <>1,2 × 10: the 1 moves from ones to tens and the 2 from tenths to ones, so 1,2 × 10 = <strong>{dc(ten)}</strong>.</>,
            <>0,35 × 100: every digit moves two places left, so 0,35 × 100 = <strong>{dc(hundred)}</strong>.</>,
          ]}
        />
        <Mistake>Adding a zero: 1,2 × 10 is not 1,20. 1,20 has the same value as 1,2. The digits must move, giving {dc(ten)}.</Mistake>
      </>,
    ),
  },
  {
    title: 'Adding decimals: commas in a column',
    content: slide(
      <>
        <Rule>Write the numbers with the commas under each other, so tenths line up with tenths. Fill gaps with zeros, then add as with whole numbers.</Rule>
        <DecimalColumns a={2.5} b={0.37} places={2} />
        <Worked
          title="2,5 + 0,37"
          steps={[
            <>Write 2,5 as 2,50 so both numbers have two decimal places.</>,
            <>Add the hundredths: 0 + 7 = 7. Tenths: 5 + 3 = 8. Ones: 2 + 0 = 2.</>,
            <>2,50 + 0,37 = <strong>{dc(sumD)}</strong>.</>,
          ]}
        />
        <Mistake>Lining up the last digits instead of the commas: that adds 0,25 + 0,37 = {dc(wrongSum)}. Estimate first: 2,5 + 0,37 must be a little more than 2,5.</Mistake>
      </>,
    ),
  },
  {
    title: 'Converting between fractions and decimals',
    content: slide(
      <>
        <Rule>To write a fraction as a decimal, make the denominator 10, 100 or 1 000. To write a decimal as a fraction, use its place value, then simplify.</Rule>
        <DecimalGrids values={[toDec.value]} captions={[`${toDec.over} hundredths`]} />
        <Worked
          steps={[
            <><F n={3} d={4} /> = <F n={3 * toDec.scale} d={4 * toDec.scale} /> (× {toDec.scale} top and bottom) = <strong>{dc(toDec.value)}</strong>.</>,
            <>0,6 is 6 tenths: <F n={toFrac.n} d={toFrac.d} />.</>,
            <>Divide top and bottom by {toFrac.simplest.by}: 0,6 = <strong><F n={toFrac.simplest.n} d={toFrac.simplest.d} /></strong>.</>,
          ]}
        />
        <Mistake>Writing the numerator and denominator after the comma: <F n={3} d={4} /> is not 0,34. Three quarters is 75 hundredths, 0,75.</Mistake>
      </>,
    ),
  },
  {
    title: 'Adding and subtracting fractions',
    content: slide(
      <>
        <Rule>Only fractions with the same denominator can be added or subtracted. Rewrite them over a common denominator, add or subtract the numerators, then simplify.</Rule>
        <FractionRows
          rows={[
            { n: 1, d: 2, parts: 4, shaded: [{ count: add.a, color: '#818cf8' }] },
            { n: 1, d: 4, parts: 4, shaded: [{ count: add.b, color: '#34d399' }] },
            { n: add.n, d: add.d, parts: 4, shaded: [{ count: add.a, color: '#818cf8' }, { count: add.b, color: '#34d399' }] },
          ]}
          gaps={[{ text: '+', at: 'bar' }, { text: '=', at: 'bar' }]}
          aria={`Three bars cut into quarters. One half is two quarters, plus one quarter, gives three quarters.`}
        />
        <Worked
          steps={[
            <><F n={1} d={2} /> + <F n={1} d={4} /> = <F n={add.a} d={add.d} /> + <F n={add.b} d={add.d} /> = <strong><F n={add.n} d={add.d} /></strong>.</>,
            <><F n={3} d={5} /> − <F n={1} d={10} /> = <F n={sub.a} d={sub.d} /> − <F n={sub.b} d={sub.d} /> = <F n={sub.n} d={sub.d} />.</>,
            <>Simplify by {sub.simplest.by}: <F n={sub.n} d={sub.d} /> = <strong><F n={sub.simplest.n} d={sub.simplest.d} /></strong>.</>,
          ]}
        />
        <Mistake>Adding tops and bottoms: <F n={1} d={2} /> + <F n={1} d={4} /> is not <F n={2} d={6} />. That is smaller than <F n={1} d={2} />, which cannot be right.</Mistake>
      </>,
    ),
  },
  {
    title: 'A fraction of an amount',
    content: slide(
      <>
        <Rule>To find <F n={5} d={8} /> of an amount, divide by the denominator to find one part, then multiply by the numerator.</Rule>
        <FractionOfAmount n={5} d={8} amount={40} />
        <Worked
          title={<><F n={5} d={8} /> of 40</>}
          steps={[
            <>One eighth: 40 ÷ 8 = {of.one}.</>,
            <>Five eighths: 5 × {of.one} = <strong>{of.result}</strong>.</>,
          ]}
        />
        <Mistake>Dividing by the numerator: 40 ÷ 5 = 8 gives one fifth, not five eighths. The denominator tells you how many equal parts.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        question={
          <ol className="list-decimal space-y-2 pl-5">
            <li>Calculate 0,47 × 100 and 3,8 + 1,25.</li>
            <li>Write <F n={2} d={5} /> as a decimal.</li>
            <li>Calculate <F n={3} d={4} /> − <F n={1} d={8} />.</li>
            <li>Find <F n={3} d={4} /> of R36.</li>
          </ol>
        }
        answer={
          <ol className="list-decimal space-y-2 pl-5">
            <li>{dc(c1)} and {dc(c2)} (3,80 + 1,25).</li>
            <li><F n={2} d={5} /> = <F n={c3.over} d={c3.pow} /> = {dc(c3.value)}.</li>
            <li><F n={c4.a} d={c4.d} /> − <F n={c4.b} d={c4.d} /> = <F n={c4.n} d={c4.d} />.</li>
            <li>R36 ÷ 4 = R{c5.one}, × 3 = R{c5.result}.</li>
          </ol>
        }
      />,
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'What is 3/4 as a decimal?',
    options: ['0,75', '0,34', '0,8', '0,7'],
    answer: '0,75',
    explanation: 'Divide the numerator by the denominator: 3 ÷ 4 = 0,75.',
  },
  {
    prompt: 'Write 0,6 as a simplified fraction.',
    options: ['3/5', '6/5', '6/10', '1/6'],
    answer: '3/5',
    explanation: '0,6 = 6/10, which simplifies to 3/5.',
  },
  {
    prompt: 'Calculate 1/2 + 1/4.',
    options: ['3/4', '2/6', '1/8', '1'],
    answer: '3/4',
    explanation: 'Use a common denominator: 2/4 + 1/4 = 3/4.',
  },
  {
    prompt: 'Calculate 2,5 + 0,37.',
    options: ['2,87', '2,77', '2,53', '2,13'],
    answer: '2,87',
    explanation: 'Align decimal places and add.',
  },
  {
    prompt: 'What is 5/8 of 40?',
    options: ['25', '20', '32', '15'],
    answer: '25',
    explanation: '(5/8) × 40 = 5 × 5 = 25.',
  },
  {
    prompt: 'What is 1,2 × 10?',
    options: ['12', '1,2', '0,12', '120'],
    answer: '12',
    explanation: 'Multiplying by 10 shifts the decimal one place right.',
  },
  {
    prompt: 'Calculate 3/5 - 1/10.',
    options: ['1/2', '2/5', '3/10', '4/10'],
    answer: '1/2',
    explanation: 'Convert 3/5 to 6/10, then 6/10 - 1/10 = 5/10 = 1/2.',
  },
  {
    prompt: 'In 0,04, the digit 4 represents...',
    options: ['4 hundredths', '4 tenths', '4 thousandths', '4 ones'],
    answer: '4 hundredths',
    explanation: '0,04 means four parts out of one hundred.',
  },
];

const CommonAndDecimalFractions = () => (
  <CapsSubjectTopic
    title="Common and Decimal Fractions"
    subtitle="Conversions and operations with fraction and decimal forms"
    learnSteps={learnSteps}
    task="gr8-common-and-decimal-fractions-t3"
    bank={bank}
    apiPath="/api/caps/math"
  />
);

export default CommonAndDecimalFractions;
