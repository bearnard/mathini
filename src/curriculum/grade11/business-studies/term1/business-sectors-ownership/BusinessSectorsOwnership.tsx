import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { BusinessStudiesItem, LearnStep } from '../../_shared/types';

const learnSteps: LearnStep[] = [
  {
    title: 'The three business sectors',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          South African businesses are classified into <strong>three sectors</strong> based on what they produce.
        </p>
        <div className="grid gap-3 md:grid-cols-3 text-left">
          <div className="rounded-xl bg-green-50 p-4">
            <strong className="text-green-700">Primary sector</strong>
            <p className="text-slate-600">Extracts natural resources. Examples: mining, farming, fishing, forestry.</p>
          </div>
          <div className="rounded-xl bg-blue-50 p-4">
            <strong className="text-blue-700">Secondary sector</strong>
            <p className="text-slate-600">Processes raw materials into goods. Examples: manufacturing, construction, food processing.</p>
          </div>
          <div className="rounded-xl bg-purple-50 p-4">
            <strong className="text-purple-700">Tertiary sector</strong>
            <p className="text-slate-600">Provides services. Examples: retail, banking, transport, tourism, education.</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Forms of ownership — key comparisons',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Grade 11 focuses on <strong>comparing companies with other ownership forms</strong> and understanding when each is appropriate.
        </p>
        <div className="grid gap-3 md:grid-cols-2 text-left">
          <div className="rounded-xl bg-yellow-50 p-4">
            <strong className="text-yellow-700">Private Company (Pty) Ltd</strong>
            <p className="text-slate-600">1–50 shareholders, limited liability, separate legal entity, cannot list on JSE.</p>
          </div>
          <div className="rounded-xl bg-orange-50 p-4">
            <strong className="text-orange-700">Public Company (Ltd)</strong>
            <p className="text-slate-600">Unlimited shareholders, can list on JSE, subject to stricter regulation.</p>
          </div>
          <div className="rounded-xl bg-teal-50 p-4">
            <strong className="text-teal-700">Co-operative</strong>
            <p className="text-slate-600">Member-owned, profits shared equally, democratic decision-making, registered under Co-operatives Act.</p>
          </div>
          <div className="rounded-xl bg-slate-100 p-4">
            <strong className="text-slate-700">Sole proprietor / Partnership</strong>
            <p className="text-slate-600">Simple to form, but unlimited liability — personal assets at risk.</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Benefits of companies over other ownership forms',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          A <strong>company (Pty Ltd or Ltd)</strong> offers important advantages for entrepreneurs growing a business.
        </p>
        <div className="bg-slate-50 p-6 rounded-xl text-left">
          <ul className="space-y-2 text-slate-700 list-disc list-inside">
            <li><strong>Limited liability:</strong> shareholders risk only what they invested</li>
            <li><strong>Separate legal entity:</strong> the company can own property, sue and be sued</li>
            <li><strong>Continuity:</strong> the business continues even if owners change</li>
            <li><strong>Easier to raise capital:</strong> issue shares to attract investors</li>
            <li><strong>Credibility:</strong> "Pty Ltd" or "Ltd" builds trust with suppliers and banks</li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    title: 'Choosing the right form of ownership',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          The <strong>best form of ownership</strong> depends on the size of the venture, risk appetite, capital needs, and goals.
        </p>
        <div className="bg-amber-50 p-5 rounded-xl text-left">
          <p className="font-bold text-amber-800 mb-2">Exam tip — use this framework:</p>
          <ol className="list-decimal list-inside space-y-1 text-slate-700">
            <li>How much capital is needed? (Large → company or co-op)</li>
            <li>How much risk can the owner bear? (High risk → limited liability forms)</li>
            <li>How many people are involved? (Many → co-op or company)</li>
            <li>Does the business need credibility or listing potential? (Yes → Pty Ltd or Ltd)</li>
          </ol>
        </div>
      </div>
    ),
  },
];

