import type { LearnStep } from '../../../../../components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { rand } from '../../../../../components/diagrams/accounting/rand';
import { CASH, cashDifference } from '../../../../../components/diagrams/accounting/auditExamples';
import { StatementTable } from '../../../../../components/diagrams/accounting/StatementTable';

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;
const diff = cashDifference(CASH.expected, CASH.counted);

export const learnSteps: LearnStep[] = [
  {
    title: 'Internal control and internal audit',
    content: slide(
      <>
        <Rule>Internal control is the set of rules and procedures that a business puts in place to protect its assets, keep accurate records and make sure that its rules are followed. An internal audit is a check, by someone inside the business, of whether those controls work.</Rule>
        <Worked
          title="The difference"
          steps={[
            <><strong>Internal control</strong> is done by everyone, every day, as part of the work: for example, two people counting the cash.</>,
            <><strong>Internal audit</strong> is a separate check. The internal auditor tests the controls and reports to management.</>,
            <>Good controls make errors and theft less likely. The internal audit shows whether the controls are working.</>,
          ]}
        />
        <Mistake>Thinking that they are the same. Internal control is the system; internal audit is the check on the system.</Mistake>
      </>,
    ),
  },
  {
    title: 'Division of duties, documentation and physical controls',
    content: slide(
      <>
        <Rule>Three kinds of control protect a business. Each one makes it harder for an error or a fraud to go unnoticed.</Rule>
        <Worked
          steps={[
            <><strong>Division of duties:</strong> no one person handles a transaction from start to finish. The person who receives the cash does not record it, and the person who authorises a payment does not sign the cheque.</>,
            <><strong>Documentation:</strong> pre-numbered documents (invoices, receipts, orders) are used in order, and every transaction has a source document that can be checked.</>,
            <><strong>Physical controls:</strong> locked safes and storerooms, security staff and cameras, and access only for authorised people.</>,
          ]}
        />
        <Mistake>Trusting one person with a whole process because he is honest. Division of duties protects the honest person as well.</Mistake>
      </>,
    ),
  },
  {
    title: 'Handling cash',
    content: slide(
      <>
        <Rule>Cash is the easiest asset to steal, so it needs strong controls: a cash register that records every sale, a daily count by two people, and banking of all cash received without delay.</Rule>
        <StatementTable title="Cash count at closing time" lines={[{ label: 'Cash expected from the till slips', amount: CASH.expected }, { label: 'Cash counted in the till', amount: CASH.counted }, { label: diff < 0 ? 'Shortage' : 'Excess', amount: Math.abs(diff), bold: true }]} aria={`A cash count. Expected from the till slips ${rand(CASH.expected)}, counted ${rand(CASH.counted)}, so there is a shortage of ${rand(Math.abs(diff))}.`} />
        <Worked
          steps={[
            `Shortage: ${rand(CASH.expected)} − ${rand(CASH.counted)} = ${rand(Math.abs(diff))}.`,
            'The difference is investigated and reported to a manager. It is not hidden or paid back quietly.',
            'The cash is banked in full the same day, and the bank reconciliation compares the bank statement with the cash book.',
          ]}
        />
        <Mistake>Using the cash received to pay small expenses before banking it. All cash must be banked intact so that the records agree.</Mistake>
      </>,
    ),
  },
  {
    title: 'Credit, stock, debtors and creditors',
    content: slide(
      <>
        <Rule>Each part of the business has its own procedures that apply the three kinds of control.</Rule>
        <Worked
          steps={[
            <><strong>Buying on credit:</strong> orders are authorised, goods received are checked against the order, and the invoice is checked before it is paid.</>,
            <><strong>Selling on credit:</strong> the customer&rsquo;s credit is checked and a credit limit is set. Goods are issued only against an approved order.</>,
            <><strong>Stock:</strong> stock is kept locked, issued only with a document, and counted regularly against the records.</>,
            <><strong>Debtors:</strong> monthly statements are sent, an age analysis is drawn up, and overdue accounts are followed up.</>,
            <><strong>Creditors:</strong> payments are made only against approved invoices, and creditors&rsquo; statements are reconciled with the ledger.</>,
          ]}
        />
        <Mistake>Paying an invoice because it is on the desk. Check it against the order and the goods received first.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          <>What is the difference between internal control and an internal audit?</>,
          <>Give an example of division of duties when cash is received.</>,
          <>The till slips show R6 300 and R6 250 is counted. What is the difference, and what must be done?</>,
          <>Name one control for stock.</>,
        ]}
        answers={[
          <>Internal control is the system of rules and procedures; an internal audit checks whether the system works.</>,
          <>The person who receives the cash does not record it in the books.</>,
          <>A shortage of <strong>R50</strong>. It must be investigated and reported to a manager.</>,
          <>Any one of: locked storeroom, issue only with a document, regular stock counts.</>,
        ]}
      />,
    ),
  },
];
