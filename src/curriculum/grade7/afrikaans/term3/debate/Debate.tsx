import AfrikaansTopic from '../../_shared/AfrikaansTopic';
import { AfrikaansItem, LearnStep } from '../../_shared/types';
import SpeakButton from '../../_shared/SpeakButton';
import { Check, Mistake, Rule, Worked } from '@/components/subjects/lesson/LessonBlocks';
import { Af, En, MeaningPairs, OrderTiles, TaggedBoxes } from '@/components/diagrams/afrikaans/AfrikaansPictures';

// Grade 7 Afrikaans FAL oral skills: debate (simple Afrikaans; teacher-check list in docs/notes/oral-afrikaans-g7-9-doubts.md).
const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: "What is a debate?",
    content: slide(
      <>
        <Rule>A <Af>debat</Af> <En>debate</En> is about a <Af>stelling</Af> <En>motion</En>. The <Af>voorsitter</Af> <En>chairperson</En> keeps order. The <Af>tydhouer</Af> <En>timekeeper</En> watches the time.</Rule>
        <TaggedBoxes items={[{"word": "stelling", "tag": "motion"}, {"word": "voorsitter", "tag": "chairperson"}, {"word": "tydhouer", "tag": "timekeeper"}]} aria={"Three debate words: stelling means motion, voorsitter means chairperson, tydhouer means timekeeper."} />
        <Worked
          title="The two sides"
          steps={[
            <><Af>Die stelling is: Skooldrag moet verpligtend wees.</Af> <En>The motion is: School uniform must be compulsory.</En> <SpeakButton text="Die stelling is: Skooldrag moet verpligtend wees." /></>,
            <><Af>Die voorstanders is vir die stelling.</Af> <En>The proposers are for the motion.</En> <SpeakButton text="Die voorstanders is vir die stelling." /></>,
            <><Af>Die teenstanders is teen die stelling.</Af> <En>The opposers are against the motion.</En> <SpeakButton text="Die teenstanders is teen die stelling." /></>,
          ]}
        />
        <Mistake>Thinking that you must believe the motion. You argue your side with good reasons.</Mistake>
      </>,
    ),
  },
  {
    title: "Building an argument",
    content: slide(
      <>
        <Rule>A strong argument has a <Af>punt</Af> <En>point</En>, a <Af>rede</Af> <En>reason</En> and an <Af>voorbeeld</Af> <En>example</En>. A <Af>weerlegging</Af> <En>rebuttal</En> answers the other team.</Rule>
        <OrderTiles tiles={["Punt", "Rede", "Voorbeeld"]} aria={"The parts of an argument in order: Punt, Rede, Voorbeeld."} />
        <Worked
          title="One argument"
          steps={[
            <><Af>Skooldrag spaar geld.</Af> <En>School uniform saves money.</En> <SpeakButton text="Skooldrag spaar geld." /></>,
            <><Af>Almal dra dieselfde klere.</Af> <En>Everyone wears the same clothes.</En> <SpeakButton text="Almal dra dieselfde klere." /></>,
            <><Af>Die gesin koop minder klere.</Af> <En>The family buys fewer clothes.</En> <SpeakButton text="Die gesin koop minder klere." /></>,
          ]}
        />
        <Mistake>A point with no reason. Always say why.</Mistake>
      </>,
    ),
  },
  {
    title: "Politeness and time",
    content: slide(
      <>
        <Rule>Be <Af>beleefd</Af> <En>polite</En>. Wait for your turn. A team of 3 speakers of 2 minutes speaks for 6 minutes. With two teams and a 1-minute rebuttal each, the debate takes 14 minutes.</Rule>
        <OrderTiles tiles={["3 sprekers", "2 minute elk", "6 minute"]} aria={"A time sum in order: 3 sprekers, 2 minute elk, so 6 minute."} />
        <Worked
          title="Be polite and keep time"
          steps={[
            <><Af>Wag jou beurt af.</Af> <En>Wait for your turn.</En> <SpeakButton text="Wag jou beurt af." /></>,
            <><Af>Val niemand in die rede nie.</Af> <En>Do not interrupt anyone.</En> <SpeakButton text="Val niemand in die rede nie." /></>,
            <><Af>Twee spanne en twee weerleggings is 14 minute.</Af> <En>Two teams and two rebuttals are 14 minutes.</En> <SpeakButton text="Twee spanne en twee weerleggings is 14 minute." /> <Af>Een span praat 6 minute.</Af> <En>One team speaks for 6 minutes.</En> <SpeakButton text="Een span praat 6 minute." /></>,
          ]}
        />
        <Mistake>Shouting at the other team. Argue the point, not the person.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <>
        <Check question={<>Which word means <em>motion</em>?</>} answer={<><Af>stelling</Af> <En>motion</En>.</>} />
        <Check question={<>Who keeps order?</>} answer={<><Af>voorsitter</Af> <En>chairperson</En>.</>} />
        <Check question={<>Which word means <em>rebuttal</em>?</>} answer={<><Af>weerlegging</Af> <En>rebuttal</En>.</>} />
        <Check question={<>How long does one team speak (3 speakers, 2 minutes each)?</>} answer={<><Af>6 minute</Af> <En>6 minutes</En>.</>} />
      </>,
    ),
  },
];

