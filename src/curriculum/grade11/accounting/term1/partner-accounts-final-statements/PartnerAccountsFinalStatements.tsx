import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import FinancialStatement from '../../../../../components/subjects/FinancialStatement';
import TAccount from '../../../../../components/subjects/TAccount';
import type { AccountingItem, LearnStep } from '../../_shared/types';
import { Mistake as GapMistake, Rule as GapRule, Worked as GapWorked } from '../../../../../components/subjects/lesson/LessonBlocks';

const learnSteps: LearnStep[] = [
  {
    title: 'The appropriation account',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          The <strong>appropriation account</strong> shows how the net profit is divided among the partners after all adjustments.
        </p>
        <FinancialStatement
          title="Partnership Appropriation Account"
          period="For the year ended 29 February 2024"
          sections={[
            {
              heading: 'Profit available',
              lines: [
                { label: 'Net profit for the year', amount: 286000 },
                { label: 'Add: Interest on drawings', amount: 6000 },
                { label: 'Profit available for appropriation', amount: 292000, isSubtotal: true },
              ],
            },
            {
              heading: 'Appropriation',
              lines: [
                { label: 'Interest on capital', amount: -36000 },
                { label: 'Salary allowances', amount: -120000 },
                { label: 'Remaining profit', amount: -136000, isSubtotal: true },
                { label: 'Partner A share of profit (3/5)', amount: -81600, indent: 1 },
                { label: 'Partner B share of profit (2/5)', amount: -54400, indent: 1 },
                { label: 'Total appropriated', amount: -292000, isTotal: true },
              ],
            },
          ]}
        />
      </div>
    ),
  },
  {
    title: 'Partner capital vs current accounts',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Partnerships keep two separate accounts for each partner:
        </p>
        <div className="grid gap-4 md:grid-cols-2 text-left">
          <div className="rounded-xl bg-blue-50 p-4">
            <strong className="text-blue-700">Capital account</strong>
            <p className="text-slate-600 mt-1">Records the permanent capital invested. Changes only when additional capital is introduced or capital is permanently withdrawn.</p>
            <p className="text-slate-500 text-sm mt-2">Usually a <strong>fixed</strong> balance.</p>
          </div>
          <div className="rounded-xl bg-green-50 p-4">
            <strong className="text-green-700">Current account</strong>
            <p className="text-slate-600 mt-1">Records the running transactions: salary allowances, interest on capital, drawings, interest on drawings, and share of profit.</p>
            <p className="text-slate-500 text-sm mt-2">Changes frequently throughout the year.</p>
          </div>
        </div>
        <TAccount
          title="Partner A Current Account"
          debit={[
            { description: 'Drawings', amount: 38000 },
            { description: 'Interest on drawings', amount: 2200 },
          ]}
          credit={[
            { description: 'Balance b/d', amount: 12000 },
            { description: 'Interest on capital', amount: 18000 },
            { description: 'Salary allowance', amount: 72000 },
            { description: 'Share of profit', amount: 81600 },
          ]}
        />
      </div>
    ),
  },
  {
    title: 'Completing the appropriation account',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Follow these steps to distribute profit correctly:
        </p>
        <div className="bg-slate-50 p-5 rounded-xl text-left">
          <ol className="text-slate-600 list-decimal list-inside space-y-2">
            <li>Start with <strong>net profit</strong> from the income statement.</li>
            <li>Add <strong>interest on drawings</strong> (increases distributable profit).</li>
            <li>Deduct <strong>interest on capital</strong> for each partner.</li>
            <li>Deduct <strong>salary allowances</strong> for each partner.</li>
            <li>Share the <strong>remaining balance</strong> in the agreed profit/loss ratio.</li>
          </ol>
        </div>
        <p className="text-sm text-slate-500">The total distributed must equal net profit + interest on drawings.</p>
      </div>
    ),
  },
  {
    title: 'Core final accounts and the accounting equation',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Final accounts for a partnership include the <strong>income statement</strong>, <strong>appropriation account</strong>, and <strong>balance sheet</strong> (statement of financial position).
        </p>
        <FinancialStatement
          title="Statement of Financial Position (extract)"
          period="At 29 February 2024"
          sections={[
            {
              heading: 'Equity',
              lines: [
                { label: 'Partner A capital account', amount: 250000 },
                { label: 'Partner A current account', amount: 143400 },
                { label: 'Partner B capital account', amount: 180000 },
                { label: 'Partner B current account', amount: 94200 },
                { label: 'Total equity', amount: 667600, isTotal: true },
              ],
            },
            {
              heading: 'Liabilities',
              lines: [
                { label: 'Trade payables', amount: 82400 },
                { label: 'Accrued expenses', amount: 26000 },
                { label: 'Total liabilities', amount: 108400, isSubtotal: true },
              ],
            },
            {
              heading: 'Assets',
              lines: [
                { label: 'Equipment at carrying value', amount: 285000 },
                { label: 'Inventory', amount: 146000 },
                { label: 'Trade receivables', amount: 98000 },
                { label: 'Bank', amount: 247000 },
                { label: 'Total assets', amount: 776000, isTotal: true },
              ],
            },
          ]}
        />
        <div className="bg-slate-50 p-5 rounded-xl text-left space-y-2">
          <p className="font-bold text-slate-700">Accounting equation check:</p>
          <p className="font-mono text-blue-700">Assets = Equity + Liabilities</p>
          <p className="text-slate-600 mt-1">Here, R776 000 = R667 600 + R108 400, so the final statements still balance after updating the current accounts.</p>
        </div>
      </div>
    ),
  },
  {
    title: "When a partner has taken more than their share",
    content: (
      <div className="space-y-4">
        <GapRule>{"A partner's current account collects their salary, interest and share of profit on the credit side and their drawings on the debit side. If the drawings are bigger, the account ends in debit: the partner has taken out more than they earned."}</GapRule>
        <GapWorked title={"Find the balance"} steps={["Credits: salary R30 000 plus profit share R10 000 = R40 000.", "Debits: drawings R55 000.", "R40 000 \u2212 R55 000 gives a debit of R15 000, which that partner owes to the firm."]} />
        <GapMistake>{"Reading a debit balance as money owed to the partner."}</GapMistake>
      </div>
    ),
  },
];

