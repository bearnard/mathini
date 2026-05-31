import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';

const learnSteps: LearnStep[] = [
  {
    title: 'Understand identity, values, and change',
    image: {
      src: '/curriculum/grade7/lsk/term1/personal-social-wellbeing/diagram.webp',
      alt: 'Grade 7 learners discussing values, emotions, and positive decisions in a life skills lesson',
    },
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          <strong>Personal and Social Well-being</strong> helps you understand who you are and what matters to you.
          Your <strong>self-concept</strong> grows when you know your strengths, values, and goals.
        </p>
        <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
          <div className="rounded-xl bg-sky-50 p-4 text-left">
            <p className="font-bold text-sky-700">Self-concept</p>
            <p className="text-slate-600">how you see yourself as you grow</p>
          </div>
          <div className="rounded-xl bg-amber-50 p-4 text-left">
            <p className="font-bold text-amber-700">Values</p>
            <p className="text-slate-600">beliefs that guide your choices</p>
          </div>
          <div className="rounded-xl bg-emerald-50 p-4 text-left">
            <p className="font-bold text-emerald-700">Puberty</p>
            <p className="text-slate-600">normal physical and emotional changes</p>
          </div>
          <div className="rounded-xl bg-violet-50 p-4 text-left">
            <p className="font-bold text-violet-700">Emotions</p>
            <p className="text-slate-600">feelings that can be managed in healthy ways</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Use decision-making steps in daily life',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Responsible choices are made by stopping, thinking, and checking consequences. Good decisions protect your
          health, relationships, and future goals.
        </p>
        <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
          <div className="rounded-xl bg-rose-50 p-4 text-left">
            <p className="font-bold text-rose-700">Step 1</p>
            <p className="text-slate-600">identify the problem clearly</p>
          </div>
          <div className="rounded-xl bg-cyan-50 p-4 text-left">
            <p className="font-bold text-cyan-700">Step 2</p>
            <p className="text-slate-600">list possible choices</p>
          </div>
          <div className="rounded-xl bg-lime-50 p-4 text-left">
            <p className="font-bold text-lime-700">Step 3</p>
            <p className="text-slate-600">predict likely outcomes</p>
          </div>
          <div className="rounded-xl bg-indigo-50 p-4 text-left">
            <p className="font-bold text-indigo-700">Step 4</p>
            <p className="text-slate-600">choose and reflect on the result</p>
          </div>
        </div>
      </div>
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'What is self-concept?',
    options: [
      'How you understand and describe yourself',
      'A list of school subjects only',
      'A rule that controls traffic',
      'A score from one sports match',
    ],
    answer: 'How you understand and describe yourself',
    explanation: 'Self-concept includes your strengths, interests, and beliefs about yourself.',
  },
  {
    prompt: 'Which option best describes a personal value?',
    options: ['A belief that guides your behaviour', 'A random thought with no meaning', 'A type of school uniform', 'A mark out of ten'],
    answer: 'A belief that guides your behaviour',
    explanation: 'Values influence what choices you make in everyday situations.',
  },
  {
    prompt: 'Which statement about puberty is correct?',
    options: [
      'Puberty is a normal stage of growth',
      'Puberty only changes your hairstyle',
      'Puberty happens in one single day',
      'Puberty means you stop feeling emotions',
    ],
    answer: 'Puberty is a normal stage of growth',
    explanation: 'Puberty is a natural process with physical and emotional changes over time.',
  },
  {
    prompt: 'What is a healthy way to manage strong emotions?',
    options: [
      'Pause, breathe, and talk to a trusted adult',
      'Shout at friends immediately',
      'Ignore your feelings forever',
      'Break something to feel better',
    ],
    answer: 'Pause, breathe, and talk to a trusted adult',
    explanation: 'Calm strategies and support help you respond safely and respectfully.',
  },
  {
    prompt: 'What should you do first when making a difficult decision?',
    options: [
      'Define the problem clearly',
      'Choose the quickest option without thinking',
      'Copy whatever someone else does',
      'Avoid making any choice',
    ],
    answer: 'Define the problem clearly',
    explanation: 'Clear problem definition helps you evaluate options properly.',
  },
  {
    prompt: 'Which choice shows responsible decision-making?',
    options: [
      'Thinking about consequences before acting',
      'Doing risky actions to impress peers',
      'Ignoring all advice from trusted adults',
      'Choosing based on fear only',
    ],
    answer: 'Thinking about consequences before acting',
    explanation: 'Responsible choices consider safety, values, and long-term effects.',
  },
  {
    prompt: 'A classmate shares a puberty myth. What is the best response?',
    options: [
      'Check facts with a trusted adult or reliable source',
      'Spread the myth to more learners',
      'Laugh and tease the classmate',
      'Assume every rumour is true',
    ],
    answer: 'Check facts with a trusted adult or reliable source',
    explanation: 'Fact-checking helps learners avoid confusion and stigma.',
  },
  {
    prompt: 'Which action reflects your values in a conflict?',
    options: ['Speaking honestly and respectfully', 'Posting insults online', 'Refusing to listen at all', 'Blaming others without evidence'],
    answer: 'Speaking honestly and respectfully',
    explanation: 'Values like respect and honesty guide positive behaviour in conflict.',
  },
];

const PersonalSocialWellbeingT1 = () => (
  <CapsSubjectTopic
    title="Personal and Social Well-being"
    subtitle="Self-concept, values, puberty, emotions, and responsible choices"
    learnSteps={learnSteps}
    task="gr7-personal-social-wellbeing-t1"
    bank={bank}
    apiPath="/api/caps/lsk"
  />
);

export default PersonalSocialWellbeingT1;