export const bank: AfrikaansItem[] = [
  {
    prompt: "Watter Afrikaanse woord beteken 'debate'?",
    options: ["gesprek", "debat", "toets", "speletjie"],
    answer: "debat",
    explanation: "'Debat' means a debate.",
  },
  {
    prompt: "Watter Afrikaanse woord beteken 'motion'?",
    options: ["rede", "punt", "gehoor", "stelling"],
    answer: "stelling",
    explanation: "'Stelling' is the statement that the teams argue about.",
  },
  {
    prompt: "Watter Afrikaanse woord beteken 'chairperson'?",
    options: ["voorsitter", "tydhouer", "skrywer", "speler"],
    answer: "voorsitter",
    explanation: "The 'voorsitter' keeps order.",
  },
  {
    prompt: "Watter Afrikaanse woord beteken 'timekeeper'?",
    options: ["voorsitter", "stelling", "tydhouer", "gehoor"],
    answer: "tydhouer",
    explanation: "The 'tydhouer' watches the time.",
  },
  {
    prompt: "Watter sin is 'n voorbeeld van 'n stelling?",
    options: ["Wag jou beurt af.", "Skooldrag moet verpligtend wees.", "Skooldrag spaar geld.", "Val niemand in die rede nie."],
    answer: "Skooldrag moet verpligtend wees.",
    explanation: "A motion is a statement that two teams argue about.",
  },
  {
    prompt: "Watter Afrikaanse woord beteken 'reason'?",
    options: ["punt", "stelling", "beurt", "rede"],
    answer: "rede",
    explanation: "'Rede' answers why.",
  },
  {
    prompt: "Watter Afrikaanse woord beteken 'example'?",
    options: ["voorbeeld", "rede", "punt", "gehoor"],
    answer: "voorbeeld",
    explanation: "'Voorbeeld' means an example.",
  },
  {
    prompt: "Watter Afrikaanse woord beteken 'rebuttal'?",
    options: ["inleiding", "stelling", "weerlegging", "tydhouer"],
    answer: "weerlegging",
    explanation: "A 'weerlegging' answers the other team's points.",
  },
  {
    prompt: "Watter sin is 'n punt in 'n argument?",
    options: ["Wag jou beurt af.", "Skooldrag spaar geld.", "Die stelling is vir almal.", "Die voorsitter praat nou."],
    answer: "Skooldrag spaar geld.",
    explanation: "A point says what you believe.",
  },
  {
    prompt: "Watter Afrikaanse woord beteken 'polite'?",
    options: ["kwaai", "stil", "vinnig", "beleefd"],
    answer: "beleefd",
    explanation: "'Beleefd' means polite.",
  },
  {
    prompt: "Watter sin beteken 'Wait for your turn.'?",
    options: ["Wag jou beurt af.", "Val niemand in die rede nie.", "Skooldrag spaar geld.", "Die teenstanders praat nou."],
    answer: "Wag jou beurt af.",
    explanation: "'Beurt' means turn.",
  },
  {
    prompt: "Watter sin beteken 'Do not interrupt anyone.'?",
    options: ["Wag jou beurt af.", "Almal dra dieselfde klere.", "Val niemand in die rede nie.", "Skooldrag spaar geld."],
    answer: "Val niemand in die rede nie.",
    explanation: "Do not cut off a speaker.",
  },
  {
    prompt: "Hoe lank praat een span van 3 sprekers van 2 minute elk?",
    options: ["5 minute", "6 minute", "8 minute", "12 minute"],
    answer: "6 minute",
    explanation: "3 × 2 = 6 minutes.",
  },
  {
    prompt: "Hoe lank is 'n debat van twee spanne wat elk 6 minute praat en elk 1 minuut vir weerlegging het?",
    options: ["12 minute", "13 minute", "16 minute", "14 minute"],
    answer: "14 minute",
    explanation: "6 + 6 + 1 + 1 = 14 minutes.",
  },
];

const Debate = () => (
  <AfrikaansTopic
    title="Debat"
    subtitle="The motion, the two teams, building an argument, politeness and time"
    learnSteps={learnSteps}
    task="gr7-afr-debate-t3"
    bank={bank}
    speak="options"
  />
);

export default Debate;
