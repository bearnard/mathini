import AfrikaansTopic from '../../_shared/AfrikaansTopic';
import { AfrikaansItem, LearnStep } from '../../_shared/types';
import SpeakButton from '../../_shared/SpeakButton';
import { Check, Mistake, Rule, Worked } from '@/components/subjects/lesson/LessonBlocks';
import { Af, En, LetterLayout, MeaningPairs, OrderTiles, TaggedBoxes } from '@/components/diagrams/afrikaans/AfrikaansPictures';

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: "The layout of an informal letter",
    content: slide(
      <>
        <Rule>An <Af>informele brief</Af> <En>informal letter</En> is written to a friend or a family member. It has the <Af>adres</Af> <En>address</En> and the <Af>datum</Af> <En>date</En> at the top, then the greeting, the message and the closing.</Rule>
        <LetterLayout parts={["Adres en datum", "Liewe Sipho,", "Die boodskap", "Jou vriend, Thabo"]} aria={"The parts of the letter from top to bottom: Adres en datum, Liewe Sipho, Die boodskap, Jou vriend Thabo."} />
        <Worked
          title={"Read the parts"}
          steps={[
            <><Af>Liewe Sipho,</Af> <En>Dear Sipho,</En> <SpeakButton text="Liewe Sipho," /></>,
            <><Af>Die adres en datum staan bo-aan die bladsy.</Af> <En>The address and date are at the top of the page.</En></>,
            <><Af>Jou vriend,</Af> <En>Your friend,</En> <Af>Thabo</Af></>,
          ]}
        />
        <Mistake>Starting with <Af>Geagte Meneer</Af> <En>Dear Sir</En>. That is for a formal letter. A letter to a friend starts with <Af>Liewe</Af> and the name.</Mistake>
      </>,
    ),
  },
  {
    title: "What to write",
    content: slide(
      <>
        <Rule>Begin by asking how your friend is. Then tell your news and ask a question about the holidays. You write <Af>met 'n vriend of familielid</Af> <En>to a friend or a family member</En> in short, friendly sentences.</Rule>
        <OrderTiles tiles={["Hoe gaan dit met jou?", "Ek het 'n nuwe fiets gekry.", "Wat doen jy in die vakansie?", "Skryf gou terug."]} aria={"The steps in order: Hoe gaan dit met jou?, Ek het 'n nuwe fiets gekry., Wat doen jy in die vakansie?, Skryf gou terug."} />
        <Worked
          title={"Build the letter"}
          steps={[
            <><Af>Hoe gaan dit met jou?</Af> <En>How are you?</En> <SpeakButton text="Hoe gaan dit met jou?" /></>,
            <><Af>Ek het 'n nuwe fiets gekry.</Af> <En>I got a new bicycle.</En></>,
            <><Af>Wat doen jy in die vakansie?</Af> <En>What are you doing in the holidays?</En></>,
          ]}
        />
        <Mistake>Writing only about yourself. Ask your friend a question too.</Mistake>
      </>,
    ),
  },
  {
    title: "Friendly language and the closing",
    content: slide(
      <>
        <Rule>Use short, friendly sentences. Say <Af>Ek hoop jy is gesond.</Af> <En>I hope you are well.</En> near the start. End with <Af>Groete</Af> <En>Greetings</En> or <Af>Jou vriend</Af> <En>Your friend (a boy)</En> and your name.</Rule>
        <MeaningPairs kind="same" pairs={[["Liewe Sipho", "Dear Sipho"], ["Groete", "Greetings"], ["Jou vriend", "Your friend (a boy)"]]} aria={"Afrikaans words with their English meaning: Liewe Sipho is Dear Sipho, Groete is Greetings, Jou vriend is Your friend (a boy)."} />
        <Worked
          title={"Greet and close"}
          steps={[
            <><Af>Ek hoop jy is gesond.</Af> <En>I hope you are well.</En> <SpeakButton text="Ek hoop jy is gesond." /></>,
            <><Af>Skryf gou terug.</Af> <En>Write back soon.</En></>,
          ]}
        />
        <Mistake>Closing with <Af>Hoogagtend</Af> <En>Yours faithfully</En>. That is for a formal letter. Use <Af>Groete</Af> for a friend.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <>
        <Check question={<>Which word means <En>date</En>?</>} answer={<><Af>Datum</Af>.</>} />
        <Check question={<>Which greeting suits a friend named Sipho?</>} answer={<><Af>Liewe Sipho,</Af></>} />
        <Check question={<>Which sentence means <En>Write back soon</En>?</>} answer={<><Af>Skryf gou terug.</Af></>} />
        <Check question={<>Which closing suits a friend?</>} answer={<><Af>Groete</Af> or <Af>Jou vriend</Af>.</>} />
      </>,
    ),
  },
];

