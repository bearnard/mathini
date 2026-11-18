import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { SegmentBar } from '../../../../../components/diagrams/maths/Grade8FinancePictures';
import { addVat, budget, decreaseBy, discount, increaseBy, percentOf, profitOrLoss, profitPercent, removeVat, VAT_PERCENT } from '../../../../../components/diagrams/maths/grade8Finance';
import { formatRand } from '../../../../../components/diagrams/maths/mathsHelpers';

// Every number in the slides comes from grade8Finance (money in whole cents; tested in grade8Finance.test.ts); g8FinanceT1.test.ts checks the rendered text.
const R = formatRand;
const must = <T,>(v: T | null): T => v as T;

const p25 = must(percentOf(25, 80_00));
const up15 = must(increaseBy(200_00, 15));
const down15 = must(decreaseBy(200_00, 15));
const wrongOnlyPart = up15.change;

const cost = 150_00;
const sellUp = 180_00;
const sellDown = 120_00;
const gain = profitOrLoss(cost, sellUp);
const lose = profitOrLoss(cost, sellDown);
const gainPct = must(profitPercent(cost, sellUp));
const wrongBase = must(percentOf(20, sellUp));

const marked = 400_00;
const disc = must(discount(marked, 20));

const vatUp = must(addVat(200_00));
const vatDown = must(removeVat(575_00));
const wrongVat = must(percentOf(VAT_PERCENT, 575_00));

const plan = budget(3_000_00, [1_200_00, 900_00]);

