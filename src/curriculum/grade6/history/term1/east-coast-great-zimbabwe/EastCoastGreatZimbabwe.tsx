import HisTopic from '../../_shared/HisTopic';
import type { HisItem, LearnStep } from '../../_shared/types';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { TimelineBars } from '../../../../../components/diagrams/history/History6Pictures';
import { FlowSteps } from '../../../../../components/diagrams/lifesci/LifeFlows';
import { InfoTable } from '../../../../../components/diagrams/lifesci/InfoTable';
import * as h from '../../../../../components/diagrams/history/history6';

// CAPS Grade 6 History Term 1: change and continuity in East Coast trade with settlements inland, and (briefly) Great Zimbabwe, which succeeded Mapungubwe as
// the centre of southern African trade. Great Zimbabwe's dates are approximate ("about"); it was built by the ancestors of the Shona people. Facts to
// confirm are in docs/notes/g6-history-doubts.md.
const slide = (children: React.ReactNode) => <div className="space-y-4 text-left">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: 'Trade between the east coast and the inland',
    content: slide(
      <>
        <Rule>Long before and long after Mapungubwe, people on the east coast of Africa traded with settlements inland. Traders from across the Indian Ocean, such as Arabia, Persia and India, came to coastal towns. Inland people sent gold and ivory to the coast, and cloth and glass beads came back.</Rule>
        <FlowSteps
          aria="How east coast trade worked. Inland settlements send gold and ivory towards the coast, traders carry them to coastal towns, merchants from across the Indian Ocean buy them, and cloth and glass beads travel back inland."
          steps={[
            { label: 'Inland: gold and ivory' },
            { label: 'Carried to coastal towns' },
            { label: 'Merchants from across the ocean' },
            { label: 'Cloth and glass beads go inland' },
          ]}
        />
        <Worked
          title="Who traded what"
          steps={[
            <><strong>Inland people:</strong> gold and ivory (and cattle products).</>,
            <><strong>Coastal towns:</strong> a meeting place for traders from Africa and from across the Indian Ocean.</>,
            <><strong>Overseas merchants:</strong> cloth and glass beads, in exchange for gold and ivory.</>,
          ]}
        />
        <Mistake>Thinking that the east coast trade started with Europeans. It was already old, between African and Indian Ocean traders, long before Europeans came.</Mistake>
      </>,
    ),
  },
  {
    title: 'Change and continuity',
    content: slide(
      <>
        <Rule>When Mapungubwe ended, about AD {h.MAPUNGUBWE.to}, the trade with the east coast did not stop. The same kinds of goods were still traded. What changed was where the centre of power and trade was: it moved north, to Great Zimbabwe.</Rule>
        <InfoTable
          cols={[{ title: '', w: 22 }, { title: 'Mapungubwe', w: 38 }, { title: 'Great Zimbabwe', w: 40 }]}
          rows={[
            ['Where', 'Limpopo Valley', 'North of the Limpopo'],
            ['Goods', 'Gold, ivory, beads', 'The same kinds of goods'],
            ['Power', 'A king on the hill', 'Rulers in a stone city'],
          ]}
          aria="A table comparing two centres of trade. Mapungubwe was in the Limpopo Valley, traded gold, ivory and beads, and had a king on the hill. Great Zimbabwe was north of the Limpopo, traded the same kinds of goods, and had rulers in a stone city."
        />
        <Worked
          title="Change and continuity"
          steps={[
            <><strong>Continuity (what stayed the same):</strong> trade with the east coast, and gold and ivory as the main goods.</>,
            <><strong>Change (what was different):</strong> the centre of trade and power moved from the Limpopo Valley to Great Zimbabwe.</>,
            <>Trade carried on, but the leaders and the place were different.</>,
          ]}
        />
        <Mistake>Thinking that when a kingdom ended, the trade ended too. The trade continued and a new centre grew.</Mistake>
      </>,
    ),
  },
  {
    title: 'Great Zimbabwe: where and when',
    content: slide(
      <>
        <Rule>Great Zimbabwe succeeded Mapungubwe as the centre of trade in southern Africa. It lies in the country that is called Zimbabwe today. It was most powerful from about AD {h.GREAT_ZIMBABWE.from} to about AD {h.GREAT_ZIMBABWE.to}, which is about {h.years(h.GREAT_ZIMBABWE)} years.</Rule>
        <TimelineBars spans={[h.MAPUNGUBWE, h.GREAT_ZIMBABWE]} min={1200} max={1500} />
        <Worked
          title="Reading the timeline"
          steps={[
            <>Mapungubwe: {h.spanText(h.MAPUNGUBWE)}, {h.years(h.MAPUNGUBWE)} years.</>,
            <>Great Zimbabwe: {h.spanText(h.GREAT_ZIMBABWE)}, about <strong>{h.years(h.GREAT_ZIMBABWE)} years</strong>.</>,
            <>Great Zimbabwe took over as the centre of trade when Mapungubwe ended, in AD {h.MAPUNGUBWE.to}.</>,
            <>The dates for Great Zimbabwe are &quot;about&quot;, because historians work them out from evidence.</>,
          ]}
        />
        <Mistake>Thinking that Great Zimbabwe is in South Africa. It is in Zimbabwe, north of the Limpopo River.</Mistake>
      </>,
    ),
  },
  {
    title: 'Great Zimbabwe: walls, wealth and trade',
    content: slide(
      <>
        <Rule>Great Zimbabwe was built by the ancestors of the Shona people. Its great walls were built of stone blocks laid carefully without mortar. Its rulers were wealthy from cattle and from the gold trade. Glass beads and porcelain found there show that its trade reached far across the Indian Ocean.</Rule>
        <InfoTable
          cols={[{ title: 'Feature', w: 32 }, { title: 'What it shows', w: 68 }]}
          rows={[
            ['Great stone walls', 'Skilled builders; the power\nof the rulers'],
            ['Cattle and gold', 'The wealth of the rulers'],
            ['Beads and porcelain', 'Trade with lands far across\nthe Indian Ocean'],
          ]}
          aria="A table of features of Great Zimbabwe. The great stone walls show skilled builders and the power of the rulers. Cattle and gold show the wealth of the rulers. Beads and porcelain show trade with lands far across the Indian Ocean."
        />
        <Worked
          title="Mapungubwe and Great Zimbabwe"
          steps={[
            <><strong>Alike:</strong> both had stone walls, rulers with great power, and trade in gold and ivory.</>,
            <><strong>Different:</strong> Great Zimbabwe was later, in a different place, and had much bigger stone walls.</>,
            <>Both were built by the people of southern Africa.</>,
          ]}
        />
        <Mistake>Believing the old claim that foreigners built Great Zimbabwe. Historians and archaeologists have shown that African people, the ancestors of the Shona, built it.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <>
        <Check
          questions={[
            <>Name two goods that inland people sent to the east coast.</>,
            <>Give one thing that changed, and one that stayed the same, after Mapungubwe.</>,
            <>Which people built Great Zimbabwe?</>,
            <>About how many years was Great Zimbabwe at its height?</>,
          ]}
          answers={[
            <><strong>Gold and ivory</strong>.</>,
            <>Changed: the centre of trade moved to Great Zimbabwe. Same: trade with the coast <strong>continued</strong>.</>,
            <>The ancestors of the <strong>Shona people</strong>.</>,
            <>1450 − 1300 = about <strong>{h.years(h.GREAT_ZIMBABWE)} years</strong>.</>,
          ]}
        />
      </>,
    ),
  },
];

