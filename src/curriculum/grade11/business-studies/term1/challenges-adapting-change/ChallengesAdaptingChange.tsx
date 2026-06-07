import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { BusinessStudiesItem, LearnStep } from '../../_shared/types';

const learnSteps: LearnStep[] = [
  {
    image: { src: "/curriculum/grade11/bus/term1/challenges-adapting-change/diagram.webp", alt: "Challenges and Adapting to Change" },
    title: 'Socio-economic challenges in South Africa',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          South African businesses face unique <strong>socio-economic challenges</strong> that affect their operations and strategy.
        </p>
        <div className="grid gap-3 md:grid-cols-2 text-left">
          <div className="rounded-xl bg-red-50 p-4">
            <strong className="text-red-700">Unemployment</strong>
            <p className="text-slate-600">High joblessness reduces consumer spending and creates skills shortages.</p>
          </div>
          <div className="rounded-xl bg-orange-50 p-4">
            <strong className="text-orange-700">Poverty and inequality</strong>
            <p className="text-slate-600">Income gaps limit the market for goods and services.</p>
          </div>
          <div className="rounded-xl bg-yellow-50 p-4">
            <strong className="text-yellow-700">Crime and corruption</strong>
            <p className="text-slate-600">Increases security costs and damages investor confidence.</p>
          </div>
          <div className="rounded-xl bg-purple-50 p-4">
            <strong className="text-purple-700">HIV/AIDS</strong>
            <p className="text-slate-600">Affects the workforce, increases absenteeism and healthcare costs.</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Proactive vs reactive business responses',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Businesses can respond to challenges either <strong>proactively</strong> (before the problem occurs) or <strong>reactively</strong> (after it occurs).
        </p>
        <div className="grid gap-4 md:grid-cols-2 text-left">
          <div className="rounded-xl bg-green-50 p-4">
            <strong className="text-green-700">Proactive response</strong>
            <p className="text-slate-600">Anticipate challenges and plan ahead. Example: investing in solar panels before load-shedding gets worse.</p>
          </div>
          <div className="rounded-xl bg-blue-50 p-4">
            <strong className="text-blue-700">Reactive response</strong>
            <p className="text-slate-600">Respond after the challenge hits. Example: buying a generator after losing sales during blackouts.</p>
          </div>
        </div>
        <p className="text-sm text-slate-500">Proactive responses are generally preferred — they reduce damage and give businesses a competitive edge.</p>
      </div>
    ),
  },
  {
    title: 'Strategies for adapting to change',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Businesses that <strong>adapt successfully</strong> use a range of strategies to manage environmental pressures.
        </p>
        <div className="bg-slate-50 p-6 rounded-xl text-left">
          <ul className="space-y-2 text-slate-700 list-disc list-inside">
            <li><strong>Innovation:</strong> develop new products or processes to stay relevant</li>
            <li><strong>Staff training:</strong> upskill employees to match changing demands</li>
            <li><strong>Diversification:</strong> expand into new markets or products to spread risk</li>
            <li><strong>Cost-cutting:</strong> reduce expenses to survive economic downturns</li>
            <li><strong>Collaboration:</strong> form partnerships or joint ventures to share resources</li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    title: "Evaluating a business's response — exam technique",
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          In exam scenarios, you must <strong>identify the challenge</strong>, classify it by environment, and then <strong>recommend or evaluate</strong> an appropriate response.
        </p>
        <div className="bg-amber-50 p-5 rounded-xl text-left">
          <p className="font-bold text-amber-800 mb-2">Structured approach:</p>
          <ol className="list-decimal list-inside space-y-1 text-slate-700">
            <li>Name the challenge and the environment it belongs to.</li>
            <li>State whether the business's response is proactive or reactive.</li>
            <li>Evaluate the effectiveness of the response (advantages and disadvantages).</li>
            <li>Recommend an improvement if needed.</li>
          </ol>
        </div>
      </div>
    ),
  },
];

