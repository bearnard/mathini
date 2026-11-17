import type { LearnStep } from '../../../../../components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { randNb as rand } from '../../../../../components/diagrams/ems/emsHelpers';
import { DebitCredit, TAccount, TrialBalanceTable } from '../../../../../components/diagrams/ems/Ems9aPictures';
import { postTransactions, trialBalance } from '../../../../../components/diagrams/ems/ems9c-helpers';
import type { Transaction } from '../../../../../components/diagrams/ems/ems9a-helpers';

// One month of a small shop, cash and credit transactions. Every amount below is posted by ems9c-helpers.ts and checked in g9EmsLedgers.test.ts.
export const MONTH: readonly (Transaction & { text: string })[] = [
  { text: 'The owner pays R20 000 into the business bank account', debit: 'Bank', credit: 'Capital', amount: 20000 },
  { text: 'Goods of R6 000 are bought on credit from a supplier', debit: 'Purchases', credit: 'Creditors control', amount: 6000 },
  { text: 'Cash sales of R4 500', debit: 'Bank', credit: 'Sales', amount: 4500 },
  { text: 'Credit sales of R7 000', debit: 'Debtors control', credit: 'Sales', amount: 7000 },
  { text: 'Rent of R1 800 is paid from the bank', debit: 'Rent', credit: 'Bank', amount: 1800 },
  { text: 'Debtors pay R3 000', debit: 'Bank', credit: 'Debtors control', amount: 3000 },
  { text: 'The business pays a creditor R2 500', debit: 'Creditors control', credit: 'Bank', amount: 2500 },
];
export const accounts = postTransactions(MONTH);
export const tb = trialBalance(accounts);
const acc = (n: string) => accounts.find((a) => a.name === n)!;
const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: 'Cash or credit: which account?',
    content: slide(
      <>
        <Rule>Every transaction has a debit and a credit of the same amount. For a cash transaction the Bank account changes straight away. For a credit transaction the money is owed, so a control account (Debtors or Creditors) is used instead.</Rule>
        <DebitCredit debit="Debtors control" credit="Sales" amount={7000} aria={`A credit sale of ${rand(7000)}: debit Debtors control ${rand(7000)} and credit Sales ${rand(7000)}. A cash sale would debit Bank instead.`} />
        <Worked
          steps={[
            'Cash sale: debit Bank, credit Sales.',
            'Credit sale: debit Debtors control, credit Sales.',
            'Credit purchase: debit Purchases, credit Creditors control.',
            'Debtor pays: debit Bank, credit Debtors control. Creditor is paid: debit Creditors control, credit Bank.',
          ]}
        />
        <Mistake>Using Bank for a credit sale. If no cash has changed hands, Bank is not used.</Mistake>
      </>,
    ),
  },
  {
    title: 'Analysing one month of transactions',
    content: slide(
      <>
        <Rule>Work through the transactions one at a time. For each, decide which account is debited and which is credited, and post the same amount to both.</Rule>
        <TAccount account={acc('Bank')} aria={`The Bank account. Debit side ${acc('Bank').debits.map(rand).join(', ')}; credit side ${acc('Bank').credits.map(rand).join(' and ')}. The balance is ${rand(acc('Bank').balance)} on the debit side.`} />
        <Worked
          steps={MONTH.map((m, i) => `${i + 1}. ${m.text}: debit ${m.debit}, credit ${m.credit}, ${rand(m.amount)}.`)}
        />
        <Mistake>Posting only one side of a transaction. Every transaction is posted twice, once as a debit and once as a credit.</Mistake>
      </>,
    ),
  },
  {
    title: 'Finding the balances',
    content: slide(
      <>
        <Rule>After posting, each account has a balance on one side: the larger side less the smaller side. Assets and expenses have debit balances. Liabilities, income and capital have credit balances.</Rule>
        <TAccount account={acc('Sales')} aria={`The Sales account. Credit side ${acc('Sales').credits.map(rand).join(' and ')}. The balance is ${rand(acc('Sales').balance)} on the credit side.`} />
        <Worked
          steps={[
            `Bank: ${rand(acc('Bank').totalDebit)} debit − ${rand(acc('Bank').totalCredit)} credit = ${rand(acc('Bank').balance)} debit.`,
            `Debtors control: ${rand(7000)} − ${rand(3000)} = ${rand(acc('Debtors control').balance)} debit. Creditors control: ${rand(6000)} − ${rand(2500)} = ${rand(acc('Creditors control').balance)} credit.`,
            `Sales: ${rand(4500)} + ${rand(7000)} = ${rand(acc('Sales').balance)} credit.`,
          ]}
        />
        <Mistake>Giving a balance without its side. R3 500 on Creditors control is a credit balance, which the business owes.</Mistake>
      </>,
    ),
  },
  {
    title: 'The trial balance',
    content: slide(
      <>
        <Rule>A trial balance lists every account balance in a debit column or a credit column. If every transaction was posted with equal debits and credits, the two columns have the same total.</Rule>
        <TrialBalanceTable rows={tb.rows} totalDebit={tb.totalDebit} totalCredit={tb.totalCredit} aria={`Trial balance at the end of the month. Debit balances: ${tb.rows.filter((r) => r.debit !== null).map((r) => `${r.name} ${rand(r.debit as number)}`).join(', ')}. Credit balances: ${tb.rows.filter((r) => r.credit !== null).map((r) => `${r.name} ${rand(r.credit as number)}`).join(', ')}. Both columns total ${rand(tb.totalDebit)}.`} />
        <Worked
          steps={[
            `Debit column: ${tb.rows.filter((r) => r.debit !== null).map((r) => rand(r.debit as number)).join(' + ')} = ${rand(tb.totalDebit)}.`,
            `Credit column: ${tb.rows.filter((r) => r.credit !== null).map((r) => rand(r.credit as number)).join(' + ')} = ${rand(tb.totalCredit)}.`,
            'The columns are equal, so the books balance. This does not prove that every amount is correct: an amount posted to the wrong account on both sides would not show.',
          ]}
        />
        <Mistake>Thinking that a balancing trial balance means there are no errors. It only shows that the debits equal the credits.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          <>Cash sales of R2 000 are made. Which accounts are debited and credited?</>,
          <>Credit sales of R3 000 are made. Which accounts are debited and credited?</>,
          <>The two trial balance columns total R12 400 and R12 100. What does R300 tell us?</>,
        ]}
        answers={[
          <>Debit Bank R2 000, credit Sales R2 000.</>,
          <>Debit Debtors control R3 000, credit Sales R3 000.</>,
          <>There is an error. The debits and credits should be equal.</>,
        ]}
      />,
    ),
  },
];
