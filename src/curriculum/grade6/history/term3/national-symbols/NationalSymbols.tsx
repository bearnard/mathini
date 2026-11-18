import HisTopic from '../../_shared/HisTopic';
import type { HisItem, LearnStep } from '../../_shared/types';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { FlowSteps } from '../../../../../components/diagrams/lifesci/LifeFlows';
import { InfoTable } from '../../../../../components/diagrams/lifesci/InfoTable';
import * as h from '../../../../../components/diagrams/history/history6';

// CAPS Grade 6 History Term 3: national symbols of South Africa (flag 1994, coat of arms 2000, anthem joined 1997). Facts to confirm: docs/notes/g6-history-t3-doubts.md.
const slide = (children: React.ReactNode) => <div className="space-y-4 text-left">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: 'Why a country has symbols',
    content: slide(
      <>
        <Rule>A national symbol is something that stands for a whole country, such as a flag, a coat of arms or an anthem. Symbols help people with different languages and cultures to feel that they belong to one nation. South Africa chose new symbols for its new democracy.</Rule>
        <FlowSteps
          aria="Three national symbols. The flag, the coat of arms and the national anthem each stand for the whole country."
          steps={[
            { label: 'The flag', sub: 'seen on a pole' },
            { label: 'The coat of arms', sub: 'used on official papers' },
            { label: 'The national anthem', sub: 'sung together' },
          ]}
        />
        <Worked
          title="Symbols in daily life"
          steps={[
            <>You see the flag at schools, at sports matches and at government buildings.</>,
            <>The coat of arms is on official documents such as passports.</>,
            <>The anthem is sung at school events and at sports matches.</>,
          ]}
        />
        <Mistake>Thinking that a symbol is just a picture. A symbol stands for the ideas and the people of the whole country.</Mistake>
      </>,
    ),
  },
  {
    title: 'The flag of South Africa',
    content: slide(
      <>
        <Rule>The new national flag was first flown on {h.FLAG_FIRST_FLOWN}, the year of the first democratic election. It has six colours. A &quot;Y&quot; shape begins on the left and joins into one band that runs to the right. This shows different groups coming together and moving forward as one nation.</Rule>
        <InfoTable
          cols={[{ title: 'Part of the flag', w: 45 }, { title: 'What it shows', w: 55 }]}
          rows={[
            ['Six colours', 'many different parts of the nation'],
            ['The Y shape', 'groups coming together'],
            ['One band to the right', 'moving forward as one'],
            ['First flown', `${h.FLAG_FIRST_FLOWN}, a new democracy`],
          ]}
          aria={`A table about the flag. Six colours: many different parts of the nation. The Y shape: groups coming together. One band to the right: moving forward as one. First flown in ${h.FLAG_FIRST_FLOWN}, a new democracy.`}
        />
        <Worked
          title="Read the flag"
          steps={[
            <>The two arms of the Y come in from the left and meet.</>,
            <>They join into one band that goes on to the right.</>,
            <>So the flag tells a story: different people, one road ahead.</>,
          ]}
        />
        <Mistake>Giving each colour one fixed meaning. The colours were chosen for their design together, and the flag is read as a whole.</Mistake>
      </>,
    ),
  },
  {
    title: 'The coat of arms',
    content: slide(
      <>
        <Rule>The coat of arms was introduced in {h.COAT_OF_ARMS_YEAR}, {h.FLAG_TO_ARMS} years after the flag. Its motto is written in the /Xam language of the Khoisan people. It means &quot;diverse people unite&quot;. The rising sun shows a new beginning, and the secretary bird, the protea and the ears of wheat show protection, beauty and growth.</Rule>
        <InfoTable
          cols={[{ title: 'Part', w: 40 }, { title: 'What it shows', w: 60 }]}
          rows={[
            ['The motto', 'diverse people unite'],
            ['Rising sun', 'a new beginning'],
            ['Protea', 'beauty and growth'],
            ['Secretary bird', 'protection'],
          ]}
          aria="A table about the coat of arms. The motto means diverse people unite. The rising sun shows a new beginning. The protea shows beauty and growth. The secretary bird shows protection."
        />
        <Worked
          title="Why the motto is in /Xam"
          steps={[
            <>The /Xam were Khoisan people, among the first people of southern Africa.</>,
            <>/Xam is no longer spoken as a home language.</>,
            <>Using it honours the first people and says that all people are part of the nation.</>,
          ]}
        />
        <Mistake>Thinking that the motto is in English. It is in /Xam and means &quot;diverse people unite&quot;.</Mistake>
      </>,
    ),
  },
  {
    title: 'The national anthem',
    content: slide(
      <>
        <Rule>The national anthem joins two older songs: <em>Nkosi Sikelel&apos; iAfrika</em> and <em>Die Stem</em>. They were joined into one anthem in {h.ANTHEM_COMBINED}. It is sung in several languages, and it shows that people with a different history can sing together.</Rule>
        <FlowSteps
          aria="How the anthem was made. Nkosi Sikelel' iAfrika and Die Stem were two older songs. In 1997 they were joined into one national anthem."
          steps={[
            { label: "Nkosi Sikelel' iAfrika" },
            { label: 'Die Stem' },
            { label: `${h.ANTHEM_COMBINED}: joined into one anthem` },
          ]}
        />
        <Worked
          title="One anthem, many voices"
          steps={[
            <>The anthem has lines in isiXhosa, isiZulu, Sesotho, Afrikaans and English.</>,
            <>Each language is part of the nation, so each has a place in the song.</>,
            <>Standing and singing together shows respect for the country and for each other.</>,
          ]}
        />
        <Mistake>Thinking that the anthem is only one old song. It joins two songs and uses many languages.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <Check
        questions={[
          <>In which year was the new flag first flown?</>,
          <>What does the motto on the coat of arms mean?</>,
          <>Which two songs were joined to make the anthem?</>,
          <>How many years after the flag was the coat of arms introduced?</>,
        ]}
        answers={[
          <><strong>{h.FLAG_FIRST_FLOWN}</strong>.</>,
          <><strong>Diverse people unite</strong>.</>,
          <><em>Nkosi Sikelel&apos; iAfrika</em> and <em>Die Stem</em>.</>,
          <>{h.COAT_OF_ARMS_YEAR} − {h.FLAG_FIRST_FLOWN} = <strong>{h.FLAG_TO_ARMS} years</strong>.</>,
        ]}
      />,
    ),
  },
];

