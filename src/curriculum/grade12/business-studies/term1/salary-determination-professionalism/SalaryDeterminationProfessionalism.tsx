import CapsSubjectTopic from '@/components/CapsSubjectTopic';
import SwotMatrix from '@/components/subjects/SwotMatrix';
import type { CapsItem } from '@/components/CapsSubjectTopic';
import type { BusinessStudiesItem, LearnStep } from '../../_shared/types';

const learnSteps: LearnStep[] = [
  {
    image: { src: "/curriculum/grade12/bus/term1/salary-determination-professionalism/diagram.webp", alt: "SWOT Analysis: Retaining Skilled Electricians" },
    title: 'How salaries are determined',
    content: (
      <div className="space-y-6">
        <p className="text-lg leading-8 text-slate-600">
          Salary decisions should be fair, affordable and legally compliant. Businesses consider the value of the job as well as market and labour factors.
        </p>
        <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-xl border border-slate-200 p-4 text-sm text-slate-600"><strong className="text-slate-800">Job grading</strong><p className="mt-1">Places work into fair pay levels.</p></div>
          <div className="rounded-xl border border-slate-200 p-4 text-sm text-slate-600"><strong className="text-slate-800">Qualifications</strong><p className="mt-1">Specialist skills often justify higher pay.</p></div>
          <div className="rounded-xl border border-slate-200 p-4 text-sm text-slate-600"><strong className="text-slate-800">Experience</strong><p className="mt-1">Years of proven performance matter.</p></div>
          <div className="rounded-xl border border-slate-200 p-4 text-sm text-slate-600"><strong className="text-slate-800">Market trends</strong><p className="mt-1">Businesses compare against industry rates.</p></div>
        </div>
      </div>
    ),
  },
  {
    title: 'Remuneration and benefits',
    content: (
      <div className="space-y-6">
        <div className="grid gap-3 md:grid-cols-2">
          <div className="rounded-xl bg-blue-50 p-4">
            <strong className="text-blue-700">Direct remuneration</strong>
            <p className="text-slate-600 mt-1">Salary, wages, overtime, commission and performance bonuses.</p>
          </div>
          <div className="rounded-xl bg-emerald-50 p-4">
            <strong className="text-emerald-700">Fringe benefits</strong>
            <p className="text-slate-600 mt-1">Medical aid, pension, housing allowance and other support benefits.</p>
          </div>
        </div>
        <SwotMatrix
          title="SWOT Analysis: Retaining Skilled Electricians"
          strengths={['Competitive basic salary', 'Paid overtime', 'Supportive supervisor']}
          weaknesses={['Limited promotion paths', 'Small bonus pool', 'Old equipment']}
          opportunities={['Scarce-skill allowances', 'Training incentives', 'Retention bonuses']}
          threats={['Rivals offering better packages', 'Inflation pressure', 'Union disputes']}
        />
      </div>
    ),
  },
  {
    title: 'Professionalism in the workplace',
    content: (
      <div className="space-y-6">
        <div className="rounded-xl bg-blue-50 border border-blue-200 p-4">
          <p className="font-semibold text-blue-800">Key Term: Professionalism</p>
          <p className="text-slate-600 mt-1">Reliable, respectful and ethical conduct that protects trust inside and outside the business.</p>
        </div>
        <div className="grid gap-3 md:grid-cols-2">
          <div className="rounded-xl bg-green-50 p-4"><strong className="text-green-700">Professional conduct</strong><p className="text-slate-600 mt-1">Punctuality, confidentiality, respectful communication and neat appearance.</p></div>
          <div className="rounded-xl bg-rose-50 p-4"><strong className="text-rose-700">Unprofessional conduct</strong><p className="text-slate-600 mt-1">Gossip, lateness, misuse of resources and disrespect toward clients or colleagues.</p></div>
        </div>
      </div>
    ),
  },
  {
    title: 'Ethics guide decision making',
    content: (
      <div className="space-y-6">
        <div className="rounded-xl bg-amber-50 border border-amber-200 p-4">
          <p className="font-semibold text-amber-800">Exam tip</p>
          <p className="text-slate-600 mt-1">When a case study shows bribery, favouritism or conflicts of interest, recommend transparent procedures and consistent consequences.</p>
        </div>
        <ul className="list-disc pl-6 space-y-2 text-slate-600">
          <li>Declare gifts and possible conflicts.</li>
          <li>Use clear codes of conduct.</li>
          <li>Protect confidential information.</li>
        </ul>
      </div>
    ),
  },
];

