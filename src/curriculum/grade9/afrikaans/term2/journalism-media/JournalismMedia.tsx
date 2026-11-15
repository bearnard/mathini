import AfrikaansTopic from '../../_shared/AfrikaansTopic';
import { AfrikaansItem, LearnStep } from '../../_shared/types';
import SpeakButton from '../../_shared/SpeakButton';
import { Check, Mistake, Rule, Worked } from '@/components/subjects/lesson/LessonBlocks';
import { Af, En, MeaningPairs, OrderTiles } from '@/components/diagrams/afrikaans/AfrikaansPictures';

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: 'The two articles: die and \'n',
    content: slide(
      <>
        <Rule>Afrikaans has two articles. <Af>die</Af> means <em>the</em>. <Af>'n</Af> means <em>a</em> or <em>an</em>.</Rule>
        <MeaningPairs
          kind="same"
          pairs={[['die', 'the'], ["'n", 'a / an']]}
          aria="Two Afrikaans articles with their English meaning: die is the, 'n is a or an."
        />
        <Worked
          title="Use the articles"
          steps={[
            <><Af>die boek</Af> <En>the book</En> and <Af>'n boek</Af> <En>a book</En>. <SpeakButton text="die boek, 'n boek" /></>,
            <>The article <Af>die</Af> is the same for every noun. <Af>'n</Af> is written with an apostrophe.</>,
          ]}
        />
        <Mistake>Writing <Af>n</Af> without the apostrophe, or putting <Af>die</Af> where you mean <em>a</em>. <Af>die</Af> points to something known; <Af>'n</Af> introduces something new.</Mistake>
      </>,
    ),
  },
  {
    title: 'Everyday nouns: boek, tafel, hond, kind',
    content: slide(
      <>
        <Rule>News stories are about people, animals and things. Learn <Af>boek</Af> <En>book</En>, <Af>tafel</Af> <En>table</En>, <Af>hond</Af> <En>dog</En> and <Af>kind</Af> <En>child</En>.</Rule>
        <MeaningPairs
          kind="same"
          pairs={[['boek', 'book'], ['tafel', 'table'], ['hond', 'dog']]}
          aria="Three Afrikaans nouns with their English meaning: boek is book, tafel is table, hond is dog."
        />
        <Worked
          title="Use them with an article"
          steps={[
            <><Af>Die hond slaap onder die tafel.</Af> <En>The dog sleeps under the table.</En> <SpeakButton text="Die hond slaap onder die tafel." /></>,
            <><Af>'n Kind lees 'n boek.</Af> <En>A child reads a book.</En></>,
          ]}
        />
        <Mistake>Mixing up <Af>hond</Af> <En>dog</En> with <Af>huis</Af> <En>house</En>. Both start with h, but they are different words.</Mistake>
      </>,
    ),
  },
  {
    title: 'A news report: who, what, where, when',
    content: slide(
      <>
        <Rule>A news report gives the key facts. It answers <Af>Wie?</Af> <En>who</En>, <Af>Wat?</Af> <En>what</En>, <Af>Waar?</Af> <En>where</En> and <Af>Wanneer?</Af> <En>when</En>. The headline is short. In short: <Af>Wie, wat, waar, wanneer</Af>.</Rule>
        <OrderTiles
          tiles={['Wie', 'Wat', 'Waar', 'Wanneer']}
          aria="Four questions a news report answers: Wie (who), Wat (what), Waar (where), Wanneer (when)."
        />
        <Worked
          title="Read a headline"
          steps={[
            <><Af>Kind vind verlore hond</Af> <En>Child finds lost dog</En>. Headlines often leave out the articles. <SpeakButton text="Kind vind verlore hond" /></>,
            <>Who? <Af>'n kind</Af>. What? Found a dog. Where and when come in the first paragraph.</>,
          ]}
        />
        <Mistake>Putting <Af>persoonlike mening</Af> <En>personal opinion</En> in a news report. A report tells the facts; an opinion piece is a different text.</Mistake>
      </>,
    ),
  },
  {
    title: 'Interviews and listening for key information',
    content: slide(
      <>
        <Rule>In an interview one person asks and another answers. When you listen or read, find the key information: <Af>name, plekke en getalle</Af> <En>names, places and numbers</En> and the speaker&apos;s opinion.</Rule>
        <Worked
          title="Find the key information"
          steps={[
            <>Question: <Af>Wat het jy gesien?</Af> <En>What did you see?</En></>,
            <>Answer: <Af>Ek het 'n hond onder die tafel gesien.</Af> <En>I saw a dog under the table.</En> The key information is the dog and the place.</>,
          ]}
        />
        <Mistake>Writing down every word. Note only the key information, and separate the facts from the speaker&apos;s opinion.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <>
        <Check question={<>Which word is the article that means <em>the</em>?</>} answer={<><Af>die</Af>.</>} />
        <Check question={<>Which word is the article that means <em>a / an</em>?</>} answer={<><Af>'n</Af>.</>} />
        <Check question={<>Which Afrikaans word means <em>book</em>?</>} answer={<><Af>boek</Af>.</>} />
        <Check question={<>Which Afrikaans word means <em>child</em>?</>} answer={<><Af>kind</Af>.</>} />
      </>,
    ),
  },
];

