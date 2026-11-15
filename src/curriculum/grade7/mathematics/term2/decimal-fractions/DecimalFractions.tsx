import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import DecimalGrids from '../../../../../components/diagrams/maths/DecimalGrids';
import { ColumnSum, DecimalProductGrid, RoundingLine, ValueChart } from '../../../../../components/diagrams/maths/Grade7Number';
import { addDec, compareDec, dec, digitAt, divDec, mulDec, roundDec, subDec } from '../../../../../components/diagrams/maths/grade7Helpers';

// Decimals are written with the South African comma. Every number in the slides below comes from tested
// helpers (grade7Helpers.test.ts, decimalLesson.test.ts). The practice questions use a decimal point.
const place = { value: 7.43, tenths: digitAt(7.43, 1), hundredths: digitAt(7.43, 2) };
const cmp = { a: 0.8, b: 0.75, sign: compareDec(0.8, 0.75) };
const sum = addDec(3.6, 2.45);
const diff = subDec(9.2, 3.78);
const money = addDec(12.5, 7.75);
const prod = mulDec(0.4, 0.5);
const quot = divDec(6.3, 0.9);
const round = { value: 4.678, tenths: digitAt(4.678, 1), next: digitAt(4.678, 2), result: roundDec(4.678, 1) };
const check = {
  big: compareDec(0.6, 0.59),
  sum: addDec(5.7, 1.35),
  prod: mulDec(0.3, 0.8),
  round: roundDec(6.248, 1),
};
const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: 'Place value after the comma',
    content: slide(
      <>
        <Rule>The first digit after the comma is tenths, the second is hundredths. Each place is ten times smaller than the one before.</Rule>
        <ValueChart digits={['7', '4', '3']} heads={['ones', 'tenths', 'hundredths']} commaAfter={0} highlight={1} caption={`${dec(place.value)}: the 4 is in the tenths place`} />
        <Worked
          title={dec(place.value)}
          steps={[
            <>7 is in the ones place.</>,
            <>{place.tenths} is in the <strong>tenths</strong> place: {place.tenths} tenths = {dec(place.tenths / 10)}.</>,
            <>{place.hundredths} is in the hundredths place: {place.hundredths} hundredths = {dec(place.hundredths / 100, 2)}.</>,
          ]}
        />
        <Mistake>Calling the first digit after the comma the ones. The ones place is the digit before the comma.</Mistake>
      </>,
    ),
  },
  {
    title: 'Compare decimals',
    content: slide(
      <>
        <Rule>Write both numbers with the same number of decimal places. Then compare them like whole numbers.</Rule>
        <DecimalGrids values={[cmp.a, cmp.b]} signs={['>']} captions={['80 hundredths', '75 hundredths']} places={2} />
        <Worked
          title={`Which is greater: ${dec(cmp.a)} or ${dec(cmp.b)}?`}
          steps={[
            <>Write {dec(cmp.a)} as {dec(cmp.a, 2)}.</>,
            <>Compare 80 hundredths with 75 hundredths: 80 is more, so <strong>{dec(cmp.a)} &gt; {dec(cmp.b)}</strong>.</>,
          ]}
        />
        <Mistake>Thinking the longer number is bigger. {dec(cmp.b)} has more digits, but it is less than {dec(cmp.a)}.</Mistake>
      </>,
    ),
  },
  {
    title: 'Add and subtract decimals',
    content: slide(
      <>
        <Rule>Line up the commas. Fill gaps with zeros. Then add or subtract as with whole numbers.</Rule>
        <ColumnSum a={3.6} b={2.45} op="+" result={sum} places={2} />
        <Worked
          steps={[
            <>{dec(3.6)} + {dec(2.45)}: write {dec(3.6, 2)} + {dec(2.45, 2)} = <strong>{dec(sum, 2)}</strong>.</>,
            <>{dec(9.2)} − {dec(3.78)}: write {dec(9.2, 2)} − {dec(3.78, 2)} = <strong>{dec(diff, 2)}</strong>.</>,
            <>Money: R{dec(12.5, 2)} + R{dec(7.75, 2)} = <strong>R{dec(money, 2)}</strong>.</>,
          ]}
        />
        <Mistake>Lining up the right-hand digits and not the commas. Then tenths get added to hundredths and the answer is wrong.</Mistake>
      </>,
    ),
  },
  {
    title: 'Multiply and divide decimals',
    content: slide(
      <>
        <Rule>To multiply, ignore the commas, multiply, then put back as many decimal places as the two numbers had. To divide, make the divisor whole first.</Rule>
        <DecimalProductGrid a={0.4} b={0.5} />
        <Worked
          steps={[
            <>{dec(0.4)} × {dec(0.5)}: 4 × 5 = 20. Two decimal places in all, so {dec(prod, 2)} = <strong>{dec(prod)}</strong>.</>,
            <>{dec(6.3)} ÷ {dec(0.9)}: multiply both by 10 to get 63 ÷ 9 = <strong>{quot}</strong>.</>,
          ]}
        />
        <Mistake>Writing 0,4 × 0,5 = 2 or 0,02. The product 20 needs two decimal places, so it is 0,20.</Mistake>
      </>,
    ),
  },
  {
    title: 'Rounding decimals',
    content: slide(
      <>
        <Rule>To round to the nearest tenth, look at the hundredths digit. If it is 5 or more, round up. If it is 4 or less, leave the tenths digit.</Rule>
        <RoundingLine value={round.value} />
        <Worked
          title={`Round ${dec(round.value)} to the nearest tenth`}
          steps={[
            <>The tenths digit is {round.tenths}. The next digit is {round.next}.</>,
            <>{round.next} is 5 or more, so round up: <strong>{dec(round.result)}</strong>.</>,
          ]}
        />
        <Mistake>Just dropping the other digits and writing {dec(4.6)}. The digit after the tenths is 7, so the tenths digit goes up by 1.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        question={
          <ol className="list-decimal space-y-2 pl-5">
            <li>Which is greater: {dec(0.6)} or {dec(0.59)}?</li>
            <li>Calculate {dec(5.7)} + {dec(1.35)}.</li>
            <li>Calculate {dec(0.3)} × {dec(0.8)}.</li>
            <li>Round {dec(6.248)} to the nearest tenth.</li>
          </ol>
        }
        answer={
          <ol className="list-decimal space-y-2 pl-5">
            <li>{dec(0.6)}, because {dec(0.6, 2)} &gt; {dec(0.59, 2)}.</li>
            <li>{dec(check.sum, 2)}.</li>
            <li>3 × 8 = 24, two decimal places: {dec(check.prod, 2)}.</li>
            <li>The next digit is 4, so round down: {dec(check.round)}.</li>
          </ol>
        }
      />,
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'In 7.43, the digit 4 is in the...',
    options: ['tenths place', 'hundredths place', 'ones place', 'thousands place'],
    answer: 'tenths place',
    explanation: 'The first digit after the decimal point is tenths.',
  },
  {
    prompt: 'Which number is greater?',
    options: ['0.8', '0.75', 'They are equal', 'Cannot compare'],
    answer: '0.8',
    explanation: '0.8 = 0.80, which is greater than 0.75.',
  },
  {
    prompt: 'Calculate 3.6 + 2.45.',
    options: ['6.05', '5.95', '6.5', '5.05'],
    answer: '6.05',
    explanation: 'Line up decimal points before adding.',
  },
  {
    prompt: 'Calculate 9.2 − 3.78.',
    options: ['5.42', '6.58', '5.12', '4.42'],
    answer: '5.42',
    explanation: 'Write 9.2 as 9.20, then subtract.',
  },
  {
    prompt: 'Calculate 0.4 × 0.5.',
    options: ['0.2', '0.02', '2', '0.9'],
    answer: '0.2',
    explanation: '4 × 5 = 20, then place two decimal places: 0.20.',
  },
  {
    prompt: 'Calculate 6.3 ÷ 0.9.',
    options: ['7', '0.7', '70', '6'],
    answer: '7',
    explanation: '63 ÷ 9 = 7, so 6.3 ÷ 0.9 = 7.',
  },
  {
    prompt: 'R12.50 + R7.75 =',
    options: ['R20.25', 'R19.25', 'R20.75', 'R21.25'],
    answer: 'R20.25',
    explanation: 'Add rand and cents carefully using place value.',
  },
  {
    prompt: 'Round 4.678 to the nearest tenth.',
    options: ['4.7', '4.6', '4.68', '5.0'],
    answer: '4.7',
    explanation: 'The hundredths digit is 7, so round the tenths digit up.',
  },
];

const DecimalFractions = () => (
  <CapsSubjectTopic
    title="Decimal Fractions"
    subtitle="Place value, ordering, and decimal operations in context"
    learnSteps={learnSteps}
    task="gr7-decimal-fractions-t2"
    bank={bank}
    apiPath="/api/caps/math"
  />
);

export default DecimalFractions;
