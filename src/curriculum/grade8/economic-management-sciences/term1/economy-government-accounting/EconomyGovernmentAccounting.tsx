import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';

const learnSteps: LearnStep[] = [
  {
    title: 'Government, budgets, and economic foundations',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Governments at national, provincial, and local levels manage budgets and collect taxes to provide services.
          Understanding the economy, government spending, and living standards is essential for financial literacy.
        </p>
      </div>
    ),
  },
  {
    title: 'Accounting concepts and source documents',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Accounting records business transactions using source documents like invoices and receipts.
          The double-entry system records every transaction as a debit and credit to track assets, liabilities, and equity.
        </p>
      </div>
    ),
  },
  {
    title: 'Classifying transactions and recording in journals',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Transactions are classified (sales, expenses, assets) and recorded in journals chronologically.
          Accurate classification ensures financial statements accurately reflect the business's financial position.
        </p>
      </div>
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'What is the primary source of government income in South Africa?',
    options: ['Donations from businesses', 'Taxes and customs duties', 'Borrowing only', 'Sale of government land'],
    answer: 'Taxes and customs duties',
    explanation: 'Governments collect taxes from individuals and businesses, plus customs duties on imports, to fund public services and infrastructure.',
  },
  {
    prompt: 'Which government level in South Africa is responsible for local roads and water supply?',
    options: ['National government', 'Provincial government', 'Local/Municipal government', 'Private companies only'],
    answer: 'Local/Municipal government',
    explanation: 'Local government (municipalities) manages services like roads, water, electricity, and waste at community level.',
  },
  {
    prompt: 'What is standard of living?',
    options: ['The cost of rent that a household pays', 'The quality of life and access to goods and services', 'The amount that government spends in a year', 'The rates of income tax that people pay'],
    answer: 'The quality of life and access to goods and services',
    explanation: 'Standard of living measures access to education, healthcare, housing, and other goods and services that affect quality of life.',
  },
  {
    prompt: 'In double-entry accounting, every transaction must have:',
    options: ['Only a debit', 'Only a credit', 'A debit and a credit', 'No recording'],
    answer: 'A debit and a credit',
    explanation: 'The double-entry principle ensures each transaction is recorded in at least two accounts to maintain balance in the accounting equation.',
  },
  {
    prompt: 'Which of the following is a source document in accounting?',
    options: ['A journal', 'A ledger', 'An invoice', 'A trial balance'],
    answer: 'An invoice',
    explanation: 'Invoices, receipts, and cheques are source documents that provide evidence of transactions before they are recorded in journals.',
  },
  {
    prompt: 'The accounting equation is:',
    options: ['Assets = Liabilities − Equity', 'Assets = Liabilities + Equity', 'Liabilities = Equity + Income', 'Assets − Equity = Expenses'],
    answer: 'Assets = Liabilities + Equity',
    explanation: 'The fundamental accounting equation shows that what a business owns (assets) equals what it owes (liabilities) plus owner investment (equity).',
  },
  {
    prompt: 'A business received payment for services. This transaction should be recorded in:',
    options: ['Sales journal', 'Cash receipts journal', 'General journal', 'Either sales or cash receipts journal'],
    answer: 'Cash receipts journal',
    explanation: 'Cash receipts journal records all money received by the business, including payment for services rendered.',
  },
  {
    prompt: 'Why must transactions be classified correctly in accounting?',
    options: ['To make the work of the accountant easier', 'So that statements are accurate and decisions are sound', 'To hide information from the owners', 'Classification is not important in accounting'],
    answer: 'So that statements are accurate and decisions are sound',
    explanation: 'Correct classification ensures financial statements accurately reflect business performance and helps owners and creditors make informed decisions.',
  },
];

const EconomyGovernmentAccounting = () => (
  <CapsSubjectTopic
    title="The Economy, Government and Accounting Foundations"
    subtitle="Understanding government structures, budgets, taxes, and basic accounting principles"
    learnSteps={learnSteps}
    task="gr8-economy-government-accounting-t1"
    bank={bank}
    apiPath="/api/caps/ems"
  />
);

export default EconomyGovernmentAccounting;
