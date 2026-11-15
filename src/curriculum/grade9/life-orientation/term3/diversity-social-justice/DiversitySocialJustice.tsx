import CapsSubjectTopic, { type CapsItem } from '../../../../../components/CapsSubjectTopic';
import type { LearnStep } from '../../../../../components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { Branches, StepFlow } from '../../../../../components/diagrams/lo/PswPictures';
import { HubWide, LinkedPairs } from '../../../../../components/diagrams/lo/Lo10Pictures';

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: 'Discrimination and stereotypes',
    content: slide(
      <>
        <Rule>Discrimination is unfair treatment of people because of the group they belong to. A stereotype is a fixed and often wrong belief about a group.</Rule>
        <StepFlow steps={['A stereotype: a fixed belief about a group.', 'It limits chances and hurts self-esteem.', 'It excuses discrimination.']} aria="Three steps showing how stereotypes cause harm: a fixed belief about a group, it limits chances and hurts self-esteem, it excuses discrimination." />
        <Worked
          title="Someone says: “Boys are bad at reading”"
          steps={[<>Name the stereotype: all boys are the same.</>, <>Ask who it harms: a boy who loves books gets teased.</>, <>Replace it with a fact: reading skill depends on the person and practice.</>]}
        />
        <Mistake>Thinking a stereotype is harmless because it is “only a joke” or “true for some people”. It still oversimplifies and can lead to unfair treatment.</Mistake>
      </>,
    ),
  },
  {
    title: 'Gender equity and inclusion',
    content: slide(
      <>
        <Rule>Gender equity means fair treatment and equal opportunity for all genders. Inclusion means everyone feels they belong, and people who belong do well and give more.</Rule>
        <HubWide centre="Inclusion" spokes={['Belonging', 'A voice', 'Fair chances', 'Respect']} aria="A circle labelled Inclusion with four labels around it: belonging, a voice, fair chances and respect." />
        <Worked
          title="Only the boys at a school have a soccer team"
          steps={[<>Spot the gap in opportunity.</>, <>Ask the school for a girls' team or a mixed team.</>, <>Check that every team gets fair field time and coaching.</>, <>More learners take part and feel they belong.</>]}
        />
        <Mistake>Thinking equity means ignoring differences. Equity recognises differences while making sure everyone gets a fair chance.</Mistake>
      </>,
    ),
  },
  {
    title: 'Social justice and nation-building',
    content: slide(
      <>
        <Rule>Social justice means building fair systems where everyone has equal rights and chances. Nation-building means building a society in which all can live together as equals.</Rule>
        <LinkedPairs heads={['PROBLEM', 'ACTION']} pairs={[['Some voices are missing', 'A varied curriculum'], ['Racist behaviour', 'An anti-racism policy'], ['Learners feel unheard', 'Learner leadership']]} aria="Three school problems matched with an action: missing voices with a varied curriculum, racist behaviour with an anti-racism policy, learners who feel unheard with learner leadership." />
        <Worked
          title="Making your school more inclusive"
          steps={[<>Find a problem, such as texts that show only one group.</>, <>Match it to an action, such as a varied curriculum.</>, <>Ask the learner council to take it to the school.</>]}
        />
        <Mistake>Thinking nation-building is finished, or that it is only the government's job. It is ongoing work that every learner and school shares.</Mistake>
      </>,
    ),
  },
  {
    title: 'Challenging discrimination',
    content: slide(
      <>
        <Rule>You can challenge discrimination by speaking up, supporting the person who was hurt and promoting inclusion. Everyone is responsible for treating other groups with respect and defending their rights.</Rule>
        <Branches
          problem="A learner is teased for her accent"
          options={[
            { choice: 'Stay silent', outcome: 'The teasing goes on.' },
            { choice: 'Speak up and support her', outcome: 'She feels she belongs.' },
          ]}
          aria="A decision tree. A learner is teased for her accent. If you stay silent the teasing goes on. If you speak up and support her she feels she belongs."
        />
        <Worked
          title="Stepping in"
          steps={[<>Stay safe and calm.</>, <>Say clearly that the teasing is not okay.</>, <>Support the learner: sit with her and include her.</>, <>Tell a teacher if it continues.</>]}
        />
        <Mistake>Joining in, or thinking “it is not my business”. Silence can let discrimination continue. Challenge it with respect, not with insults.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <>
        <Check question="What is discrimination, and what is a stereotype?" answer="Discrimination is unfair treatment of people based on the group they belong to. A stereotype is a fixed and often wrong belief about a group." />
        <Check question="Name two ways stereotypes cause harm." answer="They limit chances, hurt self-esteem and excuse discrimination." />
        <Check question="What is gender equity, and why does inclusion matter?" answer="Gender equity is fair treatment and equal opportunity for all genders. When people feel they belong they do well and give more." />
        <Check question="Name two ways a school can build inclusive spaces." answer="A varied curriculum, anti-racism policies and learner leadership." />
      </>,
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
