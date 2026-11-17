import HisTopic from '../../_shared/HisTopic';
import type { HisItem, LearnStep } from '../../_shared/types';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { FlowSteps } from '../../../../../components/diagrams/lifesci/LifeFlows';
import { InfoTable } from '../../../../../components/diagrams/lifesci/InfoTable';
import * as h from '../../../../../components/diagrams/history/history6';

// CAPS Grade 6 History Term 2: Bartolomeu Dias at Mossel Bay (1488) and Vasco da Gama's sea route to India (1497 to 1498). SENSITIVE: the meeting at
// Mossel Bay is told from both sides in plain, non-graphic words. Facts to confirm: docs/notes/g6-history-doubts.md.
const slide = (children: React.ReactNode) => <div className="space-y-4 text-left">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: 'Portugal looks for a sea route',
    content: slide(
      <>
        <Rule>Portugal is a small country in Europe with a long coast. Its kings wanted a sea route to Asia for spices and gold. Portuguese sailors sailed further and further down the west coast of Africa. In {h.DIAS_MOSSEL_BAY} Bartolomeu Dias sailed round the southern tip of Africa.</Rule>
        <FlowSteps
          aria="The sea route. Portuguese ships sail down the west coast of Africa, Dias rounds the southern tip in 1488, and the next goal is India."
          steps={[
            { label: 'Down the west coast of Africa' },
            { label: `${h.DIAS_MOSSEL_BAY}: Dias rounds the southern tip` },
            { label: 'Next goal: India' },
          ]}
        />
        <Worked
          title="What Dias achieved"
          steps={[
            <>Dias was the first European known to sail round the southern tip of Africa and into the Indian Ocean.</>,
            <>He landed at a bay on the south coast. We call it Mossel Bay today.</>,
            <>His crew was tired and afraid, and they asked to turn back, so Dias sailed home to Portugal.</>,
          ]}
        />
        <Mistake>Thinking that Dias reached India. He turned back after rounding the southern tip of Africa; Da Gama reached India later.</Mistake>
      </>,
    ),
  },
  {
    title: 'Mossel Bay, 1488: two sides',
    content: slide(
      <>
        <Rule>When Dias landed at Mossel Bay, Khoikhoi people were living there with their cattle. The two groups did not know each other and did not share a language. The meeting turned violent.</Rule>
        <InfoTable
          cols={[{ title: 'The Portuguese', w: 50 }, { title: 'The Khoikhoi', w: 50 }]}
          rows={[
            ['Needed fresh water\nfor the ship', 'Needed their water\nfor people and cattle'],
            ['Were far from home\nand tired', 'Were at home and\nprotecting their land'],
            ['Did not understand\nthe Khoikhoi', 'Did not understand\nthe sailors'],
          ]}
          aria="A table of the two sides at Mossel Bay. The Portuguese needed fresh water for the ship, were far from home and tired, and did not understand the Khoikhoi. The Khoikhoi needed their water for people and cattle, were at home protecting their land, and did not understand the sailors."
        />
        <Worked
          title="What happened"
          steps={[
            <>The sailors went to the water. The Khoikhoi tried to protect their water and their cattle.</>,
            <>Stones were thrown and a crossbow was fired, and a Khoikhoi man was killed.</>,
            <>Both sides were afraid. Each defended what mattered to them.</>,
          ]}
        />
        <Mistake>Thinking that only one side had reasons. The sailors needed water, and the Khoikhoi were protecting their water and cattle on their own land.</Mistake>
      </>,
    ),
  },
  {
    title: 'Da Gama sails to India',
    content: slide(
      <>
        <Rule>Vasco da Gama was a Portuguese sailor. He set out in {h.DA_GAMA_VOYAGE.from}, sailed round the southern tip of Africa, crossed the Indian Ocean and reached India in {h.DA_GAMA_VOYAGE.to}. He was the first European to reach India by sea. This was {h.DIAS_TO_DA_GAMA} years after Dias.</Rule>
        <FlowSteps
          aria="Da Gama's voyage. He leaves Portugal in 1497, sails round the southern tip of Africa, travels up the east coast of Africa where he gets help from local pilots, and reaches India in 1498."
          steps={[
            { label: 'Leaves Portugal in 1497' },
            { label: 'Rounds the southern tip of Africa' },
            { label: 'East coast of Africa', sub: 'a local pilot guides him' },
            { label: 'Reaches India in 1498' },
          ]}
        />
        <Worked
          title="Dias and Da Gama compared"
          steps={[
            <><strong>Dias ({h.DIAS_MOSSEL_BAY}):</strong> rounded the southern tip of Africa and turned back.</>,
            <><strong>Da Gama ({h.DA_GAMA_VOYAGE.from} to {h.DA_GAMA_VOYAGE.to}):</strong> carried on to India.</>,
            <>Da Gama used what Dias had learned, and he got help from people on the east coast of Africa who knew the winds and the sea.</>,
          ]}
        />
        <Mistake>Thinking that Da Gama found the way alone. He used Dias&apos;s knowledge, and a local pilot helped him cross the Indian Ocean.</Mistake>
      </>,
    ),
  },
  {
    title: 'Why the sea route mattered',
    content: slide(
      <>
        <Rule>The sea route round Africa let Portugal trade directly with India for spices. It made Portugal rich and led other European countries to send ships too. For the people of Africa and Asia it also brought new traders, new ports and new conflicts.</Rule>
        <InfoTable
          cols={[{ title: 'Before', w: 50 }, { title: 'After', w: 50 }]}
          rows={[
            ['Spices came by\nlong land routes', 'Ships carried spices\nstraight to Europe'],
            ['Few Europeans in the\nIndian Ocean', 'More European ships\nin the Indian Ocean'],
          ]}
          aria="A table of before and after the sea route. Before, spices came by long land routes and there were few Europeans in the Indian Ocean. After, ships carried spices straight to Europe and there were more European ships in the Indian Ocean."
        />
        <Worked
          title="Winners and losers"
          steps={[
            <>Portuguese traders and their king grew richer.</>,
            <>Traders in the Indian Ocean now had new European competitors.</>,
            <>Later, the sea route led other European ships to the southern tip of Africa.</>,
          ]}
        />
        <Mistake>Thinking that the sea route was good for everyone. Some people gained wealth, and others lost trade or land.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <>
        <Check
          questions={[
            <>Who rounded the southern tip of Africa in 1488?</>,
            <>Why did the Khoikhoi at Mossel Bay protect the water?</>,
            <>Who reached India by sea in 1498?</>,
            <>How many years passed from 1488 to 1497?</>,
          ]}
          answers={[
            <><strong>Bartolomeu Dias</strong>.</>,
            <>They needed it for their <strong>people and cattle</strong>.</>,
            <><strong>Vasco da Gama</strong>.</>,
            <>1497 − 1488 = <strong>{h.DIAS_TO_DA_GAMA} years</strong>.</>,
          ]}
        />
      </>,
    ),
  },
];

