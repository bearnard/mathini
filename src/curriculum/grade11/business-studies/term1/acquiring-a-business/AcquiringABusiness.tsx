import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { BusinessStudiesItem, LearnStep } from '../../_shared/types';

const learnSteps: LearnStep[] = [
  {
    title: 'Four ways to acquire a business',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          An entrepreneur can enter the business world through <strong>four main acquisition avenues</strong>.
        </p>
        <div className="grid gap-3 md:grid-cols-2 text-left">
          <div className="rounded-xl bg-blue-50 p-4">
            <strong className="text-blue-700">1. Start from scratch</strong>
            <p className="text-slate-600">Create a brand-new business with an original idea. Most freedom, but highest risk.</p>
          </div>
          <div className="rounded-xl bg-green-50 p-4">
            <strong className="text-green-700">2. Buy an existing business</strong>
            <p className="text-slate-600">Purchase a running business with customers, staff and systems already in place.</p>
          </div>
          <div className="rounded-xl bg-yellow-50 p-4">
            <strong className="text-yellow-700">3. Buy a franchise</strong>
            <p className="text-slate-600">Pay for the right to use a proven brand and system (e.g. Steers, Nandos, Clicks).</p>
          </div>
          <div className="rounded-xl bg-purple-50 p-4">
            <strong className="text-purple-700">4. Family business / inheritance</strong>
            <p className="text-slate-600">Take over a family-owned business through inheritance or succession planning.</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Buying an existing business — pros and cons',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Purchasing a <strong>going concern</strong> has clear advantages but also risks that must be investigated before buying.
        </p>
        <div className="grid gap-4 md:grid-cols-2 text-left">
          <div className="rounded-xl bg-green-50 p-4">
            <strong className="text-green-700">Advantages</strong>
            <ul className="list-disc list-inside text-slate-700 mt-1 space-y-1">
              <li>Existing customer base</li>
              <li>Established supplier relationships</li>
              <li>Trained staff already in place</li>
              <li>Historical financial records available</li>
            </ul>
          </div>
          <div className="rounded-xl bg-red-50 p-4">
            <strong className="text-red-700">Disadvantages</strong>
            <ul className="list-disc list-inside text-slate-700 mt-1 space-y-1">
              <li>May inherit hidden debts or problems</li>
              <li>Staff may resist new management</li>
              <li>Existing brand may have a poor reputation</li>
              <li>Purchase price can be high</li>
            </ul>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Franchising — how it works',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          A <strong>franchise</strong> is a licensing arrangement between a <em>franchisor</em> (brand owner) and a <em>franchisee</em> (buyer).
        </p>
        <div className="bg-slate-50 p-5 rounded-xl text-left">
          <p className="font-bold text-slate-800 mb-2">How it works:</p>
          <ul className="list-disc list-inside space-y-1 text-slate-700">
            <li>Franchisee pays an upfront <strong>franchise fee</strong> and ongoing <strong>royalties</strong></li>
            <li>Franchisee gets the right to use the brand, logo, systems and training</li>
            <li>Must follow the franchisor's rules on quality, pricing and appearance</li>
            <li>Lower risk than starting from scratch — proven model</li>
          </ul>
        </div>
        <p className="text-sm text-slate-500">Examples in SA: Steers, Nandos, Spar, Clicks, Debonairs Pizza</p>
      </div>
    ),
  },
  {
    title: 'Choosing the best acquisition method',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          The <strong>best acquisition method</strong> depends on the entrepreneur's capital, experience, risk tolerance and goals.
        </p>
        <div className="bg-amber-50 p-5 rounded-xl text-left">
          <p className="font-bold text-amber-800 mb-2">Decision guide:</p>
          <ul className="list-disc list-inside text-slate-700 space-y-1">
            <li>Low capital + unique idea → <strong>start from scratch</strong></li>
            <li>Available capital + want a running business → <strong>buy existing</strong></li>
            <li>Want low risk + proven brand → <strong>buy a franchise</strong></li>
            <li>Family involved + succession plan → <strong>family business</strong></li>
          </ul>
        </div>
      </div>
    ),
  },
];

