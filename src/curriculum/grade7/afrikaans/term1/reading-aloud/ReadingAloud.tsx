import AfrikaansTopic from '../../_shared/AfrikaansTopic';
import { AfrikaansItem, LearnStep } from '../../_shared/types';
import SpeakButton from '../../_shared/SpeakButton';
import { Check, Mistake, Rule, Worked } from '@/components/subjects/lesson/LessonBlocks';
import { Af, En, MeaningPairs, OrderTiles, TaggedBoxes } from '@/components/diagrams/afrikaans/AfrikaansPictures';

// Grade 7 Afrikaans FAL oral skills: reading aloud (simple Afrikaans, teacher-check list in docs/notes/oral-afrikaans-g7-9-doubts.md).
const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: "Reading aloud",
    content: slide(
      <>
        <Rule>To read a text out loud is <Af>hardoplees</Af> <En>read aloud</En>. Read the text silently first. Then read it slowly and clearly to your listeners.</Rule>
        <OrderTiles tiles={["Lees eers stil", "Oefen hardop", "Lees vir die klas"]} aria={"The steps of reading aloud in order: Lees eers stil, Oefen hardop, Lees vir die klas."} />
        <Worked
          title="Read well"
          steps={[
            <><Af>Lees eers stil.</Af> <En>Read silently first.</En> <SpeakButton text="Lees eers stil." /></>,
            <><Af>Lees stadig en duidelik.</Af> <En>Read slowly and clearly.</En> <SpeakButton text="Lees stadig en duidelik." /></>,
            <><Af>Kyk na die luisteraars.</Af> <En>Look at the listeners.</En> <SpeakButton text="Kyk na die luisteraars." /></>,
          ]}
        />
        <Mistake>Reading too fast. <Af>Luisteraars het tyd nodig om te verstaan.</Af> <En>Listeners need time to understand.</En> <SpeakButton text="Luisteraars het tyd nodig om te verstaan." /></Mistake>
      </>,
    ),
  },
  {
    title: "Voice: pace, pause and tone",
    content: slide(
      <>
        <Rule>Pace is <Af>spoed</Af> <En>pace</En>. A stop is a <Af>pouse</Af> <En>pause</En>. The feeling in your voice is <Af>toon</Af> <En>tone</En>. Speak loudly enough for the back row.</Rule>
        <TaggedBoxes items={[{"word": "spoed", "tag": "pace"}, {"word": "pouse", "tag": "pause"}, {"word": "toon", "tag": "tone"}]} aria={"Three voice skills: spoed means pace, pouse means pause, toon means tone."} />
        <Worked
          title="Match the voice"
          steps={[
            <><Af>Maak &apos;n pouse by &apos;n punt.</Af> <En>Pause at a full stop.</En> <SpeakButton text="Maak 'n pouse by 'n punt." /></>,
            <><Af>Praat hard genoeg.</Af> <En>Speak loudly enough.</En> <SpeakButton text="Praat hard genoeg." /></>,
            <><Af>Lees &apos;n hartseer deel sag en stadig.</Af> <En>Read a sad part softly and slowly.</En> <SpeakButton text="Lees 'n hartseer deel sag en stadig." /></>,
          ]}
        />
        <Mistake>Reading in a flat voice. Change your tone to match the story.</Mistake>
      </>,
    ),
  },
  {
    title: "Eye contact, practice and time",
    content: slide(
      <>
        <Rule>Look up for <Af>oogkontak</Af> <En>eye contact</En>. To practise is <Af>oefen</Af> <En>practise</En>. At a steady pace, 240 words take 2 minutes at 120 words a minute.</Rule>
        <OrderTiles tiles={["240 woorde", "120 woorde per minuut", "2 minute"]} aria={"A reading sum in order: 240 woorde, 120 woorde per minuut, so 2 minute."} />
        <Worked
          title="Practise and time it"
          steps={[
            <><Af>Oefen die teks drie keer.</Af> <En>Practise the text three times.</En> <SpeakButton text="Oefen die teks drie keer." /></>,
            <><Af>Teen 120 woorde per minuut neem 240 woorde 2 minute.</Af> <En>At 120 words a minute, 240 words take 2 minutes.</En> <SpeakButton text="Teen 120 woorde per minuut neem 240 woorde 2 minute." /></>,
            <><Af>Teen 120 woorde per minuut neem 360 woorde 3 minute.</Af> <En>At 120 words a minute, 360 words take 3 minutes.</En> <SpeakButton text="Teen 120 woorde per minuut neem 360 woorde 3 minute." /></>,
          ]}
        />
        <Mistake>Staring at the page. Look up so that the listeners feel included.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <>
        <Check question={<>Which word means <em>read aloud</em>?</>} answer={<><Af>hardoplees</Af> <En>read aloud</En>.</>} />
        <Check question={<>What do you do first?</>} answer={<><Af>Lees eers stil.</Af> <En>Read silently first.</En></>} />
        <Check question={<>Which word means <em>pause</em>?</>} answer={<><Af>pouse</Af> <En>pause</En>.</>} />
        <Check question={<>How long do 240 words take at 120 words a minute?</>} answer={<><Af>2 minute</Af> <En>2 minutes</En>.</>} />
      </>,
    ),
  },
];

