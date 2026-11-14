import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';

const learnSteps: LearnStep[] = [
  {
    title: 'Growing and managing change respectfully',
    content: (
      <div className="space-y-5 text-center">
        <p className="text-lg text-slate-600">
          As children move through <strong>puberty</strong>, their bodies, feelings, and interests can change.
          Respect, privacy, and support from <strong>trusted adults</strong> help learners handle these changes in a healthy way.
        </p>
        <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
          <div className="rounded-xl bg-rose-50 p-4 text-left">
            <strong className="text-rose-800">Puberty</strong>
            <div className="mt-3 flex flex-wrap gap-2 text-sm text-rose-700">
              <span className="rounded-full bg-white px-3 py-1">growing up</span>
              <span className="rounded-full bg-white px-3 py-1">body changes</span>
              <span className="rounded-full bg-white px-3 py-1">new feelings</span>
            </div>
          </div>
          <div className="rounded-xl bg-sky-50 p-4 text-left">
            <strong className="text-sky-800">Emotions</strong>
            <div className="mt-3 flex flex-wrap gap-2 text-sm text-sky-700">
              <span className="rounded-full bg-white px-3 py-1">name the feeling</span>
              <span className="rounded-full bg-white px-3 py-1">pause and breathe</span>
              <span className="rounded-full bg-white px-3 py-1">talk it through</span>
            </div>
          </div>
          <div className="rounded-xl bg-amber-50 p-4 text-left">
            <strong className="text-amber-800">Privacy</strong>
            <div className="mt-3 flex flex-wrap gap-2 text-sm text-amber-700">
              <span className="rounded-full bg-white px-3 py-1">knock first</span>
              <span className="rounded-full bg-white px-3 py-1">respect space</span>
              <span className="rounded-full bg-white px-3 py-1">be considerate</span>
            </div>
          </div>
          <div className="rounded-xl bg-emerald-50 p-4 text-left">
            <strong className="text-emerald-800">Support</strong>
            <div className="mt-3 flex flex-wrap gap-2 text-sm text-emerald-700">
              <span className="rounded-full bg-white px-3 py-1">trusted adult</span>
              <span className="rounded-full bg-white px-3 py-1">kind words</span>
              <span className="rounded-full bg-white px-3 py-1">safe choices</span>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Know the facts and challenge stigma',
    content: (
      <div className="space-y-5 text-center">
        <p className="text-lg text-slate-600">
          <strong>HIV and AIDS awareness</strong> includes learning true facts, showing care, and never treating others unfairly.
          Casual contact like sharing space, talking, or hugging does <strong>not</strong> spread HIV.
        </p>
        <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
          <div className="rounded-xl bg-violet-50 p-4 text-left">
            <strong className="text-violet-800">Awareness</strong>
            <div className="mt-3 flex flex-wrap gap-2 text-sm text-violet-700">
              <span className="rounded-full bg-white px-3 py-1">learn facts</span>
              <span className="rounded-full bg-white px-3 py-1">ask safely</span>
            </div>
          </div>
          <div className="rounded-xl bg-cyan-50 p-4 text-left">
            <strong className="text-cyan-800">Respect</strong>
            <div className="mt-3 flex flex-wrap gap-2 text-sm text-cyan-700">
              <span className="rounded-full bg-white px-3 py-1">include others</span>
              <span className="rounded-full bg-white px-3 py-1">speak kindly</span>
            </div>
          </div>
          <div className="rounded-xl bg-lime-50 p-4 text-left">
            <strong className="text-lime-800">Healthy choices</strong>
            <div className="mt-3 flex flex-wrap gap-2 text-sm text-lime-700">
              <span className="rounded-full bg-white px-3 py-1">listen to adults</span>
              <span className="rounded-full bg-white px-3 py-1">care for your body</span>
            </div>
          </div>
          <div className="rounded-xl bg-orange-50 p-4 text-left">
            <strong className="text-orange-800">No stigma</strong>
            <div className="mt-3 flex flex-wrap gap-2 text-sm text-orange-700">
              <span className="rounded-full bg-white px-3 py-1">no teasing</span>
              <span className="rounded-full bg-white px-3 py-1">no rumours</span>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Serve your community and dream about careers',
    content: (
      <div className="space-y-5 text-center">
        <p className="text-lg text-slate-600">
          <strong>Community service</strong> helps others and builds responsibility. <strong>Career awareness</strong>
          starts when learners notice their strengths, interests, and the different jobs people do in the community.
        </p>
        <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
          <div className="rounded-xl bg-indigo-50 p-4 text-left">
            <strong className="text-indigo-800">Community service</strong>
            <div className="mt-3 flex flex-wrap gap-2 text-sm text-indigo-700">
              <span className="rounded-full bg-white px-3 py-1">helping others</span>
              <span className="rounded-full bg-white px-3 py-1">volunteering</span>
            </div>
          </div>
          <div className="rounded-xl bg-teal-50 p-4 text-left">
            <strong className="text-teal-800">Community roles</strong>
            <div className="mt-3 flex flex-wrap gap-2 text-sm text-teal-700">
              <span className="rounded-full bg-white px-3 py-1">nurse</span>
              <span className="rounded-full bg-white px-3 py-1">teacher</span>
              <span className="rounded-full bg-white px-3 py-1">firefighter</span>
            </div>
          </div>
          <div className="rounded-xl bg-fuchsia-50 p-4 text-left">
            <strong className="text-fuchsia-800">Strengths</strong>
            <div className="mt-3 flex flex-wrap gap-2 text-sm text-fuchsia-700">
              <span className="rounded-full bg-white px-3 py-1">what you enjoy</span>
              <span className="rounded-full bg-white px-3 py-1">what you do well</span>
            </div>
          </div>
          <div className="rounded-xl bg-yellow-50 p-4 text-left">
            <strong className="text-yellow-800">Goals</strong>
            <div className="mt-3 flex flex-wrap gap-2 text-sm text-yellow-700">
              <span className="rounded-full bg-white px-3 py-1">future plans</span>
              <span className="rounded-full bg-white px-3 py-1">helpful habits</span>
            </div>
          </div>
        </div>
      </div>
    ),
  },
];

export const bank: CapsItem[] = [
  {
    prompt: 'What does puberty mean?',
    options: ['A stage when a child grows into an adolescent', 'A way to measure the weather', 'A team game that is played with a ball', 'A type of building for the community'],
    answer: 'A stage when a child grows into an adolescent',
    explanation: 'Puberty is a stage of growing up when the body and emotions begin to change.',
  },
  {
    prompt: 'Which action is a healthy way to manage a strong emotion?',
    options: [
      'Pause, breathe, and talk to a trusted adult',
      'Shout at everyone nearby',
      'Break classroom furniture',
      'Keep every worry completely secret forever',
    ],
    answer: 'Pause, breathe, and talk to a trusted adult',
    explanation: 'Calming down and asking for support helps learners handle emotions safely.',
  },
  {
    prompt: 'Which behaviour shows respect for privacy during puberty?',
    options: [
      'Knocking before entering a private space',
      'Reading someone else\'s diary',
      'Sharing a friend\'s secret loudly',
      'Laughing at body changes',
    ],
    answer: 'Knocking before entering a private space',
    explanation: 'Respecting privacy means giving people personal space and treating them with dignity.',
  },
  {
    prompt: 'Which statement shows correct HIV awareness?',
    options: [
      'You cannot get HIV from hugging or sharing a desk',
      'HIV spreads when classmates talk to each other',
      'HIV spreads by sitting in the same room',
      'HIV spreads through every casual touch',
    ],
    answer: 'You cannot get HIV from hugging or sharing a desk',
    explanation: 'HIV is not spread by everyday casual contact such as hugs or sharing classroom space.',
  },
  {
    prompt: 'What is stigma?',
    options: ['Treating someone unfairly because of an illness', 'A warm-up activity before a sport', 'A career plan written in a notebook', 'A type of healthy breakfast'],
    answer: 'Treating someone unfairly because of an illness',
    explanation: 'Stigma happens when people are judged, excluded, or teased instead of treated kindly and fairly.',
  },
  {
    prompt: 'Which activity is an example of community service?',
    options: [
      'Helping clean a park with other volunteers',
      'Ignoring litter on the playground',
      'Keeping all donated books for yourself',
      'Refusing to help anyone at all',
    ],
    answer: 'Helping clean a park with other volunteers',
    explanation: 'Community service means giving time and effort to improve life for others.',
  },
  {
    prompt: 'What is career awareness?',
    options: ['Learning about jobs and how they match your interests', 'Choosing a game captain for one lesson only', 'Memorising every road sign in town', 'Skipping school subjects that you find hard'],
    answer: 'Learning about jobs and how they match your interests',
    explanation: 'Career awareness helps learners notice different jobs and think about future possibilities.',
  },
  {
    prompt: 'Which learner is linking a strength to a possible future career?',
    options: ['A learner who likes caring for people and wants to be a nurse', 'A learner who refuses to learn any new skill', 'A learner who never thinks about helping others', 'A learner who dislikes all of the school subjects'],
    answer: 'A learner who likes caring for people and wants to be a nurse',
    explanation: 'Career planning begins when learners connect what they enjoy and do well with community roles.',
  },
  {
    prompt: 'Why is it useful to reflect on your strengths and interests?',
    options: [
      'It helps you set goals and think about suitable careers',
      'It stops you from learning new things',
      'It means you never need help from others',
      'It makes community service unnecessary',
    ],
    answer: 'It helps you set goals and think about suitable careers',
    explanation: 'Knowing your strengths can guide choices, goals, and future aspirations.',
  },
];

const PersonalSocialWellbeingT4 = () => (
  <CapsSubjectTopic
    title="Personal and Social Well-being"
    subtitle="Growing with respect, showing care, and planning for the future"
    learnSteps={learnSteps}
    task="personal-social-wellbeing-t4"
    bank={bank}
    apiPath="/api/caps/grade6"
  />
);

export default PersonalSocialWellbeingT4;
