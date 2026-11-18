import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { FactCards } from '../../../../../components/diagrams/aq10/Aq10';
import { JournalTable } from '../../../../../components/diagrams/ems/EmsPictures';
import { randNb } from '../../../../../components/diagrams/ems/emsHelpers';
import { AmountBars, TwoBars } from '../../../../../components/diagrams/accounting/Club11';
import { GAAP, isMaterial, matching, recordedAt, stockValue } from '../../../../../components/diagrams/accounting/club11';

// Every amount comes from club11.ts (tested in club11.test.ts and g11AccGaps.test.ts).
const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;
const m = matching(14000, 14, 12);

export const learnSteps: LearnStep[] = [
  {
    title: 'GAAP: why we need principles',
    content: slide(
      <>
        <Rule>Generally Accepted Accounting Practice (GAAP) is the set of principles that accountants follow so that financial statements are reliable and can be compared. The principles in this lesson are: {GAAP.map((g) => g.principle).join(', ')}.</Rule>
        <FactCards
          cards={[
            { title: 'Historical cost', line1: 'record assets at the price', line2: 'actually paid' },
            { title: 'Prudence', line1: 'do not overstate assets', line2: 'or profit' },
            { title: 'Materiality', line1: 'small amounts need not be', line2: 'treated separately' },
            { title: 'Business entity', line1: 'the business is separate', line2: 'from its owner' },
          ]}
          aria="GAAP principles. Historical cost: record assets at the price actually paid. Prudence: do not overstate assets or profit. Materiality: small amounts need not be treated separately. Business entity: the business is separate from its owner."
        />
        <Worked
          title="Why GAAP?"
          steps={[
            'Two businesses that follow the same principles produce statements that can be compared.',
            'Lenders and owners can trust statements that follow GAAP.',
            'Auditors check whether the statements follow the principles.',
          ]}
        />
        <Mistake>Thinking that GAAP is a law that fixes every figure. It is a set of principles that guide how transactions are recorded and reported.</Mistake>
      </>,
    ),
  },
  {
    title: 'Historical cost and prudence',
    content: slide(
      <>
        <Rule>Historical cost: an asset is recorded at the price that was actually paid, not at what it might be worth now. Prudence: when there is doubt, do not overstate assets or profit, so losses are recognised early but profits are recognised only when they are certain. A common example is stock, which is shown at the lower of its cost and its net realisable value (the price it can be sold for, less selling costs).</Rule>
        <TwoBars aLabel="cost of stock" a={80000} bLabel="net realisable value" b={70000} verdict={`stock is shown at ${randNb(stockValue(80000, 70000))}`} />
        <Worked
          title="Apply the two principles"
          steps={[
            `Equipment bought for R50 000 is now worth R65 000 on the market: it is still recorded at ${randNb(recordedAt(50000, 65000))} (historical cost).`,
            `Stock cost R80 000 but can be sold for only R70 000: it is valued at ${randNb(stockValue(80000, 70000))}, the lower amount (prudence).`,
            `If the stock could be sold for R90 000 it stays at ${randNb(stockValue(80000, 90000))}, because the profit is not yet certain.`,
          ]}
        />
        <Mistake>Writing an asset up to its market value. Under historical cost the asset stays at cost (less depreciation).</Mistake>
      </>,
    ),
  },
  {
    title: 'Materiality and business entity',
    content: slide(
      <>
        <Rule>Materiality: an amount is material if leaving it out or showing it wrongly could change the decisions of the people who use the statements. Very small amounts need not be treated separately, for example a stapler may be expensed at once instead of being recorded as an asset. Business entity: the business is a separate entity from its owner, so the owner's private transactions are not recorded as business transactions. If the owner pays a private bill from the business bank account it is drawings, not a business expense.</Rule>
        <FactCards
          cards={[
            { title: 'Material', line1: 'big enough to affect the', line2: 'decisions of users' },
            { title: 'Not material', line1: 'a R150 stapler: expense it', line2: 'at once' },
            { title: 'Business entity', line1: "the owner's private spending", line2: 'is drawings' },
          ]}
          aria="Materiality and the business entity rule. Material: big enough to affect the decisions of the users of the statements. Not material: a R150 stapler, which can be expensed at once. Business entity: the owner's private spending paid from the business is drawings."
        />
        <Worked
          title="Decide"
          steps={[
            `A stapler costs R150 and the business turnover is R2 000 000: ${isMaterial(150, 2000000) ? 'material' : 'not material'}, so it is expensed at once.`,
            `A delivery vehicle costs R50 000: ${isMaterial(50000, 2000000) ? 'material' : 'not material'}, so it is recorded as an asset and depreciated.`,
            'The owner pays a private holiday from the business bank account: this is drawings, not a business expense.',
          ]}
        />
        <Mistake>Recording the owner's private spending as a business expense. The business entity rule keeps the two separate.</Mistake>
      </>,
    ),
  },
  {
    title: 'Going concern and matching',
    content: slide(
      <>
        <Rule>Going concern: the business is assumed to continue trading for the foreseeable future, so assets are kept at cost less depreciation and not at the low prices of a forced sale. Matching: expenses are matched with the income that they helped to earn in the same period. A payment that covers more than the year is split into the expense for this year and the part that is prepaid for the next year.</Rule>
        <FactCards
          cards={[
            { title: 'Going concern', line1: 'the business will continue,', line2: 'so assets are not written off' },
            { title: 'Matching', line1: 'expenses belong to the', line2: 'year in which the income is earned' },
            { title: 'Prepaid expense', line1: 'the part of a payment that', line2: 'belongs to the next year' },
          ]}
          aria="Going concern and matching. Going concern: the business will continue, so assets are not written off. Matching: expenses belong to the year in which the income is earned. A prepaid expense is the part of a payment that belongs to the next year."
        />
        <Worked
          title="Rent paid in advance"
          steps={[
            'The business pays R14 000 for 14 months of rent, 12 of which fall in the financial year.',
            `Rent expense for the year = 14 000 ÷ 14 × 12 = ${randNb(m.expense)}.`,
            `Prepaid rent (an asset at year-end) = ${randNb(14000)} − ${randNb(m.expense)} = ${randNb(m.prepaid)}.`,
          ]}
        />
        <Mistake>Charging the whole R14 000 to this year. Under matching only R12 000 belongs to this year's income.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          <>At what amount is an asset recorded under historical cost?</>,
          <>Stock costs R80 000 and can be sold for R70 000. At what amount is it shown?</>,
          <>Which principle says that the owner's private spending is not a business expense?</>,
          <>R14 000 is paid for 14 months of rent. How much is this year's expense for 12 months?</>,
        ]}
        answers={[
          <>At the price actually paid.</>,
          <>{randNb(stockValue(80000, 70000))}.</>,
          <>The business entity rule.</>,
          <>{randNb(m.expense)}.</>,
        ]}
      />,
    ),
  },
];

