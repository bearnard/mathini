import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';

const learnSteps: LearnStep[] = [
  {
    title: 'Respecting diversity in our communities',
    image: {
      src: '/curriculum/grade6/lsk/term3/personal-social-wellbeing-t3/diagram.webp',
      alt: 'learners from different backgrounds sharing ideas respectfully in a community circle',
    },
    content: (
      <div className="space-y-5 text-center">
        <p className="text-lg text-slate-600">
          People in South Africa may have different <strong>cultures</strong>, languages, religions, and family
          traditions. We build stronger communities when we respect differences and treat every person with dignity.
        </p>
        <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
          <div className="rounded-xl bg-sky-50 p-4 text-left">
            <strong className="text-sky-800">Diversity</strong>
            <div className="mt-3 flex flex-wrap gap-2 text-sm text-sky-700">
              <span className="rounded-full bg-white px-3 py-1">different identities</span>
              <span className="rounded-full bg-white px-3 py-1">many viewpoints</span>
              <span className="rounded-full bg-white px-3 py-1">shared respect</span>
            </div>
          </div>
          <div className="rounded-xl bg-emerald-50 p-4 text-left">
            <strong className="text-emerald-800">Culture</strong>
            <div className="mt-3 flex flex-wrap gap-2 text-sm text-emerald-700">
              <span className="rounded-full bg-white px-3 py-1">traditions</span>
              <span className="rounded-full bg-white px-3 py-1">beliefs</span>
              <span className="rounded-full bg-white px-3 py-1">customs</span>
            </div>
          </div>
          <div className="rounded-xl bg-amber-50 p-4 text-left">
            <strong className="text-amber-800">Religion</strong>
            <div className="mt-3 flex flex-wrap gap-2 text-sm text-amber-700">
              <span className="rounded-full bg-white px-3 py-1">faith</span>
              <span className="rounded-full bg-white px-3 py-1">worship</span>
              <span className="rounded-full bg-white px-3 py-1">tolerance</span>
            </div>
          </div>
          <div className="rounded-xl bg-violet-50 p-4 text-left">
            <strong className="text-violet-800">Stereotypes</strong>
            <div className="mt-3 flex flex-wrap gap-2 text-sm text-violet-700">
              <span className="rounded-full bg-white px-3 py-1">unfair labels</span>
              <span className="rounded-full bg-white px-3 py-1">hurt feelings</span>
              <span className="rounded-full bg-white px-3 py-1">must be challenged</span>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Rights and responsibilities go together',
    content: (
      <div className="space-y-5 text-center">
        <p className="text-lg text-slate-600">
          A <strong>right</strong> protects people and helps them live well. A <strong>responsibility</strong> is what
          we should do so that everyone can enjoy those rights fairly and safely.
        </p>
        <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
          <div className="rounded-xl bg-blue-50 p-4 text-left">
            <strong className="text-blue-800">Right</strong>
            <div className="mt-3 flex flex-wrap gap-2 text-sm text-blue-700">
              <span className="rounded-full bg-white px-3 py-1">education</span>
              <span className="rounded-full bg-white px-3 py-1">safety</span>
              <span className="rounded-full bg-white px-3 py-1">respect</span>
            </div>
          </div>
          <div className="rounded-xl bg-rose-50 p-4 text-left">
            <strong className="text-rose-800">Responsibility</strong>
            <div className="mt-3 flex flex-wrap gap-2 text-sm text-rose-700">
              <span className="rounded-full bg-white px-3 py-1">follow rules</span>
              <span className="rounded-full bg-white px-3 py-1">do your work</span>
              <span className="rounded-full bg-white px-3 py-1">care for others</span>
            </div>
          </div>
          <div className="rounded-xl bg-lime-50 p-4 text-left">
            <strong className="text-lime-800">Respectful choices</strong>
            <div className="mt-3 flex flex-wrap gap-2 text-sm text-lime-700">
              <span className="rounded-full bg-white px-3 py-1">listen fairly</span>
              <span className="rounded-full bg-white px-3 py-1">share space</span>
              <span className="rounded-full bg-white px-3 py-1">help others</span>
            </div>
          </div>
          <div className="rounded-xl bg-orange-50 p-4 text-left">
            <strong className="text-orange-800">Community life</strong>
            <div className="mt-3 flex flex-wrap gap-2 text-sm text-orange-700">
              <span className="rounded-full bg-white px-3 py-1">fairness</span>
              <span className="rounded-full bg-white px-3 py-1">cooperation</span>
              <span className="rounded-full bg-white px-3 py-1">belonging</span>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Substance abuse awareness and healthy choices',
    content: (
      <div className="space-y-5 text-center">
        <p className="text-lg text-slate-600">
          Harmful substances such as alcohol, tobacco, and drugs can damage the body, mind, and community. Good
          decisions, strong boundaries, and asking trusted adults for help can keep learners safe.
        </p>
        <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
          <div className="rounded-xl bg-indigo-50 p-4 text-left">
            <strong className="text-indigo-800">Harmful substances</strong>
            <div className="mt-3 flex flex-wrap gap-2 text-sm text-indigo-700">
              <span className="rounded-full bg-white px-3 py-1">alcohol</span>
              <span className="rounded-full bg-white px-3 py-1">tobacco</span>
              <span className="rounded-full bg-white px-3 py-1">drugs</span>
            </div>
          </div>
          <div className="rounded-xl bg-teal-50 p-4 text-left">
            <strong className="text-teal-800">Warning signs</strong>
            <div className="mt-3 flex flex-wrap gap-2 text-sm text-teal-700">
              <span className="rounded-full bg-white px-3 py-1">poor judgement</span>
              <span className="rounded-full bg-white px-3 py-1">risk-taking</span>
              <span className="rounded-full bg-white px-3 py-1">health harm</span>
            </div>
          </div>
          <div className="rounded-xl bg-fuchsia-50 p-4 text-left">
            <strong className="text-fuchsia-800">Peer pressure</strong>
            <div className="mt-3 flex flex-wrap gap-2 text-sm text-fuchsia-700">
              <span className="rounded-full bg-white px-3 py-1">say no</span>
              <span className="rounded-full bg-white px-3 py-1">walk away</span>
              <span className="rounded-full bg-white px-3 py-1">choose wisely</span>
            </div>
          </div>
          <div className="rounded-xl bg-cyan-50 p-4 text-left">
            <strong className="text-cyan-800">Support</strong>
            <div className="mt-3 flex flex-wrap gap-2 text-sm text-cyan-700">
              <span className="rounded-full bg-white px-3 py-1">trusted adult</span>
              <span className="rounded-full bg-white px-3 py-1">teacher</span>
              <span className="rounded-full bg-white px-3 py-1">health worker</span>
            </div>
          </div>
        </div>
      </div>
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'What does diversity mean in a community?',
    options: [
      'People have different backgrounds and identities',
      'Everyone must look and think the same',
      'Only one language may be used',
      'No one is allowed to share traditions',
    ],
    answer: 'People have different backgrounds and identities',
    explanation: 'Diversity means people are different in many ways, and those differences should be respected.',
  },
  {
    prompt: 'Which action shows respect for another person’s culture or religion?',
    options: [
      'Listening politely and asking respectful questions',
      'Laughing at a person’s tradition',
      'Calling their beliefs silly',
      'Forcing them to copy you',
    ],
    answer: 'Listening politely and asking respectful questions',
    explanation: 'Respect means treating other people’s beliefs and customs with care and kindness.',
  },
  {
    prompt: 'Why are stereotypes harmful?',
    options: [
      'They unfairly judge people without knowing them',
      'They help everyone feel included',
      'They always tell the full truth about a person',
      'They make communities more caring',
    ],
    answer: 'They unfairly judge people without knowing them',
    explanation: 'Stereotypes are unfair labels that can hurt people and divide communities.',
  },
  {
    prompt: 'Which pair matches a right with a responsibility?',
    options: [
      'Right to education — attend school and do your best',
      'Right to safety — break rules whenever you want',
      'Right to be heard — interrupt everyone else',
      'Right to respect — make fun of others',
    ],
    answer: 'Right to education — attend school and do your best',
    explanation: 'Rights work best when people also act responsibly.',
  },
  {
    prompt: 'Which sentence best describes a responsibility?',
    options: [
      'Something you should do to help others and follow rules',
      'Something you can ignore if it feels difficult',
      'Something only teachers and parents have',
      'Something that takes away every right',
    ],
    answer: 'Something you should do to help others and follow rules',
    explanation: 'Responsibilities are actions that support fairness, safety, and respect.',
  },
  {
    prompt: 'Why is substance abuse dangerous?',
    options: [
      'It can harm health, judgement, and relationships',
      'It always helps people make safe choices',
      'It makes schoolwork easier every time',
      'It has no effect on the body or mind',
    ],
    answer: 'It can harm health, judgement, and relationships',
    explanation: 'Alcohol, tobacco, and drugs can damage the body and lead to unsafe behaviour.',
  },
  {
    prompt: 'What is the safest response if someone pressures you to try a harmful substance?',
    options: [
      'Say no firmly and move away to a safe place',
      'Try it so they do not laugh at you',
      'Keep it a secret and do nothing',
      'Offer it to another learner instead',
    ],
    answer: 'Say no firmly and move away to a safe place',
    explanation: 'Refusing clearly and leaving the situation helps protect your health and safety.',
  },
  {
    prompt: 'Who is a good person to talk to if you are worried about substance abuse?',
    options: ['A trusted adult', 'A stranger online', 'Someone selling cigarettes', 'A person who dares you'],
    answer: 'A trusted adult',
    explanation: 'Trusted adults such as parents, teachers, or counsellors can give support and help.',
  },
  {
    prompt: 'How does a respectful, responsible community become stronger?',
    options: [
      'People feel safe, included, and willing to cooperate',
      'People stop caring about rules and fairness',
      'People only help friends who are similar to them',
      'People solve problems by insulting one another',
    ],
    answer: 'People feel safe, included, and willing to cooperate',
    explanation: 'Respect and responsibility help communities work together and support everyone.',
  },
];

const PersonalSocialWellbeingT3 = () => (
  <CapsSubjectTopic
    title="Personal and Social Well-being"
    subtitle="Respecting diversity, linking rights to responsibilities, and making healthy choices"
    learnSteps={learnSteps}
    task="personal-social-wellbeing-t3"
    bank={bank}
    apiPath="/api/caps/lsk"
  />
);

export default PersonalSocialWellbeingT3;
