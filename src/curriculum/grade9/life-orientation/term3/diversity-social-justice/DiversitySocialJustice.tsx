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
    options: ['A simple preference for one thing over another', 'Unfair treatment of people based on the group they belong to', 'Treating every person in exactly the same way', 'A form of behaviour that is allowed by the law'],
    answer: 'Unfair treatment of people based on the group they belong to',
    explanation: 'Discrimination is treating people unfairly because of who they are.',
  },
  {
    prompt: 'What is a stereotype?',
    options: ['A fact that has been proved about a group of people', 'A fixed and often wrong belief about a group of people', 'An idea about a group that is always true', 'A helpful way to understand the people you meet'],
    answer: 'A fixed and often wrong belief about a group of people',
    explanation: 'Stereotypes oversimplify and often misrepresent groups of people.',
  },
  {
    prompt: 'How do stereotypes cause harm?',
    options: ['They do no harm, since they are only opinions', 'They limit chances, hurt self-esteem and excuse discrimination', 'They help people to understand each other better', 'They have no effect on how people are treated'],
    answer: 'They limit chances, hurt self-esteem and excuse discrimination',
    explanation: 'Stereotypes contribute to systemic injustice.',
  },
  {
    prompt: 'What is gender equity?',
    options: ['Making everyone exactly the same in all ways', 'Fair treatment and equal opportunity for all genders', 'Giving help and chances to one gender only', 'A goal that cannot be reached in real life'],
    answer: 'Fair treatment and equal opportunity for all genders',
    explanation: 'Gender equity recognizes differences while ensuring fairness.',
  },
  {
    prompt: 'Why is inclusion important?',
    options: ['It is not important, since each person looks after themselves', 'When people feel they belong, they do well and give more', 'It wastes resources that should go to the best learners', 'It is not practical in a school with many groups'],
    answer: 'When people feel they belong, they do well and give more',
    explanation: 'Inclusive communities are stronger and more innovative.',
  },
  {
    prompt: 'What does nation-building mean?',
    options: ['Putting up new buildings and roads across a country', 'Building a society in which all can live together as equals', 'The politics of parties and the contest for votes', 'A part of history that ended with the old government'],
    answer: 'Building a society in which all can live together as equals',
    explanation: 'Nation-building is ongoing work to create unity and justice.',
  },
  {
    prompt: 'How can you challenge discrimination?',
    options: ['You cannot, since discrimination is a fact of life', 'By speaking up, supporting victims and promoting inclusion', 'Ignore it so that you do not become the target', 'Stay silent and hope that it stops by itself'],
    answer: 'By speaking up, supporting victims and promoting inclusion',
    explanation: 'Standing against discrimination takes courage and action.',
  },
  {
    prompt: 'What is your responsibility toward other groups?',
    options: ['No duty at all, as each group looks after itself', 'To treat them with respect and defend their rights', 'To keep away from them to avoid any arguments', 'To judge them by what you have heard about them'],
    answer: 'To treat them with respect and defend their rights',
    explanation: 'Respect and advocacy are responsibilities we all share.',
  },
  {
    prompt: 'How can schools build inclusive spaces?',
    options: ['They cannot change things, as society makes the rules', 'Through a varied curriculum, anti-racism policies and learner leadership', 'By having strict rules that all learners must obey', 'By making inclusion a low priority behind exam results'],
    answer: 'Through a varied curriculum, anti-racism policies and learner leadership',
    explanation: 'Inclusive schools require intentional policies and practices.',
  },
  {
    prompt: 'What does social justice mean?',
    options: ['Making sure that laws are written down and kept in courts', 'Building fair systems where all have equal rights and chances', 'The work that courts do in deciding fair punishments', 'A dream that can never be reached in real life'],
    answer: 'Building fair systems where all have equal rights and chances',
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
