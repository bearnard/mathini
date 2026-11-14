import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';

const learnSteps: LearnStep[] = [
  {
    title: 'Master source documents',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Source documents like invoices, receipts and purchase orders form the evidence for financial transactions. 
          Accurate recording begins with identifying and classifying these documents correctly.
        </p>
      </div>
    ),
  },
  {
    title: 'Learn journal and ledger recording',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Journals record transactions in chronological order; ledgers organize them by account. Double-entry 
          bookkeeping ensures debits equal credits, maintaining financial accuracy.
        </p>
      </div>
    ),
  },
  {
    title: 'Understand trial balance',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Trial balance proves the accuracy of double-entry records by confirming total debits equal total credits. 
          It is the foundation for preparing financial statements.
        </p>
      </div>
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'What is a source document?',
    options: ['Original evidence of a business transaction like an invoice or receipt', 'A summary of the profit a business made in the year', 'The bank statement that lists all deposits and withdrawals', 'The plan that shows where a new business will get its money'],
    answer: 'Original evidence of a business transaction like an invoice or receipt',
    explanation: 'Source documents provide the basis for recording all transactions.',
  },
  {
    prompt: 'What is the purpose of a journal in accounting?',
    options: ['Record transactions in chronological order before posting to ledger', 'Total up the final profit and loss for the whole year', 'Keep a list of staff names, wages and leave days taken', 'Summarise the assets and liabilities at the year end'],
    answer: 'Record transactions in chronological order before posting to ledger',
    explanation: 'Journals capture the initial record of all business activities.',
  },
  {
    prompt: 'How does double-entry bookkeeping work?',
    options: ['Every transaction affects two accounts: one debit and one credit', 'Every transaction is recorded once, in the cash account only', 'Every transaction is recorded twice, both times as a debit', 'Every transaction is recorded in a journal and then destroyed'],
    answer: 'Every transaction affects two accounts: one debit and one credit',
    explanation: 'This system maintains accuracy and balance in financial records.',
  },
  {
    prompt: 'What is a ledger account?',
    options: ['A record organized by account type to show all activity for that account', 'A record kept in date order of all transactions of the day', 'A file that holds the invoices of one supplier only', 'A list of the names and addresses of debtors only'],
    answer: 'A record organized by account type to show all activity for that account',
    explanation: 'Ledgers organize journal entries by account for analysis and reporting.',
  },
  {
    prompt: 'Why is a trial balance important?',
    options: ['It checks that total debits equal total credits', 'It shows the profit or loss made over the whole year', 'It replaces the need for the financial statements', 'It lists the customers who still owe the business money'],
    answer: 'It checks that total debits equal total credits',
    explanation: 'Trial balance confirms the accuracy of double-entry records.',
  },
  {
    prompt: 'What does "CRJ" stand for in accounting?',
    options: ['Cash Receipts Journal', 'Current Record Journal', 'Credit Reference Journal', 'Cash Register Journal'],
    answer: 'Cash Receipts Journal',
    explanation: 'CRJ records all cash received by the business.',
  },
  {
    prompt: 'How would you classify a sale of goods?',
    options: ['Debit Cash (or Accounts Receivable) and Credit Sales (or Revenue)', 'Debit Sales (or Revenue) and Credit Cash (or Accounts Receivable)', 'Debit Cash and Credit Cash because money stays in the business', 'Debit Stock only, because the goods have left the shop'],
    answer: 'Debit Cash (or Accounts Receivable) and Credit Sales (or Revenue)',
    explanation: 'Proper classification follows the double-entry framework.',
  },
  {
    prompt: 'What information is needed to prepare a trial balance?',
    options: ['The final balance of each account from the ledger', 'Only the totals of the income and expense accounts', 'The names of the customers and the dates of their sales', 'The balance sheet of the previous financial year'],
    answer: 'The final balance of each account from the ledger',
    explanation: 'Trial balance is a summary of all ledger account balances.',
  },
];

const FinancialLiteracyRecording = () => (
  <CapsSubjectTopic
    title="Financial Literacy and Recording"
    subtitle="Source documents, journals, ledgers, and trial balance; classification and recording"
    learnSteps={learnSteps}
    task="gr9-financial-literacy-recording-t1"
    bank={bank}
    apiPath="/api/caps/ems"
  />
);

export default FinancialLiteracyRecording;
