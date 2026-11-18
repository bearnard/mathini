import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { SegmentBar } from '../../../../../components/diagrams/maths/Grade8FinancePictures';
import { hirePurchase, simpleInterestByYear, toForeign, toRand } from '../../../../../components/diagrams/maths/grade8Finance';
import { formatRand } from '../../../../../components/diagrams/maths/mathsHelpers';

// Every number in the slides comes from grade8Finance (money in whole cents; tested in grade8Finance.test.ts); g8FinanceT1.test.ts checks the rendered text.
// CAPS Grade 8 asks for repeated calculation, so simple interest is built year by year, not with a formula. Compound interest is Grade 9.
const R = formatRand;
const must = <T,>(v: T | null): T => v as T;

const si = must(simpleInterestByYear(600_00, 7, 3));
const loan = must(simpleInterestByYear(5_000_00, 8, 2));

const hp = hirePurchase(3_000_00, 300_00, 250_00, 12);
const wrongTotal = 3_000_00;

const dollar = 18_00;
const usd = must(toForeign(900_00, dollar));
const rand = toRand(50, dollar);
const wrongRate = 50 + dollar / 100;

const c1 = must(simpleInterestByYear(1_000_00, 5, 2));
const c2 = hirePurchase(2_000_00, 200_00, 160_00, 12);
const c3 = toRand(30, 19_00);
const c4 = must(toForeign(600_00, 20_00));

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: 'Simple interest, year by year',
    content: slide(
      <>
        <Rule>Interest is money paid for using money. With simple interest the same amount is earned every year, always worked out on the original amount. Calculate one year, then repeat.</Rule>
        <SegmentBar
          segments={[
            { label: `Year 1 ${R(si.perYear)}`, value: 1 },
            { label: `Year 2 ${R(si.perYear)}`, value: 1 },
            { label: `Year 3 ${R(si.perYear)}`, value: 1 },
          ]}
          total={`${R(si.total)} interest in 3 years`}
          aria={`Three equal blocks, one for each year, each showing ${R(si.perYear)} of interest, ${R(si.total)} altogether.`}
        />
        <Worked
          title={<>{R(600_00)} invested at 7% a year for 3 years.</>}
          steps={[
            <>Interest for 1 year: 7% of {R(600_00)} = <strong>{R(si.perYear)}</strong>.</>,
            <>3 years: {R(si.perYear)} + {R(si.perYear)} + {R(si.perYear)} = <strong>{R(si.total)}</strong>.</>,
            <>The investment grows to {R(600_00)} + {R(si.total)} = <strong>{R(si.amount)}</strong>.</>,
          ]}
        />
        <Mistake>
          Working out each year's interest on the growing amount: 7% of {R(600_00 + si.perYear)} is not the interest. Simple interest uses {R(600_00)} every year.
        </Mistake>
      </>,
    ),
  },
  {
    title: 'Loans',
    content: slide(
      <>
        <Rule>When you borrow money you pay back the amount borrowed plus interest. Amount to pay back = loan + total interest.</Rule>
        <SegmentBar
          segments={[
            { label: 'Loan', value: 4 },
            { label: 'Interest', value: 2 },
          ]}
          total={`Pay back ${R(loan.amount)}`}
          aria={`A bar for a loan of ${R(5_000_00)} plus interest of ${R(loan.total)}, making ${R(loan.amount)} to pay back. The bar is not drawn to scale.`}
        />
        <Worked
          title={<>Borrow {R(5_000_00)} at 8% simple interest for 2 years.</>}
          steps={[
            <>Interest for 1 year: 8% of {R(5_000_00)} = <strong>{R(loan.perYear)}</strong>.</>,
            <>2 years: {R(loan.perYear)} × 2 = <strong>{R(loan.total)}</strong>.</>,
            <>You pay back {R(5_000_00)} + {R(loan.total)} = <strong>{R(loan.amount)}</strong>.</>,
          ]}
        />
        <Mistake>
          Paying back only the interest: {R(loan.total)} is the cost of the loan, but you must also repay the {R(5_000_00)}.
        </Mistake>
      </>,
    ),
  },
  {
    title: 'Hire purchase',
    content: slide(
      <>
        <Rule>With hire purchase you pay a deposit and then equal monthly instalments. Total paid = deposit + all instalments. It usually costs more than the cash price.</Rule>
        <SegmentBar
          segments={[
            { label: 'Deposit', value: 1 },
            { label: '12 instalments', value: 4 },
          ]}
          total={`Total paid ${R(hp.paid)}`}
          aria={`A bar with a deposit of ${R(300_00)} and 12 instalments of ${R(250_00)}, making ${R(hp.paid)} altogether. The bar is not drawn to scale.`}
        />
        <Worked
          title={<>A fridge costs {R(3_000_00)} cash. Hire purchase: {R(300_00)} deposit and 12 instalments of {R(250_00)}.</>}
          steps={[
            <>Instalments: 12 × {R(250_00)} = <strong>{R(hp.instalments)}</strong>.</>,
            <>Total paid: {R(300_00)} + {R(hp.instalments)} = <strong>{R(hp.paid)}</strong>.</>,
            <>Extra cost: {R(hp.paid)} − {R(3_000_00)} = <strong>{R(hp.extra)}</strong> more than the cash price.</>,
          ]}
        />
        <Mistake>
          Forgetting the deposit: the 12 instalments come to {R(hp.instalments)}, but you also pay the {R(300_00)} deposit, so the total is {R(hp.paid)}, not {R(wrongTotal)}.
        </Mistake>
      </>,
    ),
  },
  {
    title: 'Exchange rates',
    content: slide(
      <>
        <Rule>An exchange rate says how many rand one unit of a foreign currency costs. To change to rand, multiply by the rate. To change to the foreign currency, divide by the rate.</Rule>
        <SegmentBar
          segments={[
            { label: R(dollar), value: 1 },
            { label: R(dollar), value: 1 },
            { label: R(dollar), value: 1 },
          ]}
          total={`Each block is $1: $3 = ${R(3 * dollar)}`}
          aria={`Three equal blocks. Each block is one dollar, worth ${R(dollar)}, so three dollars are ${R(3 * dollar)}.`}
        />
        <Worked
          title={<>The rate is {R(dollar)} for $1.</>}
          steps={[
            <>$50 in rand: 50 × {R(dollar)} = <strong>{R(rand)}</strong>.</>,
            <>{R(900_00)} in dollars: {R(900_00)} ÷ {R(dollar)} = <strong>${usd}</strong>.</>,
          ]}
        />
        <Mistake>
          Adding the rate: $50 is not 50 + {dollar / 100} = {wrongRate}. Each dollar is worth {R(dollar)}, so multiply.
        </Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          <>How much interest does {R(1_000_00)} earn in 2 years at 5% simple interest?</>,
          <>A TV costs {R(2_000_00)} cash. On hire purchase you pay {R(200_00)} deposit and 12 instalments of {R(160_00)}. What is the total paid?</>,
          <>The rate is {R(19_00)} for $1. How many rand is $30?</>,
          <>The rate is {R(20_00)} for €1. How many euros is {R(600_00)}?</>,
        ]}
        answers={[
          <>{R(c1.perYear)} a year, so {R(c1.total)}.</>,
          <>12 × {R(160_00)} = {R(c2.instalments)}, plus the deposit: {R(c2.paid)}.</>,
          <>30 × {R(19_00)} = {R(c3)}.</>,
          <>{R(600_00)} ÷ {R(20_00)} = €{c4}.</>,
        ]}
      />,
    ),
  },
];

