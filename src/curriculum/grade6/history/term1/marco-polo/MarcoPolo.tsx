import HisTopic from '../../_shared/HisTopic';
import type { HisItem, LearnStep } from '../../_shared/types';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { TimelineBars } from '../../../../../components/diagrams/history/History6Pictures';
import { FlowSteps } from '../../../../../components/diagrams/lifesci/LifeFlows';
import { InfoTable } from '../../../../../components/diagrams/lifesci/InfoTable';
import * as h from '../../../../../components/diagrams/history/history6';

// CAPS Grade 6 History Term 1: the European explorer Marco Polo in Asia at the same time as Mapungubwe was at its height, and his influence on European
// traders and explorers (3 hours). Dates come from history6.ts: his journey 1271 to 1295 (24 years). Facts to confirm are in docs/notes/g6-history-doubts.md.
const slide = (children: React.ReactNode) => <div className="space-y-4 text-left">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: 'Marco Polo and Mapungubwe: the same time, far apart',
    content: slide(
      <>
        <Rule>Marco Polo was a young man from the city of Venice in Europe. In {h.MARCO_POLO_JOURNEY.from} he set out for Asia, and he came home in {h.MARCO_POLO_JOURNEY.to}. His journey took {h.years(h.MARCO_POLO_JOURNEY)} years. At the same time, Mapungubwe was at its height in southern Africa.</Rule>
        <TimelineBars spans={[h.MAPUNGUBWE, h.MARCO_POLO_JOURNEY]} min={1200} max={1300} step={20} />
        <Worked
          title="Two places at the same time"
          steps={[
            <>Mapungubwe: {h.spanText(h.MAPUNGUBWE)}.</>,
            <>Marco Polo in Asia: {h.MARCO_POLO_JOURNEY.from} to {h.MARCO_POLO_JOURNEY.to}, which is {h.MARCO_POLO_JOURNEY.to} − {h.MARCO_POLO_JOURNEY.from} = <strong>{h.years(h.MARCO_POLO_JOURNEY)} years</strong>.</>,
            <>His whole journey fell inside the years of Mapungubwe, so we can compare societies in different parts of the world in the same period.</>,
          ]}
        />
        <Mistake>Thinking that Europe was the centre of the world in this period. Large and powerful societies existed in Africa and Asia at the same time.</Mistake>
      </>,
    ),
  },
  {
    title: 'The journey to Asia',
    content: slide(
      <>
        <Rule>Marco Polo was the son of a merchant, a person who buys and sells goods. He travelled with his father and his uncle. Most of the way to China they went overland, along trade routes. In China he served the ruler, Kublai Khan, and lived there for many years before returning home.</Rule>
        <FlowSteps
          aria="Marco Polo's journey. He leaves Venice in 1271 with his father and uncle, travels overland along trade routes to China, serves the ruler Kublai Khan for many years, and returns home in 1295."
          steps={[
            { label: 'Leaves Venice in 1271', sub: 'with his father and uncle' },
            { label: 'Overland along trade routes' },
            { label: 'China: serves Kublai Khan', sub: 'for many years' },
            { label: 'Returns home in 1295' },
          ]}
        />
        <Worked
          title="Who was Kublai Khan?"
          steps={[
            <>Kublai Khan was the powerful Mongol ruler of China.</>,
            <>Marco Polo worked for him and travelled to many parts of his lands.</>,
            <>This gave Marco Polo the chance to see Asian cities, goods and customs that Europeans did not know.</>,
          ]}
        />
        <Mistake>Thinking that Marco Polo sailed all the way there. Most of the journey to China was overland along trade routes.</Mistake>
      </>,
    ),
  },
  {
    title: 'The book about his travels',
    content: slide(
      <>
        <Rule>After he returned, Marco Polo&apos;s travels were written down in a book. It described the cities, the riches and the customs of Asia. Because there was no printing press in Europe yet, each copy was written by hand, and the book was read in many countries.</Rule>
        <InfoTable
          cols={[{ title: 'The book described', w: 44 }, { title: 'Why Europeans were interested', w: 56 }]}
          rows={[
            ['Big, rich cities', 'They knew little about Asia'],
            ['Silk, spices, porcelain', 'These goods were valuable\nin Europe'],
            ['Paper money and customs', 'These were new to them'],
          ]}
          aria="A table about the book. The book described big rich cities, and Europeans knew little about Asia. It described silk, spices and porcelain, which were valuable in Europe. It described paper money and customs, which were new to them."
        />
        <Worked
          title="Why the book mattered"
          steps={[
            <>It was one of the first long descriptions of Asia in Europe.</>,
            <>It showed how much wealth there was in the trade with the East.</>,
            <>Its stories made some readers curious and ambitious.</>,
          ]}
        />
        <Mistake>Thinking that everything in the book was believed. Many Europeans found it hard to believe, but later explorers found that much of it was true.</Mistake>
      </>,
    ),
  },
  {
    title: "Marco Polo's influence on traders and explorers",
    content: slide(
      <>
        <Rule>Marco Polo&apos;s book made European traders and explorers more interested in Asia. They wanted to trade for silk and spices, and to find the way there. This interest was one reason why, about 200 years later, Europeans sailed far from home. That story is in Term 2.</Rule>
        <InfoTable
          cols={[{ title: 'Marco Polo', w: 40 }, { title: 'The effect', w: 60 }]}
          rows={[
            ['Described rich Asian lands', 'Traders wanted to\ntrade with Asia'],
            ['Showed the riches of the East', 'Explorers wanted to\nfind routes there'],
            ['Wrote about it in a book', 'Many people read about\nAsia'],
          ]}
          aria="A table of Marco Polo's influence. He described rich Asian lands, so traders wanted to trade with Asia. He showed the riches of the East, so explorers wanted to find routes there. He wrote about it in a book, so many people read about Asia."
        />
        <Worked
          title="A comparison across the world"
          steps={[
            <>While Marco Polo was in Asia, the kingdom of Mapungubwe was at its height in Africa.</>,
            <>Both Asia and southern Africa had rich societies that traded across long distances.</>,
            <>Marco Polo&apos;s journey shows how connected the world of that time already was.</>,
          ]}
        />
        <Mistake>Thinking that Marco Polo discovered Asia. Millions of people lived there already, and traders had travelled between Asia and Europe for a long time.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <>
        <Check
          questions={[
            <>From which city did Marco Polo come?</>,
            <>He left in 1271 and came home in 1295. How many years was that?</>,
            <>Which ruler did he serve in China?</>,
            <>Name one effect that his book had on Europeans.</>,
          ]}
          answers={[
            <><strong>Venice</strong>.</>,
            <>1295 − 1271 = <strong>{h.years(h.MARCO_POLO_JOURNEY)} years</strong>.</>,
            <><strong>Kublai Khan</strong>.</>,
            <>It made traders and explorers more <strong>interested in Asia</strong>.</>,
          ]}
        />
      </>,
    ),
  },
];

