import HisTopic from '../../_shared/HisTopic';
import type { HisItem, LearnStep } from '../../_shared/types';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { HillPlan, TimelineBars } from '../../../../../components/diagrams/history/History6Pictures';
import { InfoTable } from '../../../../../components/diagrams/lifesci/InfoTable';
import * as h from '../../../../../components/diagrams/history/history6';

// CAPS Grade 6 History Term 1: Mapungubwe, the first state in southern Africa 1220 to 1300: king and sacred leadership, the first stone-walled palace,
// the significance of Mapungubwe Hill, the first town and distinct social classes. Told as an African achievement in its own right. The plan of the hill is a
// labelled schematic, not a drawing of the real site (docs/notes/g6-history-doubts.md).
const slide = (children: React.ReactNode) => <div className="space-y-4 text-left">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: 'The first state in southern Africa',
    content: slide(
      <>
        <Rule>Mapungubwe was the first state in southern Africa. It lasted from AD {h.MAPUNGUBWE.from} to AD {h.MAPUNGUBWE.to}, which is {h.years(h.MAPUNGUBWE)} years. A state has a ruler who governs many people and settlements. At Mapungubwe the ruler was a king.</Rule>
        <TimelineBars spans={[h.K2, h.MAPUNGUBWE]} min={1000} max={1300} />
        <Worked
          title="Why was it a state?"
          steps={[
            <>It had a <strong>king</strong> who ruled many people.</>,
            <>It had a <strong>town</strong> where many people lived and worked.</>,
            <>It had different <strong>social classes</strong>: leaders and ordinary people.</>,
            <>It was much bigger and more complex than any society in southern Africa before it. The people who built it came from the earlier settlement of K2.</>,
          ]}
        />
        <Mistake>Thinking that a kingdom must have copied its ideas from other countries. Mapungubwe grew out of the societies of southern Africa itself.</Mistake>
      </>,
    ),
  },
  {
    title: 'A sacred king on the hill',
    content: slide(
      <>
        <Rule>The king of Mapungubwe was a sacred leader. People believed that he had special sacred powers. He and the other leaders lived on top of Mapungubwe Hill, apart from the ordinary people, and the king was buried there.</Rule>
        <HillPlan top={['king and leaders', 'palace with stone walls', 'royal graves']} bottom={['town and fields of the ordinary people']} />
        <Worked
          title="Sacred leadership"
          steps={[
            <>The king held <strong>power</strong> over the people and the land.</>,
            <>Because people believed the king was sacred, he was treated with great respect.</>,
            <>Living on the hill set the king apart, as a sign of his sacred role.</>,
          ]}
        />
        <Mistake>Thinking that the king ruled only by force. People believed he was sacred, and this was part of why they followed him.</Mistake>
      </>,
    ),
  },
  {
    title: 'The hill, the palace and the first town',
    content: slide(
      <>
        <Rule>Mapungubwe Hill is a steep, flat-topped hill. On top, the leaders built the first stone-walled palace in southern Africa. Below the hill, a town grew. This was the first town in southern Africa, where many people lived together.</Rule>
        <InfoTable
          cols={[{ title: 'Place', w: 32 }, { title: 'What was there', w: 68 }]}
          rows={[
            ['On the hill', 'The stone-walled palace, the\nking and the royal graves'],
            ['Below the hill', 'The town, with farmers, herders,\npotters and metalworkers'],
            ['Further away', 'Fields and grazing land for\ncattle'],
          ]}
          aria="A table of places. On the hill: the stone-walled palace, the king and the royal graves. Below the hill: the town, with farmers, herders, potters and metalworkers. Further away: fields and grazing land for cattle."
        />
        <Worked
          title="Why the hill was important"
          steps={[
            <>It was the home of the king, so it was the centre of power.</>,
            <>It was a sacred place, because the king and his ancestors were buried there.</>,
            <>Stone walls show that the people planned and built with great skill.</>,
          ]}
        />
        <Mistake>Thinking that everyone lived on the hill. Only the king and the leaders lived there. Most people lived in the town below.</Mistake>
      </>,
    ),
  },
  {
    title: 'Social classes',
    content: slide(
      <>
        <Rule>A social class is a group of people with similar wealth and power. Mapungubwe had distinct social classes. The king and the leaders were the highest class. The ordinary people were the largest class. Historians know this from where people lived and from what was buried with them.</Rule>
        <InfoTable
          cols={[{ title: 'Class', w: 30 }, { title: 'Where they lived', w: 34 }, { title: 'Evidence', w: 36 }]}
          rows={[
            ['King and leaders', 'On the hill', 'Graves with gold'],
            ['Ordinary people', 'In the town below', 'Simple graves'],
          ]}
          aria="A table of social classes. The king and leaders lived on the hill, and their graves contain gold. The ordinary people lived in the town below, and their graves are simple."
        />
        <Worked
          title="Evidence for social classes"
          steps={[
            <>The graves on the hill hold golden objects. The graves of ordinary people are simple.</>,
            <>This shows that the leaders were richer and more powerful.</>,
            <>Different classes shows that Mapungubwe was a complex society.</>,
          ]}
        />
        <Mistake>Thinking that all people at Mapungubwe had the same wealth. The graves show that they did not.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <>
        <Check
          questions={[
            <>For how many years was Mapungubwe a state?</>,
            <>Where did the king and the leaders live?</>,
            <>What was special about the palace on the hill?</>,
            <>What does a grave with gold show about the person?</>,
          ]}
          answers={[
            <>1300 − 1220 = <strong>{h.years(h.MAPUNGUBWE)} years</strong>.</>,
            <>On top of <strong>Mapungubwe Hill</strong>.</>,
            <>It was the <strong>first stone-walled palace</strong> in southern Africa.</>,
            <>That the person was <strong>rich and powerful</strong>, a leader.</>,
          ]}
        />
      </>,
    ),
  },
];

