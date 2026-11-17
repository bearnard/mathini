import AfrikaansTopic from '../../_shared/AfrikaansTopic';
import { AfrikaansItem, LearnStep } from '../../_shared/types';
import SpeakButton from '../../_shared/SpeakButton';
import { Check, Mistake, Rule, Worked } from '@/components/subjects/lesson/LessonBlocks';
import { Af, En, MeaningPairs, OrderTiles, TaggedBoxes, TenseTimeline, WordBoxes } from '@/components/diagrams/afrikaans/AfrikaansPictures';

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: 'Dagboekinskrywing: the opening',
    content: slide(
      <>
        <Rule>A <Af>dagboekinskrywing</Af> <En>diary entry</En> is written for yourself. It starts with the <Af>datum</Af> <En>date</En> and often the greeting <Af>Liewe Dagboek</Af> <En>Dear Diary</En>.</Rule>
        <MeaningPairs
          kind="same"
          pairs={[['dagboek', 'diary'], ['inskrywing', 'entry'], ['datum', 'date']]}
          aria="Three Afrikaans words with their English meaning: dagboek is diary, inskrywing is entry, datum is date."
        />
        <Worked
          title="Open the entry"
          steps={[
            <>Start with <Af>die datum</Af>: <Af>14 Maart</Af>, then <Af>Liewe Dagboek,</Af> <En>Dear Diary,</En> <SpeakButton text="Liewe Dagboek" /></>,
            <>After the greeting you write about your day in the first person: <Af>Ek</Af> <En>I</En>.</>,
          ]}
        />
        <Mistake>Starting with <Af>Geagte Meneer</Af>, or writing <Af>Hy het gister gehardloop.</Af> <En>He ran yesterday.</En> A diary uses <Af>Ek</Af>.</Mistake>
      </>,
    ),
  },
  {
    title: 'Time words: gister, vandag, môre',
    content: slide(
      <>
        <Rule>A diary says when things happen. Use <Af>gister</Af> <En>yesterday</En>, <Af>vandag</Af> <En>today</En> and <Af>môre</Af> <En>tomorrow</En>.</Rule>
        <TenseTimeline
          past="Gister het ek gehardloop."
          present="Vandag is ek moeg."
          future="Môre sal ek rus."
          aria="A timeline with three sentences: gister (yesterday) Gister het ek gehardloop, vandag (today) Vandag is ek moeg, and môre (tomorrow) Môre sal ek rus."
        />
        <Worked
          title="Read the three sentences"
          steps={[
            <><Af>Gister het ek gehardloop.</Af> <En>Yesterday I ran.</En> <SpeakButton text="Gister het ek gehardloop." /></>,
            <><Af>Vandag is ek moeg.</Af> <En>Today I am tired.</En> <Af>Môre sal ek rus.</Af> <En>Tomorrow I will rest.</En></>,
          ]}
        />
        <Mistake>Writing <Af>Ek rus môre</Af> and forgetting that <Af>sal</Af> shows the future: <Af>Môre sal ek rus.</Af></Mistake>
      </>,
    ),
  },
  {
    title: 'What happened: het + ge-',
    content: slide(
      <>
        <Rule>For things that already happened, use <Af>het</Af> and a word that starts with <Af>ge-</Af>: <Af>Ek het gespeel</Af> <En>I played</En>.</Rule>
        <WordBoxes
          words={['Ek', 'het', 'gister', 'gespeel']}
          hot={[1, 3]}
          aria="The sentence Ek het gister gespeel (I played yesterday) in four boxes, with the helper het and the word gespeel highlighted."
        />
        <Worked
          title="Make the past"
          steps={[
            <><Af>kyk</Af> <En>watch</En> becomes <Af>Ek het gekyk.</Af> <En>I watched.</En></>,
            <><Af>werk</Af> <En>work</En> becomes <Af>Ek het gewerk.</Af> <En>I worked.</En> <SpeakButton text="Ek het gewerk." /></>,
          ]}
        />
        <Mistake>Writing <Af>Ek speel gister</Af>. For the past, write <Af>Ek het gister gespeel.</Af></Mistake>
      </>,
    ),
  },
  {
    title: 'Feelings: bly, hartseer, moeg, trots',
    content: slide(
      <>
        <Rule>A diary gives your own evaluation of the day. Use feeling words: <Af>bly</Af>, <Af>hartseer</Af>, <Af>moeg</Af> and <Af>trots</Af>.</Rule>
        <TaggedBoxes
          items={[{ word: 'bly', tag: 'happy' }, { word: 'hartseer', tag: 'sad' }, { word: 'moeg', tag: 'tired' }]}
          aria="Three Afrikaans feeling words with their English meaning: bly is happy, hartseer is sad, moeg is tired."
        />
        <Worked
          title="Say how you feel"
          steps={[
            <><Af>Ek is trots.</Af> <En>I am proud.</En> <SpeakButton text="Ek is trots." /></>,
            <><Af>Ek was hartseer.</Af> <En>I was sad.</En> Use <Af>is</Af> for now and <Af>was</Af> for then.</>,
          ]}
        />
        <Mistake>Only listing events. Add one sentence about how you feel.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <>
        <Check question={<>Which word means <em>yesterday</em>?</>} answer={<><Af>Gister</Af>.</>} />
        <Check question={<>Which word means <em>tomorrow</em>?</>} answer={<><Af>Môre</Af>.</>} />
        <Check question={<>Complete: <Af>Gister ___ ek gehardloop.</Af></>} answer={<><Af>het</Af>: <Af>Gister het ek gehardloop.</Af></>} />
        <Check question={<>Which word means <em>tired</em>?</>} answer={<><Af>Moeg</Af>.</>} />
      </>,
    ),
  },
];

