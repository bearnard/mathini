import CapsSubjectTopic, { type CapsItem } from '@/components/CapsSubjectTopic';
import type { LearnStep } from '@/components/CapsSubjectTopic';

const learnSteps: LearnStep[] = [
  {
    title: 'Formal Application Letters',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          A formal application letter introduces you professionally and explains why you are suitable for a course, job, bursary, or opportunity.
        </p>
        <div className="bg-slate-50 rounded-xl p-6 text-left space-y-2 text-sm text-slate-600">
          <p><strong className="text-slate-800">Key parts:</strong> sender details, date, recipient details, subject line, polite introduction, purpose, motivation, and formal closing.</p>
          <p>The tone must be clear, respectful, and error-free.</p>
        </div>
      </div>
    ),
  },
  {
    title: 'The Structure and Purpose of a CV',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          A <strong>Curriculum Vitae (CV)</strong> is a summary of your personal details, education, skills, achievements, and experience.
        </p>
        <div className="grid gap-3 md:grid-cols-2 text-left text-sm">
          <div className="rounded-xl bg-blue-50 p-4">
            <strong className="text-blue-700">Typical CV sections</strong>
            <p className="text-slate-600">Contact details, education, skills, achievements, experience, interests, and references.</p>
          </div>
          <div className="rounded-xl bg-green-50 p-4">
            <strong className="text-green-700">Good CV principles</strong>
            <p className="text-slate-600">Be accurate, relevant, neat, honest, and easy to read.</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'References and Portfolios',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          <strong>References</strong> support your application, while a <strong>portfolio</strong> shows evidence of your work, achievements, or practical ability.
        </p>
        <div className="grid gap-3 md:grid-cols-2 text-left text-sm">
          <div className="rounded-xl bg-amber-50 p-4">
            <strong className="text-amber-700">References</strong>
            <p className="text-slate-600">Should be people who know your work or character, such as a teacher, coach, or supervisor.</p>
          </div>
          <div className="rounded-xl bg-purple-50 p-4">
            <strong className="text-purple-700">Portfolio</strong>
            <p className="text-slate-600">May include certificates, projects, artwork, writing samples, or evidence of leadership and service.</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Interview Preparation and Self-Presentation',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Interviews test not only what you know, but how well you present yourself, communicate, and respond under pressure.
        </p>
        <div className="bg-slate-50 rounded-xl p-6 text-left space-y-2">
          <p className="font-bold text-slate-800">Interview tips:</p>
          <ul className="list-disc list-inside space-y-1 text-sm text-slate-600">
            <li>Research the organisation or opportunity beforehand.</li>
            <li>Dress neatly and arrive on time.</li>
            <li>Prepare answers about strengths, goals, and experience.</li>
            <li>Speak clearly, listen carefully, and ask sensible questions.</li>
          </ul>
        </div>
      </div>
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'What is the main purpose of an application letter?',
    options: [
      'To entertain the reader',
      'To introduce yourself professionally and explain your suitability',
      'To replace a CV completely',
      'To list exam rules',
    ],
    answer: 'To introduce yourself professionally and explain your suitability',
    explanation: 'An application letter explains why you are applying and why you fit the opportunity.',
  },
  {
    prompt: 'Which feature belongs in a formal application letter?',
    options: ['Slang and emojis', 'A polite formal closing', 'Very short text message style', 'No date or contact details'],
    answer: 'A polite formal closing',
    explanation: 'Formal letters should use professional conventions, including a proper closing.',
  },
  {
    prompt: 'What does a CV mainly do?',
    options: [
      'Summarises your qualifications, skills, and experience',
      'Reports classroom gossip',
      'Gives legal advice',
      'Replaces an interview in every case',
    ],
    answer: 'Summarises your qualifications, skills, and experience',
    explanation: 'A CV presents relevant information about you for study or work opportunities.',
  },
  {
    prompt: 'Which item should normally appear in a CV?',
    options: ['False achievements', 'Contact details', 'Nicknames only', 'Unrelated jokes'],
    answer: 'Contact details',
    explanation: 'A CV needs clear contact details so the organisation can reach you.',
  },
  {
    prompt: 'Who would be the most suitable reference for a Grade 11 learner?',
    options: ['A stranger online', 'A teacher who knows the learner\'s work', 'A celebrity', 'Any random person'],
    answer: 'A teacher who knows the learner\'s work',
    explanation: 'A good reference should know your work ethic, character, or achievements.',
  },
  {
    prompt: 'What is the purpose of a portfolio?',
    options: [
      'To hide your achievements',
      'To provide evidence of your work, skills, or accomplishments',
      'To replace all references',
      'To avoid preparing for interviews',
    ],
    answer: 'To provide evidence of your work, skills, or accomplishments',
    explanation: 'A portfolio gives concrete proof of your abilities and achievements.',
  },
  {
    prompt: 'Which interview behaviour is most professional?',
    options: ['Arriving late without explanation', 'Researching the opportunity and preparing answers', 'Interrupting the interviewer', 'Using your phone during questions'],
    answer: 'Researching the opportunity and preparing answers',
    explanation: 'Preparation shows seriousness, interest, and professionalism.',
  },
  {
    prompt: 'Why is honesty important in application documents?',
    options: [
      'Because false information can damage trust and lead to rejection',
      'Because honesty only matters in interviews',
      'Because nobody checks CVs',
      'Because exaggeration is expected',
    ],
    answer: 'Because false information can damage trust and lead to rejection',
    explanation: 'Application documents must be truthful and accurate to maintain credibility.',
  },
];

const ApplicationDocumentsPlanning = () => (
  <CapsSubjectTopic
    title="Application Documents and Planning"
    subtitle="Formal letters, CV writing, portfolios, references and interview preparation"
    learnSteps={learnSteps}
    task="gr11-application-documents-planning-t4"
    bank={bank}
    apiPath="/api/caps/lo"
  />
);

export default ApplicationDocumentsPlanning;
