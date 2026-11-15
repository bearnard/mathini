import AfrikaansTopic from '../../_shared/AfrikaansTopic';
import { AfrikaansItem, LearnStep } from '../../_shared/types';
import SpeakButton from '../../_shared/SpeakButton';
import { Check, Mistake, Rule, Worked } from '@/components/subjects/lesson/LessonBlocks';
import { Af, En, MeaningPairs, OrderTiles } from '@/components/diagrams/afrikaans/AfrikaansPictures';

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: 'Agenda and notule',
    content: slide(
      <>
        <Rule>The <Af>agenda</Af> is the list of items to be discussed at a meeting. The <Af>notule</Af> <En>minutes</En> are the written record of what was said and decided.</Rule>
        <OrderTiles
          tiles={['Agenda', 'Vergadering', 'Notule']}
          aria="Three steps in order: Agenda (the list of items), Vergadering (the meeting), Notule (the written record)."
        />
        <Worked
          title="A short agenda"
          steps={[
            <>1. <Af>Verwelkoming</Af> <En>welcome</En>. 2. <Af>Verslag</Af> <En>report</En>. 3. <Af>Sluiting</Af> <En>closing</En>.</>,
            <>After the meeting, the secretary writes the <Af>notule</Af>: who came, what was decided. <SpeakButton text="agenda, notule" /></>,
          ]}
        />
        <Mistake>Mixing up the two. The <Af>agenda</Af> is written before the meeting; the <Af>notule</Af> are written after it.</Mistake>
      </>,
    ),
  },
  {
    title: 'Verslag, uitnodiging, versoek',
    content: slide(
      <>
        <Rule>A <Af>verslag</Af> reports facts. An <Af>uitnodiging</Af> asks someone to come. A <Af>versoek</Af> asks for something.</Rule>
        <MeaningPairs
          kind="same"
          pairs={[['verslag', 'report'], ['uitnodiging', 'invitation'], ['versoek', 'request']]}
          aria="Three Afrikaans words for transactional texts with their English meaning: verslag is report, uitnodiging is invitation, versoek is request."
        />
        <Worked
          title="Use them in sentences"
          steps={[
            <><Af>Ons nooi jou uit na die skoolkonsert.</Af> <En>We invite you to the school concert.</En> <SpeakButton text="Ons nooi jou uit na die skoolkonsert." /></>,
            <><Af>Ek wil graag 'n versoek rig.</Af> <En>I would like to make a request.</En></>,
          ]}
        />
        <Mistake>Calling an invitation a report. An <Af>uitnodiging</Af> says when and where to come; a <Af>verslag</Af> tells what happened.</Mistake>
      </>,
    ),
  },
  {
    title: 'Formeel: the formal register',
    content: slide(
      <>
        <Rule><Af>Formeel</Af> <En>formal</En> writing is polite and correct. Use full sentences, a clear format and no slang.</Rule>
        <MeaningPairs
          kind="opposite"
          pairs={[['formeel', 'informeel'], ['Geagte', 'Haai']]}
          aria="Two pairs of opposites: formeel (formal) against informeel (informal), and the formal greeting Geagte against the informal Haai."
        />
        <Worked
          title="Make it formal"
          steps={[
            <>Informal: <Af>Haai, kom jy Vrydag?</Af></>,
            <>Formal: <Af>Ons nooi u graag uit na die vergadering op Vrydag.</Af> <En>We gladly invite you to the meeting on Friday.</En></>,
          ]}
        />
        <Mistake>Using friendly or slang language in an agenda, report or formal request. Keep the register formal.</Mistake>
      </>,
    ),
  },
  {
    title: 'Essays: narrative, descriptive, reflective',
    content: slide(
      <>
        <Rule>Three extended texts: a <Af>narratiewe</Af> essay tells a story, a <Af>beskrywende</Af> essay paints a picture, and a <Af>besinnende</Af> <En>reflective</En> essay shares your thoughts. Each needs a sequence and a format.</Rule>
        <MeaningPairs
          kind="becomes"
          pairs={[['narratief', 'storie'], ['beskrywend', 'sintuie'], ['besinnend', 'gedagtes']]}
          aria="Three essay types and what each uses: narratief uses a storie (story), beskrywend uses the sintuie (senses), besinnend uses gedagtes (thoughts)."
        />
        <Worked
          title="Pick the type"
          steps={[
            <>Topic: <Af>My eerste skooldag</Af>. A story with a beginning, middle and end is narrative.</>,
            <>Topic: <Af>Die strand</Af>. What you see, hear and smell: descriptive.</>,
          ]}
        />
        <Mistake>Writing a list of events for a descriptive essay. A descriptive essay needs pictures made with words.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <>
        <Check question={<>What do we call the list of items to be discussed at a meeting?</>} answer={<><Af>agenda</Af>.</>} />
        <Check question={<>Which word means <em>minutes</em> (the written record)?</>} answer={<><Af>notule</Af>.</>} />
        <Check question={<>Which word means <em>invitation</em>?</>} answer={<><Af>uitnodiging</Af>.</>} />
        <Check question={<>Which word means <em>formal</em>?</>} answer={<><Af>formeel</Af>.</>} />
      </>,
    ),
  },
];

const bank: AfrikaansItem[] = [
  {
    prompt: "Wat noem ons die lys van items wat in 'n vergadering bespreek gaan word?",
    options: ["agenda", "notule", "verslag", "uitnodiging"],
    answer: "agenda",
    explanation: "An 'agenda' lists the items to be discussed at a meeting.",
  },
  {
    prompt: "Watter Afrikaanse woord beteken 'minutes' (die skriftelike rekord van 'n vergadering)?",
    options: ["notule", "agenda", "versoek", "formeel"],
    answer: "notule",
    explanation: "'Notule' means 'minutes', the written record of what was discussed and decided.",
  },
  {
    prompt: "Watter Afrikaanse woord beteken 'report'?",
    options: ["verslag", "notule", "versoek", "uitnodiging"],
    answer: "verslag",
    explanation: "'Verslag' means 'report'.",
  },
  {
    prompt: "Watter Afrikaanse woord beteken 'invitation'?",
    options: ["uitnodiging", "agenda", "verslag", "formeel"],
    answer: "uitnodiging",
    explanation: "'Uitnodiging' means 'invitation'.",
  },
  {
    prompt: "Watter Afrikaanse woord beteken 'request'?",
    options: ["versoek", "agenda", "notule", "uitnodiging"],
    answer: "versoek",
    explanation: "'Versoek' means 'request', as in a formal request letter.",
  },
  {
    prompt: "Watter Afrikaanse woord beteken 'formal'?",
    options: ["formeel", "verslag", "versoek", "agenda"],
    answer: "formeel",
    explanation: "'Formeel' means 'formal'. Official documents use a formal style.",
  },
];

export { bank };

const TransactionalWriting = () => (
  <AfrikaansTopic
    title="Transaksionele Skryfwerk"
    subtitle="Agendas, minutes, reports, and formal structures"
    learnSteps={learnSteps}
    task="gr9-transactional-writing-t1"
    bank={bank}
    speak="options"
  />
);

export default TransactionalWriting;
