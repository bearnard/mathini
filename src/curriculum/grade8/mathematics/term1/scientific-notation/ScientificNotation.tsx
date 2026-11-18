import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { SciShift } from '../../../../../components/diagrams/maths/Grade8FinancePictures';
import { fromSci, sciNotation, spaced } from '../../../../../components/diagrams/maths/grade8Finance';

// Every number in the slides comes from grade8Finance (tested in grade8Finance.test.ts); g8FinanceT1.test.ts checks the rendered text.
const pw = (b: number | string, e: number | string) => (
  <>
    {b}
    <sup className="text-[0.75em] font-bold">{e}</sup>
  </>
);
const sci = (n: number) => {
  const s = sciNotation(n)!;
  return { mantissa: s.mantissa, exp: s.exp, text: <>{s.mantissa} × {pw(10, s.exp)}</> };
};

const s25 = sci(25);
const s250 = sci(250);
const s2500 = sci(2500);
const s25m = sci(25_000_000);
const s34 = sci(3_400_000);
const s6 = sci(60_000);
const big = sci(420_000);
const small = sci(98_000);
const back = fromSci('6,1', 4) ?? 0;
const mistakeTwentyFive = sci(25_000);

const c1 = sci(8_000);
const c2 = sci(730_000);
const c3 = fromSci('5,4', 5) ?? 0;
const c4 = fromSci('3', 6) ?? 0;

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: 'Powers of ten',
    content: slide(
      <>
        <Rule>{pw(10, 'n')} is 1 followed by n zeros. Each time the exponent goes up by 1 the number is 10 times bigger.</Rule>
        <SciShift digits="1000" exp={3} caption="10³ = 1 000" />
        <Worked
          steps={[
            <>{pw(10, 2)} = 10 × 10 = <strong>{spaced(10 ** 2)}</strong>.</>,
            <>{pw(10, 3)} = 10 × 10 × 10 = <strong>{spaced(10 ** 3)}</strong>, which is 1 and 3 zeros.</>,
            <>{pw(10, 6)} is 1 and 6 zeros: <strong>{spaced(10 ** 6)}</strong>.</>,
          ]}
        />
        <Mistake>
          Multiplying the 10 by the exponent: {pw(10, 3)} is not 10 × 3 = 30. It is 1 and 3 zeros, {spaced(10 ** 3)}.
        </Mistake>
      </>,
    ),
  },
  {
    title: 'Writing a number in scientific notation',
    content: slide(
      <>
        <Rule>
          Scientific notation writes a number as a × {pw(10, 'n')} where a is at least 1 and less than 10. The exponent n is the number of places the comma moves to get from a to the number.
        </Rule>
        <SciShift digits="2500" exp={3} caption="2 500 = 2,5 × 10³" />
        <Worked
          steps={[
            <>25 = {s25.text}: the comma in {s25.mantissa} moves {s25.exp} place.</>,
            <>250 = {s250.text}: it moves {s250.exp} places.</>,
            <>{spaced(2500)} = {s2500.text}: it moves {s2500.exp} places.</>,
          ]}
        />
        <Mistake>
          Writing the first number too big: {spaced(25_000)} is not 25 × {pw(10, 3)}, because 25 is more than 10. Write {mistakeTwentyFive.text}.
        </Mistake>
      </>,
    ),
  },
  {
    title: 'Very large numbers',
    content: slide(
      <>
        <Rule>For a very large number, write the first digits as a number between 1 and 10 and count the places after the first digit. That count is the exponent.</Rule>
        <SciShift digits="3400000" exp={6} caption="3 400 000 = 3,4 × 10⁶" />
        <Worked
          steps={[
            <>25 million = {spaced(25_000_000)} has 8 digits, so the exponent is 7: <strong>{s25m.text}</strong>.</>,
            <>{spaced(3_400_000)} has 7 digits, so the exponent is 6: <strong>{s34.text}</strong>.</>,
            <>{spaced(60_000)} = <strong>{s6.text}</strong>. The number 6 needs no comma.</>,
          ]}
        />
        <Mistake>
          Counting the zeros instead of the places: {spaced(3_400_000)} has 5 zeros, but the exponent is {s34.exp}.
        </Mistake>
      </>,
    ),
  },
  {
    title: 'Back to an ordinary number, and comparing',
    content: slide(
      <>
        <Rule>
          To go back, move the comma to the right as many places as the exponent says. To compare, look at the exponents first: the bigger exponent is the bigger number.
        </Rule>
        <SciShift digits="61000" exp={4} caption="6,1 × 10⁴ = 61 000" />
        <Worked
          steps={[
            <>6,1 × {pw(10, 4)}: move the comma 4 places to get <strong>{spaced(back)}</strong>.</>,
            <>Compare {big.text} and {small.text}: the exponent 5 is bigger than 4.</>,
            <>Check: {spaced(420_000)} is bigger than {spaced(98_000)}, so <strong>{big.text}</strong> is bigger.</>,
          ]}
        />
        <Mistake>
          Picking the bigger first number: 9,8 is bigger than 4,2, but {small.text} is the smaller number because its exponent is smaller.
        </Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          <>Write {spaced(8000)} in scientific notation.</>,
          <>Write {spaced(730_000)} in scientific notation.</>,
          <>Write 5,4 × {pw(10, 5)} as an ordinary number.</>,
          <>Write 3 × {pw(10, 6)} as an ordinary number.</>,
        ]}
        answers={[
          <>{c1.text}: the comma moves {c1.exp} places.</>,
          <>{c2.text}: the comma moves {c2.exp} places.</>,
          <>Move the comma 5 places: {spaced(c3)}.</>,
          <>3 followed by 6 zeros: {spaced(c4)}.</>,
        ]}
      />,
    ),
  },
];

