import AfrikaansTopic from '../../_shared/AfrikaansTopic';
import { AfrikaansItem, LearnStep } from '../../_shared/types';
import SpeakButton from '../../_shared/SpeakButton';
import { Check, Mistake, Rule, Worked } from '@/components/subjects/lesson/LessonBlocks';
import { Af, En, MeaningPairs, OrderTiles, TaggedBoxes } from '@/components/diagrams/afrikaans/AfrikaansPictures';

// Grade 8 Afrikaans FAL oral skills: oral interview (simple Afrikaans; teacher-check list in docs/notes/oral-afrikaans-g7-9-doubts.md). The written interview is a separate lesson.
const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: "Who does what",
    content: slide(
      <>
        <Rule>An <Af>onderhoud</Af> <En>interview</En> is a planned talk. The <Af>onderhoudvoerder</Af> <En>interviewer</En> asks the questions. Plan your questions before you meet the person.</Rule>
        <TaggedBoxes items={[{"word": "onderhoud", "tag": "interview"}, {"word": "onderhoudvoerder", "tag": "interviewer"}, {"word": "vraag", "tag": "question"}]} aria={"Three words: onderhoud means interview, onderhoudvoerder means interviewer, vraag means question."} />
        <Worked
          title="Start politely"
          steps={[
            <><Af>Goeiedag. Dankie dat u tyd vir my gemaak het.</Af> <En>Good day. Thank you for making time for me.</En> <SpeakButton text="Goeiedag. Dankie dat u tyd vir my gemaak het." /></>,
            <><Af>Ek skryf oor die skooltuin.</Af> <En>I am writing about the school garden.</En> <SpeakButton text="Ek skryf oor die skooltuin." /></>,
            <><Af>Mag ek u &apos;n paar vrae vra?</Af> <En>May I ask you a few questions?</En> <SpeakButton text="Mag ek u 'n paar vrae vra?" /></>,
          ]}
        />
        <Mistake>Going without a plan. Prepare your questions.</Mistake>
      </>,
    ),
  },
  {
    title: "Open and closed questions",
    content: slide(
      <>
        <Rule>An <Af>oop vraag</Af> <En>open question</En> needs a long answer. A <Af>geslote vraag</Af> <En>closed question</En> needs a short answer. A <Af>opvolgvraag</Af> <En>follow-up question</En> asks for more.</Rule>
        <TaggedBoxes items={[{"word": "oop vraag", "tag": "open question"}, {"word": "geslote vraag", "tag": "closed question"}, {"word": "opvolgvraag", "tag": "follow-up question"}]} aria={"Three kinds of question: oop vraag is open, geslote vraag is closed, opvolgvraag is a follow-up question."} />
        <Worked
          title="Three kinds"
          steps={[
            <><Af>Hoekom hou jy van jou werk?</Af> <En>Why do you like your job?</En> <SpeakButton text="Hoekom hou jy van jou werk?" /> This is open.</>,
            <><Af>Hou jy van jou werk?</Af> <En>Do you like your job?</En> <SpeakButton text="Hou jy van jou werk?" /> This is closed.</>,
            <><Af>Kan jy &apos;n voorbeeld gee?</Af> <En>Can you give an example?</En> <SpeakButton text="Kan jy 'n voorbeeld gee?" /> This is a follow-up.</>,
          ]}
        />
        <Mistake>Asking only closed questions. You get one-word answers.</Mistake>
      </>,
    ),
  },
  {
    title: "Listening, thanks and time",
    content: slide(
      <>
        <Rule>Listen and do not interrupt. At the end, say thank you. An interview of 10 questions of 1 minute each, with 2 minutes to start, takes 12 minutes.</Rule>
        <OrderTiles tiles={["10 vrae", "1 minuut elk", "12 minute"]} aria={"A time sum in order: 10 vrae, 1 minuut elk, with the start the total is 12 minute."} />
        <Worked
          title="Finish well"
          steps={[
            <><Af>Dankie dat u tyd vir my gemaak het.</Af> <En>Thank you for making time for me.</En> <SpeakButton text="Dankie dat u tyd vir my gemaak het." /></>,
            <><Af>Luister en val nie in die rede nie.</Af> <En>Listen and do not interrupt.</En> <SpeakButton text="Luister en val nie in die rede nie." /></>,
            <><Af>10 vrae van 1 minuut en 2 minute om te begin is 12 minute.</Af> <En>10 questions of 1 minute and 2 minutes to start is 12 minutes.</En> <SpeakButton text="10 vrae van 1 minuut en 2 minute om te begin is 12 minute." /></>,
          ]}
        />
        <Mistake>Talking more than the other person. The interviewer asks and listens.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <>
        <Check question={<>Which word means <em>interview</em>?</>} answer={<><Af>onderhoud</Af> <En>interview</En>.</>} />
        <Check question={<>Which question needs a long answer?</>} answer={<><Af>oop vraag</Af> <En>open question</En>.</>} />
        <Check question={<>Which word means <em>follow-up question</em>?</>} answer={<><Af>opvolgvraag</Af> <En>follow-up question</En>.</>} />
        <Check question={<>How long is an interview of 10 questions of 1 minute plus 2 minutes?</>} answer={<><Af>12 minute</Af> <En>12 minutes</En>.</>} />
      </>,
    ),
  },
];

