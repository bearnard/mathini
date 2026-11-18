import AfrikaansTopic from '../../_shared/AfrikaansTopic';
import { AfrikaansItem, LearnStep } from '../../_shared/types';
import SpeakButton from '../../_shared/SpeakButton';
import { Check, Mistake, Rule, Worked } from '@/components/subjects/lesson/LessonBlocks';
import { Af, En, LetterLayout, MeaningPairs, OrderTiles, TaggedBoxes } from '@/components/diagrams/afrikaans/AfrikaansPictures';

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: "A diary entry",
    content: slide(
      <>
        <Rule>A <Af>dagboek</Af> <En>diary</En> entry begins with the date and <Af>Liewe Dagboek,</Af> <En>Dear Diary,</En> Tell what happened and how you felt. Use the past tense: <Af>Gister het ons bome geplant.</Af> <En>Yesterday we planted trees.</En></Rule>
        <LetterLayout parts={["Maandag, 12 Mei", "Liewe Dagboek,", "Gister het ons bome geplant.", "Ek was bly."]} aria={"A diary entry from top to bottom: Maandag, 12 Mei, Liewe Dagboek, Gister het ons bome geplant., Ek was bly."} />
        <Worked
          title={"Read the entry"}
          steps={[
            <><Af>Liewe Dagboek,</Af> <En>Dear Diary,</En> <SpeakButton text="Liewe Dagboek," /></>,
            <><Af>Ek was bly.</Af> <En>I was happy.</En></>,
          ]}
        />
        <Mistake>Writing only what happened. A diary also shows your feelings.</Mistake>
      </>,
    ),
  },
  {
    title: "An e-mail",
    content: slide(
      <>
        <Rule>An <Af>e-pos</Af> <En>e-mail</En> has <Af>Aan</Af> <En>To</En> and <Af>Onderwerp</Af> <En>Subject</En> at the top. Greet a teacher with <Af>Geagte Mev. Pillay,</Af> <En>Dear Mrs Pillay,</En> and close with <Af>Vriendelike groete</Af> <En>Kind regards</En>. Write a clear subject: <Af>waaroor die e-pos gaan</Af> <En>what the e-mail is about</En>.</Rule>
        <OrderTiles tiles={["Aan: Mev. Pillay", "Onderwerp: Versoek om 'n boek", "Geagte Mev. Pillay,", "Vriendelike groete"]} aria={"The parts of an e-mail in order: Aan: Mev. Pillay, Onderwerp: Versoek om 'n boek, Geagte Mev. Pillay, Vriendelike groete."} />
        <Worked
          title={"Read the e-mail"}
          steps={[
            <><Af>Geagte Mev. Pillay,</Af> <En>Dear Mrs Pillay,</En> <SpeakButton text="Geagte Mev. Pillay," /></>,
            <><Af>Vriendelike groete</Af> <En>Kind regards</En></>,
          ]}
        />
        <Mistake>Leaving the subject empty. The subject tells the reader what the e-mail is about.</Mistake>
      </>,
    ),
  },
  {
    title: "A flyer",
    content: slide(
      <>
        <Rule>A <Af>strooibiljet</Af> <En>flyer</En> advertises an event on one page. Make <Af>die opskrif</Af> <En>the heading</En> big, add the facts and an invitation. <Af>Almal is welkom!</Af> <En>Everyone is welcome!</En> is a good ending.</Rule>
        <OrderTiles tiles={["SPORTDAG", "Vrydag om 9:00 by die skool", "Almal is welkom!"]} aria={"A flyer in order: SPORTDAG, Vrydag om 9:00 by die skool, Almal is welkom!"} />
        <Worked
          title={"Read the flyer"}
          steps={[
            <><Af>Sportdag</Af> <En>Sports day</En></>,
            <><Af>Almal is welkom!</Af> <En>Everyone is welcome!</En> <SpeakButton text="Almal is welkom!" /></>,
          ]}
        />
        <Mistake>Using long paragraphs on a flyer. Use few words and a big heading.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <>
        <Check question={<>Which word means <En>diary</En>?</>} answer={<><Af>Dagboek</Af>.</>} />
        <Check question={<>Which word means <En>e-mail</En>?</>} answer={<><Af>E-pos</Af>.</>} />
        <Check question={<>Which word means <En>flyer</En>?</>} answer={<><Af>Strooibiljet</Af>.</>} />
        <Check question={<>Which closing means <En>Kind regards</En>?</>} answer={<><Af>Vriendelike groete</Af></>} />
      </>,
    ),
  },
];

