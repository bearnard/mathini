import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { Branches, Hub, StepFlow } from '../../../../../components/diagrams/lo/PswPictures';
import { countUnique } from '../../../../../components/diagrams/lo/lo6Helpers';

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

// The idea count in the Heritage Day example comes from this tested helper (lo6Helpers.test.ts).
const ideas = ['Food', 'Music', 'Dance', 'Stories'];
const idea = countUnique(ideas);

export const learnSteps: LearnStep[] = [
  {
    title: 'Diversity and culture',
    content: slide(
      <>
        <Rule>Diversity means people of different backgrounds living and learning together. It includes differences in culture, language, beliefs and identity.</Rule>
        <Hub centre="Our community" spokes={['Culture', 'Language', 'Beliefs', 'Identity']} aria="A circle labelled Our community with four kinds of difference around it: culture, language, beliefs and identity." />
        <Worked
          title="A class speaks isiZulu, Afrikaans and Tshivenda"
          steps={[<>Spot the diversity: three home languages in one class.</>, <>Value it: each learner brings a different view.</>, <>Respect it: ask about their words and customs.</>]}
        />
        <Mistake>Thinking everyone must be the same, that only one culture is acceptable, or that you should avoid people who are different. Diversity is valued, not removed.</Mistake>
      </>,
    ),
  },
  {
    title: 'Stereotypes and prejudice',
    content: slide(
      <>
        <Rule>A stereotype is an unfair fixed idea about a group. Prejudice means judging someone before you know them. Both shrink when we use respectful facts and talk to each other.</Rule>
        <Branches
          problem="Someone says: “People from that group are all the same”"
          options={[
            { choice: 'Laugh along', outcome: 'The label spreads and someone is hurt.' },
            { choice: 'Correct it with facts', outcome: 'The false idea is challenged.' },
          ]}
          aria="A decision tree. Someone says people from a group are all the same. Choice one: laugh along, and the label spreads and someone is hurt. Choice two: correct it with facts, and the false idea is challenged."
        />
        <Worked
          title="Someone says: “Boys cannot cook”"
          steps={[<>Spot the fixed idea about a group.</>, <>Ask: is it true of every person?</>, <>Give a respectful fact: many boys and men cook well.</>]}
        />
        <Mistake>Repeating hurtful labels, avoiding the conversation, or joining in the discrimination to fit in. Each one keeps the prejudice alive.</Mistake>
      </>,
    ),
  },
  {
    title: 'Inclusion and ubuntu',
    content: slide(
      <>
        <Rule>Inclusion means everyone feels accepted and valued. Ubuntu is the value of shared humanity and care for others, as in the Nguni saying “umuntu ngumuntu ngabantu”: a person is a person through other people.</Rule>
        <StepFlow steps={['Invite others in.', 'Listen with respect.', 'Let everyone share ideas safely.', 'Value each person.']} aria="Four steps for inclusion in order: invite others in, listen with respect, let everyone share ideas safely, value each person." />
        <Worked
          title="A new learner stands alone at break"
          steps={[<>Invite her to join your game.</>, <>Listen when she speaks, even if her accent is new to you.</>, <>Ask for her ideas.</>]}
        />
        <Mistake>Leaving out classmates who seem different, making jokes about names or accents, or ranking cultures as better or worse.</Mistake>
      </>,
    ),
  },
  {
    title: 'Nation-building and teamwork',
    content: slide(
      <>
        <Rule>Nation-building means people from different groups working together for unity and the common good. Young people are active citizens. Inclusive teams solve problems better because they see more than one point of view.</Rule>
        <Hub centre="Heritage Day" spokes={ideas} aria="A circle labelled Heritage Day with four ideas from four learners: food, music, dance and stories." />
        <Worked
          title="Four learners plan a Heritage Day display"
          steps={[<>Each learner offers one idea: {ideas.join(', ').toLowerCase()}.</>, <>That gives {idea} different ideas.</>, <>Combine them into one programme.</>]}
        />
        <Mistake>Thinking nation-building is only for government workers, or that unity means everyone gives up their own identity. Unity grows from respected differences.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <>
        <Check question="What does diversity mean?" answer="People of different backgrounds living and learning together." />
        <Check question="What is a stereotype, and how can you challenge prejudice?" answer="A stereotype is an unfair fixed idea about a group. Challenge prejudice by correcting false assumptions with respectful facts." />
        <Check question="What is ubuntu, and how can you promote inclusion at school?" answer="Ubuntu is a value of shared humanity and care for others. Invite others into activities and listen with respect." />
        <Check question="Why does an inclusive team often solve problems better?" answer="Because people with different perspectives bring different ideas." />
      </>,
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'What does diversity mean?',
    options: ['People of different backgrounds living and learning together', 'Everyone having exactly the same experiences', 'Only one culture being accepted at school', 'Avoiding contact with people who are different'],
    answer: 'People of different backgrounds living and learning together',
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
    options: ['Invite others into activities and listen with respect', 'Leave out classmates who seem different', "Use jokes that target a person's identity", 'Spread rumours about the culture of others'],
    answer: 'Invite others into activities and listen with respect',
    explanation: 'Inclusion means ensuring everyone feels accepted and valued.',
  },
  {
    prompt: 'What is ubuntu in this context?',
    options: ['A value of shared humanity and care for others', 'A rule that is used for marking tests', 'A ban on working together in teams', 'A reason to ignore the differences between people'],
    answer: 'A value of shared humanity and care for others',
    explanation: 'Ubuntu emphasises dignity, compassion, and community connection.',
  },
  {
    prompt: 'Which action helps challenge prejudice?',
    options: ['Correcting false assumptions with respectful facts', 'Repeating hurtful labels about a group', 'Avoiding any conversation about it', 'Joining in the discrimination to fit in'],
    answer: 'Correcting false assumptions with respectful facts',
    explanation: 'Prejudice can be reduced through dialogue and accurate information.',
  },
  {
    prompt: 'Why is nation-building important for young people?',
    options: ['It builds social unity and shared responsibility', 'It is for government workers only', 'It means ignoring the problems of the local area', 'It removes the cultural identities of all groups'],
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
    options: ['Better problem solving from different perspectives', 'More conflict because some are excluded', 'Less creativity and less cooperation', 'A weaker sense of belonging in the group'],
    answer: 'Better problem solving from different perspectives',
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
