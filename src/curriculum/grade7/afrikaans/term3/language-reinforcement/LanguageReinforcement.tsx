import AfrikaansTopic from '../../_shared/AfrikaansTopic';
import { AfrikaansItem, LearnStep } from '../../_shared/types';
import SpeakButton from '../../_shared/SpeakButton';
import { Check, Mistake, Rule, Worked } from '@/components/subjects/lesson/LessonBlocks';
import { Af, En, MeaningPairs, OrderTiles, WordBoxes } from '@/components/diagrams/afrikaans/AfrikaansPictures';

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: 'Punctuation: the right mark',
    content: slide(
      <>
        <Rule>A question ends with <Af>?</Af>, a statement with <Af>.</Af> and a warning or shout with <Af>!</Af>. Use a comma between items in a list.</Rule>
        <MeaningPairs
          kind="becomes"
          pairs={[['Waar gaan jy', '?'], ['Ek lees', 'punt .'], ['Pasop', '!']]}
          aria="Three sentences and their end marks: Waar gaan jy takes a question mark, Ek lees takes a full stop, Pasop takes an exclamation mark."
        />
        <Worked
          title="Choose the mark"
          steps={[
            <><Af>Waar gaan jy?</Af> <En>Where are you going?</En> A question, so <Af>?</Af> <SpeakButton text="Waar gaan jy?" /></>,
            <><Af>Ek hou van lees, skryf en teken.</Af> <En>I like reading, writing and drawing.</En> Commas in a list.</>,
          ]}
        />
        <Mistake>Ending a question with a full stop. <Af>Waar gaan jy.</Af> is wrong. A question needs <Af>?</Af></Mistake>
      </>,
    ),
  },
  {
    title: 'Word order: the verb stays second',
    content: slide(
      <>
        <Rule>The verb stays in second place, even when a time word starts the sentence.</Rule>
        <WordBoxes
          words={['Vandag', 'lees', 'ek', 'my boek']}
          hot={[1]}
          aria="The sentence Vandag lees ek my boek as four boxes, with the verb lees highlighted in second place after the time word."
        />
        <Worked
          title="Check the order"
          steps={[
            <><Af>Vandag lees ek my boek.</Af> <En>Today I read my book.</En> <SpeakButton text="Vandag lees ek my boek." /></>,
            <><Af>Vandag ek lees my boek</Af> is wrong: the verb must come before the subject.</>,
          ]}
        />
        <Mistake>Writing the subject first after a time word, or putting the verb last: <Af>Ek vandag my boek lees</Af>.</Mistake>
      </>,
    ),
  },
  {
    title: 'Past tense and the joining word want',
    content: slide(
      <>
        <Rule>The past tense uses <Af>het</Af> and <Af>ge-</Af>. The joining word <Af>want</Af> gives a reason.</Rule>
        <WordBoxes
          words={['Hulle', 'het', 'gister', 'gewag']}
          hot={[1, 3]}
          aria="The sentence Hulle het gister gewag as four boxes, with het and gewag highlighted as the two parts of the past tense."
        />
        <Worked
          title="Past tense and reason"
          steps={[
            <><Af>Hulle het gister by die winkel gewag.</Af> <En>They waited at the shop yesterday.</En></>,
            <><Af>Ek leer hard, want ek wil slaag.</Af> <En>I study hard because I want to pass.</En> <SpeakButton text="Ek leer hard, want ek wil slaag." /></>,
          ]}
        />
        <Mistake>Dropping the ge-: <Af>Hulle het gister by die winkel wag</Af> is wrong. Say <Af>gewag</Af>. And do not use <Af>maar</Af>, <Af>of</Af> or <Af>en</Af> for a reason.</Mistake>
      </>,
    ),
  },
  {
    title: 'Spelling, word forms and synonyms',
    content: slide(
      <>
        <Rule>Learn the exact spelling. Choose the form that fits the sentence. A synonym means nearly the same.</Rule>
        <MeaningPairs
          kind="same"
          pairs={[['begin', 'aanvang'], ['geleentheid', 'occasion']]}
          aria="Two pairs: the synonyms begin and aanvang, and the word geleentheid with its English meaning occasion."
        />
        <Worked
          title="Choose the right word"
          steps={[
            <>Spelling: <Af>geleentheid</Af> <En>occasion</En>. <SpeakButton text="geleentheid" /></>,
            <><Af>Die film was baie interessant.</Af> <En>The film was very interesting.</En> The describing word is <Af>interessant</Af>, not <Af>interesse</Af>.</>,
            <>A synonym for <Af>begin</Af> is <Af>aanvang</Af>. <Af>einde</Af> is the opposite.</>,
          ]}
        />
        <Mistake>Mixing up the letters, as in <Af>geleeentheid</Af> or <Af>gelleentheid</Af>. Say the word in parts: <Af>ge-leent-heid</Af>.</Mistake>
      </>,
    ),
  },
  {
    title: 'The last step: read it again',
    content: slide(
      <>
        <Rule>The most useful last editing step is <Af>Lees jou werk weer stadig deur</Af> <En>read your work again slowly</En>.</Rule>
        <OrderTiles
          tiles={['Skryf', 'Lees', 'Verbeter']}
          aria="Three steps in order: Skryf (write), Lees (read it again slowly), Verbeter (fix the mistakes)."
        />
        <Worked
          title="A checking routine"
          steps={[
            <>Read once for punctuation and capital letters.</>,
            <>Read again for word order, tense and spelling.</>,
          ]}
        />
        <Mistake>Writing everything in capital letters, deleting the first paragraph or changing the topic. Editing makes small, careful fixes.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <>
        <Check question={<>Choose the mark: <Af>Waar gaan jy ___</Af></>} answer={<><Af>?</Af></>} />
        <Check question={<>Which sentence has the right word order: <Af>Vandag lees ek my boek</Af> or <Af>Vandag ek lees my boek</Af>?</>} answer={<><Af>Vandag lees ek my boek.</Af></>} />
        <Check question={<>Choose the joiner: <Af>Ek leer hard, ___ ek wil slaag.</Af></>} answer={<><Af>want</Af>.</>} />
        <Check question={<>Choose the correct spelling: <Af>geleentheid</Af> or <Af>geleenthied</Af>?</>} answer={<><Af>geleentheid</Af>.</>} />
      </>,
    ),
  },
];