const c1 = must(percentOf(10, 350_00));
const c2 = must(discount(500_00, 10));
const c3 = must(addVat(100_00));
const c4 = budget(2_000_00, [800_00, 500_00]);

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: 'A percentage of an amount',
    content: slide(
      <>
        <Rule>A percentage is a part out of 100. To find a percentage of an amount, divide by 100 and multiply. To increase or decrease, add or subtract that part.</Rule>
        <SegmentBar
          segments={[
            { label: '25%', value: 25 },
            { label: '75%', value: 75 },
          ]}
          total={`100% = ${R(80_00)}`}
          aria={`A bar for ${R(80_00)} split into 25 percent and 75 percent.`}
        />
        <Worked
          steps={[
            <>25% of {R(80_00)}: {R(80_00)} ÷ 4 = <strong>{R(p25)}</strong>.</>,
            <>15% of {R(200_00)} = {R(up15.change)}.</>,
            <>Increase {R(200_00)} by 15%: {R(200_00)} + {R(up15.change)} = <strong>{R(up15.result)}</strong>.</>,
            <>Decrease {R(200_00)} by 15%: {R(200_00)} − {R(down15.change)} = <strong>{R(down15.result)}</strong>.</>,
          ]}
        />
        <Mistake>
          Stopping at the part: 15% of {R(200_00)} is {R(wrongOnlyPart)}, but the increased price is {R(up15.result)}. Add it to the amount.
        </Mistake>
      </>,
    ),
  },
  {
    title: 'Profit and loss',
    content: slide(
      <>
        <Rule>Profit = selling price − cost price. Loss = cost price − selling price. Write a profit or loss as a percentage of the cost price.</Rule>
        <SegmentBar
          segments={[
            { label: `Cost ${R(cost)}`, value: 5 },
            { label: 'Profit', value: 1 },
          ]}
          total={`Selling price ${R(sellUp)}`}
          aria={`A bar for the cost price of ${R(cost)} with a profit of ${R(gain.amount)} added, making the selling price of ${R(sellUp)}.`}
        />
        <Worked
          title={<>A shop buys a chair for {R(cost)}.</>}
          steps={[
            <>It sells for {R(sellUp)}: profit = {R(sellUp)} − {R(cost)} = <strong>{R(gain.amount)}</strong>.</>,
            <>As a percentage of the cost: {R(gain.amount)} ÷ {R(cost)} × 100 = <strong>{gainPct}%</strong>.</>,
            <>If it sells for {R(sellDown)}: loss = {R(cost)} − {R(sellDown)} = <strong>{R(lose.amount)}</strong>.</>,
          ]}
        />
        <Mistake>
          Using the selling price as the base: {gainPct}% of {R(sellUp)} is {R(wrongBase)}, not the profit. Always compare with the cost price.
        </Mistake>
      </>,
    ),
  },
  {
    title: 'Discount',
    content: slide(
      <>
        <Rule>A discount is a percentage of the marked price that is taken off. Price you pay = marked price − discount.</Rule>
        <SegmentBar
          segments={[
            { label: 'Pay 80%', value: 80 },
            { label: 'Off 20%', value: 20 },
          ]}
          total={`Marked price ${R(marked)}`}
          aria={`A bar for the marked price of ${R(marked)}: 80 percent is paid and 20 percent is taken off.`}
        />
        <Worked
          title={<>A jacket is marked {R(marked)} with 20% off.</>}
          steps={[
            <>20% of {R(marked)} = {R(marked)} ÷ 5 = <strong>{R(disc.off)}</strong> discount.</>,
            <>You pay {R(marked)} − {R(disc.off)} = <strong>{R(disc.pay)}</strong>.</>,
          ]}
        />
        <Mistake>
          Paying the discount: the {R(disc.off)} is what you save, not what you pay.
        </Mistake>
      </>,
    ),
  },
  {
    title: 'VAT at 15%',
    content: slide(
      <>
        <Rule>VAT is 15% added to the price before VAT. To go back from the price with VAT, divide by 115 and multiply by 100.</Rule>
        <SegmentBar
          segments={[
            { label: '100% price', value: 100 },
            { label: '15%', value: 40 },
          ]}
          total={`${R(vatUp.inclusive)} with VAT`}
          aria={`A bar for a price of ${R(200_00)} with 15 percent VAT of ${R(vatUp.vat)} added, making ${R(vatUp.inclusive)}. The bar is not drawn to scale.`}
        />
        <Worked
          steps={[
            <>Price before VAT {R(200_00)}: VAT = 15% of {R(200_00)} = <strong>{R(vatUp.vat)}</strong>.</>,
            <>Price with VAT = {R(200_00)} + {R(vatUp.vat)} = <strong>{R(vatUp.inclusive)}</strong>.</>,
            <>Price with VAT {R(575_00)}: {R(575_00)} ÷ 115 × 100 = <strong>{R(vatDown.exclusive)}</strong> before VAT, and the VAT is {R(vatDown.vat)}.</>,
          ]}
        />
        <Mistake>
          Taking 15% off the price with VAT: 15% of {R(575_00)} is {R(wrongVat)}, which leaves {R(575_00 - wrongVat)}, not {R(vatDown.exclusive)}. The 15% was of the smaller price, so divide by 115.
        </Mistake>
      </>,
    ),
  },
  {
    title: 'Budgets',
    content: slide(
      <>
        <Rule>A budget lists the money you expect (income) and the money you plan to spend. Left over = income − total spent. If this is negative, the budget is short.</Rule>
        <SegmentBar
          segments={[
            { label: 'Rent', value: 1_200 },
            { label: 'Food', value: 900 },
            { label: 'Left', value: 900 },
          ]}
          total={`Income ${R(3_000_00)}`}
          aria={`A bar for an income of ${R(3_000_00)}: rent ${R(1_200_00)}, food ${R(900_00)} and ${R(plan.left)} left over.`}
        />
        <Worked
          title={<>Income {R(3_000_00)}. Rent {R(1_200_00)} and food {R(900_00)}.</>}
          steps={[
            <>Spent = {R(1_200_00)} + {R(900_00)} = <strong>{R(plan.spent)}</strong>.</>,
            <>Left over = {R(3_000_00)} − {R(plan.spent)} = <strong>{R(plan.left)}</strong>.</>,
          ]}
        />
        <Mistake>
          Forgetting one of the items. List every item, add them all, and only then subtract from the income.
        </Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          <>What is 10% of {R(350_00)}?</>,
          <>A {R(500_00)} item has 10% off. What do you pay?</>,
          <>What is {R(100_00)} plus 15% VAT?</>,
          <>Income {R(2_000_00)}, rent {R(800_00)}, transport {R(500_00)}. How much is left?</>,
        ]}
        answers={[
          <>{R(350_00)} ÷ 10 = {R(c1)}.</>,
          <>Discount {R(c2.off)}, so you pay {R(c2.pay)}.</>,
          <>VAT {R(c3.vat)}, so {R(c3.inclusive)}.</>,
          <>Spent {R(c4.spent)}, so {R(c4.left)} is left.</>,
        ]}
      />,
    ),
  },
];

