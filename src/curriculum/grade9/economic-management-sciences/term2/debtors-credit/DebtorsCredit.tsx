import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem } from '../../../../../components/CapsSubjectTopic';
import { learnSteps } from './Slides';

const bank: CapsItem[] = [
  {
    prompt: "A business sells goods worth R1 200 to Dlamini, who will pay next month. In which journal is the sale first recorded?",
    options: ["The cash receipts journal (CRJ)", "The debtors journal (DJ)", "The cash payments journal (CPJ)", "The creditors journal (CJ)"],
    answer: "The debtors journal (DJ)",
    explanation: "A credit sale is recorded in the debtors journal from the sales invoice. No cash has been received yet.",
  },
  {
    prompt: "Which accounts are used in the general ledger for a credit sale of R1 200?",
    options: ["Debit Debtors control, credit Sales", "Debit Bank, credit Sales", "Debit Sales, credit Debtors control", "Debit Debtors control, credit Bank"],
    answer: "Debit Debtors control, credit Sales",
    explanation: "The business is owed money (debit the asset Debtors control) and has earned income (credit Sales).",
  },
  {
    prompt: "The debtors journal for March shows credit sales of R1 200, R850, R400 and R1 500. What is posted to Debtors control?",
    options: ["Credit R3 950", "Debit R1 500", "Debit R1 200", "Debit R3 950"],
    answer: "Debit R3 950",
    explanation: "The total of the journal, 1 200 + 850 + 400 + 1 500 = R3 950, is posted to the debit of Debtors control.",
  },
  {
    prompt: "What is the debtors allowances journal (DAJ) used for?",
    options: ["To record money that has been received from debtors in the shop", "To record goods that were bought on credit from suppliers", "To record goods returned or price reductions given to debtors", "To record the monthly wages that are paid to the staff"],
    answer: "To record goods returned or price reductions given to debtors",
    explanation: "A credit note reduces what a debtor owes. The DAJ is the journal for these allowances.",
  },
  {
    prompt: "A credit note of R50 is issued to a debtor. What is the general ledger entry?",
    options: ["Debit Bank R50, credit Debtors control R50", "Debit Debtors allowances R50, credit Debtors control R50", "Debit Debtors control R50, credit Debtors allowances R50", "Debit Sales R50, credit Bank R50"],
    answer: "Debit Debtors allowances R50, credit Debtors control R50",
    explanation: "The allowance reduces sales (debit Debtors allowances) and reduces the amount owed (credit Debtors control). No cash moves.",
  },
  {
    prompt: "A debtor pays R1 000 on his account. Which entry is made in the general ledger?",
    options: ["Debit Bank R1 000, credit Debtors control R1 000", "Debit Debtors control R1 000, credit Bank R1 000", "Debit Bank R1 000, credit Sales R1 000", "Debit Debtors allowances R1 000, credit Bank R1 000"],
    answer: "Debit Bank R1 000, credit Debtors control R1 000",
    explanation: "Cash comes in (debit Bank) and the amount owed falls (credit Debtors control). The payment is shown in the cash receipts journal.",
  },
  {
    prompt: "Dlamini was invoiced R1 200 and R400 and paid R1 000. How much does he still owe?",
    options: ["R1 600", "R200", "R1 000", "R600"],
    answer: "R600",
    explanation: "1 200 + 400 − 1 000 = R600.",
  },
  {
    prompt: "Naidoo was invoiced R850, was given a credit note for R50 and paid R800. How much does Naidoo owe?",
    options: ["R50", "R100", "R0", "R850"],
    answer: "R0",
    explanation: "850 − 50 − 800 = R0. He owes nothing.",
  },
  {
    prompt: "Debtors owe: Dlamini R600, Naidoo R0 and Pillay R1 500. What is the balance of Debtors control?",
    options: ["R3 950", "R2 100", "R600", "R1 500"],
    answer: "R2 100",
    explanation: "The control account balance equals the total of the individual debtors: 600 + 0 + 1 500 = R2 100.",
  },
  {
    prompt: "What is a debtor?",
    options: ["A person or business that owes the business money for goods sold on credit", "A person or business that the business itself owes money to", "A bank that lends money to the business to buy stock", "A customer who always pays cash at the till"],
    answer: "A person or business that owes the business money for goods sold on credit",
    explanation: "A debtor owes money. A creditor is the opposite: the business owes them.",
  },
  {
    prompt: "Does a debtors allowance involve cash?",
    options: ["Yes, the business pays the debtor", "Yes, the debtor pays the business", "Yes, it is recorded in the cash payments journal", "No, it only reduces the amount the debtor owes"],
    answer: "No, it only reduces the amount the debtor owes",
    explanation: "An allowance is a credit note: the debt becomes smaller, but no money changes hands.",
  },
  {
    prompt: "The total of all the individual debtors' balances should equal:",
    options: ["the balance of the Bank account", "the total of the Sales account", "the balance of the Debtors control account", "the total of the Creditors control account"],
    answer: "the balance of the Debtors control account",
    explanation: "The control account and the debtors' list are two views of the same amounts, so they must agree.",
  },
  {
    prompt: "Which source document does the business give a debtor when goods are returned?",
    options: ["A sales invoice", "A credit note", "A cheque counterfoil", "A bank statement"],
    answer: "A credit note",
    explanation: "A credit note records the reduction. A sales invoice records the original sale.",
  },
  {
    prompt: "What is the aim of the National Credit Act?",
    options: ["To protect consumers who buy on credit and to promote responsible lending", "To stop all businesses from ever selling goods on credit", "To set the prices of all goods that are sold on credit", "To make sure that every customer always pays in cash"],
    answer: "To protect consumers who buy on credit and to promote responsible lending",
    explanation: "The Act sets rules so that credit is given fairly, with clear terms, and only to people who can afford it.",
  },
];

const DebtorsCredit = () => (
  <CapsSubjectTopic
    title="Credit Sales and the Debtors Journal"
    subtitle="Credit sales, the debtors journal, debtors allowances and receipts from debtors"
    learnSteps={learnSteps}
    task="gr9-debtors-credit-t2"
    bank={bank}
    apiPath="/api/caps/ems"
  />
);

export default DebtorsCredit;
