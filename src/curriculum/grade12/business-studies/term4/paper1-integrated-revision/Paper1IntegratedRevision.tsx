import CapsSubjectTopic from '@/components/CapsSubjectTopic';
import SwotMatrix from '@/components/subjects/SwotMatrix';
import type { CapsItem } from '@/components/CapsSubjectTopic';
import type { BusinessStudiesItem, LearnStep } from '../../_shared/types';

const learnSteps: LearnStep[] = [
  {
    title: 'Know what Paper 1 usually covers',
    content: (
      <div className="space-y-6">
        <div className="rounded-xl bg-blue-50 border border-blue-200 p-4">
          <p className="font-semibold text-blue-800">Paper 1 focus</p>
          <p className="text-slate-600 mt-1">Paper 1 usually combines business environments and business operations, so learners should revise legislation, HR, leadership, quality and strategies together.</p>
        </div>
        <div className="grid gap-3 md:grid-cols-2">
          <div className="rounded-xl bg-green-50 p-4"><strong className="text-green-700">Environments</strong><p className="text-slate-600 mt-1">PESTLE, sectors, legislation and strategic responses.</p></div>
          <div className="rounded-xl bg-purple-50 p-4"><strong className="text-purple-700">Operations</strong><p className="text-slate-600 mt-1">HR processes, professionalism, quality and management functions.</p></div>
        </div>
      </div>
    ),
  },
  {
    title: 'Revise by topic connections',
    content: (
      <div className="space-y-6">
        <div className="grid gap-3 md:grid-cols-2">
          <div className="rounded-xl border border-slate-200 p-4"><strong className="text-slate-800">Legislation + HR</strong><p className="text-slate-600 mt-1">Recruitment, equity and training often appear together.</p></div>
          <div className="rounded-xl border border-slate-200 p-4"><strong className="text-slate-800">Quality + leadership</strong><p className="text-slate-600 mt-1">Leaders influence quality culture and employee involvement.</p></div>
          <div className="rounded-xl border border-slate-200 p-4"><strong className="text-slate-800">Strategy + environment</strong><p className="text-slate-600 mt-1">External threats need planned business responses.</p></div>
          <div className="rounded-xl border border-slate-200 p-4"><strong className="text-slate-800">Ethics + professionalism</strong><p className="text-slate-600 mt-1">Case studies often test conduct and compliance together.</p></div>
        </div>
      </div>
    ),
  },
  {
    title: 'Use past papers under timed conditions',
    content: (
      <div className="space-y-6">
        <div className="rounded-xl bg-amber-50 border border-amber-200 p-4">
          <p className="font-semibold text-amber-800">Exam tip</p>
          <p className="text-slate-600 mt-1">Past papers reveal repeated command words, favourite topics and where you lose time or application marks.</p>
        </div>
        <SwotMatrix
          title="SWOT Analysis: Paper 1 Revision Plan"
          strengths={['Topic summaries complete', 'Past papers collected', 'Clear study routine']}
          weaknesses={['Weak timing', 'Some confusion between similar concepts', 'Limited feedback on mistakes']}
          opportunities={['Timed mock sessions', 'Teacher memo discussions', 'Comparison tables']}
          threats={['Panic in mixed case studies', 'Skipping weak topics', 'Rote learning only']}
        />
      </div>
    ),
  },
  {
    title: 'Answer integrated case studies actively',
    content: (
      <div className="space-y-6">
        <ol className="list-decimal pl-6 space-y-2 text-slate-600">
          <li>Underline key facts in the source.</li>
          <li>Identify the topic or topics being tested.</li>
          <li>Match the command word to the answer style.</li>
          <li>Use the mark allocation to shape the depth of the answer.</li>
        </ol>
      </div>
    ),
  },
];

const items: BusinessStudiesItem[] = [
  {
    "id": "paper1-integrated-revision-1",
    "question": "Business Studies Paper 1 mainly focuses on:",
    "options": ['Business environments and operations', 'Geography maps and atlas work in the exam', 'Geography maps and atlas work', 'Computer coding and programming'],
    "answer": 0,
    "explanation": "Paper 1 usually covers business environments and business operations content."
  },
  {
    "id": "paper1-integrated-revision-2",
    "question": "An effective revision strategy is to:",
    "options": [
      "Revise only favourite topics",
      "Link related topics across the syllabus",
      "Avoid past papers",
      "Ignore weak areas"
    ],
    "answer": 1,
    "explanation": "Integrated revision helps learners apply related concepts in mixed questions."
  },
  {
    "id": "paper1-integrated-revision-3",
    "question": "Why should learners practise past papers under timed conditions?",
    "options": [
      "To memorise only one answer",
      "To improve exam technique and time use",
      "To avoid reading instructions",
      "To replace all studying"
    ],
    "answer": 1,
    "explanation": "Timed practice develops speed, confidence and realistic exam discipline."
  },
  {
    "id": "paper1-integrated-revision-4",
    "question": "In an integrated case study, the first useful step is to:",
    "options": [
      "Underline key facts and identify the topic",
      "Write the conclusion immediately",
      "Skip the source",
      "Change the question wording"
    ],
    "answer": 0,
    "explanation": "Identifying the facts and topic focus makes it easier to answer accurately."
  },
  {
    "id": "paper1-integrated-revision-5",
    "question": "If a question asks for legislation linked to a hiring scenario, you should:",
    "options": [
      "Answer with any topic you remember",
      "Connect the facts to the relevant labour law",
      "Ignore the scenario",
      "Write only definitions with no link"
    ],
    "answer": 1,
    "explanation": "Application marks come from matching the facts in the scenario to the correct legislation."
  },
  {
    "id": "paper1-integrated-revision-6",
    "question": "Which study tool is MOST useful for comparing similar topics such as QA and QC?",
    "options": [
      "A comparison table",
      "A random doodle only",
      "An empty page",
      "A calculator"
    ],
    "answer": 0,
    "explanation": "Comparison tables help learners distinguish similar concepts quickly."
  },
  {
    "id": "paper1-integrated-revision-7",
    "question": "A common mistake in Paper 1 revision is to:",
    "options": ['Practise application questions using different case studies and sources', 'Memorise definitions without understanding use', 'Review command words', 'Analyse mistakes after a test'],
    "answer": 1,
    "explanation": "Paper 1 requires application, so definitions alone are not enough."
  },
  {
    "id": "paper1-integrated-revision-8",
    "question": "Why is integrated revision useful?",
    "options": ['It helps learners see how topics connect in real scenarios', 'It guarantees full marks without any effort from the learner', 'It guarantees full marks without effort', 'It works for essay questions alone'],
    "answer": 0,
    "explanation": "Integrated revision prepares learners for case studies where several topics appear together."
  }
];

const bank: CapsItem[] = items.map((item) => ({
  prompt: item.question,
  options: item.options,
  answer: item.options[item.answer],
  explanation: item.explanation,
}));


const Paper1IntegratedRevision = () => (
  <CapsSubjectTopic
    title="Paper 1 Integrated Revision"
    subtitle="Revision strategies for environments, operations and integrated case studies"
    learnSteps={learnSteps}
    task="gr12-paper1-integrated-revision-t4"
    bank={bank}
    apiPath="/api/caps/bus"
    grade={12}
  />
);

export default Paper1IntegratedRevision;