// Literal bank (generated once from the lesson's helper; the bank test recomputes every key independently).
export const bank: HisItem[] = [
  { prompt: "What word do historians use for a society with a king, a town and classes, such as Mapungubwe?", options: ["State","Seaport","Railway","University"], answer: "State", explanation: "Mapungubwe was the first state in southern Africa." },
  { prompt: "Between which years was Mapungubwe a state?", options: ["AD 900 to 1000","AD 1220 to 1300","AD 1000 to 1220","AD 1250 to 1450"], answer: "AD 1220 to 1300", explanation: "Mapungubwe lasted from AD 1220 to AD 1300." },
  { prompt: "Who ruled Mapungubwe?", options: ["A governor sent from Europe","A president chosen by everyone","A king","A council of sailors"], answer: "A king", explanation: "Mapungubwe had a king who ruled many people and settlements." },
  { prompt: "Why is the king of Mapungubwe called a sacred leader?", options: ["He was the oldest man in the town","He was the best hunter","He came from another country","He was believed to have special sacred powers"], answer: "He was believed to have special sacred powers", explanation: "People believed that the king had sacred powers, so he was treated with great respect." },
  { prompt: "Which place was the home of the ruler and his leaders?", options: ["On top of Mapungubwe Hill","On the shore of the sea","In a cave under a river","On ships in the harbour"], answer: "On top of Mapungubwe Hill", explanation: "The king and the leaders lived on top of the hill, apart from the ordinary people." },
  { prompt: "Where did most ordinary people of Mapungubwe live?", options: ["On the top of the hill","In the town on the plain below the hill","On the coast","In stone caves in the mountains"], answer: "In the town on the plain below the hill", explanation: "Most people lived in the town below the hill." },
  { prompt: "Why was the palace on the hill a first for the region?", options: ["It was made entirely of glass", "It was built by European sailors", "It was the first stone-walled palace", "It was built deep underground"], answer: "It was the first stone-walled palace", explanation: "The palace was the first stone-walled palace in southern Africa." },
  { prompt: "What is a social class?", options: ["A lesson given at a school", "A group from one big family", "A special kind of pottery", "People with similar wealth and power"], answer: "People with similar wealth and power", explanation: "A social class is a group of people with similar wealth and power." },
  { prompt: "Graves on the hill held gold, but graves on the plain held little. What does this show?", options: ["Leaders were richer than ordinary people", "The people on the plain were richer", "Gold was found on the plain, not the hill", "The plain had no people living on it"], answer: "Leaders were richer than ordinary people", explanation: "Different graves show that Mapungubwe had distinct social classes." },
  { prompt: "Which of these jobs did people in the Mapungubwe town do?", options: ["Building ships and sailing the ocean","Farming, herding and making pots and metal objects","Printing books","Mining coal for trains"], answer: "Farming, herding and making pots and metal objects", explanation: "The town had farmers, herders, potters and metalworkers." },
  { prompt: "A state that began in AD 1220 and ended in AD 1300 lasted for how many years?", options: ["8 years","120 years","80 years","1 300 years"], answer: "80 years", explanation: "1300 − 1220 = 80 years." },
  { prompt: "The people who built Mapungubwe came from an earlier settlement called", options: ["Great Zimbabwe","Cape Town","Venice","K2"], answer: "K2", explanation: "About AD 1220 the people of K2 moved to Mapungubwe Hill." },
  { prompt: "Mapungubwe had a king, a town and different classes. This shows that it was", options: ["A complex society","A small village","A holiday camp","A temporary camp"], answer: "A complex society", explanation: "A king, a town and social classes show a bigger and more complex society." },
  { prompt: "What was the name of the hill where the king lived?", options: ["Table Mountain","Mapungubwe Hill","Majuba Hill","Signal Hill"], answer: "Mapungubwe Hill", explanation: "The king lived on Mapungubwe Hill." },
];

const MapungubweKingdom = () => (
  <HisTopic
    title="Mapungubwe: a kingdom with a sacred king"
    subtitle="The first state in southern Africa: the king, the hill, the first town and social classes"
    learnSteps={learnSteps}
    task="gr6-mapungubwe-kingdom-t1"
    bank={bank}
  />
);

export default MapungubweKingdom;