const bank: BusinessStudiesItem[] = [
  {
    prompt: 'A textile manufacturer buys cotton and turns it into fabric for sale. Which business sector does this belong to?',
    options: ['Primary sector', 'Secondary sector', 'Tertiary sector', 'Quaternary sector'],
    answer: 'Secondary sector',
    explanation: 'The secondary sector processes or transforms raw materials (cotton) into manufactured goods (fabric), which is manufacturing.',
  },
  {
    prompt: 'Which form of ownership gives shareholders LIMITED liability?',
    options: ['Sole proprietor', 'Ordinary partnership', 'Private company (Pty Ltd)', 'Unlimited company'],
    answer: 'Private company (Pty Ltd)',
    explanation: 'In a private company, shareholders\' liability is limited to the amount they invested — their personal assets are protected.',
  },
  {
    prompt: 'A private company (Pty Ltd) may have a maximum of how many shareholders?',
    options: ['10', '25', '50', '100'],
    answer: '50',
    explanation: 'Under the Companies Act in South Africa, a private company may have between 1 and 50 shareholders.',
  },
  {
    prompt: 'Which feature allows a company to continue operating even after its original owner passes away?',
    options: ['Limited liability', 'Separate legal entity', 'Perpetual succession (continuity)', 'Listed status'],
    answer: 'Perpetual succession (continuity)',
    explanation: 'Companies have perpetual succession — the business continues to exist regardless of changes in ownership or the death of shareholders.',
  },
  {
    prompt: 'A group of small-scale tomato farmers in Limpopo register their business to share profits and make decisions democratically. Which form of ownership is this?',
    options: ['Partnership', 'Co-operative', 'Close corporation', 'Public company'],
    answer: 'Co-operative',
    explanation: 'Co-operatives are member-owned organisations where profits are distributed equally and decisions are made democratically — ideal for community-based ventures.',
  },
  {
    prompt: 'A bank providing home loans operates in which sector?',
    options: ['Primary sector', 'Secondary sector', 'Tertiary sector', 'Agricultural sector'],
    answer: 'Tertiary sector',
    explanation: 'Banks provide financial services, placing them firmly in the tertiary (services) sector.',
  },
  {
    prompt: 'What is the MAIN difference between a public company (Ltd) and a private company (Pty Ltd)?',
    options: [
      'Public companies have limited liability; private companies do not',
      'Public companies can list on the JSE and have unlimited shareholders; private companies cannot',
      'Private companies must publish annual reports; public companies do not',
      'Public companies are owned by the government',
    ],
    answer: 'Public companies can list on the JSE and have unlimited shareholders; private companies cannot',
    explanation: 'Public companies (Ltd) can list shares on the Johannesburg Stock Exchange and have unlimited shareholders, while private companies (Pty Ltd) are limited to 50 shareholders and cannot list.',
  },
  {
    prompt: 'Which form of ownership has the HIGHEST personal financial risk for the owner?',
    options: ['Private company', 'Co-operative', 'Sole proprietor', 'Public company'],
    answer: 'Sole proprietor',
    explanation: 'A sole proprietor has unlimited liability — if the business cannot pay its debts, creditors can claim the owner\'s personal assets.',
  },
  {
    prompt: 'Mining gold from a shaft in Gauteng is an example of which business sector?',
    options: ['Secondary sector', 'Tertiary sector', 'Primary sector', 'Service sector'],
    answer: 'Primary sector',
    explanation: 'Mining extracts natural resources directly from the earth, placing it in the primary sector.',
  },
];

const BusinessSectorsOwnership = () => (
  <CapsSubjectTopic
    title="Business Sectors and Ownership Forms"
    subtitle="How businesses are structured and categorised in South Africa"
    learnSteps={learnSteps}
    task="gr11-business-sectors-ownership-t1"
    bank={bank}
    apiPath="/api/caps/bus"
  />
);

export default BusinessSectorsOwnership;
