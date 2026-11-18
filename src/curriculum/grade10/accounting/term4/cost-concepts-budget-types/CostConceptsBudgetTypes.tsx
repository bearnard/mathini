import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { FactCards } from '../../../../../components/diagrams/aq10/Aq10';
import { InfoTable } from '../../../../../components/diagrams/lifesci/InfoTable';
import { formatRand } from '../../../../../components/diagrams/maths/mathsHelpers';
import * as a from '../../../../../components/diagrams/accounting/acc10';

// Every amount comes from acc10.ts (whole cents, exact arithmetic; tested in acc10.test.ts and g10AccGaps.test.ts). All data are imaginary teaching data.
const R = (c: number): string => formatRand(c).replace(/,00$/, '');
const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;
export const learnSteps: LearnStep[] = [
  {
    title: 'Direct and indirect costs',
    content: slide(
      <>
        <Rule>A manufacturer turns raw materials into goods. Direct materials and direct labour can be traced to the goods made. Indirect materials and indirect labour, with other factory costs such as factory rent, are factory overheads. Prime cost = direct materials + direct labour. Manufacturing cost = prime cost + factory overheads.</Rule>
        <InfoTable
          cols={[{ title: 'Cost', w: 40 }, { title: 'Kind', w: 30 }, { title: 'Amount', w: 30 }]}
          rows={[
            ['Direct materials', 'direct', R(a.COST.directMaterials)],
            ['Direct labour', 'direct', R(a.COST.directLabour)],
            ['Indirect materials', 'overhead', R(a.COST.indirectMaterials)],
            ['Indirect labour', 'overhead', R(a.COST.indirectLabour)],
            ['Factory rent', 'overhead', R(a.COST.factoryRent)],
          ]}
          aria={`A table of factory costs. Direct materials ${R(a.COST.directMaterials)}, direct. Direct labour ${R(a.COST.directLabour)}, direct. Indirect materials ${R(a.COST.indirectMaterials)}, overhead. Indirect labour ${R(a.COST.indirectLabour)}, overhead. Factory rent ${R(a.COST.factoryRent)}, overhead.`}
        />
        <Worked
          title="Prime cost and manufacturing cost"
          steps={[
            `Prime cost = ${R(a.COST.directMaterials)} + ${R(a.COST.directLabour)} = ${R(a.primeCost())}.`,
            `Factory overheads = ${R(a.COST.indirectMaterials)} + ${R(a.COST.indirectLabour)} + ${R(a.COST.factoryRent)} = ${R(a.factoryOverheads())}.`,
            `Manufacturing cost = ${R(a.primeCost())} + ${R(a.factoryOverheads())} = ${R(a.manufacturingCost())}.`,
          ]}
        />
        <Mistake>Putting indirect labour (such as the factory cleaner) into prime cost. Only direct materials and direct labour belong in prime cost.</Mistake>
      </>,
    ),
  },
  {
    title: 'Variable, fixed costs and work in progress',
    content: slide(
      <>
        <Rule>A variable cost changes with the number of units made (such as direct materials). A fixed cost stays the same however many units are made (such as factory rent). Work in progress (WIP) is the goods that are started but not yet finished at the end of the period, and finished goods are the ones that are complete and ready to be sold.</Rule>
        <InfoTable
          cols={[{ title: 'Cost', w: 40 }, { title: 'More units made', w: 60 }]}
          rows={[
            ['Direct materials', 'total goes up (variable)'],
            ['Factory rent', 'total stays the same (fixed)'],
            ['Work in progress', 'started, not yet finished'],
            ['Finished goods', 'complete, ready for sale'],
          ]}
          aria="A table about cost behaviour. Direct materials: the total goes up with more units, so it is variable. Factory rent: the total stays the same, so it is fixed. Work in progress: goods started but not yet finished. Finished goods: complete and ready for sale."
        />
        <Worked
          title="How the totals behave"
          steps={[
            'If the factory makes twice as many units, the total direct materials double: it is variable.',
            `The factory rent of ${R(a.COST.factoryRent)} does not change: it is fixed.`,
            'Goods that are still on the machine at month end are WIP.',
          ]}
        />
        <Mistake>Saying that a fixed cost does not exist when production stops. It is fixed in total across the normal range of output, so it is still paid.</Mistake>
      </>,
    ),
  },
  {
    title: 'Types of budgets',
    content: slide(
      <>
        <Rule>A budget is a plan of expected income and spending. A cash budget shows the expected cash receipts and payments and the closing bank balance. A zero-based budget starts from nothing, so each item must be justified. A capital budget plans spending on long-term assets. Budgets can also be short-, medium- or long-term, depending on how far ahead they look.</Rule>
        <InfoTable
          cols={[{ title: 'Budget', w: 30 }, { title: 'What it plans', w: 70 }]}
          rows={[
            ['Cash budget', 'expected receipts, payments and closing balance'],
            ['Zero-based', 'every item justified from nothing'],
            ['Capital', 'buying long-term assets'],
            ['Short/medium/long term', 'how far ahead the plan looks'],
          ]}
          aria="A table of budget types. Cash budget: expected receipts, payments and the closing balance. Zero-based budget: every item is justified from nothing. Capital budget: buying long-term assets. Short, medium and long term: how far ahead the plan looks."
        />
        <Worked
          title="A simple cash budget"
          steps={[
            `Receipts = cash sales ${R(a.BUDGET.cashSales)} + debtors ${R(a.BUDGET.debtors)} = ${R(a.budgetReceipts())}.`,
            `Opening ${R(a.BUDGET.opening)} + receipts ${R(a.budgetReceipts())} − payments ${R(a.BUDGET.payments)} = ${R(a.budgetClosing())}.`,
            `The closing balance of ${R(a.budgetClosing())} becomes the opening balance of the next month.`,
          ]}
        />
        <Mistake>Including non-cash items or credit sales not yet paid as receipts. A cash budget counts only the money that is expected to come in or go out.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          <>What is prime cost made up of?</>,
          <>Is factory rent a fixed or a variable cost?</>,
          <>Which budget makes you justify every item from nothing?</>,
          <>Opening R5 000, receipts R12 000, payments R10 500. What is the closing balance?</>,
        ]}
        answers={[
          <>Direct materials plus direct labour.</>,
          <>Fixed.</>,
          <>A zero-based budget.</>,
          <>{R(a.budgetClosing())}.</>,
        ]}
      />,
    ),
  },
];

