import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';

const learnSteps: LearnStep[] = [
  {
    title: 'Structure a business plan',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          A business plan includes executive summary, market analysis, operational details, marketing strategy, 
          financial projections and risk assessment. This structure communicates the business idea clearly to 
          investors and guides management decisions.
        </p>
      </div>
    ),
  },
  {
    title: 'Understand business functions',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Production creates goods; marketing promotes them; purchasing manages inputs; and finance ensures 
          profitability. Management coordinates these functions to achieve business goals.
        </p>
      </div>
    ),
  },
  {
    title: 'Analyze internal and external environments',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Internal factors include staff, resources and culture. External factors include competition, customer 
          needs, government policies and economic conditions. Successful businesses adapt to both.
        </p>
      </div>
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'What is the purpose of a business plan?',
    options: ['Guide strategic decisions and communicate the business idea to investors', 'Just paperwork required', 'Guarantee success automatically', 'Only for large corporations'],
    answer: 'Guide strategic decisions and communicate the business idea to investors',
    explanation: 'Business plans serve as strategic roadmaps and fundraising tools.',
  },
  {
    prompt: 'Which section of a business plan describes the product and market?',
    options: ['Market analysis and product description', 'Financial projections only', 'Management team only', 'Appendix'],
    answer: 'Market analysis and product description',
    explanation: 'Understanding the market is fundamental to business viability.',
  },
  {
    prompt: 'What does the production function do?',
    options: ['Creates goods or services efficiently', 'Only involves buying materials', 'Handles customer complaints only', 'Manages all money'],
    answer: 'Creates goods or services efficiently',
    explanation: 'Production transforms inputs into sellable products.',
  },
  {
    prompt: 'Why is marketing important to a business?',
    options: ['It communicates product value, builds customer relationships and drives sales', 'Marketing is unnecessary', 'Marketing increases costs only', 'Marketing is only for big brands'],
    answer: 'It communicates product value, builds customer relationships and drives sales',
    explanation: 'Marketing connects products with customers who need them.',
  },
  {
    prompt: 'What does the purchasing function manage?',
    options: ['Acquiring materials and supplies needed for production', 'Only ordering office supplies', 'Selling products to customers', 'Managing employee payroll'],
    answer: 'Acquiring materials and supplies needed for production',
    explanation: 'Effective purchasing ensures quality inputs at good prices.',
  },
  {
    prompt: 'What is an example of an internal environment factor?',
    options: ['Company culture, employee skills, equipment and technology', 'Market competition', 'Economic growth', 'Government regulations'],
    answer: 'Company culture, employee skills, equipment and technology',
    explanation: 'Internal factors are things the business can directly control.',
  },
  {
    prompt: 'How do external factors affect a business plan?',
    options: ['Competition, customer needs, regulations and economy create both opportunities and threats', 'External factors have no impact', 'Only competition matters', 'External factors are irrelevant to planning'],
    answer: 'Competition, customer needs, regulations and economy create both opportunities and threats',
    explanation: 'Strategic plans account for external realities.',
  },
  {
    prompt: 'What role does management play in business functions?',
    options: ['Coordinates all functions, allocates resources and ensures goal alignment', 'Just handles administration', 'Has no real responsibility', 'Only involved in finance'],
    answer: 'Coordinates all functions, allocates resources and ensures goal alignment',
    explanation: 'Effective management integrates all business operations.',
  },
];

const BusinessPlansFunctions = () => (
  <CapsSubjectTopic
    title="Business Plans and Functions"
    subtitle="Business plan structure, production, marketing, purchasing and management roles"
    learnSteps={learnSteps}
    task="gr9-business-plans-functions-t3"
    bank={bank}
    apiPath="/api/caps/ems"
  />
);

export default BusinessPlansFunctions;
