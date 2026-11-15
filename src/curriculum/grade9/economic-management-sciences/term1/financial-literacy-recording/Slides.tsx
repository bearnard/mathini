import type { LearnStep } from '../../../../../components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
// randNb is rand() with non-breaking spaces so amounts do not split across lines.
import { randNb as rand, sum } from '../../../../../components/diagrams/ems/emsHelpers';
import { postTransactions, trialBalance } from '../../../../../components/diagrams/ems/ems9a-helpers';
import { DebitCredit, TAccount, TrialBalanceTable } from '../../../../../components/diagrams/ems/Ems9aPictures';
import { JournalTable } from '../../../../../components/diagrams/ems/EmsPictures';

// Every amount below comes from ems9a-helpers.ts (tested in ems9a-helpers.test.ts and ems9a-lessons.test.ts).
export const TRANSACTIONS = [
  { date: '1 Jun', debit: 'Bank', credit: 'Capital', amount: 30_000, what: 'Owner invests cash' },
  { date: '4 Jun', debit: 'Bank', credit: 'Sales', amount: 2_970, what: 'Cash sales' },
  { date: '9 Jun', debit: 'Rent', credit: 'Bank', amount: 2_000, what: 'Rent paid' },
  { date: '15 Jun', debit: 'Purchases', credit: 'Bank', amount: 4_000, what: 'Goods bought for cash' },
] as const;
const accounts = postTransactions(TRANSACTIONS);
const bank = accounts[0];
const tb = trialBalance(accounts);
const receipts = TRANSACTIONS.filter((t) => t.debit === 'Bank');
const payments = TRANSACTIONS.filter((t) => t.credit === 'Bank');
const sale = 2_400;

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: 'Source documents',
    content: slide(
      <>
        <Rule>A source document is the original evidence of a transaction, such as an invoice, a receipt or a cheque counterfoil. Every entry in the books starts from one.</Rule>
        <Worked
          title="Match the document to the transaction"
          steps={['A customer pays cash: you give a receipt.', 'You buy goods on credit: the supplier sends an invoice.', 'You pay rent by cheque: the cheque counterfoil is the evidence.']}
        />
        <Mistake>Recording from memory. Without a source document there is no proof, so the entry cannot be checked.</Mistake>
      </>,
    ),
  },
  {
    title: 'Double entry and classifying a sale',
    content: slide(
      <>
        <Rule>Double entry: every transaction affects two accounts, one debited and one credited. A sale debits Bank (or Debtors if the customer owes) and credits Sales.</Rule>
        <DebitCredit debit="Bank" credit="Sales" amount={sale} aria={`A cash sale of ${rand(sale)}. Debit Bank ${rand(sale)} and credit Sales ${rand(sale)}.`} />
        <Worked
          title={`A cash sale of ${rand(sale)}`}
          steps={['Cash comes in, so debit Bank.', 'Income is earned, so credit Sales.', 'If the customer will pay later, debit Debtors instead of Bank.']}
        />
        <Mistake>Swapping the sides, so Sales is debited. A sale never reduces Sales; it adds to it on the credit side.</Mistake>
      </>,
    ),
  },
  {
    title: 'Journals: CRJ and CPJ',
    content: slide(
      <>
        <Rule>A journal records transactions in date order before they are posted to the ledger. The CRJ (Cash Receipts Journal) records cash received. The CPJ (Cash Payments Journal) records cash paid out.</Rule>
        <JournalTable
          title="Cash receipts journal (CRJ), June"
          columns={['Date', 'Details', 'Amount']}
          rows={receipts.map((t) => [t.date, t.what, t.amount])}
          total={{ label: 'Total received', amount: sum(receipts.map((t) => t.amount)) }}
          aria={`Cash receipts journal with receipts of ${receipts.map((t) => rand(t.amount)).join(' and ')}, a total of ${rand(sum(receipts.map((t) => t.amount)))}.`}
        />
        <Worked
          title="CPJ for the same month"
          steps={[<>Payments: {payments.map((t) => `${t.what} ${rand(t.amount)}`).join(', ')}.</>, <>Total paid out: {payments.map((t) => rand(t.amount)).join(' + ')} = {rand(sum(payments.map((t) => t.amount)))}.</>]}
        />
        <Mistake>Reading CRJ as Cash Register Journal. It is the Cash Receipts Journal.</Mistake>
      </>,
    ),
  },
  {
    title: 'The ledger account',
    content: slide(
      <>
        <Rule>The ledger groups every entry by account so all the activity for one account is in one place. Post each journal entry to the debit or credit side, then find the balance.</Rule>
        <TAccount
          account={bank}
          aria={`The Bank account. Debit side ${bank.debits.map(rand).join(' and ')}, total ${rand(bank.totalDebit)}. Credit side ${bank.credits.map(rand).join(' and ')}, total ${rand(bank.totalCredit)}. The balance is ${rand(bank.balance)} on the debit side.`}
        />
        <Worked
          title="Find the Bank balance"
          steps={[<>Debit side: {bank.debits.map(rand).join(' + ')} = {rand(bank.totalDebit)}.</>, <>Credit side: {bank.credits.map(rand).join(' + ')} = {rand(bank.totalCredit)}.</>, <>Balance: {rand(bank.totalDebit)} − {rand(bank.totalCredit)} = {rand(bank.balance)} (debit).</>]}
        />
        <Mistake>Thinking the ledger is a list of days. That is the journal. The ledger is organised by account.</Mistake>
      </>,
    ),
  },
  {
    title: 'The trial balance',
    content: slide(
      <>
        <Rule>A trial balance lists the final balance of every ledger account in a debit or credit column. If the two totals are equal, the double entry is in balance.</Rule>
        <TrialBalanceTable
          rows={tb.rows}
          totalDebit={tb.totalDebit}
          totalCredit={tb.totalCredit}
          aria={`Trial balance. Debit column total ${rand(tb.totalDebit)} and credit column total ${rand(tb.totalCredit)}, so the books agree.`}
        />
        <Worked steps={[<>Debits: {tb.rows.filter((r) => r.debit !== null).map((r) => rand(r.debit ?? 0)).join(' + ')} = {rand(tb.totalDebit)}.</>, <>Credits: {tb.rows.filter((r) => r.credit !== null).map((r) => rand(r.credit ?? 0)).join(' + ')} = {rand(tb.totalCredit)}. They agree.</>]} />
        <Mistake>Expecting the trial balance to show the profit. It only checks that debits equal credits.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        question={
          <ol className="list-decimal space-y-2 pl-5">
            <li>What is a source document? Give an example.</li>
            <li>A cash sale of {rand(sale)}: which account is debited and which credited?</li>
            <li>What does CRJ stand for?</li>
            <li>What does a trial balance check?</li>
          </ol>
        }
        answer={
          <ol className="list-decimal space-y-2 pl-5">
            <li>Original evidence of a transaction, such as an invoice or receipt.</li>
            <li>Debit Bank {rand(sale)}, credit Sales {rand(sale)}.</li>
            <li>Cash Receipts Journal.</li>
            <li>That total debits equal total credits.</li>
          </ol>
        }
      />,
    ),
  },
];