export const bank: CapsItem[] = [
  {
    prompt: "R1 000 is invested at 5% simple interest per year. How much interest is earned in the first year?",
    options: ["R5,00", "R500,00", "R50,00", "R1 050,00"],
    answer: "R50,00",
    explanation: "5% of R1 000 = R50.",
  },
  {
    prompt: "R2 000 is invested at 6% simple interest for 3 years. How much interest is earned in total?",
    options: ["R360,00", "R120,00", "R2 360,00", "R180,00"],
    answer: "R360,00",
    explanation: "6% of R2 000 = R120 a year; 3 × R120 = R360.",
  },
  {
    prompt: "Lerato invests R800 at 5% simple interest for 2 years. How much is it worth at the end?",
    options: ["R80,00", "R840,00", "R1 600,00", "R880,00"],
    answer: "R880,00",
    explanation: "5% of R800 = R40 a year; 2 years = R80; R800 + R80 = R880.",
  },
  {
    prompt: "R500 earns R75 simple interest in 3 years, the same amount each year. How much interest is earned each year?",
    options: ["R75,00", "R25,00", "R225,00", "R575,00"],
    answer: "R25,00",
    explanation: "R75 ÷ 3 = R25 a year.",
  },
  {
    prompt: "Mpho borrows R4 000 at 10% simple interest for 2 years. How much must he pay back?",
    options: ["R800,00", "R4 400,00", "R4 800,00", "R8 000,00"],
    answer: "R4 800,00",
    explanation: "10% of R4 000 = R400 a year; 2 years = R800; R4 000 + R800 = R4 800.",
  },
  {
    prompt: "A loan of R3 000 charges 8% simple interest per year. What is the interest for 1 year?",
    options: ["R240,00", "R24,00", "R2 400,00", "R3 240,00"],
    answer: "R240,00",
    explanation: "8% of R3 000 = R240.",
  },
  {
    prompt: "A fridge costs R4 000 cash. On hire purchase you pay a R400 deposit and 10 instalments of R400. What is the total paid?",
    options: ["R4 000,00", "R800,00", "R4 800,00", "R4 400,00"],
    answer: "R4 400,00",
    explanation: "10 × R400 = R4 000; plus the R400 deposit gives R4 400.",
  },
  {
    prompt: "A TV costs R2 500 cash. On hire purchase you pay R200 deposit and 12 instalments of R210. How much more than the cash price do you pay?",
    options: ["R2 720,00", "R220,00", "R2 520,00", "R10,00"],
    answer: "R220,00",
    explanation: "12 × R210 = R2 520; plus R200 = R2 720; R2 720 − R2 500 = R220.",
  },
  {
    prompt: "A laptop costs R6 000 cash. Hire purchase is R600 deposit and 24 instalments of R250. Which statement is true?",
    options: ["You pay R600,00 less than the cash price", "You pay the same as the cash price", "You pay R600,00 more than the cash price", "You pay R6 000,00 more than the cash price"],
    answer: "You pay R600,00 more than the cash price",
    explanation: "24 × R250 = R6 000; plus R600 deposit = R6 600, which is R600 more than R6 000.",
  },
  {
    prompt: "At R19 for each dollar, how many rand is $40?",
    options: ["R760,00", "R59,00", "R21,00", "R7 600,00"],
    answer: "R760,00",
    explanation: "Multiply by the rate: 40 × R19 = R760.",
  },
  {
    prompt: "The rate is R20 for €1. How many euros do you get for R500?",
    options: ["€10 000", "€520", "€480", "€25"],
    answer: "€25",
    explanation: "Divide by the rate: R500 ÷ R20 = 25.",
  },
  {
    prompt: "A jacket costs $60 in the USA. The rate is R18 for $1. What is the price in rand?",
    options: ["R78,00", "R1 080,00", "R3,33", "R10 800,00"],
    answer: "R1 080,00",
    explanation: "Multiply by the rate: 60 × R18 = R1 080.",
  },
  {
    prompt: "Simple interest is calculated on which amount each year?",
    options: ["the amount including earlier interest", "the first year only", "the original amount every year", "the deposit only"],
    answer: "the original amount every year",
    explanation: "With simple interest the same interest is earned every year on the original amount.",
  },
  {
    prompt: "R900 grows to R1 026 in 3 years at simple interest. How much interest is earned each year?",
    options: ["R42,00", "R126,00", "R1 026,00", "R300,00"],
    answer: "R42,00",
    explanation: "Total interest R1 026 − R900 = R126; R126 ÷ 3 = R42 a year.",
  },
];

const InterestHirePurchaseExchange = () => (
  <CapsSubjectTopic
    title="Interest, Hire Purchase and Exchange Rates"
    subtitle="Simple interest year by year, loans, hire purchase and changing money"
    learnSteps={learnSteps}
    task="gr8-interest-hire-purchase-exchange-t1"
    bank={bank}
    apiPath="/api/caps/math"
  />
);

export default InterestHirePurchaseExchange;
