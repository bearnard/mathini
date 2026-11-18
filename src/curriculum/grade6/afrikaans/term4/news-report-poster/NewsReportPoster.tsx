import AfrikaansTopic from '../../_shared/AfrikaansTopic';
import { AfrikaansItem, LearnStep } from '../../_shared/types';
import SpeakButton from '../../_shared/SpeakButton';
import { Check, Mistake, Rule, Worked } from '@/components/subjects/lesson/LessonBlocks';
import { Af, En, LetterLayout, MeaningPairs, OrderTiles, WordBoxes } from '@/components/diagrams/afrikaans/AfrikaansPictures';

const slide = (children: React.ReactNode) => <div className="space-y-4">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: "The news report",
    content: slide(
      <>
        <Rule>A <Af>nuusberig</Af> <En>news report</En> has an <Af>opskrif</Af> <En>headline</En>. It answers <Af>wie</Af> <En>who</En>, <Af>wat</Af> <En>what</En>, <Af>waar</Af> <En>where</En> and <Af>wanneer</Af> <En>when</En>.</Rule>
        <MeaningPairs kind="same" pairs={[["nuusberig", "news report"], ["opskrif", "headline"], ["wanneer", "when"]]} aria="Afrikaans words with their English meaning: nuusberig is news report, opskrif is headline, wanneer is when." />
        <Worked
          title="Name the parts"
          steps={[
            <><Af>Die opskrif is kort.</Af> <En>The headline is short.</En></>,
            <><Af>Wie, wat, waar en wanneer</Af> <En>who, what, where and when</En> are in the first sentence.</>,
          ]}
        />
        <Mistake>Putting opinions in a news report. Give facts only.</Mistake>
      </>,
    ),
  },
  {
    title: "Write the news",
    content: slide(
      <>
        <Rule>Write the facts in one or two short sentences. The report tells what the school is doing.</Rule>
        <WordBoxes words={["Die", "skool", "hou", "’n", "skoonmaakdag."]} hot={[2]} aria="The sentence in boxes: Die skool hou ’n skoonmaakdag.." />
        <Worked
          title="Write the news"
          steps={[
            <><Af>Die skool hou ’n skoonmaakdag.</Af> <En>The school is holding a clean-up day.</En></>,
            <><Af>Dit is op Vrydag by die skool.</Af> <En>It is on Friday at the school.</En></>,
          ]}
        />
        <Mistake>Leaving out when or where. Say the day and the place.</Mistake>
      </>,
    ),
  },
  {
    title: "The poster",
    content: slide(
      <>
        <Rule>A <Af>plakkaat</Af> <En>poster</En> has big words and says what, where and when. It can invite people.</Rule>
        <MeaningPairs kind="same" pairs={[["plakkaat", "poster"], ["waar", "where"], ["wat", "what"]]} aria="Afrikaans words with their English meaning: plakkaat is poster, waar is where, wat is what." />
        <Worked
          title="Plan the poster"
          steps={[
            <><Af>Skoonmaakdag!</Af> <En>Clean-up day!</En></>,
            <><Af>Almal is welkom.</Af> <En>Everyone is welcome.</En></>,
          ]}
        />
        <Mistake>Using small words. A poster needs big, clear words.</Mistake>
      </>,
    ),
  },
  {
    title: "Invite people",
    content: slide(
      <>
        <Rule>Use a short command to invite people. <Af>Kom saam!</Af> <En>Come along!</En></Rule>
        <WordBoxes words={["Kom", "saam!"]} hot={[0]} aria="The sentence in boxes: Kom saam!." />
        <Worked
          title="Write the invitation"
          steps={[
            <><Af>Kom saam!</Af> <En>Come along!</En></>,
            <><Af>Almal is welkom.</Af> <En>Everyone is welcome.</En></>,
          ]}
        />
        <Mistake>Writing too much. A poster has only a few words.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <>
        <Check question={<>Which word means <En>headline</En>?</>} answer={<><Af>Opskrif</Af>.</>} />
        <Check question={<>Which word means <En>poster</En>?</>} answer={<><Af>Plakkaat</Af>.</>} />
        <Check question={<>What does a poster need?</>} answer={<>Big, clear words.</>} />
        <Check question={<>How do you say <En>Come along</En>?</>} answer={<><Af>Kom saam!</Af></>} />
      </>,
    ),
  },
];

