import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';

const learnSteps: LearnStep[] = [
  {
    title: 'Banking services and financial institutions',
    image: {
      src: '/curriculum/grade8/economic-management-sciences/term4/banking-saving/image1.jpg',
      alt: 'Grade 8 learners exploring banking services, savings accounts, and financial institutions',
    },
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Banks provide essential services like savings accounts, loans, and payment processing for individuals and businesses.
          Understanding banking helps learners protect money, access credit responsibly, and plan for financial security.
        </p>
      </div>
    ),
  },
  {
    title: 'Savings, interest, and entrepreneurship qualities',
    image: {
      src: '/curriculum/grade8/economic-management-sciences/term4/banking-saving/image2.jpg',
      alt: 'Grade 8 learners learning about savings, interest earned, and entrepreneurial characteristics',
    },
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Saving money in banks earns interest, helping money grow over time. Successful entrepreneurs share qualities like resilience, creativity, and willingness to learn.
          These habits and traits are essential for financial independence and business success.
        </p>
      </div>
    ),
  },
  {
    title: 'Integrated case studies and EMS consolidation',
    image: {
      src: '/curriculum/grade8/economic-management-sciences/term4/banking-saving/image3.jpg',
      alt: 'Grade 8 learners solving integrated case studies combining government, accounting, business, and banking concepts',
    },
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Case studies connect all EMS topics: government decisions, accounting practices, business structures, and banking.
          Solving realistic scenarios consolidates understanding and prepares learners for financial decision-making in real life.
        </p>
      </div>
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'What is the primary function of a bank?',
    options: ['To collect taxes', 'To provide safe storage for money and facilitate transactions and lending', 'To manage government budgets', 'To sell goods'],
    answer: 'To provide safe storage for money and facilitate transactions and lending',
    explanation: 'Banks safeguard deposits, process payments, and lend money, enabling individuals and businesses to manage finances securely.',
  },
  {
    prompt: 'What is interest earned on savings?',
    options: ['A fee charged by the bank', 'Money paid by the bank to customers for the use of their deposits', 'A tax on accounts', 'A penalty for saving'],
    answer: 'Money paid by the bank to customers for the use of their deposits',
    explanation: 'Interest is income earned on savings; banks pay customers interest because they use deposited funds for loans and investments.',
  },
  {
    prompt: 'Which of the following is a characteristic of a successful entrepreneur?',
    options: ['Never takes risks', 'Avoids learning from mistakes', 'Resilience and ability to adapt to change', 'Works alone without teamwork'],
    answer: 'Resilience and ability to adapt to change',
    explanation: 'Successful entrepreneurs persist through challenges, learn from failures, and adapt strategies—essential for business survival.',
  },
  {
    prompt: 'What is a savings account used for?',
    options: ['Daily business transactions only', 'Storing money safely and earning interest over time', 'Business accounting only', 'Tax payments'],
    answer: 'Storing money safely and earning interest over time',
    explanation: 'Savings accounts allow people to deposit money safely and earn interest, helping build financial security.',
  },
  {
    prompt: 'How does compound interest benefit long-term savers?',
    options: ['It reduces the total saved', 'Interest on interest accelerates money growth', 'It increases the cost of saving', 'It has no effect'],
    answer: 'Interest on interest accelerates money growth',
    explanation: 'Compound interest means you earn interest on both your original deposit and previously earned interest, speeding wealth accumulation.',
  },
  {
    prompt: 'Which of the following is a government responsibility related to banking?',
    options: ['Paying all salaries', 'Regulating financial institutions to protect consumers', 'Owning all banks', 'Setting individual account balances'],
    answer: 'Regulating financial institutions to protect consumers',
    explanation: 'Government regulators ensure banks operate safely, protect deposits, and follow laws—critical for financial system stability.',
  },
  {
    prompt: 'A business owner wants to expand but lacks capital. What might they do?',
    options: ['Abandon the expansion', 'Apply for a bank loan or find business partners', 'Reduce prices to save money', 'Ignore the limitation'],
    answer: 'Apply for a bank loan or find business partners',
    explanation: 'Businesses can access capital through loans from banks or by bringing in partners to share the investment and risk.',
  },
  {
    prompt: 'What connects government budgets, accounting, business ownership, and banking in EMS?',
    options: ['They are unrelated topics', 'They all involve financial decision-making and managing resources', 'Only accounting matters', 'Only government spending matters'],
    answer: 'They all involve financial decision-making and managing resources',
    explanation: 'All EMS topics interconnect around managing money—government taxes and spending, businesses tracking finances, and banks enabling transactions.',
  },
];

const BankingSaving = () => (
  <CapsSubjectTopic
    title="Banking, Saving and EMS Consolidation"
    subtitle="Exploring banking services, savings strategies, and integrated economic scenarios"
    learnSteps={learnSteps}
    task="gr8-banking-saving-t4"
    bank={bank}
    apiPath="/api/caps/ems"
  />
);

export default BankingSaving;
