import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';

const learnSteps: LearnStep[] = [
  {
    title: 'Optimize production processes',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Production efficiency reduces costs and improves quality. Methods like standardization, automation and 
          quality control ensure products meet customer expectations while maximizing resource use.
        </p>
      </div>
    ),
  },
  {
    title: 'Develop marketing strategies',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Effective marketing identifies customer needs, positions products attractively, prices competitively and 
          promotes through appropriate channels. Marketing links production to customer satisfaction.
        </p>
      </div>
    ),
  },
  {
    title: 'Connect production and marketing',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Production must respond to market demands. Marketing must understand production capabilities. Integration 
          of these functions ensures customer-focused products at profitable prices.
        </p>
      </div>
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'What does production quality control do?',
    options: ['Ensures products meet standards and satisfy customer expectations', 'Slows production only', 'Increases costs always', 'Is not necessary'],
    answer: 'Ensures products meet standards and satisfy customer expectations',
    explanation: 'Quality control builds customer trust and reduces returns.',
  },
  {
    prompt: 'How does standardization improve production?',
    options: ['Creates consistency, reduces errors and improves efficiency', 'Makes all products identical', 'Reduces flexibility', 'Increases production time'],
    answer: 'Creates consistency, reduces errors and improves efficiency',
    explanation: 'Standards provide benchmarks for quality and speed.',
  },
  {
    prompt: 'What is a key marketing objective?',
    options: ['Identify customer needs and create satisfaction through value exchange', 'Deceive customers for profit', 'Ignore customer feedback', 'Sell at any cost'],
    answer: 'Identify customer needs and create satisfaction through value exchange',
    explanation: 'Sustainable marketing benefits both business and customer.',
  },
  {
    prompt: 'What does the "4Ps" of marketing include?',
    options: ['Product, Price, Place and Promotion', 'Only advertising', 'Only sales', 'Only distribution'],
    answer: 'Product, Price, Place and Promotion',
    explanation: 'The 4Ps framework guides comprehensive marketing strategy.',
  },
  {
    prompt: 'How should a business price its products?',
    options: ['Based on costs, competition and customer perceived value', 'As high as possible always', 'The same as competitors always', 'With no analysis'],
    answer: 'Based on costs, competition and customer perceived value',
    explanation: 'Strategic pricing balances profitability with competitiveness.',
  },
  {
    prompt: 'Why is market research important?',
    options: ['It reveals customer needs, preferences, and competitive landscape', 'It is a waste of money', 'All customers want the same thing', 'Businesses can ignore market data'],
    answer: 'It reveals customer needs, preferences, and competitive landscape',
    explanation: 'Data-driven decisions reduce risk and improve strategy.',
  },
  {
    prompt: 'How does distribution (place) affect marketing success?',
    options: ['The right distribution channels reach target customers efficiently', 'Distribution does not matter', 'Online only is always best', 'Physical stores are outdated'],
    answer: 'The right distribution channels reach target customers efficiently',
    explanation: 'Customer convenience and accessibility drive sales.',
  },
  {
    prompt: 'What is the relationship between production capacity and marketing promises?',
    options: ['Production capacity limits what marketing can promise; overpromising damages reputation', 'Marketing can promise anything', 'Production does not affect marketing', 'Capacity has no role'],
    answer: 'Production capacity limits what marketing can promise; overpromising damages reputation',
    explanation: 'These functions must be aligned to deliver customer satisfaction.',
  },
];

const ProductionMarketing = () => (
  <CapsSubjectTopic
    title="Production and Marketing"
    subtitle="Production efficiency, quality control, marketing strategy and market research"
    learnSteps={learnSteps}
    task="gr9-production-marketing-t3"
    bank={bank}
    apiPath="/api/caps/ems"
  />
);

export default ProductionMarketing;
