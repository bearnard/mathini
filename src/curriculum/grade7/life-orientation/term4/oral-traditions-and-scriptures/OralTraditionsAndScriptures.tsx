import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { FactCards } from '../../../../../components/diagrams/aq10/Aq10';
import { StepFlow } from '../../../../../components/diagrams/lo/PswPictures';

// Teacher-check items for this lesson are in docs/notes/lo-senior-doubts.md. Help sources: Childline 116, GBV Command Centre 0800 428 428, National AIDS Helpline 0800 012 322, SAPS 10111.
const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;
export const learnSteps: LearnStep[] = [
  {
    title: 'Oral traditions and scriptures',
    content: slide(
      <>
        <Rule>Religions pass on their beliefs, stories and rules in two main ways. An oral tradition is passed from person to person by speaking and listening, through stories, songs, praises and proverbs. Scriptures are holy writings that are written down and read. Many religions use both. This lesson describes them; it does not say that any religion is better than another.</Rule>
        <FactCards
          cards={[
            { title: 'Oral tradition', line1: 'stories, songs and', line2: 'proverbs passed by voice' },
            { title: 'Scriptures', line1: 'holy writings that', line2: 'are written down' },
            { title: 'Both', line1: 'many religions use', line2: 'both ways' },
            { title: 'Respect', line1: 'we describe, we do', line2: 'not rank religions' },
          ]}
          aria="Oral traditions and scriptures. Oral tradition: stories, songs and proverbs passed by voice. Scriptures: holy writings that are written down. Both: many religions use both ways. Respect: we describe religions, we do not rank them."
        />
        <Worked
          title="Oral or written?"
          steps={[
            'A grandmother tells a story with a lesson to her grandchildren: an oral tradition.',
            'A person reads a passage from a holy book at a service: a scripture.',
            'A congregation sings a hymn that was learned by heart: an oral tradition that is also found in writing.',
          ]}
        />
        <Mistake>Believing that only written holy books are important. Oral traditions are also a rich and respected way of passing on beliefs.</Mistake>
      </>,
    ),
  },
  {
    title: 'The scriptures of major religions in South Africa',
    content: slide(
      <>
        <Rule>Followers of Judaism read the Tanakh, which includes the Torah. Many Christians read the Bible. Muslims read the Qur&rsquo;an, which many believe is the word of God. Many Hindus read the Vedas and the Bhagavad Gita. Many Buddhists follow teachings that are collected in the Tripitaka. People who follow African traditional beliefs usually rely on oral traditions such as stories, praise poems and proverbs.</Rule>
        <FactCards
          cards={[
            { title: 'Judaism', line1: 'the Tanakh, including', line2: 'the Torah' },
            { title: 'Christianity', line1: 'the Bible, with the Old', line2: 'and New Testaments' },
            { title: 'Islam', line1: 'the Qur’an', line2: 'read in Arabic' },
            { title: 'Hinduism, Buddhism', line1: 'the Vedas and Bhagavad Gita,', line2: 'the Tripitaka' },
          ]}
          aria="Scriptures of major religions. Judaism: the Tanakh, including the Torah. Christianity: the Bible, with the Old and New Testaments. Islam: the Qur'an, read in Arabic. Hinduism and Buddhism: the Vedas and Bhagavad Gita, and the Tripitaka."
        />
        <Worked
          title="Match the scripture"
          steps={[
            'The Qur’an is the scripture of Islam.',
            'The Torah is part of the Tanakh, the scripture of Judaism.',
            'The Bhagavad Gita is one of the best-known Hindu scriptures.',
          ]}
        />
        <Mistake>Mixing up the scriptures of different religions. Learn the name of each one and which religion uses it.</Mistake>
      </>,
    ),
  },
  {
    title: 'The role of oral traditions and scriptures',
    content: slide(
      <>
        <Rule>Oral traditions and scriptures keep beliefs alive from one generation to the next. They teach values such as respect, honesty and kindness, they guide how people live and celebrate, and they bring communities together. In many African communities, elders tell stories and proverbs that teach children how to behave. Many followers read their scriptures at services and festivals.</Rule>
        <FactCards
          cards={[
            { title: 'Pass on', line1: 'beliefs go from one', line2: 'generation to the next' },
            { title: 'Teach', line1: 'values such as respect', line2: 'and honesty' },
            { title: 'Guide', line1: 'how people live and', line2: 'celebrate' },
            { title: 'Unite', line1: 'communities share', line2: 'stories and services' },
          ]}
          aria="The role of oral traditions and scriptures. Pass on: beliefs go from one generation to the next. Teach: values such as respect and honesty. Guide: how people live and celebrate. Unite: communities share stories and services."
        />
        <Worked
          title="Explain the role"
          steps={[
            'An elder tells a proverb about sharing at a family gathering.',
            'The children learn a value from it, and the family feels close.',
            'Many followers believe that their scriptures do the same for their communities.',
          ]}
        />
        <Mistake>Saying that all followers of a religion practise in exactly the same way. People in one religion can differ.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          <>What is an oral tradition?</>,
          <>What is a scripture?</>,
          <>Which book is read by Muslims?</>,
          <>Give one role of oral traditions and scriptures.</>,
        ]}
        answers={[
          <>Beliefs and stories passed on by speaking and listening.</>,
          <>A holy writing.</>,
          <>The Qur&rsquo;an.</>,
          <>They pass on beliefs, teach values and bring communities together.</>,
        ]}
      />,
    ),
  },
];