// Literal bank (generated once from the lesson's helper; the bank test recomputes every key independently).
export const bank: HisItem[] = [
  { prompt: "Marco Polo came from which city?", options: ["Venice","Lisbon","London","Cairo"], answer: "Venice", explanation: "Marco Polo came from Venice, a trading city in Europe." },
  { prompt: "To which continent did Marco Polo travel?", options: ["South America","Asia","Australia","Antarctica"], answer: "Asia", explanation: "He travelled to Asia and spent many years in China." },
  { prompt: "Marco Polo left Europe in 1271 and returned in 1295. For how many years was he away?", options: ["14 years","26 years","24 years","34 years"], answer: "24 years", explanation: "1295 − 1271 = 24 years." },
  { prompt: "Which ruler did Marco Polo serve in China?", options: ["Genghis Khan","Prince Henry","Queen Victoria","Kublai Khan"], answer: "Kublai Khan", explanation: "Kublai Khan was the powerful Mongol ruler of China." },
  { prompt: "What was written about in the book of Marco Polo?", options: ["His travels in Asia","A history of Africa","A book of sums","Plans for building ships"], answer: "His travels in Asia", explanation: "The book described the cities, riches and customs of Asia." },
  { prompt: "Which goods from Asia were described in Marco Polo's book?", options: ["Cars, oil and plastic","Silk, spices and porcelain","Coal, gas and electricity","Radios, phones and cameras"], answer: "Silk, spices and porcelain", explanation: "Silk, spices and porcelain were valuable goods from Asia." },
  { prompt: "How did Marco Polo's book influence Europeans?", options: ["It stopped all trade with Asia", "It taught them to build cars", "It made them curious about Asia", "It made them stay at home"], answer: "It made them curious about Asia", explanation: "Traders and explorers became more interested in Asia." },
  { prompt: "Which southern African kingdom was at its strongest during Marco Polo's travels?", options: ["Great Zimbabwe","The Cape Colony","The Zulu kingdom","Mapungubwe"], answer: "Mapungubwe", explanation: "Mapungubwe lasted from AD 1220 to 1300, and Marco Polo travelled from 1271 to 1295." },
  { prompt: "Why is it useful to compare Marco Polo's Asia with Mapungubwe?", options: ["They existed at the same time","They were in the same country","They were built by the same people","They traded directly with each other"], answer: "They existed at the same time", explanation: "Comparing societies from the same period in different parts of the world shows what was similar and different." },
  { prompt: "Who travelled with Marco Polo at the start of his journey?", options: ["His brothers","His father and his uncle","A crew of Portuguese sailors","The Khoikhoi"], answer: "His father and his uncle", explanation: "Marco Polo set out with his father and his uncle." },
  { prompt: "Marco Polo was the son of a merchant. What is a merchant?", options: ["A person who builds ships","A soldier of a king","A person who buys and sells goods","A priest of a church"], answer: "A person who buys and sells goods", explanation: "A merchant buys and sells goods, and merchants travelled along trade routes." },
  { prompt: "In which year did Marco Polo begin his journey to Asia?", options: ["1220","1300","1488","1271"], answer: "1271", explanation: "Marco Polo set out in 1271 and returned in 1295." },
  { prompt: "How did Marco Polo travel for most of the way to China?", options: ["Overland along trade routes", "By aeroplane across the sea", "By railway through the hills", "By submarine under the sea"], answer: "Overland along trade routes", explanation: "Most of the journey to China was overland along trade routes." },
  { prompt: "Why was each copy of Marco Polo's book written by hand?", options: ["Printing was against the law", "There was no printing press yet", "Paper was too expensive to buy", "There were very few readers"], answer: "There was no printing press yet", explanation: "The printing press had not yet come to Europe, so books were copied by hand." },
];

const MarcoPolo = () => (
  <HisTopic
    title="Marco Polo: a European explorer in Asia"
    subtitle="His journey, his book and how it made Europeans curious about Asia"
    learnSteps={learnSteps}
    task="gr6-marco-polo-t1"
    bank={bank}
  />
);

export default MarcoPolo;