// Literal bank (generated once from the lesson's helper; the bank test recomputes every key independently).
export const bank: HisItem[] = [
  { prompt: "Which goods did people inland send to the east coast?", options: ["Gold and ivory","Cars and clocks","Coal and steel","Tea and sugar"], answer: "Gold and ivory", explanation: "Gold and ivory travelled to the coast and across the Indian Ocean." },
  { prompt: "Which goods came inland from the east coast?", options: ["Gold and ivory","Glass beads and cloth","Maize and cattle","Stone and clay"], answer: "Glass beads and cloth", explanation: "Glass beads and cloth came from across the Indian Ocean." },
  { prompt: "Traders from which places came to the east coast of Africa to trade?", options: ["Canada and Brazil","Russia and Poland","Arabia, Persia and India","Australia and Japan"], answer: "Arabia, Persia and India", explanation: "Merchants from Arabia, Persia and India crossed the Indian Ocean to trade." },
  { prompt: "After Mapungubwe ended, which place became the centre of trade in southern Africa?", options: ["Cape Town","Schroda","Timbuktu","Great Zimbabwe"], answer: "Great Zimbabwe", explanation: "Great Zimbabwe succeeded Mapungubwe as the centre of trade." },
  { prompt: "East coast trade went on before and after Mapungubwe. What is this an example of?", options: ["Continuity","Change","Invention","Revolution"], answer: "Continuity", explanation: "Continuity means something stayed the same over time." },
  { prompt: "What changed when Great Zimbabwe replaced Mapungubwe?", options: ["Gold was no longer traded","The centre of trade and power moved","Cattle were no longer kept","Trade with the coast stopped"], answer: "The centre of trade and power moved", explanation: "Trade went on, but the centre of power and trade moved north." },
  { prompt: "In which present-day country is Great Zimbabwe?", options: ["South Africa","Mozambique","Zimbabwe","Botswana"], answer: "Zimbabwe", explanation: "Great Zimbabwe lies in Zimbabwe, north of the Limpopo River." },
  { prompt: "How were the great walls of Great Zimbabwe built?", options: ["Bricks made in factories","Concrete poured in moulds","Wood and glass panels","Stones laid without mortar"], answer: "Stones laid without mortar", explanation: "The builders laid stone blocks carefully without mortar." },
  { prompt: "Which people built Great Zimbabwe?", options: ["The ancestors of the Shona", "Portuguese sailors from Europe", "Arab traders from the coast", "Ancient Egyptians long ago"], answer: "The ancestors of the Shona", explanation: "Historians and archaeologists have shown that African people, the ancestors of the Shona, built Great Zimbabwe." },
  { prompt: "What was found at Great Zimbabwe that shows long-distance trade?", options: ["Railway tracks","Glass beads and porcelain","Printing presses","Tin cans"], answer: "Glass beads and porcelain", explanation: "Glass beads and porcelain from far away show trade across the Indian Ocean." },
  { prompt: "What made the rulers of Great Zimbabwe wealthy?", options: ["Fishing in the open sea", "Making cars in factories", "Cattle and the gold trade", "Growing tea on large farms"], answer: "Cattle and the gold trade", explanation: "The rulers were wealthy from cattle and from trading gold." },
  { prompt: "Great Zimbabwe was at its height from about AD 1300 to about AD 1450. About how many years was that?", options: ["15 years","1 450 years","1 300 years","150 years"], answer: "150 years", explanation: "1450 − 1300 = 150 years." },
  { prompt: "What did Mapungubwe and Great Zimbabwe have in common?", options: ["Stone walls and the gold trade", "Railways and busy seaports", "Printing and paper making", "Sailing ships and cannons"], answer: "Stone walls and the gold trade", explanation: "Both had stone walls, powerful rulers and trade in gold and ivory." },
  { prompt: "Around which year did Great Zimbabwe take over from Mapungubwe as the main trading centre?", options: ["About AD 1000","About AD 1300","About AD 1220","About AD 1488"], answer: "About AD 1300", explanation: "Mapungubwe ended in AD 1300 and Great Zimbabwe became the centre of trade." },
];

const EastCoastGreatZimbabwe = () => (
  <HisTopic
    title="East coast trade and Great Zimbabwe"
    subtitle="Change and continuity in trade with the coast, and the stone city that followed Mapungubwe"
    learnSteps={learnSteps}
    task="gr6-east-coast-trade-great-zimbabwe-t1"
    bank={bank}
  />
);

export default EastCoastGreatZimbabwe;
