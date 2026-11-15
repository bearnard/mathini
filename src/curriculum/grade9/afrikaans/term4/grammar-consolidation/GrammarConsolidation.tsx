import AfrikaansTopic from '../../_shared/AfrikaansTopic';
import { AfrikaansItem, LearnStep } from '../../_shared/types';
import SpeakButton from '../../_shared/SpeakButton';
import { Check, Mistake, Rule, Worked } from '@/components/subjects/lesson/LessonBlocks';
import { Af, En, MeaningPairs, OrderTiles, TenseTimeline, WordBoxes } from '@/components/diagrams/afrikaans/AfrikaansPictures';

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: 'Sin, werkwoord, voornaamwoord',
    content: slide(
      <>
        <Rule>A <Af>sin</Af> <En>sentence</En> says something complete. It has a <Af>werkwoord</Af> <En>verb</En>. A <Af>voornaamwoord</Af> <En>pronoun</En> stands in for a noun.</Rule>
        <MeaningPairs
          kind="same"
          pairs={[['sin', 'sentence'], ['werkwoord', 'verb'], ['voornaamwoord', 'pronoun']]}
          aria="Three Afrikaans grammar words with their English meaning: sin is sentence, werkwoord is verb, voornaamwoord is pronoun."
        />
        <Worked
          title="Name the parts"
          steps={[
            <><Af>Sy lees 'n boek.</Af> <En>She reads a book.</En> <SpeakButton text="Sy lees 'n boek." /></>,
            <><Af>lees</Af> is the <Af>werkwoord</Af>. <Af>Sy</Af> is a <Af>voornaamwoord</Af>: it stands in for a girl&apos;s name.</>,
          ]}
        />
        <Mistake>Calling a group of words a <Af>sin</Af> when it has no verb. A sentence needs a verb and says something complete.</Mistake>
      </>,
    ),
  },
  {
    title: 'Tyd: past, present, future',
    content: slide(
      <>
        <Rule>The <Af>tyd</Af> <En>tense</En> shows when something happens. The past uses <Af>het</Af> and <Af>ge-</Af>, the present the plain verb and the future <Af>sal</Af>.</Rule>
        <TenseTimeline
          past="Sy het 'n boek gelees."
          present="Sy lees 'n boek."
          future="Sy sal 'n boek lees."
          aria="A timeline with three sentences: gister, Sy het 'n boek gelees; vandag, Sy lees 'n boek; môre, Sy sal 'n boek lees."
        />
        <Worked
          title="Change the tense"
          steps={[
            <><Af>Sy lees 'n boek.</Af> Past: <Af>Sy het 'n boek gelees.</Af></>,
            <>Future: <Af>Sy sal 'n boek lees.</Af> <SpeakButton text="Sy sal 'n boek lees." /></>,
          ]}
        />
        <Mistake>Mixing a helper with the wrong verb form, like <Af>Sy het 'n boek lees</Af>. The past needs <Af>gelees</Af>.</Mistake>
      </>,
    ),
  },
  {
    title: 'Woordorde: word order',
    content: slide(
      <>
        <Rule><Af>Woordorde</Af> <En>word order</En> in a statement: the verb is in second place, also after a time word.</Rule>
        <WordBoxes
          words={['Môre', 'sal', 'ons', 'vroeg', 'vertrek']}
          hot={[1]}
          aria="The sentence Môre sal ons vroeg vertrek as five boxes, with the verb sal highlighted in second place."
        />
        <Worked
          title="Check the order"
          steps={[
            <><Af>Môre sal ons vroeg vertrek.</Af> <En>Tomorrow we will leave early.</En> <SpeakButton text="Môre sal ons vroeg vertrek." /></>,
            <>Not: <Af>Môre ons sal vroeg vertrek.</Af></>,
          ]}
        />
        <Mistake>Putting the subject before the verb after <Af>Môre</Af>. The verb stays second.</Mistake>
      </>,
    ),
  },
  {
    title: 'Leestekens: punctuation',
    content: slide(
      <>
        <Rule><Af>Leestekens</Af> <En>punctuation marks</En> make meaning clear. A statement ends with <Af>.</Af>, a question with <Af>?</Af>, an exclamation with <Af>!</Af>, and commas separate items in a list.</Rule>
        <MeaningPairs
          kind="becomes"
          pairs={[['Waar gaan jy', '?'], ['Ek lees', 'punt .'], ['Pasop', '!']]}
          aria="Three sentences and their end marks: Waar gaan jy takes a question mark, Ek lees takes a full stop, Pasop takes an exclamation mark."
        />
        <Worked
          title="Choose the mark"
          steps={[
            <><Af>Waar gaan jy?</Af> <En>Where are you going?</En> <SpeakButton text="Waar gaan jy?" /></>,
            <><Af>Ek hou van lees, skryf en teken.</Af> <En>I like reading, writing and drawing.</En></>,
          ]}
        />
        <Mistake>Ending a question with a full stop, or running a list together with no commas.</Mistake>
      </>,
    ),
  },
  {
    title: 'Ready for the FET phase',
    content: slide(
      <>
        <Rule>Year-end review makes you confident for the next phase. Revise all areas: sentences, tenses, word order and punctuation, plus vocabulary and spelling.</Rule>
        <OrderTiles
          tiles={['Sin', 'Tyd', 'Orde', 'Tekens']}
          aria="Four areas to revise: Sin (sentences), Tyd (tenses), Orde (word order), Tekens (punctuation)."
        />
        <Worked
          title="A year-end routine"
          steps={[
            <>Each day, one area. End with a short text where you fix mistakes.</>,
            <>Keep a list of words you misspell and revise it.</>,
          ]}
        />
        <Mistake>Revising only your favourite area. The exam mixes all of them.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <>
        <Check question={<>Which word means <em>punctuation</em>?</>} answer={<><Af>leestekens</Af>.</>} />
        <Check question={<>Which word means <em>word order</em>?</>} answer={<><Af>woordorde</Af>.</>} />
        <Check question={<>Which word means <em>pronoun</em>?</>} answer={<><Af>voornaamwoord</Af>.</>} />
        <Check question={<>Which word means <em>tense</em>?</>} answer={<><Af>tyd</Af>.</>} />
      </>,
    ),
  },
];

