'use client';

import CapsSubjectTopic from '@/components/CapsSubjectTopic';
import FinancialStatement from '@/components/subjects/FinancialStatement';
import TAccount from '@/components/subjects/TAccount';
import type { AccountingItem, LearnStep } from '../../_shared/types';

const learnSteps: LearnStep[] = [
  {
    image: { src: "/curriculum/grade12/acc/term1/company-share-capital/diagram.webp", alt: "Statement of Changes in Equity (Extract)" },
    title: 'Ordinary share capital and ownership',
    content: (
      <div className="space-y-6">
        <p className="text-lg leading-8 text-slate-600">
          Ordinary shareholders are the owners of the company, but the company is a separate legal entity. Grade 12 learners must distinguish carefully between authorised shares, issued shares and the rand value of ordinary share capital.
        </p>
        <FinancialStatement
          title="Statement of Changes in Equity (Extract)"
          period="Year ended 28 February 2025"
          sections={[
            {
              heading: 'Ordinary share capital',
              lines: [
                { label: 'Balance at beginning of year', amount: 1850000 },
                { label: 'Issue of 60 000 shares at R8', amount: 480000 },
                { label: 'Share buy-back adjustment', amount: -210000 },
                { label: 'Balance at end of year', amount: 2120000, isTotal: true },
              ],
            },
          ]}
        />
        <p className="text-base leading-7 text-slate-600">
          Share capital movements affect equity directly and must agree with both the published statements and the share note. This is why layout and supporting workings matter so much in company questions.
        </p>
      </div>
    ),
  },
  {
    title: 'Issue of shares and cash received',
    content: (
      <div className="space-y-6">
        <p className="text-lg leading-8 text-slate-600">
          A new issue of no-par-value shares increases ordinary share capital by the cash received. The double entry below shows how a rights issue strengthens the company's funding base.
        </p>
        <TAccount
          title="Ordinary Share Capital"
          debit={[]}
          credit={[
            { description: 'Balance b/d', amount: 1850000 },
            { description: 'Rights issue: 60 000 shares at R8', amount: 480000 },
          ]}
        />
        <p className="text-base leading-7 text-slate-600">
          The matching debit would usually be Bank, because the company receives R480 000 in cash. In the cash flow statement this will appear as a financing inflow.
        </p>
      </div>
    ),
  },
  {
    title: 'Buy-backs and dividends',
    content: (
      <div className="space-y-6">
        <p className="text-lg leading-8 text-slate-600">
          A share buy-back reduces the number of shares in issue and often reduces total equity. Dividends are appropriations of profit and therefore reduce retained income rather than appearing as an operating expense.
        </p>
        <TAccount
          title="Retained Income"
          debit={[
            { description: 'Interim dividend', amount: 195000 },
            { description: 'Final dividend', amount: 255000 },
          ]}
          credit={[
            { description: 'Balance b/d', amount: 960000 },
            { description: 'Net profit after tax', amount: 780000 },
          ]}
        />
        <p className="text-base leading-7 text-slate-600">
          When a final dividend has been declared but not yet paid, it is also shown as a current liability. Learners should always separate the effect on retained income from the cash effect in the cash flow statement.
        </p>
      </div>
    ),
  },
  {
    title: 'Governance in a company',
    content: (
      <div className="space-y-6">
        <p className="text-lg leading-8 text-slate-600">
          Shareholders elect directors to manage the company on their behalf. Directors must act honestly, disclose conflicts of interest and make decisions that balance dividends, future growth and sound internal control.
        </p>
        <p className="text-base leading-7 text-slate-600">
          External auditors are appointed by shareholders, not by the directors they review. That independence helps protect minority shareholders and gives users confidence that published information is fair and reliable.
        </p>
      </div>
    ),
  },
];

const bank: AccountingItem[] = [
  {
    "id": "csc-1",
    "question": "Authorised share capital refers to:",
    "options": [
      "the number of shares already sold to the public",
      "the maximum number of shares the company may issue according to its MOI",
      "the total dividends paid for the year",
      "the amount of profit available for distribution"
    ],
    "answer": 1,
    "explanation": "Authorised shares are the maximum number the company is allowed to issue according to its founding documents."
  },
  {
    "id": "csc-2",
    "question": "A company issues 50 000 ordinary shares at R6 each for cash. By how much does ordinary share capital increase?",
    "options": [
      "R50 000",
      "R56 000",
      "R300 000",
      "R600 000"
    ],
    "answer": 2,
    "explanation": "Ordinary share capital increases by the issue price × number of shares = 50 000 × R6 = R300 000."
  },
  {
    "id": "csc-3",
    "question": "A share buy-back will usually:",
    "options": [
      "increase the number of shares in issue",
      "reduce the number of shares in issue",
      "increase sales revenue",
      "remove the need for an audit"
    ],
    "answer": 1,
    "explanation": "When the company buys back its own shares, fewer shares remain in issue."
  },
  {
    "id": "csc-4",
    "question": "Who elects the directors of a company?",
    "options": [
      "Creditors",
      "Employees",
      "Shareholders",
      "SARS"
    ],
    "answer": 2,
    "explanation": "Shareholders are the owners and elect directors at meetings such as the AGM."
  },
  {
    "id": "csc-5",
    "question": "A final dividend becomes a current liability when it is:",
    "options": [
      "budgeted",
      "recommended",
      "declared",
      "audited"
    ],
    "answer": 2,
    "explanation": "The company only has a present obligation to pay a dividend once it has been declared."
  },
  {
    "id": "csc-6",
    "question": "A rights issue is best described as:",
    "options": [
      "an offer of shares to existing shareholders first",
      "a loan from the bank to the company",
      "a compulsory tax paid to SARS",
      "the repurchase of old fixed assets"
    ],
    "answer": 0,
    "explanation": "In a rights issue, existing shareholders are offered the opportunity to buy additional shares first."
  },
  {
    "id": "csc-7",
    "question": "Directors' fees are usually shown in the statement of comprehensive income as a(n):",
    "options": [
      "asset",
      "equity item",
      "operating expense",
      "cash inflow"
    ],
    "answer": 2,
    "explanation": "Directors' fees are part of the company's operating expenses for the period."
  },
  {
    "id": "csc-8",
    "question": "Ordinary share capital is shown in the statement of financial position under:",
    "options": [
      "non-current assets",
      "equity",
      "current liabilities",
      "trade receivables"
    ],
    "answer": 1,
    "explanation": "Ordinary share capital forms part of shareholders' equity."
  }
];

const practiceBank = bank.map((item) => ({
  prompt: item.question,
  options: item.options,
  answer: item.options[item.answer],
  explanation: item.explanation,
}));

const CompanyShareCapital = () => (
  <CapsSubjectTopic
    title="Company Share Capital"
    subtitle="Ordinary shares, buy-backs, dividends and the roles of shareholders, directors and auditors"
    learnSteps={learnSteps}
    task="gr12-company-share-capital-t1"
    bank={practiceBank}
    apiPath="/api/caps/acc"
  />
);

export default CompanyShareCapital;
