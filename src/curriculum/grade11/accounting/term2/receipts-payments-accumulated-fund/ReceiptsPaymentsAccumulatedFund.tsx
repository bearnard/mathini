import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { FactCards } from '../../../../../components/diagrams/aq10/Aq10';
import { JournalTable } from '../../../../../components/diagrams/ems/EmsPictures';
import { randNb } from '../../../../../components/diagrams/ems/emsHelpers';
import { AmountBars, TwoBars } from '../../../../../components/diagrams/accounting/Club11';
import { OPENING, closingAssets, closingBank, closingFund, expensePayments, incomeLessExpenses, nonExpensePayments, openingFund, receiptsSurplus, tbTotals, totalPayments, totalReceipts, trialBalanceRows } from '../../../../../components/diagrams/accounting/club11';

// Every amount comes from club11.ts (tested in club11.test.ts and g11AccGaps.test.ts): the same imaginary club as in the previous lesson.
const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;
const tb = trialBalanceRows();
const tot = tbTotals();

export const learnSteps: LearnStep[] = [
  {
    title: 'The ledger accounts of a club',
    content: slide(
      <>
        <Rule>The Analysis Cash Book is posted to the General Ledger. A club has accounts that a trading business does not: the Accumulated Fund (a credit balance), Membership fees, Entrance fees and Donations (income accounts with credit balances), and stock accounts such as Refreshments for goods that the club buys and sells. Expenses such as the honorarium, repairs and bank charges have debit balances.</Rule>
        <FactCards
          cards={[
            { title: 'Accumulated fund', line1: 'credit balance: assets', line2: 'minus liabilities' },
            { title: 'Fees and donations', line1: 'income accounts with', line2: 'credit balances' },
            { title: 'Honorarium, repairs', line1: 'expenses with', line2: 'debit balances' },
            { title: 'Stock accounts', line1: 'refreshments bought', line2: 'and sold by the club' },
          ]}
          aria="Ledger accounts of a club. The Accumulated Fund has a credit balance and equals assets minus liabilities. Membership fees, entrance fees and donations are income accounts with credit balances. The honorarium, repairs and bank charges are expenses with debit balances. Stock accounts such as refreshments are for goods the club buys and sells."
        />
        <Worked
          title="Post three receipts"
          steps={[
            'Membership fees R12 000 received: debit Bank R12 000 and credit Membership fees R12 000.',
            'Entrance fees R1 500 received: debit Bank R1 500 and credit Entrance fees R1 500.',
            `The Accumulated Fund opens with a credit balance of ${randNb(openingFund())} (assets − liabilities).`,
          ]}
        />
        <Mistake>Posting the opening accumulated fund to the debit side. It is equity, so it has a credit balance.</Mistake>
      </>,
    ),
  },
  {
    title: 'The Trial Balance of the club',
    content: slide(
      <>
        <Rule>The Trial Balance lists the balance of every ledger account. The debit total must equal the credit total. For the club, the debit balances are the bank, equipment and the expenses, and the credit balances are the accumulated fund and the income accounts.</Rule>
        <AmountBars title="Trial balance columns" rows={[{ label: 'Debit total', amount: tot.dr, color: 'blue' }, { label: 'Credit total', amount: tot.cr, color: 'green' }]} aria="The debit total and the credit total of the trial balance are equal, R30 000 each." />
        <JournalTable
          title="Trial Balance: Riverside Netball Club"
          columns={['Account', 'Balance']}
          rows={tb.map((r) => [`${r.account.replace('Purchase of refreshments', 'Refreshments bought')} ${r.side}`, r.amount])}
          total={{ label: 'Debit total = credit total', amount: tot.dr }}
          aria="The trial balance. Debit balances: bank R15 000, equipment R7 000, honorarium R4 000, purchase of refreshments R2 500, repairs R1 200 and bank charges R300. Credit balances: accumulated fund R11 000, membership fees R12 000, entrance fees R1 500, donations R2 000 and sale of refreshments R3 500. Both columns total R30 000."
        />
        <Worked
          title="Add the columns"
          steps={[
            `Debits: 15 000 + 7 000 + 4 000 + 2 500 + 1 200 + 300 = ${randNb(tot.dr)}.`,
            `Credits: 11 000 + 12 000 + 1 500 + 2 000 + 3 500 = ${randNb(tot.cr)}.`,
            'The two totals are equal, so the trial balance balances.',
          ]}
        />
        <Mistake>Forgetting that the creditors were paid in full. They have a nil balance and do not appear on the trial balance.</Mistake>
      </>,
    ),
  },
  {
    title: 'The Statement of Receipts and Payments',
    content: slide(
      <>
        <Rule>The Statement of Receipts and Payments is a summary of the Analysis Cash Book for the year. It lists the receipts, then the payments, then the surplus or deficit of receipts over payments, and finally the opening and closing bank balances. The opening balance plus the surplus must equal the closing balance.</Rule>
        <AmountBars title="Receipts, payments and the surplus" rows={[{ label: 'Receipts', amount: totalReceipts(), color: 'green' }, { label: 'Payments', amount: totalPayments(), color: 'rose' }, { label: 'Surplus', amount: receiptsSurplus(), color: 'blue' }]} aria="Receipts of R19 000 less payments of R12 000 leave a surplus of receipts over payments of R7 000." />
        <JournalTable
          title="Statement of Receipts and Payments for the year"
          columns={['Item', 'Amount']}
          rows={[['Total receipts', totalReceipts()], ['Total payments', totalPayments()], ['Surplus of receipts over payments', receiptsSurplus()], ['Opening bank balance', OPENING.bank]]}
          total={{ label: 'Closing bank balance', amount: closingBank() }}
          aria="The statement of receipts and payments. Total receipts R19 000, total payments R12 000, a surplus of receipts over payments of R7 000, opening bank R8 000 and closing bank R15 000."
        />
        <Worked
          title="Complete the statement"
          steps={[
            `Surplus = receipts − payments = ${totalReceipts()} − ${totalPayments()} = ${randNb(receiptsSurplus())}.`,
            `Closing bank = opening bank + surplus = ${OPENING.bank} + ${receiptsSurplus()} = ${randNb(closingBank())}.`,
            'This agrees with the bank column of the Analysis Cash Book and with the bank statement.',
          ]}
        />
        <Mistake>Leaving out the opening bank balance. Without it the closing balance cannot be found.</Mistake>
      </>,
    ),
  },
  {
    title: 'Receipts and income, payments and expenses',
    content: slide(
      <>
        <Rule>A receipt is money received and a payment is money paid. Income and expenses are different. Income is earned in the year and an expense is a cost of the year, whether or not it has been paid in cash. Buying equipment is a payment but not an expense, and paying creditors is a payment but not an expense. The accumulated fund grows by the surplus of income over expenses, not by the surplus of receipts over payments.</Rule>
        <TwoBars aLabel="surplus of receipts" a={receiptsSurplus()} bLabel="income − expenses" b={incomeLessExpenses()} verdict="the two surpluses are not the same" />
        <Worked
          title="Separate payments that are expenses"
          steps={[
            `Expenses: honorarium 4 000 + refreshments 2 500 + repairs 1 200 + bank charges 300 = ${randNb(expensePayments())}.`,
            `Not expenses: equipment 3 000 + creditors 1 000 = ${randNb(nonExpensePayments())}. Together the payments are ${randNb(totalPayments())}.`,
            `Income − expenses = ${totalReceipts()} − ${expensePayments()} = ${randNb(incomeLessExpenses())}, so the closing accumulated fund = ${openingFund()} + ${incomeLessExpenses()} = ${randNb(closingFund())} (assets ${randNb(closingAssets())}).`,
          ]}
        />
        <Mistake>Treating every payment as an expense. Equipment bought is an asset and creditors paid reduces a liability.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          <>Receipts are R19 000 and payments are R12 000. What is the surplus of receipts over payments?</>,
          <>Which side of the ledger has the accumulated fund?</>,
          <>Why is buying equipment a payment but not an expense?</>,
          <>What must the debit and credit totals of the trial balance be?</>,
        ]}
        answers={[
          <>{randNb(receiptsSurplus())}.</>,
          <>The credit side.</>,
          <>It buys an asset that the club keeps; it is not a cost of the year.</>,
          <>Equal ({randNb(tot.dr)} each in this club).</>,
        ]}
      />,
    ),
  },
];