export const bank: CapsItem[] = [
  {
    prompt: "What is an oral tradition?",
    options: ["A book that is printed in a press", "A computer game for children", "Stories and beliefs passed on by voice", "A kind of building in a town"],
    answer: "Stories and beliefs passed on by voice",
    explanation: "Stories, songs, praises and proverbs are passed on by voice.",
  },
  {
    prompt: "What is a scripture?",
    options: ["A holy writing", "A kind of song only", "A football match", "A shop"],
    answer: "A holy writing",
    explanation: "Scriptures are written down and read.",
  },
  {
    prompt: "Which book is read by many Christians?",
    options: ["The Qur'an", "The Tanakh", "The Vedas", "The Bible"],
    answer: "The Bible",
    explanation: "The Bible is the scripture of Christianity.",
  },
  {
    prompt: "Which scripture do Muslims read?",
    options: ["The Bible", "The Qur'an", "The Tanakh", "The Tripitaka"],
    answer: "The Qur'an",
    explanation: "The Qur'an is the scripture of Islam.",
  },
  {
    prompt: "Which part of the Tanakh is well known in Judaism?",
    options: ["The Qur'an", "The Torah", "The Vedas", "The Gita"],
    answer: "The Torah",
    explanation: "The Torah is part of the Tanakh.",
  },
  {
    prompt: "Which are well-known scriptures of many Hindus?",
    options: ["The Bible and its two parts", "The Qur'an in Arabic", "The Torah and the Tanakh", "The Vedas and the Bhagavad Gita"],
    answer: "The Vedas and the Bhagavad Gita",
    explanation: "These are among the best-known Hindu scriptures.",
  },
  {
    prompt: "Which collection of teachings do many Buddhists follow?",
    options: ["The Tripitaka", "The Bible", "The Qur'an", "The Torah"],
    answer: "The Tripitaka",
    explanation: "The Tripitaka collects Buddhist teachings.",
  },
  {
    prompt: "How are African traditional beliefs often passed on?",
    options: ["Only by printed books and papers", "Only by television and the radio", "By stories, praise poems and proverbs", "Only by letters in the post"],
    answer: "By stories, praise poems and proverbs",
    explanation: "Oral traditions are central to many African communities.",
  },
  {
    prompt: "Who often tells stories and proverbs to teach children in many African communities?",
    options: ["Shop owners", "Bus drivers", "Sports coaches", "Elders"],
    answer: "Elders",
    explanation: "Elders pass on values and customs.",
  },
  {
    prompt: "What do oral traditions and scriptures do for a community?",
    options: ["They stop people from ever learning", "They pass on beliefs and teach values", "They end all customs for ever", "They remove all values from a community"],
    answer: "They pass on beliefs and teach values",
    explanation: "They also bring communities together.",
  },
  {
    prompt: "Which value do many oral traditions and scriptures teach?",
    options: ["Respect", "Hatred", "Greed", "Cruelty"],
    answer: "Respect",
    explanation: "Many teach respect, honesty and kindness.",
  },
  {
    prompt: "In this lesson, how do we speak about religions?",
    options: ["We say that one is the best", "We say that they are all wrong", "We describe them without ranking them", "We say that they must be mixed"],
    answer: "We describe them without ranking them",
    explanation: "Respect means describing without ranking.",
  },
  {
    prompt: "A grandmother tells a story with a lesson. What is it?",
    options: ["A scripture", "A newspaper", "An oral tradition", "A law"],
    answer: "An oral tradition",
    explanation: "Spoken stories passed on by voice are oral traditions.",
  },
  {
    prompt: "Is every follower of one religion alike in practice?",
    options: ["No, people can differ", "Yes, always", "Yes, in every country", "Yes, in every century"],
    answer: "No, people can differ",
    explanation: "Many followers believe the same teachings, but practice varies.",
  },
];

const OralTraditionsAndScriptures = () => (
  <CapsSubjectTopic
    title="Oral Traditions and Scriptures of Major Religions"
    subtitle="The role of oral traditions and the scriptures of Judaism, Christianity, Islam, Hinduism, Buddhism and African traditional beliefs"
    learnSteps={learnSteps}
    task="gr7-oral-traditions-and-scriptures-t4"
    bank={bank}
    apiPath="/api/caps/lsk"
  />
);

export default OralTraditionsAndScriptures;
