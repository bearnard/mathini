import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import FinancialStatement from '../../../../../components/subjects/FinancialStatement';
import TAccount from '../../../../../components/subjects/TAccount';
import type { AccountingItem, LearnStep } from '../../_shared/types';

const learnSteps: LearnStep[] = [
  {
    image: { src: "/curriculum/grade11/acc/term4/reconciliations-partnerships-revision/diagram.webp", alt: "Bank Account (Cashbook corrections)" },
    title: 'Revising reconciliations',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          A <strong>bank reconciliation</strong> explains the difference between the cashbook balance and the bank statement balance. A <strong>creditors reconciliation</strong> confirms the amount owed to a supplier.
        </p>
        <div className="grid gap-3 md:grid-cols-2 text-left">
          <div className="rounded-xl bg-blue-50 p-4">
            <strong className="text-blue-700">Bank reconciliation key items:</strong>
            <ul className="text-slate-600 list-disc list-inside mt-1 space-y-1">
              <li>Outstanding deposits (add to bank balance)</li>
              <li>Unpresented cheques (deduct from bank balance)</li>
              <li>Bank charges and interest (adjust cashbook)</li>
              <li>Dishonoured cheques (reverse in cashbook)</li>
            </ul>
          </div>
          <div className="rounded-xl bg-green-50 p-4">
            <strong className="text-green-700">Creditors reconciliation:</strong>
            <ul className="text-slate-600 list-disc list-inside mt-1 space-y-1">
              <li>Compare supplier statement to creditors ledger</li>
              <li>Identify invoices in dispute or timing differences</li>
              <li>Confirm correct balance before payment</li>
            </ul>
          </div>
        </div>
        <TAccount
          title="Bank Account (Cashbook corrections)"
          debit={[
            { description: 'Interest on current account', amount: 520 },
          ]}
          credit={[
            { description: 'Bank charges', amount: 340 },
            { description: 'Dishonoured cheque', amount: 1250 },
            { description: 'Debit order: insurance', amount: 780 },
          ]}
        />
      </div>
    ),
  },
  {
    title: 'Revising partnership adjustments',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Partnership adjustments flow through the <strong>appropriation account</strong> before updating each partner's current account.
        </p>
        <FinancialStatement
          title="Appropriation Account"
          period="Revision example"
          sections={[
            {
              heading: 'Profit available',
              lines: [
                { label: 'Net profit', amount: 240000 },
                { label: 'Add: Interest on drawings', amount: 3000 },
                { label: 'Profit available', amount: 243000, isSubtotal: true },
              ],
            },
            {
              heading: 'Distribution',
              lines: [
                { label: 'Interest on capital', amount: -27000 },
                { label: 'Salary allowances', amount: -84000 },
                { label: 'Remaining profit', amount: -132000, isSubtotal: true },
                { label: 'Partner A share (60%)', amount: -79200, indent: 1 },
                { label: 'Partner B share (40%)', amount: -52800, indent: 1 },
                { label: 'Total appropriated', amount: -243000, isTotal: true },
              ],
            },
          ]}
        />
      </div>
    ),
  },
  {
    title: 'Revising partnership financial statements',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Full partnership financial statements consist of:
        </p>
        <div className="grid gap-3 md:grid-cols-3 text-left">
          <div className="rounded-xl bg-blue-50 p-4">
            <strong className="text-blue-700">Income statement</strong>
            <p className="text-slate-600 text-sm">Sales → Gross profit → Net profit. Salary allowances are NOT expenses.</p>
          </div>
          <div className="rounded-xl bg-purple-50 p-4">
            <strong className="text-purple-700">Appropriation account</strong>
            <p className="text-slate-600 text-sm">Distributes net profit. Starts with net profit + interest on drawings, deducts interest on capital and salaries.</p>
          </div>
          <div className="rounded-xl bg-green-50 p-4">
            <strong className="text-green-700">Balance sheet</strong>
            <p className="text-slate-600 text-sm">Equity = capital accounts + current accounts. Non-current assets at carrying value.</p>
          </div>
        </div>
        <FinancialStatement
          title="Statement of Financial Position (extract)"
          period="Revision example"
          sections={[
            {
              heading: 'Equity and liabilities',
              lines: [
                { label: 'Partner capital and current accounts', amount: 690000 },
                { label: 'Trade payables and accruals', amount: 146000 },
                { label: 'Total equity and liabilities', amount: 836000, isSubtotal: true },
              ],
            },
            {
              heading: 'Assets',
              lines: [
                { label: 'Non-current assets at carrying value', amount: 410000 },
                { label: 'Current assets', amount: 426000 },
                { label: 'Total assets', amount: 836000, isTotal: true },
              ],
            },
          ]}
        />
      </div>
    ),
  },
  {
    title: 'Ethical considerations in reconciliation and partnership work',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Ethics and internal control run through all reconciliation and partnership topics.
        </p>
        <div className="bg-amber-50 p-5 rounded-xl text-left space-y-2">
          <p className="font-bold text-amber-700">Key ethical principles:</p>
          <ul className="text-slate-600 list-disc list-inside space-y-1">
            <li><strong>Segregation of duties:</strong> the cashier should not also do the bank reconciliation</li>
            <li><strong>Transparency:</strong> all partner transactions must be fully disclosed</li>
            <li><strong>Honesty:</strong> assets must not be overstated; losses must be disclosed</li>
            <li><strong>Accountability:</strong> partners are responsible for their capital and drawings</li>
          </ul>
        </div>
      </div>
    ),
  },
];

