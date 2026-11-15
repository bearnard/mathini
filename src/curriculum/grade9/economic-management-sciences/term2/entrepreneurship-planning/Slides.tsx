import type { LearnStep } from '../../../../../components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { NumberedSteps } from '../../../../../components/diagrams/business/NumberedSteps';
// randNb is rand() with non-breaking spaces so amounts do not split across lines.
import { randNb as rand } from '../../../../../components/diagrams/ems/emsHelpers';
import { monthlyViability, startUpCapital } from '../../../../../components/diagrams/ems/ems9a-helpers';
import { BudgetBars, JournalTable } from '../../../../../components/diagrams/ems/EmsPictures';

// Every amount below comes from ems9a-helpers.ts (tested in ems9a-helpers.test.ts and ems9a-lessons.test.ts).
export const START_UP = [
  { item: 'Stall and table', amount: 600 },
  { item: 'First stock', amount: 900 },
  { item: 'Signboard', amount: 150 },
] as const;
const capital = startUpCapital(START_UP.map((s) => s.amount));
const PRICE = 15;
const GOOD_UNITS = 120;
const POOR_UNITS = 80;
const good = monthlyViability(PRICE, GOOD_UNITS, [1_350]);
const poor = monthlyViability(PRICE, POOR_UNITS, [1_350]);
const q3 = startUpCapital([2_000, 500, 250]);

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: 'Traits of a successful entrepreneur',
    content: slide(
      <>
        <Rule>Successful entrepreneurs are innovative, resilient and focused on their customers. They accept some risk, listen to feedback and adapt when a plan fails.</Rule>
        <NumberedSteps
          label="What to do when a plan fails"
          heading="When the first plan fails"
          tone="amber"
          steps={[
            { lead: 'Learn', text: ' from what went wrong.' },
            { lead: 'Adapt', text: ' the strategy.' },
            { lead: 'Try again', text: ' with the new plan.' },
          ]}
        />
        <Worked
          title="Naledi sells airtime but few people buy"
          steps={['She asks customers what they want and finds they need data bundles.', 'She adapts: she sells data bundles as well.', 'Sales rise because she listened and changed.']}
        />
        <Mistake>Giving up at once, or repeating the same plan with more effort. Resilient entrepreneurs adapt.</Mistake>
      </>,
    ),
  },
  {
    title: 'Spotting a business opportunity',
    content: slide(
      <>
        <Rule>An opportunity begins with an unmet need or problem. Recognise the need first, before you spend money or start production.</Rule>
        <NumberedSteps
          label="Steps in spotting an opportunity"
          heading="From need to opportunity"
          tone="blue"
          steps={[
            { lead: 'Recognise', text: ' an unmet need or problem.' },
            { lead: 'Research', text: ' whether people would buy.' },
            { lead: 'Check', text: ' costs and resources.' },
            { lead: 'Decide', text: ' whether to start.' },
          ]}
        />
        <Worked
          title="Learners walk far to buy lunch"
          steps={['Need: a school has no tuckshop and learners are hungry at break.', 'Research: ask learners what they would buy and how much they can pay.', 'Check costs and resources, then decide.']}
        />
        <Mistake>Starting production at once, borrowing first or copying a competitor. Find the need first.</Mistake>
      </>,
    ),
  },
  {
    title: 'Financial planning: capital needed',
    content: slide(
      <>
        <Rule>Financial planning shows the capital you need and supports steady, planned growth. A budget includes projected income and all expected expenses, so cash shortages are seen early.</Rule>
        <JournalTable
          title="Start-up costs"
          columns={['Item', 'Amount']}
          rows={START_UP.map((s) => [s.item, s.amount])}
          total={{ label: 'Capital needed', amount: capital }}
          aria={`Start-up costs: ${START_UP.map((s) => `${s.item} ${rand(s.amount)}`).join(', ')}. The capital needed is ${rand(capital)}.`}
        />
        <Worked steps={[<>Add the costs: {START_UP.map((s) => rand(s.amount)).join(' + ')} = {rand(capital)}.</>, <>The owner must find {rand(capital)} before opening.</>]} />
        <Mistake>Believing a plan guarantees a profit or removes all risk. It shows what you need and helps you prepare.</Mistake>
      </>,
    ),
  },
  {
    title: 'Is the business viable?',
    content: slide(
      <>
        <Rule>An opportunity is viable when there is market demand, costs are realistic, resources are available and the owner is capable. Test it honestly with numbers.</Rule>
        <BudgetBars income={good.income} spending={good.spending} aria={`Two bars. Expected monthly income is ${rand(good.income)} and costs are ${rand(good.spending)}, leaving ${rand(good.left)}.`} />
        <Worked
          title={`Costs ${rand(good.spending)} a month, price ${rand(PRICE)}`}
          steps={[<>If {GOOD_UNITS} are sold: {rand(good.income)} − {rand(good.spending)} = {rand(good.left)} left. Viable.</>, <>If only {POOR_UNITS} are sold: {rand(poor.income)} − {rand(poor.spending)} = {rand(poor.left)}. Not viable.</>]}
        />
        <Mistake>Thinking any idea works if you love it and work hard. Demand and costs decide viability.</Mistake>
      </>,
    ),
  },
  {
    title: 'Keeping customers',
    content: slide(
      <>
        <Rule>A small business keeps its customers through regular communication, quality products and responsive service. Loyalty is built by consistency and care.</Rule>
        <Worked
          title="A customer complains about a late order"
          steps={['Listen and thank the customer for the feedback.', 'Fix the problem quickly and say sorry.', 'Tell the customer how you will stop it happening again.']}
        />
        <Mistake>Ignoring feedback, raising prices often or lowering quality a little each month. Customers notice and leave.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          <>Name two traits of a successful entrepreneur.</>,
          <>Where does spotting a business opportunity begin?</>,
          <>Start-up costs are {rand(2_000)}, {rand(500)} and {rand(250)}. What capital is needed?</>,
          <>Name two things that make an opportunity viable.</>,
        ]}
        answers={[
          <>For example innovation, resilience, customer focus.</>,
          <>Recognise an unmet need or problem.</>,
          <>{rand(2_000)} + {rand(500)} + {rand(250)} = {rand(q3)}.</>,
          <>For example market demand and realistic costs (also resources and the owner&apos;s capability).</>,
        ]}
      />,
    ),
  },
];