export const bank: CapsItem[] = [
  {
    prompt: "Which side of the ledger does the Accumulated Fund normally have?",
    options: ["The debit side", "Both sides equally", "The credit side", "It has no side"],
    answer: "The credit side",
    explanation: "It is equity, so it has a credit balance.",
  },
  {
    prompt: "Which of these is an income account of a club?",
    options: ["Membership fees", "Bank charges", "Repairs", "Honorarium"],
    answer: "Membership fees",
    explanation: "Membership fees are income with a credit balance.",
  },
  {
    prompt: "Which of these is an expense account of a club?",
    options: ["Donations", "Entrance fees", "Accumulated fund", "Repairs"],
    answer: "Repairs",
    explanation: "Repairs are an expense with a debit balance.",
  },
  {
    prompt: "Fees of R12 000 from the members are received. Which account is credited?",
    options: ["Bank", "Membership fees", "Accumulated fund", "Equipment"],
    answer: "Membership fees",
    explanation: "Bank is debited and the income account is credited.",
  },
  {
    prompt: "The club pays the coach an honorarium of R4 000. Which account is debited?",
    options: ["Bank", "Honorarium", "Membership fees", "Accumulated fund"],
    answer: "Honorarium",
    explanation: "An expense is debited; Bank is credited.",
  },
  {
    prompt: "The debit balances of a club's trial balance are R15 000, R7 000, R4 000, R2 500, R1 200 and R300. What is the debit total?",
    options: ["R29 000", "R15 000", "R22 000", "R30 000"],
    answer: "R30 000",
    explanation: "15 000 + 7 000 + 4 000 + 2 500 + 1 200 + 300 = 30 000.",
  },
  {
    prompt: "A trial balance has credit balances of R11 000, R12 000, R1 500, R2 000 and R3 500. What is the credit total?",
    options: ["R30 000", "R20 000", "R27 500", "R26 500"],
    answer: "R30 000",
    explanation: "11 000 + 12 000 + 1 500 + 2 000 + 3 500 = 30 000.",
  },
  {
    prompt: "What does the Statement of Receipts and Payments summarise?",
    options: ["The assets and liabilities", "The stock on hand", "The Analysis Cash Book for the year", "The members' names"],
    answer: "The Analysis Cash Book for the year",
    explanation: "It summarises cash received and paid.",
  },
  {
    prompt: "Receipts are R19 000 and payments are R12 000. What is the surplus of receipts over payments?",
    options: ["R31 000", "R19 000", "R12 000", "R7 000"],
    answer: "R7 000",
    explanation: "19 000 − 12 000 = 7 000.",
  },
  {
    prompt: "Opening bank is R8 000 and the surplus of receipts over payments is R7 000. What is the closing bank balance?",
    options: ["R1 000", "R15 000", "R7 000", "R8 000"],
    answer: "R15 000",
    explanation: "8 000 + 7 000 = 15 000.",
  },
  {
    prompt: "Which payment is an asset purchase and not an expense?",
    options: ["Buying new equipment", "Paying the coach", "Paying for repairs", "Paying bank charges"],
    answer: "Buying new equipment",
    explanation: "Equipment is an asset.",
  },
  {
    prompt: "Which payment reduces a liability and is not an expense?",
    options: ["Paying the coach", "Buying refreshments to sell", "Paying a creditor", "Paying bank charges"],
    answer: "Paying a creditor",
    explanation: "Paying a creditor reduces a liability.",
  },
  {
    prompt: "The expense payments are R8 000 and the non-expense payments are R4 000. What are the total payments?",
    options: ["R4 000", "R8 000", "R12 000", "R32 000"],
    answer: "R12 000",
    explanation: "8 000 + 4 000 = 12 000.",
  },
  {
    prompt: "Income is R19 000 and expenses are R8 000. By how much does the accumulated fund increase?",
    options: ["R11 000", "R7 000", "R27 000", "R19 000"],
    answer: "R11 000",
    explanation: "The fund grows by the surplus of income over expenses: 19 000 − 8 000 = 11 000.",
  },
];

const ReceiptsPaymentsAccumulatedFund = () => (
  <CapsSubjectTopic
    title="Statement of Receipts and Payments and the Accumulated Fund"
    subtitle="Club ledger accounts, the trial balance, the statement of receipts and payments and income against receipts"
    learnSteps={learnSteps}
    task="gr11-receipts-payments-accumulated-fund-t2"
    bank={bank}
    apiPath="/api/caps/acc"
  />
);

export default ReceiptsPaymentsAccumulatedFund;
