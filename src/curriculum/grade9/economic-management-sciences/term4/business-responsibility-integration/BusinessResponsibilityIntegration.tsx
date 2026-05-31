import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';

const learnSteps: LearnStep[] = [
  {
    title: 'Understand business and labour responsibility',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Businesses have responsibilities to employees (fair wages, safe conditions), customers (quality, honesty), 
          and society (ethical practices, environmental care). South African labour law protects workers.
        </p>
      </div>
    ),
  },
  {
    title: 'Apply integrated business thinking',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Economic systems, entrepreneurship, financial literacy, and business functions work together. Success 
          requires balancing profitability with stakeholder needs and social responsibility.
        </p>
      </div>
    ),
  },
  {
    title: 'Prepare for year-end assessment',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Review case studies, apply concepts to real scenarios, justify business decisions and demonstrate deep 
          understanding of EMS principles. Integration across all topics is key.
        </p>
      </div>
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'What are businesses responsible for regarding employees?',
    options: ['Fair wages, safe working conditions and legal rights protection', 'Paying as little as possible', 'No responsibility for conditions', 'Ignoring employee welfare'],
    answer: 'Fair wages, safe working conditions and legal rights protection',
    explanation: 'South African labour law mandates these protections.',
  },
  {
    prompt: 'What does corporate social responsibility mean?',
    options: ['Businesses operate ethically and contribute positively to society and environment', 'Businesses ignore social impact', 'Only profit matters', 'CSR is voluntary and meaningless'],
    answer: 'Businesses operate ethically and contribute positively to society and environment',
    explanation: 'CSR balances profit with positive impact.',
  },
  {
    prompt: 'How should businesses treat customer complaints?',
    options: ['Address them promptly and use feedback to improve products and service', 'Ignore complaints', 'Blame customers always', 'Fix nothing'],
    answer: 'Address them promptly and use feedback to improve products and service',
    explanation: 'Responsive businesses build loyalty and improve continuously.',
  },
  {
    prompt: 'What is the South African Basic Conditions of Employment Act?',
    options: ['Legislation protecting worker rights including working hours, leave and fair treatment', 'A voluntary code only', 'Does not exist', 'Only applies to government'],
    answer: 'Legislation protecting worker rights including working hours, leave and fair treatment',
    explanation: 'This law establishes minimum standards for all businesses.',
  },
  {
    prompt: 'How do economic systems relate to entrepreneurship?',
    options: ['The system\'s openness affects entrepreneurial opportunity and market access', 'No connection', 'Entrepreneurs operate independently of systems', 'System type does not matter'],
    answer: 'The system\'s openness affects entrepreneurial opportunity and market access',
    explanation: 'Economic context shapes business possibilities.',
  },
  {
    prompt: 'Why is record-keeping important for business responsibility?',
    options: ['It provides transparency, ensures compliance with law and demonstrates ethical practice', 'Records are not important', 'Hiding records is acceptable', 'Only large businesses need records'],
    answer: 'It provides transparency, ensures compliance with law and demonstrates ethical practice',
    explanation: 'Honest records build trust with stakeholders.',
  },
  {
    prompt: 'How does financial literacy connect to responsible business?',
    options: ['Sound financial management enables businesses to pay obligations and invest responsibly', 'Financial literacy is irrelevant', 'Numbers do not affect responsibility', 'Profit justifies anything'],
    answer: 'Sound financial management enables businesses to pay obligations and invest responsibly',
    explanation: 'Sustainable finances support all other responsibilities.',
  },
  {
    prompt: 'What do integrated business decisions consider?',
    options: ['Economic viability, customer needs, employee welfare, legal compliance and community impact', 'Profit only', 'Single function in isolation', 'Stakeholder interests are irrelevant'],
    answer: 'Economic viability, customer needs, employee welfare, legal compliance and community impact',
    explanation: 'Integration ensures holistic, sustainable business success.',
  },
];

const BusinessResponsibilityIntegration = () => (
  <CapsSubjectTopic
    title="Business Responsibility and Integration"
    subtitle="Labour responsibility, corporate social responsibility, and integrated business thinking"
    learnSteps={learnSteps}
    task="gr9-business-responsibility-integration-t4"
    bank={bank}
    apiPath="/api/caps/ems"
  />
);

export default BusinessResponsibilityIntegration;
