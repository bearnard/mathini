import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { FactCards } from '../../../../../components/diagrams/aq10/Aq10';
import { StepFlow } from '../../../../../components/diagrams/lo/PswPictures';

// Teacher-check items for this lesson are in docs/notes/lo-senior-doubts.md. Help sources: Childline 116, GBV Command Centre 0800 428 428, National AIDS Helpline 0800 012 322, SAPS 10111.
const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;
export const learnSteps: LearnStep[] = [
  {
    title: 'Freedom of religion and peace in South Africa',
    content: slide(
      <>
        <Rule>South Africa is home to many religions, and the Constitution protects everyone&rsquo;s freedom of religion, belief and opinion. Most religions teach values such as compassion, respect, forgiveness and justice, and many people of faith work for peace. This lesson describes some of these contributions; it does not rank any religion above another.</Rule>
        <FactCards
          cards={[
            { title: 'Freedom', line1: 'everyone may follow', line2: 'a religion or none' },
            { title: 'Many faiths', line1: 'Christianity, Islam,', line2: 'Hinduism and more' },
            { title: 'Shared values', line1: 'compassion, respect', line2: 'and forgiveness' },
            { title: 'Peace', line1: 'many believers work', line2: 'for peace' },
          ]}
          aria="Freedom of religion and peace. Freedom: everyone may follow a religion or none. Many faiths: Christianity, Islam, Hinduism and more. Shared values: compassion, respect and forgiveness. Peace: many believers work for peace."
        />
        <Worked
          title="Respect for all beliefs"
          steps={[
            'A class includes learners from several religions.',
            'The teacher asks each learner to share a value from their own tradition.',
            'The class notices that many values, such as respect and kindness, are shared.',
          ]}
        />
        <Mistake>Believing that one religion is better than the others or that members of a religion all think the same. Respect each person&rsquo;s belief.</Mistake>
      </>,
    ),
  },
  {
    title: 'How religions contribute to peace',
    content: slide(
      <>
        <Rule>Many followers of Christianity believe in loving your neighbour and forgiveness, and in South Africa church leaders such as Archbishop Desmond Tutu worked for peace and reconciliation. Many Muslims greet each other with salaam, which means peace, and give to charity. Many Hindus and Buddhists value non-violence and compassion. Many Jewish people use the greeting shalom, meaning peace. African traditional beliefs often stress ubuntu, the idea that people are connected, and many communities use elders to settle disputes.</Rule>
        <FactCards
          cards={[
            { title: 'Christianity', line1: 'love of neighbour,', line2: 'forgiveness, Desmond Tutu' },
            { title: 'Islam, Judaism', line1: 'salaam and shalom', line2: 'mean peace' },
            { title: 'Hinduism, Buddhism', line1: 'non-violence and', line2: 'compassion' },
            { title: 'African traditions', line1: 'ubuntu and elders', line2: 'who settle disputes' },
          ]}
          aria="How religions contribute to peace. Christianity: love of neighbour and forgiveness, as in the work of Desmond Tutu. Islam and Judaism: salaam and shalom mean peace. Hinduism and Buddhism: non-violence and compassion. African traditions: ubuntu and elders who settle disputes."
        />
        <Worked
          title="Link a belief to peace"
          steps={[
            'Many followers believe in forgiveness: this can help people to end a quarrel.',
            'Ubuntu says that a person is a person through other people: this encourages caring for the community.',
            'A greeting of peace, such as salaam or shalom, is a daily reminder of peace.',
          ]}
        />
        <Mistake>Saying that all members of a religion believe or practise the same things. Many followers believe these ideas, and people differ.</Mistake>
      </>,
    ),
  },
  {
    title: 'Working together for peace',
    content: slide(
      <>
        <Rule>People of different faiths can work together for peace through inter-faith groups, joint community projects, shared prayers or events, and by speaking out against hatred. Respectful dialogue helps people to understand each other, and shared action, such as feeding the hungry or cleaning a park, builds trust.</Rule>
        <StepFlow steps={['Meet and listen.', 'Find shared values.', 'Plan a joint project.', 'Speak out against hatred.']} aria="Four ways to work together for peace: meet and listen, find shared values, plan a joint project, and speak out against hatred." />
        <Worked
          title="A joint project"
          steps={[
            'Members of a church, a mosque and a temple in one town meet to talk about problems.',
            'They agree on a shared value: care for people in need.',
            'Together they run a food drive for families, and they learn about each other as they work.',
          ]}
        />
        <Mistake>Waiting for leaders to make peace. Everyone can build peace by respecting others and joining projects that serve the community.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          <>What does the Constitution protect about religion?</>,
          <>What do salaam and shalom mean?</>,
          <>What is ubuntu?</>,
          <>Give one way in which people of different faiths can work for peace.</>,
        ]}
        answers={[
          <>Everyone&rsquo;s freedom of religion, belief and opinion.</>,
          <>Peace.</>,
          <>The idea that people are connected and care for one another.</>,
          <>Joint community projects, inter-faith groups or respectful dialogue.</>,
        ]}
      />,
    ),
  },
];

