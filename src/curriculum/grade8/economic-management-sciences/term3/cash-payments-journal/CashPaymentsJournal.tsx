import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { FactCards } from '../../../../../components/diagrams/aq10/Aq10';
import { EquationBalance, JournalTable } from '../../../../../components/diagrams/ems/EmsPictures';
import { JournalColumns } from '../../../../../components/diagrams/ems/Ems8bPictures';
import { randNb } from '../../../../../components/diagrams/ems/emsHelpers';
import { CPJ_ENTRIES, combinedTotals, cpjAnalysis, cpjTotal, equationAfterAll, paymentEffect } from '../../../../../components/diagrams/ems/ems8c-helpers';

// Every amount comes from ems8c-helpers.ts (tested in ems8c-helpers.test.ts and g8EmsT3.test.ts): the same service business as in Term 2.
const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;
const ct = combinedTotals();
const eq = equationAfterAll();
const parts = cpjAnalysis();

export const learnSteps: LearnStep[] = [
  {
    title: 'The Cash Payments Journal',
    content: slide(
      <>
        <Rule>The Cash Payments Journal (CPJ) is the book in which a business records all the money it pays out. It has a date column, a document number column (the cheque or payment number), a details column, a Bank column and analysis columns that show what the money was spent on, for example Rent, Telephone, Salaries and Equipment. Each entry is made from a source document such as a cheque counterfoil or a till slip.</Rule>
        <JournalColumns bank={cpjTotal()} parts={parts.map((p) => ({ label: p.account.replace(' expense', ''), amount: p.amount }))} bankLabel="Bank" />
        <Worked
          title="Why analysis columns?"
          steps={[
            'The Bank column shows how much money left the bank account.',
            'The analysis columns show what each payment was for, so expenses and assets can be added up later.',
            `Every payment is entered once in the Bank column and once in an analysis column, so the totals must agree (${randNb(cpjTotal())}).`,
          ]}
        />
        <Mistake>Entering money received in the Cash Payments Journal. Receipts go in the Cash Receipts Journal.</Mistake>
      </>,
    ),
  },
  {
    title: 'Entering and closing off',
    content: slide(
      <>
        <Rule>Each payment is entered in date order with its document number and details. The journal is closed off by adding up each column, and the Bank column total must equal the total of the analysis columns (cross-casting). The totals are then underlined twice.</Rule>
        <JournalColumns bank={cpjTotal()} parts={parts.map((p) => ({ label: p.account.replace(' expense', ''), amount: p.amount }))} bankLabel="Bank" />
        <JournalTable
          title="Cash Payments Journal of Thandi's Tutoring, March"
          columns={['Date', 'Doc and details', 'Bank']}
          rows={CPJ_ENTRIES.map((e) => [e.date, `${e.doc} ${e.details}`, e.amount])}
          total={{ label: 'Total (Bank column)', amount: cpjTotal() }}
          aria="The Cash Payments Journal for March: rent R1 500, telephone R400, salaries R1 200 and computers R2 000. The Bank column total is R5 100."
        />
        <Worked
          title="Close off the journal"
          steps={[
            `Bank column: ${CPJ_ENTRIES.map((e) => randNb(e.amount)).join(' + ')} = ${randNb(cpjTotal())}.`,
            `Analysis columns: ${parts.map((p) => randNb(p.amount)).join(' + ')} = ${randNb(cpjTotal())}.`,
            'The totals agree, so the journal cross-casts and can be closed off.',
          ]}
        />
        <Mistake>Forgetting to enter the computers (equipment). Buying an asset with cash is a payment too.</Mistake>
      </>,
    ),
  },
  {
    title: 'The combined cash journals',
    content: slide(
      <>
        <Rule>The cash journals are closed off together. The money received (total of the Cash Receipts Journal) less the money paid (total of the Cash Payments Journal) gives the cash balance, which is carried forward as the opening balance of the next period. The balance must agree with the bank statement.</Rule>
        <JournalColumns bank={ct.received} parts={[{ label: 'Paid', amount: ct.paid }, { label: 'Balance', amount: ct.balance }]} bankLabel="Received" />
        <Worked
          title="Work out the balance carried forward"
          steps={[
            `Money received (CRJ): ${randNb(ct.received)}.`,
            `Money paid (CPJ): ${randNb(ct.paid)}.`,
            `Balance carried forward = ${randNb(ct.received)} − ${randNb(ct.paid)} = ${randNb(ct.balance)}.`,
          ]}
        />
        <Mistake>Adding the two totals together. The balance is the receipts minus the payments.</Mistake>
      </>,
    ),
  },
  {
    title: 'Effect on the accounting equation',
    content: slide(
      <>
        <Rule>A payment for an expense decreases the bank (an asset) and owner's equity. Buying equipment with cash changes one asset into another: the bank decreases and equipment increases, so total assets and owner's equity do not change. After all the receipts and payments the equation still balances.</Rule>
        <EquationBalance assets={eq.assets} liabilities={eq.liabilities} equity={eq.equity} aria="After all the receipts and payments: assets R13 900 equal liabilities R0 plus owner's equity R13 900." />
        <Worked
          title="The effect of the payments"
          steps={[
            `Rent ${randNb(1500)}: assets and owner's equity both decrease by ${randNb(-(paymentEffect('Rent expense', 1500).assets ?? 0))}.`,
            `Computers ${randNb(2000)}: the bank decreases and equipment increases by ${randNb(2000)}, so total assets stay the same.`,
            `After all seven transactions: assets ${randNb(eq.assets)} = liabilities ${randNb(eq.liabilities)} + owner's equity ${randNb(eq.equity)}.`,
          ]}
        />
        <Mistake>Treating the purchase of equipment as an expense. It does not reduce owner's equity because the business now owns the equipment.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          <>What is recorded in the Cash Payments Journal?</>,
          <>Payments are R1 500, R400, R1 200 and R2 000. What is the Bank column total?</>,
          <>After R17 000 comes in and R5 100 goes out, what balance is carried forward?</>,
          <>What happens to owner's equity when rent is paid?</>,
        ]}
        answers={[
          <>All the money paid out.</>,
          <>{randNb(cpjTotal())}.</>,
          <>{randNb(ct.balance)}.</>,
          <>It decreases.</>,
        ]}
      />,
    ),
  },
];

