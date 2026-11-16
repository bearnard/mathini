import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { MathematicsItem, LearnStep } from '../../_shared/types';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { Flow } from '../../../../../components/diagrams/maths/Grade10Maths';
import { dec } from '../../../../../components/diagrams/maths/grade10Helpers';
import * as t from '../../../../../components/diagrams/maths/grade10Helpers3';

// Every number in the slides below comes from the tested helpers in grade10Helpers3.ts (grade10Helpers3.test.ts, g10MathsBankT3.test.ts).
const r = t.rand;

// slide 1: simple interest
const si = { p: 4000, rate: 8, years: 3, interest: t.simpleInterest(4000, 8, 3), amount: t.simpleAmount(4000, 8, 3) };
// slide 2: compound interest
const ci = { p: 5000, rate: 10, years: 2, amount: t.compoundAmount(5000, 10, 2) };
const ciMonthly = t.compoundMonthly(12000, 6, 1);
const diff = t.compoundAmount(1000, 10, 2) - t.simpleAmount(1000, 10, 2);
// slide 3: hire purchase
const hp = t.hirePurchase(9000, 10, 12, 2);
// slide 4: inflation, growth, exchange rates
const infl = t.compoundAmount(200, 5, 3);
const pop = Math.round(t.compoundAmount(20000, 3, 4) / 10) * 10;
const dollars = 925 / 18.5;

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: 'Simple interest',
    content: slide(
      <>
        <Rule>With simple interest you earn interest on the original amount only. A = P(1 + in), where P is the amount invested, i is the rate as a decimal (8% = 0,08) and n is the number of years.</Rule>
        <Flow steps={[{ label: 'Invested', value: r(si.p) }, { label: 'Interest', value: r(si.interest) }, { label: 'Amount', value: r(si.amount) }]} />
        <Worked
          title={`${r(si.p)} at ${si.rate}% p.a. simple interest for ${si.years} years`}
          steps={[
            <>Write the rate as a decimal: {si.rate}% = 0,08.</>,
            <>A = {si.p}(1 + 0,08 × {si.years}) = {si.p} × {dec(1 + 0.08 * si.years, 2)}.</>,
            <>A = <strong>{r(si.amount)}</strong>. The interest is {r(si.amount)} − {r(si.p)} = {r(si.interest)}.</>,
            <>Quick check on a rate such as 7,5%: use 0,075 in the formula.</>,
          ]}
        />
        <Mistake>Using 8 instead of 0,08 in the formula. The rate must be a decimal (a percentage divided by 100).</Mistake>
      </>,
    ),
  },
  {
    title: 'Compound interest',
    content: slide(
      <>
        <Rule>With compound interest the interest is added each period and earns interest too. A = P(1 + i)ⁿ. If the interest is added monthly, use i = rate ÷ 12 and n = months.</Rule>
        <Flow steps={[{ label: 'Start', value: r(ci.p) }, { label: 'After year 1', value: r(t.compoundAmount(ci.p, ci.rate, 1)) }, { label: 'After year 2', value: r(ci.amount) }]} />
        <Worked
          title={`${r(ci.p)} at ${ci.rate}% p.a. compound interest for ${ci.years} years`}
          steps={[
            <>A = {ci.p}(1 + 0,1)² = {ci.p} × 1,21.</>,
            <>A = <strong>{r(ci.amount)}</strong>.</>,
            <>{r(12000)} at 6% p.a. compounded monthly for 1 year: A = 12 000(1 + 0,06 ÷ 12)¹² = <strong>{r(ciMonthly)}</strong>.</>,
            <>Over 2 years at 10%, R1 000 earns {r(diff)} more with compound than with simple interest.</>,
          ]}
        />
        <Mistake>Using simple interest for several periods. Compound interest grows faster: the power ⁿ is what makes the difference.</Mistake>
      </>,
    ),
  },
  {
    title: 'Hire purchase',
    content: slide(
      <>
        <Rule>Hire purchase means you pay a deposit and then pay the balance, plus simple interest, in monthly instalments. Find the deposit, the balance, the amount with interest, and divide by the number of months.</Rule>
        <Flow
          steps={[
            { label: 'Deposit 10%', value: r(hp.deposit) },
            { label: 'Balance', value: r(hp.balance) },
            { label: 'With interest', value: r(hp.amount) },
            { label: 'Per month', value: r(hp.monthly) },
          ]}
        />
        <Worked
          title="A R9 000 laptop, 10% deposit, 12% p.a. simple interest, 2 years"
          steps={[
            <>Deposit: 10% of 9 000 = {r(hp.deposit)}. Balance: 9 000 − {hp.deposit} = {r(hp.balance)}.</>,
            <>A = {hp.balance}(1 + 0,12 × 2) = <strong>{r(hp.amount)}</strong>.</>,
            <>Instalment: {r(hp.amount)} ÷ 24 = <strong>{r(hp.monthly)}</strong>.</>,
            <>The total paid is {r(hp.total)}, which is more than the cash price.</>,
          ]}
        />
        <Mistake>Charging interest on the whole price. Interest is only on the balance after the deposit.</Mistake>
      </>,
    ),
  },
  {
    title: 'Inflation, population growth and exchange rates',
    content: slide(
      <>
        <Rule>Inflation and population growth use the compound formula A = P(1 + i)ⁿ. To change currency, multiply or divide by the exchange rate.</Rule>
        <Flow steps={[0, 1, 2, 3].map((n) => ({ label: `Year ${n}`, value: r(t.compoundAmount(200, 5, n)) }))} />
        <Worked
          title="Three uses"
          steps={[
            <>Inflation: a price of R200 rising at 5% p.a. for 3 years becomes 200(1,05)³ = <strong>{r(infl)}</strong>.</>,
            <>Population: 20 000 people growing 3% p.a. for 4 years is 20 000(1,03)⁴ ≈ <strong>{String(pop).replace(/\B(?=(\d{3})+(?!\d))/g, ' ')}</strong> (nearest 10).</>,
            <>Exchange rate $1 = R18,50: R925 ÷ 18,50 = <strong>${dollars.toFixed(2).replace('.', ',')}</strong>.</>,
            <>To go from dollars to rand multiply by 18,50; to go from rand to dollars divide.</>,
          ]}
        />
        <Mistake>Multiplying when you should divide with an exchange rate. Rand amounts are bigger numbers than dollar amounts, so rand to dollars means dividing.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <>
        <Check
          questions={[
            <>R6 000 is invested at 5% p.a. simple interest for 4 years. How much interest is earned?</>,
            <>R2 000 is invested at 8% p.a. compound interest for 3 years. Find the amount.</>,
            <>After 2 years at 10% p.a. simple interest an investment is R3 300. What was invested?</>,
            <>How many years does R1 000 take to double at 10% p.a. simple interest?</>,
          ]}
          answers={[
            <>6 000 × 0,05 × 4 = <strong>{r(t.simpleInterest(6000, 5, 4))}</strong>.</>,
            <>2 000(1,08)³ = <strong>{r(t.compoundAmount(2000, 8, 3))}</strong>.</>,
            <>3 300 ÷ (1 + 0,1 × 2) = <strong>{r(t.simplePrincipal(3300, 10, 2))}</strong>.</>,
            <>1 000 → 2 000: (2 − 1) ÷ 0,1 = <strong>{t.simpleYearsTo(1000, 10, 2000)} years</strong>.</>,
          ]}
        />
      </>,
    ),
  },
];

