import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';

const learnSteps: LearnStep[] = [
  {
    title: 'Handle peer influence with assertive communication',
    image: {
      src: '/curriculum/grade7/lsk/term2/personal-social-wellbeing/diagram.webp',
      alt: 'Grade 7 learners discussing peer influence, online safety, and healthy choices',
    },
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          In this term, learners examine <strong>peer influence</strong> and practise assertive communication. Assertive
          language is calm, respectful, and clear.
        </p>
        <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
          <div className="rounded-xl bg-sky-50 p-4 text-left">
            <p className="font-bold text-sky-700">Peer influence</p>
            <p className="text-slate-600">pressure from friends or media</p>
          </div>
          <div className="rounded-xl bg-amber-50 p-4 text-left">
            <p className="font-bold text-amber-700">Assertive response</p>
            <p className="text-slate-600">say no without aggression</p>
          </div>
          <div className="rounded-xl bg-emerald-50 p-4 text-left">
            <p className="font-bold text-emerald-700">Empathy</p>
            <p className="text-slate-600">understand another person's feelings</p>
          </div>
          <div className="rounded-xl bg-violet-50 p-4 text-left">
            <p className="font-bold text-violet-700">Online safety</p>
            <p className="text-slate-600">protect privacy and report harm</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Choose safer behaviour online and offline',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Learners evaluate risky situations, including substance abuse messages and unsafe digital behaviour. Healthy
          choices require thinking ahead and asking for support.
        </p>
        <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
          <div className="rounded-xl bg-rose-50 p-4 text-left">
            <p className="font-bold text-rose-700">Substance awareness</p>
            <p className="text-slate-600">recognise and avoid harmful substances</p>
          </div>
          <div className="rounded-xl bg-cyan-50 p-4 text-left">
            <p className="font-bold text-cyan-700">Digital footprint</p>
            <p className="text-slate-600">posts can affect future opportunities</p>
          </div>
          <div className="rounded-xl bg-lime-50 p-4 text-left">
            <p className="font-bold text-lime-700">Trusted support</p>
            <p className="text-slate-600">parents, teachers, caregivers</p>
          </div>
          <div className="rounded-xl bg-indigo-50 p-4 text-left">
            <p className="font-bold text-indigo-700">Decision check</p>
            <p className="text-slate-600">is it safe, respectful, and legal?</p>
          </div>
        </div>
      </div>
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'What is peer influence?',
    options: [
      'Pressure from friends or media to act in certain ways',
      'A teacher giving homework instructions',
      'A personal timetable for studying',
      'A sports warm-up routine',
    ],
    answer: 'Pressure from friends or media to act in certain ways',
    explanation: 'Peer influence can be positive or negative depending on the behaviour encouraged.',
  },
  {
    prompt: 'Which sentence is an assertive response?',
    options: ['No thanks, that is not a safe choice for me', 'I will do anything you say', 'Move away, you are useless', 'I am too scared to answer'],
    answer: 'No thanks, that is not a safe choice for me',
    explanation: 'Assertive communication is clear, respectful, and confident.',
  },
  {
    prompt: 'Which online action is safest?',
    options: [
      'Keeping personal details private',
      'Sharing your password with new friends',
      'Posting your home address publicly',
      'Accepting all unknown requests',
    ],
    answer: 'Keeping personal details private',
    explanation: 'Protecting personal information reduces online risk.',
  },
  {
    prompt: 'What does empathy mean?',
    options: [
      'Trying to understand another person\'s feelings',
      'Winning every argument at all costs',
      'Ignoring people who disagree with you',
      'Copying what others do without thinking',
    ],
    answer: 'Trying to understand another person\'s feelings',
    explanation: 'Empathy supports respectful communication and healthier relationships.',
  },
  {
    prompt: 'If a friend offers a harmful substance, what is the best choice?',
    options: ['Refuse clearly and leave the situation', 'Try it to fit in', 'Hide the situation from adults', 'Offer it to more people'],
    answer: 'Refuse clearly and leave the situation',
    explanation: 'Clear refusal and distance reduce risk and protect your wellbeing.',
  },
  {
    prompt: 'What should you do if you see cyberbullying?',
    options: ['Save evidence and report it to a trusted adult', 'Forward it to classmates for fun', 'Reply with harsher insults', 'Pretend it is normal behaviour'],
    answer: 'Save evidence and report it to a trusted adult',
    explanation: 'Reporting helps stop harm and keeps learners safer online.',
  },
  {
    prompt: 'How can media influence choices?',
    options: [
      'It can make risky behaviour look normal',
      'It always gives complete truth',
      'It removes the need for critical thinking',
      'It guarantees every advertised product is safe',
    ],
    answer: 'It can make risky behaviour look normal',
    explanation: 'Media messages should be questioned and checked before copying behaviour.',
  },
  {
    prompt: 'Which action shows responsible communication in conflict?',
    options: [
      'Listening and speaking calmly about the problem',
      'Posting private messages publicly',
      'Interrupting and shouting continuously',
      'Ignoring the issue forever',
    ],
    answer: 'Listening and speaking calmly about the problem',
    explanation: 'Respectful communication helps solve conflict more effectively.',
  },
];

const PersonalSocialWellbeingT2 = () => (
  <CapsSubjectTopic
    title="Personal and Social Well-being"
    subtitle="Peer influence, empathy, substance awareness, and online safety"
    learnSteps={learnSteps}
    task="gr7-personal-social-wellbeing-t2"
    bank={bank}
    apiPath="/api/caps/lsk"
  />
);

export default PersonalSocialWellbeingT2;
