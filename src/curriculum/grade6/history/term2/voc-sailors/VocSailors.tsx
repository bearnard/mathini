import HisTopic from '../../_shared/HisTopic';
import type { HisItem, LearnStep } from '../../_shared/types';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { FlowSteps } from '../../../../../components/diagrams/lifesci/LifeFlows';
import { InfoTable } from '../../../../../components/diagrams/lifesci/InfoTable';
import * as h from '../../../../../components/diagrams/history/history6';

// CAPS Grade 6 History Term 2: VOC journeys and the life of a sailor on a long voyage. The VOC was founded in 1602 (history6.ts). Voyage lengths are
// given only as "many months". Facts to confirm: docs/notes/g6-history-doubts.md.
const slide = (children: React.ReactNode) => <div className="space-y-4 text-left">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: 'The VOC and its journeys',
    content: slide(
      <>
        <Rule>VOC stands for Vereenigde Oostindische Compagnie, the Dutch East India Company. It was a trading company from the Netherlands, started in {h.VOC_FOUNDED}. Its ships sailed to Asia to buy spices, silk and other goods and bring them back to Europe.</Rule>
        <FlowSteps
          aria="A VOC journey. A ship leaves the Netherlands, sails south round Africa and across the Indian Ocean to Asia, loads spices and goods, and sails back to the Netherlands."
          steps={[
            { label: 'Leaves the Netherlands' },
            { label: 'Round Africa, across the Indian Ocean' },
            { label: 'Asia: spices and goods loaded' },
            { label: 'Sails back to the Netherlands' },
          ]}
        />
        <Worked
          title="A company, not a king"
          steps={[
            <>The VOC was a company owned by merchants, who hoped to make a profit.</>,
            <>It had many ships, sailors and soldiers.</>,
            <>A voyage took many months, and ships had to go round the southern tip of Africa.</>,
          ]}
        />
        <Mistake>Thinking that the VOC was a country or a kingdom. It was a trading company.</Mistake>
      </>,
    ),
  },
  {
    title: "A sailor's life",
    content: slide(
      <>
        <Rule>Life on a VOC ship was hard. Hundreds of people shared a small, crowded ship for many months. The work was heavy, the food was poor, and illness spread easily.</Rule>
        <InfoTable
          cols={[{ title: 'On board', w: 34 }, { title: 'What it was like', w: 66 }]}
          rows={[
            ['Space', 'Crowded; sailors slept\nclose together'],
            ['Food', 'Hard biscuit and salted meat;\nfresh food ran out'],
            ['Work', 'Sails, ropes, cleaning,\nwatches day and night'],
            ['Danger', 'Storms and disease'],
          ]}
          aria="A table of life on board a VOC ship. Space was crowded and sailors slept close together. Food was hard biscuit and salted meat, and fresh food ran out. Work was sails, ropes, cleaning and watches day and night. Dangers were storms and disease."
        />
        <Worked
          title="Why was it so hard?"
          steps={[
            <>There was no fridge, so fresh food went bad and sailors ate dried and salted food.</>,
            <>Without fresh fruit and vegetables, many sailors got a disease called scurvy.</>,
            <>Many sailors died on long voyages, from disease more often than from storms.</>,
          ]}
        />
        <Mistake>Thinking that a sailor&apos;s life was an adventure. For most sailors it was hard, dangerous and badly paid work.</Mistake>
      </>,
    ),
  },
  {
    title: 'Scurvy and fresh food',
    content: slide(
      <>
        <Rule>Scurvy is an illness caused by too little vitamin C, which fresh fruit and vegetables contain. After weeks at sea without fresh food, sailors became weak, and their gums bled. Fresh fruit and vegetables cured it.</Rule>
        <FlowSteps
          aria="How scurvy happened. Fresh food runs out, sailors eat only dried and salted food for weeks, they get too little vitamin C and become ill, and fresh fruit and vegetables cure them."
          steps={[
            { label: 'Fresh food runs out' },
            { label: 'Only dried and salted food' },
            { label: 'Too little vitamin C: scurvy' },
            { label: 'Fresh fruit and vegetables cure it' },
          ]}
        />
        <Worked
          title="Why ships stopped on the way"
          steps={[
            <>Ships needed fresh water, fruit, vegetables and meat for the long voyage.</>,
            <>A safe harbour on the way let sailors rest and get well.</>,
            <>This was one reason why the southern tip of Africa mattered to ships sailing to Asia.</>,
          ]}
        />
        <Mistake>Thinking that scurvy was caused by a germ. It is caused by a lack of vitamin C.</Mistake>
      </>,
    ),
  },
  {
    title: 'Different jobs on a ship',
    content: slide(
      <>
        <Rule>A VOC ship carried people with different jobs. The captain was in charge, ordinary sailors did the heavy work, soldiers guarded the cargo, and a carpenter and a surgeon looked after the ship and the people.</Rule>
        <InfoTable
          cols={[{ title: 'Person', w: 34 }, { title: 'Job', w: 66 }]}
          rows={[
            ['Captain', 'In charge of the ship\nand the voyage'],
            ['Sailors', 'Sails, ropes, steering\nand cleaning'],
            ['Soldiers', 'Guarded the ship\nand its cargo'],
            ['Carpenter, surgeon', 'Repaired the ship;\ntreated the sick'],
          ]}
          aria="A table of jobs on a VOC ship. The captain was in charge of the ship and the voyage. Sailors worked the sails and ropes, steered and cleaned. Soldiers guarded the ship and its cargo. The carpenter repaired the ship and the surgeon treated the sick."
        />
        <Worked
          title="Who did what?"
          steps={[
            <>The captain made the big decisions.</>,
            <>The sailors did most of the hard daily work.</>,
            <>Everyone depended on each other to reach port safely.</>,
          ]}
        />
        <Mistake>Thinking that everyone on board was a sailor. A ship carried many kinds of workers.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <>
        <Check
          questions={[
            <>What does VOC stand for in English?</>,
            <>In which year was the VOC started?</>,
            <>Name one thing that made life hard on board.</>,
            <>What is scurvy caused by?</>,
          ]}
          answers={[
            <>The <strong>Dutch East India Company</strong>.</>,
            <><strong>{h.VOC_FOUNDED}</strong>.</>,
            <>Any one of: <strong>crowding, poor food, heavy work, storms, disease</strong>.</>,
            <>Too little <strong>vitamin C</strong>.</>,
          ]}
        />
      </>,
    ),
  },
];

