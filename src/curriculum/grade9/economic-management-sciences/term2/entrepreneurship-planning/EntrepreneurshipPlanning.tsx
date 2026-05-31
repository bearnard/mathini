import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';

const learnSteps: LearnStep[] = [
  {
    title: 'Identify entrepreneurial traits and opportunities',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Successful entrepreneurs are innovative, resilient and customer-focused. They identify unmet needs and 
          opportunities, then develop products or services to meet them. Understanding these traits helps you 
          evaluate business ideas.
        </p>
      </div>
    ),
  },
  {
    title: 'Develop financial planning skills',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Budgeting and financial planning help businesses allocate resources wisely. Forecasting income and 
          expenses ensures sustainability and allows adjustment when markets change.
        </p>
      </div>
    ),
  },
  {
    title: 'Evaluate business viability',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Small businesses succeed when they match market demand, manage cash flow and maintain customer relationships. 
          Understanding these factors helps determine if a business idea is viable.
        </p>
      </div>
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'What is an entrepreneurial trait that leads to success?',
    options: ['Innovation, resilience and customer focus', 'Avoiding risk completely', 'Following only traditional methods', 'Ignoring customer feedback'],
    answer: 'Innovation, resilience and customer focus',
    explanation: 'Successful entrepreneurs adapt and listen to their market.',
  },
  {
    prompt: 'What is the first step in identifying a business opportunity?',
    options: ['Recognize an unmet need or problem', 'Immediately start production', 'Borrow money from a bank', 'Copy a competitor\'s idea'],
    answer: 'Recognize an unmet need or problem',
    explanation: 'Opportunities begin with identifying what customers need.',
  },
  {
    prompt: 'Why is budgeting important for a small business?',
    options: ['It helps allocate resources wisely and forecast cash flow', 'It is not important', 'Only large businesses need budgets', 'Budgeting prevents all losses'],
    answer: 'It helps allocate resources wisely and forecast cash flow',
    explanation: 'Budgets guide spending and help prevent cash shortages.',
  },
  {
    prompt: 'What should a business budget include?',
    options: ['Projected income and all expected expenses', 'Only salaries', 'Wishful thinking only', 'No details'],
    answer: 'Projected income and all expected expenses',
    explanation: 'Comprehensive budgets cover revenue and all cost categories.',
  },
  {
    prompt: 'How does financial planning support entrepreneurship?',
    options: ['It identifies capital needs, manages growth and enables sustainable decision-making', 'It guarantees profit', 'It eliminates all business risk', 'Planning is unnecessary for small businesses'],
    answer: 'It identifies capital needs, manages growth and enables sustainable decision-making',
    explanation: 'Planning transforms ideas into achievable, funded strategies.',
  },
  {
    prompt: 'What makes a business opportunity viable?',
    options: ['Market demand, realistic costs, available resources and personal capability', 'Any idea is viable', 'Only expensive ideas work', 'Viability cannot be assessed'],
    answer: 'Market demand, realistic costs, available resources and personal capability',
    explanation: 'Viability requires honest assessment of multiple factors.',
  },
  {
    prompt: 'How can a small business maintain customer relationships?',
    options: ['Regular communication, quality products and responsive service', 'Ignoring feedback', 'Raising prices often', 'Reducing product quality'],
    answer: 'Regular communication, quality products and responsive service',
    explanation: 'Customer loyalty is built through consistency and care.',
  },
  {
    prompt: 'What should an entrepreneur do if their initial plan fails?',
    options: ['Adapt, learn from mistakes and adjust the strategy', 'Give up immediately', 'Blame others', 'Repeat the same approach'],
    answer: 'Adapt, learn from mistakes and adjust the strategy',
    explanation: 'Resilience and adaptation are hallmarks of successful entrepreneurship.',
  },
];

const EntrepreneurshipPlanning = () => (
  <CapsSubjectTopic
    title="Entrepreneurship and Financial Planning"
    subtitle="Business traits, opportunities, budgeting, financial planning and viability assessment"
    learnSteps={learnSteps}
    task="gr9-entrepreneurship-planning-t2"
    bank={bank}
    apiPath="/api/caps/ems"
  />
);

export default EntrepreneurshipPlanning;
