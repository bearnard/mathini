import AfrikaansTopic from '../../_shared/AfrikaansTopic';
import { AfrikaansItem, LearnStep } from '../../_shared/types';
import SpeakButton from '../../_shared/SpeakButton';
import { Check, Mistake, Rule, Worked } from '@/components/subjects/lesson/LessonBlocks';
import { Af, En, LetterLayout, MeaningPairs, OrderTiles, WordBoxes } from '@/components/diagrams/afrikaans/AfrikaansPictures';

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: "The parts of the report",
    content: slide(
      <>
        <Rule>An <Af>ondersoekende verslag</Af> <En>investigative report</En> tells what you found out. It has an <Af>inleiding</Af> <En>introduction</En>, the <Af>bevindinge</Af> <En>findings</En>, a <Af>gevolgtrekking</Af> <En>conclusion</En> and an <Af>aanbeveling</Af> <En>recommendation</En>.</Rule>
        <MeaningPairs kind="same" pairs={[["bevindinge", "findings"], ["gevolgtrekking", "conclusion"], ["aanbeveling", "recommendation"]]} aria="Afrikaans words with their English meaning: bevindinge is findings, gevolgtrekking is conclusion, aanbeveling is recommendation." />
        <Worked
          title="Name the parts"
          steps={[
            <><Af>Die bevindinge</Af> <En>the findings</En> say what you found.</>,
            <><Af>Die gevolgtrekking</Af> <En>the conclusion</En> says what the findings show.</>,
            <><Af>Die inleiding</Af> <En>the introduction</En> comes first.</>,
          ]}
        />
        <Mistake>Mixing facts with opinions. Report what you found.</Mistake>
      </>,
    ),
  },
  {
    title: "The questionnaire",
    content: slide(
      <>
        <Rule>A <Af>vraelys</Af> <En>questionnaire</En> is a list of questions that all learners answer. Give choices of answers, so that the answers can be counted.</Rule>
        <WordBoxes words={["Hoe", "kom", "jy", "skool", "toe?"]} hot={[0]} aria="The sentence in boxes: Hoe kom jy skool toe?." />
        <Worked
          title="Read the question"
          steps={[
            <><Af>Hoe kom jy skool toe?</Af> <En>How do you get to school?</En> <SpeakButton text="Hoe kom jy skool toe?" /></>,
            <>The choices: <Af>te voet</Af> <En>on foot</En>, <Af>met die taxi</Af> <En>by taxi</En>, <Af>met die bus</Af> <En>by bus</En>.</>,
            <>A questionnaire is <Af>'n lys vrae vir almal</Af> <En>a list of questions for everyone</En>.</>,
          ]}
        />
        <Mistake>Asking questions with no choices. Then the answers are hard to count.</Mistake>
      </>,
    ),
  },
  {
    title: "Findings and conclusion",
    content: slide(
      <>
        <Rule>Write the findings in short sentences with numbers. Then write a conclusion that follows from them.</Rule>
        <MeaningPairs kind="same" pairs={[["22 leerders loop skool toe", "22 learners walk to school"], ["10 leerders ry met die taxi", "10 learners go by taxi"], ["8 leerders ry met die bus", "8 learners go by bus"]]} aria="Afrikaans words with their English meaning: 22 leerders loop skool toe is 22 learners walk to school, 10 leerders ry met die taxi is 10 learners go by taxi, 8 leerders ry met die bus is 8 learners go by bus." />
        <Worked
          title="Check the numbers"
          steps={[
            <><Af>22 leerders loop skool toe.</Af> <En>22 learners walk to school.</En> <SpeakButton text="22 leerders loop skool toe." /></>,
            <><Af>Dit is meer as die helfte.</Af> <En>That is more than half.</En> 22 + 10 + 8 = 40.</>,
            <>The conclusion must <Af>wys wat dit beteken</Af> <En>show what it means</En>. Use <Af>feite, nie mening nie</Af> <En>facts, not opinion</En>.</>,
          ]}
        />
        <Mistake>Findings that do not add up. Check that the numbers give the total.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <>
        <Check question={<>Which word means <En>findings</En>?</>} answer={<><Af>Bevindinge</Af>.</>} />
        <Check question={<>Which word means <En>questionnaire</En>?</>} answer={<><Af>Vraelys</Af>.</>} />
        <Check question={<>22 + 10 + 8 = ?</>} answer={<>40.</>} />
        <Check question={<>What does the conclusion do?</>} answer={<>It says what the findings show.</>} />
      </>,
    ),
  },
];

