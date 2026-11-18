import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { FactCards } from '../../../../../components/diagrams/aq10/Aq10';
import { JournalTable } from '../../../../../components/diagrams/ems/EmsPictures';
import { TAccount } from '../../../../../components/diagrams/ems/Ems8bPictures';
import { randNb } from '../../../../../components/diagrams/ems/emsHelpers';
import { BALANCE_SHEET_ACCOUNTS, NOMINAL_ACCOUNTS, account, normalSide, postings, totalCredits, totalDebits, trialBalanceRows } from '../../../../../components/diagrams/ems/ems8d-helpers';

// Every amount comes from ems8d-helpers.ts (tested in ems8d-helpers.test.ts and g8EmsT4.test.ts): the same service business (Thandi's Tutoring) as in Terms 2 and 3.
const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;
const bk = account('Bank');
const fees = account('Fees earned');
const cap = account('Capital');
const tb = trialBalanceRows();
const p = postings();

export const learnSteps: LearnStep[] = [
  {
    title: 'Double entry and T accounts',
    content: slide(
      <>
        <Rule>The double-entry principle says that every transaction has two effects: one account is debited and another account is credited, for the same amount. We show an account as a T account, with the debit on the left and the credit on the right. Assets and expenses normally have debit balances. Capital, liabilities and income normally have credit balances.</Rule>
        <TAccount name="Bank" debits={bk.debits} credits={bk.credits} balance={bk.balance} side={bk.side} />
        <Worked
          title="One transaction, two accounts"
          steps={[
            'The owner puts R10 000 into the bank. Debit Bank (an asset increases) and credit Capital.',
            'The business pays R1 500 rent. Debit Rent expense and credit Bank (the asset decreases).',
            `The total of the debits (${randNb(totalDebits())}) always equals the total of the credits (${randNb(totalCredits())}).`,
          ]}
        />
        <Mistake>Debiting both accounts. Every transaction needs a debit and a credit of the same amount.</Mistake>
      </>,
    ),
  },
  {
    title: 'The General Ledger',
    content: slide(
      <>
        <Rule>The General Ledger is the book of all the accounts of a business. It is divided into sections: the Balance Sheet accounts ({BALANCE_SHEET_ACCOUNTS.join(', ')}) and the Nominal accounts (income and expenses: {NOMINAL_ACCOUNTS.join(', ')}). We open an account for each item by writing its name at the top of a T account. The accounts are opened when the first transaction for them appears.</Rule>
        <TAccount name="Fees earned" debits={fees.debits} credits={fees.credits} balance={fees.balance} side={fees.side} />
        <Worked
          title="Open the accounts"
          steps={[
            'Balance Sheet section: Capital (credit balance), Bank and Equipment (debit balances).',
            'Nominal section: Fees earned (credit balance) and Rent, Telephone and Salaries expense (debit balances).',
            `Fees earned is an income account, so its normal side is the ${normalSide('income')} side.`,
          ]}
        />
        <Mistake>Putting an income account on the debit side. Income normally has a credit balance.</Mistake>
      </>,
    ),
  },
  {
    title: 'Posting from the journals',
    content: slide(
      <>
        <Rule>Posting means copying the entries of the journals to the General Ledger. From the Cash Receipts Journal, each receipt is debited to Bank and credited to the analysis account (Capital or Fees earned). From the Cash Payments Journal, each payment is credited to Bank and debited to the analysis account (an expense or Equipment).</Rule>
        <TAccount name="Bank" debits={bk.debits} credits={bk.credits} balance={bk.balance} side={bk.side} />
        <JournalTable
          title="Posting the March transactions"
          columns={['Journal', 'Debit / Credit', 'Amount']}
          rows={p.map((x) => [x.from, `Dr ${x.debit.replace(' expense', '')}, Cr ${x.credit.replace(' expense', '')}`, x.amount])}
          total={{ label: 'Total debited = total credited', amount: totalDebits() }}
          aria="The seven postings. From the Cash Receipts Journal: Bank is debited and Capital or Fees earned is credited. From the Cash Payments Journal: Rent, Telephone, Salaries or Equipment is debited and Bank is credited. The total debited equals the total credited, R22 100."
        />
        <Worked
          title="Post one receipt and one payment"
          steps={[
            'CRJ, fees R4 500: debit Bank R4 500 and credit Fees earned R4 500.',
            'CPJ, telephone R400: debit Telephone expense R400 and credit Bank R400.',
            `After posting all seven transactions each account has its entries: Bank has ${bk.debits.length} debits and ${bk.credits.length} credits.`,
          ]}
        />
        <Mistake>Posting a payment to the debit side of Bank. Money paid out is a credit to Bank.</Mistake>
      </>,
    ),
  },
  {
    title: 'Balancing and the Trial Balance',
    content: slide(
      <>
        <Rule>To balance an account, add up the debit side and the credit side and find the difference. The difference is the balance, written on the side that is bigger. The Trial Balance lists the balance of every account in a debit column or a credit column. If the ledger is correct, the debit total equals the credit total.</Rule>
        <TAccount name="Capital" debits={cap.debits} credits={cap.credits} balance={cap.balance} side={cap.side} />
        <JournalTable
          title="Trial Balance of Thandi's Tutoring"
          columns={['Account (Dr or Cr)', 'Balance']}
          rows={tb.rows.map((r) => [`${r.name} (${r.debit !== null ? 'Dr' : 'Cr'})`, (r.debit ?? r.credit) as number])}
          total={{ label: 'Debit total = credit total', amount: tb.totalDebit }}
          aria="The trial balance. The debit balances are Bank R11 900, Equipment R2 000, Rent R1 500, Telephone R400 and Salaries R1 200. The credit balances are Capital R10 000 and Fees earned R7 000. Both columns total R17 000."
        />
        <Worked
          title="Balance the Bank account"
          steps={[
            `Debit side: ${bk.debits.map(randNb).join(' + ')} = ${randNb(bk.totalDebit)}. Credit side: ${bk.credits.map(randNb).join(' + ')} = ${randNb(bk.totalCredit)}.`,
            `Balance = ${randNb(bk.totalDebit)} − ${randNb(bk.totalCredit)} = ${randNb(bk.balance)}, a debit balance.`,
            `Trial balance: debits ${randNb(tb.totalDebit)} = credits ${randNb(tb.totalCredit)}, so it balances.`,
          ]}
        />
        <Mistake>Thinking that a balancing trial balance proves that the books are perfect. It does not find errors such as an entry posted to the wrong account.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          <>Which side of an account is the left-hand side?</>,
          <>R10 000 of capital is banked. Which account takes the debit?</>,
          <>An account has R17 000 on the debit side and R5 100 on the credit side. What is its balance?</>,
          <>What must the two columns of a trial balance show?</>,
        ]}
        answers={[
          <>The debit side.</>,
          <>Bank.</>,
          <>{randNb(bk.balance)}, a debit balance.</>,
          <>Equal totals: debits equal credits.</>,
        ]}
      />,
    ),
  },
];

