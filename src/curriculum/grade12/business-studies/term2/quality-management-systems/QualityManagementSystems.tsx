import CapsSubjectTopic from '@/components/CapsSubjectTopic';
import SwotMatrix from '@/components/subjects/SwotMatrix';
import type { CapsItem } from '@/components/CapsSubjectTopic';
import type { BusinessStudiesItem, LearnStep } from '../../_shared/types';

const learnSteps: LearnStep[] = [
  {
    image: { src: "/curriculum/grade12/bus/term2/quality-management-systems/diagram.webp", alt: "SWOT Analysis: Quality Improvement Plan" },
    title: 'Quality means meeting expectations',
    content: (
      <div className="space-y-6">
        <div className="rounded-xl bg-blue-50 border border-blue-200 p-4">
          <p className="font-semibold text-blue-800">Key Term: Quality</p>
          <p className="text-slate-600 mt-1">The degree to which a product or service meets customer needs, standards and expectations consistently.</p>
        </div>
        <p className="text-lg leading-8 text-slate-600">Quality matters in both manufacturing and service businesses because it affects reputation, repeat business and cost control.</p>
      </div>
    ),
  },
  {
    title: 'Quality control versus quality assurance',
    content: (
      <div className="space-y-6">
        <div className="grid gap-3 md:grid-cols-2">
          <div className="rounded-xl bg-green-50 p-4">
            <strong className="text-green-700">Quality control</strong>
            <p className="text-slate-600 mt-1">Checks the final output and detects defects after work is done.</p>
          </div>
          <div className="rounded-xl bg-purple-50 p-4">
            <strong className="text-purple-700">Quality assurance</strong>
            <p className="text-slate-600 mt-1">Builds quality into the process to prevent defects before they happen.</p>
          </div>
        </div>
        <SwotMatrix
          title="SWOT Analysis: Quality Improvement Plan"
          strengths={['Committed supervisor', 'Clear standards', 'Regular customer feedback']}
          weaknesses={['Old machinery', 'Inconsistent training', 'Manual record keeping']}
          opportunities={['ISO 9001 systems', 'Staff development', 'Waste reduction']}
          threats={['Customer complaints', 'Rework costs', 'Competitors with better quality']}
        />
      </div>
    ),
  },
  {
    title: 'Quality management and continuous improvement',
    content: (
      <div className="space-y-6">
        <div className="grid gap-3 md:grid-cols-3">
          <div className="rounded-xl border border-slate-200 p-4"><strong className="text-slate-800">Policies</strong><p className="text-slate-600 mt-1">Set clear quality standards and responsibilities.</p></div>
          <div className="rounded-xl border border-slate-200 p-4"><strong className="text-slate-800">Processes</strong><p className="text-slate-600 mt-1">Use checklists, training and measurement to reduce errors.</p></div>
          <div className="rounded-xl border border-slate-200 p-4"><strong className="text-slate-800">People</strong><p className="text-slate-600 mt-1">Everyone takes ownership of continuous improvement.</p></div>
        </div>
      </div>
    ),
  },
  {
    title: 'Quality circles involve employees',
    content: (
      <div className="space-y-6">
        <div className="rounded-xl bg-amber-50 border border-amber-200 p-4">
          <p className="font-semibold text-amber-800">Exam tip</p>
          <p className="text-slate-600 mt-1">Mention both operational gains and people benefits: quality circles improve problem solving, reduce waste and raise morale.</p>
        </div>
        <ul className="list-disc pl-6 space-y-2 text-slate-600">
          <li>Small groups meet regularly.</li>
          <li>They identify causes of workplace problems.</li>
          <li>They suggest practical solutions and monitor improvement.</li>
        </ul>
      </div>
    ),
  },
];

const items: BusinessStudiesItem[] = [
  {
    "id": "quality-management-systems-1",
    "question": "Inspecting finished products to find defects is called:",
    "options": [
      "Quality assurance",
      "Quality control",
      "Induction",
      "Benchmarking only"
    ],
    "answer": 1,
    "explanation": "Quality control checks outputs after production or service delivery."
  },
  {
    "id": "quality-management-systems-2",
    "question": "Quality assurance mainly aims to:",
    "options": [
      "Prevent defects during the process",
      "Ignore customer needs",
      "Cut all training costs",
      "Replace leadership"
    ],
    "answer": 0,
    "explanation": "Quality assurance focuses on building quality into the process to prevent problems."
  },
  {
    "id": "quality-management-systems-3",
    "question": "A quality circle is best described as:",
    "options": [
      "A group of customers who protest",
      "A small employee group solving quality problems",
      "A machine used in production",
      "A once-off job interview panel"
    ],
    "answer": 1,
    "explanation": "Quality circles are small groups of employees who meet to improve quality and processes."
  },
  {
    "id": "quality-management-systems-4",
    "question": "Which statement about total quality management is CORRECT?",
    "options": [
      "Only the inspector is responsible for quality",
      "Quality is everyone's responsibility",
      "Quality matters only in factories",
      "Customer needs are unimportant"
    ],
    "answer": 1,
    "explanation": "TQM requires organisation-wide commitment to continuous improvement."
  },
  {
    "id": "quality-management-systems-5",
    "question": "ISO 9001 is mainly associated with:",
    "options": [
      "A quality management standard",
      "A marketing campaign",
      "A salary scale",
      "A labour union"
    ],
    "answer": 0,
    "explanation": "ISO 9001 is an international standard for quality management systems."
  },
  {
    "id": "quality-management-systems-6",
    "question": "Which benefit is commonly linked to quality circles?",
    "options": [
      "Lower employee involvement",
      "Improved morale and problem solving",
      "No need for training",
      "Automatic profit guarantees"
    ],
    "answer": 1,
    "explanation": "Quality circles can improve morale because staff help solve real workplace problems."
  },
  {
    "id": "quality-management-systems-7",
    "question": "Checking a meal before serving it to a customer is an example of:",
    "options": [
      "Quality control",
      "PESTLE analysis",
      "Recruitment",
      "BBBEE compliance"
    ],
    "answer": 0,
    "explanation": "The final inspection of the output is a quality-control activity."
  },
  {
    "id": "quality-management-systems-8",
    "question": "Continuous improvement means a business should:",
    "options": [
      "Stop reviewing processes",
      "Keep refining systems and reducing waste",
      "Ignore customer complaints",
      "Use only one idea forever"
    ],
    "answer": 1,
    "explanation": "Continuous improvement is about ongoing refinement of processes and service."
  }
];

const bank: CapsItem[] = items.map((item) => ({
  prompt: item.question,
  options: item.options,
  answer: item.options[item.answer],
  explanation: item.explanation,
}));


const QualityManagementSystems = () => (
  <CapsSubjectTopic
    title="Quality Management Systems"
    subtitle="Quality concepts, quality control, quality assurance and quality circles"
    learnSteps={learnSteps}
    task="gr12-quality-management-systems-t2"
    bank={bank}
    apiPath="/api/caps/bus"
    grade={12}
  />
);

export default QualityManagementSystems;