export const bank: CapsItem[] = [
  {
    prompt: "Which number is 10⁵ written in full?",
    options: ["10 000", "1 000 000", "100 000", "50"],
    answer: "100 000",
    explanation: "10⁵ is 1 followed by 5 zeros: 100 000.",
  },
  {
    prompt: "Express 4 000 in scientific notation.",
    options: ["4 × 10³", "4 × 10⁴", "4 × 10²", "0,4 × 10³"],
    answer: "4 × 10³",
    explanation: "The comma moves 3 places, so 4 000 = 4 × 10³.",
  },
  {
    prompt: "Which is 7 200 in scientific notation?",
    options: ["7,2 × 10²", "7,2 × 10⁴", "7,2 × 10⁵", "7,2 × 10³"],
    answer: "7,2 × 10³",
    explanation: "The first number is 7,2 and the comma moves 3 places: 7,2 × 10³.",
  },
  {
    prompt: "Express 530 000 in scientific notation.",
    options: ["5,3 × 10⁶", "5,3 × 10⁵", "5,3 × 10⁴", "5,3 × 10⁷"],
    answer: "5,3 × 10⁵",
    explanation: "530 000 has 6 digits, so the exponent is 5: 5,3 × 10⁵.",
  },
  {
    prompt: "Write 18 000 000 in scientific notation.",
    options: ["1,8 × 10⁶", "1,8 × 10⁸", "1,8 × 10⁷", "1,8 × 10⁵"],
    answer: "1,8 × 10⁷",
    explanation: "18 000 000 has 8 digits, so the exponent is 7: 1,8 × 10⁷.",
  },
  {
    prompt: "Write 9,4 × 10³ as an ordinary number.",
    options: ["9 400", "94 000", "940", "9 004"],
    answer: "9 400",
    explanation: "Move the comma 3 places to the right: 9 400.",
  },
  {
    prompt: "Express 3,6 × 10⁶ in full as an ordinary number.",
    options: ["360 000", "36 000 000", "3 600", "3 600 000"],
    answer: "3 600 000",
    explanation: "Move the comma 6 places to the right: 3 600 000.",
  },
  {
    prompt: "The comma moves n places to write 85 000 as 8,5 × 10ⁿ. What is n?",
    options: ["3", "4", "5", "2"],
    answer: "4",
    explanation: "85 000 has 5 digits, so the comma moves 4 places.",
  },
  {
    prompt: "Which number is the greatest?",
    options: ["9,1 × 10⁴", "8,9 × 10⁴", "6,3 × 10⁵", "7,5 × 10³"],
    answer: "6,3 × 10⁵",
    explanation: "6,3 × 10⁵ = 630 000, which is more than the others.",
  },
  {
    prompt: "Which number is the smallest?",
    options: ["1,7 × 10⁴", "5,2 × 10⁴", "3,1 × 10⁵", "4,4 × 10⁵"],
    answer: "1,7 × 10⁴",
    explanation: "1,7 × 10⁴ = 17 000; the others are all bigger.",
  },
  {
    prompt: "The Sun is about 150 000 000 km from Earth. Which is that in scientific notation?",
    options: ["1,5 × 10⁷", "1,5 × 10⁹", "1,5 × 10⁶", "1,5 × 10⁸"],
    answer: "1,5 × 10⁸",
    explanation: "150 000 000 has 9 digits, so the exponent is 8.",
  },
  {
    prompt: "Write 4,8 × 10² as an ordinary number.",
    options: ["48", "480", "4 800", "408"],
    answer: "480",
    explanation: "Move the comma 2 places to the right: 480.",
  },
  {
    prompt: "Which power of ten is equal to 1 000 000?",
    options: ["10⁵", "10⁷", "10⁶", "10³"],
    answer: "10⁶",
    explanation: "1 000 000 is 1 followed by 6 zeros.",
  },
  {
    prompt: "Write 7 × 10⁵ as an ordinary number.",
    options: ["700 000", "70 000", "7 000 000", "7 005"],
    answer: "700 000",
    explanation: "7 followed by 5 zeros is 700 000.",
  },
];

const ScientificNotation = () => (
  <CapsSubjectTopic
    title="Scientific Notation"
    subtitle="Writing large numbers as a × 10ⁿ, and reading them back"
    learnSteps={learnSteps}
    task="gr8-scientific-notation-t1"
    bank={bank}
    apiPath="/api/caps/math"
  />
);

export default ScientificNotation;
