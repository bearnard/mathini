import CapsSubjectTopic from '@/components/CapsSubjectTopic';
import SwotMatrix from '@/components/subjects/SwotMatrix';
import type { CapsItem } from '@/components/CapsSubjectTopic';
import type { BusinessStudiesItem, LearnStep } from '../../_shared/types';

const learnSteps: LearnStep[] = [
  {
    title: 'Compare investment options',
    content: (
      <div className="space-y-6">
        <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-xl bg-blue-50 p-4"><strong className="text-blue-700">Ordinary shares</strong><p className="text-slate-600 mt-1">Higher risk with growth and dividend potential.</p></div>
          <div className="rounded-xl bg-emerald-50 p-4"><strong className="text-emerald-700">Unit trusts</strong><p className="text-slate-600 mt-1">Spread risk across a managed portfolio.</p></div>
          <div className="rounded-xl bg-amber-50 p-4"><strong className="text-amber-700">Fixed deposits</strong><p className="text-slate-600 mt-1">Lower risk and usually lower returns.</p></div>
          <div className="rounded-xl bg-purple-50 p-4"><strong className="text-purple-700">Property</strong><p className="text-slate-600 mt-1">Can provide rental income but ties up capital.</p></div>
        </div>
        <SwotMatrix
          title="SWOT Analysis: Investing Business Surplus Funds"
          strengths={['Extra cash available', 'Long-term growth goal', 'Basic financial advice available']}
          weaknesses={['Limited risk tolerance', 'Little investment experience', 'Need for some liquidity']}
          opportunities={['Diversified portfolio', 'JSE growth sectors', 'Tax-efficient products']}
          threats={['Market volatility', 'Inflation', 'Poor diversification choices']}
        />
      </div>
    ),
  },
  {
    title: 'Understand insurance principles',
    content: (
      <div className="space-y-6">
        <div className="rounded-xl bg-blue-50 border border-blue-200 p-4">
          <p className="font-semibold text-blue-800">Key Term: Indemnity</p>
          <p className="text-slate-600 mt-1">The insured should be restored to the previous financial position after a loss, not profit from the claim.</p>
        </div>
        <div className="grid gap-3 md:grid-cols-2">
          <div className="rounded-xl border border-slate-200 p-4"><strong className="text-slate-800">Insurable interest</strong><p className="text-slate-600 mt-1">The insured must suffer a financial loss if the asset is damaged.</p></div>
          <div className="rounded-xl border border-slate-200 p-4"><strong className="text-slate-800">Utmost good faith</strong><p className="text-slate-600 mt-1">Both parties must disclose all material facts honestly.</p></div>
        </div>
      </div>
    ),
  },
  {
    title: 'High-performing teams need clear roles',
    content: (
      <div className="space-y-6">
        <p className="text-lg leading-8 text-slate-600">
          Teams perform best when goals, roles and communication channels are clear. This reduces confusion and builds trust.
        </p>
        <div className="grid gap-3 md:grid-cols-3">
          <div className="rounded-xl bg-green-50 p-4"><strong className="text-green-700">Shared goals</strong><p className="text-slate-600 mt-1">Everyone understands what success looks like.</p></div>
          <div className="rounded-xl bg-indigo-50 p-4"><strong className="text-indigo-700">Defined roles</strong><p className="text-slate-600 mt-1">Tasks and accountability are visible.</p></div>
          <div className="rounded-xl bg-orange-50 p-4"><strong className="text-orange-700">Open communication</strong><p className="text-slate-600 mt-1">Problems are raised early instead of becoming conflict.</p></div>
        </div>
      </div>
    ),
  },
  {
    title: 'Conflict can be managed constructively',
    content: (
      <div className="space-y-6">
        <div className="rounded-xl bg-amber-50 border border-amber-200 p-4">
          <p className="font-semibold text-amber-800">Exam tip</p>
          <p className="text-slate-600 mt-1">Match the method to the problem: negotiation for direct discussion, mediation when a neutral helper is needed, and clear procedures for repeated disputes.</p>
        </div>
        <ul className="list-disc pl-6 space-y-2 text-slate-600">
          <li>Poor communication and role ambiguity are common causes of conflict.</li>
          <li>Listen to each side before recommending a solution.</li>
          <li>Explain why your chosen method suits the situation.</li>
        </ul>
      </div>
    ),
  },
];

