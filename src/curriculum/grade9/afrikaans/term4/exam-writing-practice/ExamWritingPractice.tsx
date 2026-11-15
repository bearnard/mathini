import AfrikaansTopic from '../../_shared/AfrikaansTopic';
import { AfrikaansItem, LearnStep } from '../../_shared/types';
import SpeakButton from '../../_shared/SpeakButton';
import { Check, Mistake, Rule, Worked } from '@/components/subjects/lesson/LessonBlocks';
import { Af, En, MeaningPairs, OrderTiles } from '@/components/diagrams/afrikaans/AfrikaansPictures';

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: 'Exam words: vraag, antwoord, tyd',
    content: slide(
      <>
        <Rule>Every exam task has a <Af>vraag</Af> <En>question</En>, needs an <Af>antwoord</Af> <En>answer</En> and runs on <Af>tyd</Af> <En>time</En>.</Rule>
        <MeaningPairs
          kind="same"
          pairs={[['vraag', 'question'], ['antwoord', 'answer'], ['tyd', 'time']]}
          aria="Three Afrikaans exam words with their English meaning: vraag is question, antwoord is answer, tyd is time."
        />
        <Worked
          title="Use the words"
          steps={[
            <><Af>Lees die vraag.</Af> <En>Read the question.</En> <SpeakButton text="Lees die vraag." /></>,
            <><Af>Skryf jou antwoord netjies.</Af> <En>Write your answer neatly.</En> <Af>Hoeveel tyd het ek?</Af> <En>How much time do I have?</En></>,
          ]}
        />
        <Mistake>Answering a different question from the one that is asked. Read the <Af>vraag</Af> twice, then write your <Af>antwoord</Af>.</Mistake>
      </>,
    ),
  },
  {
    title: 'Beplan, formaat, proeflees',
    content: slide(
      <>
        <Rule>Three skills win marks: to <Af>beplan</Af> <En>plan</En>, to follow the <Af>formaat</Af> <En>format</En> and to <Af>proeflees</Af> <En>proofread</En>.</Rule>
        <MeaningPairs
          kind="same"
          pairs={[['beplan', 'plan'], ['formaat', 'format'], ['proeflees', 'proofread']]}
          aria="Three Afrikaans exam skills with their English meaning: beplan is plan, formaat is format, proeflees is proofread."
        />
        <Worked
          title="Use them in a sentence"
          steps={[
            <><Af>Ek beplan my opstel eers.</Af> <En>I plan my essay first.</En></>,
            <><Af>Ek volg die regte formaat en ek proeflees my werk.</Af> <En>I follow the right format and I proofread my work.</En></>,
          ]}
        />
        <Mistake>Skipping the plan or the proofreading to save time. Planning and proofreading are what make the essay clear and correct.</Mistake>
      </>,
    ),
  },
  {
    title: 'The final essay under time pressure',
    content: slide(
      <>
        <Rule>Final essays are written in a set time. Split the time: read, plan, write, then proofread.</Rule>
        <OrderTiles
          tiles={['Lees', 'Beplan', 'Skryf', 'Proeflees']}
          aria="Four exam steps in order: Lees (read the question), Beplan (plan), Skryf (write), Proeflees (proofread)."
        />
        <Worked
          title="Plan the clock"
          steps={[
            <>Mark on the paper when each step must end.</>,
            <>Keep the last few minutes for <Af>proeflees</Af>: check punctuation, spelling and tense.</>,
          ]}
        />
        <Mistake>Writing until the time is up and having none left to check. Keep time for proofreading.</Mistake>
      </>,
    ),
  },
  {
    title: 'Transactional texts: the format counts',
    content: slide(
      <>
        <Rule>Each transactional text has its own format. Know the key feature of each so that you do not lose marks.</Rule>
        <MeaningPairs
          kind="becomes"
          pairs={[['formele brief', 'Geagte'], ['agenda', 'items'], ['verslag', 'feite']]}
          aria="Three text types and their key feature: a formele brief (formal letter) starts with Geagte, an agenda lists items, a verslag (report) gives feite (facts)."
        />
        <Worked
          title="Match text and format"
          steps={[
            <>Formal letter: address, date, <Af>Geagte ...</Af>, subject, content, closing, signature.</>,
            <>Agenda: a list of items for a meeting. Report: facts under clear headings.</>,
          ]}
        />
        <Mistake>Writing a letter format for a report or an essay format for an agenda. Check what text type the task asks for.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <>
        <Check question={<>Which word means <em>plan</em>?</>} answer={<><Af>beplan</Af>.</>} />
        <Check question={<>Which word means <em>proofread</em>?</>} answer={<><Af>proeflees</Af>.</>} />
        <Check question={<>Which word means <em>format</em>?</>} answer={<><Af>formaat</Af>.</>} />
        <Check question={<>Which word means <em>answer</em>?</>} answer={<><Af>antwoord</Af>.</>} />
      </>,
    ),
  },
];

const bank: AfrikaansItem[] = [
  {
    prompt: "Watter Afrikaanse woord beteken 'plan'?",
    options: ["beplan", "formaat", "tyd", "vraag"],
    answer: "beplan",
    explanation: "'Beplan' means 'plan'. Plan before you write.",
  },
  {
    prompt: "Watter Afrikaanse woord beteken 'format'?",
    options: ["formaat", "beplan", "vraag", "antwoord"],
    answer: "formaat",
    explanation: "'Formaat' means 'format'.",
  },
  {
    prompt: "Watter Afrikaanse woord beteken 'proofread'?",
    options: ["proeflees", "beplan", "antwoord", "formaat"],
    answer: "proeflees",
    explanation: "'Proeflees' means 'proofread', to check for mistakes.",
  },
  {
    prompt: "Watter Afrikaanse woord beteken 'time'?",
    options: ["tyd", "vraag", "formaat", "antwoord"],
    answer: "tyd",
    explanation: "'Tyd' means 'time'. Manage your time in an exam.",
  },
  {
    prompt: "Watter Afrikaanse woord beteken 'question'?",
    options: ["vraag", "tyd", "antwoord", "beplan"],
    answer: "vraag",
    explanation: "'Vraag' means 'question'.",
  },
  {
    prompt: "Watter Afrikaanse woord beteken 'answer'?",
    options: ["antwoord", "vraag", "tyd", "formaat"],
    answer: "antwoord",
    explanation: "'Antwoord' means 'answer'.",
  },
];

export { bank };

const ExamWritingPractice = () => (
  <AfrikaansTopic
    title="Eksamen Skryfwerk Praktyk"
    subtitle="Final essays, transactional texts, planning, and proofreading"
    learnSteps={learnSteps}
    task="gr9-exam-writing-practice-t4"
    bank={bank}
    speak="options"
  />
);

export default ExamWritingPractice;
