import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { FactCards } from '../../../../../components/diagrams/aq10/Aq10';
import { BudgetBars, EquationBalance, JournalTable, LedgerAccount } from '../../../../../components/diagrams/ems/EmsPictures';
import { CycleFlow } from '../../../../../components/diagrams/ems/Ems8bPictures';
import { randNb } from '../../../../../components/diagrams/ems/emsHelpers';
import { balanceSheet, crjColumn, incomeStatement, trial } from '../../../../../components/diagrams/ems/ems8b-helpers';

// Every amount comes from ems8b-helpers.ts (tested in ems8b-helpers.test.ts and g8EmsT2.test.ts): one small service business, Thandi's Tutoring, in March.
const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;
const is = incomeStatement();
const bs = balanceSheet();
const tb = trial();
const STEPS = ['Transactions', 'Source documents', 'Cash journals', 'General ledger', 'Trial balance', 'Income statement', 'Balance sheet'];

export const learnSteps: LearnStep[] = [
  {
    title: 'The accounting cycle',
    content: slide(
      <>
        <Rule>The accounting cycle is the series of steps that turns transactions into financial statements. For a service business the steps are: transactions, source documents, the cash journals (receipts and payments), the General Ledger, the Trial Balance, the Income Statement and the Balance Sheet. Each step uses the information from the one before.</Rule>
        <CycleFlow steps={STEPS} />
        <Worked
          title="Thandi's Tutoring in March"
          steps={[
            `Thandi puts ${randNb(crjColumn('Capital'))} into the business and earns ${randNb(is.income)} in fees.`,
            `She pays ${randNb(is.totalExpenses)} for rent, telephone and salaries and buys computers for ${randNb(bs.equipment)}.`,
            'The cycle turns these seven cash transactions into the statements on the next slides.',
          ]}
        />
        <Mistake>Skipping the source documents. Every entry in the journals must come from a source document.</Mistake>
      </>,
    ),
  },
  {
    title: 'The General Ledger and the Trial Balance',
    content: slide(
      <>
        <Rule>The cash journals are posted to the General Ledger, where each account has a debit side and a credit side. The Trial Balance lists the balance of every account in a debit or a credit column. If the books are correct the total of the debit balances equals the total of the credit balances.</Rule>
        <LedgerAccount name="Fees earned" side="credit" entries={[4500, 2500]} total={is.income} aria="The Fees earned account has two credit entries, R4 500 and R2 500, and a total of R7 000." />
        <JournalTable
          title="Trial Balance of Thandi's Tutoring"
          columns={['Account (Dr = debit, Cr = credit)', 'Balance']}
          rows={tb.rows.map((r) => [`${r.name} (${r.debit !== null ? 'Dr' : 'Cr'})`, (r.debit ?? r.credit) as number])}
          total={{ label: 'Total of the debit column (= credit column)', amount: tb.totalDebit }}
          aria="The trial balance. The bank, equipment and expense accounts are debit balances. Capital and fees earned are credit balances. The debit total equals the credit total, R17 000."
        />
        <Worked
          title="Check the trial balance"
          steps={[
            `Debit balances add up to ${randNb(tb.totalDebit)}.`,
            `Credit balances (capital ${randNb(crjColumn('Capital'))} and fees ${randNb(is.income)}) add up to ${randNb(tb.totalCredit)}.`,
            'The two totals are equal, so the trial balance balances.',
          ]}
        />
        <Mistake>Thinking that a balancing trial balance proves that every entry is right. It only shows that debits equal credits.</Mistake>
      </>,
    ),
  },
  {
    title: 'The Income Statement',
    content: slide(
      <>
        <Rule>The Income Statement shows the income and the expenses of a period and the result: net profit = income − expenses. If expenses are more than income the result is a net loss. It uses the income and expense accounts from the Trial Balance.</Rule>
        <BudgetBars income={is.income} spending={is.totalExpenses} aria="Income of R7 000 against expenses of R3 100, a net profit of R3 900." />
        <JournalTable
          title="Income Statement for March"
          columns={['Item', 'Amount']}
          rows={[['Fees earned', is.income], ...is.expenses.map((e) => [e.account, e.amount] as [string, number])]}
          total={{ label: 'Net profit (income − expenses)', amount: is.net }}
          aria="The income statement. Fees earned R7 000. Expenses: rent R1 500, telephone R400 and salaries R1 200, a total of R3 100. Net profit R3 900."
        />
        <Worked
          title="Work out the profit"
          steps={[
            `Income: fees earned ${randNb(is.income)}.`,
            `Expenses: ${is.expenses.map((e) => randNb(e.amount)).join(' + ')} = ${randNb(is.totalExpenses)}.`,
            `Net profit = ${randNb(is.income)} − ${randNb(is.totalExpenses)} = ${randNb(is.net)}.`,
          ]}
        />
        <Mistake>Counting the computers (equipment) as an expense. Equipment is an asset and goes on the Balance Sheet.</Mistake>
      </>,
    ),
  },
  {
    title: 'The Balance Sheet',
    content: slide(
      <>
        <Rule>The Balance Sheet shows the assets, liabilities and owner's equity on one day. Owner's equity is the capital plus the net profit. The balance sheet must balance: assets = owner's equity + liabilities.</Rule>
        <EquationBalance assets={bs.assets} liabilities={bs.liabilities} equity={bs.equity} aria="The balance sheet: assets of R13 900 equal liabilities of R0 plus owner's equity of R13 900." />
        <JournalTable
          title="Balance Sheet at 31 March"
          columns={['Item', 'Amount']}
          rows={[['Equipment', bs.equipment], ['Bank', bs.bank], ["Owner's equity: capital", bs.capital], ['Net profit', bs.profit]]}
          total={{ label: 'Total assets (= owner\'s equity + liabilities)', amount: bs.assets }}
          aria="The balance sheet. Assets: equipment R2 000 and bank R11 900, total R13 900. Owner's equity: capital R10 000 plus net profit R3 900, total R13 900. Liabilities: none."
        />
        <Worked
          title="Make it balance"
          steps={[
            `Assets: equipment ${randNb(bs.equipment)} + bank ${randNb(bs.bank)} = ${randNb(bs.assets)}.`,
            `Owner's equity: capital ${randNb(bs.capital)} + net profit ${randNb(bs.profit)} = ${randNb(bs.equity)}. Liabilities: R0.`,
            `${randNb(bs.assets)} = ${randNb(bs.equity)} + R0, so the balance sheet balances.`,
          ]}
        />
        <Mistake>Leaving the net profit out of owner's equity. The profit belongs to the owner and increases owner's equity.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          <>Name the statement that reports profit or loss.</>,
          <>Fees of R7 000 less costs of R3 100 leave what net profit?</>,
          <>Capital R10 000 plus profit R3 900 gives what owner's equity?</>,
          <>What must the total of the debit balances equal in a trial balance?</>,
        ]}
        answers={[
          <>The Income Statement.</>,
          <>{randNb(is.net)}.</>,
          <>{randNb(bs.equity)}.</>,
          <>The total of the credit balances.</>,
        ]}
      />,
    ),
  },
];