// Literal bank (generated once from the lesson's helper; the bank test recomputes every key independently).
export const bank: HisItem[] = [
  { prompt: "Which country sent Bartolomeu Dias to find a sea route?", options: ["Portugal","Brazil","Egypt","Canada"], answer: "Portugal", explanation: "Dias was a Portuguese sailor." },
  { prompt: "In which year did Dias sail round the southern tip of Africa?", options: ["1288","1488","1688","1988"], answer: "1488", explanation: "Dias rounded the southern tip of Africa in 1488." },
  { prompt: "Where did Dias land on the south coast of South Africa?", options: ["Durban","Kimberley","Mossel Bay","Pretoria"], answer: "Mossel Bay", explanation: "He landed at what is now called Mossel Bay." },
  { prompt: "Who was living at Mossel Bay when Dias landed?", options: ["Dutch farmers","British soldiers","Chinese traders","Khoikhoi herders"], answer: "Khoikhoi herders", explanation: "Khoikhoi people lived there with their cattle." },
  { prompt: "Why did the sailors go to the water at Mossel Bay?", options: ["They needed fresh water","They wanted to swim","They wanted to fish","They wanted to wash cattle"], answer: "They needed fresh water", explanation: "The ship needed fresh water." },
  { prompt: "Why did the Khoikhoi try to stop the sailors?", options: ["To sell the sailors some spices", "To protect their water and cattle", "To invite the sailors to a feast", "To show the sailors a sea map"], answer: "To protect their water and cattle", explanation: "The water and cattle were precious to them." },
  { prompt: "Why was the meeting at Mossel Bay difficult from the start?", options: ["They had met each other before", "They both spoke Portuguese well", "They did not share a language", "There was no water nearby at all"], answer: "They did not share a language", explanation: "They had no shared language and were afraid." },
  { prompt: "Why did Dias turn back?", options: ["He reached India","He lost his ship","The king ordered him to stay","His crew was tired and afraid"], answer: "His crew was tired and afraid", explanation: "The crew asked him to turn back." },
  { prompt: "Which Portuguese sailor was the first European to arrive in India by ship?", options: ["Vasco da Gama","Bartolomeu Dias","Marco Polo","Galileo"], answer: "Vasco da Gama", explanation: "Da Gama reached India in 1498." },
  { prompt: "Da Gama set out in 1497 and reached India in 1498. About how long did his voyage take?", options: ["About ten years","About one year","About one month","About one week"], answer: "About one year", explanation: "1498 − 1497 = about one year." },
  { prompt: "How many years after Dias (1488) did Da Gama set out (1497)?", options: ["19 years","90 years","9 years","1 year"], answer: "9 years", explanation: "1497 − 1488 = 9 years." },
  { prompt: "Who helped Da Gama cross the Indian Ocean?", options: ["A Dutch ship captain from Holland", "A British admiral from London", "A Chinese emperor from Beijing", "A local pilot from east Africa"], answer: "A local pilot from east Africa", explanation: "People who knew the winds and the sea helped him." },
  { prompt: "Why did Portugal want a sea route to India?", options: ["To trade for spices directly", "To build railways to the coast", "To dig for coal in Asia", "To make films about the sea"], answer: "To trade for spices directly", explanation: "Spices were valuable in Europe." },
  { prompt: "Which sentence is true about the sea route?", options: ["It helped everyone in the same way", "It helped some and harmed others", "It harmed no one at all", "It changed nothing in the world"], answer: "It helped some and harmed others", explanation: "Some gained wealth; others lost trade or land." },
];

const DiasDaGama = () => (
  <HisTopic
    title="Dias at Mossel Bay and Da Gama's sea route"
    subtitle="The Portuguese sea route round Africa, and the meeting at Mossel Bay from both sides"
    learnSteps={learnSteps}
    task="gr6-dias-da-gama-t2"
    bank={bank}
  />
);

export default DiasDaGama;
