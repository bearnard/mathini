import CapsSubjectTopic from '../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '../../../../components/subjects/lesson/LessonBlocks';

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

const learnSteps: LearnStep[] = [
  {
    title: 'Substance abuse',
    content: slide(
      <>
        <Rule>
          Substance abuse is using alcohol, tobacco or drugs in a way that harms the body and the mind. Medicine given by a doctor and taken as directed is not substance abuse.
        </Rule>
        <Worked
          title="Decide whether it is abuse"
          steps={[
            <>A child takes cough medicine as the doctor said: this is not abuse.</>,
            <>A person uses drugs or drinks too much alcohol: this harms the body and mind, so it is substance abuse.</>,
            <>Tik and heroin are illegal drugs.</>,
            <>Alcohol is legal for adults but can still be very harmful.</>,
          ]}
        />
        <Mistake>Thinking a legal substance cannot do harm. Alcohol and tobacco are legal for adults but are still harmful.</Mistake>
      </>,
    ),
  },
  {
    title: 'How substances harm the body',
    content: slide(
      <>
        <Rule>
          Drinking too much alcohol damages the liver. Breathing in other people’s cigarette smoke is called passive smoking and is also dangerous. Drug abuse can lead to addiction, school and family problems, and unsafe behaviour.
        </Rule>
        <Worked
          title="Follow the harm"
          steps={[
            <>Alcohol is broken down by the liver, so too much damages it.</>,
            <>A smoker’s smoke fills the room. The people nearby breathe it in: passive smoking.</>,
            <>Passive smoking harms the lungs of people who do not smoke.</>,
            <>Addiction means a person cannot stop using even though it harms them.</>,
          ]}
        />
        <Mistake>Thinking only the smoker is harmed. People nearby are harmed by passive smoking.</Mistake>
      </>,
    ),
  },
  {
    title: 'Saying no',
    content: slide(
      <>
        <Rule>
          Some young people try drugs because of peer pressure: friends pushing you to do something, or the wish to fit in. The safest answer is to say “No” firmly, and then walk away. If you are worried, talk to a trusted adult.
        </Rule>
        <Worked
          title="Refuse safely"
          steps={[
            <>A friend offers you something harmful.</>,
            <>Say “No” in a firm, calm voice.</>,
            <>Then walk away to a safe place.</>,
            <>Tell a trusted adult such as a parent, teacher or nurse.</>,
          ]}
        />
        <Mistake>Trying it “just once” to be liked. Real friends respect your no.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        question={
          <ol className="list-decimal space-y-2 pl-5">
            <li>What do we call using alcohol, tobacco or drugs in a way that harms body and mind?</li>
            <li>Which organ does too much alcohol damage?</li>
            <li>What do we call breathing in smoke from someone else’s cigarette?</li>
            <li>What should you do if someone offers you drugs?</li>
          </ol>
        }
        answer={
          <ol className="list-decimal space-y-2 pl-5">
            <li>Substance abuse.</li>
            <li>The liver.</li>
            <li>Passive smoking.</li>
            <li>Say no firmly, walk away and tell a trusted adult.</li>
          </ol>
        }
      />,
    ),
  },
];

export const bank: CapsItem[] = [
  {
    prompt: 'Which of these is substance abuse?',
    options: ['Using illegal drugs', 'Taking medicine as the doctor said', 'Drinking water', 'Eating fruit'],
    answer: 'Using illegal drugs',
    explanation: 'Drugs harm the body and mind.',
  },
  {
    prompt: 'Too much alcohol damages mainly the…',
    options: ['liver', 'knee', 'toenail', 'hair'],
    answer: 'liver',
    explanation: 'The liver breaks down alcohol.',
  },
  {
    prompt: 'Breathing in smoke from someone else’s cigarette is called…',
    options: ['passive smoking', 'active exercise', 'recycling', 'air travel'],
    answer: 'passive smoking',
    explanation: 'It is harmful to the lungs.',
  },
  {
    prompt: 'Peer pressure means…',
    options: ['friends pushing you to do something', 'a rule that your school made', 'a type of medicine from a clinic', 'a kind of food that is healthy'],
    answer: 'friends pushing you to do something',
    explanation: 'Others try to influence your choices.',
  },
  {
    prompt: 'If someone offers you drugs the safest reply is…',
    options: ['“No”, and then walk away', '“Maybe later”', '“Only a little”', 'Take it to your room'],
    answer: '“No”, and then walk away',
    explanation: 'Refuse firmly and leave.',
  },
];

const SubstanceAbuse = () => (
  <CapsSubjectTopic
    title="Substance Abuse"
    subtitle="What it is, how it harms and how to say no"
    learnSteps={learnSteps}
    task="gr5-life-skills-substance-abuse"
    bank={bank}
    apiPath="/api/caps/lsk"
    grade={5}
  />
);

export default SubstanceAbuse;
