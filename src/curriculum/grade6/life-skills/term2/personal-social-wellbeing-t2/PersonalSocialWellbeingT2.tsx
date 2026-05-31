import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';

const learnSteps: LearnStep[] = [
  {
    title: 'Build healthy friendships and make safe choices',
    image: {
      src: '/curriculum/grade6/lsk/term2/personal-social-wellbeing-t2/diagram.webp',
      alt: 'two learners talking calmly while a trusted adult stands nearby',
    },
    content: (
      <div className="space-y-5 text-center">
        <p className="text-lg text-slate-600">
          <strong>Personal and Social Well-being</strong> helps you build strong friendships, behave
          responsibly, and choose safe actions. Healthy relationships are based on
          <strong> respect</strong>, <strong>honesty</strong>, and knowing when to ask a trusted adult for help.
        </p>
        <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
          <div className="rounded-xl bg-sky-50 p-4 text-left">
            <p className="font-bold text-sky-700">Friendships</p>
            <p className="text-slate-600">care, kindness, and listening to each other</p>
          </div>
          <div className="rounded-xl bg-emerald-50 p-4 text-left">
            <p className="font-bold text-emerald-700">Respect</p>
            <p className="text-slate-600">speak politely and respect boundaries</p>
          </div>
          <div className="rounded-xl bg-amber-50 p-4 text-left">
            <p className="font-bold text-amber-700">Trusted adults</p>
            <p className="text-slate-600">parents, caregivers, teachers, and other safe helpers</p>
          </div>
          <div className="rounded-xl bg-violet-50 p-4 text-left">
            <p className="font-bold text-violet-700">Safe choices</p>
            <p className="text-slate-600">walk away from danger and report problems quickly</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Solve conflicts fairly and calmly',
    content: (
      <div className="space-y-5 text-center">
        <p className="text-lg text-slate-600">
          Friends sometimes disagree, but conflicts can be solved fairly. Stay calm, let each person
          speak, and work towards a solution that is <strong>fair</strong> and <strong>peaceful</strong>.
        </p>
        <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
          <div className="rounded-xl bg-rose-50 p-4 text-left">
            <p className="font-bold text-rose-700">Pause first</p>
            <p className="text-slate-600">take a breath instead of shouting</p>
          </div>
          <div className="rounded-xl bg-cyan-50 p-4 text-left">
            <p className="font-bold text-cyan-700">Listen</p>
            <p className="text-slate-600">hear both sides before deciding</p>
          </div>
          <div className="rounded-xl bg-lime-50 p-4 text-left">
            <p className="font-bold text-lime-700">Use kind words</p>
            <p className="text-slate-600">say how you feel without blaming</p>
          </div>
          <div className="rounded-xl bg-fuchsia-50 p-4 text-left">
            <p className="font-bold text-fuchsia-700">Agree on a plan</p>
            <p className="text-slate-600">choose a solution both people can follow</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Take responsibility for safety and study habits',
    content: (
      <div className="space-y-5 text-center">
        <p className="text-lg text-slate-600">
          Being responsible means protecting yourself and doing your best at school. Good
          <strong> study habits</strong> and a clear safety plan help you stay prepared and confident.
        </p>
        <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
          <div className="rounded-xl bg-indigo-50 p-4 text-left">
            <p className="font-bold text-indigo-700">Responsibilities</p>
            <p className="text-slate-600">finish tasks, follow rules, and be dependable</p>
          </div>
          <div className="rounded-xl bg-orange-50 p-4 text-left">
            <p className="font-bold text-orange-700">Personal safety</p>
            <p className="text-slate-600">tell an adult if something feels unsafe</p>
          </div>
          <div className="rounded-xl bg-teal-50 p-4 text-left">
            <p className="font-bold text-teal-700">Study habits</p>
            <p className="text-slate-600">plan time, pack books, and revise regularly</p>
          </div>
          <div className="rounded-xl bg-yellow-50 p-4 text-left">
            <p className="font-bold text-yellow-700">Help-seeking</p>
            <p className="text-slate-600">ask early when you are worried or confused</p>
          </div>
        </div>
      </div>
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'Which action shows a healthy friendship?',
    options: ['Listening respectfully when a friend speaks', 'Laughing when a friend is upset', 'Sharing secrets without permission', 'Pressuring a friend to break a rule'],
    answer: 'Listening respectfully when a friend speaks',
    explanation: 'Healthy friendships are based on respect, care, and listening.',
  },
  {
    prompt: 'What is a good first step when a disagreement starts?',
    options: ['Calm down and listen', 'Shout louder', 'Walk away angrily without speaking', 'Blame the other person immediately'],
    answer: 'Calm down and listen',
    explanation: 'Staying calm helps both people solve the problem fairly.',
  },
  {
    prompt: 'Who is the best example of a trusted adult?',
    options: ['A teacher who helps you stay safe', 'A stranger at the shop', 'Someone online you have never met', 'A classmate who dares you to hide a problem'],
    answer: 'A teacher who helps you stay safe',
    explanation: 'A trusted adult is someone responsible who protects and supports you.',
  },
  {
    prompt: 'What should you do if someone offers you a lift and you do not know them?',
    options: ['Say no and tell a trusted adult', 'Get in quickly', 'Keep it secret from everyone', 'Follow them to ask questions'],
    answer: 'Say no and tell a trusted adult',
    explanation: 'Safe choices include refusing unsafe offers and reporting them immediately.',
  },
  {
    prompt: 'Which behaviour shows responsibility at school?',
    options: ['Packing your books and homework the night before', 'Ignoring classwork until the last minute', 'Leaving your things everywhere', 'Refusing to follow instructions'],
    answer: 'Packing your books and homework the night before',
    explanation: 'Being prepared is part of taking responsibility for your learning.',
  },
  {
    prompt: 'Which sentence helps solve a conflict fairly?',
    options: ['Let us each explain what happened', 'It is all your fault', 'I will never listen to you again', 'Only my opinion matters'],
    answer: 'Let us each explain what happened',
    explanation: 'Fair conflict resolution gives both people a chance to speak.',
  },
  {
    prompt: 'A friend dares you to break a school rule. What is the safest response?',
    options: ['Say no and choose the responsible action', 'Do it so the friend likes you', 'Blame another learner', 'Hide from the teacher afterwards'],
    answer: 'Say no and choose the responsible action',
    explanation: 'Good friends should not force you to make unsafe or irresponsible choices.',
  },
  {
    prompt: 'Which study habit is most helpful before a test?',
    options: ['Reviewing your notes over several days', 'Waiting until the test starts', 'Leaving your books at school on purpose', 'Copying from a friend instead of studying'],
    answer: 'Reviewing your notes over several days',
    explanation: 'Regular revision is a strong study habit and reduces stress.',
  },
  {
    prompt: 'If a situation feels unsafe, what should you do?',
    options: ['Tell a trusted adult as soon as possible', 'Keep quiet forever', 'Take a risky chance alone', 'Pretend nothing is wrong'],
    answer: 'Tell a trusted adult as soon as possible',
    explanation: 'Reporting danger quickly helps adults protect you and solve the problem.',
  },
];

const PersonalSocialWellbeingT2 = () => (
  <CapsSubjectTopic
    title="Personal and Social Well-being"
    subtitle="Friendships, safety, responsibilities, and fair ways to solve problems"
    learnSteps={learnSteps}
    task="personal-social-wellbeing-t2"
    bank={bank}
    apiPath="/api/caps/lsk"
  />
);

export default PersonalSocialWellbeingT2;
