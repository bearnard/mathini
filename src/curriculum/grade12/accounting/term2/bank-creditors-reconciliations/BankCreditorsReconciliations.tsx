'use client';

import CapsSubjectTopic from '@/components/CapsSubjectTopic';
import FinancialStatement from '@/components/subjects/FinancialStatement';
import TAccount from '@/components/subjects/TAccount';
import type { AccountingItem, LearnStep } from '../../_shared/types';

const learnSteps: LearnStep[] = [
  {
    image: { src: "/curriculum/grade12/acc/term2/bank-creditors-reconciliations/diagram.webp", alt: "Bank Account (Updated Cashbook View)" },
    title: 'Why reconciliations matter',
    content: (
      <div className="space-y-6">
        <p className="text-lg leading-8 text-slate-600">
          Reconciliations compare records that should agree and then explain the differences. They help learners identify timing differences, omissions and errors before those problems turn into major control weaknesses.
        </p>
        <TAccount
          title="Bank Account (Updated Cashbook View)"
          debit={[
            { description: 'Balance b/d', amount: 86400 },
            { description: 'Direct deposit by debtor', amount: 12850 },
            { description: 'Interest credited by bank', amount: 1450 },
          ]}
          credit={[
            { description: 'Bank charges', amount: 780 },
            { description: 'Debit order: insurance', amount: 4200 },
            { description: 'EFT error corrected', amount: 1650 },
          ]}
        />
        <p className="text-base leading-7 text-slate-600">
          The updated cashbook is prepared first because these bank statement items are not timing differences. They are missing from the books and must be recorded before the reconciliation statement is drawn up.
        </p>
      </div>
    ),
  },
  {
    title: 'Bank reconciliation items',
    content: (
      <div className="space-y-6">
        <p className="text-lg leading-8 text-slate-600">
          Outstanding deposits and unpresented cheques are common timing differences. They explain why the cashbook and bank statement balances differ even when both records are correct.
        </p>
        <FinancialStatement
          title="Bank Reconciliation Statement"
          period="28 February 2025"
          sections={[
            {
              heading: 'Reconciling to the bank statement balance',
              lines: [
                { label: 'Favourable balance as per updated cashbook', amount: 94070 },
                { label: 'Outstanding deposit', amount: 18600 },
                { label: 'Unpresented cheque no. 418', amount: -9450 },
                { label: 'Unpresented cheque no. 426', amount: -12820 },
                { label: 'Favourable balance as per bank statement', amount: 90300, isTotal: true },
              ],
            },
          ]}
        />
        <p className="text-base leading-7 text-slate-600">
          Timing differences are not corrections to the cashbook. They remain on the reconciliation until the bank processes them in the following month.
        </p>
      </div>
    ),
  },
  {
    title: 'Creditors reconciliation',
    content: (
      <div className="space-y-6">
        <p className="text-lg leading-8 text-slate-600">
          A creditors reconciliation checks supplier statements against the individual creditor account and the creditors control account. Missing invoices, returns and credit notes are common sources of disagreement.
        </p>
        <TAccount
          title="Creditors Control"
          debit={[
            { description: 'Payments to suppliers', amount: 46800 },
            { description: 'Credit note omitted in books', amount: 2350 },
          ]}
          credit={[
            { description: 'Balance b/d', amount: 58200 },
            { description: 'Invoice not yet recorded', amount: 6450 },
          ]}
        />
        <p className="text-base leading-7 text-slate-600">
          If a supplier credit note was not recorded, the books overstate the amount owed. If an invoice was omitted, the books understate the creditor balance. Your answer should always explain which record needs correction.
        </p>
      </div>
    ),
  },
  {
    title: 'Internal control over cash and payables',
    content: (
      <div className="space-y-6">
        <p className="text-lg leading-8 text-slate-600">
          Strong control means preparing reconciliations monthly, filing supporting documents promptly and making sure a second person reviews the work. The person who receives supplier statements should not also approve the EFT payments without supervision.
        </p>
        <p className="text-base leading-7 text-slate-600">
          In a recommendation question, practical actions score well: investigate old unpresented cheques, follow up differences quickly and insist on independent sign-off before the reconciliation is finalised.
        </p>
      </div>
    ),
  },
];

