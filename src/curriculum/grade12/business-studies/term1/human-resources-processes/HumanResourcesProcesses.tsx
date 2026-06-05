import CapsSubjectTopic from '@/components/CapsSubjectTopic';
import SwotMatrix from '@/components/subjects/SwotMatrix';
import type { CapsItem } from '@/components/CapsSubjectTopic';
import type { BusinessStudiesItem, LearnStep } from '../../_shared/types';

const learnSteps: LearnStep[] = [
  {
    title: 'Start with job analysis',
    content: (
      <div className="space-y-6">
        <p className="text-lg leading-8 text-slate-600">
          Human resource planning begins by defining the job clearly so the business recruits the right person for the right post.
        </p>
        <div className="grid gap-3 md:grid-cols-2">
          <div className="rounded-xl bg-blue-50 p-4">
            <strong className="text-blue-700">Job description</strong>
            <p className="text-slate-600 mt-1">Lists duties, responsibilities, working conditions and reporting lines.</p>
          </div>
          <div className="rounded-xl bg-purple-50 p-4">
            <strong className="text-purple-700">Job specification</strong>
            <p className="text-slate-600 mt-1">Lists the qualifications, skills, experience and personal qualities needed.</p>
          </div>
        </div>
        <div className="rounded-xl bg-amber-50 border border-amber-200 p-4">
          <p className="font-semibold text-amber-800">Exam tip</p>
          <p className="text-slate-600 mt-1">If the question asks what the worker will do, think job description. If it asks what the candidate must have, think job specification.</p>
        </div>
      </div>
    ),
  },
  {
    title: 'Recruitment attracts suitable applicants',
    content: (
      <div className="space-y-6">
        <div className="grid gap-3 md:grid-cols-2">
          <div className="rounded-xl bg-green-50 p-4">
            <strong className="text-green-700">Internal recruitment</strong>
            <p className="text-slate-600 mt-1">Boosts morale, is faster and uses known employees.</p>
          </div>
          <div className="rounded-xl bg-fuchsia-50 p-4">
            <strong className="text-fuchsia-700">External recruitment</strong>
            <p className="text-slate-600 mt-1">Brings fresh ideas, wider choice and scarce skills into the business.</p>
          </div>
        </div>
        <SwotMatrix
          title="SWOT Analysis: Recruitment Drive for a Growing Bakery"
          strengths={['Strong local brand', 'Friendly team culture', 'Clear job roles']}
          weaknesses={['Limited advertising budget', 'Few HR staff', 'Slow screening process']}
          opportunities={['Local college graduates', 'Social media job posts', 'Employee referral programme']}
          threats={['Competitors offering higher pay', 'Skill shortages', 'Late applications']}
        />
      </div>
    ),
  },
  {
    title: 'Selection narrows down the best candidate',
    content: (
      <div className="space-y-6">
        <div className="rounded-xl bg-blue-50 border border-blue-200 p-4">
          <p className="font-semibold text-blue-800">Key Term: Selection</p>
          <p className="text-slate-600 mt-1">The process of screening applicants and choosing the most suitable person for the vacancy.</p>
        </div>
        <ol className="list-decimal pl-6 space-y-2 text-slate-600">
          <li>Screen applications against the job specification.</li>
          <li>Shortlist the strongest candidates.</li>
          <li>Interview, test and check references fairly.</li>
          <li>Make the appointment using objective evidence.</li>
        </ol>
      </div>
    ),
  },
  {
    title: 'Placement and induction support retention',
    content: (
      <div className="space-y-6">
        <p className="text-lg leading-8 text-slate-600">
          Placement matches the person to a suitable post, while induction helps the new employee settle into the workplace quickly and confidently.
        </p>
        <div className="grid gap-3 md:grid-cols-3">
          <div className="rounded-xl border border-slate-200 p-4 text-sm text-slate-600"><strong className="text-slate-800">Policies</strong><p className="mt-1">Explain rules, leave, discipline and communication channels.</p></div>
          <div className="rounded-xl border border-slate-200 p-4 text-sm text-slate-600"><strong className="text-slate-800">People</strong><p className="mt-1">Introduce supervisors, co-workers and support staff.</p></div>
          <div className="rounded-xl border border-slate-200 p-4 text-sm text-slate-600"><strong className="text-slate-800">Performance</strong><p className="mt-1">Clarify duties, targets, safety rules and expectations.</p></div>
        </div>
      </div>
    ),
  },
];

