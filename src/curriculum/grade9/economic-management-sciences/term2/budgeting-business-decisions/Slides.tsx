import type { LearnStep } from '../../../../../components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
// randNb is rand() with non-breaking spaces so amounts do not split across lines.
import { randNb as rand } from '../../../../../components/diagrams/ems/emsHelpers';
import { budgetPlan, profitAndCash, totalCost, variance } from '../../../../../components/diagrams/ems/ems9a-helpers';
import { CostLines, VarianceTable } from '../../../../../components/diagrams/ems/Ems9aPictures';
import { BudgetBars } from '../../../../../components/diagrams/ems/EmsPictures';

// Every amount below comes from ems9a-helpers.ts (tested in ems9a-helpers.test.ts and ems9a-lessons.test.ts).
export const FIXED = [1_500, 400] as const; // rent, insurance
export const VARIABLE = [2_800, 300] as const; // stock, packaging
const budget = budgetPlan(6_000, FIXED, VARIABLE);
const table = { fixed: 2_000, perUnit: 150 };
const ten = totalCost(table.fixed, table.perUnit, 10);
const twenty = totalCost(table.fixed, table.perUnit, 20);
export const ACTUALS = [
  { item: 'Stock', budget: 2_800, actual: 3_100 },
  { item: 'Rent', budget: 1_500, actual: 1_500 },
  { item: 'Packaging', budget: 300, actual: 250 },
] as const;
const rows = ACTUALS.map((a) => ({ item: a.item, ...variance(a.budget, a.actual) }));
const CREDIT_SALE = 5_000;
const CREDIT_COSTS = 3_000;
const credit = profitAndCash(CREDIT_SALE, CREDIT_COSTS, 0, CREDIT_COSTS);
const q2 = variance(600, 450);
const q3 = budgetPlan(1_000, [800], [400]);

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: 'A realistic budget',
    content: slide(
      <>
        <Rule>A budget plans income and expenses ahead. To be effective it must use realistic estimates based on past records and market research, not guesses.</Rule>
        <BudgetBars income={budget.income} spending={budget.spending} aria={`Two bars. A tuckshop budgets ${rand(budget.income)} income and ${rand(budget.spending)} spending, leaving a surplus of ${rand(budget.left)}.`} />
        <Worked
          title="Tuckshop budget for one month"
          steps={[<>Expected income from past sales: {rand(budget.income)}.</>, <>Expenses: {rand(budget.totalFixed)} fixed + {rand(budget.totalVariable)} variable = {rand(budget.spending)}.</>, <>{rand(budget.income)} − {rand(budget.spending)} = {budget.kind} of {rand(budget.left)}.</>]}
        />
        <Mistake>Guessing high numbers to be safe, or copying a bigger business&apos;s budget. Your own records and research make estimates realistic.</Mistake>
      </>,
    ),
  },
  {
    title: 'Fixed and variable expenses',
    content: slide(
      <>
        <Rule>A fixed expense stays the same each period, like rent. A variable expense changes with the units made or sold, like wood or stock.</Rule>
        <CostLines fixed={table.fixed} perUnit={table.perUnit} maxUnits={20} aria={`Cost lines for a furniture maker. Fixed cost stays at ${rand(table.fixed)}. Variable cost rises with each table made. Total cost rises from ${rand(table.fixed)} at no tables to ${rand(twenty.total)} at 20 tables.`} />
        <Worked
          title={`Rent ${rand(table.fixed)}, wood ${rand(table.perUnit)} a table`}
          steps={[<>10 tables: {rand(ten.fixed)} + {rand(ten.variable)} = {rand(ten.total)}.</>, <>20 tables: {rand(twenty.fixed)} + {rand(twenty.variable)} = {rand(twenty.total)}.</>, 'Rent stayed the same; wood doubled with the tables.']}
        />
        <Mistake>Calling rent variable because it is paid every month. Variable means it changes with the amount made or sold.</Mistake>
      </>,
    ),
  },
  {
    title: 'Monitor and adjust: budget variance',
    content: slide(
      <>
        <Rule>Budget variance is the difference between budgeted and actual amounts. Review the budget at least monthly, find the causes of variances, then adjust.</Rule>
        <VarianceTable rows={rows} aria={`Budget against actual. ${rows.map((r) => `${r.item} ${r.kind}${r.amount ? ` by ${rand(r.amount)}` : ''}`).join('; ')}.`} />
        <Worked
          title={`Stock was budgeted at ${rand(rows[0].budget)}`}
          steps={[<>Actual stock cost {rand(rows[0].actual)}.</>, <>Variance: {rand(rows[0].actual)} − {rand(rows[0].budget)} = {rand(rows[0].diff)}, {rows[0].kind}.</>, 'Find out why (a price rise?), then adjust next month.']}
        />
        <Mistake>Ignoring variances or blaming outside factors and leaving the budget unchanged. Variances show where to act.</Mistake>
      </>,
    ),
  },
  {
    title: 'Priorities and unexpected expenses',
    content: slide(
      <>
        <Rule>Resources are limited, so a business ranks its spending and funds the highest-value activities first. If an unexpected expense arrives, review priorities, cut optional spending or find other funds.</Rule>
        <Worked
          title="A fridge breaks down"
          steps={['List what must be paid: wages, stock, rent.', 'Look for optional spending to cut, such as advertising.', 'Find other funds if needed, such as a small loan or savings set aside.']}
        />
        <Mistake>Paying the repair from the money for staff wages, or ignoring it. Both can harm the business more.</Mistake>
      </>,
    ),
  },
  {
    title: 'Cash flow and profit',
    content: slide(
      <>
        <Rule>Cash flow is the money coming in and going out. A business can show a profit and still run out of cash, so it must plan to be able to pay its bills.</Rule>
        <Worked
          title={`A sale of ${rand(CREDIT_SALE)} on credit`}
          steps={[<>Profit: {rand(CREDIT_SALE)} sales − {rand(CREDIT_COSTS)} costs = {rand(credit.profit)}.</>, <>Cash: {rand(0)} received − {rand(CREDIT_COSTS)} paid = {rand(credit.cashFlow)}.</>, 'The business has a profit but no cash until the customer pays.']}
        />
        <Mistake>Believing profit and cash flow are the same number. Many profitable businesses fail because of poor cash management.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          <>Give an example of a fixed expense.</>,
          <>A phone-repair shop budgets {rand(q2.budget)} for parts but spends {rand(q2.actual)}. What is the variance?</>,
          <>Income is {rand(q3.income)}; fixed costs {rand(q3.totalFixed)} and variable costs {rand(q3.totalVariable)}. Surplus or deficit?</>,
          <>How often should a business review its budget?</>,
        ]}
        answers={[
          <>Rent (it stays the same each period).</>,
          <>{rand(q2.actual)} − {rand(q2.budget)} = −{rand(q2.amount)}: {rand(q2.amount)} {q2.kind}.</>,
          <>A {q3.kind} of {rand(q3.amount)}.</>,
          <>At least monthly.</>,
        ]}
      />,
    ),
  },
];
