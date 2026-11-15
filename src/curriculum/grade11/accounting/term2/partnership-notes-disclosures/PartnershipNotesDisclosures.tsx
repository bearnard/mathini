import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import FinancialStatement from '../../../../../components/subjects/FinancialStatement';
import TAccount from '../../../../../components/subjects/TAccount';
import type { AccountingItem, LearnStep } from '../../_shared/types';
import { Mistake as GapMistake, Rule as GapRule, Worked as GapWorked } from '../../../../../components/subjects/lesson/LessonBlocks';

const learnSteps: LearnStep[] = [
  {
    title: 'Why do financial statements need notes?',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          <strong>Notes to the financial statements</strong> provide the detail behind summary figures in the main statements. They explain how amounts were calculated and disclose information required by accounting standards.
        </p>
        <div className="grid gap-3 md:grid-cols-2 text-left">
          <div className="rounded-xl bg-blue-50 p-4">
            <strong className="text-blue-700">Notes serve to:</strong>
            <ul className="text-slate-600 list-disc list-inside mt-1 space-y-1">
              <li>Disclose accounting policies used</li>
              <li>Show detail behind summary balances</li>
              <li>Explain unusual items or changes</li>
              <li>Meet legal and GAAP disclosure requirements</li>
            </ul>
          </div>
          <div className="rounded-xl bg-green-50 p-4">
            <strong className="text-green-700">Partnership-specific notes include:</strong>
            <ul className="text-slate-600 list-disc list-inside mt-1 space-y-1">
              <li>Appropriation account note</li>
              <li>Partner capital account note</li>
              <li>Partner current account note</li>
              <li>Fixed asset schedule (depreciation)</li>
            </ul>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'The appropriation account note',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          The appropriation account note discloses exactly how net profit was shared between partners.
        </p>
        <FinancialStatement
          title="Note: Appropriation of Profit"
          period="For the year ended 29 February 2024"
          sections={[
            {
              heading: 'Partner A',
              lines: [
                { label: 'Interest on capital', amount: 18000 },
                { label: 'Salary allowance', amount: 72000 },
                { label: 'Share of profit', amount: 81600 },
                { label: 'Total allocated to Partner A', amount: 171600, isTotal: true },
              ],
            },
            {
              heading: 'Partner B',
              lines: [
                { label: 'Interest on capital', amount: 18000 },
                { label: 'Salary allowance', amount: 48000 },
                { label: 'Share of profit', amount: 54400 },
                { label: 'Total allocated to Partner B', amount: 120400, isTotal: true },
              ],
            },
            {
              heading: 'Total note',
              lines: [
                { label: 'Total appropriation of profit', amount: 292000, isTotal: true },
              ],
            },
          ]}
        />
      </div>
    ),
  },
  {
    title: 'Partner capital account note',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          The capital account note reconciles each partner's capital from opening to closing balance.
        </p>
        <FinancialStatement
          title="Note: Partner Capital Accounts"
          period="At 29 February 2024"
          sections={[
            {
              heading: 'Partner A',
              lines: [
                { label: 'Balance on 1 March 2023', amount: 240000 },
                { label: 'Additional capital introduced', amount: 20000 },
                { label: 'Balance on 29 February 2024', amount: 260000, isTotal: true },
              ],
            },
            {
              heading: 'Partner B',
              lines: [
                { label: 'Balance on 1 March 2023', amount: 210000 },
                { label: 'Capital withdrawn permanently', amount: -10000 },
                { label: 'Balance on 29 February 2024', amount: 200000, isTotal: true },
              ],
            },
          ]}
        />
      </div>
    ),
  },
  {
    title: 'Partner current account note',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          The current account note shows all the transactions that changed each partner's current account during the year.
        </p>
        <TAccount
          title="Partner A Current Account"
          debit={[
            { description: 'Drawings', amount: 40000 },
            { description: 'Interest on drawings', amount: 2400 },
          ]}
          credit={[
            { description: 'Balance b/d', amount: 12000 },
            { description: 'Interest on capital', amount: 18000 },
            { description: 'Salary allowance', amount: 72000 },
            { description: 'Share of profit', amount: 81600 },
          ]}
        />
        <p className="text-sm text-slate-500">Credits increase the current account, while drawings and interest on drawings are debited because they reduce the partner's claim on the business.</p>
      </div>
    ),
  },
  {
    title: "What goes in the notes",
    content: (
      <div className="space-y-4">
        <GapRule>{"The statements are short, so detail goes in the notes. For each class of fixed asset the note lists what was paid, how much has been written off and what is left. A separate note explains the policies the partners chose."}</GapRule>
        <GapWorked title={"Write a vehicles note"} steps={["Original price R400 000, less R150 000 written off so far.", "What is left is R250 000.", "Policy note: vehicles lose 20% of their cost each year, so readers can compare firms."]} />
        <GapMistake>{"Leaving the notes out because the totals already appear in the statements."}</GapMistake>
      </div>
    ),
  },
];

