import CapsSubjectTopic from '@/components/CapsSubjectTopic';
import SwotMatrix from '@/components/subjects/SwotMatrix';
import type { CapsItem } from '@/components/CapsSubjectTopic';
import type { BusinessStudiesItem, LearnStep } from '../../_shared/types';

const learnSteps: LearnStep[] = [
  {
    image: { src: "/curriculum/grade12/bus/term3/environmental-social-responsibility/diagram.webp", alt: "SWOT Analysis: Sustainability Programme" },
    title: 'Environmental issues affect business',
    content: (
      <div className="space-y-6">
        <p className="text-lg leading-8 text-slate-600">Businesses can create pollution, waste and resource pressure, so environmental responsibility is part of long-term survival and stakeholder trust.</p>
        <SwotMatrix
          title="SWOT Analysis: Sustainability Programme"
          strengths={['Committed leadership', 'Recycling bins already in place', 'Positive community reputation']}
          weaknesses={['High energy use', 'Limited environmental data', 'Old delivery vehicles']}
          opportunities={['Solar investment', 'Green branding', 'Lower utility costs']}
          threats={['Environmental fines', 'Water shortages', 'Consumer backlash']}
        />
      </div>
    ),
  },
  {
    title: 'CSR and CSI are not the same',
    content: (
      <div className="space-y-6">
        <div className="grid gap-3 md:grid-cols-2">
          <div className="rounded-xl bg-blue-50 p-4">
            <strong className="text-blue-700">CSR</strong>
            <p className="text-slate-600 mt-1">The broader responsibility of the business to stakeholders through ethical, fair and responsible operations.</p>
          </div>
          <div className="rounded-xl bg-purple-50 p-4">
            <strong className="text-purple-700">CSI</strong>
            <p className="text-slate-600 mt-1">Specific community upliftment projects such as bursaries, clinics or school support.</p>
          </div>
        </div>
        <div className="rounded-xl bg-blue-50 border border-blue-200 p-4">
          <p className="font-semibold text-blue-800">CAPS terminology</p>
          <p className="text-slate-600 mt-1">CSR is strategic and continuous; CSI is often one visible part of that wider responsibility.</p>
        </div>
      </div>
    ),
  },
  {
    title: 'Sustainable business balances people, planet and profit',
    content: (
      <div className="space-y-6">
        <div className="grid gap-3 md:grid-cols-3">
          <div className="rounded-xl bg-green-50 p-4"><strong className="text-green-700">People</strong><p className="text-slate-600 mt-1">Fair treatment of workers, customers and communities.</p></div>
          <div className="rounded-xl bg-emerald-50 p-4"><strong className="text-emerald-700">Planet</strong><p className="text-slate-600 mt-1">Reduce waste, pollution and irresponsible resource use.</p></div>
          <div className="rounded-xl bg-amber-50 p-4"><strong className="text-amber-700">Profit</strong><p className="text-slate-600 mt-1">Remain financially sustainable while acting responsibly.</p></div>
        </div>
      </div>
    ),
  },
  {
    title: 'Recommend practical responsible actions',
    content: (
      <div className="space-y-6">
        <div className="rounded-xl bg-amber-50 border border-amber-200 p-4">
          <p className="font-semibold text-amber-800">Exam tip</p>
          <p className="text-slate-600 mt-1">Do not recommend vague kindness. Recommend specific actions such as recycling, ethical sourcing, energy saving or transparent reporting.</p>
        </div>
        <ul className="list-disc pl-6 space-y-2 text-slate-600">
          <li>Reduce electricity and water use.</li>
          <li>Source from responsible suppliers.</li>
          <li>Support local community programmes that fit business goals.</li>
        </ul>
      </div>
    ),
  },
];

const items: BusinessStudiesItem[] = [
  {
    "id": "environmental-social-responsibility-1",
    "question": "Which statement BEST describes corporate social responsibility (CSR)?",
    "options": [
      "A once-off donation only",
      "The broader responsibility of a business toward stakeholders",
      "A method of salary grading",
      "A form of ownership"
    ],
    "answer": 1,
    "explanation": "CSR is the wider responsibility of the business toward society, employees, customers and the environment."
  },
  {
    "id": "environmental-social-responsibility-2",
    "question": "Corporate social investment (CSI) usually refers to:",
    "options": [
      "Targeted community upliftment projects",
      "Daily production targets",
      "Shortlisting job applicants",
      "Private household spending"
    ],
    "answer": 0,
    "explanation": "CSI generally involves specific projects such as bursaries, clinics or school support."
  },
  {
    "id": "environmental-social-responsibility-3",
    "question": "Reducing electricity use and recycling waste are examples of:",
    "options": [
      "Environmental responsibility",
      "Recruitment",
      "Conflict escalation",
      "Job analysis"
    ],
    "answer": 0,
    "explanation": "These actions help reduce the business's environmental impact."
  },
  {
    "id": "environmental-social-responsibility-4",
    "question": "The triple bottom line focuses on:",
    "options": [
      "People, planet and profit",
      "Price, promotion and place",
      "Planning, organising and leading",
      "Risk, return and liquidity"
    ],
    "answer": 0,
    "explanation": "The triple bottom line balances social, environmental and financial performance."
  },
  {
    "id": "environmental-social-responsibility-5",
    "question": "Which is the BEST example of CSI?",
    "options": [
      "Introducing fair wages for staff",
      "Funding a community maths and science centre",
      "Checking product defects",
      "Training only senior managers"
    ],
    "answer": 1,
    "explanation": "A community education project is a clear example of corporate social investment."
  },
  {
    "id": "environmental-social-responsibility-6",
    "question": "One likely benefit of responsible environmental behaviour is:",
    "options": [
      "Damage to reputation",
      "Improved stakeholder trust",
      "Higher wastage",
      "Less compliance with laws"
    ],
    "answer": 1,
    "explanation": "Responsible behaviour can strengthen trust, reputation and sustainability."
  },
  {
    "id": "environmental-social-responsibility-7",
    "question": "Which stakeholder is most directly affected by toxic waste dumped by a factory?",
    "options": [
      "The local community",
      "Only shareholders",
      "Only the receptionist",
      "Only suppliers"
    ],
    "answer": 0,
    "explanation": "The local community is directly exposed to the environmental harm."
  },
  {
    "id": "environmental-social-responsibility-8",
    "question": "A sustainable sourcing policy would MOST likely require the business to:",
    "options": [
      "Buy from any supplier regardless of ethics",
      "Choose suppliers with responsible environmental practices",
      "Ignore packaging waste",
      "Stop all community involvement"
    ],
    "answer": 1,
    "explanation": "Sustainable sourcing considers ethical and environmental standards in the supply chain."
  }
];

const bank: CapsItem[] = items.map((item) => ({
  prompt: item.question,
  options: item.options,
  answer: item.options[item.answer],
  explanation: item.explanation,
}));


const EnvironmentalSocialResponsibility = () => (
  <CapsSubjectTopic
    title="Environmental and Social Responsibility"
    subtitle="Environmental issues, CSR, CSI and sustainable business decisions"
    learnSteps={learnSteps}
    task="gr12-environmental-social-responsibility-t3"
    bank={bank}
    apiPath="/api/caps/bus"
    grade={12}
  />
);

export default EnvironmentalSocialResponsibility;
