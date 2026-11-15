import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem } from '../../../../../components/CapsSubjectTopic';
import { learnSteps } from './Slides';

const bank: CapsItem[] = [
  {
    prompt: 'What are businesses responsible for regarding employees?',
    options: ['Fair wages, safe working conditions and legal rights protection', 'Paying as little as possible, so that profits are higher', 'Providing a job only, with no duty about working conditions', 'Welfare matters only for staff who are members of a union'],
    answer: 'Fair wages, safe working conditions and legal rights protection',
    explanation: 'South African labour law mandates these protections.',
  },
  {
    prompt: 'What does corporate social responsibility mean?',
    options: ['Businesses operate ethically and contribute positively to society and environment', 'Businesses give away all of their profit to the poor each year', 'Only profit matters, so social effects need not be counted', 'Businesses follow the law and pay their taxes, and nothing more'],
    answer: 'Businesses operate ethically and contribute positively to society and environment',
    explanation: 'CSR balances profit with positive impact.',
  },
  {
    prompt: 'How should businesses treat customer complaints?',
    options: ['Address them promptly and use feedback to improve products and service', 'Ignore them, since a few complaints are normal', 'Blame the customer, since the product was used wrongly', 'Reply only if the customer complains in writing more than once'],
    answer: 'Address them promptly and use feedback to improve products and service',
    explanation: 'Responsive businesses build loyalty and improve continuously.',
  },
  {
    prompt: 'What is the South African Basic Conditions of Employment Act?',
    options: ['Legislation protecting worker rights including working hours, leave and fair treatment', 'A voluntary code that firms may choose to follow or ignore', 'A law that applies to government workers and not to private firms', "A tax law that sets the rate of tax on a worker's wages"],
    answer: 'Legislation protecting worker rights including working hours, leave and fair treatment',
    explanation: 'This law establishes minimum standards for all businesses.',
  },
  {
    prompt: 'How do economic systems relate to entrepreneurship?',
    options: ["The system's openness affects entrepreneurial opportunity and market access", 'There is no link, because every entrepreneur starts a business alone', 'Entrepreneurs work outside the system, so its type is unimportant', 'Only large firms are affected by the type of economic system'],
    answer: "The system's openness affects entrepreneurial opportunity and market access",
    explanation: 'Economic context shapes business possibilities.',
  },
  {
    prompt: 'Why is record-keeping important for business responsibility?',
    options: ['It provides transparency, ensures compliance with law and demonstrates ethical practice', 'Records are not needed if the owner remembers the sales well', 'Hiding records from the tax office is acceptable for small firms', 'Only large businesses need records, so small firms may skip them'],
    answer: 'It provides transparency, ensures compliance with law and demonstrates ethical practice',
    explanation: 'Honest records build trust with stakeholders.',
  },
  {
    prompt: 'How does financial literacy connect to responsible business?',
    options: ['Sound money management lets a business pay its debts and invest wisely', 'Financial skills only matter to the accountant of the business', 'Numbers do not affect how responsibly a business acts', 'Making a profit excuses any way of running the business'],
    answer: 'Sound money management lets a business pay its debts and invest wisely',
    explanation: 'Sustainable finances support all other responsibilities.',
  },
  {
    prompt: 'What do integrated business decisions consider?',
    options: ['Economic viability, customers, staff welfare, the law and the community', 'Profit only, since all other matters can be dealt with later', 'A single function in isolation from all the others', 'Only the interests of the owners and the biggest shareholders'],
    answer: 'Economic viability, customers, staff welfare, the law and the community',
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
