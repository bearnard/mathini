import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem } from '../../../../../components/CapsSubjectTopic';
import { learnSteps } from './Slides';

const bank: CapsItem[] = [
  {
    prompt: 'What is the primary function of a bank?',
    options: ['To collect taxes on behalf of the government', 'To keep money safe and enable payments and lending', 'To manage the budgets of the government', 'To sell goods to the public'],
    answer: 'To keep money safe and enable payments and lending',
    explanation: 'Banks safeguard deposits, process payments, and lend money, enabling individuals and businesses to manage finances securely.',
  },
  {
    prompt: 'What is interest earned on savings?',
    options: ['A fee that is charged by the bank', 'Money the bank pays you for using your deposit', 'A tax that is placed on the accounts', 'A penalty that is charged for saving'],
    answer: 'Money the bank pays you for using your deposit',
    explanation: 'Interest is income earned on savings; banks pay customers interest because they use deposited funds for loans and investments.',
  },
  {
    prompt: 'Which of the following is a characteristic of a successful entrepreneur?',
    options: ['Never taking any risks at all', 'Avoiding any learning from mistakes', 'Resilience and the ability to adapt to change', 'Working alone without any teamwork'],
    answer: 'Resilience and the ability to adapt to change',
    explanation: 'Successful entrepreneurs persist through challenges, learn from failures, and adapt strategies—essential for business survival.',
  },
  {
    prompt: 'What is a savings account used for?',
    options: ['Daily business transactions and nothing else', 'Keeping money safe and earning interest over time', 'Business accounting records and nothing else', 'The payment of tax to SARS'],
    answer: 'Keeping money safe and earning interest over time',
    explanation: 'Savings accounts allow people to deposit money safely and earn interest, helping build financial security.',
  },
  {
    prompt: 'How does compound interest benefit long-term savers?',
    options: ['It reduces the total amount that is saved', 'Interest earns interest, so savings grow faster', 'It increases the cost of saving', 'It has no effect on how savings grow'],
    answer: 'Interest earns interest, so savings grow faster',
    explanation: 'Compound interest means you earn interest on both your original deposit and previously earned interest, speeding wealth accumulation.',
  },
  {
    prompt: 'Which of the following is a government responsibility related to banking?',
    options: ['Paying all of the salaries in the country', 'Regulating financial institutions to protect consumers', 'Owning all of the banks in the country', 'Setting the balance of every account'],
    answer: 'Regulating financial institutions to protect consumers',
    explanation: 'Government regulators ensure banks operate safely, protect deposits, and follow laws—critical for financial system stability.',
  },
  {
    prompt: 'A business owner wants to expand but lacks capital. What might they do?',
    options: ['Give up on the idea of expanding', 'Apply for a bank loan or find partners', 'Cut prices in order to save money', 'Ignore the lack of capital in the firm'],
    answer: 'Apply for a bank loan or find partners',
    explanation: 'Businesses can access capital through loans from banks or by bringing in partners to share the investment and risk.',
  },
  {
    prompt: 'What connects government budgets, accounting, business ownership, and banking in EMS?',
    options: ['The topics are unrelated to each other', 'They all involve financial decisions and managing resources', 'Only accounting matters in the subject', 'Only government spending matters in the subject'],
    answer: 'They all involve financial decisions and managing resources',
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
