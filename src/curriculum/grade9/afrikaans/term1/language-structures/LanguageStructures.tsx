import AfrikaansTopic from '../../_shared/AfrikaansTopic';
import { AfrikaansItem, LearnStep } from '../../_shared/types';
import SpeakButton from '../../_shared/SpeakButton';
import { Check, Mistake, Rule, Worked } from '@/components/subjects/lesson/LessonBlocks';
import { Af, En, MeaningPairs, TenseTimeline } from '@/components/diagrams/afrikaans/AfrikaansPictures';

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: 'Plurals: add -e',
    content: slide(
      <>
        <Rule>Most plurals add <Af>-e</Af>: <Af>boek</Af> becomes <Af>boeke</Af>, <Af>hond</Af> becomes <Af>honde</Af> and <Af>huis</Af> becomes <Af>huise</Af>.</Rule>
        <MeaningPairs
          kind="becomes"
          pairs={[['boek', 'boeke'], ['hond', 'honde'], ['huis', 'huise']]}
          aria="Three nouns and their plurals: boek becomes boeke, hond becomes honde, huis becomes huise."
        />
        <Worked
          title="Make the plural"
          steps={[
            <><Af>een boek, twee boeke</Af> <En>one book, two books</En> <SpeakButton text="een boek, twee boeke" /></>,
            <><Af>een hond, twee honde</Af> and <Af>een huis, twee huise</Af>.</>,
          ]}
        />
        <Mistake>Adding <Af>-s</Af> or <Af>-ke</Af>. <Af>boeks</Af>, <Af>boekke</Af> and <Af>honds</Af> are wrong.</Mistake>
      </>,
    ),
  },
  {
    title: 'Doubling and special plurals',
    content: slide(
      <>
        <Rule>After a short vowel and one consonant, double the consonant: <Af>blom</Af> becomes <Af>blomme</Af>. Learn the special ones: <Af>kind</Af> becomes <Af>kinders</Af> and <Af>dag</Af> becomes <Af>dae</Af>.</Rule>
        <MeaningPairs
          kind="becomes"
          pairs={[['blom', 'blomme'], ['kind', 'kinders'], ['dag', 'dae']]}
          aria="Three nouns and their plurals: blom becomes blomme, kind becomes kinders, dag becomes dae."
        />
        <Worked
          title="Check the form"
          steps={[
            <><Af>blom</Af> has a short vowel, so the <Af>m</Af> doubles: <Af>blomme</Af>. <SpeakButton text="blom, blomme" /></>,
            <><Af>kinders</Af> and <Af>dae</Af> do not follow a rule: learn them.</>,
          ]}
        />
        <Mistake>Writing <Af>blome</Af> or <Af>bloms</Af>, <Af>kinde</Af> or <Af>kinds</Af>, <Af>dage</Af> or <Af>dags</Af>. Use <Af>blomme</Af>, <Af>kinders</Af>, <Af>dae</Af>.</Mistake>
      </>,
    ),
  },
  {
    title: 'Adjectives before plural nouns',
    content: slide(
      <>
        <Rule>An adjective describes the noun, also in the plural. Many adjectives take an <Af>-e</Af> before the noun: <Af>vriendelik</Af> becomes <Af>vriendelike</Af>.</Rule>
        <Worked
          title="Describe the plural"
          steps={[
            <><Af>Die vriendelike kinders speel.</Af> <En>The friendly children play.</En> <SpeakButton text="Die vriendelike kinders speel." /></>,
            <><Af>Die mooi blomme groei in die tuin.</Af> <En>The pretty flowers grow in the garden.</En> <Af>mooi</Af> stays the same.</>,
          ]}
        />
        <Mistake>Forgetting that the noun must be plural too: <Af>twee boek</Af> is wrong. Say <Af>twee boeke</Af>.</Mistake>
      </>,
    ),
  },
  {
    title: 'Tenses and punctuation in context',
    content: slide(
      <>
        <Rule>Keep the tense clear in a text: <Af>het ... ge-</Af> for the past, the plain verb for the present, <Af>sal</Af> for the future. End each sentence with the right mark.</Rule>
        <TenseTimeline
          past="Die kinders het blomme geplant."
          present="Die kinders plant blomme."
          future="Die kinders sal blomme plant."
          aria="A timeline with three sentences: gister, Die kinders het blomme geplant; vandag, Die kinders plant blomme; môre, Die kinders sal blomme plant."
        />
        <Worked
          title="Check tense and punctuation"
          steps={[
            <><Af>Gister het die kinders blomme geplant.</Af> A statement, so a full stop.</>,
            <><Af>Ek hou van boeke, blomme en honde.</Af> <En>I like books, flowers and dogs.</En> Commas separate the items in a list.</>,
          ]}
        />
        <Mistake>Mixing tenses in one text. If the story is about yesterday, keep the verbs in the past.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <>
        <Check question={<>What is the plural of <Af>boek</Af>?</>} answer={<><Af>boeke</Af>.</>} />
        <Check question={<>What is the plural of <Af>kind</Af>?</>} answer={<><Af>kinders</Af>.</>} />
        <Check question={<>What is the plural of <Af>dag</Af>?</>} answer={<><Af>dae</Af>.</>} />
        <Check question={<>What is the plural of <Af>blom</Af>?</>} answer={<><Af>blomme</Af>.</>} />
      </>,
    ),
  },
];

const bank: AfrikaansItem[] = [
  {
    prompt: "Wat is die meervoud van 'boek'?",
    options: ["boeke", "boeks", "boekke", "boekers"],
    answer: "boeke",
    explanation: "'Boek' becomes 'boeke' in the plural (boek / boeke).",
  },
  {
    prompt: "Wat is die meervoud van 'hond'?",
    options: ["honde", "honds", "hondde", "hondens"],
    answer: "honde",
    explanation: "'Hond' becomes 'honde' in the plural (hond / honde).",
  },
  {
    prompt: "Wat is die meervoud van 'kind'?",
    options: ["kinders", "kinde", "kinds", "kindere"],
    answer: "kinders",
    explanation: "'Kind' has the special plural 'kinders' (kind / kinders).",
  },
  {
    prompt: "Wat is die meervoud van 'huis'?",
    options: ["huise", "huisse", "huises", "huiser"],
    answer: "huise",
    explanation: "'Huis' becomes 'huise' in the plural (huis / huise).",
  },
  {
    prompt: "Wat is die meervoud van 'dag'?",
    options: ["dae", "dage", "dagge", "dags"],
    answer: "dae",
    explanation: "'Dag' changes to 'dae' in the plural (dag / dae).",
  },
  {
    prompt: "Wat is die meervoud van 'blom'?",
    options: ["blomme", "bloms", "blome", "blommes"],
    answer: "blomme",
    explanation: "'Blom' has a short vowel, so the consonant doubles: blom / blomme.",
  },
];

export { bank };

const LanguageStructures = () => (
  <AfrikaansTopic
    title="Taalstrukture in Konteks"
    subtitle="Plurals, adjectives, tenses, and punctuation"
    learnSteps={learnSteps}
    task="gr9-language-structures-t1"
    bank={bank}
    speak="options"
  />
);

export default LanguageStructures;
