import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { BusinessStudiesItem, LearnStep } from '../../_shared/types';

const learnSteps: LearnStep[] = [
  {
    title: 'From business plan to action plan',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          An <strong>action plan</strong> converts the business plan into specific, time-bound tasks with assigned responsibilities — it is the bridge between planning and doing.
        </p>
        <div className="bg-slate-50 p-5 rounded-xl text-left">
          <p className="font-bold text-slate-800 mb-2">A good action plan includes:</p>
          <ul className="list-disc list-inside text-slate-700 space-y-1">
            <li><strong>Tasks:</strong> exactly what needs to be done</li>
            <li><strong>Responsible person:</strong> who will do it</li>
            <li><strong>Deadline:</strong> by when it must be completed</li>
            <li><strong>Resources needed:</strong> money, tools, skills</li>
            <li><strong>Success indicator:</strong> how you'll know it's done</li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    title: 'Key steps to start a business',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Launching a venture involves a logical sequence of <strong>start-up steps</strong>.
        </p>
        <div className="grid gap-2 md:grid-cols-2 text-left text-sm">
          {[
            { n: '1', step: 'Identify a viable opportunity', desc: 'Confirm market need through research.' },
            { n: '2', step: 'Write a business plan', desc: 'Detail the vision, financials and operations.' },
            { n: '3', step: 'Choose a form of ownership', desc: 'Decide on sole proprietor, Pty Ltd, co-op, etc.' },
            { n: '4', step: 'Register the business', desc: 'Register with CIPC, SARS, and relevant councils.' },
            { n: '5', step: 'Secure funding', desc: 'Apply for loans, grants or attract investors.' },
            { n: '6', step: 'Set up operations', desc: 'Rent premises, buy equipment, hire staff.' },
            { n: '7', step: 'Launch and market', desc: 'Open officially, run promotions, serve customers.' },
          ].map(({ n, step, desc }) => (
            <div key={n} className="rounded-xl bg-slate-100 p-3 flex gap-2">
              <span className="text-blue-600 font-bold text-lg">{n}.</span>
              <div>
                <strong className="text-slate-700">{step}</strong>
                <p className="text-slate-600">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    title: 'Challenges when implementing a venture',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Most start-ups face <strong>implementation challenges</strong> — anticipating them helps entrepreneurs respond effectively.
        </p>
        <div className="grid gap-3 md:grid-cols-2 text-left">
          <div className="rounded-xl bg-red-50 p-4">
            <strong className="text-red-700">Cash flow problems</strong>
            <p className="text-slate-600">Spending outpaces income in the early months — manage with a cash flow forecast.</p>
          </div>
          <div className="rounded-xl bg-orange-50 p-4">
            <strong className="text-orange-700">Staff challenges</strong>
            <p className="text-slate-600">Finding, training and retaining skilled workers can be costly and time-consuming.</p>
          </div>
          <div className="rounded-xl bg-yellow-50 p-4">
            <strong className="text-yellow-700">Market competition</strong>
            <p className="text-slate-600">Established players may undercut prices or respond aggressively to a new entrant.</p>
          </div>
          <div className="rounded-xl bg-purple-50 p-4">
            <strong className="text-purple-700">Regulatory compliance</strong>
            <p className="text-slate-600">Tax, labour law and sector-specific rules must be followed from day one.</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Monitoring and adjusting the venture',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Once launched, an entrepreneur must continuously <strong>monitor progress</strong> and make adjustments to stay on track.
        </p>
        <div className="bg-amber-50 p-5 rounded-xl text-left">
          <p className="font-bold text-amber-800 mb-2">Monitoring tools:</p>
          <ul className="list-disc list-inside text-slate-700 space-y-1">
            <li><strong>Sales tracking:</strong> compare actual sales to targets monthly</li>
            <li><strong>Cash flow statement:</strong> ensure the business can pay its bills</li>
            <li><strong>Customer feedback:</strong> identify quality or service issues early</li>
            <li><strong>Action plan review:</strong> check which tasks are on time and which are delayed</li>
          </ul>
        </div>
      </div>
    ),
  },
];

const bank: BusinessStudiesItem[] = [
  {
    prompt: 'An action plan differs from a business plan because an action plan:',
    options: ['Gives a financial forecast and nothing else', 'Turns goals into tasks with deadlines and responsible people', 'Is written for the investors only', 'Takes the place of a business plan'],
    answer: 'Turns goals into tasks with deadlines and responsible people',
    explanation: 'An action plan breaks down the business plan into operational tasks — it assigns who does what, by when, and with what resources.',
  },
  {
    prompt: 'Before launching her bakery, Naledi must register with CIPC and SARS. What stage of starting a business is this?',
    options: ['Identify the opportunity', 'Write the business plan', 'Register the business', 'Set up operations'],
    answer: 'Register the business',
    explanation: 'Registering with CIPC (Companies and Intellectual Property Commission) and SARS (South African Revenue Service) is the legal registration step in starting a business.',
  },
  {
    prompt: 'Sipho\'s new hardware shop is spending more money than it is earning in its first three months. This is an example of:',
    options: ['A marketing problem', 'A cash flow challenge', 'A staff challenge', 'A quality issue'],
    answer: 'A cash flow challenge',
    explanation: 'When outflows exceed inflows in early months, a business faces cash flow difficulties — very common for new ventures before customer bases are established.',
  },
  {
    prompt: 'Which tool helps an entrepreneur predict whether the business can pay its bills in future months?',
    options: ['Income statement', 'Cash flow forecast', 'Balance sheet', 'Profit and loss account'],
    answer: 'Cash flow forecast',
    explanation: 'A cash flow forecast projects expected inflows and outflows over time, helping the entrepreneur plan for periods when cash may be short.',
  },
  {
    prompt: 'Bongani compares his monthly sales to his targets and adjusts his marketing strategy when numbers fall short. He is:',
    options: ['Writing a business plan', 'Conducting market research', 'Monitoring and adjusting the venture', 'Developing an action plan'],
    answer: 'Monitoring and adjusting the venture',
    explanation: 'Regular comparison of actuals against targets, followed by corrective action, is the monitoring and adjusting phase of venture implementation.',
  },
  {
    prompt: 'Why must entrepreneurs choose a form of ownership BEFORE registering their business?',
    options: ['It decides the marketing mix of the business', 'Registration steps and legal rules differ by form', 'It decides the salary of each employee', 'Banks lend to only one form of ownership'],
    answer: 'Registration steps and legal rules differ by form',
    explanation: 'A sole proprietor, Pty Ltd, and co-operative each have different registration requirements with CIPC and different legal obligations under SA law.',
  },
  {
    prompt: 'Which venture challenge involves a new business struggling to compete with a well-known brand that already dominates the market?',
    options: ['Cash flow problems', 'Regulatory compliance', 'Staffing issues', 'Market competition'],
    answer: 'Market competition',
    explanation: 'Established competitors can respond to new entrants by lowering prices, increasing advertising, or locking up supply chains — a major implementation challenge.',
  },
  {
    prompt: 'What is the purpose of including a "success indicator" in an action plan?',
    options: ['To set the salaries of the employees', 'To measure whether each task was completed successfully', 'To take the place of the financial plan', 'To describe the marketing strategy of the firm'],
    answer: 'To measure whether each task was completed successfully',
    explanation: 'Success indicators define what "done" looks like for each task, allowing the entrepreneur to objectively assess whether the action plan is being achieved.',
  },
];

const StartingImplementingVenture = () => (
  <CapsSubjectTopic
    title="Starting and Implementing a Venture"
    subtitle="Action plans and steps to launch a business"
    learnSteps={learnSteps}
    task="gr11-starting-implementing-venture-t3"
    bank={bank}
    apiPath="/api/caps/bus"
  />
);

export default StartingImplementingVenture;
