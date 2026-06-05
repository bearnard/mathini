import CapsSubjectTopic, { type CapsItem } from '../../../../../components/CapsSubjectTopic';
import type { LearnStep } from '../../../../../components/CapsSubjectTopic';

const learnSteps: LearnStep[] = [
  {
    title: 'Understanding Discrimination and Stereotyping',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          <strong>Discrimination</strong> is unfair treatment based on group membership.
          <strong> Stereotypes</strong> are fixed ideas about groups that are often wrong.
        </p>
        <div className="bg-slate-50 p-6 rounded-xl inline-block">
          <p className="font-bold text-slate-800">Key fact:</p>
          <p className="text-slate-600">Everyone deserves equal respect regardless of background.</p>
        </div>
      </div>
    ),
  },
  {
    title: 'Gender Equity and Inclusion',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          <strong>Gender equity</strong> means fair treatment and opportunities for all genders.
          <strong> Inclusion</strong> means ensuring all people feel valued and can participate.
        </p>
        <div className="grid gap-3 md:grid-cols-2 text-left">
          <div className="rounded-xl bg-blue-50 p-4">
            <strong className="text-blue-700">Gender equity</strong>
            <p className="text-slate-600">Equal opportunities and respect.</p>
          </div>
          <div className="rounded-xl bg-green-50 p-4">
            <strong className="text-green-700">Inclusion</strong>
            <p className="text-slate-600">Everyone belongs and is valued.</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Building Inclusive Communities',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          <strong>Nation-building</strong> is creating a society where all people can thrive together.
          This requires fighting injustice and building inclusive spaces.
        </p>
        <div className="bg-slate-50 p-6 rounded-xl space-y-2">
          <p className="font-bold text-slate-800">You can contribute by:</p>
          <p className="text-slate-600">Speaking against unfairness, supporting others, and creating welcoming spaces.</p>
        </div>
      </div>
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'What is discrimination?',
    options: ['Just preference', 'Unfair treatment based on group membership', 'Same for everyone', 'Legal'],
    answer: 'Unfair treatment based on group membership',
    explanation: 'Discrimination is treating people unfairly because of who they are.',
  },
  {
    prompt: 'What is a stereotype?',
    options: ['A fact', 'A fixed, often inaccurate belief about a group', 'Always true', 'Good to use'],
    answer: 'A fixed, often inaccurate belief about a group',
    explanation: 'Stereotypes oversimplify and often misrepresent groups of people.',
  },
  {
    prompt: 'How do stereotypes cause harm?',
    options: ['They do not', 'They can limit opportunities, damage self-esteem, and justify discrimination', 'They are helpful', 'No impact'],
    answer: 'They can limit opportunities, damage self-esteem, and justify discrimination',
    explanation: 'Stereotypes contribute to systemic injustice.',
  },
  {
    prompt: 'What is gender equity?',
    options: ['Everyone being the same', 'Fair treatment and equal opportunities for all genders', 'Only for one group', 'Not possible'],
    answer: 'Fair treatment and equal opportunities for all genders',
    explanation: 'Gender equity recognizes differences while ensuring fairness.',
  },
  {
    prompt: 'Why is inclusion important?',
    options: ['It is not', 'When people feel valued and belong, they thrive and contribute more', 'Waste of resources', 'Not practical'],
    answer: 'When people feel valued and belong, they thrive and contribute more',
    explanation: 'Inclusive communities are stronger and more innovative.',
  },
  {
    prompt: 'What does nation-building mean?',
    options: ['Building buildings', 'Creating a society where all people can live together as equals', 'Just politics', 'Historical only'],
    answer: 'Creating a society where all people can live together as equals',
    explanation: 'Nation-building is ongoing work to create unity and justice.',
  },
  {
    prompt: 'How can you challenge discrimination?',
    options: ['You cannot', 'By speaking up, supporting victims, and promoting inclusion', 'Ignore it', 'Stay silent'],
    answer: 'By speaking up, supporting victims, and promoting inclusion',
    explanation: 'Standing against discrimination takes courage and action.',
  },
  {
    prompt: 'What is your responsibility toward other groups?',
    options: ['None', 'To treat them with respect and advocate for their rights', 'To avoid them', 'To judge them'],
    answer: 'To treat them with respect and advocate for their rights',
    explanation: 'Respect and advocacy are responsibilities we all share.',
  },
  {
    prompt: 'How can schools build inclusive spaces?',
    options: ['They cannot', 'Through diverse curriculum, antiracism policies, and student leadership', 'Just rules', 'Not priority'],
    answer: 'Through diverse curriculum, antiracism policies, and student leadership',
    explanation: 'Inclusive schools require intentional policies and practices.',
  },
  {
    prompt: 'What does social justice mean?',
    options: ['Just law', 'Creating fair systems where all people have equal rights and opportunities', 'Only about courts', 'Impossible'],
    answer: 'Creating fair systems where all people have equal rights and opportunities',
    explanation: 'Social justice addresses systemic inequities and promotes fairness.',
  },
];

const DiversitySocialJustice = () => (
  <CapsSubjectTopic
    title="Diversity and Social Justice"
    subtitle="Fighting discrimination and building inclusive communities"
    learnSteps={learnSteps}
    task="gr9-diversity-social-justice-t3"
    bank={bank}
    apiPath="/api/caps/lo"
  />
);

export default DiversitySocialJustice;
