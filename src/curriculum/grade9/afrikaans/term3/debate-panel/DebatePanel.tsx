import AfrikaansTopic from '../../_shared/AfrikaansTopic';
import { AfrikaansItem, LearnStep } from '../../_shared/types';
import SpeakButton from '../../_shared/SpeakButton';
import { Check, Mistake, Rule, Worked } from '@/components/subjects/lesson/LessonBlocks';
import { Af, En, MeaningPairs, OrderTiles, TaggedBoxes } from '@/components/diagrams/afrikaans/AfrikaansPictures';

// Grade 9 Afrikaans FAL oral skills: debate and panel discussion (simple Afrikaans; teacher-check list in docs/notes/oral-afrikaans-g7-9-doubts.md).
const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: "Debate and panel",
    content: slide(
      <>
        <Rule>A <Af>paneelbespreking</Af> <En>panel discussion</En> has several speakers and a chairperson who share views. A debate has two sides. A panel of 4 speakers of 3 minutes, a 2-minute introduction and 10 minutes of questions takes 24 minutes.</Rule>
        <OrderTiles tiles={["4 sprekers", "3 minute elk", "24 minute"]} aria={"A panel time sum in order: 4 sprekers, 3 minute elk, with the rest the total is 24 minute."} />
        <Worked
          title="Panel time"
          steps={[
            <><Af>4 sprekers van 3 minute is 12 minute.</Af> <En>4 speakers of 3 minutes is 12 minutes.</En> <SpeakButton text="4 sprekers van 3 minute is 12 minute." /></>,
            <><Af>12 en 2 en 10 is 24 minute.</Af> <En>12 and 2 and 10 is 24 minutes.</En> <SpeakButton text="12 en 2 en 10 is 24 minute." /></>,
            <><Af>Die voorsitter gee elke spreker &apos;n beurt.</Af> <En>The chairperson gives every speaker a turn.</En> <SpeakButton text="Die voorsitter gee elke spreker 'n beurt." /></>,
          ]}
        />
        <Mistake>Treating a panel as a fight. A panel shares views with respect.</Mistake>
      </>,
    ),
  },
  {
    title: "Evidence and rebuttal",
    content: slide(
      <>
        <Rule>Back up a point with <Af>bewyse</Af> <En>evidence</En>: a fact, a number or an example. A <Af>weerlegging</Af> <En>rebuttal</En> shows that the other point is weak. Ask: where is the proof?</Rule>
        <TaggedBoxes items={[{"word": "bewyse", "tag": "evidence"}, {"word": "weerlegging", "tag": "rebuttal"}, {"word": "feit", "tag": "fact"}]} aria={"Three words: bewyse means evidence, weerlegging means rebuttal, feit means fact."} />
        <Worked
          title="Weak and strong"
          steps={[
            <><Af>Almal weet dis verkeerd.</Af> <En>Everyone knows it is wrong.</En> <SpeakButton text="Almal weet dis verkeerd." /> This has no evidence.</>,
            <><Af>Uit 100 leerders wil 60 &apos;n keuse hê.</Af> <En>Of 100 learners, 60 want a choice.</En> <SpeakButton text="Uit 100 leerders wil 60 'n keuse hê." /> This has evidence.</>,
            <><Af>Waar is die bewyse?</Af> <En>Where is the proof?</En> <SpeakButton text="Waar is die bewyse?" /></>,
          ]}
        />
        <Mistake>Attacking the person. Answer the argument, not the speaker.</Mistake>
      </>,
    ),
  },
  {
    title: "The chairperson and courtesy",
    content: slide(
      <>
        <Rule>The <Af>voorsitter</Af> <En>chairperson</En> opens the talk, gives turns and thanks everyone. Be <Af>beleefd</Af> <En>polite</En>: listen and wait for your turn. Answer questions honestly.</Rule>
        <OrderTiles tiles={["Open", "Gee beurte", "Bedank almal"]} aria={"The chairperson's steps in order: Open, Gee beurte, Bedank almal."} />
        <Worked
          title="Chair the panel"
          steps={[
            <><Af>Een spreker op &apos;n slag, asseblief.</Af> <En>One speaker at a time, please.</En> <SpeakButton text="Een spreker op 'n slag, asseblief." /></>,
            <><Af>Dankie aan al die sprekers.</Af> <En>Thank you to all the speakers.</En> <SpeakButton text="Dankie aan al die sprekers." /></>,
            <><Af>Ek weet nie, maar ek sal uitvind.</Af> <En>I do not know, but I will find out.</En> <SpeakButton text="Ek weet nie, maar ek sal uitvind." /></>,
          ]}
        />
        <Mistake>A chairperson who takes a side. The chairperson is fair to all.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <>
        <Check question={<>Which word means <em>evidence</em>?</>} answer={<><Af>bewyse</Af> <En>evidence</En>.</>} />
        <Check question={<>Which word means <em>rebuttal</em>?</>} answer={<><Af>weerlegging</Af> <En>rebuttal</En>.</>} />
        <Check question={<>How long do 4 speakers of 3 minutes speak?</>} answer={<><Af>12 minute</Af> <En>12 minutes</En>.</>} />
        <Check question={<>Who gives each speaker a turn?</>} answer={<><Af>voorsitter</Af> <En>chairperson</En>.</>} />
      </>,
    ),
  },
];

