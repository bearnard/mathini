import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { BusinessStudiesItem, LearnStep } from '../../_shared/types';

const learnSteps: LearnStep[] = [
  {
    image: { src: "/curriculum/grade11/bus/term3/entrepreneurial-qualities-business-plan/diagram.webp", alt: "Entrepreneurial Qualities and Business Plan" },
    title: 'Key entrepreneurial qualities',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Successful entrepreneurs share a cluster of <strong>personal qualities</strong> that drive them to identify opportunities and build businesses.
        </p>
        <div className="grid gap-3 md:grid-cols-3 text-left">
          <div className="rounded-xl bg-blue-50 p-4">
            <strong className="text-blue-700">Risk-taking</strong>
            <p className="text-slate-600">Willingness to invest resources in uncertain ventures, calculated not reckless.</p>
          </div>
          <div className="rounded-xl bg-green-50 p-4">
            <strong className="text-green-700">Creativity and innovation</strong>
            <p className="text-slate-600">Generating new ideas and finding better ways to solve problems.</p>
          </div>
          <div className="rounded-xl bg-yellow-50 p-4">
            <strong className="text-yellow-700">Determination</strong>
            <p className="text-slate-600">Persisting through setbacks and maintaining focus on long-term goals.</p>
          </div>
          <div className="rounded-xl bg-purple-50 p-4">
            <strong className="text-purple-700">Leadership</strong>
            <p className="text-slate-600">Inspiring and guiding a team towards a shared vision.</p>
          </div>
          <div className="rounded-xl bg-orange-50 p-4">
            <strong className="text-orange-700">Self-confidence</strong>
            <p className="text-slate-600">Believing in their abilities and decisions even under pressure.</p>
          </div>
          <div className="rounded-xl bg-teal-50 p-4">
            <strong className="text-teal-700">Opportunity seeking</strong>
            <p className="text-slate-600">Constantly identifying gaps in the market that others miss.</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'The business plan — why it matters',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          A <strong>business plan</strong> is a written document that describes the venture, its goals, and how it will achieve them. It is essential for securing funding and guiding the business.
        </p>
        <div className="bg-slate-50 p-5 rounded-xl text-left">
          <p className="font-bold text-slate-800 mb-2">Why a business plan is important:</p>
          <ul className="list-disc list-inside text-slate-700 space-y-1">
            <li>Helps the entrepreneur clarify and test the business idea</li>
            <li>Required by banks and investors before granting funding</li>
            <li>Identifies potential risks and how to manage them</li>
            <li>Serves as a roadmap to keep the business on track</li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    title: 'Key sections of a business plan',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          A well-structured business plan includes these <strong>core sections</strong>:
        </p>
        <div className="grid gap-2 md:grid-cols-2 text-left text-sm">
          {[
            { title: 'Executive summary', desc: 'A concise overview of the entire plan — usually written last.' },
            { title: 'Business description', desc: 'Name, location, mission, vision and the problem it solves.' },
            { title: 'Market analysis', desc: 'Target market, competition, and demand research.' },
            { title: 'Marketing plan', desc: 'How the business will reach and retain customers (7 Ps).' },
            { title: 'Operations plan', desc: 'Facilities, equipment, production processes and suppliers.' },
            { title: 'HR plan', desc: 'Staffing structure, roles and recruitment needs.' },
            { title: 'Financial plan', desc: 'Start-up costs, projected income, cash flow and break-even analysis.' },
          ].map(({ title, desc }) => (
            <div key={title} className="rounded-xl bg-slate-100 p-3">
              <strong className="text-slate-700">{title}</strong>
              <p className="text-slate-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    title: 'Viability — will the venture work?',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          <strong>Viability</strong> means the business idea is practical and financially sustainable. Entrepreneurs must assess viability before committing resources.
        </p>
        <div className="bg-amber-50 p-5 rounded-xl text-left">
          <p className="font-bold text-amber-800 mb-2">Viability checks:</p>
          <ul className="list-disc list-inside text-slate-700 space-y-1">
            <li><strong>Market need:</strong> Is there a real demand for the product or service?</li>
            <li><strong>Profitability:</strong> Will revenue exceed costs?</li>
            <li><strong>Resources:</strong> Does the entrepreneur have or can they access the needed capital, skills and time?</li>
            <li><strong>Competition:</strong> Can the venture compete effectively in the market?</li>
          </ul>
        </div>
      </div>
    ),
  },
];

const bank: BusinessStudiesItem[] = [
  {
    prompt: 'Amara noticed that students in her township had no access to affordable printing services near their school. She started a printing business. Which entrepreneurial quality did she display?',
    options: ['Risk-taking', 'Opportunity seeking', 'Determination', 'Self-confidence'],
    answer: 'Opportunity seeking',
    explanation: 'Identifying a gap in the market — affordable printing near schools — is the hallmark of opportunity seeking, a core entrepreneurial quality.',
  },
  {
    prompt: 'Which section of a business plan is usually written LAST but appears FIRST?',
    options: ['Financial plan', 'Market analysis', 'Executive summary', 'Operations plan'],
    answer: 'Executive summary',
    explanation: 'The executive summary provides a concise overview of the whole plan and is best written after all other sections are complete.',
  },
  {
    prompt: 'A bank asks an entrepreneur to submit a document that outlines the business idea, target market, and financial projections before approving a loan. What document is this?',
    options: ['Annual financial statement', 'Business plan', 'Marketing report', 'Operations manual'],
    answer: 'Business plan',
    explanation: 'Banks and investors require a business plan to evaluate the viability of the venture before granting funding.',
  },
  {
    prompt: 'An entrepreneur loses her first three clients but continues to refine her product and search for new customers. Which quality does she display?',
    options: ['Risk-taking', 'Leadership', 'Determination', 'Creativity'],
    answer: 'Determination',
    explanation: 'Determination means persisting through setbacks and maintaining focus — this entrepreneur is not giving up despite early failures.',
  },
  {
    prompt: 'Which business plan section describes how the product will be manufactured or the service delivered, including equipment and suppliers?',
    options: ['Marketing plan', 'Financial plan', 'Operations plan', 'HR plan'],
    answer: 'Operations plan',
    explanation: 'The operations plan covers production processes, equipment, facilities, and supplier arrangements needed to deliver the product or service.',
  },
  {
    prompt: 'Before starting a candle-making business, Lerato surveys 100 potential customers to check whether they would buy her product. She is assessing:',
    options: ['Her leadership skills', 'The viability of her venture', 'Her marketing mix', 'Her operations plan'],
    answer: 'The viability of her venture',
    explanation: 'Checking whether real demand exists before investing is a key part of viability assessment — ensuring the venture has market need.',
  },
  {
    prompt: 'Which section of a business plan analyses competitors and describes the target market?',
    options: ['Executive summary', 'Financial plan', 'Market analysis', 'HR plan'],
    answer: 'Market analysis',
    explanation: 'The market analysis section examines the size and characteristics of the target market, identifies competitors, and assesses demand.',
  },
  {
    prompt: 'An entrepreneur takes out a loan to fund her business idea even though she knows it might not succeed immediately. This demonstrates:',
    options: ['Recklessness', 'Risk-taking', 'Creativity', 'Opportunity seeking'],
    answer: 'Risk-taking',
    explanation: 'Calculated risk-taking — investing resources in a venture knowing there is uncertainty — is a defining quality of an entrepreneur.',
  },
  {
    prompt: 'A business plan is MOST useful for a start-up because it:',
    options: [
      'Guarantees profit in the first year',
      'Replaces the need for market research',
      'Provides a roadmap and helps secure funding',
      'Eliminates all business risks',
    ],
    answer: 'Provides a roadmap and helps secure funding',
    explanation: 'A business plan guides decision-making and is required by investors and banks as proof that the entrepreneur has thought through the venture carefully.',
  },
];

const EntrepreneurialQualitiesBusinessPlan = () => (
  <CapsSubjectTopic
    title="Entrepreneurial Qualities and Business Plan"
    subtitle="What makes a successful entrepreneur and how to plan a venture"
    learnSteps={learnSteps}
    task="gr11-entrepreneurial-qualities-business-plan-t3"
    bank={bank}
    apiPath="/api/caps/bus"
  />
);

export default EntrepreneurialQualitiesBusinessPlan;
