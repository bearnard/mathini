import type { LearnStep } from '../../../../../components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { NumberedSteps } from '../../../../../components/diagrams/business/NumberedSteps';
// randNb is rand() with non-breaking spaces so amounts do not split across lines.
import { randNb as rand, budgetBalance, sum } from '../../../../../components/diagrams/ems/emsHelpers';
import { BudgetBars, CompareCards } from '../../../../../components/diagrams/ems/EmsPictures';
import { HubDiagram } from '../../../../../components/diagrams/ems/Ems9bPictures';

// Every amount below comes from emsHelpers.ts (tested in ems9b-helpers.test.ts and ems9b-lessons.test.ts).
const START = [3500, 1200, 2300]; // fridge, shelves, first stock
const startUp = sum(START);
const plan = budgetBalance(6000, 4800); // expected month: income against spending
const q3 = budgetBalance(9000, 9800);

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: 'The business plan',
    content: slide(
      <>
        <Rule>A business plan is a written roadmap. It guides decisions and explains the idea to investors and banks. It does not guarantee success.</Rule>
        <NumberedSteps
          label="Sections of a business plan"
          heading="Sections of a business plan"
          tone="blue"
          steps={[
            { lead: 'Business idea', text: ' and the owner.' },
            { lead: 'Market analysis', text: ' and product description.' },
            { lead: 'Marketing plan', text: ' and operations.' },
            { lead: 'Management team', text: ' and experience.' },
            { lead: 'Financial projections', text: ' for each year.' },
          ]}
        />
        <Worked
          title="Which section answers the question?"
          steps={['Who will buy and what exactly do we sell? Market analysis and product description.', 'How much money do we need? Financial projections.']}
        />
        <Mistake>Believing a plan guarantees success, or that only big companies need one. Small businesses use plans to get loans.</Mistake>
      </>,
    ),
  },
  {
    title: 'Putting numbers in the plan',
    content: slide(
      <>
        <Rule>The financial section lists start-up costs and compares expected income with expected spending.</Rule>
        <BudgetBars
          income={plan.income}
          spending={plan.spending}
          aria={`Two bars. Thuli's tuckshop expects ${rand(plan.income)} income and ${rand(plan.spending)} spending in a month, so it plans a surplus of ${rand(plan.amount)}.`}
        />
        <Worked
          title="Thuli's tuckshop"
          steps={[
            <>Start-up costs: fridge {rand(START[0])} + shelves {rand(START[1])} + first stock {rand(START[2])} = {rand(startUp)}.</>,
            <>Expected month: {rand(plan.income)} − {rand(plan.spending)} = {plan.kind} of {rand(plan.amount)}.</>,
          ]}
        />
        <Mistake>Leaving out start-up costs. Investors want to know the total you need before the first sale.</Mistake>
      </>,
    ),
  },
  {
    title: 'Business functions',
    content: slide(
      <>
        <Rule>
          Production makes goods or services efficiently. Purchasing acquires materials and supplies. Marketing shows customers the value, builds relationships and drives sales. Management coordinates all functions and shares out resources.
        </Rule>
        <HubDiagram
          centre={['Management']}
          spokes={[{ lines: ['Production'] }, { lines: ['Purchasing'] }, { lines: ['Marketing'] }, { lines: ['Finance'] }, { lines: ['Human', 'resources'] }]}
          aria="Management in the middle, joined to five business functions around it: production, purchasing, marketing, finance and human resources."
        />
        <Worked
          title="A bakery"
          steps={['Purchasing buys flour and yeast.', 'Production bakes the bread.', 'Marketing puts up posters. Management makes sure they work together.']}
        />
        <Mistake>Mixing up purchasing and selling. Purchasing buys inputs; marketing sells the finished goods.</Mistake>
      </>,
    ),
  },
  {
    title: 'Internal and external environment',
    content: slide(
      <>
        <Rule>Internal factors are inside the business and it can control them. External factors come from outside. They bring opportunities and threats to the plan.</Rule>
        <CompareCards
          left={{ title: 'Internal', lines: ['Company culture', 'Employee skills', 'Equipment and technology'] }}
          right={{ title: 'External', lines: ['Competition and customers', 'Laws and taxes', 'The state of the economy'] }}
        />
        <Worked
          title="Internal or external?"
          steps={['Staff training: internal, the owner decides.', 'A new competitor opens nearby: external, a threat.', 'A new oven: internal.']}
        />
        <Mistake>Thinking external factors do not matter because the owner controls the market. A recession or new law can change a plan.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        question={
          <ol className="list-decimal space-y-2 pl-5">
            <li>Which section of a business plan describes the product and the market?</li>
            <li>What does the purchasing function manage?</li>
            <li>A shop expects {rand(q3.income)} income and {rand(q3.spending)} spending. Surplus or deficit?</li>
            <li>Is company culture an internal or an external factor?</li>
          </ol>
        }
        answer={
          <ol className="list-decimal space-y-2 pl-5">
            <li>Market analysis and product description.</li>
            <li>Acquiring the materials and supplies needed for production.</li>
            <li>A {q3.kind} of {rand(q3.amount)}.</li>
            <li>Internal.</li>
          </ol>
        }
      />,
    ),
  },
];
