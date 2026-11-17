import AfrikaansTopic from '../../_shared/AfrikaansTopic';
import { AfrikaansItem, LearnStep } from '../../_shared/types';
import SpeakButton from '../../_shared/SpeakButton';
import { Check, Mistake, Rule, Worked } from '@/components/subjects/lesson/LessonBlocks';
import { Af, En, LetterLayout, MeaningPairs, OrderTiles, WordBoxes } from '@/components/diagrams/afrikaans/AfrikaansPictures';

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: "The layout of a friendly letter",
    content: slide(
      <>
        <Rule>A <Af>vriendskaplike brief</Af> <En>friendly letter</En> is written to someone you know. It has the <Af>adres</Af> <En>address</En> and <Af>datum</Af> <En>date</En> at the top, then the greeting, the news and the closing. Its purpose is <Af>om nuus te deel</Af> <En>to share news</En>.</Rule>
        <LetterLayout parts={["Adres en datum", "Liewe Thandi,", "Die nuus", "Jou vriendin, Naledi"]} aria="The parts of the text from top to bottom: Adres en datum, Liewe Thandi,, Die nuus, Jou vriendin, Naledi." />
        <Worked
          title="Read the parts"
          steps={[
            <>First comes <Af>die adres en die datum</Af> <En>the address and the date</En>.</>,
            <>Then the greeting: <Af>Liewe Thandi,</Af> <En>Dear Thandi,</En> <SpeakButton text="Liewe Thandi," /></>,
            <><Af>Die adres en datum staan bo-aan die bladsy.</Af> <En>The address and date are at the top of the page.</En></>,
          ]}
        />
        <Mistake>Starting with <Af>Geagte Meneer</Af> <En>Dear Sir</En>. A letter to a friend starts with <Af>Liewe</Af> and the name.</Mistake>
      </>,
    ),
  },
  {
    title: "Greeting and closing",
    content: slide(
      <>
        <Rule>Start with <Af>Liewe</Af> and the name of your friend. End with <Af>Jou vriend</Af> <En>Your friend (a boy)</En> or <Af>Jou vriendin</Af> <En>Your friend (a girl)</En> and your name.</Rule>
        <MeaningPairs kind="same" pairs={[["Liewe Thandi", "Dear Thandi"], ["Jou vriendin", "Your friend (a girl)"], ["Groete", "Greetings"]]} aria="Afrikaans words with their English meaning: Liewe Thandi is Dear Thandi, Jou vriendin is Your friend (a girl), Groete is Greetings." />
        <Worked
          title="Greet and close"
          steps={[
            <><Af>Liewe Sipho,</Af> <En>Dear Sipho,</En> <SpeakButton text="Liewe Sipho," /></>,
            <><Af>Jou vriendin,</Af> <Af>Naledi</Af> <En>Your friend, Naledi</En></>,
          ]}
        />
        <Mistake>Closing with <Af>Hoogagtend</Af>. That is for a formal letter. Use <Af>Jou vriendin</Af> or <Af>Groete</Af> for a friend.</Mistake>
      </>,
    ),
  },
  {
    title: "Short sentences about your news",
    content: slide(
      <>
        <Rule>Write short, clear sentences. Say why you write, then tell your news, then ask your friend to write back.</Rule>
        <OrderTiles tiles={["Ek hoop jy is gesond.", "Ons het na die strand gegaan.", "Dit was baie lekker.", "Skryf gou terug."]} aria="The steps in order: Ek hoop jy is gesond., Ons het na die strand gegaan., Dit was baie lekker., Skryf gou terug.." />
        <Worked
          title="Build the letter"
          steps={[
            <><Af>Ek hoop jy is gesond.</Af> <En>I hope you are well.</En> <SpeakButton text="Ek hoop jy is gesond." /></>,
            <><Af>Ons het na die strand gegaan.</Af> <En>We went to the beach.</En> <Af>Dit was baie lekker.</Af> <En>It was very nice.</En></>,
            <><Af>Skryf gou terug.</Af> <En>Write back soon.</En></>,
            <>Use <Af>kort, eenvoudige sinne</Af> <En>short, simple sentences</En> and <Af>een</Af> <En>one</En> idea in each paragraph.</>,
          ]}
        />
        <Mistake>Writing only one long sentence. Use short sentences and a new line for each idea.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <>
        <Check question={<>Which word means <En>date</En>?</>} answer={<><Af>Datum</Af>.</>} />
        <Check question={<>Which greeting suits a friend named Thandi?</>} answer={<><Af>Liewe Thandi,</Af></>} />
        <Check question={<>Complete: <Af>Ons ___ na die strand gegaan.</Af></>} answer={<><Af>het</Af>: <Af>Ons het na die strand gegaan.</Af></>} />
        <Check question={<>Which closing suits a friend?</>} answer={<><Af>Jou vriendin,</Af> or <Af>Groete</Af>.</>} />
      </>,
    ),
  },
];

