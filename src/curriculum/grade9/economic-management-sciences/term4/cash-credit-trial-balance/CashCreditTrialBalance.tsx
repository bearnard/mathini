import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem } from '../../../../../components/CapsSubjectTopic';
import { learnSteps } from './Slides';

const bank: CapsItem[] = [
  {
    prompt: "A shop makes cash sales of R4 500. Which entry is made?",
    options: ["Debit Debtors control, credit Sales", "Debit Bank, credit Sales", "Debit Sales, credit Bank", "Debit Bank, credit Debtors control"],
    answer: "Debit Bank, credit Sales",
    explanation: "Cash comes in (debit Bank) and income is earned (credit Sales).",
  },
  {
    prompt: "A shop makes credit sales of R7 000. Which entry is made?",
    options: ["Debit Debtors control, credit Sales", "Debit Bank, credit Sales", "Debit Sales, credit Debtors control", "Debit Debtors control, credit Bank"],
    answer: "Debit Debtors control, credit Sales",
    explanation: "No cash has come in yet, so the customers owe the shop (debit Debtors control) and income is earned (credit Sales).",
  },
  {
    prompt: "Goods of R6 000 are bought on credit. Which entry is made?",
    options: ["Debit Purchases, credit Bank", "Debit Creditors control, credit Purchases", "Debit Purchases, credit Creditors control", "Debit Bank, credit Creditors control"],
    answer: "Debit Purchases, credit Creditors control",
    explanation: "The goods are an expense (debit Purchases) and the business now owes the supplier (credit Creditors control).",
  },
  {
    prompt: "The owner pays R20 000 into the business bank account to start the business. Which entry is made?",
    options: ["Debit Capital, credit Bank", "Debit Bank, credit Sales", "Debit Purchases, credit Bank", "Debit Bank, credit Capital"],
    answer: "Debit Bank, credit Capital",
    explanation: "Cash comes in (debit Bank), and the business now owes the owner this investment (credit Capital).",
  },
  {
    prompt: "Rent of R1 800 is paid from the bank. Which entry is made?",
    options: ["Debit Bank, credit Rent", "Debit Rent, credit Creditors control", "Debit Bank, credit Sales", "Debit Rent, credit Bank"],
    answer: "Debit Rent, credit Bank",
    explanation: "Rent is an expense (debit Rent) and cash goes out (credit Bank).",
  },
  {
    prompt: "Debtors pay R3 000 that they owe. Which entry is made?",
    options: ["Debit Debtors control, credit Bank", "Debit Bank, credit Sales", "Debit Bank, credit Debtors control", "Debit Sales, credit Debtors control"],
    answer: "Debit Bank, credit Debtors control",
    explanation: "Cash comes in (debit Bank) and the amount owed by debtors falls (credit Debtors control). The sale was already recorded.",
  },
  {
    prompt: "The business pays a creditor R2 500. Which entry is made?",
    options: ["Debit Bank, credit Creditors control", "Debit Creditors control, credit Bank", "Debit Purchases, credit Bank", "Debit Creditors control, credit Purchases"],
    answer: "Debit Creditors control, credit Bank",
    explanation: "The amount owed falls (debit Creditors control) and cash goes out (credit Bank).",
  },
  {
    prompt: "Bank is debited R20 000, R4 500 and R3 000 and credited R1 800 and R2 500. What is the balance of Bank?",
    options: ["R27 500 debit", "R4 300 credit", "R23 200 debit", "R23 200 credit"],
    answer: "R23 200 debit",
    explanation: "27 500 − 4 300 = R23 200. More came in than went out, so the balance is a debit.",
  },
  {
    prompt: "Debtors control is debited R7 000 for credit sales and credited R3 000 for receipts. What is its balance?",
    options: ["R4 000 credit", "R4 000 debit", "R10 000 debit", "R3 000 debit"],
    answer: "R4 000 debit",
    explanation: "7 000 − 3 000 = R4 000. The debtors still owe this to the business.",
  },
  {
    prompt: "Creditors control is credited R6 000 for purchases and debited R2 500 for a payment. What is its balance?",
    options: ["R3 500 debit", "R8 500 credit", "R3 500 credit", "R16 000 credit"],
    answer: "R3 500 credit",
    explanation: "6 000 − 2 500 = R3 500. The business still owes this, so the balance is a credit.",
  },
  {
    prompt: "Sales is credited R4 500 for cash sales and R7 000 for credit sales. What is the balance of Sales?",
    options: ["R11 500 debit", "R16 000 credit", "R7 000 credit", "R11 500 credit"],
    answer: "R11 500 credit",
    explanation: "4 500 + 7 000 = R11 500. Income has a credit balance.",
  },
  {
    prompt: "The trial balance has these debit balances: Bank R23 200, Purchases R6 000, Debtors control R4 000 and Rent R1 800. What is the total of the debit column?",
    options: ["R30 200", "R33 200", "R31 000", "R35 000"],
    answer: "R35 000",
    explanation: "23 200 + 6 000 + 4 000 + 1 800 = R35 000.",
  },
  {
    prompt: "The credit balances are Capital R20 000, Creditors control R3 500 and Sales R11 500. What is the total of the credit column, and does it agree with the debit column of R35 000?",
    options: ["R31 500, so it does not agree", "R35 000, so it agrees", "R23 500, so it does not agree", "R35 000, so there is an error"],
    answer: "R35 000, so it agrees",
    explanation: "20 000 + 3 500 + 11 500 = R35 000, equal to the debit column. The books balance.",
  },
  {
    prompt: "A trial balance has a debit total of R12 400 and a credit total of R12 100. What does this show?",
    options: ["The books balance", "The business made a profit", "The business made a loss", "There is an error to find"],
    answer: "There is an error to find",
    explanation: "If every transaction was posted with equal debits and credits, the two columns must be equal. A difference of R300 shows an error.",
  },
];

const CashCreditTrialBalance = () => (
  <CapsSubjectTopic
    title="Cash and Credit Transactions with the Trial Balance"
    subtitle="Analysing cash and credit transactions, finding the balances, and drawing up a trial balance"
    learnSteps={learnSteps}
    task="gr9-cash-credit-trial-balance-t4"
    bank={bank}
    apiPath="/api/caps/ems"
  />
);

export default CashCreditTrialBalance;
