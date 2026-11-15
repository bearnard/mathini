import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import FinancialStatement from '../../../../../components/subjects/FinancialStatement';
import TAccount from '../../../../../components/subjects/TAccount';
import type { AccountingItem, LearnStep } from '../../_shared/types';

const learnSteps: LearnStep[] = [
  {
    title: 'Why do the bank statement and cashbook differ?',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          At the end of a period, the <strong>cashbook balance</strong> and the <strong>bank statement balance</strong> rarely agree — and that is perfectly normal.
        </p>
        <div className="grid gap-3 md:grid-cols-2 text-left">
          <div className="rounded-xl bg-blue-50 p-4">
            <strong className="text-blue-700">Timing differences</strong>
            <p className="text-slate-600">Transactions recorded in the cashbook that have not yet appeared on the bank statement (or vice versa).</p>
          </div>
          <div className="rounded-xl bg-amber-50 p-4">
            <strong className="text-amber-700">Errors</strong>
            <p className="text-slate-600">Mistakes made in the cashbook or, occasionally, on the bank statement itself.</p>
          </div>
        </div>
        <p className="text-sm text-slate-500">The bank reconciliation proves that the differences are known, explained, and legitimate.</p>
      </div>
    ),
  },
  {
    title: 'Common timing differences',
    content: (
      <div className="space-y-4 text-center">
        <div className="grid gap-3 md:grid-cols-2 text-left">
          <div className="rounded-xl bg-green-50 p-4">
            <strong className="text-green-700">Outstanding deposit (deposit in transit)</strong>
            <p className="text-slate-600">Cash received and recorded in the cashbook but not yet credited on the bank statement.</p>
          </div>
          <div className="rounded-xl bg-red-50 p-4">
            <strong className="text-red-700">Unpresented cheque</strong>
            <p className="text-slate-600">A cheque issued and recorded in the cashbook as a payment, but not yet cleared through the bank.</p>
          </div>
          <div className="rounded-xl bg-purple-50 p-4">
            <strong className="text-purple-700">Bank charges & interest</strong>
            <p className="text-slate-600">Appear on the bank statement but are not yet in the cashbook — adjust the cashbook balance.</p>
          </div>
          <div className="rounded-xl bg-orange-50 p-4">
            <strong className="text-orange-700">Dishonoured cheques</strong>
            <p className="text-slate-600">A cheque deposited that was later returned unpaid — reduces the bank statement and must be reversed in the cashbook.</p>
          </div>
        </div>
        <TAccount
          title="Bank Account (Cashbook adjustments)"
          debit={[
            { description: 'Interest on current account', amount: 450 },
          ]}
          credit={[
            { description: 'Bank charges', amount: 285 },
            { description: 'Dishonoured cheque - S Dlamini', amount: 1200 },
          ]}
        />
        <p className="text-sm text-slate-500">Items found only on the bank statement are first posted to the bank account in the cashbook before the reconciliation is prepared.</p>
      </div>
    ),
  },
  {
    title: 'Bank reconciliation format',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          The reconciliation starts from the <strong>bank statement balance</strong> and works toward the updated cashbook balance:
        </p>
        <FinancialStatement
          title="Bank Reconciliation Statement"
          period="At 31 May 2024"
          sections={[
            {
              heading: 'Reconciliation',
              lines: [
                { label: 'Balance per bank statement', amount: 18650 },
                { label: 'Add: Outstanding deposit', amount: 7200 },
                { label: 'Less: Unpresented cheques', amount: -3980 },
                { label: 'Corrected bank balance', amount: 21870, isTotal: true },
              ],
            },
            {
              heading: 'Updated cashbook',
              lines: [
                { label: 'Cashbook balance before updates', amount: 22905 },
                { label: 'Bank charges', amount: -285, indent: 1 },
                { label: 'Dishonoured cheque', amount: -1200, indent: 1 },
                { label: 'Interest earned', amount: 450, indent: 1 },
                { label: 'Updated cashbook balance', amount: 21870, isTotal: true },
              ],
            },
          ]}
        />
        <p className="text-sm text-slate-500">The corrected bank balance and the updated cashbook balance must agree after all known differences are processed.</p>
      </div>
    ),
  },
  {
    title: 'Creditors reconciliation and internal control',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          A <strong>creditors reconciliation</strong> compares the creditor's statement (from the supplier) with your own creditors ledger account to confirm the balance owed.
        </p>
        <TAccount
          title="Naidoo Suppliers Account"
          debit={[
            { description: 'Payment by EFT', amount: 12500 },
            { description: 'Credit note for damaged goods', amount: 1800 },
          ]}
          credit={[
            { description: 'Balance b/d', amount: 16200 },
            { description: 'Invoice 4587', amount: 6400 },
            { description: 'Invoice 4612', amount: 3700 },
          ]}
        />
        <div className="bg-slate-50 p-5 rounded-xl text-left space-y-2">
          <p className="font-bold text-slate-700">Internal controls for reconciliations:</p>
          <ul className="list-disc list-inside text-slate-600 space-y-1">
            <li>The person who prepares the cashbook should <strong>not</strong> perform the bank reconciliation.</li>
            <li>Reconciliations must be reviewed and signed off by a supervisor.</li>
            <li>Any unresolved differences must be investigated promptly.</li>
            <li>Access to blank cheques and banking systems must be restricted.</li>
          </ul>
        </div>
      </div>
    ),
  },
];