export const bank: CapsItem[] = [
  {
    prompt: "What is the accounting cycle?",
    options: ["A list of the owner's debts", "The days a business is open for sale", "Steps from transactions to statements", "A way of paying the taxes"],
    answer: "Steps from transactions to statements",
    explanation: "The cycle runs from transactions through journals, ledger and trial balance to the statements.",
  },
  {
    prompt: "Which step of the accounting cycle comes straight after the cash journals?",
    options: ["The General Ledger", "The Income Statement", "The Balance Sheet", "The source documents"],
    answer: "The General Ledger",
    explanation: "The journals are posted to the General Ledger.",
  },
  {
    prompt: "What does a trial balance list?",
    options: ["Only the bank account", "The names of the customers", "The prices of goods", "The balance of every account"],
    answer: "The balance of every account",
    explanation: "The trial balance lists the balances in a debit and a credit column.",
  },
  {
    prompt: "In a correct trial balance, the debit total equals...",
    options: ["The net profit", "The credit total", "The bank balance", "The owner's capital only"],
    answer: "The credit total",
    explanation: "Debits equal credits in a balancing trial balance.",
  },
  {
    prompt: "A trial balance has debit balances of R17 000. What must the credit balances total?",
    options: ["R0", "R17 000", "R34 000", "R8 500"],
    answer: "R17 000",
    explanation: "The two columns must be equal.",
  },
  {
    prompt: "Which statement reports the result of trading for a period?",
    options: ["The Balance Sheet", "The trial balance", "The bank statement", "The Income Statement"],
    answer: "The Income Statement",
    explanation: "The income statement shows the result of trading.",
  },
  {
    prompt: "A tutor earned R7 000 in fees and paid R3 100 in expenses. What is the net profit?",
    options: ["R3 900", "R10 100", "R7 000", "R3 100"],
    answer: "R3 900",
    explanation: "7 000 − 3 100 = 3 900.",
  },
  {
    prompt: "Fees earned are R2 000 and expenses are R2 600. What is the result?",
    options: ["A net profit of R600", "A net profit of R4 600", "A net loss of R600", "A net loss of R4 600"],
    answer: "A net loss of R600",
    explanation: "Expenses are more than income by R600.",
  },
  {
    prompt: "Rent R1 500, telephone R400 and salaries R1 200 are paid. What are the total expenses?",
    options: ["R2 900", "R1 900", "R4 100", "R3 100"],
    answer: "R3 100",
    explanation: "1 500 + 400 + 1 200 = 3 100.",
  },
  {
    prompt: "Why are computers bought for R2 000 not shown as an expense on the Income Statement?",
    options: ["They are income", "They are an asset", "They are a liability", "They are capital"],
    answer: "They are an asset",
    explanation: "Equipment is an asset and appears on the Balance Sheet.",
  },
  {
    prompt: "Which statement shows assets, liabilities and owner's equity?",
    options: ["The Balance Sheet", "The Income Statement", "The Cash Receipts Journal", "The cheque counterfoil"],
    answer: "The Balance Sheet",
    explanation: "The balance sheet shows the financial position on one day.",
  },
  {
    prompt: "The owner put in R10 000 and the business made R3 900 profit. What is owner's equity?",
    options: ["R6 100", "R10 000", "R13 900", "R3 900"],
    answer: "R13 900",
    explanation: "Owner's equity = capital + net profit = 13 900.",
  },
  {
    prompt: "A business has assets of R13 900 and no liabilities. What is owner's equity?",
    options: ["R0", "R27 800", "R13 900", "R3 900"],
    answer: "R13 900",
    explanation: "A = OE + L, and L is 0, so OE = 13 900.",
  },
  {
    prompt: "Equipment is R2 000 and the bank balance is R11 900. What are the total assets?",
    options: ["R13 900", "R9 900", "R2 000", "R11 900"],
    answer: "R13 900",
    explanation: "2 000 + 11 900 = 13 900.",
  },
];

const AccountingCycleStatements = () => (
  <CapsSubjectTopic
    title="The Accounting Cycle: Income Statement and Balance Sheet"
    subtitle="The cycle, the ledger and trial balance, and the two statements of a service business"
    learnSteps={learnSteps}
    task="gr8-accounting-cycle-statements-t2"
    bank={bank}
    apiPath="/api/caps/ems"
  />
);

export default AccountingCycleStatements;