export const bank: AfrikaansItem[] = [
  {
    prompt: "Watter Afrikaanse woord beteken 'questionnaire'?",
    options: ["verslag", "brief", "dagboek", "vraelys"],
    answer: "vraelys",
    explanation: "'Vraelys' is a list of questions.",
  },
  {
    prompt: "Watter Afrikaanse woord beteken 'findings'?",
    options: ["gevolgtrekking", "bevindinge", "aanbeveling", "inleiding"],
    answer: "bevindinge",
    explanation: "'Bevindinge' means 'findings'.",
  },
  {
    prompt: "Watter Afrikaanse woord beteken 'conclusion'?",
    options: ["gevolgtrekking", "bevindinge hier", "aanbeveling", "vraelys hier"],
    answer: "gevolgtrekking",
    explanation: "'Gevolgtrekking' means 'conclusion'.",
  },
  {
    prompt: "Watter Afrikaanse woord beteken 'recommendation'?",
    options: ["bevindinge", "vraelysie", "aanbeveling", "gevolgtrekking"],
    answer: "aanbeveling",
    explanation: "'Aanbeveling' means 'recommendation'.",
  },
  {
    prompt: "Wat is 'n vraelys?",
    options: ["’n storie vir kinders", "’n gedig oor die see", "’n brief aan ’n vriend", "lys vrae vir almal"],
    answer: "lys vrae vir almal",
    explanation: "A questionnaire is a list of questions that all learners answer.",
  },
  {
    prompt: "Hoe vra jy hoe leerders skool toe kom?",
    options: ["Hoe kom jy skool toe?", "Waar woon jy in die dorp?", "Wat is jou naam en van?", "Hoe oud is jy nou?"],
    answer: "Hoe kom jy skool toe?",
    explanation: "'Hoe kom jy skool toe?' means 'How do you get to school?'",
  },
  {
    prompt: "Watter keuse beteken 'on foot'?",
    options: ["met die bus", "te voet", "met die taxi", "met die trein"],
    answer: "te voet",
    explanation: "'Te voet' means 'on foot'.",
  },
  {
    prompt: "Hoeveel leerders is dit altesaam: 22, 10 en 8?",
    options: ["30", "32", "50", "40"],
    answer: "40",
    explanation: "22 + 10 + 8 = 40.",
  },
  {
    prompt: "Watter sin is 'n bevinding?",
    options: ["22 leerders loop skool toe.", "Ek dink dit is baie lekker.", "Hoe kom jy skool toe?", "Skryf gou terug aan my."],
    answer: "22 leerders loop skool toe.",
    explanation: "A finding states a fact with a number.",
  },
  {
    prompt: "Wat moet die gevolgtrekking doen?",
    options: ["nuwe feite byvoeg tot dit", "’n storie vertel vir die klas", "wys wat dit beteken", "’n grap maak vir die klas"],
    answer: "wys wat dit beteken",
    explanation: "The conclusion shows what the findings mean.",
  },
  {
    prompt: "Waarmee begin die verslag?",
    options: ["die aanbeveling", "die gevolgtrekking", "die inleiding", "die handtekening"],
    answer: "die inleiding",
    explanation: "The introduction says what you investigated.",
  },
  {
    prompt: "Watter taal pas by 'n verslag?",
    options: ["net gevoelens en drome", "slang van die straat", "gedigte oor die lente", "feite, nie mening nie"],
    answer: "feite, nie mening nie",
    explanation: "Reports give facts.",
  },
];

const InvestigativeReport = () => (
  <AfrikaansTopic
    title="Ondersoekende verslag en vraelys"
    subtitle="The question, the questionnaire, the findings and the conclusion"
    learnSteps={learnSteps}
    task="gr8-afr-investigative-report-t1"
    bank={bank}
    speak="options"
  />
);

export default InvestigativeReport;
