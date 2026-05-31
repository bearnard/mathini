import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';

const learnSteps: LearnStep[] = [
  {
    title: 'A healthy self-image starts with knowing yourself',
    image: {
      src: '/curriculum/grade6/lsk/term1/personal-social-wellbeing-t1/diagram.webp',
      alt: 'friendly group of Grade 6 learners sitting in a discussion circle and listening to one another',
    },
    content: (
      <div className="space-y-5 text-center">
        <p className="text-lg text-slate-600">
          <strong>Personal and Social Well-being</strong> helps us understand who we are. A good self-image grows
          when we notice our strengths, speak kindly about ourselves, and show <strong>respect</strong> to others.
        </p>
        <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
          <div className="rounded-xl bg-sky-50 p-4 text-left">
            <strong className="text-sky-800">Self-image</strong>
            <div className="mt-3 flex flex-wrap gap-2 text-sm text-sky-700">
              <span className="rounded-full bg-white px-3 py-1">how you see yourself</span>
              <span className="rounded-full bg-white px-3 py-1">positive self-talk</span>
            </div>
          </div>
          <div className="rounded-xl bg-amber-50 p-4 text-left">
            <strong className="text-amber-800">Personal strengths</strong>
            <div className="mt-3 flex flex-wrap gap-2 text-sm text-amber-700">
              <span className="rounded-full bg-white px-3 py-1">kindness</span>
              <span className="rounded-full bg-white px-3 py-1">effort</span>
              <span className="rounded-full bg-white px-3 py-1">problem solving</span>
            </div>
          </div>
          <div className="rounded-xl bg-emerald-50 p-4 text-left">
            <strong className="text-emerald-800">Respect</strong>
            <div className="mt-3 flex flex-wrap gap-2 text-sm text-emerald-700">
              <span className="rounded-full bg-white px-3 py-1">listen carefully</span>
              <span className="rounded-full bg-white px-3 py-1">fair words</span>
              <span className="rounded-full bg-white px-3 py-1">good manners</span>
            </div>
          </div>
          <div className="rounded-xl bg-violet-50 p-4 text-left">
            <strong className="text-violet-800">Supportive friends</strong>
            <div className="mt-3 flex flex-wrap gap-2 text-sm text-violet-700">
              <span className="rounded-full bg-white px-3 py-1">include others</span>
              <span className="rounded-full bg-white px-3 py-1">encourage</span>
              <span className="rounded-full bg-white px-3 py-1">trust</span>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Healthy habits build everyday wellbeing',
    content: (
      <div className="space-y-5 text-center">
        <p className="text-lg text-slate-600">
          Good habits help us feel ready to learn and play. Eating balanced meals, sleeping well, staying clean,
          and being active are <strong>healthy choices</strong> that protect body and mind.
        </p>
        <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
          <div className="rounded-xl bg-blue-50 p-4 text-left">
            <strong className="text-blue-800">Rest</strong>
            <div className="mt-3 flex flex-wrap gap-2 text-sm text-blue-700">
              <span className="rounded-full bg-white px-3 py-1">sleep routine</span>
              <span className="rounded-full bg-white px-3 py-1">energy</span>
            </div>
          </div>
          <div className="rounded-xl bg-rose-50 p-4 text-left">
            <strong className="text-rose-800">Hygiene</strong>
            <div className="mt-3 flex flex-wrap gap-2 text-sm text-rose-700">
              <span className="rounded-full bg-white px-3 py-1">wash hands</span>
              <span className="rounded-full bg-white px-3 py-1">brush teeth</span>
            </div>
          </div>
          <div className="rounded-xl bg-lime-50 p-4 text-left">
            <strong className="text-lime-800">Healthy eating</strong>
            <div className="mt-3 flex flex-wrap gap-2 text-sm text-lime-700">
              <span className="rounded-full bg-white px-3 py-1">balanced meals</span>
              <span className="rounded-full bg-white px-3 py-1">water</span>
            </div>
          </div>
          <div className="rounded-xl bg-orange-50 p-4 text-left">
            <strong className="text-orange-800">Activity</strong>
            <div className="mt-3 flex flex-wrap gap-2 text-sm text-orange-700">
              <span className="rounded-full bg-white px-3 py-1">move daily</span>
              <span className="rounded-full bg-white px-3 py-1">play safely</span>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Peer pressure needs brave and respectful choices',
    content: (
      <div className="space-y-5 text-center">
        <p className="text-lg text-slate-600">
          Sometimes people try to push us into choices that are unsafe or unkind. We can use
          <strong> refusal skills</strong>, set simple goals, and ask trusted adults for help when pressure does not
          stop.
        </p>
        <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
          <div className="rounded-xl bg-indigo-50 p-4 text-left">
            <strong className="text-indigo-800">Peer pressure</strong>
            <div className="mt-3 flex flex-wrap gap-2 text-sm text-indigo-700">
              <span className="rounded-full bg-white px-3 py-1">pressure from friends</span>
              <span className="rounded-full bg-white px-3 py-1">stop and think</span>
            </div>
          </div>
          <div className="rounded-xl bg-teal-50 p-4 text-left">
            <strong className="text-teal-800">Refusal skills</strong>
            <div className="mt-3 flex flex-wrap gap-2 text-sm text-teal-700">
              <span className="rounded-full bg-white px-3 py-1">say no clearly</span>
              <span className="rounded-full bg-white px-3 py-1">walk away</span>
            </div>
          </div>
          <div className="rounded-xl bg-fuchsia-50 p-4 text-left">
            <strong className="text-fuchsia-800">Simple goals</strong>
            <div className="mt-3 flex flex-wrap gap-2 text-sm text-fuchsia-700">
              <span className="rounded-full bg-white px-3 py-1">clear</span>
              <span className="rounded-full bg-white px-3 py-1">realistic</span>
              <span className="rounded-full bg-white px-3 py-1">one step at a time</span>
            </div>
          </div>
          <div className="rounded-xl bg-cyan-50 p-4 text-left">
            <strong className="text-cyan-800">Trusted support</strong>
            <div className="mt-3 flex flex-wrap gap-2 text-sm text-cyan-700">
              <span className="rounded-full bg-white px-3 py-1">parent</span>
              <span className="rounded-full bg-white px-3 py-1">teacher</span>
              <span className="rounded-full bg-white px-3 py-1">caregiver</span>
            </div>
          </div>
        </div>
      </div>
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'What does self-image mean?',
    options: [
      'How you see and feel about yourself',
      'How many toys you own',
      'The colour of your school bag',
      'Only what strangers think of you',
    ],
    answer: 'How you see and feel about yourself',
    explanation: 'Self-image is the picture you carry in your mind about yourself.',
  },
  {
    prompt: 'Which choice shows a personal strength?',
    options: [
      'Helping a classmate patiently',
      'Ignoring all school rules',
      'Copying someone else\'s work',
      'Laughing when someone makes a mistake',
    ],
    answer: 'Helping a classmate patiently',
    explanation: 'Patience and helpfulness are personal strengths that build good relationships.',
  },
  {
    prompt: 'Which is a healthy habit?',
    options: ['Washing your hands before eating', 'Sleeping very late every night', 'Skipping all meals', 'Sitting all day without moving'],
    answer: 'Washing your hands before eating',
    explanation: 'Good hygiene helps prevent illness and keeps your body healthy.',
  },
  {
    prompt: 'Which action shows respect?',
    options: [
      'Listening when another learner is speaking',
      'Pushing to be first in every line',
      'Calling people rude names',
      'Taking turns only when adults watch',
    ],
    answer: 'Listening when another learner is speaking',
    explanation: 'Respect means showing care, fairness, and good manners to others.',
  },
  {
    prompt: 'What is peer pressure?',
    options: [
      'Pressure from others to do something',
      'A teacher checking your homework',
      'A goal you set for yourself',
      'A healthy routine before bed',
    ],
    answer: 'Pressure from others to do something',
    explanation: 'Peer pressure happens when friends or a group try to influence your choices.',
  },
  {
    prompt: 'Which sentence is a good refusal skill?',
    options: ['No thanks, I do not want to do that.', 'Maybe I will do it if everyone laughs.', 'I must do it because you said so.', 'I will hide it and hope nobody notices.'],
    answer: 'No thanks, I do not want to do that.',
    explanation: 'A refusal skill is clear, calm, and helps you protect yourself.',
  },
  {
    prompt: 'Which learner is acting like a supportive friend?',
    options: [
      'A learner who includes a new classmate in a game',
      'A learner who spreads hurtful gossip',
      'A learner who dares others to break rules',
      'A learner who mocks someone\'s answer',
    ],
    answer: 'A learner who includes a new classmate in a game',
    explanation: 'Supportive friendships are kind, respectful, and welcoming.',
  },
  {
    prompt: 'Which is the best example of a simple goal?',
    options: [
      'I will pack my homework every night this week',
      'I will become perfect at everything today',
      'I will never make a mistake again',
      'I will do every sport in one afternoon',
    ],
    answer: 'I will pack my homework every night this week',
    explanation: 'A simple goal is clear, realistic, and easy to practise step by step.',
  },
  {
    prompt: 'If unsafe peer pressure continues, what should you do?',
    options: [
      'Tell a trusted adult',
      'Keep it secret forever',
      'Join in so people stop asking',
      'Pretend it is not a problem',
    ],
    answer: 'Tell a trusted adult',
    explanation: 'Trusted adults can help you stay safe and make a good plan.',
  },
];

const PersonalSocialWellbeingT1 = () => (
  <CapsSubjectTopic
    title="Personal and Social Well-being"
    subtitle="Growing self-respect, healthy habits, and confident choices"
    learnSteps={learnSteps}
    task="personal-social-wellbeing-t1"
    bank={bank}
    apiPath="/api/caps/lsk"
  />
);

export default PersonalSocialWellbeingT1;
