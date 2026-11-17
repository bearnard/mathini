import type { LearnStep } from '../../../../../components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { randNb as rand, sum } from '../../../../../components/diagrams/ems/emsHelpers';
import { DebitCredit, TAccount, TrialBalanceTable } from '../../../../../components/diagrams/ems/Ems9aPictures';
import { debtorsLedger, debtorsPostings, partyAccount, postTransactions, reconciles, trialBalance } from '../../../../../components/diagrams/ems/ems9c-helpers';
import { CRJ, DAJ, DJ } from '../../term2/debtors-credit/Slides';

// The same March journals as the credit-sales lesson. Every amount below comes from ems9c-helpers.ts (tested in ems9c-helpers.test.ts and g9EmsLedgers.test.ts).
export { CRJ, DAJ, DJ };
const ledger = debtorsLedger(DJ, DAJ, CRJ);
const posts = debtorsPostings(DJ, DAJ, CRJ);
const gl = postTransactions(posts);
const tb = trialBalance(gl);
const control = gl.find((a) => a.name === 'Debtors control')!;
const acc = (name: string) => partyAccount(ledger.find((a) => a.name === name)!, 'debtor');
const dlamini = acc('Dlamini');
const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;
const total = sum(ledger.map((a) => a.balance));

export const learnSteps: LearnStep[] = [
  {
    title: 'Two ledgers for debtors',
    content: slide(
      <>
        <Rule>The business keeps a debtors ledger with one account for each debtor, so it knows who owes what. The general ledger has one Debtors control account that shows the total owed by all debtors.</Rule>
        <DebitCredit debit="Debtors control" credit="Sales" amount={sum(DJ.map((x) => x.amount))} aria={`The monthly total of the debtors journal, ${rand(sum(DJ.map((x) => x.amount)))}, is posted to the general ledger: debit Debtors control and credit Sales.`} />
        <Worked
          steps={[
            'Each invoice in the debtors journal is posted to the debtor\'s own account in the debtors ledger.',
            `The total of the journal, ${rand(sum(DJ.map((x) => x.amount)))}, is posted once to the general ledger.`,
            'The debtors ledger is a list of accounts kept for information. The general ledger is the main set of accounts.',
          ]}
        />
        <Mistake>Thinking that the debtors ledger is part of the general ledger accounts. It is a separate list that must agree with the control account.</Mistake>
      </>,
    ),
  },
  {
    title: 'Posting to a debtor\'s account',
    content: slide(
      <>
        <Rule>On a debtor\'s account, invoices are debited (the debtor owes more). Credit notes and payments are credited (the debtor owes less). The difference is the amount owing.</Rule>
        <TAccount account={dlamini} aria={`The account of Dlamini. Debit side ${dlamini.debits.map(rand).join(' and ')} (two invoices). Credit side ${dlamini.credits.map(rand).join('')} (one payment). The balance is ${rand(dlamini.balance)} on the debit side.`} />
        <Worked
          steps={[
            `Debits: invoices of ${dlamini.debits.map(rand).join(' and ')}, a total of ${rand(dlamini.totalDebit)}.`,
            `Credits: the payment of ${dlamini.credits.map(rand).join('')}.`,
            `Balance: ${rand(dlamini.totalDebit)} − ${rand(dlamini.totalCredit)} = ${rand(dlamini.balance)}. Dlamini still owes ${rand(dlamini.balance)}.`,
          ]}
        />
        <Mistake>Posting a payment to the debit side of the debtor\'s account. A payment reduces the debt, so it is a credit.</Mistake>
      </>,
    ),
  },
  {
    title: 'Posting the totals to the general ledger',
    content: slide(
      <>
        <Rule>The totals of the three debtors journals are posted to the general ledger. This gives the Debtors control account, and the general ledger still balances.</Rule>
        <TrialBalanceTable rows={tb.rows} totalDebit={tb.totalDebit} totalCredit={tb.totalCredit} aria={`Trial balance from the debtors journals: Debtors control ${rand(control.balance)} debit, Sales ${rand(sum(DJ.map((x) => x.amount)))} credit, Debtors allowances ${rand(sum(DAJ.map((x) => x.amount)))} debit and Bank ${rand(sum(CRJ.map((x) => x.amount)))} debit. Both columns total ${rand(tb.totalDebit)}.`} />
        <Worked
          steps={[
            `DJ total: debit Debtors control, credit Sales ${rand(sum(DJ.map((x) => x.amount)))}.`,
            `DAJ total: debit Debtors allowances, credit Debtors control ${rand(sum(DAJ.map((x) => x.amount)))}.`,
            `CRJ total: debit Bank, credit Debtors control ${rand(sum(CRJ.map((x) => x.amount)))}.`,
            `Debtors control balance: ${rand(sum(DJ.map((x) => x.amount)))} − ${rand(sum(DAJ.map((x) => x.amount)))} − ${rand(sum(CRJ.map((x) => x.amount)))} = ${rand(control.balance)}. Both trial balance columns total ${rand(tb.totalDebit)}.`,
          ]}
        />
        <Mistake>Posting the individual receipts to Debtors control as well as the total. The control account gets each journal total once.</Mistake>
      </>,
    ),
  },
  {
    title: 'Does the list agree with the control account?',
    content: slide(
      <>
        <Rule>When the month ends, add up all the debtors&rsquo; balances. The sum has to be the same as Debtors control. If it is not, there is an error to find.</Rule>
        <TAccount account={control} aria={`The Debtors control account. The balance is ${rand(control.balance)} on the debit side, the same as the total of the debtors list.`} />
        <Worked
          steps={[
            `Debtors list: ${ledger.map((a) => `${a.name} ${rand(a.balance)}`).join(', ')}.`,
            `Total: ${rand(total)}. Debtors control: ${rand(control.balance)}. They agree: ${reconciles(ledger, control.balance) ? 'yes' : 'no'}.`,
            `If Pillay's invoice were posted as ${rand(1050)} instead of ${rand(1500)}, the list would total ${rand(total - 450)}, ${rand(450)} less than the control account.`,
          ]}
        />
        <Mistake>Ignoring a difference. A difference means that an amount was posted wrongly or left out, and it must be found.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          <>Which side of a debtor&rsquo;s account takes an invoice?</>,
          <>A debtor&rsquo;s account has debits of R800 and R200 and a credit of R500. What is the balance?</>,
          <>The debtors list adds up to R3 000 and Debtors control shows R3 200. Does the ledger agree?</>,
        ]}
        answers={[
          <>On the debit side.</>,
          <>800 + 200 − 500 = <strong>R500</strong> debit.</>,
          <>No. There is a difference of R200 to find.</>,
        ]}
      />,
    ),
  },
];
