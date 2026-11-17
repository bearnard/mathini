import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem } from '../../../../../components/CapsSubjectTopic';
import { learnSteps } from './Slides';

export const bank: CapsItem[] = [
  {
    prompt: "What is internal control?",
    options: ["A yearly check by an outside auditor", "A report on the profit of the business", "Rules that protect assets and records", "A list of the shareholders of the firm"],
    answer: "Rules that protect assets and records",
    explanation: "Internal control is the system of rules and procedures that the business puts in place to protect its assets and keep accurate records.",
  },
  {
    prompt: "What is an internal audit?",
    options: ["A check by an outside firm of the tax", "A list of the assets that the firm owns", "A check inside the firm on the controls", "A cash budget for the year that follows"],
    answer: "A check inside the firm on the controls",
    explanation: "The internal auditor tests the controls and reports to management.",
  },
  {
    prompt: "Which statement describes the difference between internal control and internal audit?",
    options: ["They are two names for the very same work", "Control is the system; audit checks it", "Audit is the daily work of the cashiers", "Control is done once in a year only by auditors"],
    answer: "Control is the system; audit checks it",
    explanation: "Internal control is carried out in the daily work. Internal audit is a separate check on whether it works.",
  },
  {
    prompt: "What is division of duties?",
    options: ["One trusted person does all of the work", "All staff do the same job in turns", "No one handles a deal from start to end", "The owner signs each document alone"],
    answer: "No one handles a deal from start to end",
    explanation: "Sharing the steps of a transaction between people makes errors and fraud easier to find.",
  },
  {
    prompt: "Which is an example of division of duties?",
    options: ["The cashier also keeps the debtors ledger", "The clerk who orders goods also pays for them", "Cash is received and recorded by two people", "The manager counts and banks the cash alone"],
    answer: "Cash is received and recorded by two people",
    explanation: "Separating receiving from recording stops one person from hiding a theft.",
  },
  {
    prompt: "Why are invoices and receipts pre-numbered?",
    options: ["It makes the documents look important", "It lets the customer choose the number", "It lowers the cost of printing them", "A missing number shows a lost document"],
    answer: "A missing number shows a lost document",
    explanation: "Pre-numbered documents are used in order, so a gap in the numbers can be noticed and investigated.",
  },
  {
    prompt: "Which is a physical control?",
    options: ["A locked safe for the cash", "A pre-numbered invoice book", "A monthly debtors' statement", "A signed order form"],
    answer: "A locked safe for the cash",
    explanation: "Physical controls protect assets from being taken: locks, safes, security and cameras.",
  },
  {
    prompt: "Why must cash be banked in full each day?",
    options: ["So that the cashier can keep some for lunch", "So that the records agree with the bank", "So that the bank pays more interest", "So that the till has no change in it"],
    answer: "So that the records agree with the bank",
    explanation: "Banking all cash intact lets the bank reconciliation show any difference.",
  },
  {
    prompt: "The till slips show R4 820 and R4 770 is counted. What is the difference?",
    options: ["An excess of R50", "A shortage of R4 770", "No difference", "A shortage of R50"],
    answer: "A shortage of R50",
    explanation: "4 820 − 4 770 = R50. Less cash was counted than expected, so there is a shortage.",
  },
  {
    prompt: "A cash shortage is found at closing time. What should be done?",
    options: ["Investigate and report it to a manager", "Take the money from the cashier at once", "Hide it in the petty cash records", "Ignore it if it is a small amount"],
    answer: "Investigate and report it to a manager",
    explanation: "Differences are investigated and reported. They must not be hidden.",
  },
  {
    prompt: "Which control applies to buying goods on credit?",
    options: ["Pay each invoice as soon as it arrives", "Check the invoice against the order", "Let the buyer also approve the payment", "Order goods without a written order form"],
    answer: "Check the invoice against the order",
    explanation: "Checking the three documents together shows that the goods were ordered and received.",
  },
  {
    prompt: "Which control applies to selling on credit?",
    options: ["Sell to any person who asks for goods", "Set a credit limit for the customer", "Give out goods without an order form", "Let the sales clerk write off a debt"],
    answer: "Set a credit limit for the customer",
    explanation: "A credit limit and a credit check reduce the risk of bad debts.",
  },
  {
    prompt: "Which control applies to debtors?",
    options: ["Do not send any statement to a debtor", "Let the debtor decide when to pay up", "Make an age analysis each month", "Write off the overdue accounts at once"],
    answer: "Make an age analysis each month",
    explanation: "Statements and an age analysis show which accounts are overdue so that they can be followed up.",
  },
  {
    prompt: "Which control applies to stock?",
    options: ["Leave it open for the staff to take", "Keep it locked and count it often", "Count it one time in five years", "Issue it without a document at all"],
    answer: "Keep it locked and count it often",
    explanation: "Locked storage, issue documents and regular counts protect stock and show differences.",
  },
];

const InternalControl = () => (
  <CapsSubjectTopic
    title="Internal Control and Division of Duties"
    subtitle="Internal control and internal audit, division of duties, documentation, physical controls, and procedures"
    learnSteps={learnSteps}
    task="gr12-internal-control-t2"
    bank={bank}
    apiPath="/api/caps/acc"
  />
);

export default InternalControl;
