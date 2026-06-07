import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { BusinessStudiesItem, LearnStep } from '../../_shared/types';

const learnSteps: LearnStep[] = [
  {
    image: { src: "/curriculum/grade11/bus/term4/revision-environments-ventures/diagram.webp", alt: "Revision: Environments and Ventures" },
    title: 'Revision checklist — business environments',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Make sure you can explain, compare and apply <strong>all three business environments</strong> and their influences.
        </p>
        <div className="bg-slate-50 p-5 rounded-xl text-left">
          <ul className="list-disc list-inside text-slate-700 space-y-2">
            <li>Name and describe the micro, market and macro environments</li>
            <li>List and explain all 6 PESTLE factors with South African examples</li>
            <li>Identify whether a business has full control, some influence, or no control over each factor</li>
            <li>Explain at least THREE socio-economic challenges facing SA businesses</li>
            <li>Compare proactive and reactive responses with examples</li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    title: 'Revision checklist — forms of ownership and acquisition',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Be able to <strong>compare ownership forms</strong> and recommend an acquisition method for a given scenario.
        </p>
        <div className="bg-slate-50 p-5 rounded-xl text-left">
          <ul className="list-disc list-inside text-slate-700 space-y-2">
            <li>Distinguish between sole proprietor, partnership, Pty Ltd, Ltd, and co-operative</li>
            <li>Explain the benefits of companies (limited liability, continuity, separate legal entity)</li>
            <li>Name and compare the four acquisition methods with advantages and disadvantages</li>
            <li>Classify a business by primary, secondary or tertiary sector</li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    title: 'Revision checklist — entrepreneurship',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Entrepreneurship questions often test your ability to <strong>identify qualities, evaluate plans, and apply concepts to scenarios</strong>.
        </p>
        <div className="bg-amber-50 p-5 rounded-xl text-left">
          <ul className="list-disc list-inside text-slate-700 space-y-2">
            <li>List and explain at least 5 entrepreneurial qualities with examples</li>
            <li>Name and describe the key sections of a business plan</li>
            <li>Explain viability and the factors that determine whether a venture is viable</li>
            <li>Describe the action plan and list the steps to start a business</li>
            <li>Identify and suggest solutions for common implementation challenges</li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    title: 'Key exam action verbs — environments and ventures',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Understanding what each <strong>exam action verb</strong> requires will improve your marks significantly.
        </p>
        <div className="grid gap-3 md:grid-cols-2 text-left">
          <div className="rounded-xl bg-blue-50 p-4">
            <strong className="text-blue-700">Define / Name / List</strong>
            <p className="text-slate-600">Give a one-line definition or a bullet list — do not write lengthy paragraphs.</p>
          </div>
          <div className="rounded-xl bg-green-50 p-4">
            <strong className="text-green-700">Explain / Describe</strong>
            <p className="text-slate-600">Give two to three sentences per point — what it is AND why it matters or how it works.</p>
          </div>
          <div className="rounded-xl bg-yellow-50 p-4">
            <strong className="text-yellow-700">Compare</strong>
            <p className="text-slate-600">Show similarities AND differences — use a structured format (Point A vs Point B).</p>
          </div>
          <div className="rounded-xl bg-orange-50 p-4">
            <strong className="text-orange-700">Evaluate / Assess</strong>
            <p className="text-slate-600">Give both advantages and disadvantages, then form a judgement or recommendation.</p>
          </div>
        </div>
      </div>
    ),
  },
];

const bank: BusinessStudiesItem[] = [
  {
    prompt: 'Which environment includes factors that a business has NO direct control over?',
    options: ['Micro environment', 'Market environment', 'Macro environment', 'Internal environment'],
    answer: 'Macro environment',
    explanation: 'The macro environment contains PESTLE factors (political, economic, social, technological, legislative, environmental) over which the business has no direct control.',
  },
  {
    prompt: 'A business changes its product range to target a new customer group. Which environment is the business directly influencing?',
    options: ['Macro environment', 'Market environment', 'Micro environment', 'Social environment'],
    answer: 'Micro environment',
    explanation: 'Product range decisions are internal (micro environment) choices that the business controls directly.',
  },
  {
    prompt: 'Rising inflation that increases the cost of imported raw materials is an example of which PESTLE factor?',
    options: ['Political', 'Social', 'Economic', 'Technological'],
    answer: 'Economic',
    explanation: 'Inflation and exchange rate movements are economic factors in the macro environment that directly affect business costs.',
  },
  {
    prompt: 'A bakery buys an existing bread shop with an established customer base. Which acquisition method is this?',
    options: ['Starting from scratch', 'Franchise', 'Buying an existing business', 'Family business'],
    answer: 'Buying an existing business',
    explanation: 'Purchasing a going concern — a business that is already operating with customers and systems — is buying an existing business.',
  },
  {
    prompt: 'Which entrepreneurial quality involves persisting through obstacles and setbacks to reach the goal?',
    options: ['Creativity', 'Risk-taking', 'Determination', 'Opportunity seeking'],
    answer: 'Determination',
    explanation: 'Determination is the quality that keeps an entrepreneur going despite failure or difficulty — essential for long-term venture success.',
  },
  {
    prompt: 'Before her bakery can operate legally, Nomsa must register with CIPC and SARS. Which start-up step is this?',
    options: ['Identifying the opportunity', 'Writing the business plan', 'Registering the business', 'Securing funding'],
    answer: 'Registering the business',
    explanation: 'Registering with CIPC (business registration) and SARS (tax registration) is the legal registration step in starting a South African business.',
  },
  {
    prompt: 'In an exam question asking you to COMPARE two forms of ownership, you should:',
    options: [
      'Only describe one form in detail',
      'Define both forms without linking them',
      'Show the similarities AND differences between the two forms',
      'List advantages only',
    ],
    answer: 'Show the similarities AND differences between the two forms',
    explanation: 'The action verb "compare" requires you to identify both what the two things have in common and how they differ — structured point-by-point comparison earns most marks.',
  },
  {
    prompt: 'Which feature of a company means the business continues to exist even if the original owners sell their shares?',
    options: ['Limited liability', 'Separate legal entity', 'Perpetual succession', 'JSE listing'],
    answer: 'Perpetual succession',
    explanation: 'Perpetual succession (continuity) means the company has an independent legal life — it continues regardless of changes in share ownership.',
  },
  {
    prompt: 'A SWOT analysis conducted during venture planning checks the business\'s internal Strengths and Weaknesses as well as external:',
    options: ['Salaries and benefits', 'Opportunities and Threats', 'Suppliers and Trade unions', 'Operations and Technology'],
    answer: 'Opportunities and Threats',
    explanation: 'SWOT stands for Strengths, Weaknesses (internal), Opportunities and Threats (external) — a key viability and planning tool.',
  },
];

const RevisionEnvironmentsVentures = () => (
  <CapsSubjectTopic
    title="Revision: Environments and Ventures"
    subtitle="Consolidating business environments and entrepreneurship content"
    learnSteps={learnSteps}
    task="gr11-revision-environments-ventures-t4"
    bank={bank}
    apiPath="/api/caps/bus"
  />
);

export default RevisionEnvironmentsVentures;