const items: BusinessStudiesItem[] = [
  {
    "id": "human-resources-processes-1",
    "question": "Which HR document mainly lists the duties and responsibilities of a vacancy?",
    "options": [
      "Job description",
      "Job specification",
      "Employment contract",
      "Curriculum vitae"
    ],
    "answer": 0,
    "explanation": "A job description explains what the worker will do in the post."
  },
  {
    "id": "human-resources-processes-2",
    "question": "A job specification focuses mainly on the applicant's:",
    "options": [
      "Working hours only",
      "Personal qualifications and skills",
      "Salary advice",
      "Disciplinary history only"
    ],
    "answer": 1,
    "explanation": "A job specification describes the qualities, qualifications and competencies needed."
  },
  {
    "id": "human-resources-processes-3",
    "question": "When a business advertises a post to existing employees first, it is using:",
    "options": [
      "External recruitment",
      "Internal recruitment",
      "Induction",
      "Placement"
    ],
    "answer": 1,
    "explanation": "Internal recruitment looks for candidates from within the business."
  },
  {
    "id": "human-resources-processes-4",
    "question": "Which step usually happens AFTER applications have been screened?",
    "options": [
      "Shortlisting candidates",
      "Drawing up a job description",
      "Conducting induction",
      "Paying a salary"
    ],
    "answer": 0,
    "explanation": "After screening the applications, the business shortlists the most suitable candidates."
  },
  {
    "id": "human-resources-processes-5",
    "question": "The main purpose of an interview is to:",
    "options": [
      "Order office furniture",
      "Assess the suitability of shortlisted applicants",
      "Register the business for VAT",
      "Train all employees at once"
    ],
    "answer": 1,
    "explanation": "Interviews help the business judge whether shortlisted candidates fit the post."
  },
  {
    "id": "human-resources-processes-6",
    "question": "Placement means that the employee is:",
    "options": [
      "Dismissed after probation",
      "Matched to the most suitable job",
      "Sent to an outside supplier",
      "Promoted automatically"
    ],
    "answer": 1,
    "explanation": "Placement involves assigning the new employee to the appropriate position."
  },
  {
    "id": "human-resources-processes-7",
    "question": "Why may a business choose external recruitment?",
    "options": [
      "To avoid all paperwork",
      "To bring in fresh ideas and scarce skills",
      "To skip interviews",
      "To reduce all training needs to zero"
    ],
    "answer": 1,
    "explanation": "External recruitment can widen the pool and introduce new expertise."
  },
  {
    "id": "human-resources-processes-8",
    "question": "Which statement about induction is CORRECT?",
    "options": [
      "It happens before shortlisting",
      "It introduces the new employee to the workplace",
      "It replaces the employment contract",
      "It is only needed for managers"
    ],
    "answer": 1,
    "explanation": "Induction helps new workers understand the workplace, its rules and expectations."
  }
];

const bank: CapsItem[] = items.map((item) => ({
  prompt: item.question,
  options: item.options,
  answer: item.options[item.answer],
  explanation: item.explanation,
}));


const HumanResourcesProcesses = () => (
  <CapsSubjectTopic
    title="Human Resources Processes"
    subtitle="Recruitment, selection, placement and induction in CAPS workplace scenarios"
    learnSteps={learnSteps}
    task="gr12-human-resources-processes-t1"
    bank={bank}
    apiPath="/api/caps/bus"
    grade={12}
  />
);

export default HumanResourcesProcesses;
