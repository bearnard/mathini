import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { FactCards } from '../../../../../components/diagrams/aq10/Aq10';
import { JournalTable } from '../../../../../components/diagrams/ems/EmsPictures';
import { randNb } from '../../../../../components/diagrams/ems/emsHelpers';
import { AmountBars, TwoBars } from '../../../../../components/diagrams/accounting/Club11';
import { MEMBERS, OPENING, PAYMENTS, RECEIPTS, closingBank, feesCheck, openingFund, totalPayments, totalReceipts } from '../../../../../components/diagrams/accounting/club11';

// Every amount comes from club11.ts (tested in club11.test.ts and g11AccGaps.test.ts): one imaginary club, Riverside Netball Club, for the year.
const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;
const fees = feesCheck();

export const learnSteps: LearnStep[] = [
  {
    title: 'Non-profit organisations and their concepts',
    content: slide(
      <>
        <Rule>A non-profit organisation (NPO), such as a sports club, exists to serve its members and not to make a profit for owners. Its rules are written in a constitution. Its terms include: the accumulated fund (the club's equivalent of owner's equity: assets minus liabilities), membership fees (paid by members each year), entrance fees (paid once by a new member), affiliation fees (paid to a larger body), an honorarium (a small payment for services, such as to a coach), a surplus (income more than expenses) and a deficit (expenses more than income).</Rule>
        <FactCards
          cards={[
            { title: 'Accumulated fund', line1: 'assets minus liabilities:', line2: "the club's equity" },
            { title: 'Membership fee', line1: 'paid each year by every', line2: 'member' },
            { title: 'Entrance fee', line1: 'paid once by a new', line2: 'member when joining' },
            { title: 'Surplus or deficit', line1: 'income more than expenses,', line2: 'or the reverse' },
          ]}
          aria="Concepts of a non-profit organisation. The accumulated fund is assets minus liabilities, the club's equity. A membership fee is paid each year by every member. An entrance fee is paid once by a new member when joining. A surplus is income more than expenses and a deficit is the reverse."
        />
        <Worked
          title={`The opening position of Riverside Netball Club (R)`}
          steps={[
            `Assets: bank ${randNb(OPENING.bank)} and equipment ${randNb(OPENING.equipment)}. Liabilities: creditors ${randNb(OPENING.creditors)}.`,
            `Accumulated fund = ${OPENING.bank} + ${OPENING.equipment} − ${OPENING.creditors} = ${randNb(openingFund())}.`,
            'This is the club\'s equity at the start of the year; it changes when the club has a surplus or a deficit.',
          ]}
        />
        <Mistake>Calling the accumulated fund the bank balance. It is assets minus liabilities, so it includes equipment as well as cash.</Mistake>
      </>,
    ),
  },
  {
    title: 'The Analysis Cash Book',
    content: slide(
      <>
        <Rule>A club records its cash in an Analysis Cash Book. The receipts side has a Bank column and analysis columns such as Membership fees, Entrance fees, Donations and Sale of refreshments. The payments side has a Bank column and analysis columns such as Honorarium, Purchase of refreshments, Repairs and Equipment. Each side is totalled and cross-cast: the Bank column equals the total of the analysis columns.</Rule>
        <AmountBars title="Receipts for the year" rows={RECEIPTS.map((r, i) => ({ label: r.name.replace('Sale of refreshments', 'Refreshments'), amount: r.amount, color: (['blue', 'green', 'amber', 'rose'] as const)[i] }))} aria="The receipts of the club for the year: membership fees R12 000, entrance fees R1 500, donations R2 000 and sale of refreshments R3 500, a total of R19 000." />
        <JournalTable
          title="Receipts of the Analysis Cash Book"
          columns={['Analysis column', 'Amount']}
          rows={RECEIPTS.map((r) => [r.name, r.amount])}
          total={{ label: 'Bank column total (= analysis total)', amount: totalReceipts() }}
          aria="The receipts side of the Analysis Cash Book: membership fees R12 000, entrance fees R1 500, donations R2 000, sale of refreshments R3 500. The Bank column total is R19 000."
        />
        <Worked
          title="Check the membership and entrance fees"
          steps={[
            `${MEMBERS.paying} members paid R${MEMBERS.feePerMember}: ${MEMBERS.paying} × ${MEMBERS.feePerMember} = ${randNb(fees.membership)}.`,
            `${MEMBERS.newMembers} new members paid an entrance fee of R${MEMBERS.entranceFee}: ${MEMBERS.newMembers} × ${MEMBERS.entranceFee} = ${randNb(fees.entrance)}.`,
            `Total receipts = ${RECEIPTS.map((r) => r.amount).join(' + ')} = ${randNb(totalReceipts())}.`,
          ]}
        />
        <Mistake>Entering the entrance fees as membership fees. They are separate accounts because a new member pays an entrance fee only once.</Mistake>
      </>,
    ),
  },
  {
    title: 'Payments and the closing bank balance',
    content: slide(
      <>
        <Rule>The payments side of the Analysis Cash Book lists the money paid out. The closing bank balance is the opening bank balance plus the total receipts minus the total payments. The payments column total must equal the analysis columns total, and the closing bank balance should agree with the bank statement.</Rule>
        <AmountBars title="Payments for the year" rows={PAYMENTS.map((r, i) => ({ label: r.name.replace(' (coach)', '').replace('Purchase of refreshments', 'Refreshments').replace('Equipment bought', 'Equipment').replace('Creditors paid', 'Creditors'), amount: r.amount, color: (['blue', 'green', 'amber', 'rose', 'blue', 'green'] as const)[i] }))} aria="The payments of the club for the year: honorarium R4 000, purchase of refreshments R2 500, repairs R1 200, bank charges R300, equipment R3 000 and creditors R1 000, a total of R12 000." />
        <JournalTable
          title="Payments of the Analysis Cash Book"
          columns={['Analysis column', 'Amount']}
          rows={PAYMENTS.map((r) => [r.name, r.amount])}
          total={{ label: 'Bank column total (= analysis total)', amount: totalPayments() }}
          aria="The payments side of the Analysis Cash Book: honorarium R4 000, purchase of refreshments R2 500, repairs R1 200, bank charges R300, equipment bought R3 000 and creditors paid R1 000. The Bank column total is R12 000."
        />
        <Worked
          title="Find the closing bank balance"
          steps={[
            `Opening bank balance: ${randNb(OPENING.bank)}.`,
            `Plus receipts ${randNb(totalReceipts())} minus payments ${randNb(totalPayments())}.`,
            `Closing bank balance = ${OPENING.bank} + ${totalReceipts()} − ${totalPayments()} = ${randNb(closingBank())}.`,
          ]}
        />
        <Mistake>Leaving out the opening bank balance. The closing balance starts from what was in the bank at the beginning of the year.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          <>What is an accumulated fund?</>,
          <>Assets are R12 000 and liabilities are R1 000. What is the accumulated fund?</>,
          <>What is the difference between a membership fee and an entrance fee?</>,
          <>Opening bank R8 000, receipts R19 000 and payments R12 000. What is the closing bank balance?</>,
        ]}
        answers={[
          <>The club's equity: assets minus liabilities.</>,
          <>{randNb(openingFund())}.</>,
          <>A membership fee is paid every year; an entrance fee is paid once when joining.</>,
          <>{randNb(closingBank())}.</>,
        ]}
      />,
    ),
  },
];

