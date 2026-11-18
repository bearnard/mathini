import AfrikaansTopic from '../../_shared/AfrikaansTopic';
import { AfrikaansItem, LearnStep } from '../../_shared/types';
import SpeakButton from '../../_shared/SpeakButton';
import { Check, Mistake, Rule, Worked } from '@/components/subjects/lesson/LessonBlocks';
import { Af, En, LetterLayout, MeaningPairs, OrderTiles, WordBoxes } from '@/components/diagrams/afrikaans/AfrikaansPictures';

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: "Facts and opinions",
    content: slide(
      <>
        <Rule>A <Af>verslag</Af> <En>report</En> gives <Af>feite</Af> <En>facts</En>. A fact can be checked. An <Af>mening</Af> <En>opinion</En> is what you think.</Rule>
        <MeaningPairs kind="same" pairs={[["verslag", "report"], ["feite", "facts"], ["mening", "opinion"]]} aria="Afrikaans words with their English meaning: verslag is report, feite is facts, mening is opinion." />
        <Worked
          title="Sort the sentences"
          steps={[
            <><Af>Dit is ’n feit.</Af> <En>It is a fact.</En></>,
            <><Af>Dit is my mening.</Af> <En>It is my opinion.</En></>,
          ]}
        />
        <Mistake>Putting opinions in a report. A report gives facts.</Mistake>
      </>,
    ),
  },
  {
    title: "The parts of a report",
    content: slide(
      <>
        <Rule>A report has a <Af>titel</Af> <En>title</En>, an <Af>inleiding</Af> <En>introduction</En>, the <Af>feite</Af> <En>facts</En> and a <Af>slot</Af> <En>ending</En>.</Rule>
        <LetterLayout parts={["titel", "inleiding", "feite", "slot"]} aria="The parts of the text from top to bottom: titel, inleiding, feite, slot." />
        <Worked
          title="Order the parts"
          steps={[
            <><Af>Die titel</Af> <En>the title</En> comes first.</>,
            <><Af>Die feite</Af> <En>the facts</En> are in the middle.</>,
            <><Af>Die titel kom eerste.</Af> <En>The title comes first.</En></>,
          ]}
        />
        <Mistake>Leaving out the title. Every report starts with a title.</Mistake>
      </>,
    ),
  },
  {
    title: "Write the facts",
    content: slide(
      <>
        <Rule>Use short sentences with numbers and places. Say where you found the <Af>inligting</Af> <En>information</En>.</Rule>
        <WordBoxes words={["Ons", "skool", "het", "300", "leerders."]} hot={[2]} aria="The sentence in boxes: Ons skool het 300 leerders.." />
        <Worked
          title="Write facts"
          steps={[
            <><Af>Ons skool het 300 leerders.</Af> <En>Our school has 300 learners.</En></>,
            <><Af>Die biblioteek is oop van agt tot drie.</Af> <En>The library is open from eight to three.</En></>,
          ]}
        />
        <Mistake>Writing a number wrongly. Check every number in your notes.</Mistake>
      </>,
    ),
  },
  {
    title: "Say where you found it",
    content: slide(
      <>
        <Rule>A good report tells where the <Af>inligting</Af> <En>information</En> came from. You can write the source in one sentence.</Rule>
        <MeaningPairs kind="same" pairs={[["inligting", "information"], ["feite", "facts"], ["slot", "ending"]]} aria="Afrikaans words with their English meaning: inligting is information, feite is facts, slot is ending." />
        <Worked
          title="Write the source"
          steps={[
            <><Af>Ek het dit by die kantoor uitgevind.</Af> <En>I found it out at the office.</En></>,
            <><Af>Die skool is in Mthatha.</Af> <En>The school is in Mthatha.</En></>,
          ]}
        />
        <Mistake>Not telling where the facts came from. Say where you found them.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <>
        <Check question={<>Which word means <En>facts</En>?</>} answer={<><Af>Feite</Af>.</>} />
        <Check question={<>Which word means <En>opinion</En>?</>} answer={<><Af>Mening</Af>.</>} />
        <Check question={<>Which part of a report comes first?</>} answer={<>The title.</>} />
        <Check question={<>What does a report give?</>} answer={<>Facts.</>} />
      </>,
    ),
  },
];