export const bank: CapsItem[] = [
  {
    prompt: "Which cost can be traced directly to the goods that are made?",
    options: ["Factory rent", "Cleaning of the factory", "Direct materials", "The factory insurance"],
    answer: "Direct materials",
    explanation: "Direct materials are used up in the product, so the cost is traced straight to it.",
  },
  {
    prompt: "A cleaner in the factory is paid R5 000. How is this cost classified?",
    options: ["Indirect labour, a factory overhead", "Direct labour, part of prime cost", "Direct materials, part of prime cost", "An office expense, outside of the factory"],
    answer: "Indirect labour, a factory overhead",
    explanation: "The cleaner does not make the product, so the wage is a factory overhead.",
  },
  {
    prompt: "What is prime cost?",
    options: ["Direct labour plus factory overheads", "Direct materials plus factory rent", "Selling costs plus office costs", "Direct materials plus direct labour"],
    answer: "Direct materials plus direct labour",
    explanation: "Prime cost covers only the direct costs of making the goods.",
  },
  {
    prompt: "Direct materials are R40 000 and direct labour is R25 000. What is the prime cost?",
    options: ["R15 000", "R65 000", "R40 000", "R80 000"],
    answer: "R65 000",
    explanation: "Prime cost = R40 000 + R25 000 = R65 000.",
  },
  {
    prompt: "Indirect materials are R3 000, indirect labour R5 000 and factory rent R7 000. What are the factory overheads?",
    options: ["R8 000", "R15 000", "R65 000", "R12 000"],
    answer: "R15 000",
    explanation: "R3 000 + R5 000 + R7 000 = R15 000.",
  },
  {
    prompt: "The prime cost is R65 000 and the factory overheads are R15 000. What is the manufacturing cost?",
    options: ["R50 000", "R65 000", "R95 000", "R80 000"],
    answer: "R80 000",
    explanation: "Manufacturing cost = prime cost + factory overheads = R65 000 + R15 000 = R80 000.",
  },
  {
    prompt: "What is a variable cost?",
    options: ["A cost that changes with the units made", "A cost that never changes at all", "A cost that only the owner pays", "A cost that is paid once a year"],
    answer: "A cost that changes with the units made",
    explanation: "If more units are made, the total of direct materials rises, so it is variable.",
  },
  {
    prompt: "Factory rent stays the same if the output doubles. What kind of cost is it?",
    options: ["A variable cost", "A direct cost", "A fixed cost", "A prime cost"],
    answer: "A fixed cost",
    explanation: "A fixed cost does not change in total with the number of units made.",
  },
  {
    prompt: "What is work in progress?",
    options: ["Goods that are finished and sold", "Goods that are ordered but not made", "Goods that were returned by customers", "Goods that are started but not finished"],
    answer: "Goods that are started but not finished",
    explanation: "WIP is the part-made goods that are still in the factory at the end of the period.",
  },
  {
    prompt: "What is a budget?",
    options: ["A record of the past year's profit", "A plan of expected income and spending", "A list of the staff of the business", "A receipt that is given to a buyer"],
    answer: "A plan of expected income and spending",
    explanation: "A budget is drawn up in advance, so that the owner can control the money.",
  },
  {
    prompt: "What does a cash budget show?",
    options: ["Expected cash receipts and payments", "The value of all the assets owned", "The credit sales not yet paid for", "The profit of the past financial year"],
    answer: "Expected cash receipts and payments",
    explanation: "A cash budget forecasts the money coming in and going out and the closing bank balance.",
  },
  {
    prompt: "Opening cash is R5 000, receipts R12 000 and payments R10 500. What is the closing balance?",
    options: ["R3 500", "R17 500", "R6 500", "R27 500"],
    answer: "R6 500",
    explanation: "R5 000 + R12 000 − R10 500 = R6 500.",
  },
  {
    prompt: "What is special about a zero-based budget?",
    options: ["Every item starts at last year's amount", "Every amount must be set at zero rand", "Every item must be justified from nothing", "Every item is left to the manager alone"],
    answer: "Every item must be justified from nothing",
    explanation: "It does not copy last year's figures, so each cost must be shown to be needed.",
  },
  {
    prompt: "Which budget plans the buying of long-term assets, such as machinery?",
    options: ["A capital budget", "A cash budget", "A zero-based budget", "A sales budget"],
    answer: "A capital budget",
    explanation: "A capital budget plans big spending on assets that will be used for many years.",
  },
];

const CostConceptsBudgetTypes = () => (
  <CapsSubjectTopic
    title="Cost Concepts and Budget Types"
    subtitle="Direct and indirect costs, prime and manufacturing cost, variable and fixed costs, WIP and types of budgets"
    learnSteps={learnSteps}
    task="gr10-cost-concepts-budget-types-t4"
    bank={bank}
    apiPath="/api/caps/acc"
    grade={10}
  />
);

export default CostConceptsBudgetTypes;
