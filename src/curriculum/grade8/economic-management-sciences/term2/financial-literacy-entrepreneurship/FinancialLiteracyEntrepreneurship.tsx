import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';

const learnSteps: LearnStep[] = [
  {
    title: 'Accounting cycle from source documents to financial statements',
    image: {
      src: '/curriculum/grade8/economic-management-sciences/term2/financial-literacy-entrepreneurship/image1.jpg',
      alt: 'Grade 8 learners following the accounting cycle from source documents through journals and ledgers',
    },
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          The accounting cycle processes transactions systematically: collect source documents, record in journals, post to ledgers, and prepare statements.
          Understanding this cycle ensures accurate tracking of business transactions and financial health.
        </p>
      </div>
    ),
  },
  {
    title: 'Cash receipts journal and the general ledger',
    image: {
      src: '/curriculum/grade8/economic-management-sciences/term2/financial-literacy-entrepreneurship/image2.jpg',
      alt: 'Grade 8 learners recording cash receipts and posting entries to the general ledger',
    },
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          The cash receipts journal records all money received. Transactions are posted to the general ledger, which summarizes each account's activity.
          Together, these records provide a complete view of financial transactions.
        </p>
      </div>
    ),
  },
  {
    title: 'Entrepreneurship and factors of production',
    image: {
      src: '/curriculum/grade8/economic-management-sciences/term2/financial-literacy-entrepreneurship/image3.jpg',
      alt: 'Grade 8 learners exploring entrepreneurship and identifying the four factors of production',
    },
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Entrepreneurs create businesses using the four factors of production: land, labour, capital, and enterprise.
          Understanding these resources helps learners recognize how businesses combine inputs to create value and generate income.
        </p>
      </div>
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'What is the first step in the accounting cycle?',
    options: ['Recording in journals', 'Prepare financial statements', 'Analyze source documents', 'Close accounts'],
    answer: 'Analyze source documents',
    explanation: 'The cycle begins by identifying and analyzing source documents (invoices, receipts) that evidence transactions.',
  },
  {
    prompt: 'When is a transaction recorded in the cash receipts journal?',
    options: ['When goods are ordered', 'When cash is received', 'When expenses are paid', 'When financial statements are prepared'],
    answer: 'When cash is received',
    explanation: 'The cash receipts journal specifically records all money (cash and cheques) received by the business.',
  },
  {
    prompt: 'Which account in the general ledger would show the total of all sales?',
    options: ['Cash', 'Expenses', 'Sales', 'Owner\'s Equity'],
    answer: 'Sales',
    explanation: 'The Sales account in the ledger accumulates all sales transactions, showing total revenue generated.',
  },
  {
    prompt: 'What is "enterprise" as a factor of production?',
    options: ['The land the business uses', 'The buildings and machinery', 'The ability to organize and take risks', 'The money invested'],
    answer: 'The ability to organize and take risks',
    explanation: 'Enterprise (entrepreneurship) is the skill, initiative, and willingness to take risks in combining other factors of production.',
  },
  {
    prompt: 'Which of the following is a factor of production?',
    options: ['Profit', 'Capital', 'Interest', 'Dividends'],
    answer: 'Capital',
    explanation: 'Capital includes machinery, equipment, buildings, and money—resources needed to produce goods and services.',
  },
  {
    prompt: 'What is the purpose of posting journal entries to the general ledger?',
    options: ['To create invoices', 'To summarize account activity in one place', 'To calculate taxes', 'To replace journals'],
    answer: 'To summarize account activity in one place',
    explanation: 'Posting transfers journal data to ledger accounts so all transactions for each account are organized and easy to track.',
  },
  {
    prompt: 'An entrepreneur starting a business must have:',
    options: ['Only money', 'Land but no labour', 'An idea and willingness to take risks', 'Government permission only'],
    answer: 'An idea and willingness to take risks',
    explanation: 'Entrepreneurship requires identifying opportunities, creating plans, and taking risks—more important than capital alone.',
  },
  {
    prompt: 'Why is the accounting cycle important for small businesses?',
    options: ['To avoid paying taxes', 'To organize transactions, ensure accuracy, and prepare reliable financial reports', 'To hide financial information', 'It is not important'],
    answer: 'To organize transactions, ensure accuracy, and prepare reliable financial reports',
    explanation: 'Following the accounting cycle ensures businesses have accurate records for decision-making, tax compliance, and creditor communication.',
  },
];

const FinancialLiteracyEntrepreneurship = () => (
  <CapsSubjectTopic
    title="Financial Literacy and Entrepreneurship Basics"
    subtitle="Mastering the accounting cycle, cash management, and entrepreneurial skills"
    learnSteps={learnSteps}
    task="gr8-financial-literacy-entrepreneurship-t2"
    bank={bank}
    apiPath="/api/caps/ems"
  />
);

export default FinancialLiteracyEntrepreneurship;
