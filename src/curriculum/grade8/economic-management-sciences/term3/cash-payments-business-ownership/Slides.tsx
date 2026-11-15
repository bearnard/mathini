import type { LearnStep } from '../../../../../components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
// randNb is rand() with non-breaking spaces so amounts do not split across lines.
import { randNb as rand, bankBalance, budgetBalance, demandSchedule, markUp, shareProfit, sum } from '../../../../../components/diagrams/ems/emsHelpers';
import { BudgetBars, CompareCards, DemandCurve, JournalTable, ManagementPyramid } from '../../../../../components/diagrams/ems/EmsPictures';

// Every amount below comes from emsHelpers.ts (tested in emsHelpers.test.ts and ems8Lessons.test.ts).
export const PAYMENTS = [
  { date: '2 Mar', details: 'Rent', amount: 2000 },
  { date: '7 Mar', details: 'Wages', amount: 900 },
  { date: '12 Mar', details: 'Stock bought for cash', amount: 1500 },
] as const;
const paid = PAYMENTS.map((p) => p.amount);
const bank = bankBalance(4000, [2970], paid); // opening R4 000, receipts R2 970 from the Term 2 lesson
const wrongClosing = sum([4000, 2970, ...paid]); // the mistake: adding the payments
const split = shareProfit(50_000, [60, 40]);
const income = [4500];
const spending = [2400, 600, 300];
const plan = budgetBalance(sum(income), sum(spending));
const price = markUp(40, 25);
const PRICES = [10, 20, 30, 40, 50];
const demand = demandSchedule(PRICES, 120, 2);
const firstD = demand[0];
const lastD = demand[demand.length - 1];
const q2 = shareProfit(30_000, [50, 50]);
const q3 = markUp(80, 50);

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: 'The cash payments journal',
    content: slide(
      <>
        <Rule>The cash payments journal records all money paid out, such as rent, wages and stock. Payments reduce the bank balance. Each is then posted to a ledger account.</Rule>
        <JournalTable
          title="Cash payments journal, March"
          columns={['Date', 'Details', 'Amount']}
          rows={PAYMENTS.map((p) => [p.date, p.details, p.amount])}
          total={{ label: 'Total paid out', amount: bank.totalOut }}
          aria={`Cash payments journal with payments of ${paid.map(rand).join(', ')}. The total paid out is ${rand(bank.totalOut)}.`}
        />
        <Worked
          title={`Opening bank balance ${rand(4000)}, receipts ${rand(bank.totalIn)}`}
          steps={[<>Total paid out: {paid.map(rand).join(' + ')} = {rand(bank.totalOut)}.</>, <>Closing balance: {rand(4000)} + {rand(bank.totalIn)} − {rand(bank.totalOut)} = {rand(bank.closing)}.</>]}
        />
        <Mistake>Adding payments to the balance. That would give {rand(wrongClosing)}. Money paid out is taken away.</Mistake>
      </>,
    ),
  },
  {
    title: 'Sole trader or partnership',
    content: slide(
      <>
        <Rule>A sole trader is owned by one person. A partnership is owned by two or more people who share the work, the capital and the profit.</Rule>
        <CompareCards
          left={{ title: 'Sole trader', lines: ['One owner, full control', 'Keeps all the profit', 'Unlimited liability'] }}
          right={{ title: 'Partnership', lines: ['Two or more owners', 'Profit is shared', 'More capital and skills'] }}
        />
        <Worked
          title={`Zinhle and Pieter share ${rand(50_000)} profit 60:40`}
          steps={[<>Zinhle: 60 parts of 100 = {rand(split[0])}.</>, <>Pieter: 40 parts of 100 = {rand(split[1])}.</>, <>Check: {rand(split[0])} + {rand(split[1])} = {rand(sum(split))}.</>]}
        />
        <Mistake>Thinking a sole trader&apos;s personal belongings are safe. With unlimited liability they can be used to pay the business&apos;s debts.</Mistake>
      </>,
    ),
  },
  {
    title: 'Levels of management',
    content: slide(
      <>
        <Rule>Managers work at three levels. Top managers set long-term goals, middle managers plan for departments, and operational managers run the daily work and supervise staff.</Rule>
        <ManagementPyramid />
        <Worked
          title="Which level?"
          steps={['The owner decides to open a second shop: top management.', 'The branch manager plans the department’s month: middle management.', 'The supervisor tells the cashiers who works at which till today: operational.']}
        />
        <Mistake>Mixing up the levels. Top managers set direction; it is operational managers who supervise the tills and the staff each day.</Mistake>
      </>,
    ),
  },
  {
    title: 'A budget',
    content: slide(
      <>
        <Rule>A budget plans a business&apos;s income and spending ahead of time. It shows whether it will make a surplus and helps control costs.</Rule>
        <BudgetBars income={plan.income} spending={plan.spending} aria={`Two bars. Zodwa's tuckshop expects ${rand(plan.income)} income and ${rand(plan.spending)} spending, so it plans a surplus of ${rand(plan.amount)}.`} />
        <Worked
          title="Zodwa's tuckshop, one month"
          steps={[<>Spending: stock {rand(spending[0])} + electricity {rand(spending[1])} + transport {rand(spending[2])} = {rand(sum(spending))}.</>, <>Income {rand(plan.income)} − spending {rand(plan.spending)} = {plan.kind} of {rand(plan.amount)}.</>]}
        />
        <Mistake>Making a budget once and never checking it. Compare real figures with the budget each month.</Mistake>
      </>,
    ),
  },
  {
    title: 'Prices and demand',
    content: slide(
      <>
        <Rule>A business sets its price using its costs, its competitors&apos; prices and demand. Demand is how much people want and can buy; it usually falls when the price rises.</Rule>
        <DemandCurve prices={PRICES} at0={120} perRand={2} aria={`A line sloping down. At ${rand(firstD.price)} people want ${firstD.qty} items; at ${rand(lastD.price)} only ${lastD.qty}. As the price rises, the quantity demanded falls.`} />
        <Worked
          title="Cost R40, mark-up 25%"
          steps={[<>Mark-up: 25% of {rand(price.cost)} = {rand(price.add)}.</>, <>Selling price = {rand(price.cost)} + {rand(price.add)} = {rand(price.price)}, if competitors charge about the same.</>]}
        />
        <Mistake>Pricing from cost alone. A price above what competitors charge may lose customers.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        question={
          <ol className="list-decimal space-y-2 pl-5">
            <li>What does the cash payments journal record?</li>
            <li>Two equal partners share a profit of {rand(30_000)}. How much does each get?</li>
            <li>A product costs {rand(80)} and the mark-up is 50%. What is the selling price?</li>
            <li>Which level of management supervises staff each day?</li>
          </ol>
        }
        answer={
          <ol className="list-decimal space-y-2 pl-5">
            <li>All money paid out, such as rent, wages and stock.</li>
            <li>{rand(q2[0])} each.</li>
            <li>Mark-up {rand(q3.add)}, so {rand(q3.price)}.</li>
            <li>Operational (supervisory) management.</li>
          </ol>
        }
      />,
    ),
  },
];
