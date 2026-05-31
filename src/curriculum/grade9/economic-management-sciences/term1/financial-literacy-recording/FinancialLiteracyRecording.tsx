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
    options: ['Original evidence of a business transaction like an invoice or receipt', 'A financial statement summary', 'A bank book only', 'A business plan'],
    answer: 'Original evidence of a business transaction like an invoice or receipt',
    explanation: 'Source documents provide the basis for recording all transactions.',
  },
  {
    prompt: 'What is the purpose of a journal in accounting?',
    options: ['Record transactions in chronological order before posting to ledger', 'Create financial statements', 'Calculate profits only', 'Store employee records'],
    answer: 'Record transactions in chronological order before posting to ledger',
    explanation: 'Journals capture the initial record of all business activities.',
  },
  {
    prompt: 'How does double-entry bookkeeping work?',
    options: ['Every transaction affects two accounts: one debit and one credit', 'Only recording in one account', 'Focusing only on income', 'Ignoring expenses'],
    answer: 'Every transaction affects two accounts: one debit and one credit',
    explanation: 'This system maintains accuracy and balance in financial records.',
  },
  {
    prompt: 'What is a ledger account?',
    options: ['A record organized by account type to show all activity for that account', 'A daily sales list', 'An invoice file', 'A list of customers only'],
    answer: 'A record organized by account type to show all activity for that account',
    explanation: 'Ledgers organize journal entries by account for analysis and reporting.',
  },
  {
    prompt: 'Why is a trial balance important?',
    options: ['It proves the accounting equation (Assets = Liabilities + Equity) is balanced', 'It shows profit directly', 'It replaces financial statements', 'It identifies all customers'],
    answer: 'It proves the accounting equation (Assets = Liabilities + Equity) is balanced',
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
    options: ['Debit Sales (or Accounts Receivable) and Credit Cash (or Revenue)', 'Only debit cash', 'Only credit sales', 'Create a new account each time'],
    answer: 'Debit Sales (or Accounts Receivable) and Credit Cash (or Revenue)',
    explanation: 'Proper classification follows the double-entry framework.',
  },
  {
    prompt: 'What information is needed to prepare a trial balance?',
    options: ['The final balance of each account from the ledger', 'Only income accounts', 'Customer names only', 'Previous year data'],
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
