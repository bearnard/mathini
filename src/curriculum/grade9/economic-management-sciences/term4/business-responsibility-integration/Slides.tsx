import type { LearnStep } from '../../../../../components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { NumberedSteps } from '../../../../../components/diagrams/business/NumberedSteps';
// randNb is rand() with non-breaking spaces so amounts do not split across lines.
import { randNb as rand, budgetBalance, sum } from '../../../../../components/diagrams/ems/emsHelpers';
import { BudgetBars, CompareCards } from '../../../../../components/diagrams/ems/EmsPictures';
import { HubDiagram } from '../../../../../components/diagrams/ems/Ems9bPictures';

// Every amount below comes from emsHelpers.ts (tested in ems9b-lessons.test.ts).
const spending = [12400, 1000, 2000]; // stock and wages, rent, loan repayment
const month = budgetBalance(18000, sum(spending));
const q4 = budgetBalance(9000, 9800);

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: 'Responsibility to employees',
    content: slide(
      <>
        <Rule>A business must give fair wages, safe working conditions and protect workers&apos; legal rights. The Basic Conditions of Employment Act sets minimum standards on working hours, leave and pay.</Rule>
        <CompareCards
          left={{ title: 'Responsible employer', lines: ['Pays fairly', 'Fixes unsafe machines', 'Gives the leave the law requires'] }}
          right={{ title: 'Irresponsible employer', lines: ['Pays as little as possible', 'Ignores safety', 'Refuses leave'] }}
        />
        <Worked
          title="A worker asks for the leave the law gives"
          steps={['The Act is not a choice; it applies to private firms too.', 'The employer must follow it, so refusing is breaking the law.']}
        />
        <Mistake>Thinking the Act is only a voluntary code, or only for government workers. It sets minimum standards for all businesses.</Mistake>
      </>,
    ),
  },
  {
    title: 'Social responsibility and customers',
    content: slide(
      <>
        <Rule>Corporate social responsibility means operating ethically and contributing positively to society and the environment. A responsible business also deals with customer complaints promptly.</Rule>
        <NumberedSteps
          label="Handling a customer complaint"
          heading="Handling a complaint"
          tone="amber"
          steps={[
            { lead: 'Listen', text: ' to the customer.' },
            { lead: 'Fix', text: ' the problem quickly.' },
            { lead: 'Record', text: ' what went wrong.' },
            { lead: 'Improve', text: ' the product or service.' },
          ]}
        />
        <Mistake>Believing CSR means giving away all profit, or that profit alone matters. It balances profit with a positive effect.</Mistake>
      </>,
    ),
  },
  {
    title: 'Records and financial literacy',
    content: slide(
      <>
        <Rule>Honest records give transparency, show the business follows the law and prove ethical practice. Sound money management lets a business pay its debts and invest wisely.</Rule>
        <BudgetBars
          income={month.income}
          spending={month.spending}
          aria={`Two bars. A shop has ${rand(month.income)} income and ${rand(month.spending)} spending, including a loan repayment. It has a surplus of ${rand(month.amount)}.`}
        />
        <Worked
          title="A month, with a loan repayment"
          steps={[<>Spending: {rand(spending[0])} + {rand(spending[1])} + {rand(spending[2])} = {rand(month.spending)}.</>, <>{rand(month.income)} − {rand(month.spending)} = {month.kind} of {rand(month.amount)}, so the debt is paid.</>]}
        />
        <Mistake>Hiding sales from the tax office or skipping records because the firm is small. Every business needs honest records.</Mistake>
      </>,
    ),
  },
  {
    title: 'Economic systems and entrepreneurs',
    content: slide(
      <>
        <Rule>The openness of an economic system affects entrepreneurial opportunity and market access. South Africa has a mixed economy.</Rule>
        <CompareCards
          left={{ title: 'Market economy', lines: ['Businesses and buyers decide what is made', 'Easier to start and enter markets'] }}
          right={{ title: 'Command economy', lines: ['The state decides what is made', 'Few chances for new firms'] }}
        />
        <Worked
          title="Why does it matter to Lerato?"
          steps={['She wants to open a spaza shop.', 'In an open system she can choose her goods and prices.', 'In a tightly controlled system she may not be allowed to start.']}
        />
        <Mistake>Thinking entrepreneurs work outside the economic system. The system shapes what they may do.</Mistake>
      </>,
    ),
  },
  {
    title: 'Integrated business decisions',
    content: slide(
      <>
        <Rule>A good decision considers economic viability, customers, staff welfare, the law and the community together, not one function alone.</Rule>
        <HubDiagram
          centre={['Decision']}
          spokes={[{ lines: ['Viability'] }, { lines: ['Customers'] }, { lines: ['Staff'] }, { lines: ['The law'] }, { lines: ['Community'] }]}
          aria="A decision in the middle joined to five things it must consider: economic viability, customers, staff, the law and the community."
        />
        <Worked
          title="Should a factory cut safety training to save money?"
          steps={['Viability: saves money now.', 'Staff and law: unsafe, and it may break labour law.', 'Verdict: no. The cost to staff and the law outweighs the saving.']}
        />
        <Mistake>Judging by profit alone and dealing with everything else later.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        question={
          <ol className="list-decimal space-y-2 pl-5">
            <li>Name two things a business owes its employees.</li>
            <li>What does corporate social responsibility mean?</li>
            <li>Name one reason a business keeps honest records.</li>
            <li>A shop has {rand(q4.income)} income and {rand(q4.spending)} spending. Surplus or deficit, and how much?</li>
          </ol>
        }
        answer={
          <ol className="list-decimal space-y-2 pl-5">
            <li>Any two of: fair wages, safe conditions, legal rights.</li>
            <li>Operating ethically and contributing positively to society and the environment.</li>
            <li>Transparency, following the law or showing ethical practice.</li>
            <li>A {q4.kind} of {rand(q4.amount)}.</li>
          </ol>
        }
      />,
    ),
  },
];