export const bank: AfrikaansItem[] = [
  {
    prompt: "Watter Afrikaanse woord beteken 'panel discussion'?",
    options: ["toespraak", "paneelbespreking", "onderhoud", "vergadering"],
    answer: "paneelbespreking",
    explanation: "A 'paneelbespreking' has several speakers and a chairperson.",
  },
  {
    prompt: "Watter Afrikaanse woord beteken 'evidence'?",
    options: ["gevoel", "gehoor", "slot", "bewyse"],
    answer: "bewyse",
    explanation: "'Bewyse' are facts that support a point.",
  },
  {
    prompt: "Watter Afrikaanse woord beteken 'rebuttal'?",
    options: ["weerlegging", "inleiding", "opsomming", "paneel"],
    answer: "weerlegging",
    explanation: "A 'weerlegging' answers the other side.",
  },
  {
    prompt: "Hoe lank praat 4 sprekers van 3 minute elk?",
    options: ["7 minute", "10 minute", "12 minute", "24 minute"],
    answer: "12 minute",
    explanation: "4 × 3 = 12 minutes.",
  },
  {
    prompt: "Hoe lank is 'n paneel as die sprekers 12 minute praat, die inleiding 2 minute neem en vrae 10 minute neem?",
    options: ["22 minute", "24 minute", "14 minute", "36 minute"],
    answer: "24 minute",
    explanation: "12 + 2 + 10 = 24 minutes.",
  },
  {
    prompt: "Watter sin beteken 'The chairperson gives every speaker a turn.'?",
    options: ["Dankie aan al die sprekers.", "Een spreker op 'n slag, asseblief.", "Waar is die bewyse?", "Die voorsitter gee elke spreker 'n beurt."],
    answer: "Die voorsitter gee elke spreker 'n beurt.",
    explanation: "The chair keeps the talk fair.",
  },
  {
    prompt: "Watter sin het bewyse?",
    options: ["Uit 100 leerders wil 60 'n keuse hê.", "Almal weet dat dit absoluut verkeerd is.", "Ek voel in my hart dit is dom.", "Dit was nog altyd so in ons skool."],
    answer: "Uit 100 leerders wil 60 'n keuse hê.",
    explanation: "A count of learners can be checked.",
  },
  {
    prompt: "Watter sin het geen bewyse nie?",
    options: ["Uit 100 leerders wil 60 'n keuse hê.", "Daar is 100 leerders in die saal.", "Almal weet dis verkeerd.", "Die opname het 60 antwoorde gekry."],
    answer: "Almal weet dis verkeerd.",
    explanation: "It gives no fact or number.",
  },
  {
    prompt: "Watter sin beteken 'Where is the proof?'?",
    options: ["Dankie aan al die sprekers.", "Waar is die bewyse?", "Almal weet dis verkeerd.", "Een spreker op 'n slag, asseblief."],
    answer: "Waar is die bewyse?",
    explanation: "A strong speaker asks for proof.",
  },
  {
    prompt: "Watter Afrikaanse woord beteken 'fact'?",
    options: ["mening", "toon", "doel", "feit"],
    answer: "feit",
    explanation: "'Feit' means a fact that can be checked.",
  },
  {
    prompt: "Watter sin sê dat een persoon op 'n slag praat?",
    options: ["Een spreker op 'n slag, asseblief.", "Dankie aan al die sprekers.", "Waar is die bewyse?", "Ek weet nie, maar ek sal uitvind."],
    answer: "Een spreker op 'n slag, asseblief.",
    explanation: "The chairperson keeps order.",
  },
  {
    prompt: "Watter sin bedank almal aan die einde?",
    options: ["Een spreker op 'n slag, asseblief.", "Waar is die bewyse?", "Dankie aan al die sprekers.", "Die voorsitter gee elke spreker 'n beurt."],
    answer: "Dankie aan al die sprekers.",
    explanation: "A chairperson thanks everyone.",
  },
  {
    prompt: "Wat sê jy as jy nie die antwoord ken nie?",
    options: ["Ek maak 'n antwoord op.", "Ek weet nie, maar ek sal uitvind.", "Ek praat nie weer nie.", "Ek verander die onderwerp."],
    answer: "Ek weet nie, maar ek sal uitvind.",
    explanation: "Be honest when you do not know.",
  },
  {
    prompt: "Watter Afrikaanse woord beteken 'polite'?",
    options: ["kwaai", "stil", "vinnig", "beleefd"],
    answer: "beleefd",
    explanation: "'Beleefd' means polite.",
  },
];

const DebatePanel = () => (
  <AfrikaansTopic
    title="Debat en paneelbespreking"
    subtitle="Debate and panel, evidence and rebuttal, the chairperson and courtesy"
    learnSteps={learnSteps}
    task="gr9-afr-debate-panel-t3"
    bank={bank}
    speak="options"
  />
);

export default DebatePanel;