export const bank: AfrikaansItem[] = [
  {
    prompt: "Watter Afrikaanse woord beteken 'interview'?",
    options: ["toespraak", "onderhoud", "debat", "brief"],
    answer: "onderhoud",
    explanation: "'Onderhoud' means an interview.",
  },
  {
    prompt: "Watter Afrikaanse woord beteken 'interviewer'?",
    options: ["gehoor", "skrywer", "tydhouer", "onderhoudvoerder"],
    answer: "onderhoudvoerder",
    explanation: "The 'onderhoudvoerder' asks the questions.",
  },
  {
    prompt: "Watter Afrikaanse woord beteken 'question'?",
    options: ["vraag", "antwoord", "groet", "slot"],
    answer: "vraag",
    explanation: "'Vraag' means question.",
  },
  {
    prompt: "Watter sin is 'n goeie begin vir 'n onderhoud?",
    options: ["Gee my gou al jou antwoorde, asseblief.", "Ek het nie tyd vir hierdie nie.", "Goeiedag. Dankie dat u tyd vir my gemaak het.", "Praat nou of bly net stil, kom."],
    answer: "Goeiedag. Dankie dat u tyd vir my gemaak het.",
    explanation: "A polite start thanks the person.",
  },
  {
    prompt: "Watter sin is 'n oop vraag?",
    options: ["Hou jy van jou werk?", "Hoekom hou jy van jou werk?", "Is jou werk groot?", "Werk jy elke dag?"],
    answer: "Hoekom hou jy van jou werk?",
    explanation: "An open question starts with 'hoekom', 'hoe' or 'wat'.",
  },
  {
    prompt: "Watter sin is 'n geslote vraag?",
    options: ["Hoekom hou jy van jou werk?", "Hoe het jy begin werk?", "Wat doen jy graag?", "Hou jy van jou werk?"],
    answer: "Hou jy van jou werk?",
    explanation: "A closed question has a yes or no answer.",
  },
  {
    prompt: "Watter sin is 'n opvolgvraag?",
    options: ["Kan jy 'n voorbeeld gee?", "Hou jy van jou werk?", "Goeiedag, hoe gaan dit?", "Die onderhoud is oor."],
    answer: "Kan jy 'n voorbeeld gee?",
    explanation: "A follow-up question asks for more detail.",
  },
  {
    prompt: "Watter Afrikaanse woord beteken 'open question'?",
    options: ["geslote vraag", "opvolgvraag", "oop vraag", "antwoord"],
    answer: "oop vraag",
    explanation: "An 'oop vraag' needs a long answer.",
  },
  {
    prompt: "Watter Afrikaanse woord beteken 'closed question'?",
    options: ["oop vraag", "geslote vraag", "opvolgvraag", "antwoord"],
    answer: "geslote vraag",
    explanation: "A 'geslote vraag' needs a short answer.",
  },
  {
    prompt: "Watter soort vraag gee net 'n kort ja of nee?",
    options: ["oop vraag", "opvolgvraag", "onderhoud", "geslote vraag"],
    answer: "geslote vraag",
    explanation: "A closed question has a yes or no answer.",
  },
  {
    prompt: "Watter sin beteken 'Listen and do not interrupt.'?",
    options: ["Luister en val nie in die rede nie.", "Dankie dat u tyd vir my gemaak het.", "Ek skryf oor die skooltuin.", "Mag ek u 'n paar vrae vra?"],
    answer: "Luister en val nie in die rede nie.",
    explanation: "A good interviewer listens.",
  },
  {
    prompt: "Watter sin vra om toestemming?",
    options: ["Ek skryf oor die skooltuin.", "Dankie dat u tyd vir my gemaak het.", "Mag ek u 'n paar vrae vra?", "Luister en val nie in die rede nie."],
    answer: "Mag ek u 'n paar vrae vra?",
    explanation: "It is polite to ask permission.",
  },
  {
    prompt: "Hoe lank is 'n onderhoud van 10 vrae van 1 minuut elk en 2 minute om te begin?",
    options: ["10 minute", "12 minute", "8 minute", "20 minute"],
    answer: "12 minute",
    explanation: "10 + 2 = 12 minutes.",
  },
  {
    prompt: "Wat sê jy aan die einde van 'n onderhoud?",
    options: ["Jy was nie baie nuttig nie.", "Dit was 'n mors van tyd.", "Totsiens, ek is klaar met jou.", "Dankie dat u tyd vir my gemaak het."],
    answer: "Dankie dat u tyd vir my gemaak het.",
    explanation: "Always thank the person at the end.",
  },
];

const Interview = () => (
  <AfrikaansTopic
    title="Onderhoud: mondeling"
    subtitle="Roles, open and closed questions, follow-up questions, thanks and time"
    learnSteps={learnSteps}
    task="gr8-afr-interview-t3"
    bank={bank}
    speak="options"
  />
);

export default Interview;