// Literal bank (the bank test recomputes every year and span independently).
export const bank: HisItem[] = [
  { prompt: "What is a national symbol?", options: ["A tool used to build the roads", "Something that stands for a whole country", "A person who leads the government", "A rule that is used in a court"], answer: "Something that stands for a whole country", explanation: "Flags, coats of arms and anthems stand for the whole nation." },
  { prompt: "Why does a country have national symbols?", options: ["To make people pay a lot more tax", "To keep people from taking part", "To divide people into smaller groups", "To help people feel that they belong together"], answer: "To help people feel that they belong together", explanation: "Symbols unite people of different languages and cultures." },
  { prompt: "The new flag was first flown during which year?", options: ["1994", "1948", "1976", "2000"], answer: "1994", explanation: "The flag was first flown in 1994, the year of the first democratic election." },
  { prompt: "How many colours does the national flag have?", options: ["Two", "Three", "Six", "Nine"], answer: "Six", explanation: "The flag has six colours joined by a Y shape." },
  { prompt: "What does the Y shape on the flag show?", options: ["A road that has no end", "Different groups coming together", "A river that runs south", "A tree that gives some shade"], answer: "Different groups coming together", explanation: "The arms of the Y join into one band that moves forward." },
  { prompt: "The coat of arms came into use in which year?", options: ["1994", "1997", "2010", "2000"], answer: "2000", explanation: "The new coat of arms was introduced on 27 April 2000." },
  { prompt: "In which language is the motto on the coat of arms written?", options: ["/Xam, a Khoisan language", "Latin, a Roman language", "French, a European language", "Hindi, an Indian language"], answer: "/Xam, a Khoisan language", explanation: "The /Xam motto honours the first people of southern Africa." },
  { prompt: "Translate the motto of the coat of arms into English.", options: ["Freedom is the best prize", "Work hard to get rich", "Diverse people unite", "Peace comes from the sea"], answer: "Diverse people unite", explanation: "The motto calls on different people to unite." },
  { prompt: "What does the rising sun on the coat of arms show?", options: ["The end of a long day", "A new beginning", "A very hot summer", "A wish to rule the sea"], answer: "A new beginning", explanation: "The rising sun stands for a new beginning for the nation." },
  { prompt: "The anthem is built from which two older songs?", options: ["Shosholoza and Meadowlands", "Pata Pata and Jerusalema", "God Save the King and Rule Britannia", "Nkosi Sikelel' iAfrika and Die Stem"], answer: "Nkosi Sikelel' iAfrika and Die Stem", explanation: "The two songs were joined into one anthem." },
  { prompt: "In which year were the two songs joined as one anthem?", options: ["1997", "1961", "1994", "2000"], answer: "1997", explanation: "The anthem was joined in 1997." },
  { prompt: "Why is the anthem sung in several languages?", options: ["Only one language is allowed", "The words are too hard to learn", "Many languages are part of the nation", "Each school must choose one"], answer: "Many languages are part of the nation", explanation: "Every language has a place in the song." },
  { prompt: "What is the gap in years between the flag and the coat of arms?", options: ["2 years", "6 years", "16 years", "60 years"], answer: "6 years", explanation: "2000 − 1994 = 6 years." },
  { prompt: "Which statement about national symbols is correct?", options: ["They are only for the government", "They mean the same in every country", "They are used only in sport", "They help to unite people of many backgrounds"], answer: "They help to unite people of many backgrounds", explanation: "Symbols belong to everyone in the country." },
];

const NationalSymbols = () => (
  <HisTopic
    title="National Symbols of South Africa"
    subtitle="The flag, the coat of arms and the national anthem, and what they show"
    learnSteps={learnSteps}
    task="gr6-national-symbols-t3"
    bank={bank}
  />
);

export default NationalSymbols;