const bank: AccountingItem[] = [
  {
    prompt: 'The appropriation account is used to:',
    options: ['Record the sales and the purchases', 'Show how the net profit is shared among the partners', 'Work out the gross profit of the partnership', 'Record the transactions made with the bank'],
    answer: 'Show how the net profit is shared among the partners',
    explanation: 'The appropriation account distributes net profit by allocating interest, salaries, and the remaining share to each partner.',
  },
  {
    prompt: 'In the appropriation account, interest on drawings is:',
    options: ['Subtracted from net profit before the sharing', 'Added to net profit, raising the amount to be shared', 'Shown as an expense in the income statement', 'Ignored when the partners share profits equally'],
    answer: 'Added to net profit, raising the amount to be shared',
    explanation: 'Interest on drawings is charged to partners (reducing their share) but adds to the pool, so it is added to profit in the appropriation account.',
  },
  {
    prompt: 'Which account records a partner\'s salary allowance, drawings, and share of profit?',
    options: ['Capital account', 'Current account', 'Drawings account', 'Loan account'],
    answer: 'Current account',
    explanation: 'The current account accumulates ongoing transactions such as drawings, salary allowances, interest, and profit share throughout the year.',
  },
  {
    prompt: 'The capital account of a partner normally changes when:',
    options: ['The partner receives a salary allowance', 'The partner makes drawings during the year', 'The partner adds or permanently removes capital', 'The profit is shared at the end of the year'],
    answer: 'The partner adds or permanently removes capital',
    explanation: 'Capital accounts are fixed accounts — they change only when the permanent capital investment itself changes.',
  },
  {
    prompt: 'Partners A and B share profits in the ratio 3:2. After interest and salaries, the remaining profit is R50 000. How much does Partner A receive?',
    options: ['R25 000', 'R30 000', 'R20 000', 'R50 000'],
    answer: 'R30 000',
    explanation: 'Total ratio parts = 5. Partner A\'s share = 3/5 × R50 000 = R30 000.',
  },
  {
    prompt: 'If a partner\'s current account has a debit balance, it means:',
    options: [
      'The partner is owed money by the business',
      'The partner owes money to the business',
      'The partner\'s capital has increased',
      'The partnership made a profit',
    ],
    answer: 'The partner owes money to the business',
    explanation: 'A debit balance in a current account means drawings and charges have exceeded the partner\'s allocated income — the partner effectively owes the business.',
  },
  {
    prompt: 'Interest on capital is credited to the partner\'s:',
    options: ['Capital account', 'Drawings account', 'Current account', 'Loan account'],
    answer: 'Current account',
    explanation: 'Interest on capital is allocated through the appropriation account and credited to the partner\'s current account as earned income.',
  },
  {
    prompt: 'The total of all items in the appropriation account (distributions) must equal:',
    options: [
      'The gross profit for the year',
      'Net profit plus interest on drawings',
      'Total capital invested by all partners',
      'The balance of the current accounts',
    ],
    answer: 'Net profit plus interest on drawings',
    explanation: 'The appropriation account must balance: distributions (interest on capital + salaries + profit shares) = net profit + interest on drawings.',
  },
  {
    prompt: 'Which statement about final accounts for a partnership is correct?',
    options: [
      'The income statement includes salary allowances as an expense',
      'The appropriation account appears between the income statement and balance sheet',
      'Partners\' capital accounts appear in the income statement',
      'The balance sheet does not show equity',
    ],
    answer: 'The appropriation account appears between the income statement and balance sheet',
    explanation: 'The sequence is: income statement (net profit) → appropriation account (distribution) → balance sheet (updated current accounts in equity).',
  },
  {
    prompt: 'In the accounting equation for a partnership, equity includes:',
    options: ['Only the capital accounts of the partners', 'Only the current accounts of the partners', 'Both the capital and current accounts of all partners', 'Only the loans that the partners have made'],
    answer: 'Both the capital and current accounts of all partners',
    explanation: 'Equity for a partnership comprises each partner\'s capital account plus their current account balance.',
  },
];

const PartnerAccountsFinalStatements = () => (
  <CapsSubjectTopic
    title="Partner Accounts and Final Statements"
    subtitle="Distributing profit through the appropriation account and updating partner records"
    learnSteps={learnSteps}
    task="gr11-partner-accounts-final-statements-t1"
    bank={bank}
    apiPath="/api/caps/acc"
  />
);
export default PartnerAccountsFinalStatements;