export const bank: CapsItem[] = [
  {
    prompt: "What does the double-entry principle say?",
    options: ["Every transaction is entered twice in the same account", "Every transaction has two source documents", "Every transaction has a debit and a credit of equal amounts", "Every transaction is paid twice"],
    answer: "Every transaction has a debit and a credit of equal amounts",
    explanation: "One account is debited and another credited for the same amount.",
  },
  {
    prompt: "On which side of a T account is the debit?",
    options: ["The left-hand side", "The right-hand side", "The top", "It depends on the account"],
    answer: "The left-hand side",
    explanation: "The debit is on the left and the credit on the right.",
  },
  {
    prompt: "What is the General Ledger?",
    options: ["The list of all customers", "The cash register tape", "The bank statement", "The book of all the accounts"],
    answer: "The book of all the accounts",
    explanation: "The ledger contains the accounts of the business.",
  },
  {
    prompt: "Which accounts are in the Balance Sheet section of the ledger?",
    options: ["Fees earned and Rent", "Capital, Bank and Equipment", "Telephone and Salaries", "Receipts and Payments"],
    answer: "Capital, Bank and Equipment",
    explanation: "Assets, liabilities and capital are balance sheet accounts.",
  },
  {
    prompt: "Which accounts are in the Nominal section of the ledger?",
    options: ["Capital and Bank", "Income and expenses", "Equipment only", "The trial balance"],
    answer: "Income and expenses",
    explanation: "Fees earned and the expense accounts are nominal accounts.",
  },
  {
    prompt: "Capital of R10 000 goes into the business bank account. Which account is debited?",
    options: ["Capital", "Fees earned", "Equipment", "Bank"],
    answer: "Bank",
    explanation: "The bank (an asset) increases, so it is debited; Capital is credited.",
  },
  {
    prompt: "For that same R10 000 of capital, which account receives the credit?",
    options: ["Capital", "Bank", "Rent expense", "Equipment"],
    answer: "Capital",
    explanation: "Capital increases, so it is credited.",
  },
  {
    prompt: "The business pays R1 500 rent. Which account is debited?",
    options: ["Bank", "Capital", "Rent expense", "Fees earned"],
    answer: "Rent expense",
    explanation: "An expense is debited; Bank is credited.",
  },
  {
    prompt: "The business pays R1 500 rent. Which account is credited?",
    options: ["Rent expense", "Capital", "Equipment", "Bank"],
    answer: "Bank",
    explanation: "The bank balance falls, so Bank is credited.",
  },
  {
    prompt: "Fees of R4 500 are received in the bank. Which account is credited?",
    options: ["Bank", "Fees earned", "Capital", "Rent expense"],
    answer: "Fees earned",
    explanation: "Income is credited; Bank is debited.",
  },
  {
    prompt: "The Bank account has debits of R17 000 and credits of R5 100. What is its balance?",
    options: ["R11 900 debit", "R11 900 credit", "R22 100 debit", "R5 100 credit"],
    answer: "R11 900 debit",
    explanation: "17 000 − 5 100 = 11 900, on the debit side because the debits are bigger.",
  },
  {
    prompt: "Which side does the balance of an expense account normally fall on?",
    options: ["The credit side", "It has no balance", "The debit side", "Both sides"],
    answer: "The debit side",
    explanation: "Expenses normally have debit balances.",
  },
  {
    prompt: "What does a trial balance list?",
    options: ["Only the bank account", "The names of all workers", "The balance of every account", "Every source document"],
    answer: "The balance of every account",
    explanation: "The trial balance lists all account balances.",
  },
  {
    prompt: "The debit balances in a trial balance total R17 000. What should the credit balances total?",
    options: ["R17 000", "R0", "R34 000", "R11 900"],
    answer: "R17 000",
    explanation: "A correct ledger gives equal debit and credit totals.",
  },
];

const GeneralLedgerTrialBalance = () => (
  <CapsSubjectTopic
    title="The General Ledger and Trial Balance"
    subtitle="Double entry, T accounts, posting from the cash journals, balancing and the trial balance"
    learnSteps={learnSteps}
    task="gr8-general-ledger-trial-balance-t4"
    bank={bank}
    apiPath="/api/caps/ems"
  />
);

export default GeneralLedgerTrialBalance;
