import HisTopic from '../../_shared/HisTopic';
import type { HisItem, LearnStep } from '../../_shared/types';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { TimelineBars } from '../../../../../components/diagrams/history/History6Pictures';
import { InfoTable } from '../../../../../components/diagrams/lifesci/InfoTable';
import * as h from '../../../../../components/diagrams/history/history6';

// CAPS Grade 6 History Term 1 (Mapungubwe): changes in societies in the Limpopo Valley between 900 AD and 1300 AD (bigger, more organised, more complex),
// and the settlements before Mapungubwe: K2 and Schroda. Dates come from history6.ts: Mapungubwe 1220 to 1300 is the CAPS date; the dates of Schroda and K2
// are approximate ("about") and are on the teacher-check list in docs/notes/g6-history-doubts.md.
const slide = (children: React.ReactNode) => <div className="space-y-4 text-left">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: 'Before Mapungubwe: the Limpopo Valley',
    content: slide(
      <>
        <Rule>The Limpopo Valley lies in the north of South Africa, where the Limpopo River flows. About {h.LIMPOPO_PERIOD.from} AD to {h.LIMPOPO_PERIOD.to} AD, the societies that lived there became bigger, more organised and more complex. Two of their settlements were Schroda and K2.</Rule>
        <TimelineBars spans={h.SPANS} min={900} max={1300} />
        <Worked
          title="Reading the timeline"
          steps={[
            <>Schroda: {h.spanText(h.SCHRODA)}, which is about <strong>{h.years(h.SCHRODA)} years</strong>.</>,
            <>K2: {h.spanText(h.K2)}, which is about <strong>{h.years(h.K2)} years</strong>.</>,
            <>Mapungubwe: {h.spanText(h.MAPUNGUBWE)}, which is <strong>{h.years(h.MAPUNGUBWE)} years</strong>.</>,
            <>All together the story covers {h.years(h.LIMPOPO_PERIOD)} years, from AD {h.LIMPOPO_PERIOD.from} to AD {h.LIMPOPO_PERIOD.to}.</>,
          ]}
        />
        <Mistake>Thinking that all three places existed at the same time. They followed one another: Schroda, then K2, then Mapungubwe. The dates for Schroda and K2 are &quot;about&quot;, because they are worked out from evidence in the ground.</Mistake>
      </>,
    ),
  },
  {
    title: 'Schroda: farmers who traded',
    content: slide(
      <>
        <Rule>Schroda was a settlement of farmers about AD 900 to 1000. The people grew crops, kept cattle and other animals, and made pottery. They also worked ivory and had glass beads, which came from far away. This shows that they traded with people far from the Limpopo Valley.</Rule>
        <InfoTable
          cols={[{ title: 'What was found', w: 40 }, { title: 'What it tells us', w: 60 }]}
          rows={[
            ['Pottery', 'The people made and used\nclay pots'],
            ['Animal bones', 'They kept cattle and other\nanimals'],
            ['Ivory and glass beads', 'They traded with people\nfar away'],
          ]}
          aria="A table of evidence from Schroda. Pottery tells us the people made and used clay pots. Animal bones tell us they kept cattle and other animals. Ivory and glass beads tell us they traded with people far away."
        />
        <Worked
          title="How archaeologists know"
          steps={[
            <>Archaeologists study the objects and remains that people left behind, such as pottery, bones and beads.</>,
            <>Glass beads were not made in the Limpopo Valley, so they must have been brought by traders.</>,
            <>This is evidence, so we can say what the people did even though they left no writing.</>,
          ]}
        />
        <Mistake>Saying that people with no writing had no history. The evidence in the ground gives us their history.</Mistake>
      </>,
    ),
  },
  {
    title: 'K2: a bigger, more organised settlement',
    content: slide(
      <>
        <Rule>K2 came after Schroda, about AD 1000 to 1220. It was a bigger settlement. Cattle were very important and were a sign of wealth. Some people had more wealth than others, and leaders became more important. About AD 1220 the people moved to Mapungubwe Hill.</Rule>
        <InfoTable
          cols={[{ title: 'Settlement', w: 30 }, { title: 'Dates', w: 36 }, { title: 'Years', w: 34 }]}
          rows={[
            ['Schroda', `${h.spanText(h.SCHRODA)}`, `about ${h.years(h.SCHRODA)}`],
            ['K2', `${h.spanText(h.K2)}`, `about ${h.years(h.K2)}`],
            ['Mapungubwe', h.spanText(h.MAPUNGUBWE), `${h.years(h.MAPUNGUBWE)}`],
          ]}
          aria={`A table of settlements in the Limpopo Valley. Schroda, ${h.spanText(h.SCHRODA)}, about ${h.years(h.SCHRODA)} years. K2, ${h.spanText(h.K2)}, about ${h.years(h.K2)} years. Mapungubwe, ${h.spanText(h.MAPUNGUBWE)}, ${h.years(h.MAPUNGUBWE)} years.`}
        />
        <Worked
          title="What changed and what stayed the same"
          steps={[
            <><strong>Change:</strong> from Schroda to K2 the settlement became bigger and more organised, and leaders became more important.</>,
            <><strong>Continuity:</strong> cattle, farming and trade stayed important in all three places.</>,
            <>Wealth in cattle helped some people become leaders.</>,
          ]}
        />
        <Mistake>Saying that nothing changed, or that everything changed. In history we look for both: what changed and what continued.</Mistake>
      </>,
    ),
  },
  {
    title: 'Why the changes matter',
    content: slide(
      <>
        <Rule>Over {h.years(h.LIMPOPO_PERIOD)} years the societies of the Limpopo Valley grew from farming villages into the kingdom of Mapungubwe. They became bigger, more organised and more complex. This was an achievement of the people of southern Africa, built on farming, cattle and trade.</Rule>
        <TimelineBars spans={[h.SCHRODA, h.K2, h.MAPUNGUBWE]} min={900} max={1300} />
        <Worked
          title="From villages to a kingdom"
          steps={[
            <>Schroda: farmers with cattle, ivory and beads from trade.</>,
            <>K2: a bigger settlement where wealth and leadership grew.</>,
            <>Mapungubwe: the first state in southern Africa, with a king, a town and social classes (the next lessons).</>,
          ]}
        />
        <Mistake>Thinking that Mapungubwe appeared suddenly. It grew out of the earlier societies at Schroda and K2.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <>
        <Check
          questions={[
            <>Which came first, K2 or Schroda?</>,
            <>K2 lasted about AD 1000 to 1220. About how many years is that?</>,
            <>What does ivory and glass beads at Schroda show?</>,
            <>Give one thing that stayed the same from Schroda to Mapungubwe.</>,
          ]}
          answers={[
            <><strong>Schroda</strong> came first, then K2.</>,
            <>1220 − 1000 = <strong>{h.years(h.K2)} years</strong>.</>,
            <>That the people <strong>traded</strong> with people far away.</>,
            <>For example <strong>cattle</strong> were important in all of them.</>,
          ]}
        />
      </>,
    ),
  },
];

