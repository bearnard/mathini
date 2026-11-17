import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem } from '../../../../../components/CapsSubjectTopic';
import { learnSteps } from './Slides';

export const bank: CapsItem[] = [
  {
    prompt: "A close corporation is owned by its:",
    options: ["Shareholders", "Members", "Directors", "Debenture holders"],
    answer: "Members",
    explanation: "A close corporation has members, and what they own is the members' interest. It has no shares.",
  },
  {
    prompt: "Which document sets out the name, the business and the members of a close corporation?",
    options: ["The memorandum of incorporation", "The cash flow statement", "The auditor's report", "The founding statement"],
    answer: "The founding statement",
    explanation: "A close corporation is registered by its founding statement. A company has a memorandum of incorporation.",
  },
  {
    prompt: "In a close corporation, what replaces dividends?",
    options: ["Interest on debentures paid", "Directors' fees for the year", "Distribution to members", "Share premium on issue"],
    answer: "Distribution to members",
    explanation: "A close corporation shares profit with its members as a distribution to members.",
  },
  {
    prompt: "In a close corporation, what replaces ordinary share capital?",
    options: ["Retained income of the year", "Loans from members to it", "Trade creditors owed to others", "Members' contributions"],
    answer: "Members' contributions",
    explanation: "Members put in members' contributions instead of buying shares.",
  },
  {
    prompt: "Which statement shows the distribution to members?",
    options: ["The income statement, as an expense", "The cash budget", "The debtors age analysis", "The appropriation of profit"],
    answer: "The appropriation of profit",
    explanation: "The distribution is a share of profit, not an expense, so it appears in the appropriation of profit.",
  },
  {
    prompt: "A member lends the close corporation R60 000. How is this shown in the balance sheet?",
    options: ["As a loan to a member, an asset", "As a loan from a member, a liability", "As part of the members' interest", "As an expense in the income statement"],
    answer: "As a loan from a member, a liability",
    explanation: "The close corporation must repay the money, so it is a liability.",
  },
  {
    prompt: "The close corporation lends a member R20 000. How is this shown in the balance sheet?",
    options: ["As a loan from a member, a liability", "As part of the members' contributions", "As a loan to a member, an asset", "As a reduction of inventory"],
    answer: "As a loan to a member, an asset",
    explanation: "The member owes the close corporation this amount, so it is an asset.",
  },
  {
    prompt: "A loan of R60 000 from a member carries interest at 10%. What is the interest for a year?",
    options: ["R6 000", "R600", "R60 000", "R10 000"],
    answer: "R6 000",
    explanation: "60 000 × 10% = R6 000. It is an expense of the close corporation.",
  },
  {
    prompt: "A loan of R20 000 to a member carries interest at 8%. What is the interest earned for a year?",
    options: ["R160", "R2 000", "R8 000", "R1 600"],
    answer: "R1 600",
    explanation: "20 000 × 8% = R1 600. It is income of the close corporation.",
  },
  {
    prompt: "The gross profit is R256 000, and salaries are R96 000, depreciation is R18 000 and other expenses are R54 000. What is the operating profit?",
    options: ["R88 000", "R160 000", "R142 000", "R105 000"],
    answer: "R88 000",
    explanation: "256 000 − 96 000 − 18 000 − 54 000 = R88 000.",
  },
  {
    prompt: "Operating profit is R88 000, interest earned on a loan to a member is R1 600 and interest paid on a loan from a member is R6 000. What is the net profit before tax?",
    options: ["R93 600", "R83 600", "R95 600", "R80 400"],
    answer: "R83 600",
    explanation: "88 000 + 1 600 − 6 000 = R83 600.",
  },
  {
    prompt: "Net profit before tax is R83 600 and income tax is R22 572. What is the net profit after tax?",
    options: ["R61 028", "R106 172", "R22 572", "R60 100"],
    answer: "R61 028",
    explanation: "83 600 − 22 572 = R61 028.",
  },
  {
    prompt: "Retained income at the start is R35 000, net profit after tax is R61 028 and R40 000 is distributed to members. What is the retained income at the end?",
    options: ["R96 028", "R136 028", "R56 028", "R16 028"],
    answer: "R56 028",
    explanation: "35 000 + 61 028 − 40 000 = R56 028.",
  },
  {
    prompt: "Members' contributions are R100 000 and the retained income is R56 028. The loan from a member is R60 000, creditors are R38 000 and income tax payable is R8 572. What is the total of equity and liabilities?",
    options: ["R156 028", "R262 600", "R202 600", "R318 628"],
    answer: "R262 600",
    explanation: "Members' interest is 100 000 + 56 028 = R156 028. Adding 60 000 + 38 000 + 8 572 gives R262 600, the same as total assets.",
  },
];

const CloseCorporations = () => (
  <CapsSubjectTopic
    title="Close Corporations"
    subtitle="Members, the founding statement, loans to and from members, and the financial statements"
    learnSteps={learnSteps}
    task="gr12-close-corporations-t2"
    bank={bank}
    apiPath="/api/caps/acc"
  />
);

export default CloseCorporations;
