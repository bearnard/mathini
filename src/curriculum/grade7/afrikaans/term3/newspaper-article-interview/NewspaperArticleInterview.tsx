import AfrikaansTopic from '../../_shared/AfrikaansTopic';
import { AfrikaansItem, LearnStep } from '../../_shared/types';
import SpeakButton from '../../_shared/SpeakButton';
import { Check, Mistake, Rule, Worked } from '@/components/subjects/lesson/LessonBlocks';
import { Af, En, LetterLayout, MeaningPairs, OrderTiles, TaggedBoxes } from '@/components/diagrams/afrikaans/AfrikaansPictures';

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: "A newspaper report",
    content: slide(
      <>
        <Rule>A <Af>koerantberig</Af> <En>newspaper report</En> tells readers about an event. It has an <Af>opskrif</Af> <En>heading</En>, a line with the writer's name, like <Af>Deur</Af> <En>By</En> <Af>Thandi Mokoena</Af>, and a first paragraph that gives the main facts. Write in the past tense.</Rule>
        <OrderTiles tiles={["Opskrif: Leerders plant bome", "Deur Thandi Mokoena", "Die eerste paragraaf", "Meer besonderhede"]} aria={"The parts of a newspaper report: Opskrif: Leerders plant bome, Deur Thandi Mokoena, Die eerste paragraaf, Meer besonderhede."} />
        <Worked
          title={"Read the parts"}
          steps={[
            <><Af>Leerders plant bome</Af> <En>Learners plant trees</En> <En>heading</En></>,
            <><Af>Deur Thandi Mokoena</Af> <En>By Thandi Mokoena</En></>,
          ]}
        />
        <Mistake>Writing your opinion in a news report. Report the facts.</Mistake>
      </>,
    ),
  },
  {
    title: "The five questions",
    content: slide(
      <>
        <Rule>The first paragraph answers <Af>Wie?</Af> <En>Who?</En> <Af>Wat?</Af> <En>What?</En> <Af>Waar?</Af> <En>Where?</En> <Af>Wanneer?</Af> <En>When?</En> and <Af>Hoekom?</Af> <En>Why?</En>. Check that your first paragraph answers all five.</Rule>
        <OrderTiles tiles={["Wie?", "Wat?", "Waar?", "Wanneer?", "Hoekom?"]} aria={"The five questions of a first paragraph: Wie is Who, Wat is What, Waar is Where, Wanneer is When, Hoekom is Why."} />
        <Worked
          title={"Write the first paragraph"}
          steps={[
            <><Af>Leerders van Laerskool Wyk 12 het twintig bome geplant.</Af> <En>Learners of Ward 12 Primary planted twenty trees.</En> <SpeakButton text="Leerders van Laerskool Wyk 12 het twintig bome geplant." /></>,
          ]}
        />
        <Mistake>Leaving out one of the five questions. The reader needs all five.</Mistake>
      </>,
    ),
  },
  {
    title: "An interview",
    content: slide(
      <>
        <Rule>An <Af>onderhoud</Af> <En>interview</En> has <Af>vrae</Af> <En>questions</En> and <Af>antwoorde</Af> <En>answers</En>. Write <Af>Vraag</Af> <En>Question</En> and <Af>Antwoord</Af> <En>Answer</En> before each line. End with <Af>Dankie vir die onderhoud.</Af> <En>Thank you for the interview.</En></Rule>
        <OrderTiles tiles={["Vraag: Hoekom het julle bome geplant?", "Antwoord: Ons wil die skool groen maak.", "Dankie vir die onderhoud."]} aria={"An interview in order: Vraag: Hoekom het julle bome geplant?, Antwoord: Ons wil die skool groen maak., Dankie vir die onderhoud."} />
        <Worked
          title={"Read the interview"}
          steps={[
            <><Af>Hoekom het julle bome geplant?</Af> <En>Why did you plant trees?</En> <SpeakButton text="Hoekom het julle bome geplant?" /></>,
            <><Af>Ons wil die skool groen maak.</Af> <En>We want to make the school green.</En></>,
          ]}
        />
        <Mistake>Asking questions that need only yes or no. Ask questions that need a longer answer.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <>
        <Check question={<>Which word means <En>interview</En>?</>} answer={<><Af>Onderhoud</Af>.</>} />
        <Check question={<>Which word means <En>Why?</En>?</>} answer={<><Af>Hoekom?</Af></>} />
        <Check question={<>Which word means <En>newspaper report</En>?</>} answer={<><Af>Koerantberig</Af>.</>} />
        <Check question={<>Which word means <En>answer</En>?</>} answer={<><Af>Antwoord</Af>.</>} />
      </>,
    ),
  },
];

