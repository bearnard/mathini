import HisTopic from '../../_shared/HisTopic';
import type { HisItem, LearnStep } from '../../_shared/types';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { FlowSteps } from '../../../../../components/diagrams/lifesci/LifeFlows';
import { InfoTable } from '../../../../../components/diagrams/lifesci/InfoTable';
import * as h from '../../../../../components/diagrams/history/history6';

// CAPS Grade 6 History Term 2: inventions that made long sea voyages possible, and the reasons why Europeans explored. No exact dates beyond history6.ts;
// the printing press is "about 1450". Facts to confirm: docs/notes/g6-history-doubts.md.
const slide = (children: React.ReactNode) => <div className="space-y-4 text-left">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: 'Why did Europeans want to explore?',
    content: slide(
      <>
        <Rule>Europeans had several reasons for sailing far from home. They wanted wealth from trade, they wanted to find a sea route to Asia, they wanted to spread their religion, and they were curious about the world and wanted fame for their country.</Rule>
        <InfoTable
          cols={[{ title: 'Reason', w: 34 }, { title: 'What it meant', w: 66 }]}
          rows={[
            ['Wealth', 'Gold, silk and spices\nbrought great profit'],
            ['A sea route', 'To reach Asia without\ncrossing land'],
            ['Religion', 'To spread Christianity'],
            ['Curiosity and fame', 'To learn and to win\nhonour for their country'],
          ]}
          aria="A table of reasons for exploring. Wealth: gold, silk and spices brought great profit. A sea route: to reach Asia without crossing land. Religion: to spread Christianity. Curiosity and fame: to learn and to win honour for their country."
        />
        <Worked
          title="Spices and wealth"
          steps={[
            <>Spices such as pepper and cloves were valuable in Europe, where they flavoured and preserved food.</>,
            <>They came from Asia over long and costly land and sea routes, so they were expensive.</>,
            <>A ship that brought spices straight home could make its owners rich.</>,
          ]}
        />
        <Mistake>Thinking that there was only one reason. Most voyages had several reasons at the same time, and wealth was often the strongest.</Mistake>
      </>,
    ),
  },
  {
    title: 'Inventions that helped sailors',
    content: slide(
      <>
        <Rule>New inventions and improvements made long voyages possible. The magnetic compass showed direction, the astrolabe helped sailors find their position by the sun and stars, better maps showed coasts, and a ship called the caravel could sail against the wind.</Rule>
        <InfoTable
          cols={[{ title: 'Invention', w: 30 }, { title: 'How it helped', w: 70 }]}
          rows={[
            ['Compass', 'Showed which way is north,\neven far from land'],
            ['Astrolabe', 'Helped find position from\nthe sun and stars'],
            ['Maps', 'Showed coasts and routes'],
            ['Caravel', 'A light ship that could sail\nagainst the wind'],
          ]}
          aria="A table of inventions that helped sailors. The compass showed which way is north, even far from land. The astrolabe helped find position from the sun and stars. Maps showed coasts and routes. The caravel was a light ship that could sail against the wind."
        />
        <Worked
          title="Without them"
          steps={[
            <>Without a compass, a ship out of sight of land could easily lose its way.</>,
            <>Without an astrolabe, sailors could not work out how far south they had come.</>,
            <>Sailors from other parts of the world, such as Arab and African sailors, already knew these seas well; Europeans learned from them too.</>,
          ]}
        />
        <Mistake>Thinking that Europeans invented everything they used. The compass, for example, was used in China first.</Mistake>
      </>,
    ),
  },
  {
    title: 'Ideas that spread: the printing press',
    content: slide(
      <>
        <Rule>The printing press came to Europe about {h.PRINTING_PRESS_ABOUT}. Before it, every book was copied by hand. With a press, many copies could be made, so maps, accounts of voyages and new ideas reached many more people.</Rule>
        <FlowSteps
          aria="How printing helped exploration. A voyage is made and described, the account is printed in many copies, and more people read it and want to sail."
          steps={[
            { label: 'A voyage is made' },
            { label: 'The account is printed' },
            { label: 'Many people read it' },
            { label: 'More voyages are planned' },
          ]}
        />
        <Worked
          title="Printing compared with copying by hand"
          steps={[
            <>By hand: one copy took weeks or months to make, so books were rare and costly.</>,
            <>With a press: many copies could be made in the same time.</>,
            <>The ideas of Leonardo and Galileo could also spread further.</>,
          ]}
        />
        <Mistake>Thinking that printed books were already common long before the press. Until about {h.PRINTING_PRESS_ABOUT}, books in Europe were copied by hand and were rare.</Mistake>
      </>,
    ),
  },
  {
    title: 'Putting it together',
    content: slide(
      <>
        <Rule>Reasons and inventions worked together. Wealth, curiosity and religion gave people a reason to go, and the compass, maps and caravels made it possible. That is why European voyages grew in number from the 1400s.</Rule>
        <FlowSteps
          aria="Why voyages began. Reasons such as wealth, a sea route, religion and curiosity, together with inventions such as the compass, maps and the caravel, lead to long voyages."
          steps={[
            { label: 'Reasons', sub: 'wealth, sea route, religion, curiosity' },
            { label: 'Inventions', sub: 'compass, maps, caravel' },
            { label: 'Long sea voyages' },
          ]}
        />
        <Worked
          title="Reason or invention?"
          steps={[
            <><strong>Reason:</strong> wanting spices, wanting to spread a religion, wanting fame.</>,
            <><strong>Invention:</strong> compass, astrolabe, better maps, caravel, printing press.</>,
            <>A reason answers &quot;why go?&quot;; an invention answers &quot;how could they go?&quot;.</>,
          ]}
        />
        <Mistake>Mixing up the two. Wanting spices is a reason; a compass is a tool that made the voyage possible.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <>
        <Check
          questions={[
            <>Give two reasons why Europeans explored.</>,
            <>Which instrument shows direction?</>,
            <>What was special about a caravel?</>,
            <>Is &quot;wanting spices&quot; a reason or an invention?</>,
          ]}
          answers={[
            <>Any two of: <strong>wealth</strong>, <strong>a sea route to Asia</strong>, <strong>religion</strong>, <strong>curiosity and fame</strong>.</>,
            <>The <strong>compass</strong>.</>,
            <>It could <strong>sail against the wind</strong>.</>,
            <>A <strong>reason</strong>.</>,
          ]}
        />
      </>,
    ),
  },
];

