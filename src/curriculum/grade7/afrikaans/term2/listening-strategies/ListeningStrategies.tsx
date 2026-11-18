import AfrikaansTopic from '../../_shared/AfrikaansTopic';
import { AfrikaansItem, LearnStep } from '../../_shared/types';
import SpeakButton from '../../_shared/SpeakButton';
import { Check, Mistake, Rule, Worked } from '@/components/subjects/lesson/LessonBlocks';
import { Af, En, MeaningPairs, OrderTiles, TaggedBoxes } from '@/components/diagrams/afrikaans/AfrikaansPictures';

// Grade 7 Afrikaans FAL oral skills: listening strategies (simple Afrikaans; teacher-check list in docs/notes/oral-afrikaans-g7-9-doubts.md).
const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: "Listen with a purpose",
    content: slide(
      <>
        <Rule>To <Af>luister</Af> <En>listen</En> well, know your <Af>doel</Af> <En>purpose</En>. Think about the topic before you listen. Look at the speaker.</Rule>
        <OrderTiles tiles={["Voor: dink", "Tydens: luister", "Daarna: kyk"]} aria={"The stages of listening: Voor is before, dink is think; Tydens is during, luister is listen; Daarna is after, kyk is check."} />
        <Worked
          title="Before you listen"
          steps={[
            <><Af>Wat is my doel?</Af> <En>What is my purpose?</En> <SpeakButton text="Wat is my doel?" /></>,
            <><Af>Dink aan die onderwerp.</Af> <En>Think about the topic.</En> <SpeakButton text="Dink aan die onderwerp." /></>,
            <><Af>Kyk na die spreker.</Af> <En>Look at the speaker.</En> <SpeakButton text="Kyk na die spreker." /></>,
          ]}
        />
        <Mistake>Talking while someone speaks. A good listener is quiet.</Mistake>
      </>,
    ),
  },
  {
    title: "Notes and key words",
    content: slide(
      <>
        <Rule>Write <Af>sleutelwoorde</Af> <En>key words</En> in your <Af>notas</Af> <En>notes</En>. Do not write whole sentences. Leave a space for more.</Rule>
        <OrderTiles tiles={["Luister", "Skryf sleutelwoorde", "Lees jou notas"]} aria={"Taking notes in order: Luister, Skryf sleutelwoorde, Lees jou notas."} />
        <Worked
          title="Take notes"
          steps={[
            <><Af>Skryf net sleutelwoorde.</Af> <En>Write only key words.</En> <SpeakButton text="Skryf net sleutelwoorde." /></>,
            <><Af>Los &apos;n spasie oop.</Af> <En>Leave a space open.</En> <SpeakButton text="Los 'n spasie oop." /></>,
            <><Af>Teen 150 woorde per minuut neem 300 woorde 2 minute.</Af> <En>At 150 words a minute, 300 words take 2 minutes.</En> <SpeakButton text="Teen 150 woorde per minuut neem 300 woorde 2 minute." /></>,
          ]}
        />
        <Mistake>Writing every word. You will miss the next sentence.</Mistake>
      </>,
    ),
  },
  {
    title: "Fact, opinion and tone",
    content: slide(
      <>
        <Rule>A <Af>feit</Af> <En>fact</En> can be checked. An <Af>mening</Af> <En>opinion</En> is what someone thinks. The <Af>toon</Af> <En>tone</En> of the voice shows feeling.</Rule>
        <TaggedBoxes items={[{"word": "feit", "tag": "fact"}, {"word": "mening", "tag": "opinion"}, {"word": "toon", "tag": "tone"}]} aria={"Three words: feit means fact, mening means opinion, toon means tone."} />
        <Worked
          title="Sort what you hear"
          steps={[
            <><Af>Die saal het 200 sitplekke.</Af> <En>The hall has 200 seats.</En> <SpeakButton text="Die saal het 200 sitplekke." /> This is a fact.</>,
            <><Af>Die saal is die beste plek.</Af> <En>The hall is the best place.</En> <SpeakButton text="Die saal is die beste plek." /> This is an opinion.</>,
            <><Af>Hy sê dit met &apos;n kwaai stem.</Af> <En>He says it in an angry voice.</En> <SpeakButton text="Hy sê dit met 'n kwaai stem." /></>,
          ]}
        />
        <Mistake>Thinking that an opinion is a fact because the speaker sounds sure.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <>
        <Check question={<>Which word means <em>purpose</em>?</>} answer={<><Af>doel</Af> <En>purpose</En>.</>} />
        <Check question={<>What do you write in notes?</>} answer={<><Af>sleutelwoorde</Af> <En>key words</En>.</>} />
        <Check question={<>Is <em>The hall has 200 seats</em> a fact?</>} answer={<>Yes: <Af>feit</Af> <En>fact</En>.</>} />
        <Check question={<>Which word means <em>opinion</em>?</>} answer={<><Af>mening</Af> <En>opinion</En>.</>} />
      </>,
    ),
  },
];