const bank: AfrikaansItem[] = [
  {
    prompt: "Watter woord is die lidwoord wat 'the' beteken?",
    options: ["die", "'n", "boek", "tafel"],
    answer: "die",
    explanation: "'Die' is the definite article and means 'the'.",
  },
  {
    prompt: "Watter woord is die lidwoord wat 'a / an' beteken?",
    options: ["'n", "die", "hond", "kind"],
    answer: "'n",
    explanation: "'n is the indefinite article and means 'a' or 'an'.",
  },
  {
    prompt: "Watter Afrikaanse woord beteken 'book'?",
    options: ["boek", "tafel", "hond", "kind"],
    answer: "boek",
    explanation: "'Boek' means 'book'.",
  },
  {
    prompt: "Watter Afrikaanse woord beteken 'table'?",
    options: ["tafel", "boek", "hond", "kind"],
    answer: "tafel",
    explanation: "'Tafel' means 'table'.",
  },
  {
    prompt: "Watter Afrikaanse woord beteken 'dog'?",
    options: ["hond", "boek", "tafel", "kind"],
    answer: "hond",
    explanation: "'Hond' means 'dog'.",
  },
  {
    prompt: "Watter Afrikaanse woord beteken 'child'?",
    options: ["kind", "boek", "tafel", "hond"],
    answer: "kind",
    explanation: "'Kind' means 'child'. Its plural is 'kinders'.",
  },
  {
    prompt: "Watter vrae beantwoord 'n nuusberig?",
    options: ["Wie, wat, waar, wanneer", "Rym, strofe, reël, beeld", "Datum, adres, groet, afsluiting", "Koop, kies, betaal, gaan"],
    answer: "Wie, wat, waar, wanneer",
    explanation: "The key facts of a report.",
  },
  {
    prompt: "Wat is die lidwoord in 'die hond'?",
    options: ["die", "hond", "die hond", "geen"],
    answer: "die",
    explanation: "The article die means the.",
  },
  {
    prompt: "Watter opskrif is 'n nuusopskrif?",
    options: ["Kind vind verlore hond", "Liewe hond, ek mis jou baie", "Geagte hond van die dorp", "Ek het my hond baie lief"],
    answer: "Kind vind verlore hond",
    explanation: "Headlines are short and drop articles.",
  },
  {
    prompt: "Wat moet jy in 'n onderhoud neerskryf?",
    options: ["name, plekke en getalle", "elke woord wat die persoon sê", "net die titel van die onderhoud", "net jou eie mening oor die persoon"],
    answer: "name, plekke en getalle",
    explanation: "Note the key information.",
  },
  {
    prompt: "Watter sin het 'n onbepaalde lidwoord?",
    options: ["'n Kind lees 'n boek.", "Die kind lees die boek.", "Kind lees boek.", "Die kinders lees."],
    answer: "'n Kind lees 'n boek.",
    explanation: "The article 'n means a or an.",
  },
  {
    prompt: "Wat hoort nie in 'n nuusberig nie?",
    options: ["persoonlike mening", "die belangrikste feite", "wie, wat en waar", "wanneer dit gebeur het"],
    answer: "persoonlike mening",
    explanation: "A report gives facts, not opinion.",
  },
];

export { bank };

const JournalismMedia = () => (
  <AfrikaansTopic
    title="Joernalistiek & Mediatekste"
    subtitle="News reports, magazine articles, interviews, and key information"
    learnSteps={learnSteps}
    task="gr9-journalism-media-t2"
    bank={bank}
    speak="options"
  />
);

export default JournalismMedia;
