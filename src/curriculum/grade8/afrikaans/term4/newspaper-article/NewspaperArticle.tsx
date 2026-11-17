import AfrikaansTopic from '../../_shared/AfrikaansTopic';
import { AfrikaansItem, LearnStep } from '../../_shared/types';
import SpeakButton from '../../_shared/SpeakButton';
import { Check, Mistake, Rule, Worked } from '@/components/subjects/lesson/LessonBlocks';
import { Af, En, LetterLayout, MeaningPairs, OrderTiles, WordBoxes } from '@/components/diagrams/afrikaans/AfrikaansPictures';

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: "The parts of a news article",
    content: slide(
      <>
        <Rule>A <Af>koerantberig</Af> <En>newspaper report</En> has an <Af>opskrif</Af> <En>headline</En>, the name of the <Af>skrywer</Af> <En>writer</En>, a first paragraph and more details.</Rule>
        <MeaningPairs kind="same" pairs={[["opskrif", "headline"], ["skrywer", "writer"], ["aanhaling", "quotation"]]} aria="Afrikaans words with their English meaning: opskrif is headline, skrywer is writer, aanhaling is quotation." />
        <Worked
          title="Name the parts"
          steps={[
            <><Af>Die opskrif</Af> <En>the headline</En> is short.</>,
            <><Af>Die skrywer</Af> <En>the writer</En> signs the report.</>,
          ]}
        />
        <Mistake>Putting the main news at the end. Put it in the first paragraph.</Mistake>
      </>,
    ),
  },
  {
    title: "The first paragraph: wie, wat, waar, wanneer, hoekom",
    content: slide(
      <>
        <Rule>The first paragraph tells the main facts: <Af>wie</Af> <En>who</En>, <Af>wat</Af> <En>what</En>, <Af>waar</Af> <En>where</En>, <Af>wanneer</Af> <En>when</En> and <Af>hoekom</Af> <En>why</En>.</Rule>
        <WordBoxes words={["Leerders", "het", "200", "bome", "geplant."]} hot={[0, 4]} aria="The sentence in boxes: Leerders het 200 bome geplant.." />
        <Worked
          title="Write the lead"
          steps={[
            <><Af>Leerders het 200 bome geplant.</Af> <En>Learners planted 200 trees.</En> <SpeakButton text="Leerders het 200 bome geplant." /></>,
            <><Af>Dit het Saterdag by die skool gebeur.</Af> <En>It happened on Saturday at the school.</En></>,
            <>The first paragraph has <Af>die belangrikste feite</Af> <En>the most important facts</En>.</>,
          ]}
        />
        <Mistake>Leaving out when or where. Readers must know.</Mistake>
      </>,
    ),
  },
  {
    title: "A quotation and the past tense",
    content: slide(
      <>
        <Rule>A news report uses the past tense. Use <Af>Hy het gesê</Af> <En>He said</En> to give a person's words, in <Af>aanhalingstekens</Af> <En>quotation marks</En>.</Rule>
        <MeaningPairs kind="same" pairs={[["het geplant", "planted"], ["het gesê", "said"], ["aanhaling", "quotation"]]} aria="Afrikaans words with their English meaning: het geplant is planted, het gesê is said, aanhaling is quotation." />
        <Worked
          title="Add a quotation"
          steps={[
            <><Af>Die Ekoklub het die projek gelei.</Af> <En>The Eco Club led the project.</En></>,
            <><Af>Die voorsitter het gesê: Ons wil ons skool groen maak.</Af> <En>The chairperson said: We want to make our school green.</En></>,
            <>Use <Af>die verlede tyd</Af> <En>the past tense</En>. Leave out <Af>jou eie mening</Af> <En>your own opinion</En>.</>,
          ]}
        />
        <Mistake>Writing your own opinion as if it were news. Report the facts.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <>
        <Check question={<>Which word means <En>headline</En>?</>} answer={<><Af>Opskrif</Af>.</>} />
        <Check question={<>Which word means <En>who</En>?</>} answer={<><Af>Wie</Af>.</>} />
        <Check question={<>Which tense does a news report use?</>} answer={<>The past tense.</>} />
        <Check question={<>What is in the first paragraph?</>} answer={<>The main facts.</>} />
      </>,
    ),
  },
];

export const bank: AfrikaansItem[] = [
  {
    prompt: "Watter Afrikaanse woord beteken 'headline'?",
    options: ["skrywer", "aanhaling", "opskrif", "berig"],
    answer: "opskrif",
    explanation: "'Opskrif' means 'headline'.",
  },
  {
    prompt: "Watter Afrikaanse woord beteken 'writer'?",
    options: ["skrywer", "opskrif", "aanhaling", "berig"],
    answer: "skrywer",
    explanation: "'Skrywer' means 'writer'.",
  },
  {
    prompt: "Watter Afrikaanse woord beteken 'quotation'?",
    options: ["aanhaling", "bladsynommer", "paragraaf", "handtekening"],
    answer: "aanhaling",
    explanation: "'Aanhaling' means 'quotation'.",
  },
  {
    prompt: "Watter woord beteken 'who'?",
    options: ["wat", "wie", "waar", "wanneer"],
    answer: "wie",
    explanation: "'Wie' means 'who'.",
  },
  {
    prompt: "Watter woord beteken 'where'?",
    options: ["wie", "wat", "hoekom", "waar"],
    answer: "waar",
    explanation: "'Waar' means 'where'.",
  },
  {
    prompt: "Watter woord beteken 'when'?",
    options: ["hoeveel", "waarheen", "hoekom", "wanneer"],
    answer: "wanneer",
    explanation: "'Wanneer' means 'when'.",
  },
  {
    prompt: "Watter woord beteken 'why'?",
    options: ["wanneer", "hoekom", "waarheen", "hoeveel"],
    answer: "hoekom",
    explanation: "'Hoekom' means 'why'.",
  },
  {
    prompt: "Wat staan in die eerste paragraaf?",
    options: ["die belangrikste feite", "net 'n grap for a task in use", "die handtekening in a program", "'n gedig on a device in a file"],
    answer: "die belangrikste feite",
    explanation: "It gives the main facts.",
  },
  {
    prompt: "Watter sin kan 'n eerste paragraaf wees?",
    options: ["Ek dink bome is mooi. for a user at a school", "Wat 'n heerlike dag! in a lab for a task", "Skryf gou terug. on a system in a program", "Leerders het 200 bome geplant."],
    answer: "Leerders het 200 bome geplant.",
    explanation: "It states the news.",
  },
  {
    prompt: "Watter tyd gebruik 'n berig?",
    options: ["die toekomende tyd", "net bevele", "net vrae", "die verlede tyd"],
    answer: "die verlede tyd",
    explanation: "A report tells what happened.",
  },
  {
    prompt: "Watter woorde gee iemand se woorde?",
    options: ["Hy sal dink", "Hy sou hoop", "Hy het gesê", "Hy kan loop"],
    answer: "Hy het gesê",
    explanation: "'Het gesê' gives a quotation.",
  },
  {
    prompt: "Wat moet nie in 'n nuusberig wees nie?",
    options: ["feite", "'n opskrif in a file", "die datum for a user", "jou eie mening"],
    answer: "jou eie mening",
    explanation: "Reports give facts.",
  },
];

const NewspaperArticle = () => (
  <AfrikaansTopic
    title="Koerantberig en tydskrifartikel"
    subtitle="The headline, the first paragraph with the main facts, and a quotation"
    learnSteps={learnSteps}
    task="gr8-afr-newspaper-article-t4"
    bank={bank}
    speak="options"
  />
);

export default NewspaperArticle;