export const bank: AfrikaansItem[] = [
  {
    prompt: "Watter Afrikaanse woord beteken 'report'?",
    options: ["verslag", "leerders", "mening", "titel"],
    answer: "verslag",
    explanation: "'Verslag' means 'report'.",
  },
  {
    prompt: "Watter Afrikaanse woord beteken 'facts'?",
    options: ["titel", "feite", "verslag", "mening"],
    answer: "feite",
    explanation: "'Feite' means 'facts'.",
  },
  {
    prompt: "Watter Afrikaanse woord beteken 'opinion'?",
    options: ["titel", "inligting", "mening", "verslag"],
    answer: "mening",
    explanation: "'Mening' means 'opinion'.",
  },
  {
    prompt: "Watter Afrikaanse woord beteken 'title'?",
    options: ["inligting", "feite", "verslag", "titel"],
    answer: "titel",
    explanation: "'Titel' means 'title'.",
  },
  {
    prompt: "Watter Afrikaanse woord beteken 'information'?",
    options: ["inligting", "biblioteek", "verslag", "mening"],
    answer: "inligting",
    explanation: "'Inligting' means 'information'.",
  },
  {
    prompt: "Watter sin sê 'It is a fact'?",
    options: ["Ek het dit by die kantoor uitgevind.", "Dit is ’n feit.", "Die titel kom eerste.", "Die skool is in Mthatha."],
    answer: "Dit is ’n feit.",
    explanation: "'Dit is ’n feit.' means 'It is a fact'.",
  },
  {
    prompt: "Watter sin sê 'It is my opinion'?",
    options: ["Die skool is in Mthatha.", "Ek het dit by die kantoor uitgevind.", "Dit is my mening.", "Dit is ’n feit. in a program"],
    answer: "Dit is my mening.",
    explanation: "'Dit is my mening.' means 'It is my opinion'.",
  },
  {
    prompt: "Watter sin sê 'Our school has 300 learners'?",
    options: ["Ek het dit by die kantoor uitgevind.", "Die skool is in Mthatha.", "Die biblioteek is oop van agt tot drie.", "Ons skool het 300 leerders."],
    answer: "Ons skool het 300 leerders.",
    explanation: "'Ons skool het 300 leerders.' means 'Our school has 300 learners'.",
  },
  {
    prompt: "Watter sin sê 'The library is open from eight to three'?",
    options: ["Die biblioteek is oop van agt tot drie.", "Die titel kom eerste. on a device in a file", "Dit is my mening. in use for a user", "Die skool is in Mthatha. at work in a lab"],
    answer: "Die biblioteek is oop van agt tot drie.",
    explanation: "'Die biblioteek is oop van agt tot drie.' means 'The library is open from eight to three'.",
  },
  {
    prompt: "Watter sin sê 'I found it out at the office'?",
    options: ["Die biblioteek is oop van agt tot drie.", "Ek het dit by die kantoor uitgevind.", "Ons skool het 300 leerders.", "Dit is ’n feit."],
    answer: "Ek het dit by die kantoor uitgevind.",
    explanation: "'Ek het dit by die kantoor uitgevind.' means 'I found it out at the office'.",
  },
  {
    prompt: "Watter sin sê 'The school is in Mthatha'?",
    options: ["Ek het dit by die kantoor uitgevind.", "Die biblioteek is oop van agt tot drie.", "Die skool is in Mthatha.", "Die titel kom eerste."],
    answer: "Die skool is in Mthatha.",
    explanation: "'Die skool is in Mthatha.' means 'The school is in Mthatha'.",
  },
  {
    prompt: "Watter sin sê 'The title comes first'?",
    options: ["Die skool is in Mthatha.", "Ons skool het 300 leerders.", "Dit is my mening.", "Die titel kom eerste."],
    answer: "Die titel kom eerste.",
    explanation: "'Die titel kom eerste.' means 'The title comes first'.",
  },
];

const FactualReport = () => (
  <AfrikaansTopic
    title="Skryf ’n Feitelike Verslag"
    subtitle="Facts and opinions, the parts of a short report and sentences with facts"
    learnSteps={learnSteps}
    task="afr6-factual-report-t1"
    bank={bank}
    speak="options"
  />
);

export default FactualReport;
