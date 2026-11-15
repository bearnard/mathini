import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem } from '../../../../../components/CapsSubjectTopic';
import { learnSteps } from './Slides';

const bank: CapsItem[] = [
  {
    prompt: 'What does production quality control do?',
    options: ['Ensures products meet standards and satisfy customer expectations', 'Slows down production so that fewer products are made', 'Raises costs without any effect on the standard of products', 'Is not needed once the first products have been sold'],
    answer: 'Ensures products meet standards and satisfy customer expectations',
    explanation: 'Quality control builds customer trust and reduces returns.',
  },
  {
    prompt: 'How does standardization improve production?',
    options: ['Creates consistency, reduces errors and improves efficiency', 'Makes all the products identical, so choice is lost', 'Cuts flexibility, so the business cannot change its range', 'Adds to production time because each step is checked twice'],
    answer: 'Creates consistency, reduces errors and improves efficiency',
    explanation: 'Standards provide benchmarks for quality and speed.',
  },
  {
    prompt: 'What is a key marketing objective?',
    options: ['Identify customer needs and create satisfaction through value exchange', 'Persuade buyers to purchase, even if they do not need it', 'Ignore customer feedback so that the plan is not changed', 'Sell as much as possible at any price, whatever the cost'],
    answer: 'Identify customer needs and create satisfaction through value exchange',
    explanation: 'Sustainable marketing benefits both business and customer.',
  },
  {
    prompt: 'What does the "4Ps" of marketing include?',
    options: ['Product, Price, Place and Promotion', 'Promotion only, which covers all advertising and displays', 'Profit, People, Planet and Production', 'Packaging, Placement, Pricing and Politeness'],
    answer: 'Product, Price, Place and Promotion',
    explanation: 'The 4Ps framework guides comprehensive marketing strategy.',
  },
  {
    prompt: 'How should a business price its products?',
    options: ['Based on costs, competition and customer perceived value', 'As high as possible, so the business earns more on each item', 'The same as the competitors, whatever the costs are', 'With no analysis, by using the first price that comes to mind'],
    answer: 'Based on costs, competition and customer perceived value',
    explanation: 'Strategic pricing balances profitability with competitiveness.',
  },
  {
    prompt: 'Why is market research important?',
    options: ['It reveals customer needs, preferences, and competitive landscape', 'It is a waste of money when the owner knows the market', 'It shows that all customers want exactly the same thing', 'It lets a business ignore its competitors and their prices'],
    answer: 'It reveals customer needs, preferences, and competitive landscape',
    explanation: 'Data-driven decisions reduce risk and improve strategy.',
  },
  {
    prompt: 'How does distribution (place) affect marketing success?',
    options: ['The right distribution channels reach target customers efficiently', 'Distribution does not matter if the product is good', 'Selling online only is always the best choice for every product', 'Physical stores are outdated and should not be used any more'],
    answer: 'The right distribution channels reach target customers efficiently',
    explanation: 'Customer convenience and accessibility drive sales.',
  },
  {
    prompt: 'What is the relationship between production capacity and marketing promises?',
    options: ['Production capacity limits what marketing can promise; overpromising damages reputation', 'Marketing can promise any amount, since production can be raised overnight', 'Production has no effect on what marketing may promise', 'Capacity limits only the price and never the amount that can be sold'],
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