const bank: BusinessStudiesItem[] = [
  {
    prompt: 'Which of the following BEST describes a proactive business response to a challenge?',
    options: [
      'Replacing broken equipment after a breakdown',
      'Hiring new staff after a key employee resigns',
      'Installing backup power before load-shedding disrupts production',
      'Reducing prices after losing customers to a competitor',
    ],
    answer: 'Installing backup power before load-shedding disrupts production',
    explanation: 'A proactive response anticipates a challenge and acts before it causes harm, such as investing in generators ahead of expected power cuts.',
  },
  {
    prompt: 'How does high unemployment in South Africa negatively affect businesses?',
    options: [
      'It increases consumer spending',
      'It reduces the number of skilled workers and lowers consumer purchasing power',
      'It lowers production costs permanently',
      'It creates a larger customer base',
    ],
    answer: 'It reduces the number of skilled workers and lowers consumer purchasing power',
    explanation: 'High unemployment means fewer people with income to spend, and a shortage of skilled labour makes it harder and costlier to find qualified employees.',
  },
  {
    prompt: 'A retail store starts selling online to reach more customers during load-shedding. This adaptation is BEST described as:',
    options: ['Reactive cost-cutting', 'Proactive diversification', 'Reactive innovation', 'Proactive diversification or innovation'],
    answer: 'Proactive diversification or innovation',
    explanation: 'Expanding to online sales uses innovation and diversification to reach new channels, and can be proactive if done before significant sales losses occur.',
  },
  {
    prompt: 'Which socio-economic issue in South Africa directly increases a business\'s absenteeism and healthcare costs?',
    options: ['Unemployment', 'HIV/AIDS', 'Crime', 'Inflation'],
    answer: 'HIV/AIDS',
    explanation: 'HIV/AIDS reduces the workforce through illness and death, raises absenteeism, and forces businesses to spend more on healthcare and wellness programmes.',
  },
  {
    prompt: 'A business waits until customers complain before improving its product quality. This is a:',
    options: ['Proactive strategy', 'Reactive strategy', 'Diversification strategy', 'Cost leadership strategy'],
    answer: 'Reactive strategy',
    explanation: 'Reacting to customer complaints after they occur is a reactive approach — the business did not anticipate or prevent the quality problem.',
  },
  {
    prompt: 'Crime and corruption as business challenges belong to which PESTLE category?',
    options: ['Economic', 'Environmental', 'Social', 'Legislative'],
    answer: 'Social',
    explanation: 'Crime and corruption are social challenges that affect community trust, employee safety, and business operating costs.',
  },
  {
    prompt: 'Which adaptation strategy involves spreading business risk across different products or markets?',
    options: ['Cost-cutting', 'Diversification', 'Staff training', 'Collaboration'],
    answer: 'Diversification',
    explanation: 'Diversification means entering new markets or offering new products so that poor performance in one area does not destroy the entire business.',
  },
  {
    prompt: 'Lebo\'s clothing factory trains its machinists to use new digital sewing machines. Which adaptation strategy is this?',
    options: ['Diversification', 'Cost-cutting', 'Staff training / upskilling', 'Collaboration'],
    answer: 'Staff training / upskilling',
    explanation: 'Investing in employee training to match new technology is an upskilling strategy that helps the business adapt to technological change.',
  },
  {
    prompt: 'Which of the following is a consequence of poverty and high income inequality for South African businesses?',
    options: [
      'A larger market for luxury goods',
      'Increased exports to foreign markets',
      'A smaller consumer market with limited spending power',
      'Lower production costs across all industries',
    ],
    answer: 'A smaller consumer market with limited spending power',
    explanation: 'Poverty and inequality mean many potential customers cannot afford goods and services, shrinking the effective market.',
  },
];

const ChallengesAdaptingChange = () => (
  <CapsSubjectTopic
    title="Challenges and Adapting to Change"
    subtitle="Responding strategically to business pressures in South Africa"
    learnSteps={learnSteps}
    task="gr11-challenges-adapting-change-t1"
    bank={bank}
    apiPath="/api/caps/bus"
  />
);

export default ChallengesAdaptingChange;