export const bank: AfrikaansItem[] = [
  {
    prompt: "Watter Afrikaanse woord beteken 'diary'?",
    options: ["e-pos", "strooibiljet", "dagboek", "vorm"],
    answer: "dagboek",
    explanation: "'Dagboek' means 'diary'.",
  },
  {
    prompt: "Watter Afrikaanse woord beteken 'e-mail'?",
    options: ["e-pos", "dagboek", "strooibiljet", "brief"],
    answer: "e-pos",
    explanation: "'E-pos' means 'e-mail'.",
  },
  {
    prompt: "Watter Afrikaanse woord beteken 'flyer'?",
    options: ["dagboekinskrywing", "e-pos", "plakkaat", "strooibiljet"],
    answer: "strooibiljet",
    explanation: "'Strooibiljet' means 'flyer'.",
  },
  {
    prompt: "Watter Afrikaanse woord beteken 'subject' in 'n e-pos?",
    options: ["aan", "onderwerp", "handtekening", "groete"],
    answer: "onderwerp",
    explanation: "'Onderwerp' means 'subject'.",
  },
  {
    prompt: "Hoe begin 'n dagboekinskrywing?",
    options: ["Geagte Mev. Pillay,", "Aan: Mev. Pillay", "Liewe Dagboek,", "SPORTDAG"],
    answer: "Liewe Dagboek,",
    explanation: "A diary entry starts with 'Liewe Dagboek'.",
  },
  {
    prompt: "Watter groet pas by 'n e-pos aan 'n onderwyser?",
    options: ["Vriendelike groete", "Haai, ek sien jou later, maat", "Tot later", "Sien jou"],
    answer: "Vriendelike groete",
    explanation: "'Vriendelike groete' is a polite closing.",
  },
  {
    prompt: "Watter groet pas by 'n e-pos aan 'n onderwyseres?",
    options: ["Haai, hoe gaan dit met jou?", "Hallo maat", "Ou Pillay", "Geagte Mev. Pillay,"],
    answer: "Geagte Mev. Pillay,",
    explanation: "'Geagte' is the polite greeting of an e-mail to a teacher.",
  },
  {
    prompt: "Watter sin sê 'Yesterday we planted trees'?",
    options: ["Ek was baie bly oor die dag.", "Gister het ons bome geplant.", "Almal is welkom by die skool!", "Liewe Dagboek, ek is moeg."],
    answer: "Gister het ons bome geplant.",
    explanation: "'Het ... geplant' shows the past.",
  },
  {
    prompt: "Wat beteken 'Ek was bly'?",
    options: ["I am tired.", "Everyone is welcome!", "I was happy.", "Kind regards"],
    answer: "I was happy.",
    explanation: "'Bly' means 'happy'.",
  },
  {
    prompt: "Wat beteken 'Almal is welkom'?",
    options: ["Everyone is welcome!", "I was happy.", "Kind regards", "Yesterday we planted trees."],
    answer: "Everyone is welcome!",
    explanation: "'Almal' means 'everyone'.",
  },
  {
    prompt: "Watter deel van 'n strooibiljet moet groot wees?",
    options: ["die adres van die drukker", "die datum van gister", "die laaste reël", "die opskrif"],
    answer: "die opskrif",
    explanation: "A flyer needs a big heading.",
  },
  {
    prompt: "Wat moet jy by die onderwerp van 'n e-pos skryf?",
    options: ["jou naam en jou adres", "waaroor die e-pos gaan", "die datum van gister", "die naam van jou ou skool"],
    answer: "waaroor die e-pos gaan",
    explanation: "The subject tells what the e-mail is about.",
  },
];

const DiaryEmailFlyer = () => (
  <AfrikaansTopic
    title={"Dagboek, e-pos en strooibiljet"}
    subtitle={"A diary entry, an e-mail and a flyer"}
    learnSteps={learnSteps}
    task={"gr7-afr-diary-email-flyer-t4"}
    bank={bank}
    speak="options"
  />
);

export default DiaryEmailFlyer;
