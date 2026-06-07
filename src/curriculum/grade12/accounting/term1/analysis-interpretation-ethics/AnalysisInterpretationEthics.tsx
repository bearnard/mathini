'use client';

import CapsSubjectTopic from '@/components/CapsSubjectTopic';
import FinancialStatement from '@/components/subjects/FinancialStatement';
import TAccount from '@/components/subjects/TAccount';
import type { AccountingItem, LearnStep } from '../../_shared/types';

const learnSteps: LearnStep[] = [
  {
    image: { src: "/curriculum/grade12/acc/term1/analysis-interpretation-ethics/diagram.webp", alt: "Statement of Comprehensive Income (Extract)" },
    title: 'Profitability, liquidity and gearing',
    content: (
      <div className="space-y-6">
        <p className="text-lg leading-8 text-slate-600">
          In CAPS questions, interpretation starts with evidence from the published figures. Learners should calculate the indicator, compare it with the previous year, and then explain what the movement means for shareholders, lenders and day-to-day cash flow.
        </p>
        <FinancialStatement
          title="Statement of Comprehensive Income (Extract)"
          period="Year ended 28 February 2025"
          sections={[
            {
              heading: 'Performance figures',
              lines: [
                { label: 'Sales', amount: 4850000 },
                { label: 'Less: Cost of sales', amount: -2980000 },
                { label: 'Gross profit', amount: 1870000, isSubtotal: true },
                { label: 'Other operating income', amount: 96000 },
                { label: "Directors' fees", amount: -240000, indent: 1 },
                { label: 'Audit fees', amount: -96000, indent: 1 },
                { label: 'Depreciation', amount: -180000, indent: 1 },
                { label: 'Operating profit', amount: 1450000, isTotal: true },
              ],
            },
          ]}
        />
        <p className="text-base leading-7 text-slate-600">
          These figures support ratio comments such as operating profit percentage and return on average shareholders' equity. A strong answer would say that profitability improved because sales grew faster than operating expenses, not simply that the company "did well".
        </p>
      </div>
    ),
  },
  {
    title: 'Using evidence from published statements',
    content: (
      <div className="space-y-6">
        <p className="text-lg leading-8 text-slate-600">
          Liquidity and gearing comments must come from the statement of financial position. Current assets, current liabilities and long-term debt all provide direct evidence for whether the company can meet its short-term commitments and whether it is taking too much risk.
        </p>
        <FinancialStatement
          title="Statement of Financial Position (Extract)"
          period="At 28 February 2025"
          sections={[
            {
              heading: 'Current assets',
              lines: [
                { label: 'Inventory', amount: 420000 },
                { label: 'Trade and other receivables', amount: 515000 },
                { label: 'Cash and cash equivalents', amount: 325000 },
                { label: 'Total current assets', amount: 1260000, isSubtotal: true },
              ],
            },
            {
              heading: 'Equity and liabilities',
              lines: [
                { label: "Shareholders' equity", amount: 3140000 },
                { label: 'Non-current liabilities', amount: 1180000 },
                { label: 'Current liabilities', amount: 540000 },
                { label: 'Debt-equity ratio basis', amount: 1180000, note: 'compare with equity', isTotal: true },
              ],
            },
          ]}
        />
        <p className="text-base leading-7 text-slate-600">
          From this extract, the current ratio is 1,260,000 : 540,000, or about 2.33 : 1, while the debt-equity ratio is 1,180,000 : 3,140,000. Learners should use those figures to explain that liquidity is comfortable, but debt still needs to be monitored.
        </p>
      </div>
    ),
  },
  {
    title: 'Governance and audit',
    content: (
      <div className="space-y-6">
        <p className="text-lg leading-8 text-slate-600">
          Governance is not only theory. It affects how profit is protected and how fairly wealth is distributed. The retained income account below shows how profit for the year increases equity before dividends reduce the amount kept in the business.
        </p>
        <TAccount
          title="Retained Income"
          debit={[
            { description: 'Interim dividend', amount: 180000 },
            { description: 'Final dividend', amount: 240000 },
          ]}
          credit={[
            { description: 'Balance b/d', amount: 1180000 },
            { description: 'Net profit after tax', amount: 884000 },
          ]}
        />
        <p className="text-base leading-7 text-slate-600">
          Directors should recommend dividends only after considering liquidity and future plans. Independent auditors then report on whether the statements are fairly presented in all material respects, helping shareholders trust the information used for decisions.
        </p>
      </div>
    ),
  },
  {
    title: 'Ethics in accounting',
    content: (
      <div className="space-y-6">
        <p className="text-lg leading-8 text-slate-600">
          Ethical accounting means presenting the business honestly, even when the results are disappointing. A company should never manipulate depreciation, hide liabilities, or use confidential information for insider trading simply to improve appearances.
        </p>
        <p className="text-base leading-7 text-slate-600">
          In an exam answer, practical recommendations score well: separate duties, demand disclosure of conflicts of interest, appoint more independent non-executive directors, and insist on supporting documents for every adjustment. These actions improve transparency and protect all stakeholders.
        </p>
      </div>
    ),
  },
];

