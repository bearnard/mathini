import AfrikaansTopic from '../../_shared/AfrikaansTopic';
import { AfrikaansItem, LearnStep } from '../../_shared/types';
import SpeakButton from '../../_shared/SpeakButton';
import { Check, Mistake, Rule, Worked } from '@/components/subjects/lesson/LessonBlocks';
import { Af, En, LetterLayout, MeaningPairs, OrderTiles, WordBoxes } from '@/components/diagrams/afrikaans/AfrikaansPictures';

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: "The layout of a dialogue",
    content: slide(
      <>
        <Rule>A <Af>dialoog</Af> <En>dialogue</En> is a conversation written as speech. Write the name of the speaker, a colon, and the words. Each speaker gets a new line. Begin <Af>met naam en dubbelpunt</Af> <En>with the name and a colon</En>.</Rule>
        <LetterLayout parts={["Thandi: Het jy die boek klaar gelees?", "Sipho: Amper.", "Thandi (glimlag): Moenie die einde vertel nie!"]} aria="The parts of the text from top to bottom: Thandi: Het jy die boek klaar gelees?, Sipho: Amper., Thandi (glimlag): Moenie die einde vertel nie!." />
        <Worked
          title="Read the lines"
          steps={[
            <><Af>Thandi: Het jy die boek klaar gelees?</Af> <En>Thandi: Have you finished reading the book?</En> <SpeakButton text="Het jy die boek klaar gelees?" /></>,
            <><Af>Sipho: Amper.</Af> <En>Sipho: Almost.</En></>,
          ]}
        />
        <Mistake>Using speech marks in a script. Write the name, a colon and the words.</Mistake>
      </>,
    ),
  },
  {
    title: "Directions in brackets",
    content: slide(
      <>
        <Rule>A short word in brackets tells how a person speaks or acts. It is a <Af>toneelaanwysing</Af> <En>stage direction</En>.</Rule>
        <MeaningPairs kind="same" pairs={[["(glimlag)", "(smiling)"], ["(fluister)", "(whispering)"], ["(lag)", "(laughing)"]]} aria="Afrikaans words with their English meaning: (glimlag) is (smiling), (fluister) is (whispering), (lag) is (laughing)." />
        <Worked
          title="Add a direction"
          steps={[
            <><Af>Thandi (fluister): Is dit lekker?</Af> <En>Thandi (whispering): Is it nice?</En></>,
            <><Af>Sipho (lag): Ja, baie!</Af> <En>Sipho (laughing): Yes, very!</En></>,
            <>Write the direction <Af>in hakies</Af> <En>in brackets</En>. Speak like real people: <Af>kort sinne soos in gesprek</Af> <En>short sentences as in conversation</En>.</>,
          ]}
        />
        <Mistake>Putting the direction inside the words. Keep it in brackets after the name.</Mistake>
      </>,
    ),
  },
  {
    title: "Interview: vraag and antwoord",
    content: slide(
      <>
        <Rule>An <Af>onderhoud</Af> <En>interview</En> has a <Af>vraag</Af> <En>question</En> and an <Af>antwoord</Af> <En>answer</En>. To an older person or a stranger, use the polite <Af>u</Af> <En>you</En>.</Rule>
        <MeaningPairs kind="same" pairs={[["vraag", "question"], ["antwoord", "answer"], ["onderhoud", "interview"]]} aria="Afrikaans words with their English meaning: vraag is question, antwoord is answer, onderhoud is interview." />
        <Worked
          title="Ask politely"
          steps={[
            <><Af>Hoe lank werk u al by die skool?</Af> <En>How long have you worked at the school?</En> <SpeakButton text="Hoe lank werk u al by die skool?" /></>,
            <><Af>Dankie vir u tyd.</Af> <En>Thank you for your time.</En></>,
            <><Af>Hoe lank werk u al hier?</Af> <En>How long have you worked here?</En> <Af>u</Af> means <Af>die beleefde 'you'</Af> <En>the polite you</En>.</>,
          ]}
        />
        <Mistake>Using <Af>jy</Af> for a stranger or an older person. Use <Af>u</Af> to be polite.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <>
        <Check question={<>Which word means <En>interview</En>?</>} answer={<><Af>Onderhoud</Af>.</>} />
        <Check question={<>Which word means <En>question</En>?</>} answer={<><Af>Vraag</Af>.</>} />
        <Check question={<>How do you write a speaker's line?</>} answer={<>The name, a colon and the words.</>} />
        <Check question={<>Which word is polite for <En>you</En>?</>} answer={<><Af>U</Af>.</>} />
      </>,
    ),
  },
];