const bank: AccountingItem[] = [
  {
    prompt: 'When doing a bank reconciliation, an outstanding deposit is:',
    options: [
      'Deducted from the bank statement balance',
      'Added to the bank statement balance',
      'Added to the cashbook balance',
      'Deducted from the cashbook balance',
    ],
    answer: 'Added to the bank statement balance',
    explanation: 'An outstanding deposit is already in the cashbook but not yet on the bank statement, so it is added to the bank statement balance.',
  },
  {
    prompt: 'Bank charges of R350 appear on the bank statement but not in the cashbook. To correct this:',
    options: [
      'Add R350 to the bank statement balance',
      'Deduct R350 from the bank statement balance',
      'Deduct R350 from the cashbook balance',
      'Add R350 to the cashbook balance',
    ],
    answer: 'Deduct R350 from the cashbook balance',
    explanation: 'Bank charges reduce the cash available to the business — the cashbook balance must be reduced to reflect this.',
  },
  {
    prompt: 'In the appropriation account, the total of all allocations (interest, salary allowances, profit shares) must equal:',
    options: [
      'Total sales for the year',
      'Net profit plus interest on drawings',
      'Total capital invested by partners',
      'The closing balance of all current accounts',
    ],
    answer: 'Net profit plus interest on drawings',
    explanation: 'The appropriation account balances when all distributions equal net profit + interest on drawings.',
  },
  {
    prompt: 'Partners A and B share profits 60:40. After allocations, remaining profit is R30 000. Partner B\'s share is:',
    options: ['R18 000', 'R12 000', 'R15 000', 'R10 000'],
    answer: 'R12 000',
    explanation: 'Partner B\'s share = 40% × R30 000 = R12 000.',
  },
  {
    prompt: 'An unpresented cheque is a cheque that has been:',
    options: [
      'Deposited in the bank but not recorded in the cashbook',
      'Recorded in the cashbook as a payment but not yet cleared through the bank',
      'Cancelled and must be reissued',
      'Dishonoured by the bank',
    ],
    answer: 'Recorded in the cashbook as a payment but not yet cleared through the bank',
    explanation: 'Unpresented cheques are payments already in the cashbook but still outstanding on the bank statement.',
  },
  {
    prompt: 'Equity in a partnership balance sheet includes:',
    options: [
      'Only creditors and bank balances',
      'Both partners\' capital accounts and current accounts',
      'Only the capital accounts of partners',
      'Net profit of the current year only',
    ],
    answer: 'Both partners\' capital accounts and current accounts',
    explanation: 'Total equity for a partnership = sum of all capital accounts + sum of all current accounts.',
  },
  {
    prompt: 'Which document is used by a creditor to inform a business of the amounts outstanding on its account?',
    options: ['Tax invoice', 'Credit note', 'Statement of account', 'Delivery note'],
    answer: 'Statement of account',
    explanation: 'A creditor sends a statement of account (supplier\'s statement) that lists all invoices, payments, and the current outstanding balance.',
  },
  {
    prompt: 'Non-current assets on the balance sheet are shown at:',
    options: ['Original cost', 'Market value', 'Cost minus accumulated depreciation', 'Replacement cost'],
    answer: 'Cost minus accumulated depreciation',
    explanation: 'Non-current assets are reported at carrying value = cost − accumulated depreciation.',
  },
  {
    prompt: 'The internal control principle that prevents one person from controlling both recording and reconciling of transactions is:',
    options: ['Authorisation', 'Segregation of duties', 'Physical safeguards', 'Rotation of duties'],
    answer: 'Segregation of duties',
    explanation: 'Segregation of duties splits responsibilities so that errors or fraud cannot be concealed by a single person.',
  },
  {
    prompt: 'A partner\'s current account opening credit balance is R5 000. During the year: salary R24 000, interest on capital R4 000, drawings R35 000. The closing balance is:',
    options: ['R2 000 credit', 'R2 000 debit', 'R28 000 credit', 'R30 000 debit'],
    answer: 'R2 000 debit',
    explanation: 'R5 000 + R24 000 + R4 000 − R35 000 = −R2 000, meaning a debit balance of R2 000 (the partner owes the business).',
  },
];

const ReconciliationsPartnershipsRevision = () => (
  <CapsSubjectTopic
    title="Reconciliations and Partnerships Revision"
    subtitle="Integrating Terms 1 and 2 content for final examination preparation"
    learnSteps={learnSteps}
    task="gr11-reconciliations-partnerships-revision-t4"
    bank={bank}
    apiPath="/api/caps/acc"
  />
);
export default ReconciliationsPartnershipsRevision;