// Literal bank (generated once from the lesson's helper; the bank test recomputes every key independently).
export const bank: HisItem[] = [
  { prompt: "Which goods from Asia were valuable in Europe?", options: ["Spices and silk","Coal and oil","Cars and radios","Bricks and glass"], answer: "Spices and silk", explanation: "Spices and silk were valuable and brought great profit." },
  { prompt: "Which instrument showed sailors which way is north?", options: ["The telescope","The compass","The printing press","The clock"], answer: "The compass", explanation: "A magnetic compass shows direction, even far from land." },
  { prompt: "Which instrument helped sailors find their position from the sun and stars?", options: ["The compass","The caravel","The astrolabe","The plough"], answer: "The astrolabe", explanation: "The astrolabe measured the height of the sun or stars." },
  { prompt: "What was a caravel?", options: ["A kind of map of Asia", "A tool for printing books", "A harbour for big ships", "A ship that sailed into wind"], answer: "A ship that sailed into wind", explanation: "The caravel was a light ship used for long voyages." },
  { prompt: "Why did Europeans want a sea route to Asia?", options: ["To trade for spices and silk", "Because Asia had no people", "Because they could not read", "Because roads were too wide"], answer: "To trade for spices and silk", explanation: "A sea route could bring valuable goods home more cheaply." },
  { prompt: "Which is a reason for exploring?", options: ["Having a good compass", "Wanting to become rich", "Owning a fast caravel", "Using a printed map"], answer: "Wanting to become rich", explanation: "A reason says why people went; a compass says how." },
  { prompt: "Which is an invention that helped voyages?", options: ["Wanting fame","Wanting spices","The caravel","Being curious"], answer: "The caravel", explanation: "An invention is a tool or machine, such as the caravel." },
  { prompt: "About when did the printing press come to Europe?", options: ["About 1050","About 1850","About 1950","About 1450"], answer: "About 1450", explanation: "The press came to Europe about 1450." },
  { prompt: "How were books made before the printing press?", options: ["Each copy was written by hand","They were printed by machine","They were recorded on tape","They were made by computer"], answer: "Each copy was written by hand", explanation: "Copying by hand was slow, so books were rare and costly." },
  { prompt: "How did printing help exploration?", options: ["It made ships much faster", "Maps and accounts reached more people", "It stopped storms at sea", "It found gold under the sea"], answer: "Maps and accounts reached more people", explanation: "More copies meant more people could read about the world." },
  { prompt: "Why were spices expensive in Europe?", options: ["They grew in every garden", "They were made in Europe", "They came from far away", "They were given away free"], answer: "They came from far away", explanation: "Spices travelled a long way from Asia, so they cost a lot." },
  { prompt: "Which was a religious reason for exploring?", options: ["To build a railway","To sell printed books","To measure the Moon","To spread Christianity"], answer: "To spread Christianity", explanation: "Some explorers wanted to spread their religion." },
  { prompt: "Who used the compass before Europeans?", options: ["The Chinese","The Romans only","The Portuguese","The Dutch"], answer: "The Chinese", explanation: "The compass was used in China before it reached Europe." },
  { prompt: "Reasons and inventions worked together. What did this make possible?", options: ["Travel by aeroplane","Long voyages across the sea","Voyages to the Moon","A railway across Africa"], answer: "Long voyages across the sea", explanation: "Reasons made people want to go; inventions made it possible." },
];

const InventionsReasonsExploring = () => (
  <HisTopic
    title="Why Europeans explored, and the inventions that helped"
    subtitle="Reasons for sailing far from home, and the tools that made long voyages possible"
    learnSteps={learnSteps}
    task="gr6-inventions-reasons-exploring-t2"
    bank={bank}
  />
);

export default InventionsReasonsExploring;