const bank: AccountingItem[] = [
  {
    "id": "bcr-1",
    "question": "An outstanding deposit is a deposit that:",
    "options": [
      "appears in the cashbook but not yet on the bank statement",
      "appears on the bank statement but not in the cashbook",
      "was stolen by an employee",
      "was paid to a supplier by EFT"
    ],
    "answer": 0,
    "explanation": "The business has recorded and deposited the money, but the bank has not yet processed it on the statement date."
  },
  {
    "id": "bcr-2",
    "question": "An unpresented cheque is a cheque that has been:",
    "options": [
      "lost and cancelled by the bank",
      "recorded in the cashbook but not yet presented to the bank for payment",
      "deposited by a debtor",
      "written after the year-end date only"
    ],
    "answer": 1,
    "explanation": "The business has issued and recorded the cheque, but the bank has not yet processed it."
  },
  {
    "id": "bcr-3",
    "question": "Bank charges shown on the bank statement but not yet in the cashbook should be recorded by:",
    "options": [
      "debiting Bank",
      "crediting Bank in the cashbook",
      "crediting Creditors Control",
      "debiting Inventory"
    ],
    "answer": 1,
    "explanation": "Bank charges reduce the bank balance, so the Bank account in the cashbook is credited."
  },
  {
    "id": "bcr-4",
    "question": "A direct deposit by a debtor shown on the bank statement means the business must:",
    "options": [
      "ignore it until next month",
      "update the cashbook because cash has been received",
      "treat it as a share issue",
      "record it as an unpresented cheque"
    ],
    "answer": 1,
    "explanation": "The cashbook must be updated because the debtor has paid directly into the business bank account."
  },
  {
    "id": "bcr-5",
    "question": "A creditors reconciliation mainly compares:",
    "options": [
      "inventory with fixed assets",
      "supplier statements with creditor accounts and the creditors control account",
      "cash sales with credit sales",
      "ordinary share capital with retained income"
    ],
    "answer": 1,
    "explanation": "The purpose is to confirm that what suppliers say is owed matches the business's creditor records."
  },
  {
    "id": "bcr-6",
    "question": "A supplier credit note received but not yet recorded by the business will usually cause the creditor balance in the books to be:",
    "options": [
      "too low",
      "too high",
      "equal to zero",
      "transferred to debtors"
    ],
    "answer": 1,
    "explanation": "If the credit note is missing from the books, the amount owed is overstated."
  },
  {
    "id": "bcr-7",
    "question": "Which document is essential when preparing a bank reconciliation?",
    "options": [
      "The bank statement",
      "The wages journal only",
      "The shareholders register",
      "The fixed asset register only"
    ],
    "answer": 0,
    "explanation": "The bank statement is one of the two key records being compared in a bank reconciliation."
  },
  {
    "id": "bcr-8",
    "question": "Which internal control strengthens reconciliations?",
    "options": [
      "Doing them only once a year with no review",
      "Allowing the cashier to mark their own work as approved",
      "Monthly preparation with independent review",
      "Ignoring old reconciling items"
    ],
    "answer": 2,
    "explanation": "Regular preparation and independent review improve accuracy and reduce fraud risk."
  }
];

const practiceBank = bank.map((item) => ({
  prompt: item.question,
  options: item.options,
  answer: item.options[item.answer],
  explanation: item.explanation,
}));

const BankCreditorsReconciliations = () => (
  <CapsSubjectTopic
    title="Bank and Creditors Reconciliations"
    subtitle="Reconciling records, finding errors and improving internal control"
    learnSteps={learnSteps}
    task="gr12-bank-creditors-reconciliations-t2"
    bank={practiceBank}
    apiPath="/api/caps/acc"
  />
);

export default BankCreditorsReconciliations;
