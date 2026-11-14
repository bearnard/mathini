import CapsSubjectTopic, { type CapsItem } from '@/components/CapsSubjectTopic';
import type { LearnStep } from '@/components/CapsSubjectTopic';

const learnSteps: LearnStep[] = [
  {
    title: 'Life Roles and Purpose',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          A <strong>life role</strong> is a set of responsibilities and behaviours expected of you in a particular context. By Grade 11, you play multiple roles simultaneously.
        </p>
        <div className="grid gap-3 md:grid-cols-3 text-left">
          <div className="rounded-xl bg-blue-50 p-4">
            <strong className="text-blue-700">Family roles</strong>
            <p className="text-slate-600">Son/daughter, sibling, caregiver — each carries responsibilities at home.</p>
          </div>
          <div className="rounded-xl bg-green-50 p-4">
            <strong className="text-green-700">School roles</strong>
            <p className="text-slate-600">Learner, prefect, team member — academic and social responsibilities.</p>
          </div>
          <div className="rounded-xl bg-purple-50 p-4">
            <strong className="text-purple-700">Community roles</strong>
            <p className="text-slate-600">Neighbour, citizen, volunteer — contributing to the wider community.</p>
          </div>
        </div>
        <p className="text-slate-600">Understanding your roles helps you find <strong>purpose</strong> — a sense that your actions matter and contribute to something larger than yourself.</p>
      </div>
    ),
  },
  {
    title: 'Values and What They Do',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          <strong>Values</strong> are deep-seated beliefs about what is important and right. They act as an internal compass for decision-making.
        </p>
        <div className="bg-slate-50 p-6 rounded-xl space-y-3">
          <p className="font-bold text-slate-800">Common values in the South African Constitution:</p>
          <div className="grid gap-2 md:grid-cols-2 text-left text-slate-600">
            <p>✔ Human dignity</p>
            <p>✔ Equality</p>
            <p>✔ Freedom</p>
            <p>✔ Accountability</p>
            <p>✔ Respect</p>
            <p>✔ Responsibility</p>
          </div>
        </div>
        <p className="text-slate-600">When your actions align with your values, you experience <strong>meaning</strong> and integrity. When they conflict, you feel moral discomfort — a signal to reflect.</p>
      </div>
    ),
  },
  {
    title: 'Self-Management',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          <strong>Self-management</strong> is the ability to regulate your own behaviour, emotions, and time to meet your responsibilities across all roles.
        </p>
        <div className="grid gap-3 md:grid-cols-2 text-left">
          <div className="rounded-xl bg-amber-50 p-4">
            <strong className="text-amber-700">Time management</strong>
            <p className="text-slate-600">Plan tasks, prioritise, and avoid procrastination.</p>
          </div>
          <div className="rounded-xl bg-red-50 p-4">
            <strong className="text-red-700">Emotional regulation</strong>
            <p className="text-slate-600">Recognise and manage feelings before acting.</p>
          </div>
          <div className="rounded-xl bg-teal-50 p-4">
            <strong className="text-teal-700">Accountability</strong>
            <p className="text-slate-600">Take ownership of your choices and their consequences.</p>
          </div>
          <div className="rounded-xl bg-indigo-50 p-4">
            <strong className="text-indigo-700">Self-discipline</strong>
            <p className="text-slate-600">Follow through on commitments even when motivation dips.</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Planning Intentional Personal Growth',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Intentional growth means actively deciding to improve rather than waiting for change to happen. A <strong>personal growth plan</strong> turns reflection into action.
        </p>
        <div className="bg-slate-50 p-6 rounded-xl space-y-2 text-left">
          <p className="font-bold text-slate-800">Steps to plan personal growth:</p>
          <ol className="list-decimal list-inside space-y-1 text-slate-600">
            <li>Reflect on your strengths and areas for improvement.</li>
            <li>Identify which life roles need more attention.</li>
            <li>Set SMART goals for each area.</li>
            <li>Identify resources and support people.</li>
            <li>Review progress regularly and adjust.</li>
          </ol>
        </div>
      </div>
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'Which of the following best describes a "life role"?',
    options: ['A part that you act in a school drama production', 'The responsibilities and behaviours expected of you in a context', 'A career that you choose to follow after school', 'A subject that you study in the senior phase'],
    answer: 'The responsibilities and behaviours expected of you in a context',
    explanation: 'Life roles are the various positions we occupy — student, sibling, community member — each carrying its own responsibilities.',
  },
  {
    prompt: 'What is "purpose" in the context of personal development?',
    options: ['Earning as much money as you possibly can', 'A sense that your actions matter beyond yourself', 'Following the rules that adults have set for you', 'Handing in your school work on time each week'],
    answer: 'A sense that your actions matter beyond yourself',
    explanation: 'Purpose gives meaning to your efforts and guides long-term motivation.',
  },
  {
    prompt: 'How do values function in decision-making?',
    options: ['They slow down decision-making in every case', 'They act as an inner compass that guides choices on what matters', 'They are only of use in religious settings', 'They force you to agree with the people around you'],
    answer: 'They act as an inner compass that guides choices on what matters',
    explanation: 'Values are deep beliefs that shape how we judge situations and choose between options.',
  },
  {
    prompt: 'Which value is explicitly enshrined in the South African Constitution?',
    options: ['Competition', 'Human dignity', 'Wealth accumulation', 'Obedience to authority'],
    answer: 'Human dignity',
    explanation: 'The Constitution\'s founding values include human dignity, equality, and freedom.',
  },
  {
    prompt: 'What does self-management primarily involve?',
    options: ['Managing the behaviour of the people around you', 'Regulating your own behaviour, emotions and time in your roles', 'Keeping to a strict timetable that teachers set', 'Avoiding all risks and challenges in your life'],
    answer: 'Regulating your own behaviour, emotions and time in your roles',
    explanation: 'Self-management is the capacity to govern yourself — your time, emotions, and actions — to fulfil your responsibilities.',
  },
  {
    prompt: 'A learner feels overwhelmed because schoolwork, sport, and family duties clash. Which self-management skill is most needed?',
    options: ['Emotional regulation', 'Time management', 'Self-discipline', 'Accountability'],
    answer: 'Time management',
    explanation: 'When duties clash, planning and prioritising time is the key self-management skill.',
  },
  {
    prompt: 'What is the first step in planning intentional personal growth?',
    options: [
      'Set SMART goals immediately',
      'Ask a teacher to plan for you',
      'Reflect on your strengths and areas for improvement',
      'Compare yourself to the top learner in your class',
    ],
    answer: 'Reflect on your strengths and areas for improvement',
    explanation: 'Self-reflection provides the honest self-knowledge needed before setting meaningful goals.',
  },
  {
    prompt: 'Why can playing multiple life roles simultaneously create challenges?',
    options: [
      'It is always negative and should be avoided',
      'Different roles compete for the same limited time and energy',
      'Community roles are more important than school roles',
      'Roles never overlap in practice',
    ],
    answer: 'Different roles compete for the same limited time and energy',
    explanation: 'Managing many roles requires intentional self-management because each role makes demands on the same person.',
  },
  {
    prompt: 'When your actions consistently align with your values, you are most likely to experience:',
    options: ['Moral discomfort and a sense of guilt', 'Boredom and a loss of interest in goals', 'Integrity and a sense of meaning', 'Peer pressure from the people around you'],
    answer: 'Integrity and a sense of meaning',
    explanation: 'Living according to your values produces a sense of wholeness, integrity, and meaningful purpose.',
  },
  {
    prompt: 'Which of the following is an example of the accountability component of self-management?',
    options: ['Blaming a friend when a group project fails', 'Owning a poor test result and deciding how to improve', 'Avoiding the tasks that you find difficult', 'Asking a parent to solve your problems for you'],
    answer: 'Owning a poor test result and deciding how to improve',
    explanation: 'Accountability means owning your actions and consequences rather than deflecting responsibility.',
  },
];

const DevelopmentOfSelfInSociety = () => (
  <CapsSubjectTopic
    title="Development of the Self in Society"
    subtitle="Life roles, values, self-management and intentional personal growth"
    learnSteps={learnSteps}
    task="gr11-development-of-self-t1"
    bank={bank}
    apiPath="/api/caps/lo"
  />
);

export default DevelopmentOfSelfInSociety;
