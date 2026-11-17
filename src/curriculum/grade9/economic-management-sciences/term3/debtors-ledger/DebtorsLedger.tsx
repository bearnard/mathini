import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem } from '../../../../../components/CapsSubjectTopic';
import { learnSteps } from './Slides';

const bank: CapsItem[] = [
  {
    prompt: "What is the debtors ledger?",
    options: ["A single account that shows the total of the debtors", "A journal that lists the cash received each day", "A set of accounts, one for each debtor", "A list of the suppliers that the business owes"],
    answer: "A set of accounts, one for each debtor",
    explanation: "The debtors ledger has a separate account for each debtor, so the business knows who owes what.",
  },
  {
    prompt: "Where is each invoice in the debtors journal posted?",
    options: ["To the debtor's own account", "To the Bank account", "To the Sales account", "To the Creditors control account"],
    answer: "To the debtor's own account",
    explanation: "Each invoice is posted to the debit side of that debtor's account in the debtors ledger.",
  },
  {
    prompt: "On which side of a debtor's account is an invoice posted?",
    options: ["The credit side", "The debit side", "Either side", "Neither side"],
    answer: "The debit side",
    explanation: "An invoice increases what the debtor owes, and an increase in an asset is a debit.",
  },
  {
    prompt: "On which side of a debtor's account is a payment from the debtor posted?",
    options: ["The debit side", "Both sides equally", "Neither of the sides", "The credit side"],
    answer: "The credit side",
    explanation: "A payment reduces what the debtor owes, so it is credited to the debtor's account.",
  },
  {
    prompt: "What is posted to the general ledger from the debtors journal each month?",
    options: ["Each invoice on its own", "The total of the journal", "The largest invoice only", "The last invoice alone"],
    answer: "The total of the journal",
    explanation: "The general ledger gets the total once. The individual invoices go to the debtors' accounts.",
  },
  {
    prompt: "Dlamini's account has debit entries of R1 200 and R400. What is the total of the debit side?",
    options: ["R800", "R1 200", "R400", "R1 600"],
    answer: "R1 600",
    explanation: "1 200 + 400 = R1 600.",
  },
  {
    prompt: "Dlamini's account has debits of R1 200 and R400 and a credit of R1 000. What is the balance?",
    options: ["R600 debit", "R600 credit", "R1 600 debit", "R200 debit"],
    answer: "R600 debit",
    explanation: "1 200 + 400 − 1 000 = R600. Dlamini still owes this, so the balance is on the debit side.",
  },
  {
    prompt: "Naidoo's account has a debit of R850 and credits of R50 (a credit note) and R800 (a payment). What is the balance?",
    options: ["R0", "R50", "R100", "R850"],
    answer: "R0",
    explanation: "850 − 50 − 800 = R0. Naidoo owes nothing.",
  },
  {
    prompt: "Pillay was invoiced R1 500 and has paid nothing. What does the account show?",
    options: ["A credit balance of R1 500", "A debit balance of R1 500", "A debit balance of R0", "A credit balance of R750"],
    answer: "A debit balance of R1 500",
    explanation: "The invoice is a debit and nothing has been credited, so Pillay owes R1 500.",
  },
  {
    prompt: "The balances of the debtors are Dlamini R600, Naidoo R0 and Pillay R1 500. What should the Debtors control account show?",
    options: ["R2 100 credit", "R1 500 debit", "R600 debit", "R2 100 debit"],
    answer: "R2 100 debit",
    explanation: "The control account is the total of all the debtors: 600 + 0 + 1 500 = R2 100, on the debit side.",
  },
  {
    prompt: "The three journal totals are DJ R3 950, DAJ R50 and CRJ R1 800. What is the balance of Debtors control?",
    options: ["R5 800", "R2 100", "R1 850", "R3 950"],
    answer: "R2 100",
    explanation: "3 950 − 50 − 1 800 = R2 100.",
  },
  {
    prompt: "The general ledger accounts Debtors control (debit R2 100), Sales, Debtors allowances (debit R50) and Bank (debit R1 800) are in a trial balance. What is the total of the debit column?",
    options: ["R5 800", "R2 100", "R3 950", "R1 850"],
    answer: "R3 950",
    explanation: "2 100 + 50 + 1 800 = R3 950, which equals the credit column (Sales R3 950).",
  },
  {
    prompt: "The debtors list totals R1 650 but Debtors control shows R2 100. What is the difference that must be found?",
    options: ["R3 750", "R450", "R1 650", "R2 100"],
    answer: "R450",
    explanation: "2 100 − 1 650 = R450. Somewhere an amount was posted wrongly or left out.",
  },
  {
    prompt: "At the end of the month the total of the debtors list must equal:",
    options: ["the balance of the Bank account", "the total of the Sales account", "the balance of Debtors control", "the balance of Creditors control"],
    answer: "the balance of Debtors control",
    explanation: "The list and the control account show the same amounts in two ways, so they must agree.",
  },
];

const DebtorsLedger = () => (
  <CapsSubjectTopic
    title="Debtors Ledger and General Ledger Posting"
    subtitle="Debtors' accounts, posting the journal totals, and agreeing the list with the control account"
    learnSteps={learnSteps}
    task="gr9-debtors-ledger-t3"
    bank={bank}
    apiPath="/api/caps/ems"
  />
);

export default DebtorsLedger;
