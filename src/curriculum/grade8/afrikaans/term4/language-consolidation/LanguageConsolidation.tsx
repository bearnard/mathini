import AfrikaansTopic from '../../_shared/AfrikaansTopic';
import { AfrikaansItem, LearnStep } from '../../_shared/types';
import SpeakButton from '../../_shared/SpeakButton';
import { Check, Mistake, Rule, Worked } from '@/components/subjects/lesson/LessonBlocks';
import { Af, En, MeaningPairs, OrderTiles, TenseTimeline, WordBoxes } from '@/components/diagrams/afrikaans/AfrikaansPictures';

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: 'Tenses: past needs het',
    content: slide(
      <>
        <Rule>The past tense uses <Af>het</Af> with a <Af>ge-</Af> verb. A time word like <Af>Gister</Af> tells you to use it.</Rule>
        <TenseTimeline
          past="Ons het die opdrag voltooi."
          present="Ons voltooi die opdrag."
          future="Ons sal die opdrag voltooi."
          aria="A timeline with three sentences: gister, Ons het die opdrag voltooi; vandag, Ons voltooi die opdrag; môre, Ons sal die opdrag voltooi."
        />
        <Worked
          title="Choose the helper"
          steps={[
            <><Af>Gister het ons die opdrag voltooi.</Af> <En>Yesterday we completed the task.</En> <SpeakButton text="Gister het ons die opdrag voltooi." /></>,
            <>The verb <Af>voltooi</Af> already starts with a prefix, so it takes no extra <Af>ge-</Af>.</>,
          ]}
        />
        <Mistake>Using <Af>sal</Af> or <Af>is</Af> after <Af>Gister</Af>. The past needs <Af>het</Af>.</Mistake>
      </>,
    ),
  },
  {
    title: 'Word order and commas',
    content: slide(
      <>
        <Rule>After a time word like <Af>Môre</Af> the verb comes next, then the subject. Use commas to separate items in a list.</Rule>
        <WordBoxes
          words={['Môre', 'skryf', 'ons', 'die toets']}
          hot={[1]}
          aria="The sentence Môre skryf ons die toets as four boxes, with the verb skryf highlighted in second place."
        />
        <Worked
          title="Order and comma"
          steps={[
            <><Af>Môre skryf ons die toets.</Af> <En>Tomorrow we write the test.</En> <SpeakButton text="Môre skryf ons die toets." /></>,
            <><Af>Ek hou van lees, skryf en oefen.</Af> <En>I like reading, writing and practising.</En> The comma separates the first two items.</>,
          ]}
        />
        <Mistake>Putting the subject first after the time word: <Af>Môre ons skryf die toets</Af> is wrong.</Mistake>
      </>,
    ),
  },
  {
    title: 'Word types: adverb or adjective?',
    content: slide(
      <>
        <Rule>A <Af>bywoord</Af> <En>adverb</En> tells how the action happens. In <Af>Sy glimlag gelukkig</Af>, <Af>gelukkig</Af> tells how she smiles, so it is a <Af>bywoord</Af>.</Rule>
        <WordBoxes
          words={['Sy', 'glimlag', 'gelukkig']}
          hot={[2]}
          aria="The sentence Sy glimlag gelukkig as three boxes, with the adverb gelukkig highlighted."
        />
        <Worked
          title="Name the word type"
          steps={[
            <><Af>Sy glimlag gelukkig.</Af> <En>She smiles happily.</En> <Af>gelukkig</Af> describes the verb: adverb.</>,
            <><Af>Sy is gelukkig.</Af> <En>She is happy.</En> Here it describes <Af>sy</Af>: adjective.</>,
          ]}
        />
        <Mistake>Calling every describing word an adjective. Ask what it describes: a noun (adjective) or an action (adverb).</Mistake>
      </>,
    ),
  },
  {
    title: 'Agreement, opposites and capitals',
    content: slide(
      <>
        <Rule>The verb has one form for every subject: <Af>Die klas werk stil.</Af> A prefix <Af>on-</Af> often makes the opposite. Days and languages start with a capital letter.</Rule>
        <MeaningPairs
          kind="opposite"
          pairs={[['duidelik', 'onduidelik'], ['tevrede', 'ontevrede']]}
          aria="Two pairs of opposites made with the prefix on-: duidelik and onduidelik, tevrede and ontevrede."
        />
        <Worked
          title="Check the sentence"
          steps={[
            <><Af>Die klas werk stil.</Af> <En>The class works quietly.</En> The verb <Af>werk</Af> has no ending.</>,
            <><Af>Op Dinsdag lees ons Afrikaans in die biblioteek.</Af> <En>On Tuesday we read Afrikaans in the library.</En> <SpeakButton text="Op Dinsdag lees ons Afrikaans in die biblioteek." /></>,
          ]}
        />
        <Mistake>Writing <Af>op dinsdag</Af> or <Af>afrikaans</Af> in small letters, or adding an ending such as <Af>Die klas werke stil</Af>.</Mistake>
      </>,
    ),
  },
  {
    title: 'Why consolidate before the exam',
    content: slide(
      <>
        <Rule>Language consolidation is important because <Af>Dit versterk kernreëls en verminder slordige foute</Af> <En>it strengthens core rules and reduces careless mistakes</En>.</Rule>
        <OrderTiles
          tiles={['Tyd', 'Orde', 'Woord']}
          aria="Three areas to revise: Tyd (tenses), Orde (word order and punctuation), Woord (word types and meaning)."
        />
        <Worked
          title="Revise by area"
          steps={[
            <>Each day, one area: tenses, word order and punctuation, or word types.</>,
            <>Finish by reading your work again for careless slips.</>,
          ]}
        />
        <Mistake>Revising only the topic you like. Cover all the core areas so that no careless slip costs you marks.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <>
        <Check question={<>Fill in: <Af>Gister ___ ons die opdrag voltooi.</Af></>} answer={<><Af>het</Af>.</>} />
        <Check question={<>Which sentence has the right order: <Af>Môre skryf ons die toets</Af> or <Af>Môre ons skryf die toets</Af>?</>} answer={<><Af>Môre skryf ons die toets.</Af></>} />
        <Check question={<>What word type is <Af>gelukkig</Af> in <Af>Sy glimlag gelukkig</Af>?</>} answer={<><Af>Bywoord</Af> <En>adverb</En>.</>} />
        <Check question={<>What is the opposite of <Af>duidelik</Af>?</>} answer={<><Af>onduidelik</Af>.</>} />
      </>,
    ),
  },
];

