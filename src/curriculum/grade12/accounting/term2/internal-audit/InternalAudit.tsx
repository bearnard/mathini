import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem } from '../../../../../components/CapsSubjectTopic';
import { learnSteps } from './Slides';

export const bank: CapsItem[] = [
  {
    prompt: "Who employs an internal auditor?",
    options: ["The tax authority", "The bank of the business", "The suppliers", "The business itself"],
    answer: "The business itself",
    explanation: "An internal auditor is an employee or a department of the business.",
  },
  {
    prompt: "To whom does an internal auditor report?",
    options: ["Management", "The shareholders only", "The customers", "The competitors"],
    answer: "Management",
    explanation: "The internal auditor reports on the controls to management.",
  },
  {
    prompt: "What does an external auditor give an opinion on?",
    options: ["Whether the staff are hard-working", "Whether the products sell well enough", "Whether the statements are fair", "Whether the prices are kept low"],
    answer: "Whether the statements are fair",
    explanation: "The external auditor is independent and gives an opinion on the financial statements.",
  },
  {
    prompt: "Why is the external auditor independent of the business?",
    options: ["So the work costs the owners less", "So the opinion can be trusted", "So the staff do not find out", "So that no report is needed"],
    answer: "So the opinion can be trusted",
    explanation: "An independent auditor has no interest in the result, so users can rely on the opinion.",
  },
  {
    prompt: "Which is a difference between internal and external auditors?",
    options: ["The external auditor works for the manager", "The internal auditor checks controls all year", "The internal auditor is independent of the business", "The external auditor checks only the cash"],
    answer: "The internal auditor checks controls all year",
    explanation: "The internal auditor works in the business throughout the year. The external auditor is independent and reports to the owners.",
  },
  {
    prompt: "Why do auditors gather audit evidence?",
    options: ["To increase the profit of the business", "To support what the audit report says", "To reduce the tax of the owners", "To please the management"],
    answer: "To support what the audit report says",
    explanation: "A report must rest on evidence such as documents, counts and confirmations.",
  },
  {
    prompt: "Which of these is a means of gathering audit evidence?",
    options: ["Guessing the totals of the sales", "Asking only the owner for his opinion", "Inspecting the invoices and receipts", "Reading the news about the business"],
    answer: "Inspecting the invoices and receipts",
    explanation: "Inspecting documents is a basic way of gathering evidence.",
  },
  {
    prompt: "An auditor asks a debtor to confirm the amount that the debtor owes. Which means of gathering evidence is this?",
    options: ["Re-calculation", "Observation", "Confirmation", "A physical count"],
    answer: "Confirmation",
    explanation: "Asking a debtor or creditor to confirm the balance is called confirmation.",
  },
  {
    prompt: "An auditor counts the stock in the storeroom. Which means of gathering evidence is this?",
    options: ["A re-calculation", "A confirmation", "A physical count", "An observation"],
    answer: "A physical count",
    explanation: "Counting stock and cash gives direct evidence of what the business has.",
  },
  {
    prompt: "Why do auditors check a sample and not every transaction?",
    options: ["Checking them all takes too long", "Samples are more exact than totals", "The law forbids a full check", "Transactions rarely have errors"],
    answer: "Checking them all takes too long",
    explanation: "A representative sample is used to judge the whole population.",
  },
  {
    prompt: "An auditor checks every tenth invoice, starting from number 5. Which sampling technique is this?",
    options: ["Random sampling", "A full check", "Systematic sampling", "Convenience sampling"],
    answer: "Systematic sampling",
    explanation: "Choosing every nth item from a starting point is systematic sampling.",
  },
  {
    prompt: "In a sample of 20 invoices, 3 have errors. What is the error rate?",
    options: ["3%", "20%", "60%", "15%"],
    answer: "15%",
    explanation: "3 ÷ 20 = 0,15, which is 15%.",
  },
  {
    prompt: "There are 200 invoices, and a sample of 20 has an error rate of 15%. About how many errors are estimated in all 200 invoices?",
    options: ["30", "3", "15", "60"],
    answer: "30",
    explanation: "200 × 15% = 30 errors are estimated in the population.",
  },
  {
    prompt: "What is the purpose of the recommendations in an internal audit report?",
    options: ["To list the staff who must be dismissed", "To set next year's profit target", "To tell management how to fix faults", "To replace the external auditor's work"],
    answer: "To tell management how to fix faults",
    explanation: "Management is accountable for acting on the recommendations.",
  },
];

const InternalAudit = () => (
  <CapsSubjectTopic
    title="Internal Audit: Evidence, Sampling and Reports"
    subtitle="Internal and external auditors, audit evidence, sampling, and internal audit reports"
    learnSteps={learnSteps}
    task="gr12-internal-audit-t2"
    bank={bank}
    apiPath="/api/caps/acc"
  />
);

export default InternalAudit;