export const bank: CapsItem[] = [
  {
    prompt: "Which religious freedom does the Constitution guarantee?",
    options: ["Only one religion for everybody", "Only the religion of the majority", "Freedom of religion and belief", "The removal of all religion"],
    answer: "Freedom of religion and belief",
    explanation: "People may follow any religion or none.",
  },
  {
    prompt: "Which value is taught by many religions?",
    options: ["Compassion and respect", "Hatred of our neighbours", "Violence against other people", "Cheating in business and trade"],
    answer: "Compassion and respect",
    explanation: "Many religions teach care and forgiveness.",
  },
  {
    prompt: "The Arabic greeting salaam carries which meaning?",
    options: ["Goodbye", "Thank you", "Welcome home", "Peace"],
    answer: "Peace",
    explanation: "Many Muslims greet each other with salaam.",
  },
  {
    prompt: "The Hebrew greeting shalom carries which meaning?",
    options: ["Good night", "Peace", "Please", "Money"],
    answer: "Peace",
    explanation: "Many Jewish people use shalom.",
  },
  {
    prompt: "Which church leader worked for peace and reconciliation in South Africa?",
    options: ["A football coach", "Archbishop Desmond Tutu", "A bank manager", "A weather reporter"],
    answer: "Archbishop Desmond Tutu",
    explanation: "Tutu is known for his work for reconciliation.",
  },
  {
    prompt: "What is ubuntu?",
    options: ["A type of computer program", "A kind of traditional food", "A sports team in a league", "The idea that people are connected"],
    answer: "The idea that people are connected",
    explanation: "Ubuntu means a person is a person through other people.",
  },
  {
    prompt: "Which value do many Hindus and Buddhists stress?",
    options: ["Non-violence and compassion", "Revenge", "Competition at any cost", "Secrecy"],
    answer: "Non-violence and compassion",
    explanation: "Many followers value non-violence.",
  },
  {
    prompt: "How do many African communities settle disputes?",
    options: ["By using force against each other", "By ignoring the dispute for years", "Elders help people to agree", "By holding a running competition"],
    answer: "Elders help people to agree",
    explanation: "Elders and dialogue help to restore peace.",
  },
  {
    prompt: "Why should you not rank one religion above another in a discussion?",
    options: ["Rankings are required by law", "Only one religion is real", "It is a rule of every school", "Each belief deserves respect"],
    answer: "Each belief deserves respect",
    explanation: "The Constitution protects all beliefs.",
  },
  {
    prompt: "Do all members of a religion believe and practise exactly the same things?",
    options: ["Yes, always", "No, people differ", "Yes, in every town", "Yes, in every century"],
    answer: "No, people differ",
    explanation: "Many followers believe an idea, and people vary.",
  },
  {
    prompt: "Which activity can people of different faiths do together for peace?",
    options: ["Run a food drive", "Fight over their beliefs", "Ignore each other completely", "Spread rumours about others"],
    answer: "Run a food drive",
    explanation: "Shared projects build trust.",
  },
  {
    prompt: "What helps people of different religions to understand each other?",
    options: ["Insults", "Silence only", "Respectful dialogue", "Fear"],
    answer: "Respectful dialogue",
    explanation: "Listening and talking build understanding.",
  },
  {
    prompt: "What can you do when someone speaks hatred about a religion?",
    options: ["Join in with the hatred", "Laugh along with the others", "Speak out respectfully", "Pretend you did not hear it"],
    answer: "Speak out respectfully",
    explanation: "Standing against hatred supports peace.",
  },
  {
    prompt: "Who can help to build peace in a community?",
    options: ["Everyone who respects others", "Only religious leaders", "Only the police", "Only politicians"],
    answer: "Everyone who respects others",
    explanation: "Peace is built by ordinary people too.",
  },
];

const ReligionsAndPeace = () => (
  <CapsSubjectTopic
    title="Religions and Peace"
    subtitle="Freedom of religion and how many religions contribute to peace"
    learnSteps={learnSteps}
    task="gr9-religions-and-peace-t4"
    bank={bank}
    apiPath="/api/caps/lo"
  />
);

export default ReligionsAndPeace;