const items: BusinessStudiesItem[] = [
  {
    "id": "salary-determination-professionalism-1",
    "question": "Which factor is most directly used to place jobs into fair pay categories?",
    "options": [
      "Job grading",
      "Advertising cost",
      "Company logo design",
      "Store layout"
    ],
    "answer": 0,
    "explanation": "Job grading groups jobs according to value and responsibility to support fair pay decisions."
  },
  {
    "id": "salary-determination-professionalism-2",
    "question": "Medical aid and pension contributions are examples of:",
    "options": [
      "Unethical behaviour",
      "Fringe benefits",
      "Dismissal procedures",
      "Recruitment methods"
    ],
    "answer": 1,
    "explanation": "These are benefits that form part of the total remuneration package."
  },
  {
    "id": "salary-determination-professionalism-3",
    "question": "A salary review linked to rising prices is responding to:",
    "options": [
      "Inflation and cost of living",
      "The colour of the company logo",
      "Only the number of customers",
      "Stock theft"
    ],
    "answer": 0,
    "explanation": "Inflation raises living costs, so many employers consider it when reviewing salaries."
  },
  {
    "id": "salary-determination-professionalism-4",
    "question": "Which behaviour BEST shows professionalism?",
    "options": [
      "Sharing confidential client information",
      "Arriving on time and communicating respectfully",
      "Ignoring dress code rules",
      "Using company resources for private business"
    ],
    "answer": 1,
    "explanation": "Professional workers are reliable, respectful and protect confidential information."
  },
  {
    "id": "salary-determination-professionalism-5",
    "question": "A manager awards a contract to a relative without following proper procedure. This is a(n):",
    "options": [
      "Quality circle",
      "Conflict of interest",
      "Performance appraisal",
      "Recruitment plan"
    ],
    "answer": 1,
    "explanation": "A conflict of interest happens when private relationships influence business decisions unfairly."
  },
  {
    "id": "salary-determination-professionalism-6",
    "question": "Collective bargaining influences salary determination because it:",
    "options": [
      "Removes all labour laws",
      "Allows unions and employers to negotiate pay and conditions",
      "Only applies to customers",
      "Is the same as recruitment"
    ],
    "answer": 1,
    "explanation": "Collective bargaining is the negotiation process between organised labour and employers."
  },
  {
    "id": "salary-determination-professionalism-7",
    "question": "Which action is clearly unethical?",
    "options": [
      "Reporting fraud",
      "Declaring a gift from a supplier",
      "Accepting a bribe to overlook poor quality",
      "Following company policy"
    ],
    "answer": 2,
    "explanation": "Bribery is unethical because it distorts fair business decision making."
  },
  {
    "id": "salary-determination-professionalism-8",
    "question": "Why do businesses value professional conduct?",
    "options": [
      "It damages trust",
      "It improves reputation and workplace relationships",
      "It replaces training needs completely",
      "It guarantees profit every day"
    ],
    "answer": 1,
    "explanation": "Professional conduct builds trust with clients, managers and colleagues."
  }
];

const bank: CapsItem[] = items.map((item) => ({
  prompt: item.question,
  options: item.options,
  answer: item.options[item.answer],
  explanation: item.explanation,
}));


const SalaryDeterminationProfessionalism = () => (
  <CapsSubjectTopic
    title="Salary Determination, Ethics and Professionalism"
    subtitle="Fair remuneration, ethical conduct and professional workplace behaviour"
    learnSteps={learnSteps}
    task="gr12-salary-determination-professionalism-t1"
    bank={bank}
    apiPath="/api/caps/bus"
    grade={12}
  />
);

export default SalaryDeterminationProfessionalism;