// Literal bank (generated once from the lesson's helper; the bank test recomputes every key independently).
export const bank: HisItem[] = [
  { prompt: "Which country did the VOC come from?", options: ["The Netherlands","Portugal","Russia","Brazil"], answer: "The Netherlands", explanation: "The VOC was a Dutch company." },
  { prompt: "The letters VOC are short for a Dutch name. What is that name in English?", options: ["The Portuguese Royal Navy","The Dutch East India Company","The Cape Town Council","The Great Trek Society"], answer: "The Dutch East India Company", explanation: "VOC is short for Vereenigde Oostindische Compagnie." },
  { prompt: "The VOC began trading as a company in which year?", options: ["1402","1802","1602","1952"], answer: "1602", explanation: "The VOC was started in 1602." },
  { prompt: "Why did VOC ships sail to Asia?", options: ["To build railways in Asia", "To dig for coal in Asia", "To start new schools there", "To trade for spices and silk"], answer: "To trade for spices and silk", explanation: "The VOC made money by trading in goods from Asia." },
  { prompt: "What kind of organisation was the VOC?", options: ["A trading company","A kingdom","A school","An army only"], answer: "A trading company", explanation: "It was owned by merchants who wanted profit." },
  { prompt: "How long did a voyage to Asia take?", options: ["A few hours","Many months","One afternoon","Two days"], answer: "Many months", explanation: "Voyages were very long because ships had to go round Africa." },
  { prompt: "What did sailors mostly eat on long voyages?", options: ["Fresh green salads every day", "Ice cream and sweet cakes", "Hard biscuit and salted meat", "Hot pizza from the kitchen"], answer: "Hard biscuit and salted meat", explanation: "There was no fridge, so food was dried or salted." },
  { prompt: "What is scurvy?", options: ["A storm that hits ships at sea", "A kind of ship from Holland", "A tool used for finding north", "An illness from too little vitamin C"], answer: "An illness from too little vitamin C", explanation: "Scurvy came from a lack of fresh fruit and vegetables." },
  { prompt: "What cured scurvy?", options: ["Fresh fruit and vegetables","More salted meat","More hard biscuit","Longer voyages"], answer: "Fresh fruit and vegetables", explanation: "They contain vitamin C." },
  { prompt: "Why did ships stop at a harbour on the long voyage?", options: ["To sell the ship","To get fresh water and food","To change the flag","To repaint the sails"], answer: "To get fresh water and food", explanation: "Fresh water and food were needed for the voyage." },
  { prompt: "Who was in charge of a VOC ship?", options: ["The carpenter","The surgeon","The captain","The cook"], answer: "The captain", explanation: "The captain made the big decisions." },
  { prompt: "What did the ship's surgeon do?", options: ["Steered the ship","Guarded the cargo","Repaired the sails","Treated the sick"], answer: "Treated the sick", explanation: "The surgeon looked after sick people on board." },
  { prompt: "Which was a danger on a long voyage?", options: ["Storms and disease","Traffic jams","Electricity cuts","Aeroplanes"], answer: "Storms and disease", explanation: "Storms and illness killed many sailors." },
  { prompt: "Which is true about a sailor's life on a VOC ship?", options: ["It was easy and comfortable","It was hard, crowded and dangerous","It was short and quiet","It was well paid and safe"], answer: "It was hard, crowded and dangerous", explanation: "Sailors worked hard in crowded conditions." },
];

const VocSailors = () => (
  <HisTopic
    title="The VOC: journeys and a sailor's life"
    subtitle="The Dutch East India Company, and what life was like on a long voyage"
    learnSteps={learnSteps}
    task="gr6-voc-sailors-t2"
    bank={bank}
  />
);

export default VocSailors;
