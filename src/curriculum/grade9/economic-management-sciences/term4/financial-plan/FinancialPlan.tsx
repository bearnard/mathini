import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { FactCards } from '../../../../../components/diagrams/aq10/Aq10';
import { NumberedSteps } from '../../../../../components/diagrams/business/NumberedSteps';
import { BreakEvenChart, SwotGrid } from '../../../../../components/diagrams/ems/Ems9PlanPictures';

// Functions, plan parts and formulas follow the Grade 9 EMS plan; numbers come from ems9-plan.ts (docs/notes/g9-ems-doubts.md).
const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: "Fixed and variable costs",
    content: slide(
      <>
        <Rule>Costs of a business are either fixed or variable. Fixed costs stay the same however many items you make, such as rent. Variable costs change with the number of items, such as wax and wicks. Total costs are the fixed costs plus the variable costs. Lerato's candle stall has fixed costs of R1 800 a month and variable costs of R18 for each candle.</Rule>
        <FactCards
          cards={[
            { title: "Fixed costs", line1: "stay the same, for example rent" },
            { title: "Variable costs", line1: "change with the number made, for example wax" },
            { title: "Total costs", line1: "fixed costs plus variable costs" },
          ]}
          aria="Fixed costs: stay the same, for example rent. Variable costs: change with the number made, for example wax. Total costs: fixed costs plus variable costs."
        />
        <Worked
          title="Total costs of 100 candles"
          steps={[
            "Fixed costs are R1 800 a month.",
            "Variable costs are 100 candles × R18 = R1 800.",
            "Total costs are R1 800 + R1 800 = R3 600.",
          ]}
        />
        <Mistake>Thinking that rent changes with the number of candles. Rent is a fixed cost.</Mistake>
      </>,
    ),
  },
  {
    title: "The break-even point",
    content: slide(
      <>
        <Rule>The break-even point is the number of items that you must sell for sales to equal total costs. At that point there is no profit and no loss. Each candle sells for R30 and costs R18 to make, so each candle adds R12 towards the fixed costs. Break-even = fixed costs ÷ (selling price − variable cost per item). If the answer is not a whole number, round it up to the next whole item.</Rule>
        <BreakEvenChart aria="A chart of the candle stall. Sales rise from nothing and total costs start at R1 800 and rise more slowly. The two lines cross at 150 candles, the break-even point, where both are R4 500." />
        <Worked
          title="Break-even of the candle stall"
          steps={[
            "Each candle adds R30 − R18 = R12 towards the fixed costs.",
            "Break-even = R1 800 ÷ R12 = 150 candles.",
            "Check: 150 × R30 = R4 500 of sales, and total costs are R1 800 + 150 × R18 = R4 500.",
          ]}
        />
        <Mistake>Forgetting to subtract the variable cost. The selling price alone does not tell you how much each item adds towards the fixed costs.</Mistake>
      </>,
    ),
  },
  {
    title: "Mark-up and selling price",
    content: slide(
      <>
        <Rule>Mark-up is the amount that a business adds to the cost price to get the selling price. The mark-up percentage is worked out on the cost price: mark-up percentage = (selling price − cost price) ÷ cost price × 100. A shop buys a bag for R40 and sells it for R50, so the mark-up is R10, which is 25% of R40. With a mark-up percentage you can also find a selling price: cost price + (cost price × mark-up percentage ÷ 100).</Rule>
        <FactCards
          cards={[
            { title: "Mark-up", line1: "selling price minus cost price" },
            { title: "Mark-up percentage", line1: "mark-up ÷ cost price × 100" },
            { title: "Selling price", line1: "cost price plus the mark-up" },
          ]}
          aria="Mark-up: selling price minus cost price. Mark-up percentage: mark-up ÷ cost price × 100. Selling price: cost price plus the mark-up."
        />
        <NumberedSteps steps={["Cost price: R40", "Add the mark-up: R10", "Selling price: R50", "Mark-up percentage: R10 ÷ R40 × 100 = 25%"].map((text) => ({ text }))} tone="teal" label="From cost price to mark-up percentage in four steps" />
        <Worked
          title="Find a selling price"
          steps={[
            "A shop buys a pair of shoes for R60 and wants a mark-up of 50%.",
            "The mark-up is 50% of R60 = R30.",
            "The selling price is R60 + R30 = R90.",
          ]}
        />
        <Mistake>Working out the percentage on the selling price. In this lesson the mark-up percentage is always worked out on the cost price.</Mistake>
      </>,
    ),
  },
  {
    title: "Profit percentage",
    content: slide(
      <>
        <Rule>Profit is sales minus total costs. The profit percentage shows how much of every rand of sales is profit. Profit percentage = profit ÷ sales × 100. When the candle stall sells 200 candles, sales are R6 000 and total costs are R1 800 + R3 600 = R5 400, so the profit is R600. The profit percentage is R600 ÷ R6 000 × 100 = 10%.</Rule>
        <FactCards
          cards={[
            { title: "Sales", line1: "R6 000 from 200 candles" },
            { title: "Total costs", line1: "R5 400" },
            { title: "Profit", line1: "R600" },
            { title: "Profit percentage", line1: "10% of sales" },
          ]}
          aria="Sales: R6 000 from 200 candles. Total costs: R5 400. Profit: R600. Profit percentage: 10% of sales."
        />
        <Worked
          title="Find the profit percentage"
          steps={[
            "A stall has sales of R20 000 and a profit of R3 000.",
            "Profit percentage = R3 000 ÷ R20 000 × 100.",
            "The answer is 15%.",
          ]}
        />
        <Mistake>Mixing up mark-up and profit percentage. Mark-up is worked out on the cost price and profit percentage on the sales.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          <>A stall owner pays R80 for a hat and charges R100. What is the mark-up in rand?</>,
          <>Sales of R5 000 and a profit of R500: what is the profit percentage?</>,
          <>Fixed costs R600, price R20, variable cost R10 per item: what is break-even?</>,
          <>Is rent a fixed or a variable cost?</>,
        ]}
        answers={[
          <>R20.</>,
          <>10%.</>,
          <>60 items.</>,
          <>A fixed cost.</>,
        ]}
      />,
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: "Which of these is a fixed cost of a candle stall?",
    options: ["The wax for each candle", "The wick for each candle", "The rent of the stall", "The box for each sale"],
    answer: "The rent of the stall",
    explanation: "Fixed costs stay the same whatever number of candles is made.",
  },
  {
    prompt: "Which of these is a variable cost?",
    options: ["The wax used for each candle", "The rent of the stall", "A yearly licence fee", "Interest on a loan"],
    answer: "The wax used for each candle",
    explanation: "Variable costs change with the number of items made.",
  },
  {
    prompt: "A stall has fixed costs of R1 800 and makes 100 candles at R18 each in variable costs. What are the total costs?",
    options: ["R1 800", "R3 000", "R5 400", "R3 600"],
    answer: "R3 600",
    explanation: "R1 800 + 100 × R18 = R1 800 + R1 800 = R3 600.",
  },
  {
    prompt: "A stall sells just enough to cover all its costs, with no profit and no loss. What has it reached?",
    options: ["The profit margin", "The break-even point", "The mark-up", "The fixed cost"],
    answer: "The break-even point",
    explanation: "At break-even there is no profit and no loss.",
  },
  {
    prompt: "A candle sells for R30 and costs R18 to make. How much does each candle add towards the fixed costs?",
    options: ["R18", "R30", "R12", "R48"],
    answer: "R12",
    explanation: "R30 − R18 = R12.",
  },
  {
    prompt: "Fixed costs are R1 800, the price is R30 and the variable cost is R18. What is the break-even point?",
    options: ["150 candles", "60 candles", "100 candles", "180 candles"],
    answer: "150 candles",
    explanation: "R1 800 ÷ R12 = 150 candles.",
  },
  {
    prompt: "Fixed costs are R1 000, the price is R25 and the variable cost is R15 per item. What is the break-even point?",
    options: ["40 items", "67 items", "250 items", "100 items"],
    answer: "100 items",
    explanation: "R1 000 ÷ R10 = 100 items.",
  },
  {
    prompt: "Fixed costs are R1 000, the price is R24 and the variable cost is R15 per item. What is the break-even point, rounded up?",
    options: ["111 items", "112 items", "100 items", "67 items"],
    answer: "112 items",
    explanation: "R1 000 ÷ R9 = 111,1 and a part of an item cannot be sold, so round up to 112.",
  },
  {
    prompt: "A shop buys a cap for R50 and sells it for R65. What is the mark-up in rand?",
    options: ["R50", "R65", "R15", "R115"],
    answer: "R15",
    explanation: "R65 − R50 = R15.",
  },
  {
    prompt: "A shop buys a cap for R50 and sells it for R65. What is the mark-up percentage on the cost price?",
    options: ["30%", "15%", "23%", "50%"],
    answer: "30%",
    explanation: "R15 ÷ R50 × 100 = 30%.",
  },
  {
    prompt: "A shop buys shoes for R60 and adds a mark-up of 50% on the cost price. What is the selling price?",
    options: ["R30", "R110", "R120", "R90"],
    answer: "R90",
    explanation: "The mark-up is R30, so the selling price is R60 + R30 = R90.",
  },
  {
    prompt: "Which formula gives the mark-up percentage?",
    options: ["(Selling price − cost price) ÷ selling price × 100", "(Selling price − cost price) ÷ cost price × 100", "Cost price ÷ selling price × 100", "Selling price − cost price"],
    answer: "(Selling price − cost price) ÷ cost price × 100",
    explanation: "In this lesson the mark-up percentage is worked out on the cost price.",
  },
  {
    prompt: "A stall has sales of R20 000 and a profit of R3 000. What is the profit percentage?",
    options: ["3%", "6,7%", "15%", "17%"],
    answer: "15%",
    explanation: "R3 000 ÷ R20 000 × 100 = 15%.",
  },
  {
    prompt: "The candle stall sells 200 candles at R30. The total costs are R5 400. What is the profit?",
    options: ["R600", "R1 800", "R5 400", "R6 000"],
    answer: "R600",
    explanation: "Sales of R6 000 less total costs of R5 400 give a profit of R600.",
  },
];

const FinancialPlan = () => (
  <CapsSubjectTopic
    title="The Financial Plan: Costs, Break-even and Mark-up"
    subtitle="Fixed and variable costs, the break-even point, mark-up on cost price and profit percentage"
    learnSteps={learnSteps}
    task="gr9-financial-plan-t4"
    bank={bank}
    apiPath="/api/caps/ems"
  />
);

export default FinancialPlan;