const bank: AccountingItem[] = [
  {
    prompt: 'Notes to the financial statements are primarily used to:',
    options: ['Take the place of the income statement', 'Give detail and explanation behind the summary figures', 'Work out the tax that is payable', 'Record the daily transactions of the business'],
    answer: 'Give detail and explanation behind the summary figures',
    explanation: 'Notes disclose the breakdown of figures, accounting policies, and other information required for a fair presentation.',
  },
  {
    prompt: 'Which note specifically shows how net profit was distributed between partners?',
    options: ['Fixed asset schedule', 'Appropriation account note', 'Debtors note', 'Bank reconciliation'],
    answer: 'Appropriation account note',
    explanation: 'The appropriation account note details interest on capital, salary allowances, and the profit share for each partner.',
  },
  {
    prompt: 'The partner capital account note starts with:',
    options: ['The closing balance at the end of the year', 'The opening capital balance at the start of the year', 'The net profit for the year', 'The drawings made during the year'],
    answer: 'The opening capital balance at the start of the year',
    explanation: 'The capital account note reconciles from opening balance to closing balance by showing additions and withdrawals of permanent capital.',
  },
  {
    prompt: 'Which item would be shown as a CREDIT in the partner current account note?',
    options: ['Drawings', 'Interest on drawings', 'Salary allowance', 'Loan repayment'],
    answer: 'Salary allowance',
    explanation: 'Salary allowances, interest on capital, and profit shares are all credits (additions) to the current account note.',
  },
  {
    prompt: 'Which item would be shown as a DEBIT in the partner current account note?',
    options: ['Interest on capital', 'Share of profit', 'Salary allowance', 'Drawings'],
    answer: 'Drawings',
    explanation: 'Drawings and interest on drawings reduce the current account balance and appear as debits (deductions) in the note.',
  },
  {
    prompt: 'If Partner A\'s current account has an opening credit balance of R8 000, receives a salary of R30 000, interest on capital of R5 000, and makes drawings of R40 000, the closing balance is:',
    options: ['R3 000 credit', 'R3 000 debit', 'R43 000 credit', 'R2 000 debit'],
    answer: 'R3 000 credit',
    explanation: 'R8 000 + R30 000 + R5 000 − R40 000 = R3 000 credit.',
  },
  {
    prompt: 'Interest on drawings appears in the current account note as a:',
    options: [
      'Credit — it adds to the partner\'s account',
      'Debit — it reduces the partner\'s account',
      'Separate note outside the current account',
      'Capital contribution',
    ],
    answer: 'Debit — it reduces the partner\'s account',
    explanation: 'Interest on drawings is a charge against the partner, reducing their current account balance.',
  },
  {
    prompt: 'The fixed asset schedule note discloses:',
    options: ['Current account movements of the partners only', 'Cost, accumulated depreciation and carrying value per class', 'The profit and loss sharing ratios of the partners', 'The bank charges that were paid for the year'],
    answer: 'Cost, accumulated depreciation and carrying value per class',
    explanation: 'The fixed asset schedule supports the balance sheet figure by showing opening cost, additions, disposals, and depreciation for each asset class.',
  },
  {
    prompt: 'A capital account note shows Partner B withdrew R10 000 permanently during the year. This amount appears as:',
    options: [
      'An addition to the capital account',
      'A deduction from the capital account',
      'A credit in the current account',
      'An expense in the income statement',
    ],
    answer: 'A deduction from the capital account',
    explanation: 'Permanent capital withdrawals reduce the capital account and are shown as deductions in the capital account note.',
  },
  {
    prompt: 'What is the purpose of disclosing accounting policies in the notes?',
    options: ['To work out the salaries of the partners', 'To tell users which methods and assumptions were used', 'To reconcile the bank account of the firm', 'To list all of the assets that are owned'],
    answer: 'To tell users which methods and assumptions were used',
    explanation: 'Disclosing accounting policies (e.g., depreciation method, stock valuation) allows users to understand and compare financial statements.',
  },
];

const PartnershipNotesDisclosures = () => (
  <CapsSubjectTopic
    title="Partnership Notes and Disclosures"
    subtitle="Completing and interpreting notes to partnership financial statements"
    learnSteps={learnSteps}
    task="gr11-partnership-notes-disclosures-t2"
    bank={bank}
    apiPath="/api/caps/acc"
  />
);
export default PartnershipNotesDisclosures;