// BANK:START
const bank: MathematicsItem[] = [
  {
    prompt: "R4 000 is invested at 8% p.a. simple interest for 3 years. What is the total amount?",
    options: ["R960,00", "R4 960,00", "R5 038,85", "R4 320,00"],
    answer: "R4 960,00",
    explanation: "A = P(1 + in) = 4 000(1 + 0,08 × 3) = 4 000 × 1,24 = R4 960,00. (R960 is the interest only.)",
  },
  {
    prompt: "R5 000 is invested at 10% p.a. compound interest for 2 years. What is the total amount?",
    options: ["R6 050,00", "R6 000,00", "R5 500,00", "R1 050,00"],
    answer: "R6 050,00",
    explanation: "A = P(1 + i)ⁿ = 5 000(1,1)² = 5 000 × 1,21 = R6 050,00.",
  },
  {
    prompt: "R12 000 is invested at 6% p.a. compounded monthly for 1 year. What is the total amount (to the nearest cent)?",
    options: ["R12 720,00", "R12 006,00", "R12 360,00", "R12 740,13"],
    answer: "R12 740,13",
    explanation: "The rate per month is 6% ÷ 12 = 0,5% and there are 12 months: A = 12 000(1,005)¹² = R12 740,13.",
  },
  {
    prompt: "A R9 000 laptop is bought on hire purchase: a 10% deposit and the balance at 12% p.a. simple interest over 2 years, paid in 24 equal monthly instalments. What is each instalment?",
    options: ["R375,00", "R450,00", "R418,50", "R456,00"],
    answer: "R418,50",
    explanation: "Deposit R900, balance R8 100. A = 8 100(1 + 0,12 × 2) = R10 044. Instalment = 10 044 ÷ 24 = R418,50.",
  },
  {
    prompt: "A price of R200 rises with inflation at 5% p.a. for 3 years. What is the new price?",
    options: ["R230,00", "R231,53", "R210,00", "R171,48"],
    answer: "R231,53",
    explanation: "A = 200(1,05)³ = 200 × 1,157625 = R231,53. (R171,48 would be a price that falls 5% each year.)",
  },
  {
    prompt: "The exchange rate is $1 = R18,50. How many dollars is R925?",
    options: ["$50,00", "$17 112,50", "$943,50", "$906,50"],
    answer: "$50,00",
    explanation: "Divide the rand amount by the rate: 925 ÷ 18,5 = $50,00.",
  },
  {
    prompt: "A town of 20 000 people grows at 3% p.a. How many people are there after 4 years (nearest 10)?",
    options: ["22 400", "20 600", "22 500", "22 510"],
    answer: "22 510",
    explanation: "Population growth is compound growth: 20 000(1,03)⁴ = 22 510,2 ≈ 22 510 people.",
  },
  {
    prompt: "R1 000 is invested for 2 years at 10% p.a. one way with simple interest and another way with compound interest. What is the difference?",
    options: ["They earn the same", "Simple interest earns R10 more", "Compound interest earns R10 more", "Compound interest earns R100 more"],
    answer: "Compound interest earns R10 more",
    explanation: "Simple: 1 000(1 + 0,1 × 2) = R1 200. Compound: 1 000(1,1)² = R1 210. Compound is R10 more, because the second year earns interest on the first year's interest.",
  },
  {
    prompt: "How many years does it take R1 000 to double at 10% p.a. simple interest?",
    options: ["5", "10", "7", "20"],
    answer: "10",
    explanation: "The interest must be R1 000: 1 000 × 0,1 × n = 1 000, so n = 10 years.",
  },
  {
    prompt: "What is the interest earned on R6 000 invested at 5% p.a. simple interest for 4 years?",
    options: ["R1 200,00", "R7 200,00", "R300,00", "R1 293,04"],
    answer: "R1 200,00",
    explanation: "Interest = P × i × n = 6 000 × 0,05 × 4 = R1 200,00. (R7 200 is the total amount.)",
  },
  {
    prompt: "Which decimal do you use in the formulae for an interest rate of 7,5% p.a.?",
    options: ["0,75", "7,5", "0,0075", "0,075"],
    answer: "0,075",
    explanation: "A percentage means \"per hundred\", so divide by 100: 7,5 ÷ 100 = 0,075.",
  },
  {
    prompt: "After 2 years at 10% p.a. simple interest an investment is worth R3 300. How much was invested?",
    options: ["R3 000,00", "R2 640,00", "R2 750,00", "R3 630,00"],
    answer: "R2 750,00",
    explanation: "3 300 = P(1 + 0,1 × 2) = 1,2P, so P = 3 300 ÷ 1,2 = R2 750,00.",
  },
  {
    prompt: "Which formula calculates compound growth?",
    options: ["A = P(1 + in)", "A = P(1 + i)ⁿ", "A = P(1 − i)ⁿ", "A = P + i + n"],
    answer: "A = P(1 + i)ⁿ",
    explanation: "Compound growth multiplies by (1 + i) once for each period, so (1 + i)ⁿ. P(1 + in) is simple interest.",
  },
  {
    prompt: "R2 000 is invested at 8% p.a. compound interest for 3 years. What is the amount?",
    options: ["R2 519,42", "R2 480,00", "R2 160,00", "R2 500,00"],
    answer: "R2 519,42",
    explanation: "A = 2 000(1,08)³ = 2 000 × 1,259712 = R2 519,42.",
  },
];
// BANK:END

const FinanceGrowth = () => (
  <CapsSubjectTopic
    title="Finance and Growth"
    subtitle="Simple and compound interest, hire purchase, inflation, population growth and exchange rates"
    learnSteps={learnSteps}
    task="gr10-finance-growth-t3"
    bank={bank}
    apiPath="/api/caps/math"
  />
);

export default FinanceGrowth;