export const bank: CapsItem[] = [
  {
    prompt: "What is the main purpose of a non-profit organisation such as a sports club?",
    options: ["To make as much profit as possible", "To pay dividends to shareholders", "To serve its members", "To avoid keeping any records"],
    answer: "To serve its members",
    explanation: "A club exists for its members.",
  },
  {
    prompt: "Where are the rules of a club written?",
    options: ["In its constitution", "In its trial balance", "In its statement of receipts and payments", "In its bank statement"],
    answer: "In its constitution",
    explanation: "The constitution sets out the rules and aims of the club.",
  },
  {
    prompt: "What is the accumulated fund of a club?",
    options: ["The cash in the bank only", "The total income for the year", "The total expenses for the year", "Assets minus liabilities"],
    answer: "Assets minus liabilities",
    explanation: "It is the club's equity.",
  },
  {
    prompt: "A club has a bank balance of R8 000, equipment of R4 000 and creditors of R1 000. What is the accumulated fund?",
    options: ["R12 000", "R11 000", "R13 000", "R3 000"],
    answer: "R11 000",
    explanation: "8 000 + 4 000 − 1 000 = 11 000.",
  },
  {
    prompt: "What is a membership fee?",
    options: ["A fee paid once by a new member", "A fee paid each year by every member", "A fee paid to a larger body", "A payment to a coach"],
    answer: "A fee paid each year by every member",
    explanation: "Members pay membership fees every year.",
  },
  {
    prompt: "What is an entrance fee?",
    options: ["A fee paid each year by all members", "A fee paid to a larger body", "A fine for late payment", "A fee paid once by a new member"],
    answer: "A fee paid once by a new member",
    explanation: "An entrance fee is paid when joining.",
  },
  {
    prompt: "What is an affiliation fee?",
    options: ["A fee paid by the club to a larger body", "A fee paid by members to the club", "A fee for the use of the hall", "A refund of fees"],
    answer: "A fee paid by the club to a larger body",
    explanation: "A club pays affiliation fees to its league or association.",
  },
  {
    prompt: "What is an honorarium?",
    options: ["A large full-time salary", "A donation received", "A small payment for a service", "A membership fee paid"],
    answer: "A small payment for a service",
    explanation: "An honorarium recognises a service without being a full salary.",
  },
  {
    prompt: "A club has income of R11 000 and expenses of R8 000. What is this?",
    options: ["A deficit of R3 000", "A surplus of R19 000", "A deficit of R19 000", "A surplus of R3 000"],
    answer: "A surplus of R3 000",
    explanation: "Income is more than expenses by R3 000.",
  },
  {
    prompt: "Which book is used by a club to record its cash receipts and payments with analysis columns?",
    options: ["The Debtors Journal", "The Analysis Cash Book", "The Petty Cash Book", "The Stock Register"],
    answer: "The Analysis Cash Book",
    explanation: "The Analysis Cash Book has Bank and analysis columns.",
  },
  {
    prompt: "Sixty members each paid a membership fee of R200. What is the total membership fees?",
    options: ["R12 000", "R260", "R6 000", "R120 000"],
    answer: "R12 000",
    explanation: "60 × 200 = 12 000.",
  },
  {
    prompt: "Thirty new members each paid an entrance fee of R50. What are the entrance fees?",
    options: ["R80", "R150", "R1 500", "R15 000"],
    answer: "R1 500",
    explanation: "30 × 50 = 1 500.",
  },
  {
    prompt: "The receipts columns are R12 000, R1 500, R2 000 and R3 500. What is the total receipts?",
    options: ["R17 500", "R15 000", "R19 000", "R21 000"],
    answer: "R19 000",
    explanation: "12 000 + 1 500 + 2 000 + 3 500 = 19 000.",
  },
  {
    prompt: "Opening bank is R8 000, receipts are R19 000 and payments are R12 000. What is the closing bank balance?",
    options: ["R15 000", "R27 000", "R39 000", "R7 000"],
    answer: "R15 000",
    explanation: "8 000 + 19 000 − 12 000 = 15 000.",
  },
];

const NpoConceptsAnalysisCashBook = () => (
  <CapsSubjectTopic
    title="Non-Profit Organisations: Concepts and the Analysis Cash Book"
    subtitle="Club concepts, the accumulated fund, fees and the Analysis Cash Book"
    learnSteps={learnSteps}
    task="gr11-npo-concepts-analysis-cash-book-t2"
    bank={bank}
    apiPath="/api/caps/acc"
  />
);

export default NpoConceptsAnalysisCashBook;
