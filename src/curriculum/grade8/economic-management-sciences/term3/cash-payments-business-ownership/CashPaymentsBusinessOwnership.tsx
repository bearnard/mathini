import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';

const learnSteps: LearnStep[] = [
  {
    title: 'Cash payments journal and ledger management',
    image: {
      src: '/curriculum/grade8/economic-management-sciences/term3/cash-payments-business-ownership/image1.jpg',
      alt: 'Grade 8 learners recording cash payments in journals and posting to ledger accounts',
    },
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          The cash payments journal records all money paid out by the business for expenses and purchases.
          Accurate recording ensures businesses track cash flow and maintain control over spending and liabilities.
        </p>
      </div>
    ),
  },
  {
    title: 'Business ownership structures: sole trader and partnerships',
    image: {
      src: '/curriculum/grade8/economic-management-sciences/term3/cash-payments-business-ownership/image2.jpg',
      alt: 'Grade 8 learners comparing sole trader and partnership business structures',
    },
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          A sole trader owns and operates a business alone, keeping all profits and bearing all risk.
          A partnership shares ownership, profits, and responsibilities among two or more partners, allowing shared workload and capital.
        </p>
      </div>
    ),
  },
  {
    title: 'Business management, budgeting, and market understanding',
    image: {
      src: '/curriculum/grade8/economic-management-sciences/term3/cash-payments-business-ownership/image3.jpg',
      alt: 'Grade 8 learners planning budgets, understanding management levels, and analyzing market demand',
    },
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Managers at different levels make decisions about budgets, staff, and production.
          Understanding market demand, costs, and budgeting helps businesses plan for profit and sustainability.
        </p>
      </div>
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'What does the cash payments journal record?',
    options: ['All money received', 'All money paid out for business expenses', 'All sales transactions', 'Only wages paid'],
    answer: 'All money paid out for business expenses',
    explanation: 'The cash payments journal tracks all cash and cheque payments, including bills, expenses, and purchases.',
  },
  {
    prompt: 'What is the main advantage of a sole trader business?',
    options: ['Shared responsibility', 'Unlimited capital access', 'Easy to find staff', 'Complete control and all profits'],
    answer: 'Complete control and all profits',
    explanation: 'A sole trader owns the business entirely and keeps all profits, though they bear all risks and responsibilities.',
  },
  {
    prompt: 'What is a key disadvantage of a partnership compared to a sole trader?',
    options: ['Easier to raise capital', 'Less decision-making', 'Shared ownership and profits', 'Better job security'],
    answer: 'Shared ownership and profits',
    explanation: 'In a partnership, ownership and profits must be shared among partners according to their agreement.',
  },
  {
    prompt: 'Which management level makes decisions about daily operations and staff supervision?',
    options: ['Senior management', 'Middle management', 'Operational/supervisory management', 'Shareholders only'],
    answer: 'Operational/supervisory management',
    explanation: 'Operational managers oversee day-to-day activities, supervise staff, and ensure tasks are completed efficiently.',
  },
  {
    prompt: 'Why is budgeting important for a small business?',
    options: ['To avoid paying taxes', 'To plan income and expenses, control spending, and prepare for profitability', 'To reduce sales', 'It is not important'],
    answer: 'To plan income and expenses, control spending, and prepare for profitability',
    explanation: 'Budgets help businesses plan finances, avoid overspending, and identify whether they will be profitable.',
  },
  {
    prompt: 'What determines the price a business can charge for its products?',
    options: ['What the owner wants to earn', 'Costs of production, competition, and market demand', 'Government regulations only', 'Random choice'],
    answer: 'Costs of production, competition, and market demand',
    explanation: 'Prices are set by balancing production costs, what competitors charge, and what customers are willing to pay.',
  },
  {
    prompt: 'If a sole trader business fails, what happens to personal assets?',
    options: ['Personal assets are protected', 'Personal assets may be used to pay business debts', 'Nothing happens', 'The bank covers it'],
    answer: 'Personal assets may be used to pay business debts',
    explanation: 'A sole trader has unlimited liability—personal assets can be used to pay business debts and obligations.',
  },
  {
    prompt: 'In a market, what represents the willingness of people to buy at different prices?',
    options: ['Supply', 'Demand', 'Competition', 'Income'],
    answer: 'Demand',
    explanation: 'Demand represents how much consumers want and can buy at various price levels; lower prices typically increase demand.',
  },
];

const CashPaymentsBusinessOwnership = () => (
  <CapsSubjectTopic
    title="Cash Payments, Business Ownership and Management"
    subtitle="Recording cash payments, comparing business structures, and managing operations"
    learnSteps={learnSteps}
    task="gr8-cash-payments-business-ownership-t3"
    bank={bank}
    apiPath="/api/caps/ems"
  />
);

export default CashPaymentsBusinessOwnership;
