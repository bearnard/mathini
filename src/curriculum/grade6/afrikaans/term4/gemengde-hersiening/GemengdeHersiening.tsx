import AfrikaansTopic from '../../_shared/AfrikaansTopic';
import { AfrikaansItem, LearnStep } from '../../_shared/types';
import SpeakButton from '../../_shared/SpeakButton';
import { Check, Mistake, Rule, Worked } from '@/components/subjects/lesson/LessonBlocks';
import { Af, En, MeaningPairs, TenseTimeline } from '@/components/diagrams/afrikaans/AfrikaansPictures';

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: 'Revise: the time word shows the tense',
    content: slide(
      <>
        <Rule>Look for the time word. <Af>Vandag</Af> or <Af>elke dag</Af> means present. <Af>Gister</Af> means past: <Af>het ... ge-</Af>. <Af>Môre</Af> means future: <Af>sal</Af>.</Rule>
        <TenseTimeline
          past="Ek het sokker gespeel."
          present="Ek speel sokker."
          future="Ek sal sokker speel."
          aria="A timeline with three sentences: gister, Ek het sokker gespeel; vandag, Ek speel sokker; môre, Ek sal sokker speel."
        />
        <Worked
          title="Pick the tense"
          steps={[
            <><Af>Hulle stap elke dag skool toe.</Af> <En>They walk to school every day.</En> Present: <Af>stap</Af>.</>,
            <><Af>Gister het ek sokker gespeel.</Af> and <Af>Gister het sy 'n appel geëet.</Af> Past: <Af>het ... gespeel</Af>, <Af>het ... geëet</Af>.</>,
            <><Af>Môre sal ek my boek lees.</Af> <En>Tomorrow I will read my book.</En> Future: <Af>sal</Af>. <SpeakButton text="Môre sal ek my boek lees." /></>,
          ]}
        />
        <Mistake>Using <Af>sal</Af> after <Af>Gister</Af>, or <Af>het</Af> after <Af>Môre</Af>. The time word decides.</Mistake>
      </>,
    ),
  },
  {
    title: 'Revise: plurals and adjectives',
    content: slide(
      <>
        <Rule>Most plurals add <Af>-e</Af>: <Af>boek</Af> becomes <Af>boeke</Af>. Words in <Af>-el</Af> take <Af>-s</Af>. An adjective describes a noun.</Rule>
        <MeaningPairs
          kind="becomes"
          pairs={[['boek', 'boeke'], ['hond', 'honde'], ['tafel', 'tafels']]}
          aria="Three nouns and their plurals: boek becomes boeke, hond becomes honde, tafel becomes tafels."
        />
        <Worked
          title="Plural and adjective"
          steps={[
            <>One book, two books: <Af>een boek, twee boeke</Af>. <SpeakButton text="een boek, twee boeke" /></>,
            <><Af>Die seun is vriendelik.</Af> <En>The boy is friendly.</En> <Af>vriendelik</Af> describes the boy.</>,
            <><Af>Die rooi bal lê in die tuin.</Af> <En>The red ball lies in the garden.</En> <Af>rooi</Af> describes the ball.</>,
          ]}
        />
        <Mistake>Adding <Af>-s</Af> to every plural. <Af>boeks</Af> and <Af>boekes</Af> are wrong. The plural is <Af>boeke</Af>.</Mistake>
      </>,
    ),
  },
  {
    title: 'Revise: words you need',
    content: slide(
      <>
        <Rule>Learn the Afrikaans word together with its English meaning. Then check that the word fits the whole sentence.</Rule>
        <MeaningPairs
          kind="same"
          pairs={[['venster', 'window'], ['deur', 'door'], ['stoel', 'chair']]}
          aria="Three Afrikaans nouns with their English meaning: venster is window, deur is door, stoel is chair."
        />
        <Worked
          title="Choose the word"
          steps={[
            <><Af>Kies die Afrikaans vir window.</Af> The answer is <Af>venster</Af>. <SpeakButton text="venster" /></>,
            <>Colours: <Af>rooi</Af> <En>red</En>, <Af>groen</Af> <En>green</En>, <Af>blou</Af> <En>blue</En>, <Af>wit</Af> <En>white</En>.</>,
          ]}
        />
        <Mistake>Picking <Af>deur</Af> because it is the first word you know. Match the English meaning: window is <Af>venster</Af>, door is <Af>deur</Af>.</Mistake>
      </>,
    ),
  },
  {
    title: 'Revise: synonyms and positions',
    content: slide(
      <>
        <Rule>A synonym means the same. A <Af>voorsetsel</Af> shows position, such as <Af>onder</Af> <En>under</En>, <Af>op</Af> <En>on</En> or <Af>langs</Af> <En>next to</En>.</Rule>
        <MeaningPairs
          kind="same"
          pairs={[['vinnig', 'gou'], ['bly', 'gelukkig'], ['praat', 'gesels']]}
          aria="Three pairs of Afrikaans synonyms: vinnig and gou, bly and gelukkig, praat and gesels."
        />
        <Worked
          title="Synonym and position"
          steps={[
            <>A synonym for <Af>vinnig</Af> <En>fast</En> is <Af>gou</Af>. <Af>stadig</Af> is the opposite.</>,
            <><Af>Die kat sit onder die stoel.</Af> <En>The cat sits under the chair.</En> <SpeakButton text="Die kat sit onder die stoel." /></>,
          ]}
        />
        <Mistake>Choosing the opposite for a synonym. <Af>stadig</Af> <En>slow</En> is the opposite of <Af>vinnig</Af>, so it is not the synonym.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <>
        <Check question={<><Af>Verlede tyd:</Af> <Af>Gister ___ ek sokker ___.</Af> (play)</>} answer={<><Af>het ... gespeel</Af>.</>} />
        <Check question={<><Af>Môre ___ ek my boek lees.</Af></>} answer={<><Af>sal</Af>: môre points to the future.</>} />
        <Check question={<>Plural: <Af>een boek, twee ___</Af>.</>} answer={<><Af>boeke</Af>.</>} />
        <Check question={<>Choose a synonym for <Af>vinnig</Af>.</>} answer={<><Af>gou</Af>.</>} />
      </>,
    ),
  },
];