const bank: AfrikaansItem[] = [
  {
    prompt: "Kies die korrekte verlede tyd: 'Gister ___ ons die opdrag voltooi.'",
    options: ['het', 'sal', 'is', 'word'],
    answer: 'het',
    explanation: "'Gister' signals past tense with 'het'.",
  },
  {
    prompt: "Watter sin het korrekte woordorde ná 'Môre'?",
    options: ['Môre skryf ons die toets.', 'Môre ons skryf die toets.', 'Ons môre skryf die toets.', 'Skryf ons môre die toets ons.'],
    answer: 'Môre skryf ons die toets.',
    explanation: 'Verb placement remains correct after a fronted time phrase.',
  },
  {
    prompt: "Kies die korrekte leesteken: 'Ek hou van lees___ skryf en oefen.'",
    options: [',', '.', '!', '?'],
    answer: ',',
    explanation: 'A comma separates listed actions.',
  },
  {
    prompt: "Watter woordsoort is 'gelukkig' in: 'Sy glimlag gelukkig'?",
    options: ['Bywoord', 'Selfstandige naamwoord', 'Voegwoord', 'Lidwoord'],
    answer: 'Bywoord',
    explanation: "It describes how she smiles.",
  },
  {
    prompt: "Kies die sin met korrekte kongruensie.",
    options: ['Die klas werk stil.', 'Die klas werk stilletjie is.', 'Die klas werke stil.', 'Die klas het werk stil nou.'],
    answer: 'Die klas werk stil.',
    explanation: 'Subject and verb agreement are correct.',
  },
  {
    prompt: "Wat is die beste antoniem vir 'duidelik'?",
    options: ['onduidelik', 'helder', 'presies', 'netjies'],
    answer: 'onduidelik',
    explanation: "'Onduidelik' is the opposite of 'duidelik'.",
  },
  {
    prompt: "Watter sin gebruik hoofletters korrek?",
    options: ['Op Dinsdag lees ons Afrikaans in die biblioteek.', 'op Dinsdag lees ons afrikaans in die biblioteek.', 'Op dinsdag lees ons Afrikaans in die biblioteek.', 'Op Dinsdag lees ons afrikaans in die biblioteek.'],
    answer: 'Op Dinsdag lees ons Afrikaans in die biblioteek.',
    explanation: 'Sentence start and proper nouns are capitalized correctly.',
  },
  {
    prompt: "Waarom is taalkonsolidasie belangrik voor die eindeksamen?",
    options: ['Dit versterk kernreëls en verminder slordige foute', 'Dit vervang alle leeswerk vir die eksamen', 'Dit fokus net op een vraagtipe in die toets', 'Dit maak redigering onnodig vir die leerder'],
    answer: 'Dit versterk kernreëls en verminder slordige foute',
    explanation: 'Consolidation improves accuracy across mixed tasks.',
  },
];

export { bank };

const LanguageConsolidation = () => (
  <AfrikaansTopic
    title="Taalkonsolidasie"
    subtitle="Integrated grammar and sentence-control end-of-year revision"
    learnSteps={learnSteps}
    task="gr8-language-consolidation-t4"
    bank={bank}
    speak="options"
  />
);

export default LanguageConsolidation;