// Literal bank (generated once from the lesson's helper; the bank test recomputes every key independently).
export const bank: HisItem[] = [
  { prompt: "Between about AD 900 and AD 1300, how did the societies of the Limpopo Valley change?", options: ["They became bigger and more organised", "They became smaller and simpler", "They stopped keeping cattle", "They moved to the sea coast"], answer: "They became bigger and more organised", explanation: "The societies became bigger, more organised and more complex, and grew into the kingdom of Mapungubwe." },
  { prompt: "K2 and Schroda were settlements in which valley?", options: ["The Zambezi Valley","The Limpopo Valley","The Orange River valley","The Kei River valley"], answer: "The Limpopo Valley", explanation: "Both were settlements in the Limpopo Valley, in the north of South Africa." },
  { prompt: "Which settlement came first?", options: ["K2","Mapungubwe","Schroda","They were all at the same time"], answer: "Schroda", explanation: "Schroda (about AD 900 to 1000) came first, then K2, then Mapungubwe." },
  { prompt: "Which settlement came after K2?", options: ["Schroda","Great Zimbabwe","Cape Town","Mapungubwe"], answer: "Mapungubwe", explanation: "About AD 1220 the people moved from K2 to Mapungubwe." },
  { prompt: "Schroda lasted from about AD 900 to AD 1000. For about how many years was it a settlement?", options: ["100 years","10 years","1 000 years","900 years"], answer: "100 years", explanation: "1000 − 900 = 100 years." },
  { prompt: "K2 lasted from about AD 1000 to AD 1220. For about how many years was it a settlement?", options: ["22 years","220 years","1 220 years","120 years"], answer: "220 years", explanation: "1220 − 1000 = 220 years." },
  { prompt: "Mapungubwe lasted from AD 1220 to AD 1300. For how many years?", options: ["8 years","120 years","80 years","1 300 years"], answer: "80 years", explanation: "1300 − 1220 = 80 years." },
  { prompt: "From the start of Schroda (about AD 900) to the end of Mapungubwe (AD 1300), how many years is that?", options: ["300 years","500 years","1 300 years","400 years"], answer: "400 years", explanation: "1300 − 900 = 400 years." },
  { prompt: "Archaeologists found ivory and glass beads at Schroda. What does this show?", options: ["The people traded with people far away", "The people kept no cattle or goats", "The people lived beside the sea", "The people did not grow any crops"], answer: "The people traded with people far away", explanation: "Glass beads were not made in the valley, so traders must have brought them." },
  { prompt: "How did the people of Schroda and K2 get their food?", options: ["Fishing at sea","Farming and keeping cattle","Gathering wild plants alone","Buying food from ships"], answer: "Farming and keeping cattle", explanation: "They grew crops and kept cattle and other animals." },
  { prompt: "What do archaeologists study?", options: ["The stars and planets in the sky", "Animals that live in a big zoo", "Remains left by people of the past", "Rocks that are still being formed"], answer: "Remains left by people of the past", explanation: "Archaeologists study pottery, bones, beads and other remains in the ground." },
  { prompt: "Cattle were important at Schroda, at K2 and at Mapungubwe. What is this an example of?", options: ["Change, something that was new", "Conquest by a foreign army", "A brand new invention", "Continuity: it stayed the same"], answer: "Continuity: it stayed the same", explanation: "Continuity means something stayed the same over a long time." },
  { prompt: "At K2, what did owning many cattle show?", options: ["Wealth and importance","That a person was a stranger","That a person sailed ships","That a person had no land"], answer: "Wealth and importance", explanation: "Cattle were a sign of wealth, and wealthy people became important leaders." },
  { prompt: "About which year did the people of K2 move to Mapungubwe Hill?", options: ["About AD 900","About AD 1220","About AD 1000","About AD 1300"], answer: "About AD 1220", explanation: "Mapungubwe, the first state in southern Africa, began in AD 1220." },
];

const LimpopoValleyK2Schroda = () => (
  <HisTopic
    title="Societies in the Limpopo Valley: K2 and Schroda"
    subtitle="How farming villages grew bigger and more organised before Mapungubwe"
    learnSteps={learnSteps}
    task="gr6-limpopo-valley-k2-schroda-t1"
    bank={bank}
  />
);

export default LimpopoValleyK2Schroda;