export const bank: AfrikaansItem[] = [
  {
    prompt: "Kies die Afrikaans vir 'window'.",
    options: ['venster', 'deur', 'tafel', 'stoel'],
    answer: 'venster',
    explanation: "'Venster' means 'window'.",
  },
  {
    prompt: 'Vul die teenwoordige tyd in: Hulle ___ elke dag skool toe. (walk)',
    options: ['stap', 'het gestap', 'sal stap', 'stappe'],
    answer: 'stap',
    explanation: "'Elke dag' uses the simple present tense here.",
  },
  {
    prompt: 'Verlede tyd: Ek speel sokker. Gister ___ ek sokker ___.',
    options: ['het ... gespeel', 'het ... speel', 'sal ... speel', 'is ... gespeel'],
    answer: 'het ... gespeel',
    explanation: "Past tense uses 'het ... gespeel': Gister het ek sokker gespeel.",
  },
  {
    prompt: 'Toekomende tyd: Môre ___ ek my boek lees.',
    options: ['sal', 'het', 'is', 'was'],
    answer: 'sal',
    explanation: "'Môre' points to the future, so use 'sal'.",
  },
  {
    prompt: 'Kies die korrekte meervoud: een boek, twee ___.',
    options: ['boeke', 'boeks', 'boekes', 'boek'],
    answer: 'boeke',
    explanation: "The plural of 'boek' is 'boeke'.",
  },
  {
    prompt: 'Kies die byvoeglike naamwoord: Die seun is ___. (friendly)',
    options: ['vriendelik', 'vinnig', 'honger', 'klein'],
    answer: 'vriendelik',
    explanation: "'Vriendelik' means 'friendly'.",
  },
  {
    prompt: 'Die kat sit ___ die stoel. (under)',
    options: ['onder', 'op', 'langs', 'voor'],
    answer: 'onder',
    explanation: "'Onder' means 'under'.",
  },
  {
    prompt: "Kies 'n sinoniem vir 'vinnig'.",
    options: ['gou', 'stadig', 'moeg', 'stil'],
    answer: 'gou',
    explanation: "'Gou' can mean quickly, similar to 'vinnig'.",
  },
  {
    prompt: 'Kies die regte woord: Die ___ bal lê in die tuin. (red)',
    options: ['rooi', 'groen', 'blou', 'wit'],
    answer: 'rooi',
    explanation: "'Rooi' means 'red'.",
  },
  {
    prompt: "Verlede tyd: Sy eet 'n appel. Gister ___ sy 'n appel ___.",
    options: ['het ... geëet', 'sal ... eet', 'eet ... nou', 'is ... eet'],
    answer: 'het ... geëet',
    explanation: "The past tense of 'eet' is 'het ... geëet'.",
  },
];

const GemengdeHersiening = () => (
  <AfrikaansTopic title="Gemengde Hersiening" subtitle="Mixed revision" learnSteps={learnSteps} task="gemengde-hersiening" bank={bank} speak="options" />
);

export default GemengdeHersiening;
