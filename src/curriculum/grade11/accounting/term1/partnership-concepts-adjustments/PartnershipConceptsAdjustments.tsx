import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import FinancialStatement from '../../../../../components/subjects/FinancialStatement';
import TAccount from '../../../../../components/subjects/TAccount';
import type { AccountingItem, LearnStep } from '../../_shared/types';

const learnSteps: LearnStep[] = [
  {
    image: { src: "/curriculum/grade11/acc/term1/partnership-concepts-adjustments/diagram.webp", alt: "Partner B Current Account" },
    title: 'What is a partnership?',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          A <strong>partnership</strong> is a business owned by two or more people (partners) who share the profits, losses, and management of the business.
        </p>
        <div className="grid gap-3 md:grid-cols-3 text-left">
          <div className="rounded-xl bg-blue-50 p-4">
            <strong className="text-blue-700">Minimum partners</strong>
            <p className="text-slate-600">2 partners required to form a partnership.</p>
          </div>
          <div className="rounded-xl bg-green-50 p-4">
            <strong className="text-green-700">Maximum partners</strong>
            <p className="text-slate-600">Generally 20 partners maximum in SA (some professions allow more).</p>
          </div>
          <div className="rounded-xl bg-purple-50 p-4">
            <strong className="text-purple-700">Governing law</strong>
            <p className="text-slate-600">Partnerships are governed by the Partnership Act if no agreement exists.</p>
          </div>
        </div>
        <p className="text-sm text-slate-500">Unlike a company, a partnership is not a separate legal entity from its owners.</p>
      </div>
    ),
  },
  {
    title: 'The partnership agreement',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          A <strong>partnership agreement</strong> (deed of partnership) is a written contract that governs the relationship between partners.
        </p>
        <div className="bg-slate-50 p-5 rounded-xl text-left">
          <p className="font-bold text-slate-700 mb-2">Key clauses typically included:</p>
          <ul className="text-slate-600 list-disc list-inside space-y-1">
            <li>Names and capital contributions of each partner</li>
            <li>Profit and loss sharing ratio</li>
            <li>Interest on capital and drawings</li>
            <li>Salary allowances for active partners</li>
            <li>Procedures for admitting or removing a partner</li>
          </ul>
        </div>
        <p className="text-sm text-slate-500">If no agreement exists, the Partnership Act applies — profit is shared equally and no interest or salaries are allowed.</p>
      </div>
    ),
  },
  {
    title: 'Interest on capital and interest on drawings',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Partnerships use interest calculations to reward partners who invest more capital and to penalise those who withdraw funds early.
        </p>
        <div className="grid gap-3 md:grid-cols-2 text-left">
          <div className="rounded-xl bg-green-50 p-4">
            <strong className="text-green-700">Interest on capital</strong>
            <p className="text-slate-600">A reward for keeping capital in the business. <strong>Added</strong> to the partner's share — increases what the partner receives.</p>
            <p className="font-mono text-green-700 text-sm mt-1">Capital × Rate × Time</p>
          </div>
          <div className="rounded-xl bg-red-50 p-4">
            <strong className="text-red-700">Interest on drawings</strong>
            <p className="text-slate-600">A charge for withdrawing funds during the year. <strong>Deducted</strong> from the partner's share — reduces what the partner receives.</p>
            <p className="font-mono text-red-700 text-sm mt-1">Drawings × Rate × Time</p>
          </div>
        </div>
        <TAccount
          title="Partner B Current Account"
          debit={[
            { description: 'Drawings', amount: 20000 },
            { description: 'Interest on drawings', amount: 600 },
          ]}
          credit={[
            { description: 'Interest on capital', amount: 9000 },
            { description: 'Salary allowance', amount: 24000 },
            { description: 'Share of remaining profit', amount: 28000 },
          ]}
        />
      </div>
    ),
  },
  {
    title: 'Salary allowances and adjustments',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          A <strong>salary allowance</strong> is not a salary expense — it is part of the profit distribution to a partner who is actively involved in running the business.
        </p>
        <FinancialStatement
          title="Appropriation Account (example)"
          period="Year ended 29 February 2024"
          sections={[
            {
              heading: 'Profit available',
              lines: [
                { label: 'Net profit for the year', amount: 163000 },
                { label: 'Add: Interest on drawings', amount: 2000 },
                { label: 'Profit available for distribution', amount: 165000, isSubtotal: true },
              ],
            },
            {
              heading: 'Adjustments',
              lines: [
                { label: 'Interest on capital', amount: -21000 },
                { label: 'Salary allowances', amount: -60000 },
                { label: 'Remaining profit', amount: -84000, isSubtotal: true },
                { label: 'Partner A share (2/3)', amount: -56000, indent: 1 },
                { label: 'Partner B share (1/3)', amount: -28000, indent: 1 },
                { label: 'Total appropriated', amount: -165000, isTotal: true },
              ],
            },
          ]}
        />
        <div className="bg-slate-50 p-5 rounded-xl text-left space-y-2">
          <p className="font-bold text-slate-700">How adjustments work at year-end:</p>
          <ol className="text-slate-600 list-decimal list-inside space-y-1">
            <li>Calculate interest on capital (add to partners)</li>
            <li>Calculate interest on drawings (deduct from partners)</li>
            <li>Allocate salary allowances</li>
            <li>Share remaining profit/loss in the agreed ratio</li>
          </ol>
        </div>
        <p className="text-sm text-slate-500">All these adjustments flow through the <strong>appropriation account</strong> before updating each partner's current account.</p>
      </div>
    ),
  },
];