const items: BusinessStudiesItem[] = [
  {
    "id": "investment-insurance-conflict-management-1",
    "question": "What is the main role of the Johannesburg Stock Exchange (JSE)?",
    "options": ['To issue identity documents and passports to citizens', 'To provide a market for listed shares', 'To set the national school exams', 'To manage disputes between workers'],
    "answer": 1,
    "explanation": "The JSE is a formal market where listed securities such as shares are traded."
  },
  {
    "id": "investment-insurance-conflict-management-2",
    "question": "Which investment generally carries higher risk but can also offer higher returns?",
    "options": [
      "Ordinary shares",
      "Savings account only",
      "Petty cash",
      "Insurance premium"
    ],
    "answer": 0,
    "explanation": "Ordinary shares can fluctuate significantly but may offer strong long-term returns."
  },
  {
    "id": "investment-insurance-conflict-management-3",
    "question": "Diversification helps an investor to:",
    "options": [
      "Put all money into one option",
      "Spread risk across different investments",
      "Avoid all losses forever",
      "Ignore return completely"
    ],
    "answer": 1,
    "explanation": "Diversification reduces risk by not depending on a single investment."
  },
  {
    "id": "investment-insurance-conflict-management-4",
    "question": "Underinsurance happens when the asset is insured for:",
    "options": [
      "More than its actual value",
      "Less than its actual value",
      "Exactly the purchase price forever",
      "No premium at all"
    ],
    "answer": 1,
    "explanation": "Underinsurance means the insured amount is below the true value of the asset."
  },
  {
    "id": "investment-insurance-conflict-management-5",
    "question": "Which insurance principle states that the insured should not profit from a loss?",
    "options": [
      "Indemnity",
      "Marketing",
      "Liquidity",
      "Diversification"
    ],
    "answer": 0,
    "explanation": "The principle of indemnity means insurance restores the insured to the previous financial position, not better."
  },
  {
    "id": "investment-insurance-conflict-management-6",
    "question": "A team is most likely to perform well when members have:",
    "options": [
      "Unclear roles and weak communication",
      "Shared goals and clear responsibilities",
      "No deadlines and no leader",
      "Constant unresolved conflict"
    ],
    "answer": 1,
    "explanation": "Clear goals and roles improve coordination and team performance."
  },
  {
    "id": "investment-insurance-conflict-management-7",
    "question": "When a neutral third party helps two employees reach agreement, this is called:",
    "options": [
      "Dismissal",
      "Mediation",
      "Induction",
      "Retrenchment"
    ],
    "answer": 1,
    "explanation": "Mediation uses a neutral third party to help the parties resolve a dispute."
  },
  {
    "id": "investment-insurance-conflict-management-8",
    "question": "Which is a common cause of conflict in teams?",
    "options": [
      "Clear communication",
      "Role ambiguity",
      "Shared understanding",
      "Mutual trust"
    ],
    "answer": 1,
    "explanation": "Unclear roles often create misunderstandings and conflict."
  }
];

const bank: CapsItem[] = items.map((item) => ({
  prompt: item.question,
  options: item.options,
  answer: item.options[item.answer],
  explanation: item.explanation,
}));


const InvestmentInsuranceConflictManagement = () => (
  <CapsSubjectTopic
    title="Investment, Insurance and Conflict Management"
    subtitle="JSE, investment options, insurance principles and resolving team conflict"
    learnSteps={learnSteps}
    task="gr12-investment-insurance-conflict-management-t2"
    bank={bank}
    apiPath="/api/caps/bus"
    grade={12}
  />
);

export default InvestmentInsuranceConflictManagement;