export const bank: AfrikaansItem[] = [
  {
    prompt: "Watter Afrikaanse woord beteken 'friendly letter'?",
    options: ["ondersoekende verslag", "dagboekinskrywing", "vriendskaplike brief", "koerantberig"],
    answer: "vriendskaplike brief",
    explanation: "'Vriendskaplike brief' means a letter to a friend.",
  },
  {
    prompt: "Watter Afrikaanse woord beteken 'date'?",
    options: ["adres", "datum", "groete", "brief"],
    answer: "datum",
    explanation: "'Datum' means 'date'.",
  },
  {
    prompt: "Hoe begin 'n brief aan 'n vriendin?",
    options: ["Geagte Meneer,", "Liewe Thandi,", "Aan: die Redakteur", "Hoogagtend"],
    answer: "Liewe Thandi,",
    explanation: "A friendly letter starts with 'Liewe' and the name.",
  },
  {
    prompt: "Waar skryf jy die adres en die datum?",
    options: ["bo-aan die bladsy", "onder aan die bladsy", "in die middel", "na die groete"],
    answer: "bo-aan die bladsy",
    explanation: "The address and date are at the top.",
  },
  {
    prompt: "Watter slot pas by 'n brief aan 'n vriend?",
    options: ["Met agting", "Die uwe", "Hoogagtend", "Jou vriend"],
    answer: "Jou vriend",
    explanation: "A friend gets 'Jou vriend' or 'Jou vriendin'.",
  },
  {
    prompt: "Voltooi die sin: 'Ons ___ na die strand gegaan.'",
    options: ["is", "sal", "het", "word"],
    answer: "het",
    explanation: "'het' and 'gegaan' show the past: we went.",
  },
  {
    prompt: "Watter sin sê 'I hope you are well'?",
    options: ["Ek hoop jy is gesond.", "Skryf gou terug aan my.", "Dit was baie lekker gister.", "Ons het gister gegaan."],
    answer: "Ek hoop jy is gesond.",
    explanation: "'Ek hoop jy is gesond' means 'I hope you are well'.",
  },
  {
    prompt: "Watter sin sê 'Write back soon'?",
    options: ["Ek hoop jy is gesond.", "Ons het gespeel.", "Skryf gou terug.", "Dit was lekker."],
    answer: "Skryf gou terug.",
    explanation: "'Skryf gou terug' means 'Write back soon'.",
  },
  {
    prompt: "Watter sin vertel nuus oor die verlede?",
    options: ["Ons gaan môre strand toe nou.", "Ons het na die strand gegaan.", "Gaan jy saam met ons strand toe?", "Skryf my gou terug, asseblief."],
    answer: "Ons het na die strand gegaan.",
    explanation: "'het ... gegaan' shows the past.",
  },
  {
    prompt: "Wat is die doel van 'n vriendskaplike brief?",
    options: ["om werk te soek", "om nuus te deel", "om 'n klagte in te dien", "om 'n produk te bestel"],
    answer: "om nuus te deel",
    explanation: "A friendly letter shares news.",
  },
  {
    prompt: "Watter taal pas by 'n vriendskaplike brief?",
    options: ["kort, eenvoudige sinne", "wetlike taal vir ’n hof", "baie formele taal", "net slang en grappe"],
    answer: "kort, eenvoudige sinne",
    explanation: "Short, clear sentences.",
  },
  {
    prompt: "Hoeveel idees gaan in een paragraaf?",
    options: ["een", "al die idees", "geen", "tien"],
    answer: "een",
    explanation: "One idea per paragraph.",
  },
];

const FriendlyLetter = () => (
  <AfrikaansTopic
    title="Vriendskaplike brief"
    subtitle="The layout, the greeting and closing, and short sentences about your news"
    learnSteps={learnSteps}
    task="gr8-afr-friendly-letter-t1"
    bank={bank}
    speak="options"
  />
);

export default FriendlyLetter;