export const bank: CapsItem[] = [
  {
    prompt: "What does GAAP stand for?",
    options: ["General Annual Accounts Policy", "Government Approved Auditing Procedure", "Generally Accepted Accounting Practice", "Generally Accepted Asset Pricing"],
    answer: "Generally Accepted Accounting Practice",
    explanation: "GAAP is the set of accepted accounting principles.",
  },
  {
    prompt: "Why do businesses follow GAAP?",
    options: ["So that statements are reliable and comparable", "So that they pay less tax", "So that they can avoid audits", "So that every business reports the same profit"],
    answer: "So that statements are reliable and comparable",
    explanation: "GAAP makes statements trustworthy and comparable.",
  },
  {
    prompt: "Which principle records an asset at the price actually paid?",
    options: ["Prudence", "Materiality", "Going concern", "Historical cost"],
    answer: "Historical cost",
    explanation: "Historical cost records the cost price.",
  },
  {
    prompt: "Equipment cost R50 000 and is now worth R65 000. At what amount is it recorded?",
    options: ["R65 000", "R50 000", "R15 000", "R115 000"],
    answer: "R50 000",
    explanation: "Under historical cost it stays at cost (less depreciation).",
  },
  {
    prompt: "Which principle says not to overstate assets or profit?",
    options: ["Matching", "Prudence", "Business entity", "Historical cost"],
    answer: "Prudence",
    explanation: "Prudence means caution in recognising profit and assets.",
  },
  {
    prompt: "Stock cost R80 000 and can be sold for R70 000. At what amount is it shown?",
    options: ["R80 000", "R10 000", "R150 000", "R70 000"],
    answer: "R70 000",
    explanation: "Stock is shown at the lower of cost and net realisable value.",
  },
  {
    prompt: "Stock cost R80 000 and can be sold for R90 000. At what amount is it shown?",
    options: ["R80 000", "R90 000", "R10 000", "R170 000"],
    answer: "R80 000",
    explanation: "The lower amount is used, so the unrealised profit is not recorded.",
  },
  {
    prompt: "Which principle allows a R150 stapler to be expensed immediately?",
    options: ["Prudence", "Going concern", "Materiality", "Historical cost"],
    answer: "Materiality",
    explanation: "A small amount is not material.",
  },
  {
    prompt: "A vehicle costs R50 000 and turnover is R2 000 000. Is the vehicle material (1% or more of turnover)?",
    options: ["No, it is not material", "It cannot be decided", "It is always an expense", "Yes, it is material"],
    answer: "Yes, it is material",
    explanation: "50 000 is 2,5% of 2 000 000, so it is material.",
  },
  {
    prompt: "The owner pays a private holiday from the business bank account. How is it treated?",
    options: ["As rent paid", "As the owner's drawings", "As an asset bought", "As income earned"],
    answer: "As the owner's drawings",
    explanation: "The business entity rule keeps the owner's private transactions separate.",
  },
  {
    prompt: "Which principle says the business and its owner are separate?",
    options: ["Business entity", "Going concern", "Matching", "Prudence"],
    answer: "Business entity",
    explanation: "The business is a separate entity from the owner.",
  },
  {
    prompt: "Which principle assumes the business will continue to trade?",
    options: ["Business entity", "Materiality", "Going concern", "Prudence"],
    answer: "Going concern",
    explanation: "Assets are kept at cost less depreciation because the business continues.",
  },
  {
    prompt: "R14 000 is paid for 14 months of rent. What is the rent expense for 12 months?",
    options: ["R14 000", "R2 000", "R12 000", "R1 000"],
    answer: "R12 000",
    explanation: "14 000 ÷ 14 × 12 = 12 000.",
  },
  {
    prompt: "R14 000 is paid for 14 months of rent. What is prepaid at the end of the 12-month year?",
    options: ["R2 000", "R12 000", "R14 000", "R1 000"],
    answer: "R2 000",
    explanation: "14 000 − 12 000 = 2 000, for the 2 months of next year.",
  },
];

const GaapPrinciples = () => (
  <CapsSubjectTopic
    title="GAAP Principles"
    subtitle="Historical cost, prudence, materiality, business entity, going concern and matching"
    learnSteps={learnSteps}
    task="gr11-gaap-principles-t1"
    bank={bank}
    apiPath="/api/caps/acc"
  />
);

export default GaapPrinciples;
