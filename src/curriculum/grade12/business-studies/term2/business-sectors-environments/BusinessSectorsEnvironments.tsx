import CapsSubjectTopic from '@/components/CapsSubjectTopic';
import SwotMatrix from '@/components/subjects/SwotMatrix';
import type { CapsItem } from '@/components/CapsSubjectTopic';
import type { BusinessStudiesItem, LearnStep } from '../../_shared/types';

const learnSteps: LearnStep[] = [
  {
    title: 'Understand the three sectors',
    content: (
      <div className="space-y-6">
        <div className="grid gap-3 md:grid-cols-3">
          <div className="rounded-xl bg-emerald-50 p-4"><strong className="text-emerald-700">Primary</strong><p className="text-slate-600 mt-1">Extracts raw materials such as mining, fishing and farming.</p></div>
          <div className="rounded-xl bg-blue-50 p-4"><strong className="text-blue-700">Secondary</strong><p className="text-slate-600 mt-1">Processes raw materials into finished or semi-finished goods.</p></div>
          <div className="rounded-xl bg-purple-50 p-4"><strong className="text-purple-700">Tertiary</strong><p className="text-slate-600 mt-1">Provides services such as banking, transport and retail.</p></div>
        </div>
        <div className="rounded-xl bg-blue-50 border border-blue-200 p-4">
          <p className="font-semibold text-blue-800">CAPS focus</p>
          <p className="text-slate-600 mt-1">Always classify the business correctly first, because the sector influences risk, regulation and opportunities.</p>
        </div>
      </div>
    ),
  },
  {
    title: 'Micro, market and macro environments',
    content: (
      <div className="space-y-6">
        <div className="grid gap-3 md:grid-cols-3">
          <div className="rounded-xl border border-slate-200 p-4"><strong className="text-slate-800">Micro</strong><p className="text-slate-600 mt-1">Internal factors like staff, management, finances and resources.</p></div>
          <div className="rounded-xl border border-slate-200 p-4"><strong className="text-slate-800">Market</strong><p className="text-slate-600 mt-1">Customers, suppliers, competitors and intermediaries.</p></div>
          <div className="rounded-xl border border-slate-200 p-4"><strong className="text-slate-800">Macro</strong><p className="text-slate-600 mt-1">Broad external forces such as legislation, technology and the economy.</p></div>
        </div>
        <SwotMatrix
          title="SWOT Analysis: Small Food Manufacturer"
          strengths={['Local recipes', 'Flexible production runs', 'Strong founder commitment']}
          weaknesses={['Limited machinery', 'Few suppliers', 'Weak online marketing']}
          opportunities={['School feeding tenders', 'Retail partnerships', 'Product innovation']}
          threats={['Input price inflation', 'New regulations', 'Large national brands']}
        />
      </div>
    ),
  },
  {
    title: 'Sector pressures differ',
    content: (
      <div className="space-y-6">
        <p className="text-lg leading-8 text-slate-600">
          The same macro issue can affect sectors differently. Drought may hurt farming first, while load-shedding may hit manufacturing output and service delivery in shops or banks.
        </p>
        <ul className="list-disc pl-6 space-y-2 text-slate-600">
          <li>Primary sector: weather, environmental laws and resource depletion.</li>
          <li>Secondary sector: machinery costs, energy supply and production efficiency.</li>
          <li>Tertiary sector: customer experience, digital platforms and service quality.</li>
        </ul>
      </div>
    ),
  },
  {
    title: 'Use environment analysis to recommend action',
    content: (
      <div className="space-y-6">
        <div className="rounded-xl bg-amber-50 border border-amber-200 p-4">
          <p className="font-semibold text-amber-800">Exam tip</p>
          <p className="text-slate-600 mt-1">Identify the sector, identify the environment causing the pressure, then recommend one realistic business response.</p>
        </div>
        <div className="grid gap-3 md:grid-cols-2">
          <div className="rounded-xl bg-green-50 p-4"><strong className="text-green-700">Problem</strong><p className="text-slate-600 mt-1">Supplier delays in the market environment.</p></div>
          <div className="rounded-xl bg-purple-50 p-4"><strong className="text-purple-700">Response</strong><p className="text-slate-600 mt-1">Diversify suppliers, keep buffer stock and improve supplier contracts.</p></div>
        </div>
      </div>
    ),
  },
];

const items: BusinessStudiesItem[] = [
  {
    "id": "business-sectors-environments-1",
    "question": "A mining company is part of the ______ sector.",
    "options": [
      "Primary",
      "Secondary",
      "Tertiary",
      "Informal retail"
    ],
    "answer": 0,
    "explanation": "Mining extracts raw materials from nature, so it belongs to the primary sector."
  },
  {
    "id": "business-sectors-environments-2",
    "question": "A factory that turns steel into car parts operates in the:",
    "options": [
      "Primary sector",
      "Secondary sector",
      "Tertiary sector",
      "Public relations sector"
    ],
    "answer": 1,
    "explanation": "Processing raw materials into finished or semi-finished goods is a secondary-sector activity."
  },
  {
    "id": "business-sectors-environments-3",
    "question": "A bank mainly belongs to the:",
    "options": [
      "Primary sector",
      "Secondary sector",
      "Tertiary sector",
      "Agricultural sector"
    ],
    "answer": 2,
    "explanation": "Banks provide services, so they are part of the tertiary sector."
  },
  {
    "id": "business-sectors-environments-4",
    "question": "Which environment includes suppliers and customers?",
    "options": [
      "Micro environment",
      "Market environment",
      "Macro environment",
      "Internal environment only"
    ],
    "answer": 1,
    "explanation": "Suppliers and customers are part of the market environment."
  },
  {
    "id": "business-sectors-environments-5",
    "question": "A new tax law is an example of a factor in the:",
    "options": [
      "Micro environment",
      "Market environment",
      "Macro environment",
      "Production environment"
    ],
    "answer": 2,
    "explanation": "Legislation is a macro-environment factor outside the direct control of the business."
  },
  {
    "id": "business-sectors-environments-6",
    "question": "Which environment does the business control most directly?",
    "options": [
      "Macro environment",
      "Market environment",
      "Micro environment",
      "Global environment"
    ],
    "answer": 2,
    "explanation": "The micro environment includes internal factors the business can control directly."
  },
  {
    "id": "business-sectors-environments-7",
    "question": "Competitors are usually analysed as part of the:",
    "options": [
      "Market environment",
      "Micro environment",
      "Macro environment",
      "Skills environment"
    ],
    "answer": 0,
    "explanation": "Competitors operate in the market environment alongside customers and suppliers."
  },
  {
    "id": "business-sectors-environments-8",
    "question": "Why should a business analyse its environments regularly?",
    "options": [
      "To remove the risks the business faces for good",
      "To identify threats and opportunities early",
      "To avoid all planning",
      "To stop communicating with staff"
    ],
    "answer": 1,
    "explanation": "Regular analysis helps the business respond early to external threats and opportunities."
  }
];

const bank: CapsItem[] = items.map((item) => ({
  prompt: item.question,
  options: item.options,
  answer: item.options[item.answer],
  explanation: item.explanation,
}));


const BusinessSectorsEnvironments = () => (
  <CapsSubjectTopic
    title="Business Sectors and Environments"
    subtitle="Primary, secondary and tertiary sectors within changing business environments"
    learnSteps={learnSteps}
    task="gr12-business-sectors-environments-t2"
    bank={bank}
    apiPath="/api/caps/bus"
    grade={12}
  />
);

export default BusinessSectorsEnvironments;
