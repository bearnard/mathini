import CapsSubjectTopic, { type CapsItem } from '@/components/CapsSubjectTopic';
import type { LearnStep } from '@/components/CapsSubjectTopic';

const learnSteps: LearnStep[] = [
  {
    title: 'Post-School Pathways',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          After Grade 12, learners can choose different pathways depending on their goals, marks, interests, and resources.
        </p>
        <div className="grid gap-3 md:grid-cols-2 text-left text-sm">
          <div className="rounded-xl bg-blue-50 p-4">
            <strong className="text-blue-700">Academic and vocational routes</strong>
            <p className="text-slate-600">University, TVET colleges, and higher certificates offer different types of study and training.</p>
          </div>
          <div className="rounded-xl bg-green-50 p-4">
            <strong className="text-green-700">Work-based routes</strong>
            <p className="text-slate-600">Learnerships, apprenticeships, internships, and workplace training combine practice with skill development.</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Matching Strengths to Career Fields',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Good career choices connect <strong>interests</strong>, <strong>aptitudes</strong>, <strong>values</strong>, and realistic opportunities.
        </p>
        <div className="bg-slate-50 rounded-xl p-6 text-left space-y-2 text-sm text-slate-600">
          <p><strong className="text-slate-800">Questions to ask:</strong></p>
          <ul className="list-disc list-inside space-y-1">
            <li>What subjects and tasks do I enjoy?</li>
            <li>What skills do I perform well in?</li>
            <li>What kind of work environment suits me?</li>
            <li>What entry requirements and costs are involved?</li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    title: 'Funding and Skills Development Opportunities',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Financial barriers can be reduced through <strong>bursaries</strong>, <strong>scholarships</strong>, <strong>NSFAS</strong>, and structured skills programmes.
        </p>
        <div className="grid gap-3 md:grid-cols-3 text-left text-sm">
          <div className="rounded-xl bg-amber-50 p-4">
            <strong className="text-amber-700">Bursaries</strong>
            <p className="text-slate-600">Often fund study costs in return for strong performance or service commitments.</p>
          </div>
          <div className="rounded-xl bg-purple-50 p-4">
            <strong className="text-purple-700">NSFAS</strong>
            <p className="text-slate-600">Supports qualifying students at public universities and TVET colleges.</p>
          </div>
          <div className="rounded-xl bg-teal-50 p-4">
            <strong className="text-teal-700">Skills programmes</strong>
            <p className="text-slate-600">SETA-linked training, learnerships, and workplace skills development improve employability.</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Career Research and Planning',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Strong planning means researching entry requirements, subjects needed, costs, funding options, and future labour market demand.
        </p>
        <div className="bg-slate-50 rounded-xl p-6 text-left space-y-2">
          <p className="font-bold text-slate-800">Useful research steps:</p>
          <ol className="list-decimal list-inside space-y-1 text-sm text-slate-600">
            <li>Choose a possible career field.</li>
            <li>Check the qualification and subject requirements.</li>
            <li>Investigate institutions, costs, and funding options.</li>
            <li>Compare more than one pathway before deciding.</li>
          </ol>
        </div>
      </div>
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'Which of the following is a post-school pathway?',
    options: ['University study', 'TVET college study', 'Learnership', 'All of the above'],
    answer: 'All of the above',
    explanation: 'CAPS LO expects learners to compare multiple post-school pathways, including study and work-based training routes.',
  },
  {
    prompt: 'What is a key difference between a university and a learnership?',
    options: [
      'A learnership combines structured training with workplace experience',
      'A university never requires entry marks',
      'A learnership cannot lead to any qualification',
      'A university is only for sport',
    ],
    answer: 'A learnership combines structured training with workplace experience',
    explanation: 'Learnerships are work-based training programmes linked to formal skills development.',
  },
  {
    prompt: 'Why is it important to match your strengths and interests to a career field?',
    options: [
      'Because friends should choose for you',
      'Because it helps you make realistic and meaningful career choices',
      'Because marks never matter',
      'Because all careers require the same abilities',
    ],
    answer: 'Because it helps you make realistic and meaningful career choices',
    explanation: 'Career planning is stronger when it connects personal strengths, interests, and opportunities.',
  },
  {
    prompt: 'What should you check first when exploring a specific career?',
    options: ['Entry requirements and needed subjects', 'Only the uniform', 'Only the salary', 'Your friends\' favourite careers'],
    answer: 'Entry requirements and needed subjects',
    explanation: 'Entry requirements show whether your current subject choices and performance align with the pathway.',
  },
  {
    prompt: 'What does NSFAS mainly do?',
    options: [
      'Runs private companies',
      'Funds qualifying students at public universities and TVET colleges',
      'Chooses careers for learners',
      'Provides sports coaching only',
    ],
    answer: 'Funds qualifying students at public universities and TVET colleges',
    explanation: 'NSFAS is a major South African financial aid source for qualifying students.',
  },
  {
    prompt: 'A bursary is best described as:',
    options: [
      'A fine for failing a subject',
      'Financial support for study, often linked to criteria or service obligations',
      'A type of school timetable',
      'A compulsory tax',
    ],
    answer: 'Financial support for study, often linked to criteria or service obligations',
    explanation: 'Bursaries help cover study costs and may have academic or contractual conditions.',
  },
  {
    prompt: 'Which option is an example of a skills development programme?',
    options: ['A learnership', 'A rumour about jobs', 'A social media challenge', 'A municipal by-law'],
    answer: 'A learnership',
    explanation: 'Learnerships are recognised skills programmes that combine theory and workplace learning.',
  },
  {
    prompt: 'Why should a learner compare more than one post-school pathway?',
    options: [
      'To delay decision-making forever',
      'To weigh costs, requirements, and opportunities before choosing',
      'Because all pathways are exactly the same',
      'To avoid doing any research',
    ],
    answer: 'To weigh costs, requirements, and opportunities before choosing',
    explanation: 'Comparing pathways helps learners make informed, flexible career decisions.',
  },
];

const CareersCareerChoices = () => (
  <CapsSubjectTopic
    title="Careers and Career Choices"
    subtitle="Post-school pathways, funding options, entry requirements and matching strengths to careers"
    learnSteps={learnSteps}
    task="gr11-careers-career-choices-t4"
    bank={bank}
    apiPath="/api/caps/lo"
  />
);

export default CareersCareerChoices;
