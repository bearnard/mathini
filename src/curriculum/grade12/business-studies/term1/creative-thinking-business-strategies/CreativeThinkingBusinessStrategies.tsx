import CapsSubjectTopic from '@/components/CapsSubjectTopic';
import SwotMatrix from '@/components/subjects/SwotMatrix';
import type { CapsItem } from '@/components/CapsSubjectTopic';
import type { BusinessStudiesItem, LearnStep } from '../../_shared/types';

const learnSteps: LearnStep[] = [
  {
    title: 'Creative thinking improves business responses',
    content: (
      <div className="space-y-6">
        <p className="text-lg leading-8 text-slate-600">
          Creative thinking helps businesses solve persistent problems with fresh ideas instead of repeating old routines.
          In CAPS case studies, explain both the technique used and why it suits the problem.
        </p>
        <div className="rounded-xl bg-blue-50 border border-blue-200 p-4">
          <p className="font-semibold text-blue-800">Key Term: Brainstorming</p>
          <p className="text-slate-600 mt-1">
            A group technique where many ideas are generated first and evaluated later so that unusual solutions are not lost too early.
          </p>
        </div>
        <div className="grid gap-3 md:grid-cols-3">
          <div className="rounded-xl bg-violet-50 p-4">
            <strong className="text-violet-700">Brainstorming</strong>
            <p className="text-slate-600 mt-1">Best when a team needs a large number of ideas quickly.</p>
          </div>
          <div className="rounded-xl bg-emerald-50 p-4">
            <strong className="text-emerald-700">Mind mapping</strong>
            <p className="text-slate-600 mt-1">Helps learners show links between the central problem and sub-issues.</p>
          </div>
          <div className="rounded-xl bg-amber-50 p-4">
            <strong className="text-amber-700">Forced combinations</strong>
            <p className="text-slate-600 mt-1">Pushes the business to combine unrelated ideas into a new solution.</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Problem solving and decision making are linked',
    content: (
      <div className="space-y-6">
        <div className="grid gap-3 md:grid-cols-2">
          <div className="rounded-xl bg-green-50 p-4">
            <strong className="text-green-700">Problem solving</strong>
            <p className="text-slate-600 mt-1">Identify the challenge, analyse causes, generate options and test possible responses.</p>
          </div>
          <div className="rounded-xl bg-purple-50 p-4">
            <strong className="text-purple-700">Decision making</strong>
            <p className="text-slate-600 mt-1">Choose the best option after comparing risk, cost, feasibility and likely outcomes.</p>
          </div>
        </div>
        <div className="rounded-xl bg-amber-50 border border-amber-200 p-4">
          <p className="font-semibold text-amber-800">Exam tip</p>
          <p className="text-slate-600 mt-1">
            If the question asks for a recommendation, do not stop at listing options. State the final choice and justify it with facts from the scenario.
          </p>
        </div>
      </div>
    ),
  },
  {
    title: 'Analyse the macro environment strategically',
    content: (
      <div className="space-y-6">
        <p className="text-lg leading-8 text-slate-600">
          The macro environment contains forces the business cannot control directly, so managers must scan for threats and opportunities early.
        </p>
        <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-xl border border-slate-200 p-4 text-sm text-slate-600"><strong className="text-slate-800">Political</strong><p className="mt-1">Government stability, policy direction and service delivery.</p></div>
          <div className="rounded-xl border border-slate-200 p-4 text-sm text-slate-600"><strong className="text-slate-800">Economic</strong><p className="mt-1">Inflation, interest rates, unemployment and exchange movements.</p></div>
          <div className="rounded-xl border border-slate-200 p-4 text-sm text-slate-600"><strong className="text-slate-800">Social</strong><p className="mt-1">Consumer lifestyles, demographics and cultural preferences.</p></div>
          <div className="rounded-xl border border-slate-200 p-4 text-sm text-slate-600"><strong className="text-slate-800">Technological</strong><p className="mt-1">Automation, digital sales channels and cybersecurity needs.</p></div>
          <div className="rounded-xl border border-slate-200 p-4 text-sm text-slate-600"><strong className="text-slate-800">Legal</strong><p className="mt-1">Labour laws, consumer rights and licensing rules.</p></div>
          <div className="rounded-xl border border-slate-200 p-4 text-sm text-slate-600"><strong className="text-slate-800">Environmental</strong><p className="mt-1">Waste, water use, load-shedding and climate-related disruption.</p></div>
        </div>
        <SwotMatrix
          title="SWOT Analysis: Township Coffee Shop"
          strengths={['Owner knows local customers', 'Fast decision making', 'Low rental costs']}
          weaknesses={['Small marketing budget', 'Limited seating space', 'Owner handles too many roles']}
          opportunities={['Growing commuter traffic', 'Social media promotions', 'Partnerships with delivery apps']}
          threats={['Large chain competitors', 'Power outages', 'Rising ingredient prices']}
        />
      </div>
    ),
  },
  {
    title: 'Porters Five Forces and strategic planning',
    content: (
      <div className="space-y-6">
        <div className="rounded-xl bg-blue-50 border border-blue-200 p-4">
          <p className="font-semibold text-blue-800">CAPS terminology</p>
          <p className="text-slate-600 mt-1">
            Porter looks at rivalry, new entrants, substitutes, supplier power and buyer power. Strategic planning then converts that analysis into goals, action steps and resource choices.
          </p>
        </div>
        <ul className="list-disc pl-6 space-y-2 text-slate-600">
          <li>Strong rivalry often requires better service, differentiation or tighter cost control.</li>
          <li>Powerful buyers may force the business to improve quality or pricing.</li>
          <li>Supplier pressure can be reduced by diversifying suppliers or negotiating contracts.</li>
        </ul>
      </div>
    ),
  },
];

const items: BusinessStudiesItem[] = [
  {
    "id": "creative-thinking-business-strategies-1",
    "question": "During brainstorming, team members should first focus on:",
    "options": [
      "Criticising every idea",
      "Generating as many ideas as possible",
      "Choosing only one idea immediately",
      "Ignoring unusual suggestions"
    ],
    "answer": 1,
    "explanation": "Brainstorming aims for many ideas before evaluating them."
  },
  {
    "id": "creative-thinking-business-strategies-2",
    "question": "The first step in problem solving is to:",
    "options": [
      "Implement the solution",
      "Identify the problem clearly",
      "Reward employees",
      "Write the conclusion"
    ],
    "answer": 1,
    "explanation": "You must define the problem properly before you can solve it effectively."
  },
  {
    "id": "creative-thinking-business-strategies-3",
    "question": "Choosing the best option after comparing alternatives is mainly part of:",
    "options": [
      "Decision making",
      "Induction",
      "Recruitment",
      "Quality control"
    ],
    "answer": 0,
    "explanation": "Decision making involves selecting the most suitable alternative."
  },
  {
    "id": "creative-thinking-business-strategies-4",
    "question": "Which force in Porters Five Forces looks at how easy it is for new competitors to enter the market?",
    "options": [
      "Threat of substitutes",
      "Buyer power",
      "Threat of new entrants",
      "Supplier power"
    ],
    "answer": 2,
    "explanation": "The threat of new entrants measures how easily new firms can join the industry."
  },
  {
    "id": "creative-thinking-business-strategies-5",
    "question": "PESTLE is mainly used to analyse the:",
    "options": [
      "Micro environment",
      "Macro environment",
      "Production line only",
      "Interview process"
    ],
    "answer": 1,
    "explanation": "PESTLE analyses broad external forces in the macro environment."
  },
  {
    "id": "creative-thinking-business-strategies-6",
    "question": "If many similar firms are competing for the same customers, the business faces strong:",
    "options": [
      "Rivalry among competitors",
      "Employee induction",
      "Job grading",
      "Public relations"
    ],
    "answer": 0,
    "explanation": "Direct competition between existing firms is called rivalry among competitors."
  },
  {
    "id": "creative-thinking-business-strategies-7",
    "question": "Which response is MOST strategic when substitute products threaten sales?",
    "options": [
      "Ignore the market",
      "Differentiate the product and add value",
      "Stop all advertising permanently",
      "Refuse to plan"
    ],
    "answer": 1,
    "explanation": "Differentiation helps a business stand out when customers can switch to substitutes."
  },
  {
    "id": "creative-thinking-business-strategies-8",
    "question": "Strategic planning mainly helps a business to:",
    "options": ['Remove the risk from the business in the future', 'Set direction and allocate resources purposefully', 'Replace the managers of the business in the short term', 'Ignore changes in the environment'],
    "answer": 1,
    "explanation": "Strategic planning gives the business a deliberate long-term direction."
  }
];

const bank: CapsItem[] = items.map((item) => ({
  prompt: item.question,
  options: item.options,
  answer: item.options[item.answer],
  explanation: item.explanation,
}));


const CreativeThinkingBusinessStrategies = () => (
  <CapsSubjectTopic
    title="Creative Thinking and Business Strategies"
    subtitle="Problem solving, decision making, macro analysis and strategic planning"
    learnSteps={learnSteps}
    task="gr12-creative-thinking-business-strategies-t1"
    bank={bank}
    apiPath="/api/caps/bus"
    grade={12}
  />
);

export default CreativeThinkingBusinessStrategies;
