import AfrikaansTopic from '../../_shared/AfrikaansTopic';
import { AfrikaansItem, LearnStep } from '../../_shared/types';
import SpeakButton from '../../_shared/SpeakButton';
import { Check, Mistake, Rule, Worked } from '@/components/subjects/lesson/LessonBlocks';
import { Af, En, MeaningPairs, TaggedBoxes, TenseTimeline, WordBoxes } from '@/components/diagrams/afrikaans/AfrikaansPictures';

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: 'Plurals: -e, -s and words to learn',
    content: slide(
      <>
        <Rule>Most plurals add <Af>-e</Af> (<Af>boek</Af>, <Af>boeke</Af>) and words ending in <Af>-el</Af> take <Af>-s</Af> (<Af>tafel</Af>, <Af>tafels</Af>). Some plurals must be learned: <Af>kind</Af> becomes <Af>kinders</Af>.</Rule>
        <MeaningPairs
          kind="becomes"
          pairs={[['boek', 'boeke'], ['tafel', 'tafels'], ['kind', 'kinders']]}
          aria="Three nouns and their plurals: boek becomes boeke, tafel becomes tafels, kind becomes kinders."
        />
        <Worked
          title="Choose the plural"
          steps={[
            <><Af>een kind, twee kinders</Af> <En>one child, two children</En> <SpeakButton text="een kind, twee kinders" /></>,
            <><Af>een hond, twee honde</Af> <En>one dog, two dogs</En></>,
          ]}
        />
        <Mistake>Making up a form with a rule. <Af>kinde</Af>, <Af>kinds</Af> and <Af>kindere</Af> are all wrong. The plural of <Af>kind</Af> is <Af>kinders</Af>.</Mistake>
      </>,
    ),
  },
  {
    title: 'Tense clues',
    content: slide(
      <>
        <Rule>Time words show the tense. <Af>Gister</Af> means past, with <Af>het</Af> and <Af>ge-</Af>. <Af>Nou</Af> means present, with the plain verb. <Af>Môre</Af> means future, with <Af>sal</Af>.</Rule>
        <TenseTimeline
          past="Ons het sokker gespeel."
          present="Ek doen nou my huiswerk."
          future="Ek sal hard werk."
          aria="A timeline with three sentences: gister, Ons het sokker gespeel; vandag, Ek doen nou my huiswerk; môre, Ek sal hard werk."
        />
        <Worked
          title="Pick the helper word"
          steps={[
            <><Af>Gister het ons sokker gespeel.</Af> <En>Yesterday we played soccer.</En></>,
            <><Af>Môre sal ek hard werk.</Af> <En>Tomorrow I will work hard.</En> <SpeakButton text="Môre sal ek hard werk." /></>,
            <>The past of <Af>Sy lees die boek</Af> is <Af>Sy het die boek gelees.</Af></>,
          ]}
        />
        <Mistake>Adding <Af>-de</Af> like English <em>-ed</em>. <Af>Sy leesde die boek</Af> is wrong. Say <Af>Sy het die boek gelees.</Af></Mistake>
      </>,
    ),
  },
  {
    title: 'Adjectives in a sentence',
    content: slide(
      <>
        <Rule>An adjective describes a noun. Ask which word tells you more about the noun. A word that tells how the verb happens is not the adjective.</Rule>
        <WordBoxes
          words={['Die', 'bruin', 'hond', 'hardloop', 'vinnig']}
          hot={[1]}
          aria="The sentence Die bruin hond hardloop vinnig as five boxes, with the adjective bruin highlighted."
        />
        <Worked
          title="Find the adjective"
          steps={[
            <><Af>Die bruin hond hardloop vinnig.</Af> <En>The brown dog runs fast.</En></>,
            <><Af>bruin</Af> <En>brown</En> describes the noun <Af>hond</Af>. It is the adjective.</>,
            <><Af>hardloop</Af> is the verb. <Af>vinnig</Af> tells how the dog runs.</>,
          ]}
        />
        <Mistake>Choosing the noun <Af>hond</Af> or the verb <Af>hardloop</Af>. Only <Af>bruin</Af> describes the dog.</Mistake>
      </>,
    ),
  },
  {
    title: 'Idioms and words that sound alike',
    content: slide(
      <>
        <Rule>An <Af>idioom</Af> is a fixed saying whose meaning is not word for word. <Af>Die kat uit die boom kyk</Af> means to wait and see first. <Af>Homofone</Af> sound the same but mean different things, like <Af>lei/ly</Af>.</Rule>
        <TaggedBoxes
          items={[{ word: 'Die kat uit die boom kyk', tag: 'Eers wag en kyk' }]}
          aria="The idiom Die kat uit die boom kyk in one box, tagged with its meaning: Eers wag en kyk (first wait and watch)."
        />
        <Worked
          title="Read the meaning"
          steps={[
            <><Af>Die kat uit die boom kyk</Af> = <Af>Eers wag en kyk</Af> <En>to wait and see</En>. <SpeakButton text="Die kat uit die boom kyk" /></>,
            <><Af>lei</Af> <En>to lead</En> and <Af>ly</Af> <En>to suffer</En> sound the same. Read the whole sentence to choose.</>,
          ]}
        />
        <Mistake>Taking an idiom word for word. <Af>Die kat uit die boom kyk</Af> is not about a real cat in a tree.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <>
        <Check question={<>Plural: <Af>een kind, twee ___</Af>.</>} answer={<><Af>kinders</Af>.</>} />
        <Check question={<>Fill in: <Af>Gister ___ ons sokker gespeel.</Af></>} answer={<><Af>het</Af>.</>} />
        <Check question={<>What does the idiom <Af>Die kat uit die boom kyk</Af> mean?</>} answer={<><Af>Eers wag en kyk</Af> <En>wait and see first</En>.</>} />
        <Check question={<>Which word is the adjective: <Af>Die bruin hond hardloop vinnig</Af>?</>} answer={<><Af>bruin</Af>.</>} />
      </>,
    ),
  },
];

