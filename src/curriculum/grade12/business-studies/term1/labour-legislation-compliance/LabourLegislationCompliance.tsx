import CapsSubjectTopic from '@/components/CapsSubjectTopic';
import SwotMatrix from '@/components/subjects/SwotMatrix';
import type { CapsItem } from '@/components/CapsSubjectTopic';
import type { BusinessStudiesItem, LearnStep } from '../../_shared/types';
import { Mistake as GapMistake, Rule as GapRule, Worked as GapWorked } from '../../../../../components/subjects/lesson/LessonBlocks';

const learnSteps: LearnStep[] = [
  {
    title: 'Skills Development Act and workplace training',
    content: (
      <div className="space-y-6">
        <div className="rounded-xl bg-blue-50 border border-blue-200 p-4">
          <p className="font-semibold text-blue-800">Key Term: Skills Development Act</p>
          <p className="text-slate-600 mt-1">Encourages training, learnerships and workplace skills planning so that productivity and employability improve.</p>
        </div>
        <div className="grid gap-3 md:grid-cols-3">
          <div className="rounded-xl bg-emerald-50 p-4"><strong className="text-emerald-700">SETAs</strong><p className="text-slate-600 mt-1">Coordinate sector skills planning and training support.</p></div>
          <div className="rounded-xl bg-violet-50 p-4"><strong className="text-violet-700">Learnerships</strong><p className="text-slate-600 mt-1">Blend structured learning with workplace practice.</p></div>
          <div className="rounded-xl bg-amber-50 p-4"><strong className="text-amber-700">Workplace skills plans</strong><p className="text-slate-600 mt-1">Show how the business will address skill gaps.</p></div>
        </div>
      </div>
    ),
  },
  {
    title: 'Employment Equity and fair treatment',
    content: (
      <div className="space-y-6">
        <p className="text-lg leading-8 text-slate-600">
          The Employment Equity Act aims to remove unfair discrimination and promote fair representation of designated groups.
        </p>
        <div className="grid gap-3 md:grid-cols-2">
          <div className="rounded-xl bg-green-50 p-4">
            <strong className="text-green-700">Compliant practice</strong>
            <p className="text-slate-600 mt-1">Fair recruitment, accessible workplaces, diversity training and monitored equity targets.</p>
          </div>
          <div className="rounded-xl bg-rose-50 p-4">
            <strong className="text-rose-700">Non-compliant practice</strong>
            <p className="text-slate-600 mt-1">Discrimination, exclusion, biased promotion and ignoring complaints.</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'BBBEE as transformation strategy',
    content: (
      <div className="space-y-6">
        <div className="rounded-xl bg-indigo-50 border border-indigo-200 p-4">
          <p className="font-semibold text-indigo-800">CAPS terminology</p>
          <p className="text-slate-600 mt-1">BBBEE focuses on ownership, management control, skills development, enterprise and supplier development, and socio-economic development.</p>
        </div>
        <SwotMatrix
          title="SWOT Analysis: BBBEE Improvement Plan"
          strengths={['Committed management', 'Existing training budget', 'Local supplier relationships']}
          weaknesses={['Weak scorecard knowledge', 'Limited ownership diversity', 'Poor compliance tracking']}
          opportunities={['Preferential procurement access', 'Supplier-development partnerships', 'Better brand reputation']}
          threats={['Lost tenders', 'Compliance penalties', 'Negative public perception']}
        />
      </div>
    ),
  },
  {
    title: 'Applying legislation to scenarios',
    content: (
      <div className="space-y-6">
        <div className="rounded-xl bg-amber-50 border border-amber-200 p-4">
          <p className="font-semibold text-amber-800">Exam tip</p>
          <p className="text-slate-600 mt-1">Look for clue words. Training suggests the Skills Development Act, discrimination suggests Employment Equity, and ownership or supplier development suggests BBBEE.</p>
        </div>
        <ul className="list-disc pl-6 space-y-2 text-slate-600">
          <li>Name the correct Act or framework.</li>
          <li>Quote the clue from the scenario.</li>
          <li>Recommend one practical compliance action.</li>
        </ul>
      </div>
    ),
  },
  {
    title: "B-BBEE and the main labour laws",
    content: (
      <div className="space-y-4">
        <GapRule>{"Broad-based black economic empowerment is a policy to bring black South Africans fully into the economy through ownership, management and skills. The main labour laws are the LRA, BCEA, EEA, Skills Development Act, UIF and COIDA."}</GapRule>
        <GapWorked title={"Match the law to its purpose"} steps={["LRA: unions, strikes, fair dismissal, with disputes going to the CCMA.", "BCEA: working hours, leave and notice.", "EEA: ends unfair discrimination and promotes equity for designated groups.", "B-BBEE: ownership, management control and skills development."]} />
        <GapMistake>{"Mixing up the laws."}</GapMistake>
      </div>
    ),
  },
];

const items: BusinessStudiesItem[] = [
  {
    "id": "labour-legislation-compliance-1",
    "question": "Which South African law mainly encourages businesses to improve employee skills through training and development?",
    "options": [
      "Skills Development Act",
      "Consumer Protection Act",
      "National Credit Act",
      "Companies Act"
    ],
    "answer": 0,
    "explanation": "The Skills Development Act promotes education, training and better skills in the workplace."
  },
  {
    "id": "labour-legislation-compliance-2",
    "question": "The main purpose of the Employment Equity Act is to:",
    "options": ['Increase the advertising budgets of large firms in the country', 'Eliminate unfair discrimination and improve equity', 'Control the quality of products', 'Set the exchange rate for the rand'],
    "answer": 1,
    "explanation": "The Employment Equity Act promotes equal opportunity and fair representation in the workplace."
  },
  {
    "id": "labour-legislation-compliance-3",
    "question": "BBBEE mainly aims to:",
    "options": ['Reduce the company taxes paid by large firms', 'Increase black economic participation', 'Replace the labour laws of the country', 'Ban foreign investment in local firms'],
    "answer": 1,
    "explanation": "BBBEE focuses on broadening economic participation for black South Africans."
  },
  {
    "id": "labour-legislation-compliance-4",
    "question": "A company pays for learnerships and staff bursaries. This is most directly linked to:",
    "options": [
      "BBBEE ownership",
      "Skills development",
      "Consumer complaints",
      "Quality control"
    ],
    "answer": 1,
    "explanation": "Learnerships and bursaries are practical ways of improving employee skills and development."
  },
  {
    "id": "labour-legislation-compliance-5",
    "question": "Which workplace action BEST supports Employment Equity compliance?",
    "options": ['Ignoring discrimination complaints made by staff members at work', 'Using family members in recruitment', 'Setting fair representation targets and monitoring progress', 'Refusing to train new staff members'],
    "answer": 2,
    "explanation": "Employment equity requires fair representation and active steps to remove unfair barriers."
  },
  {
    "id": "labour-legislation-compliance-6",
    "question": "Preferential procurement is commonly associated with which legislation or framework?",
    "options": [
      "Skills Development Act",
      "BBBEE",
      "Basic Conditions of Employment Act only",
      "National Qualifications Framework"
    ],
    "answer": 1,
    "explanation": "BBBEE scorecards often include procurement from compliant suppliers."
  },
  {
    "id": "labour-legislation-compliance-7",
    "question": "If a business unfairly excludes qualified applicants because of disability, it is most likely violating the:",
    "options": [
      "Employment Equity Act",
      "Skills Development Act",
      "Public Finance Management Act",
      "National Road Traffic Act"
    ],
    "answer": 0,
    "explanation": "Unfair discrimination in employment is addressed by the Employment Equity Act."
  },
  {
    "id": "labour-legislation-compliance-8",
    "question": "Which clue in a case study would MOST likely point to BBBEE rather than the Skills Development Act?",
    "options": ['The firm introduces workplace coaching for its junior staff members', 'The firm registers a learnership', 'The firm improves supplier-development and ownership targets', 'The firm sends workers on a short course'],
    "answer": 2,
    "explanation": "Ownership and supplier development are key BBBEE indicators, not just general training activities."
  }
];

const bank: CapsItem[] = items.map((item) => ({
  prompt: item.question,
  options: item.options,
  answer: item.options[item.answer],
  explanation: item.explanation,
}));


const LabourLegislationCompliance = () => (
  <CapsSubjectTopic
    title="Labour Legislation and Compliance"
    subtitle="Skills Development, Employment Equity and BBBEE in workplace practice"
    learnSteps={learnSteps}
    task="gr12-labour-legislation-compliance-t1"
    bank={bank}
    apiPath="/api/caps/bus"
    grade={12}
  />
);

export default LabourLegislationCompliance;