const bank: AfrikaansItem[] = [
  {
    prompt: "Kies die korrekte leesteken: 'Waar gaan jy ___'",
    options: ['?', '.', '!', ','],
    answer: '?',
    explanation: 'A direct question ends with a question mark.',
  },
  {
    prompt: "Watter sin het die korrekte woordorde?",
    options: ['Vandag lees ek my boek.', 'Vandag ek lees my boek.', 'Lees ek vandag my boek ek.', 'Ek vandag my boek lees.'],
    answer: 'Vandag lees ek my boek.',
    explanation: 'After a time phrase, Afrikaans usually inverts subject and verb.',
  },
  {
    prompt: "Kies die beste woord: 'Die film was baie ___.'",
    options: ['interessant', 'interesse', 'interesser', 'interes'],
    answer: 'interessant',
    explanation: "'Interessant' fits the adjective slot correctly.",
  },
  {
    prompt: "Watter sin is grammatikaal korrek?",
    options: ['Hulle het gister by die winkel gewag.', 'Hulle het gister by die winkel wag.', 'Hulle gister het by die winkel gewag.', 'Hulle by die winkel gewag het gister.'],
    answer: 'Hulle het gister by die winkel gewag.',
    explanation: 'The auxiliary and past participle are correctly placed.',
  },
  {
    prompt: "Kies die korrekte spelling.",
    options: ['geleentheid', 'geleeentheid', 'geleenthied', 'gelleentheid'],
    answer: 'geleentheid',
    explanation: 'This is the standard Afrikaans spelling.',
  },
  {
    prompt: "Watter voegwoord pas? 'Ek leer hard, ___ ek wil slaag.'",
    options: ['want', 'maar', 'of', 'en'],
    answer: 'want',
    explanation: "'Want' gives a reason.",
  },
  {
    prompt: "Kies die beste sinoniem vir 'begin'.",
    options: ['aanvang', 'afsluiting', 'beëindig', 'uitstel'],
    answer: 'aanvang',
    explanation: "'Aanvang' means the same as 'begin'.",
  },
  {
    prompt: "Watter redigeeraksie is die nuttigste laaste stap?",
    options: ['Lees jou werk weer stadig deur', 'Skryf alles in hoofletters', 'Vee jou eerste paragraaf uit', 'Verander die onderwerp heeltemal'],
    answer: 'Lees jou werk weer stadig deur',
    explanation: 'A final read-through catches overlooked mistakes.',
  },
];

export { bank };

const LanguageReinforcement = () => (
  <AfrikaansTopic
    title="Taalversterking"
    subtitle="Editing, punctuation and vocabulary in context"
    learnSteps={learnSteps}
    task="gr7-language-reinforcement-t3"
    bank={bank}
    speak="options"
  />
);

export default LanguageReinforcement;