const bank: AfrikaansItem[] = [
  {
    prompt: "Kies die korrekte meervoud: een kind, twee ___.",
    options: ['kinders', 'kinde', 'kinds', 'kindere'],
    answer: 'kinders',
    explanation: "'Kind' changes to 'kinders' in the plural.",
  },
  {
    prompt: "Vul die verlede tyd in: Gister ___ ons sokker gespeel.",
    options: ['het', 'sal', 'is', 'was'],
    answer: 'het',
    explanation: "Past tense with an action commonly uses 'het ... ge-'.",
  },
  {
    prompt: "Kies die toekomende tyd: 'Môre ___ ek hard werk.'",
    options: ['sal', 'het', 'is', 'was'],
    answer: 'sal',
    explanation: "'Môre' signals future tense.",
  },
  {
    prompt: "Watter byvoeglike naamwoord pas? 'Die ___ hond hardloop vinnig.'",
    options: ['bruin', 'hardloop', 'hond', 'vinnig'],
    answer: 'bruin',
    explanation: "'Bruin' describes the noun 'hond'.",
  },
  {
    prompt: "Kies die korrekte vorm: 'Ek ___ nou my huiswerk.'",
    options: ['doen', 'het gedoen', 'sal doen', 'gedoen'],
    answer: 'doen',
    explanation: "'Nou' indicates present tense.",
  },
  {
    prompt: "Wat beteken die idioom 'Die kat uit die boom kyk'?",
    options: ['Eers wag en kyk', 'Om hard te hardloop', 'Om iemand te soek', 'Om baie te praat'],
    answer: 'Eers wag en kyk',
    explanation: 'This idiom means to wait before acting.',
  },
  {
    prompt: "Kies die regte sin in die verlede tyd.",
    options: ['Sy het die boek gelees.', 'Sy lees die boek.', 'Sy sal die boek lees.', 'Sy leesde die boek.'],
    answer: 'Sy het die boek gelees.',
    explanation: "Correct past tense form is 'het ... gelees'.",
  },
  {
    prompt: "Kies die woord wat 'n homofoniese valstrik kan wees.",
    options: ['lei/ly', 'boek', 'stoel', 'huis'],
    answer: 'lei/ly',
    explanation: 'Homophones sound alike but have different meanings/spellings.',
  },
];

export { bank };

const WordSentenceGrammar = () => (
  <AfrikaansTopic
    title="Woord- en Sinvlak Grammatika"
    subtitle="Plurals, tense, idioms and grammar in context"
    learnSteps={learnSteps}
    task="gr7-word-sentence-grammar-t1"
    bank={bank}
    speak="options"
  />
);

export default WordSentenceGrammar;
