import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem } from '../../../../../components/CapsSubjectTopic';
import { learnSteps } from './Slides';

const bank: CapsItem[] = [
  {
    prompt: "What is a creditor?",
    options: ["A customer that owes the business money", "A bank that holds the cash of the owner", "A supplier owed money by the business", "A worker who is paid a monthly wage"],
    answer: "A supplier owed money by the business",
    explanation: "A creditor is owed money by the business. A debtor is the opposite: it owes the business.",
  },
  {
    prompt: "In which journal is a credit purchase of goods first recorded?",
    options: ["The debtors journal (DJ)", "The cash receipts journal (CRJ)", "The creditors journal (CJ)", "The creditors allowances journal (CAJ)"],
    answer: "The creditors journal (CJ)",
    explanation: "A credit purchase is recorded in the creditors journal from the supplier's invoice.",
  },
  {
    prompt: "Which general ledger entry records a credit purchase of R2 400?",
    options: ["Debit Creditors control, credit Purchases", "Debit Purchases, credit Bank", "Debit Purchases, credit Creditors control", "Debit Bank, credit Creditors control"],
    answer: "Debit Purchases, credit Creditors control",
    explanation: "The goods are an expense (debit Purchases) and the business owes the supplier (credit Creditors control).",
  },
  {
    prompt: "The creditors journal shows purchases of R2 400, R900 and R750. What is the total posted to Creditors control?",
    options: ["Debit R4 050", "Credit R4 050", "Credit R3 300", "Credit R2 400"],
    answer: "Credit R4 050",
    explanation: "2 400 + 900 + 750 = R4 050, posted to the credit side of Creditors control.",
  },
  {
    prompt: "What is the creditors allowances journal (CAJ) used for?",
    options: ["Money that customers pay to the business", "Goods that are bought on credit from suppliers", "Wages that are paid to the staff each month", "Credit notes that cut what the business owes"],
    answer: "Credit notes that cut what the business owes",
    explanation: "When goods are returned or a price is reduced, the supplier sends a credit note and the business records it in the CAJ.",
  },
  {
    prompt: "A supplier sends a credit note of R100. Which general ledger entry is made?",
    options: ["Debit Creditors control R100, credit Creditors allowances R100", "Debit Creditors allowances R100, credit Creditors control R100", "Debit Creditors control R100, credit Bank R100", "Debit Purchases R100, credit Creditors control R100"],
    answer: "Debit Creditors control R100, credit Creditors allowances R100",
    explanation: "The amount owed falls (debit Creditors control) and the cost of the goods falls (credit Creditors allowances). No cash moves.",
  },
  {
    prompt: "The business pays a creditor R2 000 by EFT. Which general ledger entry is made?",
    options: ["Debit Creditors control R2 000, credit Bank R2 000", "Debit Bank R2 000, credit Creditors control R2 000", "Debit Purchases R2 000, credit Bank R2 000", "Debit Creditors allowances R2 000, credit Bank R2 000"],
    answer: "Debit Creditors control R2 000, credit Bank R2 000",
    explanation: "The amount owed falls (debit Creditors control) and cash goes out (credit Bank). The payment is shown in the cash payments journal.",
  },
  {
    prompt: "On which side of a creditor's own account is a credit purchase posted?",
    options: ["The debit side", "Both of the sides", "Neither of the sides", "The credit side"],
    answer: "The credit side",
    explanation: "A purchase increases what is owed, and an increase in a liability is a credit.",
  },
  {
    prompt: "Mokoena Wholesalers sold goods of R2 400, sent a credit note for R100 and was paid R2 000. How much does the business still owe Mokoena?",
    options: ["R400", "R2 300", "R100", "R300"],
    answer: "R300",
    explanation: "2 400 − 100 − 2 000 = R300.",
  },
  {
    prompt: "Fresh Farms sold goods of R900 and was paid R900. What does Fresh Farms' account show?",
    options: ["A credit balance of R900", "A debit balance of R900", "A credit balance of R1 800", "A balance of R0"],
    answer: "A balance of R0",
    explanation: "900 − 900 = R0. The business owes Fresh Farms nothing.",
  },
  {
    prompt: "The creditors owed are Mokoena R300, Fresh Farms R0 and Naidoo Packaging R750. What should Creditors control show?",
    options: ["R1 050 debit", "R1 050 credit", "R1 650 credit", "R1 800 credit"],
    answer: "R1 050 credit",
    explanation: "The control account is the total of the creditors: 300 + 0 + 750 = R1 050, on the credit side.",
  },
  {
    prompt: "The journal totals are CJ R4 050, CAJ R100 and CPJ R2 900. What is the balance of Creditors control?",
    options: ["R1 050", "R7 050", "R950", "R4 050"],
    answer: "R1 050",
    explanation: "4 050 − 100 − 2 900 = R1 050.",
  },
  {
    prompt: "Purchases is debited with the total of the creditors journal. Creditors control is credited with that total and debited R100 and R2 900. Creditors allowances is credited R100 and Bank is credited R2 900. What is the total of the debit column of the trial balance?",
    options: ["R7 050", "R3 000", "R4 050", "R1 050"],
    answer: "R4 050",
    explanation: "Purchases R4 050 is the only debit balance (Creditors control is a credit balance of R1 050). The credit column is 1 050 + 100 + 2 900 = R4 050.",
  },
  {
    prompt: "At the end of the month the creditors list must agree with:",
    options: ["the balance of Creditors control", "the balance of Debtors control", "the balance of the Sales account", "the total of the Purchases account"],
    answer: "the balance of Creditors control",
    explanation: "The list of creditors and the control account show the same amounts, so they must agree.",
  },
];

const CreditorsJournals = () => (
  <CapsSubjectTopic
    title="Credit Purchases: Creditors Journals"
    subtitle="The creditors journal, creditors allowances, payments to creditors, and the creditors ledger"
    learnSteps={learnSteps}
    task="gr9-creditors-journals-t3"
    bank={bank}
    apiPath="/api/caps/ems"
  />
);

export default CreditorsJournals;