export const bank: AfrikaansItem[] = [
  {
    prompt: "Watter Afrikaanse woord beteken 'listen'?",
    options: ["skryf", "luister", "praat", "lees"],
    answer: "luister",
    explanation: "'Luister' means to listen.",
  },
  {
    prompt: "Watter Afrikaanse woord beteken 'purpose'?",
    options: ["feit", "toon", "nota", "doel"],
    answer: "doel",
    explanation: "'Doel' means purpose.",
  },
  {
    prompt: "Wat doen jy eers voor jy luister?",
    options: ["Dink aan die onderwerp.", "Skryf die antwoorde neer.", "Loop uit die klas uit.", "Praat met jou maat."],
    answer: "Dink aan die onderwerp.",
    explanation: "Thinking about the topic helps you to follow.",
  },
  {
    prompt: "Watter Afrikaanse woord beteken 'key words'?",
    options: ["voorbeelde", "leesstukke", "sleutelwoorde", "woordeboeke"],
    answer: "sleutelwoorde",
    explanation: "'Sleutelwoorde' are the words that carry the main ideas.",
  },
  {
    prompt: "Watter Afrikaanse woord beteken 'notes'?",
    options: ["feite", "notas", "menings", "vrae"],
    answer: "notas",
    explanation: "'Notas' means notes.",
  },
  {
    prompt: "Wat skryf jy as jy notas maak?",
    options: ["Skryf elke woord neer.", "Skryf net jou naam.", "Skryf niks neer nie.", "Skryf net sleutelwoorde."],
    answer: "Skryf net sleutelwoorde.",
    explanation: "Key words keep your notes short.",
  },
  {
    prompt: "Watter sin beteken 'Leave a space open.'?",
    options: ["Los 'n spasie oop.", "Skryf net sleutelwoorde.", "Kyk na die spreker.", "Dink aan die onderwerp."],
    answer: "Los 'n spasie oop.",
    explanation: "A space lets you add more later.",
  },
  {
    prompt: "Watter Afrikaanse woord beteken 'fact'?",
    options: ["mening", "toon", "feit", "doel"],
    answer: "feit",
    explanation: "'Feit' means a fact that can be checked.",
  },
  {
    prompt: "Watter Afrikaanse woord beteken 'opinion'?",
    options: ["feit", "mening", "toon", "nota"],
    answer: "mening",
    explanation: "'Mening' means what someone thinks.",
  },
  {
    prompt: "Watter sin is 'n feit?",
    options: ["Die saal is die beste plek.", "Die saal is baie mooi.", "Ek dink die saal is groot.", "Die saal het 200 sitplekke."],
    answer: "Die saal het 200 sitplekke.",
    explanation: "The number of seats can be checked.",
  },
  {
    prompt: "Watter sin is 'n mening?",
    options: ["Die saal is die beste plek.", "Die saal het 200 sitplekke.", "Die saal is in die dorp.", "Die saal het twee deure."],
    answer: "Die saal is die beste plek.",
    explanation: "'Die beste' shows what someone thinks.",
  },
  {
    prompt: "Watter Afrikaanse woord beteken 'tone'?",
    options: ["feit", "mening", "toon", "doel"],
    answer: "toon",
    explanation: "'Toon' means the feeling in the voice.",
  },
  {
    prompt: "Hoeveel minute neem 300 woorde teen 150 woorde per minuut?",
    options: ["1 minuut", "2 minute", "3 minute", "20 minute"],
    answer: "2 minute",
    explanation: "300 ÷ 150 = 2 minutes.",
  },
  {
    prompt: "Watter sin beteken 'Look at the speaker.'?",
    options: ["Dink aan die onderwerp.", "Wat is my doel?", "Los 'n spasie oop.", "Kyk na die spreker."],
    answer: "Kyk na die spreker.",
    explanation: "'Spreker' means speaker.",
  },
];

const ListeningStrategies = () => (
  <AfrikaansTopic
    title="Luister met 'n doel"
    subtitle="Listening with a purpose, notes and key words, fact, opinion and tone"
    learnSteps={learnSteps}
    task="gr7-afr-listening-strategies-t2"
    bank={bank}
    speak="options"
  />
);

export default ListeningStrategies;