const bank: AccountingItem[] = [
  {
    prompt: 'A partnership is best defined as:',
    options: ['A business owned and run by a single person', 'A company that is listed on the stock exchange', 'Two or more owners who share profit, loss and management', 'A non-profit organisation that serves a community'],
    answer: 'Two or more owners who share profit, loss and management',
    explanation: 'A partnership combines the resources and skills of multiple owners who share in the outcomes of the business.',
  },
  {
    prompt: 'If partners have no written partnership agreement, which legislation governs their relationship?',
    options: ['The Companies Act', 'The Income Tax Act', 'The Partnership Act', 'The Consumer Protection Act'],
    answer: 'The Partnership Act',
    explanation: 'In the absence of a written agreement, the Partnership Act applies — profits are shared equally and no interest or salary allowances are permitted.',
  },
  {
    prompt: 'Interest on capital is best described as:',
    options: ['A penalty for paying capital in late', 'A reward to a partner for keeping capital invested', 'A charge on partners who withdraw funds', 'A tax that the partnership pays to SARS'],
    answer: 'A reward to a partner for keeping capital invested',
    explanation: 'Interest on capital compensates partners for the opportunity cost of leaving their funds in the partnership.',
  },
  {
    prompt: 'Partner B has drawings of R20 000 in the middle of the year. Interest on drawings is 6% p.a. for 6 months. How much interest is charged to Partner B?',
    options: ['R1 200', 'R600', 'R2 400', 'R1 000'],
    answer: 'R600',
    explanation: 'R20 000 × 6% × 6/12 = R20 000 × 0.06 × 0.5 = R600.',
  },
  {
    prompt: 'A salary allowance in a partnership is:',
    options: ['An expense that is shown in the income statement', 'Part of the profit shared with an active partner', 'Money that is paid to the employees of the firm', 'A loan that the partner has made to the business'],
    answer: 'Part of the profit shared with an active partner',
    explanation: 'Unlike employee salaries, partner salary allowances are distributions of profit, not expenses — they appear in the appropriation account.',
  },
  {
    prompt: 'In the appropriation account, interest on drawings is:',
    options: ['Deducted from net profit before the profit is shared', "Deducted from the partner's salary allowance", 'Added to net profit, as it is a charge on the partner', 'Ignored when the amount is below R500'],
    answer: 'Added to net profit, as it is a charge on the partner',
    explanation: 'Interest on drawings reduces what a partner receives but increases the pool available for distribution, so it is added back to profit in the appropriation account.',
  },
  {
    prompt: 'Which clause in the partnership agreement determines how final remaining profit is shared?',
    options: ['Salary allowance clause', 'Capital contribution clause', 'Profit and loss sharing ratio', 'Interest on drawings clause'],
    answer: 'Profit and loss sharing ratio',
    explanation: 'After all allowances and interest are allocated, the remaining profit or loss is split according to the agreed profit and loss sharing ratio.',
  },
  {
    prompt: 'When a partner withdraws goods for personal use, which account is debited?',
    options: ['Purchases account', 'Capital account', 'Drawings account', 'Creditors account'],
    answer: 'Drawings account',
    explanation: 'Goods taken by a partner for personal use are treated as drawings — the drawings account is debited and the relevant asset account credited.',
  },
  {
    prompt: 'One advantage of a partnership over a sole trader is:',
    options: ['Partners have unlimited liability for debts', 'The business has a separate legal identity', 'More capital and varied skills from several owners', 'Partnerships pay no income tax at all'],
    answer: 'More capital and varied skills from several owners',
    explanation: 'Partnerships can pool resources and skills, giving them greater capacity than a sole trader.',
  },
  {
    prompt: 'Interest on capital is calculated on:',
    options: [
      'The partner\'s drawings balance',
      'The partner\'s current account balance',
      'The partner\'s capital account balance',
      'The total net profit',
    ],
    answer: 'The partner\'s capital account balance',
    explanation: 'Interest on capital is based on the capital invested by each partner, which is recorded in their capital account.',
  },
];

const PartnershipConceptsAdjustments = () => (
  <CapsSubjectTopic
    title="Partnership Concepts and Adjustments"
    subtitle="Understanding how partnerships are formed and how profit is distributed"
    learnSteps={learnSteps}
    task="gr11-partnership-concepts-adjustments-t1"
    bank={bank}
    apiPath="/api/caps/acc"
  />
);
export default PartnershipConceptsAdjustments;
