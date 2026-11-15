import CapsSubjectTopic from '../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '../../../../components/subjects/lesson/LessonBlocks';

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

const learnSteps: LearnStep[] = [
  {
    title: 'Why we celebrate festivals',
    content: slide(
      <>
        <Rule>
          Festivals help us remember important events, celebrate our culture and beliefs, and bring the community together. Heritage Day, on 24 September, honours the many cultures and traditions of South Africa.
        </Rule>
        <Worked
          title="Explain a festival"
          steps={[
            <>Choose a festival your family celebrates and say when it is.</>,
            <>Say what you do: special food, songs, prayers or meeting family.</>,
            <>Say why it matters: it helps us remember our culture and beliefs.</>,
            <>Heritage Day on 24 September celebrates all the cultures in South Africa together.</>,
          ]}
        />
        <Mistake>Thinking festivals are only about presents or sweets. They are about remembering and celebrating culture, beliefs and community.</Mistake>
      </>,
    ),
  },
  {
    title: 'Festivals of different faiths',
    content: slide(
      <>
        <Rule>
          Diwali is the Hindu Festival of Lights, when lamps are lit to show that light wins over darkness. Eid al-Fitr is the Muslim festival at the end of Ramadan, the month of fasting. Christians celebrate Christmas on 25 December to remember the birth of Jesus Christ.
        </Rule>
        <Worked
          title="Match the festival to its meaning"
          steps={[
            <>Lamps are lit and the festival is about light over darkness: Diwali.</>,
            <>A month of fasting has just ended and families gather to celebrate: Eid al-Fitr.</>,
            <>On 25 December Christians remember the birth of Jesus Christ: Christmas.</>,
            <>Each festival belongs to a different faith, and we respect them all.</>,
          ]}
        />
        <Mistake>Mixing up the festivals. Diwali is Hindu, Eid al-Fitr is Muslim and Christmas is Christian.</Mistake>
      </>,
    ),
  },
  {
    title: 'African customs and respect',
    content: slide(
      <>
        <Rule>
          Many African traditional religions show respect for the ancestors, the family members who have died, and believe they still care for the family. We show respect for other people’s customs by listening, asking polite questions and joining in only when invited.
        </Rule>
        <Worked
          title="Show respect"
          steps={[
            <>A neighbour invites you to a ceremony you do not know.</>,
            <>Listen politely and ask questions about what the customs mean.</>,
            <>Follow the rules of the ceremony and do not laugh at it.</>,
            <>Respecting other people’s beliefs builds a friendly community.</>,
          ]}
        />
        <Mistake>Making fun of customs you do not understand. Learning about them is the way to show respect.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        question={
          <ol className="list-decimal space-y-2 pl-5">
            <li>On which date is Heritage Day?</li>
            <li>Which festival is the Hindu Festival of Lights, and what does it celebrate?</li>
            <li>Which Muslim festival ends the month of fasting?</li>
            <li>How do we show respect for another family’s customs?</li>
          </ol>
        }
        answer={
          <ol className="list-decimal space-y-2 pl-5">
            <li>24 September.</li>
            <li>Diwali: the victory of light over darkness.</li>
            <li>Eid al-Fitr.</li>
            <li>By listening politely and asking questions.</li>
          </ol>
        }
      />,
    ),
  },
];

export const bank: CapsItem[] = [
  {
    prompt: 'Heritage Day is celebrated each year on…',
    options: ['24 September', '16 June', '27 April', '25 December'],
    answer: '24 September',
    explanation: 'Heritage Day honours the cultures of South Africa.',
  },
  {
    prompt: 'The lighting of lamps to show light winning over darkness belongs to…',
    options: ['Diwali', 'Eid al-Fitr', 'Christmas', 'Easter'],
    answer: 'Diwali',
    explanation: 'Diwali is the Hindu Festival of Lights.',
  },
  {
    prompt: 'Eid al-Fitr marks…',
    options: ['the end of Ramadan', 'the start of the new year', 'the birth of Jesus', 'the harvest'],
    answer: 'the end of Ramadan',
    explanation: 'Muslims celebrate after the month of fasting.',
  },
  {
    prompt: 'Which action shows respect for another family’s religious customs?',
    options: ['Listening politely and asking questions', 'Laughing at the clothes', 'Refusing to go near', 'Copying them as a joke'],
    answer: 'Listening politely and asking questions',
    explanation: 'Respect means treating beliefs with care.',
  },
  {
    prompt: 'Christians celebrate the birth of Jesus Christ at…',
    options: ['Christmas', 'Diwali', 'Eid', 'Heritage Day'],
    answer: 'Christmas',
    explanation: 'Christmas is on 25 December.',
  },
];

const FestivalsCustoms = () => (
  <CapsSubjectTopic
    title="Festivals and Customs"
    subtitle="Why we celebrate, festivals of different faiths and respect"
    learnSteps={learnSteps}
    task="gr5-life-skills-festivals"
    bank={bank}
    apiPath="/api/caps/lsk"
    grade={5}
  />
);

export default FestivalsCustoms;