export const bank: AfrikaansItem[] = [
  {
    prompt: "Watter Afrikaanse woord beteken 'newspaper report'?",
    options: ["onderhoud", "strooibiljet", "koerantberig", "agenda"],
    answer: "koerantberig",
    explanation: "'Koerantberig' means 'newspaper report'.",
  },
  {
    prompt: "Watter Afrikaanse woord beteken 'interview'?",
    options: ["onderhoud", "koerantberig", "opskrif", "antwoord"],
    answer: "onderhoud",
    explanation: "'Onderhoud' means 'interview'.",
  },
  {
    prompt: "Watter Afrikaanse woord beteken 'heading'?",
    options: ["antwoord", "vraag", "onderhoud", "opskrif"],
    answer: "opskrif",
    explanation: "'Opskrif' means 'heading'.",
  },
  {
    prompt: "Watter Afrikaanse woord beteken 'answer'?",
    options: ["vraag", "antwoord", "opskrif", "onderhoud"],
    answer: "antwoord",
    explanation: "'Antwoord' means 'answer'.",
  },
  {
    prompt: "Watter Afrikaanse woord beteken 'question'?",
    options: ["antwoord", "opskrif", "vraag", "onderhoud"],
    answer: "vraag",
    explanation: "'Vraag' means 'question'.",
  },
  {
    prompt: "Watter woord beteken 'Who?'?",
    options: ["Wie", "Wat", "Waar", "Wanneer"],
    answer: "Wie",
    explanation: "'Wie' means 'who'.",
  },
  {
    prompt: "Watter woord beteken 'Why?'?",
    options: ["Wie", "Wanneer", "Wat", "Hoekom"],
    answer: "Hoekom",
    explanation: "'Hoekom' means 'why'.",
  },
  {
    prompt: "Watter woord beteken 'Where?'?",
    options: ["Wie", "Waar", "Hoekom", "Wat"],
    answer: "Waar",
    explanation: "'Waar' means 'where'.",
  },
  {
    prompt: "Wat beteken 'Deur Thandi Mokoena'?",
    options: ["Thandi is a heading", "Thandi is the answer", "By Thandi Mokoena", "Thandi is the question"],
    answer: "By Thandi Mokoena",
    explanation: "'Deur' means 'by' and shows the writer.",
  },
  {
    prompt: "Watter sin sê 'Learners of Ward 12 Primary planted twenty trees'?",
    options: ["Leerders van Laerskool Wyk 12 het twintig bome geplant.", "Hoekom het julle die twintig bome op die skoolgrond geplant?", "Ons wil die skool groen en skoon maak vir almal.", "Leerders van Laerskool Wyk 12 plant bome"],
    answer: "Leerders van Laerskool Wyk 12 het twintig bome geplant.",
    explanation: "'Het ... geplant' shows the past.",
  },
  {
    prompt: "Watter sin is 'n vraag in 'n onderhoud?",
    options: ["Ons wil die skool groen en skoon maak.", "Dankie vir die onderhoud.", "Leerders plant bome", "Hoekom het julle bome geplant?"],
    answer: "Hoekom het julle bome geplant?",
    explanation: "'Hoekom het julle bome geplant?' asks why the trees were planted.",
  },
  {
    prompt: "Watter sin sluit 'n onderhoud af?",
    options: ["Ons wil die skool groen maak.", "Dankie vir die onderhoud.", "Hoekom het julle bome geplant?", "Leerders plant bome"],
    answer: "Dankie vir die onderhoud.",
    explanation: "An interview ends with thanks.",
  },
];

const NewspaperArticleInterview = () => (
  <AfrikaansTopic
    title={"Koerantberig en onderhoud"}
    subtitle={"The parts of a newspaper report, the five questions and an interview"}
    learnSteps={learnSteps}
    task={"gr7-afr-newspaper-article-interview-t3"}
    bank={bank}
    speak="options"
  />
);

export default NewspaperArticleInterview;