export const bank: CapsItem[] = [
  {
    prompt: "What is 10% of R350?",
    options: ["R3,50", "R70,00", "R35,00", "R10,00"],
    answer: "R35,00",
    explanation: "10% is one tenth: R350 ÷ 10 = R35.",
  },
  {
    prompt: "What is 25% of R120?",
    options: ["R30,00", "R25,00", "R12,00", "R95,00"],
    answer: "R30,00",
    explanation: "25% is a quarter: R120 ÷ 4 = R30.",
  },
  {
    prompt: "Increase R80 by 25%.",
    options: ["R20,00", "R105,00", "R60,00", "R100,00"],
    answer: "R100,00",
    explanation: "25% of R80 is R20; R80 + R20 = R100.",
  },
  {
    prompt: "Decrease R250 by 20%.",
    options: ["R50,00", "R200,00", "R270,00", "R230,00"],
    answer: "R200,00",
    explanation: "20% of R250 is R50; R250 − R50 = R200.",
  },
  {
    prompt: "A shop buys a jacket for R300 and sells it for R375. What is the profit?",
    options: ["R675,00", "R375,00", "R75,00", "R25,00"],
    answer: "R75,00",
    explanation: "Profit = selling price − cost price = R375 − R300 = R75.",
  },
  {
    prompt: "A trader buys a bag for R200 and sells it for R150. What is the loss as a percentage of the cost price?",
    options: ["25%", "50%", "33%", "75%"],
    answer: "25%",
    explanation: "Loss R50 ÷ cost R200 × 100 = 25%.",
  },
  {
    prompt: "A phone costs R1 500 and is on sale at 30% discount. What do you pay?",
    options: ["R450,00", "R1 950,00", "R1 200,00", "R1 050,00"],
    answer: "R1 050,00",
    explanation: "30% of R1 500 is R450; R1 500 − R450 = R1 050.",
  },
  {
    prompt: "A jacket marked R800 has 15% off. How much is the discount?",
    options: ["R680,00", "R120,00", "R15,00", "R12,00"],
    answer: "R120,00",
    explanation: "15% of R800 = R120.",
  },
  {
    prompt: "A pair of shoes costs R400 before VAT. What is the price including 15% VAT?",
    options: ["R60,00", "R415,00", "R460,00", "R340,00"],
    answer: "R460,00",
    explanation: "VAT = 15% of R400 = R60; R400 + R60 = R460.",
  },
  {
    prompt: "A book costs R230 including 15% VAT. What is the price before VAT?",
    options: ["R200,00", "R195,50", "R265,00", "R215,00"],
    answer: "R200,00",
    explanation: "R230 ÷ 115 × 100 = R200.",
  },
  {
    prompt: "How much VAT is included in a price of R345 that includes 15% VAT?",
    options: ["R51,75", "R30,00", "R15,00", "R45,00"],
    answer: "R45,00",
    explanation: "Before VAT: R345 ÷ 115 × 100 = R300; the VAT is R345 − R300 = R45.",
  },
  {
    prompt: "Sipho earns R4 000 a month. He plans R1 600 for rent and R1 000 for food. How much is left?",
    options: ["R2 600,00", "R1 400,00", "R5 600,00", "R2 400,00"],
    answer: "R1 400,00",
    explanation: "Spent R2 600; R4 000 − R2 600 = R1 400.",
  },
  {
    prompt: "Thandi earns R2 500 and plans to spend R1 800, R900 and R300. What does her budget show?",
    options: ["She has R500,00 left over at the end of the month", "She has R5 500,00 left over", "She is R500,00 short", "Her budget balances"],
    answer: "She is R500,00 short",
    explanation: "Planned spending is R3 000, which is R500 more than her income of R2 500.",
  },
  {
    prompt: "What is 5% of R2 000?",
    options: ["R100,00", "R10,00", "R500,00", "R400,00"],
    answer: "R100,00",
    explanation: "5% is one twentieth: R2 000 ÷ 20 = R100.",
  },
];

const PercentagesAndFinancial = () => (
  <CapsSubjectTopic
    title="Percentages and Financial Contexts"
    subtitle="Percentage of an amount, profit and loss, discount, VAT and budgets"
    learnSteps={learnSteps}
    task="gr8-percentages-and-financial-t1"
    bank={bank}
    apiPath="/api/caps/math"
  />
);

export default PercentagesAndFinancial;