const bank: AfrikaansItem[] = [
  {
    prompt: "Watter Afrikaanse woord beteken 'punctuation'?",
    options: ["leestekens", "woordorde", "werkwoord", "voornaamwoord"],
    answer: "leestekens",
    explanation: "'Leestekens' means 'punctuation' (full stops, commas and so on).",
  },
  {
    prompt: "Watter Afrikaanse woord beteken 'word order'?",
    options: ["woordorde", "leestekens", "tyd", "voornaamwoord"],
    answer: "woordorde",
    explanation: "'Woordorde' means 'word order'.",
  },
  {
    prompt: "Watter Afrikaanse woord beteken 'tense' (verlede, teenwoordige of toekomende)?",
    options: ["tyd", "sin", "werkwoord", "woordorde"],
    answer: "tyd",
    explanation: "'Tyd' means 'tense' (or 'time'): past, present or future.",
  },
  {
    prompt: "Watter Afrikaanse woord beteken 'pronoun'?",
    options: ["voornaamwoord", "leestekens", "werkwoord", "sin"],
    answer: "voornaamwoord",
    explanation: "'Voornaamwoord' means 'pronoun'.",
  },
  {
    prompt: "Watter Afrikaanse woord beteken 'verb'?",
    options: ["werkwoord", "voornaamwoord", "leestekens", "woordorde"],
    answer: "werkwoord",
    explanation: "'Werkwoord' means 'verb'.",
  },
  {
    prompt: "Watter Afrikaanse woord beteken 'sentence'?",
    options: ["sin", "tyd", "werkwoord", "woordorde"],
    answer: "sin",
    explanation: "'Sin' means 'sentence'.",
  },
  {
    prompt: "Watter sin is in die toekomende tyd?",
    options: ["Sy sal 'n boek lees.", "Sy het 'n boek gelees.", "Sy lees 'n boek.", "Sy leesde 'n boek."],
    answer: "Sy sal 'n boek lees.",
    explanation: "sal + plain verb.",
  },
  {
    prompt: "Kies die korrekte woordorde.",
    options: ["Môre sal ons vroeg vertrek.", "Môre ons sal vroeg vertrek.", "Ons môre vroeg sal vertrek.", "Sal môre ons vroeg vertrek."],
    answer: "Môre sal ons vroeg vertrek.",
    explanation: "The verb stays second.",
  },
  {
    prompt: "Watter woord is 'n voornaamwoord?",
    options: ["Sy", "lees", "boek", "vroeg"],
    answer: "Sy",
    explanation: "A pronoun stands in for a noun.",
  },
  {
    prompt: "Watter werkwoord is in 'Sy lees 'n boek'?",
    options: ["lees", "Sy", "boek", "'n"],
    answer: "lees",
    explanation: "The action word.",
  },
  {
    prompt: "Watter leesteken pas? 'Pasop___'",
    options: ["!", "?", ",", "."],
    answer: "!",
    explanation: "A warning takes an exclamation mark.",
  },
  {
    prompt: "Kies die verlede tyd.",
    options: ["Sy het 'n boek gelees.", "Sy het 'n boek lees.", "Sy is 'n boek lees.", "Sy sal 'n boek gelees."],
    answer: "Sy het 'n boek gelees.",
    explanation: "The past needs het and gelees.",
  },
];

export { bank };

const GrammarConsolidation = () => (
  <AfrikaansTopic
    title="Taalkonsolidasie"
    subtitle="Year-end review of grammar, spelling, vocabulary, and FET preparation"
    learnSteps={learnSteps}
    task="gr9-grammar-consolidation-t4"
    bank={bank}
    speak="options"
  />
);

export default GrammarConsolidation;