const bank: BusinessStudiesItem[] = [
  {
    prompt: 'Thabo pays R500 000 to use the Steers brand name, recipes, and systems. Which acquisition method is this?',
    options: ['Starting from scratch', 'Buying an existing business', 'Buying a franchise', 'Family business'],
    answer: 'Buying a franchise',
    explanation: 'Thabo is paying for the right to use an established brand and system — this is the defining feature of a franchise agreement.',
  },
  {
    prompt: 'Which acquisition method carries the HIGHEST risk for a new entrepreneur?',
    options: ['Buying a franchise', 'Buying an existing business', 'Starting from scratch', 'Inheriting a family business'],
    answer: 'Starting from scratch',
    explanation: 'Starting from scratch means no established customer base, no proven systems, and no track record — making it the highest-risk option.',
  },
  {
    prompt: 'An entrepreneur buys a hair salon that has been operating for five years. What is a KEY advantage of this acquisition method?',
    options: [
      'Full creative freedom to change everything',
      'An existing customer base and trained staff',
      'Guaranteed profitability',
      'No need to pay for goodwill',
    ],
    answer: 'An existing customer base and trained staff',
    explanation: 'Buying a going concern means the entrepreneur inherits customers, staff and systems that are already running.',
  },
  {
    prompt: 'What is the term for the ongoing percentage of sales a franchisee pays to the franchisor?',
    options: ['Franchise fee', 'Royalty', 'Commission', 'Dividend'],
    answer: 'Royalty',
    explanation: 'Royalties are regular payments (usually a percentage of sales) made by the franchisee to the franchisor for continued use of the brand and support.',
  },
  {
    prompt: 'Sipho inherits his late father\'s car wash business. Which acquisition method is this?',
    options: ['Franchise', 'Starting from scratch', 'Buying an existing business', 'Family business / inheritance'],
    answer: 'Family business / inheritance',
    explanation: 'Taking over a business through succession or inheritance is classified as acquiring a family business.',
  },
  {
    prompt: 'Which of the following is a DISADVANTAGE of buying an existing business?',
    options: [
      'No existing customer relationships',
      'You may inherit hidden debts or a poor reputation',
      'You must develop all systems from scratch',
      'No staff are available',
    ],
    answer: 'You may inherit hidden debts or a poor reputation',
    explanation: 'Existing businesses may have undisclosed liabilities, damaged supplier relationships or a negative brand image that the buyer inherits.',
  },
  {
    prompt: 'A franchisee MUST follow the franchisor\'s rules on quality and appearance. This is a:',
    options: ['Advantage of franchising', 'Disadvantage of franchising', 'Benefit of starting from scratch', 'Feature of a co-operative'],
    answer: 'Disadvantage of franchising',
    explanation: 'Limited independence and the obligation to follow strict franchisor rules restricts the franchisee\'s creativity and decision-making freedom.',
  },
  {
    prompt: 'Which acquisition avenue would BEST suit an entrepreneur with limited capital but a strong unique business idea?',
    options: ['Buy a franchise', 'Buy an existing business', 'Start from scratch', 'Inherit a family business'],
    answer: 'Start from scratch',
    explanation: 'Starting from scratch requires less upfront capital than buying a business or franchise, and allows the entrepreneur to fully develop their unique idea.',
  },
  {
    prompt: 'Nando\'s, Steers, and Spar are all examples of which acquisition model that entrepreneurs use in South Africa?',
    options: ['Co-operative', 'Partnership', 'Franchise', 'Public company'],
    answer: 'Franchise',
    explanation: 'Nando\'s, Steers and Spar all use the franchise model — entrepreneurs buy the right to trade under the established brand.',
  },
];

const AcquiringABusiness = () => (
  <CapsSubjectTopic
    title="Acquiring a Business"
    subtitle="Ways entrepreneurs can enter or take over a business"
    learnSteps={learnSteps}
    task="gr11-acquiring-a-business-t1"
    bank={bank}
    apiPath="/api/caps/bus"
  />
);

export default AcquiringABusiness;
