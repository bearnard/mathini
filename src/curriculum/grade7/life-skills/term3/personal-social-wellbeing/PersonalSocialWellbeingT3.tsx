import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';

const learnSteps: LearnStep[] = [
  {
    title: 'Respect diversity and protect human rights',
    image: {
      src: '/curriculum/grade7/lsk/term3/personal-social-wellbeing/diagram.webp',
      alt: 'Grade 7 learners discussing inclusion, rights, and career interests in class',
    },
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          This term explores <strong>diversity</strong>, inclusion, and human rights. Learners identify stereotypes and
          practise respectful ways to challenge unfair assumptions.
        </p>
        <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
          <div className="rounded-xl bg-sky-50 p-4 text-left">
            <p className="font-bold text-sky-700">Diversity</p>
            <p className="text-slate-600">differences in people and identities</p>
          </div>
          <div className="rounded-xl bg-amber-50 p-4 text-left">
            <p className="font-bold text-amber-700">Human rights</p>
            <p className="text-slate-600">fair treatment and dignity for all</p>
          </div>
          <div className="rounded-xl bg-emerald-50 p-4 text-left">
            <p className="font-bold text-emerald-700">Stereotypes</p>
            <p className="text-slate-600">oversimplified and unfair labels</p>
          </div>
          <div className="rounded-xl bg-violet-50 p-4 text-left">
            <p className="font-bold text-violet-700">Inclusion</p>
            <p className="text-slate-600">ensuring everyone belongs and participates</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Connect strengths to future pathways',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Career awareness begins with interests, values, and strengths. Social change also creates new opportunities
          for contribution in communities.
        </p>
        <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
          <div className="rounded-xl bg-rose-50 p-4 text-left">
            <p className="font-bold text-rose-700">Interests</p>
            <p className="text-slate-600">activities you enjoy and care about</p>
          </div>
          <div className="rounded-xl bg-cyan-50 p-4 text-left">
            <p className="font-bold text-cyan-700">Strengths</p>
            <p className="text-slate-600">skills you do well and can grow</p>
          </div>
          <div className="rounded-xl bg-lime-50 p-4 text-left">
            <p className="font-bold text-lime-700">Pathways</p>
            <p className="text-slate-600">possible study and career directions</p>
          </div>
          <div className="rounded-xl bg-indigo-50 p-4 text-left">
            <p className="font-bold text-indigo-700">Social change</p>
            <p className="text-slate-600">community shifts that shape opportunities</p>
          </div>
        </div>
      </div>
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'What does diversity mean in a school community?',
    options: [
      'People with different backgrounds learning together',
      'Everyone must be exactly the same',
      'Only one opinion is allowed',
      'Ignoring cultural differences completely',
    ],
    answer: 'People with different backgrounds learning together',
    explanation: 'Diversity recognises and values differences among people.',
  },
  {
    prompt: 'Which action supports human rights?',
    options: ['Treating all learners with dignity and fairness', 'Excluding others from class activities', 'Using stereotypes to judge classmates', 'Spreading hate speech online'],
    answer: 'Treating all learners with dignity and fairness',
    explanation: 'Human rights protect equality, dignity, and participation.',
  },
  {
    prompt: 'What is a stereotype?',
    options: [
      'An unfair assumption about a group of people',
      'A detailed scientific experiment',
      'A personal goal planner',
      'A method for stretching muscles',
    ],
    answer: 'An unfair assumption about a group of people',
    explanation: 'Stereotypes ignore individual differences and can cause harm.',
  },
  {
    prompt: 'How can learners challenge gender stereotypes respectfully?',
    options: ['Question assumptions and include everyone in opportunities', 'Repeat biased jokes in order to fit in', 'Ban classmates from taking part in activities', 'Ignore the unfair comments that are made'],
    answer: 'Question assumptions and include everyone in opportunities',
    explanation: 'Respectful challenge promotes fairness and inclusion.',
  },
  {
    prompt: 'Which idea best describes career awareness?',
    options: [
      'Linking your interests and strengths to possible future work',
      'Choosing a career only because friends chose it',
      'Deciding your future in one day with no research',
      'Ignoring your skills and values completely',
    ],
    answer: 'Linking your interests and strengths to possible future work',
    explanation: 'Career awareness grows from self-knowledge and exploration.',
  },
  {
    prompt: 'Which example shows positive social change?',
    options: [
      'A community creates equal sports opportunities for all learners',
      'A school removes access for learners with disabilities',
      'A club excludes people by gender',
      'A class accepts bullying as normal',
    ],
    answer: 'A community creates equal sports opportunities for all learners',
    explanation: 'Social change should expand participation and fairness.',
  },
  {
    prompt: 'Which behaviour supports inclusion in class debates?',
    options: [
      'Listening respectfully to different viewpoints',
      'Interrupting others constantly',
      'Mocking accents and identities',
      'Allowing only one learner to speak',
    ],
    answer: 'Listening respectfully to different viewpoints',
    explanation: 'Inclusion requires respectful listening and equal participation.',
  },
  {
    prompt: 'What responsibility is linked to the right to education?',
    options: [
      'Attending class and respecting learning time',
      'Skipping school whenever it feels difficult',
      'Preventing others from learning',
      'Ignoring all school rules',
    ],
    answer: 'Attending class and respecting learning time',
    explanation: 'Rights and responsibilities work together in a healthy learning environment.',
  },
];

const PersonalSocialWellbeingT3 = () => (
  <CapsSubjectTopic
    title="Personal and Social Well-being"
    subtitle="Diversity, human rights, stereotypes, and career awareness"
    learnSteps={learnSteps}
    task="gr7-personal-social-wellbeing-t3"
    bank={bank}
    apiPath="/api/caps/lsk"
  />
);

export default PersonalSocialWellbeingT3;
