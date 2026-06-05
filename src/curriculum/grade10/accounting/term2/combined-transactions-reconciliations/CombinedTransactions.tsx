import CapsSubjectTopic from '@/components/CapsSubjectTopic';
import FinancialStatement from '@/components/subjects/FinancialStatement';
import TAccount from '@/components/subjects/TAccount';
import type { AccountingItem, LearnStep } from '../../_shared/types';

const learnSteps: LearnStep[] = [
  {
    title: 'Combining cash and credit transactions',
    content: (
      <div className="space-y-6 text-center">
        <p className="text-lg leading-8 text-slate-600">
          In real businesses, cash and credit transactions happen in the same period. Learners must identify the correct journal and then update the matching control accounts.
        </p>
        <TAccount
          title="Debtors Control Account"
          debit={[
            { description: 'Credit sales', amount: 42600 },
            { description: 'Interest charged on overdue accounts', amount: 900 },
          ]}
          credit={[
            { description: 'Cash received from debtors', amount: 31800 },
            { description: 'Debtors allowances', amount: 1400 },
            { description: 'Returns by debtors', amount: 2100 },
          ]}
        />
        <p className="text-sm text-slate-500">This control account summarises transactions from the Debtors Journal, CRJ, DAJ and CAJ.</p>
      </div>
    ),
  },
  {
    title: 'Debtors reconciliation',
    content: (
      <div className="space-y-6 text-center">
        <p className="text-lg leading-8 text-slate-600">
          A debtors reconciliation compares the balance of the Debtors Control account with the total of individual debtor balances.
        </p>
        <FinancialStatement
          title="Debtors Reconciliation Summary"
          period="31 May 2025"
          sections={[
            {
              heading: 'Control account balance',
              lines: [
                { label: 'Debtors Control balance', amount: 82000 },
              ],
            },
            {
              heading: 'List of debtors balances',
              lines: [
                { label: 'Total according to debtors ledger', amount: 80250 },
                { label: 'Add: Invoice omitted from Sipho Traders', amount: 2400 },
                { label: 'Less: Credit note posted twice', amount: -650 },
                { label: 'Corrected debtors ledger total', amount: 82000, isTotal: true },
              ],
            },
          ]}
        />
      </div>
    ),
  },
  {
    title: 'Creditors reconciliation',
    content: (
      <div className="space-y-6 text-center">
        <p className="text-lg leading-8 text-slate-600">
          A creditors reconciliation checks the balance in the supplier’s statement against the business’s Creditors Ledger account and the Creditors Control account.
        </p>
        <div className="grid gap-4 md:grid-cols-2 text-left">
          <div className="rounded-2xl bg-slate-50 p-5">
            <h3 className="font-semibold text-slate-700">Common reasons for differences</h3>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-600">
              <li>Goods returned not yet reflected by the supplier</li>
              <li>Discount omitted on one side</li>
              <li>Payment still in transit</li>
              <li>An invoice posted to the wrong supplier account</li>
            </ul>
          </div>
          <div className="rounded-2xl bg-blue-50 p-5">
            <h3 className="font-semibold text-blue-700">Why it matters</h3>
            <p className="mt-2 text-slate-600">Reconciling supplier accounts prevents overpayments, helps catch errors early and strengthens internal control over purchases.</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Bank reconciliation procedures',
    content: (
      <div className="space-y-6 text-center">
        <p className="text-lg leading-8 text-slate-600">
          The bank reconciliation explains why the balance in the Cash Book differs from the balance on the bank statement at month-end.
        </p>
        <FinancialStatement
          title="Bank Reconciliation Statement"
          period="31 May 2025"
          sections={[
            {
              heading: 'Starting point',
              lines: [
                { label: 'Favourable balance per bank statement', amount: 28750 },
              ],
            },
            {
              heading: 'Reconciling items',
              lines: [
                { label: 'Add: Outstanding deposit', amount: 4600 },
                { label: 'Less: Unpresented cheque no. 518', amount: -3250 },
                { label: 'Less: Bank charges not yet in cash book', amount: -180 },
                { label: 'Adjusted balance per cash book', amount: 29920, isTotal: true },
              ],
            },
          ]}
        />
      </div>
    ),
  },
];

const bank: AccountingItem[] = [
  {
    prompt: 'The main purpose of a debtors reconciliation is to compare the:',
    options: ['Bank statement with the CRJ', 'Debtors Control account with the total of debtor balances', 'CPJ with the PCJ', 'Income statement with the balance sheet'],
    answer: 'Debtors Control account with the total of debtor balances',
    explanation: 'The reconciliation checks whether the summary control account agrees with the detailed debtor accounts.',
  },
  {
    prompt: 'An outstanding deposit on a bank reconciliation is a deposit that:',
    options: ['Was stolen', 'Appears in the cash book but not yet on the bank statement', 'Was never made', 'Belongs to a creditor'],
    answer: 'Appears in the cash book but not yet on the bank statement',
    explanation: 'The business has recorded the deposit, but the bank has not yet processed it.',
  },
  {
    prompt: 'An unpresented cheque is a cheque that:',
    options: ['Has been dishonoured by the bank', 'Was recorded by the bank but not the business', 'Was issued by the business but not yet processed by the bank', 'Belongs in the CRJ'],
    answer: 'Was issued by the business but not yet processed by the bank',
    explanation: 'The business has already entered the cheque in the CPJ and cash book, but it has not yet reached the bank statement.',
  },
  {
    prompt: 'Which journal helps reduce the Debtors Control balance when customers return goods?',
    options: ['CAJ', 'CRJ', 'DAJ', 'GJ'],
    answer: 'DAJ',
    explanation: 'The Debtors Allowances Journal records returns and allowances granted to debtors.',
  },
  {
    prompt: 'If a supplier statement shows a balance higher than the business’s ledger, one possible reason is that:',
    options: ['The owner withdrew cash', 'An invoice from the supplier has not yet been entered by the business', 'A cash sale was omitted', 'Depreciation was not recorded'],
    answer: 'An invoice from the supplier has not yet been entered by the business',
    explanation: 'Missing a supplier invoice would make the business’s creditors balance too low.',
  },
  {
    prompt: 'Bank charges appearing only on the bank statement must be:',
    options: ['Ignored', 'Entered in the cash book before the reconciliation is finalised', 'Added to debtors', 'Transferred to capital'],
    answer: 'Entered in the cash book before the reconciliation is finalised',
    explanation: 'They are omitted cash book items and must be updated in the ledger.',
  },
  {
    prompt: 'Why are control accounts useful?',
    options: ['They replace all source documents', 'They summarise many individual accounts and support reconciliation', 'They record only ethics scenarios', 'They are used only at year-end'],
    answer: 'They summarise many individual accounts and support reconciliation',
    explanation: 'Control accounts make it easier to check totals and detect differences between the general ledger and subsidiary ledgers.',
  },
  {
    prompt: 'Which of the following is most likely to cause a difference between Debtors Control and the debtors list?',
    options: ['A cash sale entered in the CRJ', 'A debtor payment posted to the wrong customer account', 'The owner increasing capital', 'Closing stock counted correctly'],
    answer: 'A debtor payment posted to the wrong customer account',
    explanation: 'If an amount is posted to the wrong debtor account, the detailed list can be incorrect even though the control account was updated.',
  },
];

const CombinedTransactions = () => (
  <CapsSubjectTopic
    title="Combined Transactions and Reconciliations"
    subtitle="Linking cash and credit transactions to control accounts, reconciliations and stronger internal control"
    learnSteps={learnSteps}
    task="gr10-combined-transactions-reconciliations"
    bank={bank}
    apiPath="/api/caps/acc"
  />
);

export default CombinedTransactions;