export const bank: AfrikaansItem[] = [
  {
    prompt: "Watter Afrikaanse woord beteken 'news report'?",
    options: ["nuusberig", "biblioteek", "opskrif", "waar"],
    answer: "nuusberig",
    explanation: "'Nuusberig' means 'news report'.",
  },
  {
    prompt: "Watter Afrikaanse woord beteken 'headline'?",
    options: ["waar", "opskrif", "wanneer", "nuusberig"],
    answer: "opskrif",
    explanation: "'Opskrif' means 'headline'.",
  },
  {
    prompt: "Watter Afrikaanse woord beteken 'poster'?",
    options: ["nuusberig", "wanneer", "plakkaat", "opskrif"],
    answer: "plakkaat",
    explanation: "'Plakkaat' means 'poster'.",
  },
  {
    prompt: "Watter Afrikaanse woord beteken 'when'?",
    options: ["nuusberig", "waar", "opskrif", "wanneer"],
    answer: "wanneer",
    explanation: "'Wanneer' means 'when'.",
  },
  {
    prompt: "Watter Afrikaanse woord beteken 'where'?",
    options: ["waar", "nuusberig", "opskrif", "plakkaat"],
    answer: "waar",
    explanation: "'Waar' means 'where'.",
  },
  {
    prompt: "Watter sin sê 'The school is holding a clean-up day'?",
    options: ["Dit is op Vrydag by die skool.", "Die skool hou ’n skoonmaakdag.", "Wie, wat, waar en wanneer", "Skoonmaakdag!"],
    answer: "Die skool hou ’n skoonmaakdag.",
    explanation: "'Die skool hou ’n skoonmaakdag.' means 'The school is holding a clean-up day'.",
  },
  {
    prompt: "Watter sin sê 'It is on Friday at the school'?",
    options: ["Die skool hou ’n skoonmaakdag.", "Almal is welkom.", "Dit is op Vrydag by die skool.", "Wie, wat, waar en wanneer"],
    answer: "Dit is op Vrydag by die skool.",
    explanation: "'Dit is op Vrydag by die skool.' means 'It is on Friday at the school'.",
  },
  {
    prompt: "Watter sin sê 'Clean-up day'?",
    options: ["Die opskrif is kort.", "Die skool hou ’n skoonmaakdag.", "Wie, wat, waar en wanneer", "Skoonmaakdag!"],
    answer: "Skoonmaakdag!",
    explanation: "'Skoonmaakdag!' means 'Clean-up day'.",
  },
  {
    prompt: "Watter sin sê 'Everyone is welcome'?",
    options: ["Almal is welkom.", "Skoonmaakdag!", "Kom saam!", "Die opskrif is kort."],
    answer: "Almal is welkom.",
    explanation: "'Almal is welkom.' means 'Everyone is welcome'.",
  },
  {
    prompt: "Watter sin sê 'Come along'?",
    options: ["Skoonmaakdag!", "Kom saam!", "Dit is op Vrydag by die skool.", "Wie, wat, waar en wanneer"],
    answer: "Kom saam!",
    explanation: "'Kom saam!' means 'Come along'.",
  },
  {
    prompt: "Watter sin sê 'The headline is short'?",
    options: ["Skoonmaakdag!", "Die skool hou ’n skoonmaakdag.", "Die opskrif is kort.", "Almal is welkom."],
    answer: "Die opskrif is kort.",
    explanation: "'Die opskrif is kort.' means 'The headline is short'.",
  },
  {
    prompt: "Watter sin sê 'Who, what, where and when'?",
    options: ["Die skool hou ’n skoonmaakdag.", "Kom saam!", "Die opskrif is kort.", "Wie, wat, waar en wanneer"],
    answer: "Wie, wat, waar en wanneer",
    explanation: "'Wie, wat, waar en wanneer' means 'Who, what, where and when'.",
  },
];

const NewsReportPoster = () => (
  <AfrikaansTopic
    title="Nuusberig en Plakkaat"
    subtitle="The headline, who, what, where and when, and the words on a poster"
    learnSteps={learnSteps}
    task="afr6-news-report-poster-t4"
    bank={bank}
    speak="options"
  />
);

export default NewsReportPoster;
