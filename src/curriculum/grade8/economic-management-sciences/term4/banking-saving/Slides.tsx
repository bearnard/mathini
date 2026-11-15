import type { LearnStep } from '../../../../../components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { NumberedSteps } from '../../../../../components/diagrams/business/NumberedSteps';
// randNb is rand() with non-breaking spaces so amounts do not split across lines.
import { randNb as rand, compoundYears, loanRepayment, simpleInterest } from '../../../../../components/diagrams/ems/emsHelpers';
import { BankFlow, CompareCards, GrowthBars } from '../../../../../components/diagrams/ems/EmsPictures';

// Every amount below comes from emsHelpers.ts (tested in emsHelpers.test.ts and ems8Lessons.test.ts).
const one = simpleInterest(2000, 4, 1);
const three = simpleInterest(2000, 4, 3);
const simpleBalances = [0, 1, 2, 3].map((y) => simpleInterest(1000, 5, y).total);
const compound = compoundYears(1000, 5, 3);
const simple3 = simpleInterest(1000, 5, 3);
const wrongCompound = simple3.interest; // the mistake: 3 x year-1 interest is what simple interest gives
const loan = loanRepayment(20_000, 10, 1);
const q2 = simpleInterest(5000, 6, 2);
const q3 = compoundYears(1000, 10, 2);

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: 'What a bank does',
    content: slide(
      <>
        <Rule>A bank keeps money safe, makes payments possible and lends money. It pays savers interest because it lends their deposits to borrowers.</Rule>
        <BankFlow />
        <Worked
          title="Follow a deposit"
          steps={['A saver deposits money. It is kept safe and can be used to pay for things with a card or transfer.', 'The bank lends part of the deposits to people and businesses.', 'Borrowers repay with interest, so the bank can pay the savers interest.']}
        />
        <Mistake>Thinking a bank only stores your cash. It also lends deposits out, which is how it earns money to pay you interest.</Mistake>
      </>,
    ),
  },
  {
    title: 'Savings and simple interest',
    content: slide(
      <>
        <Rule>Interest is money the bank pays you for using your deposit. Simple interest = amount × rate ÷ 100 × years. A savings account keeps money safe while it earns interest.</Rule>
        <Worked
          title={`${rand(2000)} saved at 4% a year`}
          steps={[<>One year: {rand(2000)} × 4 ÷ 100 = {rand(one.interest)}.</>, <>Three years: {rand(one.interest)} × 3 = {rand(three.interest)}.</>, <>Total in the account: {rand(2000)} + {rand(three.interest)} = {rand(three.total)}.</>]}
        />
        <Mistake>Forgetting the rate is for one year. A rate of 4% a year over three years earns three times the first year&apos;s interest.</Mistake>
      </>,
    ),
  },
  {
    title: 'Compound interest',
    content: slide(
      <>
        <Rule>With compound interest, each year&apos;s interest is added to the savings, so the next year&apos;s interest is worked out on a bigger amount. Interest earns interest.</Rule>
        <GrowthBars
          simple={simpleBalances}
          compound={compound.balances}
          aria={`Bars for ${rand(1000)} saved at 5% for three years. Simple interest grows to ${rand(simple3.total)}. Compound interest grows to ${rand(compound.closing)}, a little more.`}
        />
        <Worked
          title={`${rand(1000)} at 5% for 3 years`}
          steps={[<>Year 1: {rand(compound.balances[0])} + 5% = {rand(compound.balances[1])}.</>, <>Year 2: {rand(compound.balances[1])} + 5% = {rand(compound.balances[2])}.</>, <>Year 3: {rand(compound.balances[2])} + 5% = {rand(compound.balances[3])}. Compound interest earned {rand(compound.interestEarned)}; simple interest would be {rand(wrongCompound)}.</>]}
        />
        <Mistake>Using the starting amount every year. That is simple interest and misses the interest on interest.</Mistake>
      </>,
    ),
  },
  {
    title: 'Entrepreneurs and finding capital',
    content: slide(
      <>
        <Rule>Successful entrepreneurs are resilient, creative and willing to take risks and to adapt. To grow without enough capital they can borrow from a bank or bring in partners.</Rule>
        <CompareCards
          left={{ title: 'Bank loan', lines: ['You keep full ownership', 'Repay with interest'] }}
          right={{ title: 'Partners', lines: ['They bring capital and skills', 'Profit is shared'] }}
        />
        <Worked
          title={`Borrow ${rand(loan.borrowed)} at 10% for one year`}
          steps={[<>Interest: {rand(loan.borrowed)} × 10 ÷ 100 = {rand(loan.interest)}.</>, <>Repay {rand(loan.borrowed)} + {rand(loan.interest)} = {rand(loan.total)}.</>]}
        />
        <Mistake>Treating a loan as free money. It must be repaid with interest, even in a slow month.</Mistake>
      </>,
    ),
  },
  {
    title: 'Protecting bank customers',
    content: slide(
      <>
        <Rule>Government makes laws and regulators supervise banks and lenders to protect consumers. Banking, budgets, accounting and business all come down to managing money well.</Rule>
        <NumberedSteps
          label="How the EMS topics connect"
          heading="Money in the economy"
          tone="amber"
          steps={[
            { lead: 'Government', text: ' collects taxes and spends.' },
            { lead: 'Businesses', text: ' record transactions and make decisions.' },
            { lead: 'Banks', text: ' keep savings safe and lend.' },
            { lead: 'Regulators', text: ' protect customers.' },
          ]}
        />
        <Worked
          title="Why regulate?"
          steps={['People trust banks with their savings.', 'The Prudential Authority (in the Reserve Bank) regulates banks, and the National Credit Regulator enforces the National Credit Act.', 'Rules and checks keep deposits and borrowers safer.']}
        />
        <Mistake>Believing government plays no part in banking. Regulators exist so people&apos;s savings and credit are treated fairly.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          <>Give one function of a bank.</>,
          <>What simple interest does {rand(5000)} earn at 6% a year for 2 years?</>,
          <>What is {rand(1000)} worth after 2 years at 10% compound interest?</>,
          <>Name one way an owner who lacks capital can expand.</>,
        ]}
        answers={[
          <>Keeping money safe, making payments or lending money.</>,
          <>{rand(5000)} × 6 ÷ 100 = {rand(simpleInterest(5000, 6, 1).interest)} a year, so {rand(q2.interest)} over 2 years.</>,
          <>Year 1: {rand(q3.balances[1])}. Year 2: {rand(q3.balances[2])}.</>,
          <>Apply for a bank loan or find partners.</>,
        ]}
      />,
    ),
  },
];
