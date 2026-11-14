import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { BusinessStudiesItem, LearnStep } from '../../_shared/types';

const learnSteps: LearnStep[] = [
  {
    image: { src: "/curriculum/grade11/bus/term4/revision-operations-exam-prep/diagram.webp", alt: "Revision: Operations and Exam Prep" },
    title: 'Revision checklist — operations and marketing',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Ensure you can describe and apply the <strong>operations and marketing functions</strong> in scenario-based questions.
        </p>
        <div className="bg-slate-50 p-5 rounded-xl text-left">
          <ul className="list-disc list-inside text-slate-700 space-y-2">
            <li>Describe the input-process-output model with examples</li>
            <li>Name and explain each of the 7 Ps of the marketing mix</li>
            <li>Distinguish between primary (field) and secondary (desk) research</li>
            <li>Explain how operations and marketing must work together</li>
            <li>Compare quality control (QC) and quality assurance (QA)</li>
            <li>Define TQM and its core principles</li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    title: 'Revision checklist — teamwork, ethics and creative thinking',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          These topics blend well in <strong>scenario questions</strong> — be ready to apply them to realistic business situations.
        </p>
        <div className="bg-amber-50 p-5 rounded-xl text-left">
          <ul className="list-disc list-inside text-slate-700 space-y-2">
            <li>Name and describe Tuckman's five team stages with examples</li>
            <li>Classify types of conflict and recommend appropriate resolution strategies</li>
            <li>Explain Lewin's three-stage change model (Unfreeze → Change → Refreeze)</li>
            <li>Distinguish ethical from unethical business conduct using examples</li>
            <li>Apply the problem-solving cycle step-by-step in a scenario</li>
            <li>Compare creative thinking techniques (brainstorming, mind mapping, lateral thinking)</li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    title: 'Revision checklist — human resources',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          HR is a popular exam topic — know the <strong>processes, legislation and terminology</strong> precisely.
        </p>
        <div className="bg-slate-50 p-5 rounded-xl text-left">
          <ul className="list-disc list-inside text-slate-700 space-y-2">
            <li>Compare internal and external recruitment with advantages and disadvantages</li>
            <li>Sequence the steps in the selection process correctly</li>
            <li>Distinguish between permanent, fixed-term and part-time contracts</li>
            <li>Describe the induction process and its purposes</li>
            <li>Explain four salary determination methods (job grading, market survey, BCEA, collective bargaining)</li>
            <li>Name key labour legislation: LRA, BCEA, EEA, SDA</li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    title: 'Long-response exam strategy',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Long-response questions (8–10 marks) reward <strong>structured, well-developed answers</strong>. Use these strategies to maximise marks.
        </p>
        <div className="grid gap-3 md:grid-cols-2 text-left">
          <div className="rounded-xl bg-blue-50 p-4">
            <strong className="text-blue-700">Structure your answer</strong>
            <p className="text-slate-600">Use headings or numbering. Each point should have a clear statement + explanation + example from the scenario.</p>
          </div>
          <div className="rounded-xl bg-green-50 p-4">
            <strong className="text-green-700">Use business terminology</strong>
            <p className="text-slate-600">Correctly using terms like "limited liability", "PESTLE", "TQM", "Tuckman" signals subject mastery.</p>
          </div>
          <div className="rounded-xl bg-yellow-50 p-4">
            <strong className="text-yellow-700">Link back to the scenario</strong>
            <p className="text-slate-600">Always refer back to the case study or scenario given — generic answers score fewer marks.</p>
          </div>
          <div className="rounded-xl bg-orange-50 p-4">
            <strong className="text-orange-700">Write a conclusion</strong>
            <p className="text-orange-700 font-semibold text-sm">For "evaluate" or "discuss" questions</p>
            <p className="text-slate-600 text-sm">Provide a final judgement that ties your points together.</p>
          </div>
        </div>
      </div>
    ),
  },
];

