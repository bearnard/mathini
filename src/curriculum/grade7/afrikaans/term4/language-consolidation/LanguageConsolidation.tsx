import AfrikaansTopic from '../../_shared/AfrikaansTopic';
import { AfrikaansItem, LearnStep } from '../../_shared/types';
import SpeakButton from '../../_shared/SpeakButton';
import { Check, Mistake, Rule, Worked } from '@/components/subjects/lesson/LessonBlocks';
import { Af, En, MeaningPairs, OrderTiles, TaggedBoxes, TenseTimeline, WordBoxes } from '@/components/diagrams/afrikaans/AfrikaansPictures';

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: 'Tenses: present, past, future',
    content: slide(
      <>
        <Rule>The present tense uses the plain verb. The past tense uses <Af>het</Af> and <Af>ge-</Af>. The future uses <Af>sal</Af>. Time words show which one to use.</Rule>
        <TenseTimeline
          past="Ons het hard geleer."
          present="Hulle oefen elke dag."
          future="Ons sal môre leer."
          aria="A timeline with three sentences: gister, Ons het hard geleer; vandag, Hulle oefen elke dag; môre, Ons sal môre leer."
        />
        <Worked
          title="Choose the tense"
          steps={[
            <><Af>Hulle oefen elke dag.</Af> <En>They practise every day.</En> <Af>elke dag</Af> points to the present: <Af>oefen</Af>.</>,
            <><Af>Gister het ons hard geleer.</Af> <En>Yesterday we studied hard.</En> The past uses <Af>het</Af>. <SpeakButton text="Gister het ons hard geleer." /></>,
          ]}
        />
        <Mistake>Using <Af>sal</Af> or <Af>is</Af> after <Af>Gister</Af>. A past sentence needs <Af>het</Af> and the <Af>ge-</Af> verb.</Mistake>
      </>,
    ),
  },
  {
    title: 'Word types: the adverb',
    content: slide(
      <>
        <Rule>A <Af>bywoord</Af> <En>adverb</En> tells how, when or where something happens. In <Af>Sy hardloop vinnig</Af>, <Af>vinnig</Af> tells how she runs, so it is a <Af>bywoord</Af>.</Rule>
        <WordBoxes
          words={['Sy', 'hardloop', 'vinnig']}
          hot={[2]}
          aria="The sentence Sy hardloop vinnig as three boxes, with the adverb vinnig highlighted."
        />
        <Worked
          title="Name the word types"
          steps={[
            <><Af>hardloop</Af> is a <Af>werkwoord</Af> <En>verb</En>. <Af>vinnig</Af> is a <Af>bywoord</Af>.</>,
            <><Af>Sy</Af> is a <Af>voornaamwoord</Af> <En>pronoun</En>: it stands in for a noun. <Af>en</Af> is a <Af>voegwoord</Af> <En>conjunction</En>.</>,
          ]}
        />
        <Mistake>Calling <Af>vinnig</Af> a noun, pronoun or conjunction. It tells how the action happens, so it is an adverb here.</Mistake>
      </>,
    ),
  },
  {
    title: 'Commas and capital letters',
    content: slide(
      <>
        <Rule>Use commas between items in a list. Days of the week and the names of languages start with a capital letter.</Rule>
        <TaggedBoxes
          items={[{ word: 'Maandag', tag: 'hoofletter' }, { word: 'Afrikaans', tag: 'hoofletter' }]}
          aria="Two words that start with a capital letter: Maandag and Afrikaans, each tagged hoofletter."
        />
        <Worked
          title="Fix the sentence"
          steps={[
            <><Af>Ek hou van lees, skryf en teken.</Af> <En>I like reading, writing and drawing.</En> The comma separates the items.</>,
            <><Af>Op Maandag skryf ons 'n toets in Afrikaans.</Af> <En>On Monday we write a test in Afrikaans.</En> <SpeakButton text="Op Maandag skryf ons 'n toets in Afrikaans." /></>,
          ]}
        />
        <Mistake>Writing <Af>op maandag</Af> or <Af>in afrikaans</Af> with small letters. Both <Af>Maandag</Af> and <Af>Afrikaans</Af> take a capital.</Mistake>
      </>,
    ),
  },
  {
    title: 'Word order and opposites',
    content: slide(
      <>
        <Rule>After a time word like <Af>Môre</Af> the verb comes next, then the subject. An antonym is the opposite: <Af>sterk</Af> and <Af>swak</Af>.</Rule>
        <WordBoxes
          words={['Môre', 'sal', 'ons', 'vroeg vertrek']}
          hot={[1]}
          aria="The sentence Môre sal ons vroeg vertrek as four boxes, with the verb sal highlighted in second place."
        />
        <Worked
          title="Order and opposite"
          steps={[
            <><Af>Môre sal ons vroeg vertrek.</Af> <En>Tomorrow we will leave early.</En></>,
            <>The opposite of <Af>sterk</Af> <En>strong</En> is <Af>swak</Af> <En>weak</En>. <SpeakButton text="sterk, swak" /></>,
          ]}
        />
        <Mistake>Putting the subject before the verb: <Af>Môre ons sal vroeg vertrek</Af> is wrong. Say <Af>Môre sal ons vroeg vertrek</Af>.</Mistake>
      </>,
    ),
  },
  {
    title: 'Why revise the core rules at year end',
    content: slide(
      <>
        <Rule>Language consolidation matters because <Af>Dit versterk al die kernreëls vir assesserings</Af> <En>it strengthens all the core rules for assessments</En>.</Rule>
        <OrderTiles
          tiles={['Tyd', 'Woord', 'Teken']}
          aria="Three areas to revise: Tyd (tenses), Woord (word types and meaning), Teken (punctuation and capitals)."
        />
        <Worked
          title="A year-end routine"
          steps={[
            <>Each day, revise one area: tenses, word types, or punctuation and capitals.</>,
            <>Do a few questions of every type. Do not drill one type only.</>,
          ]}
        />
        <Mistake>Believing revision replaces reading, focusing on one question type only, or skipping editing. It adds to those, it does not replace them.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <>
        <Check question={<>Fill in: <Af>Gister ___ ons hard geleer.</Af></>} answer={<><Af>het</Af>.</>} />
        <Check question={<>What word type is <Af>vinnig</Af> in <Af>Sy hardloop vinnig</Af>?</>} answer={<><Af>Bywoord</Af> <En>adverb</En>.</>} />
        <Check question={<>Which sentence is right: <Af>Môre sal ons vroeg vertrek</Af> or <Af>Môre ons sal vroeg vertrek</Af>?</>} answer={<><Af>Môre sal ons vroeg vertrek.</Af></>} />
        <Check question={<>What is the opposite of <Af>sterk</Af>?</>} answer={<><Af>swak</Af>.</>} />
      </>,
    ),
  },
];