export const bank: AfrikaansItem[] = [
  {
    prompt: "Watter Afrikaanse woord beteken 'diary'?",
    options: ['dagblad', 'bladsy', 'skryfboek', 'dagboek'],
    answer: 'dagboek',
    explanation: "'Dagboek' means 'diary'. A 'dagboekinskrywing' is a diary entry.",
  },
  {
    prompt: "Watter Afrikaanse woord beteken 'yesterday'?",
    options: ['vandag', 'môre', 'nou', 'gister'],
    answer: 'gister',
    explanation: "'Gister' means 'yesterday'. 'Vandag' is 'today' and 'môre' is 'tomorrow'.",
  },
  {
    prompt: "Watter Afrikaanse woord beteken 'tomorrow'?",
    options: ['môre', 'gister', 'vandag', 'nou'],
    answer: 'môre',
    explanation: "'Môre' means 'tomorrow'.",
  },
  {
    prompt: "Hoe kan 'n dagboekinskrywing begin?",
    options: ['Geagte Meneer,', 'Liewe Dagboek,', 'Aan: die Redakteur', 'Hoogagtend'],
    answer: 'Liewe Dagboek,',
    explanation: "A diary entry often starts with the date and 'Liewe Dagboek' (Dear Diary).",
  },
  {
    prompt: 'Watter sin vertel van iets wat reeds gebeur het?',
    options: ['Ek het gister gespeel.', 'Ek speel nou buite.', 'Ek sal môre baie speel.', 'Speel jy vandag saam?'],
    answer: 'Ek het gister gespeel.',
    explanation: "'het' and a word starting with 'ge-' show the past: 'I played yesterday'.",
  },
  {
    prompt: "Voltooi die sin: 'Gister ___ ek gehardloop.'",
    options: ['sal', 'het', 'is', 'word'],
    answer: 'het',
    explanation: "'Gister het ek gehardloop' means 'Yesterday I ran'.",
  },
  {
    prompt: "Watter sin wys 'n plan vir môre?",
    options: ['Gister het ek gerus.', 'Vandag is ek moeg.', 'Môre sal ek rus.', 'Ek het gewerk.'],
    answer: 'Môre sal ek rus.',
    explanation: "'Sal' shows the future: 'Tomorrow I will rest'.",
  },
  {
    prompt: "Watter Afrikaanse woord beteken 'tired'?",
    options: ['bly', 'trots', 'hartseer', 'moeg'],
    answer: 'moeg',
    explanation: "'Moeg' means 'tired'.",
  },
  {
    prompt: "Wat beteken 'Ek is trots'?",
    options: ['I am sad.', 'I am proud.', 'I am tired.', 'I am happy.'],
    answer: 'I am proud.',
    explanation: "'Trots' means 'proud'.",
  },
  {
    prompt: 'Watter voornaamwoord gebruik jy in jou dagboek?',
    options: ['Hy', 'Hulle', 'Ek', 'U'],
    answer: 'Ek',
    explanation: "A diary is written in the first person: 'Ek' (I).",
  },
  {
    prompt: 'Watter sin pas NIE by jou dagboek nie?',
    options: ['Hy het gister gehardloop.', 'Ek het gister ver gehardloop.', 'Ek is vandag baie moeg.', 'Môre sal ek lekker rus.'],
    answer: 'Hy het gister gehardloop.',
    explanation: "It is in the third person. A diary uses 'Ek'.",
  },
  {
    prompt: 'Wat kom heel eerste in die dagboekinskrywing?',
    options: ['die datum', 'die handtekening', 'die adres van die skool', 'die onderwerp van die brief'],
    answer: 'die datum',
    explanation: "A diary entry starts with the date.",
  },
];

const DiaryEntry = () => (
  <AfrikaansTopic
    title="Dagboekinskrywing"
    subtitle="The opening, time words, the past with het, and feelings"
    learnSteps={learnSteps}
    task="gr9-afr-diary-entry-t2"
    bank={bank}
    speak="options"
  />
);

export default DiaryEntry;