export const bank: AfrikaansItem[] = [
  {
    prompt: "Watter Afrikaanse woord beteken 'dialogue'?",
    options: ["onderhoud", "verslag", "dialoog", "brief"],
    answer: "dialoog",
    explanation: "'Dialoog' is a conversation.",
  },
  {
    prompt: "Watter Afrikaanse woord beteken 'interview'?",
    options: ["onderhoud", "dialoog hier", "verslag hier", "dagboek hier"],
    answer: "onderhoud",
    explanation: "'Onderhoud' means 'interview'.",
  },
  {
    prompt: "Watter Afrikaanse woord beteken 'question'?",
    options: ["antwoord", "onderhoud", "dialoog", "vraag"],
    answer: "vraag",
    explanation: "'Vraag' means 'question'.",
  },
  {
    prompt: "Watter Afrikaanse woord beteken 'answer'?",
    options: ["antwoord", "vraag", "onderhoud", "dialoog"],
    answer: "antwoord",
    explanation: "'Antwoord' means 'answer'.",
  },
  {
    prompt: "Hoe begin elke reël in 'n dialoog?",
    options: ["met naam en dubbelpunt", "met ’n datum en adres", "met ’n groet en ’n slot", "met ’n nommer en punt"],
    answer: "met naam en dubbelpunt",
    explanation: "Write the name, a colon and the words.",
  },
  {
    prompt: "Waar staan die toneelaanwysing?",
    options: ["in die titel", "aan die einde van die bladsy", "in kapitale letters", "in hakies"],
    answer: "in hakies",
    explanation: "It is in brackets.",
  },
  {
    prompt: "Watter woord is 'n toneelaanwysing?",
    options: ["Thandi: Dag!", "(fluister)", "Amper klaar.", "Dankie hoor."],
    answer: "(fluister)",
    explanation: "A direction is in brackets.",
  },
  {
    prompt: "Watter sin is beleefd vir 'n onderwyser?",
    options: ["Hoe lank werk jy al hier?", "Hoe lank werk u al hier?", "Wat doen jy nou hier?", "Waar kom jy vandaan?"],
    answer: "Hoe lank werk u al hier?",
    explanation: "The polite u is used for a teacher or stranger.",
  },
  {
    prompt: "Wat beteken 'u'?",
    options: ["die woord vir 'I'", "die woord vir 'we'", "die woord vir 'they'", "die beleefde 'you'"],
    answer: "die beleefde 'you'",
    explanation: "'U' is the polite 'you'.",
  },
  {
    prompt: "Hoe eindig 'n onderhoud gewoonlik?",
    options: ["Dankie vir u tyd.", "Tot siens, bokkie.", "Ek is moeg.", "Skryf gou terug."],
    answer: "Dankie vir u tyd.",
    explanation: "Thank the person.",
  },
  {
    prompt: "Watter taal pas by 'n dialoog?",
    options: ["lang wetlike sinne vir ’n hof", "kort sinne soos in gesprek", "net slang en snaakse woorde", "gedigte met rym"],
    answer: "kort sinne soos in gesprek",
    explanation: "A dialogue sounds like real speech.",
  },
  {
    prompt: "Watter reël is reg geskryf in 'n dialoog?",
    options: ["\"Amper,\" sê Sipho.", "Amper Sipho", "Sipho Amper.", "Sipho: Amper."],
    answer: "Sipho: Amper.",
    explanation: "Name, colon, words.",
  },
];

const DialogueInterview = () => (
  <AfrikaansTopic
    title="Dialoog en onderhoud"
    subtitle="The layout of a dialogue, and questions and answers in an interview"
    learnSteps={learnSteps}
    task="gr8-afr-dialogue-interview-t2"
    bank={bank}
    speak="options"
  />
);

export default DialogueInterview;
