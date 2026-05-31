import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';

const learnSteps: LearnStep[] = [
  {
    title: 'Value diversity and inclusion',
    image: {
      src: '/curriculum/grade8/lo/term3/diversity-and-nation-building/diagram.webp',
      alt: 'grade 8 learners from diverse backgrounds working together respectfully',
    },
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Diversity and nation-building covers culture, inclusion, prejudice, stereotypes, and ubuntu in school and
          community life.
        </p>
      </div>
    ),
  },
  {
    title: 'Challenge prejudice respectfully',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Nation-building grows when learners celebrate differences, reject harmful labels, and work together for the
          common good.
        </p>
      </div>
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'What does diversity mean?',
    options: [
      'People with different backgrounds living and learning together',
      'Everyone having identical experiences',
      'Only one culture being accepted',
      'Avoiding interaction with others',
    ],
    answer: 'People with different backgrounds living and learning together',
    explanation: 'Diversity includes differences in culture, language, beliefs, and identity.',
  },
  {
    prompt: 'Which statement best describes a stereotype?',
    options: [
      'An unfair fixed idea about a group',
      'A respectful question to learn more',
      'A personal goal for study',
      'A sports training plan',
    ],
    answer: 'An unfair fixed idea about a group',
    explanation: 'Stereotypes ignore individual differences and can cause harm.',
  },
  {
    prompt: 'How can learners promote inclusion at school?',
    options: [
      'Invite others into activities and listen respectfully',
      'Exclude classmates who seem different',
      'Use jokes that target identity',
      'Spread rumours about culture',
    ],
    answer: 'Invite others into activities and listen respectfully',
    explanation: 'Inclusion means ensuring everyone feels accepted and valued.',
  },
  {
    prompt: 'What is ubuntu in this context?',
    options: [
      'A value of shared humanity and care for others',
      'A rule for test marking',
      'A ban on teamwork',
      'A reason to ignore differences',
    ],
    answer: 'A value of shared humanity and care for others',
    explanation: 'Ubuntu emphasises dignity, compassion, and community connection.',
  },
  {
    prompt: 'Which action helps challenge prejudice?',
    options: [
      'Correcting false assumptions with respectful facts',
      'Repeating hurtful labels',
      'Avoiding all conversation',
      'Joining discrimination to fit in',
    ],
    answer: 'Correcting false assumptions with respectful facts',
    explanation: 'Prejudice can be reduced through dialogue and accurate information.',
  },
  {
    prompt: 'Why is nation-building important for young people?',
    options: [
      'It builds social unity and shared responsibility',
      'It is only for government workers',
      'It means ignoring local problems',
      'It removes all cultural identities',
    ],
    answer: 'It builds social unity and shared responsibility',
    explanation: 'Learners are active citizens who help shape inclusive communities.',
  },
  {
    prompt: 'Which classroom behaviour supports respect for diversity?',
    options: [
      'Allowing everyone to share ideas safely',
      'Mocking accents and names',
      'Silencing minority viewpoints',
      'Ranking cultures as better or worse',
    ],
    answer: 'Allowing everyone to share ideas safely',
    explanation: 'Respectful participation builds trust and belonging.',
  },
  {
    prompt: 'What is a positive outcome of inclusive teamwork?',
    options: [
      'Better problem solving through different perspectives',
      'More conflict from exclusion',
      'Less creativity and cooperation',
      'A weaker sense of belonging',
    ],
    answer: 'Better problem solving through different perspectives',
    explanation: 'Diverse teams can produce stronger and more creative solutions.',
  },
];

const DiversityAndNationBuilding = () => (
  <CapsSubjectTopic
    title="Diversity and Nation-building"
    subtitle="Culture, inclusion, ubuntu, stereotypes, and respectful social cohesion"
    learnSteps={learnSteps}
    task="gr8-diversity-and-nation-building-t3"
    bank={bank}
    apiPath="/api/caps/lo"
  />
);

export default DiversityAndNationBuilding;