export const bank: AfrikaansItem[] = [
  {
    prompt: "Watter Afrikaanse woord beteken 'informal letter'?",
    options: ["dagboekinskrywing", "koerantberig", "informele brief", "strooibiljet"],
    answer: "informele brief",
    explanation: "'Informele brief' means a letter to a friend or a family member.",
  },
  {
    prompt: "Watter Afrikaanse woord beteken 'date'?",
    options: ["datum", "adres", "brief", "groete"],
    answer: "datum",
    explanation: "'Datum' means 'date'.",
  },
  {
    prompt: "Hoe begin 'n brief aan 'n vriend?",
    options: ["Geagte Meneer,", "Hoogagtend", "Onderwerp:", "Liewe Sipho,"],
    answer: "Liewe Sipho,",
    explanation: "An informal letter starts with 'Liewe' and the name.",
  },
  {
    prompt: "Waar skryf jy die adres en die datum?",
    options: ["onder aan die bladsy", "bo-aan die bladsy", "in die middel", "na die groete"],
    answer: "bo-aan die bladsy",
    explanation: "The address and date are at the top of the page.",
  },
  {
    prompt: "Watter slot pas by 'n brief aan 'n vriend?",
    options: ["Hoogagtend", "Met agting", "Jou vriend", "Die uwe"],
    answer: "Jou vriend",
    explanation: "'Jou vriend' (or 'Groete') suits a letter to a friend.",
  },
  {
    prompt: "Watter sin vra hoe jou vriend is?",
    options: ["Hoe gaan dit met jou?", "Skryf gou terug.", "Ek het 'n nuwe fiets gekry.", "Groete"],
    answer: "Hoe gaan dit met jou?",
    explanation: "'Hoe gaan dit met jou?' means 'How are you?'.",
  },
  {
    prompt: "Watter sin sê 'I got a new bicycle'?",
    options: ["Skryf gou terug.", "Wat doen jy in die vakansie?", "Hoe gaan dit met jou?", "Ek het 'n nuwe fiets gekry."],
    answer: "Ek het 'n nuwe fiets gekry.",
    explanation: "'Ek het 'n nuwe fiets gekry' means 'I got a new bicycle'.",
  },
  {
    prompt: "Watter sin vra 'n vraag oor die vakansie?",
    options: ["Ek hoop jy is gesond.", "Wat doen jy in die vakansie?", "Ek het my vakansie baie geniet.", "Ek het 'n nuwe fiets gekry."],
    answer: "Wat doen jy in die vakansie?",
    explanation: "'Wat doen jy in die vakansie?' asks what you are doing in the holidays.",
  },
  {
    prompt: "Watter sin sê 'Write back soon'?",
    options: ["Ek hoop jy is gesond.", "Hoe gaan dit met jou?", "Skryf gou terug.", "Groete"],
    answer: "Skryf gou terug.",
    explanation: "'Skryf gou terug' means 'Write back soon'.",
  },
  {
    prompt: "Wat beteken 'Ek hoop jy is gesond'?",
    options: ["I hope you are well.", "I got a new bicycle.", "Write back soon.", "How are you?"],
    answer: "I hope you are well.",
    explanation: "'Ek hoop jy is gesond' means 'I hope you are well'.",
  },
  {
    prompt: "Watter woord beteken 'greetings'?",
    options: ["Datum", "Adres", "Vakansie", "Groete"],
    answer: "Groete",
    explanation: "'Groete' means 'greetings'.",
  },
  {
    prompt: "Met wie praat jy in 'n informele brief?",
    options: ["met die burgemeester van die dorp", "met 'n vriend of familielid", "met 'n winkelassistent", "met die polisie"],
    answer: "met 'n vriend of familielid",
    explanation: "An informal letter is written to a friend or a family member.",
  },
];

const InformalLetter = () => (
  <AfrikaansTopic
    title={"Informele brief"}
    subtitle={"The layout, what to write, friendly language and the closing"}
    learnSteps={learnSteps}
    task={"gr7-afr-informal-letter-t1"}
    bank={bank}
    speak="options"
  />
);

export default InformalLetter;
