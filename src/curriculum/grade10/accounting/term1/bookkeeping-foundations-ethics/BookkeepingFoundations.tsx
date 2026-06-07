import CapsSubjectTopic from '@/components/CapsSubjectTopic';
import TAccount from '@/components/subjects/TAccount';
import type { AccountingItem, LearnStep } from '../../_shared/types';

const learnSteps: LearnStep[] = [
  {
    image: { src: "/curriculum/grade10/acc/term1/bookkeeping-foundations-ethics/diagram.webp", alt: "Bank Account" },
    title: 'The accounting equation in action',
    content: (
      <div className="space-y-6 text-center">
        <p className="text-lg leading-8 text-slate-600">
          Every Grade 10 accounting activity starts with the equation <strong>Assets = Owner’s Equity + Liabilities</strong>.
          Each transaction must keep the equation balanced.
        </p>
        <div className="grid gap-4 md:grid-cols-3 text-left">
          <div className="rounded-2xl bg-blue-50 p-5">
            <h3 className="font-semibold text-blue-700">Assets</h3>
            <p className="mt-2 text-slate-600">Resources the business controls, such as bank, equipment, trading stock and debtors.</p>
            <p className="mt-3 text-sm font-medium text-blue-700">Example: Bank R82 000, Equipment R48 000</p>
          </div>
          <div className="rounded-2xl bg-emerald-50 p-5">
            <h3 className="font-semibold text-emerald-700">Owner’s equity</h3>
            <p className="mt-2 text-slate-600">The owner’s claim after capital introduced, profit earned and drawings taken into account.</p>
            <p className="mt-3 text-sm font-medium text-emerald-700">Example: Capital R110 000, Drawings R6 000</p>
          </div>
          <div className="rounded-2xl bg-amber-50 p-5">
            <h3 className="font-semibold text-amber-700">Liabilities</h3>
            <p className="mt-2 text-slate-600">Amounts owed to outsiders, for example creditors, loans and accrued expenses.</p>
            <p className="mt-3 text-sm font-medium text-amber-700">Example: Loan from bank R20 000</p>
          </div>
        </div>
        <p className="text-sm text-slate-500">If equipment is bought for cash, one asset decreases while another asset increases. If bought on credit, assets and liabilities both increase.</p>
      </div>
    ),
  },
  {
    title: 'Double-entry bookkeeping with a T-account',
    content: (
      <div className="space-y-6 text-center">
        <p className="text-lg leading-8 text-slate-600">
          Double-entry bookkeeping records the <strong>dual effect</strong> of every transaction. One account is debited and another is credited.
        </p>
        <TAccount
          title="Bank Account"
          debit={[
            { description: 'Capital introduced', amount: 120000 },
            { description: 'Cash sales', amount: 18500 },
            { description: 'Receipt from debtors', amount: 12600 },
          ]}
          credit={[
            { description: 'Equipment purchased', amount: 45000 },
            { description: 'Rent paid', amount: 9500 },
            { description: 'Owner drawings', amount: 4000 },
          ]}
        />
        <div className="rounded-2xl bg-slate-50 p-5 text-left">
          <h3 className="font-semibold text-slate-700">How to read this ledger</h3>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-600">
            <li>Debits on the bank account show money flowing into the business bank account.</li>
            <li>Credits on the bank account show payments or withdrawals from the bank account.</li>
            <li>The closing debit balance means the business still has cash available in the bank.</li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    title: 'Source documents and the bookkeeping cycle',
    content: (
      <div className="space-y-6 text-center">
        <p className="text-lg leading-8 text-slate-600">
          Source documents provide evidence for transactions before they are recorded in journals and posted to the ledger.
        </p>
        <div className="grid gap-4 md:grid-cols-2 text-left">
          <div className="rounded-2xl border border-slate-200 p-5">
            <h3 className="font-semibold text-slate-700">Common source documents</h3>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-600">
              <li><strong>Invoice:</strong> issued for credit sales</li>
              <li><strong>Receipt:</strong> evidence of money received</li>
              <li><strong>Cheque counterfoil / EFT proof:</strong> evidence of payment</li>
              <li><strong>Debit note:</strong> goods returned by the business</li>
              <li><strong>Credit note:</strong> goods returned by the customer</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-slate-200 p-5">
            <h3 className="font-semibold text-slate-700">Bookkeeping flow</h3>
            <ol className="mt-3 list-decimal space-y-2 pl-5 text-slate-600">
              <li>Collect the source document.</li>
              <li>Record the transaction in the correct journal.</li>
              <li>Post totals and individual items to the ledger.</li>
              <li>Prepare a trial balance to test the ledger.</li>
            </ol>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Ethics and internal control',
    content: (
      <div className="space-y-6 text-center">
        <p className="text-lg leading-8 text-slate-600">
          Ethical accountants protect the business by recording information honestly and applying internal controls consistently.
        </p>
        <div className="grid gap-4 md:grid-cols-2 text-left">
          <div className="rounded-2xl bg-rose-50 p-5">
            <h3 className="font-semibold text-rose-700">Ethical principles</h3>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-600">
              <li>Accuracy and honesty in every record</li>
              <li>Confidentiality of financial information</li>
              <li>Objectivity when correcting errors</li>
              <li>Accountability for public and business funds</li>
            </ul>
          </div>
          <div className="rounded-2xl bg-lime-50 p-5">
            <h3 className="font-semibold text-lime-700">Internal controls</h3>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-600">
              <li>Use pre-numbered documents so missing items are noticed quickly.</li>
              <li>Separate duties: the person receiving cash should not also do the bank reconciliation.</li>
              <li>Lock away source documents and cash receipts.</li>
              <li>Check ledger totals regularly against supporting documents.</li>
            </ul>
          </div>
        </div>
        <p className="text-sm text-slate-500">In CAPS questions, ethics is often tested through short scenarios about missing cash, altered invoices or pressure to hide losses.</p>
      </div>
    ),
  },
];

const bank: AccountingItem[] = [
  {
    prompt: 'The accounting equation is written as:',
    options: ['Assets = Liabilities - Owner’s equity', 'Assets = Owner’s equity + Liabilities', 'Profit = Income + Expenses', 'Assets = Drawings + Capital'],
    answer: 'Assets = Owner’s equity + Liabilities',
    explanation: 'Assets are financed either by the owner or by outsiders to whom the business owes money.',
  },
  {
    prompt: 'Which source document is normally used as evidence of a credit sale?',
    options: ['Receipt', 'Invoice', 'Deposit slip', 'Cheque counterfoil'],
    answer: 'Invoice',
    explanation: 'An invoice is issued to the customer and records the details of goods sold on credit.',
  },
  {
    prompt: 'When the owner introduces cash into the business, which account is debited?',
    options: ['Capital', 'Bank', 'Drawings', 'Sales'],
    answer: 'Bank',
    explanation: 'Cash coming into the business increases the bank asset, so Bank is debited and Capital is credited.',
  },
  {
    prompt: 'A bank loan taken out by the business will increase the:',
    options: ['Drawings account only', 'Liabilities of the business', 'Sales account', 'Cost of sales'],
    answer: 'Liabilities of the business',
    explanation: 'A loan is money owed to an outside party, so it increases liabilities.',
  },
  {
    prompt: 'The main purpose of internal control is to:',
    options: ['Increase drawings', 'Prevent errors and fraud', 'Reduce sales', 'Avoid all paperwork'],
    answer: 'Prevent errors and fraud',
    explanation: 'Internal controls help protect assets and improve the reliability of accounting records.',
  },
  {
    prompt: 'Which principle is being followed when an accountant refuses to alter a receipt to hide theft?',
    options: ['Materiality', 'Objectivity and honesty', 'Liquidity', 'Depreciation'],
    answer: 'Objectivity and honesty',
    explanation: 'Ethical accounting requires truthful records even when there is pressure to do otherwise.',
  },
  {
    prompt: 'A credit entry on the bank account usually shows:',
    options: ['Money received', 'A payment from the bank account', 'An increase in debtors', 'A discount received'],
    answer: 'A payment from the bank account',
    explanation: 'Credits on the bank account reduce the asset and usually represent cash paid out.',
  },
  {
    prompt: 'Why are pre-numbered source documents useful?',
    options: ['They make cash increase automatically', 'They help identify missing or duplicated records', 'They replace journals completely', 'They reduce liabilities'],
    answer: 'They help identify missing or duplicated records',
    explanation: 'A numbered sequence makes it easier to detect documents that have been lost, removed or entered twice.',
  },
];

const BookkeepingFoundations = () => (
  <CapsSubjectTopic
    title="Bookkeeping Foundations and Ethics"
    subtitle="Building the accounting equation, source document flow and ethical bookkeeping habits"
    learnSteps={learnSteps}
    task="gr10-bookkeeping-foundations-ethics"
    bank={bank}
    apiPath="/api/caps/acc"
  />
);

export default BookkeepingFoundations;