const bank: BusinessStudiesItem[] = [
  {
    prompt: 'In an exam scenario, a business is described as "inspecting 5% of finished units for defects." This BEST describes:',
    options: ['Quality assurance', 'Total Quality Management', 'Quality control', 'ISO certification'],
    answer: 'Quality control',
    explanation: 'Sampling or inspecting finished products for defects is quality control (QC) — a reactive approach that checks outputs rather than the process.',
  },
  {
    prompt: 'During a team meeting, two members argue about the best strategy to use. Using Tuckman\'s model, this team is in the:',
    options: ['Forming stage', 'Norming stage', 'Storming stage', 'Performing stage'],
    answer: 'Storming stage',
    explanation: 'Disagreements and conflict between team members are the hallmark of Tuckman\'s Storming stage.',
  },
  {
    prompt: 'A business\'s marketing team runs a "2-for-1" promotion. The operations team was not informed and runs out of stock. This illustrates:',
    options: ['A failure of quality control', 'Poor coordination between marketing and operations', 'A problem in the human resources function', 'A challenge from the PESTLE factors'],
    answer: 'Poor coordination between marketing and operations',
    explanation: 'Marketing promotions create demand that operations must fulfil — failure to coordinate leads to stockouts and customer dissatisfaction.',
  },
  {
    prompt: 'An HR manager says: "We place an advert on LinkedIn and use a recruitment agency." This describes:',
    options: ['Internal recruitment', 'External recruitment', 'Succession planning', 'Job grading'],
    answer: 'External recruitment',
    explanation: 'Advertising externally and using recruitment agencies are both external recruitment methods — sourcing candidates from outside the organisation.',
  },
  {
    prompt: 'The correct ORDER of Lewin\'s change management stages is:',
    options: [
      'Change → Unfreeze → Refreeze',
      'Unfreeze → Refreeze → Change',
      'Unfreeze → Change → Refreeze',
      'Refreeze → Change → Unfreeze',
    ],
    answer: 'Unfreeze → Change → Refreeze',
    explanation: 'Lewin\'s model flows logically: first prepare people (Unfreeze), then make the change, then embed the new behaviour (Refreeze).',
  },
  {
    prompt: 'A business plan\'s FINANCIAL section would MOST likely include:',
    options: ['The company mission statement', 'The target market description', 'Cash flow projections and start-up costs', 'The induction programme'],
    answer: 'Cash flow projections and start-up costs',
    explanation: 'The financial plan covers start-up costs, projected income, cash flow forecasts, and break-even analysis — the numerical viability of the venture.',
  },
  {
    prompt: 'When answering a long-response "evaluate" question, which element should ALWAYS appear at the end?',
    options: ['A definition of the key term', 'A list of advantages only', 'A conclusion or recommendation', 'A diagram'],
    answer: 'A conclusion or recommendation',
    explanation: 'Evaluate requires you to weigh up both sides and then give a final judgement — a conclusion that ties your argument together earns the final marks.',
  },
  {
    prompt: 'A business that pays a government official to speed up a permit application is committing:',
    options: ['Corporate social responsibility', 'Proactive strategy', 'Bribery and corruption', 'Collective bargaining'],
    answer: 'Bribery and corruption',
    explanation: 'Paying officials to gain an unfair advantage is bribery — unethical and illegal conduct that violates the company\'s code of ethics.',
  },
  {
    prompt: 'Which action verb requires you to show BOTH similarities and differences between two business concepts?',
    options: ['Define', 'List', 'Explain', 'Compare'],
    answer: 'Compare',
    explanation: '"Compare" requires you to identify both what two concepts have in common and how they differ — a structured side-by-side analysis earns the most marks.',
  },
];

const RevisionOperationsExamPrep = () => (
  <CapsSubjectTopic
    title="Revision: Operations and Exam Prep"
    subtitle="Final review of operations, roles and long-response strategies"
    learnSteps={learnSteps}
    task="gr11-revision-operations-exam-prep-t4"
    bank={bank}
    apiPath="/api/caps/bus"
  />
);

export default RevisionOperationsExamPrep;