const bank: AfrikaansItem[] = [
  {
    prompt: "Kies die korrekte teenwoordige tyd: 'Hulle ___ elke dag.'",
    options: ['oefen', 'het geoefen', 'sal oefen', 'geoefen'],
    answer: 'oefen',
    explanation: "The adverb 'elke dag' supports present tense.",
  },
  {
    prompt: "Kies die korrekte verlede tyd: 'Gister ___ ons hard geleer.'",
    options: ['het', 'sal', 'is', 'word'],
    answer: 'het',
    explanation: "'Gister' indicates past tense.",
  },
  {
    prompt: "Watter woordsoort is 'vinnig' in: 'Sy hardloop vinnig'?",
    options: ['Bywoord', 'Selfstandige naamwoord', 'Voornaamwoord', 'Voegwoord'],
    answer: 'Bywoord',
    explanation: "'Vinnig' describes how she runs, so it is an adverb.",
  },
  {
    prompt: "Kies die korrekte leesteken: 'Ek hou van lees___ skryf en teken.'",
    options: [',', '.', '!', '?'],
    answer: ',',
    explanation: 'A comma separates listed actions here.',
  },
  {
    prompt: "Watter sin het die beste sinsbou ná 'Môre'?",
    options: ['Môre sal ons vroeg vertrek.', 'Môre ons sal vroeg vertrek.', 'Ons vroeg vertrek sal môre.', 'Sal môre ons vroeg vertrek ons.'],
    answer: 'Môre sal ons vroeg vertrek.',
    explanation: 'With a fronted time phrase, verb placement must stay correct.',
  },
  {
    prompt: "Kies die korrekte antoniem vir 'sterk'.",
    options: ['swak', 'dapper', 'vinnig', 'helder'],
    answer: 'swak',
    explanation: "'Swak' is the opposite of 'sterk'.",
  },
  {
    prompt: "Watter sin toon korrekte hooflettergebruik?",
    options: ["Op Maandag skryf ons 'n toets in Afrikaans.", "op maandag skryf ons 'n toets in afrikaans.", "Op maandag skryf ons 'n toets in afrikaans.", "op Maandag skryf ons 'n toets in Afrikaans."],
    answer: "Op Maandag skryf ons 'n toets in Afrikaans.",
    explanation: 'The sentence starts with a capital and language name is capitalized here.',
  },
  {
    prompt: "Waarom is taal-konsolidasie belangrik teen jaar-einde?",
    options: ['Dit versterk al die kernreëls vir assesserings', 'Dit vervang alle leeswerk vir die jaar', 'Dit fokus net op een vraagtipe in die toets', 'Dit maak redigering van werk oorbodig'],
    answer: 'Dit versterk al die kernreëls vir assesserings',
    explanation: 'Consolidation builds reliable exam performance.',
  },
];

export { bank };

const LanguageConsolidation = () => (
  <AfrikaansTopic
    title="Taalkonsolidasie"
    subtitle="Year-end grammar and sentence accuracy"
    learnSteps={learnSteps}
    task="gr7-language-consolidation-t4"
    bank={bank}
    speak="options"
  />
);

export default LanguageConsolidation;