const bank: AccountingItem[] = [
  {
    "id": "aie-1",
    "question": "The current ratio is calculated as:",
    "options": [
      "current assets ÷ current liabilities",
      "total liabilities ÷ total assets",
      "net profit after tax ÷ average equity",
      "sales ÷ inventory"
    ],
    "answer": 0,
    "explanation": "The current ratio measures whether current assets are sufficient to cover current liabilities."
  },
  {
    "id": "aie-2",
    "question": "The acid-test ratio differs from the current ratio because it excludes:",
    "options": [
      "cash",
      "ordinary share capital",
      "inventory",
      "trade payables"
    ],
    "answer": 2,
    "explanation": "The acid-test ratio is stricter because it excludes inventory from current assets."
  },
  {
    "id": "aie-3",
    "question": "The debt-equity ratio mainly measures the company's:",
    "options": [
      "liquidity",
      "gearing",
      "gross profit percentage",
      "stock turnover rate"
    ],
    "answer": 1,
    "explanation": "The debt-equity ratio compares debt to equity and therefore measures financial risk or gearing."
  },
  {
    "id": "aie-4",
    "question": "An unqualified audit report indicates that the financial statements are:",
    "options": [
      "guaranteed to show high profits",
      "free from all small mistakes",
      "fairly presented in all material respects",
      "approved by SARS for tax refunds"
    ],
    "answer": 2,
    "explanation": "An unqualified report is a clean opinion that the statements are fairly presented in material respects."
  },
  {
    "id": "aie-5",
    "question": "Return on average shareholders' equity measures:",
    "options": [
      "the return earned for ordinary shareholders",
      "the value of inventory sold",
      "the salary of directors",
      "the number of shares authorised"
    ],
    "answer": 0,
    "explanation": "ROE shows how effectively profit is generated from shareholders' invested funds."
  },
  {
    "id": "aie-6",
    "question": "Which action strengthens corporate governance?",
    "options": [
      "Allowing one director to approve all payments alone",
      "Appointing independent non-executive directors",
      "Hiding a conflict of interest from shareholders",
      "Recording sales before goods are delivered"
    ],
    "answer": 1,
    "explanation": "Independent non-executive directors improve oversight and reduce the risk of biased decisions."
  },
  {
    "id": "aie-7",
    "question": "Insider trading is unethical because it involves:",
    "options": [
      "paying dividends late",
      "using confidential information for personal gain",
      "issuing more shares to the public",
      "preparing a cash budget"
    ],
    "answer": 1,
    "explanation": "Insider trading uses non-public information unfairly and is both unethical and illegal."
  },
  {
    "id": "aie-8",
    "question": "If sales stay the same but operating expenses decrease, the operating profit percentage will usually:",
    "options": [
      "decrease",
      "stay exactly the same",
      "increase",
      "become zero"
    ],
    "answer": 2,
    "explanation": "Lower operating expenses at the same sales level improve operating profit and therefore the operating profit percentage."
  }
];

const practiceBank = bank.map((item) => ({
  prompt: item.question,
  options: item.options,
  answer: item.options[item.answer],
  explanation: item.explanation,
}));

const AnalysisInterpretationEthics = () => (
  <CapsSubjectTopic
    title="Analysis, Interpretation and Ethics"
    subtitle="Using company indicators, governance principles and ethical judgement"
    learnSteps={learnSteps}
    task="gr12-analysis-interpretation-ethics-t1"
    bank={practiceBank}
    apiPath="/api/caps/acc"
  />
);

export default AnalysisInterpretationEthics;
