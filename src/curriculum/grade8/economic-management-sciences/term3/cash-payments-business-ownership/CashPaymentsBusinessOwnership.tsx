import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem } from '../../../../../components/CapsSubjectTopic';
import { learnSteps } from './Slides';

const bank: CapsItem[] = [
  {
    prompt: 'What does the cash payments journal record?',
    options: ['All of the money that was received', 'All money paid out for business expenses', 'All of the sales transactions of the month', 'Only the wages that were paid to staff'],
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
    options: ['Senior management, who set the strategy', 'Middle management, who run the departments', 'Operational/supervisory management', 'The shareholders, who own the business only'],
    answer: 'Operational/supervisory management',
    explanation: 'Operational managers oversee day-to-day activities, supervise staff, and ensure tasks are completed efficiently.',
  },
  {
    prompt: 'Why is budgeting important for a small business?',
    options: ['To avoid paying the taxes that are due', 'To plan income and spending and control costs', 'To reduce the sales of the business', 'Budgeting is not important for a small firm'],
    answer: 'To plan income and spending and control costs',
    explanation: 'Budgets help businesses plan finances, avoid overspending, and identify whether they will be profitable.',
  },
  {
    prompt: 'What determines the price a business can charge for its products?',
    options: ['What the owner wants to earn from each sale', 'The costs of production, competition and market demand', 'Government regulations and nothing else', 'Whatever price the owner happens to like'],
    answer: 'The costs of production, competition and market demand',
    explanation: 'Prices are set by balancing production costs, what competitors charge, and what customers are willing to pay.',
  },
  {
    prompt: 'If a sole trader business fails, what happens to personal assets?',
    options: ['Personal assets are fully protected by law', 'Personal assets may be used to pay business debts', 'Nothing happens to the personal assets', 'The bank covers the debts of the business'],
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