export const bank: AfrikaansItem[] = [
  {
    prompt: "Watter Afrikaanse woord beteken 'read aloud'?",
    options: ["skryf", "hardoplees", "luister", "teken"],
    answer: "hardoplees",
    explanation: "'Hardoplees' means to read out loud.",
  },
  {
    prompt: "Wat doen jy eerste voordat jy hardop lees?",
    options: ["Lees baie vinnig.", "Kyk net na die prente.", "Skryf die teks oor.", "Lees eers stil."],
    answer: "Lees eers stil.",
    explanation: "You read silently first to know the meaning.",
  },
  {
    prompt: "Watter sin beteken 'Look at the listeners.'?",
    options: ["Kyk na die luisteraars.", "Praat hard genoeg.", "Lees stadig en duidelik.", "Maak 'n pouse by 'n punt."],
    answer: "Kyk na die luisteraars.",
    explanation: "'Kyk na die luisteraars' means look at the listeners.",
  },
  {
    prompt: "Watter Afrikaanse woord beteken 'pace'?",
    options: ["toon", "pouse", "spoed", "stem"],
    answer: "spoed",
    explanation: "'Spoed' means pace, or speed.",
  },
  {
    prompt: "Watter Afrikaanse woord beteken 'pause'?",
    options: ["spoed", "pouse", "toon", "oefen"],
    answer: "pouse",
    explanation: "'Pouse' means a short stop.",
  },
  {
    prompt: "Watter Afrikaanse woord beteken 'tone'?",
    options: ["pouse", "spoed", "oefen", "toon"],
    answer: "toon",
    explanation: "'Toon' means the feeling in the voice.",
  },
  {
    prompt: "Wanneer maak jy 'n pouse?",
    options: ["Maak 'n pouse by 'n punt.", "Maak 'n pouse in elke woord.", "Lees sonder om asem te haal.", "Maak nooit 'n pouse nie."],
    answer: "Maak 'n pouse by 'n punt.",
    explanation: "A pause at a full stop gives listeners time to think.",
  },
  {
    prompt: "Hoe lees jy 'n hartseer deel?",
    options: ["Lees 'n hartseer deel hard en vinnig.", "Lees 'n hartseer deel soos 'n grap.", "Lees 'n hartseer deel sag en stadig.", "Lees 'n hartseer deel nie hardop nie."],
    answer: "Lees 'n hartseer deel sag en stadig.",
    explanation: "The tone must match the feeling of the text.",
  },
  {
    prompt: "Watter Afrikaanse woord beteken 'eye contact'?",
    options: ["oefening", "oogkontak", "luisteraar", "stilte"],
    answer: "oogkontak",
    explanation: "'Oogkontak' means eye contact.",
  },
  {
    prompt: "Hoeveel minute neem 240 woorde teen 120 woorde per minuut?",
    options: ["1 minuut", "4 minute", "20 minute", "2 minute"],
    answer: "2 minute",
    explanation: "240 ÷ 120 = 2 minutes.",
  },
  {
    prompt: "Hoeveel minute neem 360 woorde teen 120 woorde per minuut?",
    options: ["3 minute", "2 minute", "4 minute", "30 minute"],
    answer: "3 minute",
    explanation: "360 ÷ 120 = 3 minutes.",
  },
  {
    prompt: "Wat beteken 'oefen'?",
    options: ["listen", "finish", "practise", "forget"],
    answer: "practise",
    explanation: "'Oefen' means to practise.",
  },
  {
    prompt: "Watter sin beteken 'Read slowly and clearly.'?",
    options: ["Lees baie vinnig en sag.", "Lees stadig en duidelik.", "Lees net die eerste reël.", "Lees dit vir jouself."],
    answer: "Lees stadig en duidelik.",
    explanation: "'Stadig' means slowly and 'duidelik' means clearly.",
  },
  {
    prompt: "Waarom lees jy nie te vinnig nie?",
    options: ["Die onderwyser hou nie daarvan nie.", "Die teks is dan te kort.", "Die boek raak dan stukkend.", "Luisteraars het tyd nodig om te verstaan."],
    answer: "Luisteraars het tyd nodig om te verstaan.",
    explanation: "Listeners need time to understand what they hear.",
  },
];

const ReadingAloud = () => (
  <AfrikaansTopic
    title="Hardoplees"
    subtitle="Reading aloud: preparing, voice, eye contact and practice"
    learnSteps={learnSteps}
    task="gr7-afr-reading-aloud-t1"
    bank={bank}
    speak="options"
  />
);

export default ReadingAloud;