export const bank: CapsItem[] = [
  {
    prompt: "Which transactions are entered in the Cash Payments Journal?",
    options: ["Money received from customers", "Money put in by the owner", "Money paid out of the bank", "Goods sold on credit"],
    answer: "Money paid out of the bank",
    explanation: "The CPJ records cash paid out.",
  },
  {
    prompt: "Which source document is used to enter a payment made by cheque?",
    options: ["The cheque counterfoil", "A deposit slip", "A trial balance", "An income statement"],
    answer: "The cheque counterfoil",
    explanation: "The counterfoil is the record of the cheque written.",
  },
  {
    prompt: "In the CPJ, which analysis column suits the payment of the monthly rent?",
    options: ["Fees earned", "Capital", "Bank", "Rent expense"],
    answer: "Rent expense",
    explanation: "Rent paid is an expense.",
  },
  {
    prompt: "The business pays R2 000 for computers. Which analysis column suits this payment?",
    options: ["Rent expense", "Equipment", "Salaries expense", "Fees earned"],
    answer: "Equipment",
    explanation: "Computers are an asset, called equipment.",
  },
  {
    prompt: "The CPJ has payments of R1 500, R400, R1 200 and R2 000. What is the Bank column total?",
    options: ["R3 100", "R5 100", "R4 100", "R5 000"],
    answer: "R5 100",
    explanation: "1 500 + 400 + 1 200 + 2 000 = 5 100.",
  },
  {
    prompt: "The analysis columns of the CPJ total R5 100. What should the Bank column total be?",
    options: ["R0", "R10 200", "R2 550", "R5 100"],
    answer: "R5 100",
    explanation: "The Bank column equals the sum of the analysis columns.",
  },
  {
    prompt: "What is it called when the Bank column total is checked against the analysis columns?",
    options: ["Cross-casting", "Posting", "Reconciling", "Closing the year"],
    answer: "Cross-casting",
    explanation: "Cross-casting checks that the totals agree.",
  },
  {
    prompt: "Which payment would NOT be entered in the CPJ?",
    options: ["Telephone paid", "Salaries paid", "Fees received", "Rent paid"],
    answer: "Fees received",
    explanation: "Money received goes in the Cash Receipts Journal.",
  },
  {
    prompt: "A business banked R17 000 and paid out R5 100 in a month. What balance carries forward?",
    options: ["R22 100", "R5 100", "R17 000", "R11 900"],
    answer: "R11 900",
    explanation: "17 000 − 5 100 = 11 900.",
  },
  {
    prompt: "Received R9 000 and paid R2 500. What cash balance is carried forward?",
    options: ["R11 500", "R6 500", "R2 500", "R9 000"],
    answer: "R6 500",
    explanation: "9 000 − 2 500 = 6 500.",
  },
  {
    prompt: "The cash balance carried forward should agree with which document?",
    options: ["The bank statement", "The trial balance", "A till slip", "A receipt book"],
    answer: "The bank statement",
    explanation: "The balance is checked against the bank statement.",
  },
  {
    prompt: "The business pays R1 500 rent. What happens to assets and owner's equity?",
    options: ["Both increase by R1 500", "Only assets decrease", "Both decrease by R1 500", "Liabilities increase by R1 500"],
    answer: "Both decrease by R1 500",
    explanation: "An expense reduces the bank and owner's equity.",
  },
  {
    prompt: "The business pays R2 000 cash for computers. What happens to total assets?",
    options: ["They fall by R2 000", "They rise by R2 000", "They stay the same", "They double"],
    answer: "They stay the same",
    explanation: "The bank falls and equipment rises by the same amount.",
  },
  {
    prompt: "After all seven transactions the assets are R13 900 and the liabilities are R0. What is owner's equity?",
    options: ["R13 900", "R0", "R27 800", "R11 900"],
    answer: "R13 900",
    explanation: "A = OE + L, so OE = 13 900.",
  },
];

const CashPaymentsJournal = () => (
  <CapsSubjectTopic
    title="Cash Payments Journal and the Combined Cash Journals"
    subtitle="Recording and closing off cash paid, the cash balance and the effect on the equation"
    learnSteps={learnSteps}
    task="gr8-cash-payments-journal-t3"
    bank={bank}
    apiPath="/api/caps/ems"
  />
);

export default CashPaymentsJournal;