const bank: AccountingItem[] = [
  {
    prompt: 'What is the main purpose of a bank reconciliation?',
    options: ['To bring the bank statement up to date for the month', 'To confirm differences between cashbook and bank statement are explained', 'To calculate the profit for the period', 'To prepare the statement of financial position'],
    answer: 'To confirm differences between cashbook and bank statement are explained',
    explanation: 'A bank reconciliation identifies timing differences and errors so management can trust the cashbook balance.',
  },
  {
    prompt: 'A deposit recorded in the cashbook has not yet appeared on the bank statement. This is called a(n):',
    options: ['Unpresented cheque', 'Outstanding deposit', 'Bank error', 'Dishonoured cheque'],
    answer: 'Outstanding deposit',
    explanation: 'An outstanding deposit (deposit in transit) has been recorded in the cashbook but not yet credited by the bank.',
  },
  {
    prompt: 'A cheque issued and recorded as a payment in the cashbook has not yet cleared the bank. This is called a(n):',
    options: ['Outstanding deposit', 'Bank charge', 'Unpresented cheque', 'Stale cheque'],
    answer: 'Unpresented cheque',
    explanation: 'An unpresented cheque reduces the cashbook balance but has not yet reduced the bank statement balance.',
  },
  {
    prompt: 'On a bank statement, a debit entry means the bank has:',
    options: [
      'Increased your account balance',
      'Reduced your account balance',
      'Deposited money for you',
      'Credited interest to your account',
    ],
    answer: 'Reduced your account balance',
    explanation: "From the bank's perspective your account is a liability. A debit on the statement reduces that liability, meaning money has left your account.",
  },
  {
    prompt: 'A cheque that was deposited but later returned unpaid is called a:',
    options: ['Unpresented cheque', 'Stale cheque', 'Dishonoured cheque', 'Outstanding cheque'],
    answer: 'Dishonoured cheque',
    explanation: 'A dishonoured (bounced) cheque must be reversed in the cashbook because the bank has reclaimed the funds.',
  },
  {
    prompt: 'Bank service charges appear on the bank statement but not in the cashbook. To correct this, the cashbook balance must be:',
    options: ['Increased', 'Decreased', 'Left unchanged', 'Added to the bank statement balance'],
    answer: 'Decreased',
    explanation: 'Bank charges reduce the business\'s funds, so the cashbook balance must be reduced to account for them.',
  },
  {
    prompt: 'What is the purpose of a creditors reconciliation?',
    options: ['To confirm what is owed to a supplier against its statement', 'To reconcile the cash received from customers', 'To calculate the gross profit for the period', 'To update the debtors control account for the period'],
    answer: 'To confirm what is owed to a supplier against its statement',
    explanation: 'Creditors reconciliation ensures that what the supplier claims you owe matches what your own records show.',
  },
  {
    prompt: 'Which internal control principle is most important when performing bank reconciliations?',
    options: [
      'The same person who handles cash should do the reconciliation',
      'The reconciliation should be done by someone independent of cashbook recording',
      'Reconciliations are optional if the business is small',
      'Only the bank manager needs to approve the reconciliation',
    ],
    answer: 'The reconciliation should be done by someone independent of cashbook recording',
    explanation: 'Segregation of duties prevents fraud — the person recording transactions should not also reconcile them.',
  },
  {
    prompt: 'Interest earned on the business bank account appears on the bank statement but not in the cashbook. This will:',
    options: [
      'Reduce the corrected cashbook balance',
      'Have no effect on the cashbook',
      'Increase the corrected cashbook balance',
      'Appear as an unpresented cheque',
    ],
    answer: 'Increase the corrected cashbook balance',
    explanation: 'Interest earned adds to the business\'s funds; the cashbook must be increased to reflect this income.',
  },
  {
    prompt: 'How does an outstanding deposit affect the bank reconciliation when starting from the bank statement balance?',
    options: [
      'It is subtracted from the bank statement balance',
      'It is added to the bank statement balance',
      'It has no effect on the reconciliation',
      'It reduces the cashbook balance',
    ],
    answer: 'It is added to the bank statement balance',
    explanation: 'The outstanding deposit is already in the cashbook but not yet on the bank statement, so it is added to the bank statement balance to arrive at the corrected figure.',
  },
];

const BankCreditorsReconciliations = () => (
  <CapsSubjectTopic
    title="Bank and Creditors Reconciliations"
    subtitle="Identifying and explaining differences between records"
    learnSteps={learnSteps}
    task="gr11-bank-creditors-reconciliations-t1"
    bank={bank}
    apiPath="/api/caps/acc"
  />
);
export default BankCreditorsReconciliations;
