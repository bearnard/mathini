import CapsSubjectTopic from '@/components/CapsSubjectTopic';
import TAccount from '@/components/subjects/TAccount';
import type { AccountingItem, LearnStep } from '../../_shared/types';

const learnSteps: LearnStep[] = [
  {
    title: 'Journals used by a sole trader',
    content: (
      <div className="space-y-6 text-center">
        <p className="text-lg leading-8 text-slate-600">
          A sole trader records transactions in specialised journals before posting them to the ledger. Each journal groups similar transactions together.
        </p>
        <div className="grid gap-4 md:grid-cols-3 text-left">
          <div className="rounded-2xl bg-blue-50 p-5">
            <h3 className="font-semibold text-blue-700">Cash journals</h3>
            <p className="mt-2 text-slate-600"><strong>CRJ</strong> records money received and <strong>CPJ</strong> records money paid.</p>
          </div>
          <div className="rounded-2xl bg-emerald-50 p-5">
            <h3 className="font-semibold text-emerald-700">Credit journals</h3>
            <p className="mt-2 text-slate-600"><strong>DJ</strong> records credit sales and <strong>PCJ</strong> records credit purchases of trading stock.</p>
          </div>
          <div className="rounded-2xl bg-amber-50 p-5">
            <h3 className="font-semibold text-amber-700">Adjustment journals</h3>
            <p className="mt-2 text-slate-600"><strong>DAJ</strong>, <strong>CAJ</strong> and <strong>GJ</strong> capture returns, corrections and other non-routine entries.</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Posting cash transactions to the ledger',
    content: (
      <div className="space-y-6 text-center">
        <p className="text-lg leading-8 text-slate-600">
          Totals from the CRJ and CPJ are posted to the <strong>Bank account</strong>, while named columns and individual items are posted to the correct ledger accounts.
        </p>
        <TAccount
          title="Bank Account"
          debit={[
            { description: 'Capital introduced', amount: 95000 },
            { description: 'Cash sales', amount: 16400 },
            { description: 'Debtors settlements', amount: 12800 },
          ]}
          credit={[
            { description: 'Trading stock purchased', amount: 22000 },
            { description: 'Rent expense', amount: 8500 },
            { description: 'Sundry expenses', amount: 2700 },
          ]}
        />
        <p className="text-sm text-slate-500">The debit side is supported mainly by the CRJ, and the credit side mainly by the CPJ.</p>
      </div>
    ),
  },
  {
    title: 'Control accounts and subsidiary ledgers',
    content: (
      <div className="space-y-6 text-center">
        <p className="text-lg leading-8 text-slate-600">
          Debtors and creditors are often tracked in detail in subsidiary ledgers, while the general ledger keeps a <strong>control account</strong> for each group.
        </p>
        <div className="grid gap-4 md:grid-cols-2 text-left">
          <div className="rounded-2xl border border-slate-200 p-5">
            <h3 className="font-semibold text-slate-700">Debtors ledger</h3>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-600">
              <li>Contains an account for each customer.</li>
              <li>Shows what each debtor owes after sales, returns and payments.</li>
              <li>Total of balances should agree with the Debtors Control account.</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-slate-200 p-5">
            <h3 className="font-semibold text-slate-700">Creditors ledger</h3>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-slate-600">
              <li>Contains an account for each supplier.</li>
              <li>Shows what the business owes for stock bought on credit.</li>
              <li>Total of balances should agree with the Creditors Control account.</li>
            </ul>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Preparing a trial balance',
    content: (
      <div className="space-y-6 text-center">
        <p className="text-lg leading-8 text-slate-600">
          After posting is complete, the balances of all accounts are listed in a <strong>trial balance</strong> to test whether total debits equal total credits.
        </p>
        <div className="rounded-2xl bg-slate-50 p-5 text-left">
          <h3 className="font-semibold text-slate-700">Checks before finalising the trial balance</h3>
          <ol className="mt-3 list-decimal space-y-2 pl-5 text-slate-600">
            <li>Total each ledger account accurately.</li>
            <li>Bring down the correct balance on the correct side.</li>
            <li>List asset and expense balances in the debit column.</li>
            <li>List equity, income and liability balances in the credit column.</li>
          </ol>
        </div>
        <p className="text-sm text-slate-500">A balanced trial balance does not guarantee that every transaction is correct, but it helps find many posting and calculation errors.</p>
      </div>
    ),
  },
];

const bank: AccountingItem[] = [
  {
    prompt: 'Which journal is used to record money received by the business?',
    options: ['CPJ', 'CRJ', 'PCJ', 'DJ'],
    answer: 'CRJ',
    explanation: 'The Cash Receipts Journal records all amounts received by the business.',
  },
  {
    prompt: 'Credit sales of trading stock are first recorded in the:',
    options: ['CRJ', 'DJ', 'GJ', 'CPJ'],
    answer: 'DJ',
    explanation: 'The Debtors Journal records sales made on credit to customers.',
  },
  {
    prompt: 'Credit purchases of trading stock are first recorded in the:',
    options: ['PCJ', 'CAJ', 'CRJ', 'DAJ'],
    answer: 'PCJ',
    explanation: 'The Purchases Journal records purchases of trading stock on credit.',
  },
  {
    prompt: 'The purpose of a control account is to:',
    options: ['Replace the subsidiary ledger completely, so it can be closed', 'Summarise the total owed by a group such as debtors or creditors', 'Record the cash transactions of the business only', 'Show the drawings of the owner during the year'],
    answer: 'Summarise the total owed by a group such as debtors or creditors',
    explanation: 'Control accounts summarise the totals while the subsidiary ledger contains the detailed individual accounts.',
  },
  {
    prompt: 'When a debtor pays the business, the bank account is:',
    options: ['Credited', 'Debited', 'Closed off', 'Transferred to capital'],
    answer: 'Debited',
    explanation: 'Money received increases the bank asset, so Bank is debited.',
  },
  {
    prompt: 'The trial balance is prepared mainly to:',
    options: ['Calculate the VAT that is owed to SARS', 'Check that debit balances equal credit balances', 'Take the place of the general ledger', 'Record the source documents of the business'],
    answer: 'Check that debit balances equal credit balances',
    explanation: 'The trial balance is a test of arithmetic accuracy after posting.',
  },
  {
    prompt: 'Which document usually supports a payment made by EFT or cheque?',
    options: ['An invoice that the supplier issued', 'A receipt that the supplier issued', 'A credit note that the supplier issued', 'Cheque counterfoil or EFT proof'],
    answer: 'Cheque counterfoil or EFT proof',
    explanation: 'The payment advice, EFT proof or cheque counterfoil is evidence of the payment made.',
  },
  {
    prompt: 'If the total of debtors balances does not match Debtors Control, the business should:',
    options: ['Ignore the difference and carry on', 'Prepare a debtors reconciliation to find the error', 'Delete the control account and start again', 'Change the capital account to make it balance'],
    answer: 'Prepare a debtors reconciliation to find the error',
    explanation: 'A reconciliation helps identify omissions, duplicated postings or entries recorded in the wrong account.',
  },
];

const SoleTraderCashCredit = () => (
  <CapsSubjectTopic
    title="Sole Trader Cash and Credit Processing"
    subtitle="Recording journal entries, posting ledgers and preparing the trial balance for a sole trader"
    learnSteps={learnSteps}
    task="gr10-sole-trader-cash-credit-processing"
    bank={bank}
    apiPath="/api/caps/acc"
  />
);

export default SoleTraderCashCredit;
