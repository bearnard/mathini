import HisTopic from '../../_shared/HisTopic';
import type { HisItem, LearnStep } from '../../_shared/types';
import { Check, Mistake, Rule, Worked } from '../../../../../components/subjects/lesson/LessonBlocks';
import { FlowSteps } from '../../../../../components/diagrams/lifesci/LifeFlows';
import { InfoTable } from '../../../../../components/diagrams/lifesci/InfoTable';

// CAPS Grade 6 History Term 1: golden rhinoceroses and other golden objects (symbols of royal power), trade across Africa and across the Indian Ocean
// (globalisation), goods traded, people's journeys on foot (routes, dangers, finding the way), and Mapungubwe today (World Heritage Site and the Order of
// Mapungubwe). Told as an African achievement. Facts to confirm are in docs/notes/g6-history-doubts.md.
const slide = (children: React.ReactNode) => <div className="space-y-4 text-left">{children}</div>;

export const learnSteps: LearnStep[] = [
  {
    title: 'Gold and the golden rhinoceros',
    content: slide(
      <>
        <Rule>In royal graves on Mapungubwe Hill, archaeologists found golden objects, including a small golden rhinoceros, a golden bowl and a golden sceptre. The golden objects were symbols of royal power and political leadership. They were found in the 1930s.</Rule>
        <InfoTable
          cols={[{ title: 'Object', w: 34 }, { title: 'What it shows', w: 66 }]}
          rows={[
            ['Golden rhinoceros', 'A symbol of the power of the\nking'],
            ['Golden bowl and sceptre', 'The king was a powerful leader\nwith great wealth'],
            ['Where they were found', 'In royal graves on the hill'],
          ]}
          aria="A table of golden objects found at Mapungubwe. The golden rhinoceros is a symbol of the power of the king. The golden bowl and sceptre show that the king was a powerful leader with great wealth. They were found in royal graves on the hill."
        />
        <Worked
          title="What the gold tells us"
          steps={[
            <>The people of Mapungubwe worked gold into fine objects, so they were skilled craftspeople.</>,
            <>Gold was buried only with the leaders, which shows the difference between leaders and ordinary people.</>,
            <>The rhinoceros is a strong animal, a fitting sign of a king&apos;s power.</>,
          ]}
        />
        <Mistake>Thinking that the gold objects were only treasure. For the people of Mapungubwe they were symbols of the king&apos;s power and leadership.</Mistake>
      </>,
    ),
  },
  {
    title: 'Trade across Africa and the Indian Ocean',
    content: slide(
      <>
        <Rule>Mapungubwe was part of a wide trade network. Traders carried gold and ivory from Mapungubwe to the east coast of Africa. From the coast, goods crossed the Indian Ocean to distant lands. Glass beads and cloth came back. Places far apart were joined by trade: this is called globalisation.</Rule>
        <FlowSteps
          aria="The path of trade. Gold and ivory leave Mapungubwe, are carried on foot to the east coast of Africa, are shipped across the Indian Ocean to distant lands, and glass beads and cloth come back the same way."
          steps={[
            { label: 'Gold and ivory leave Mapungubwe' },
            { label: 'Carried on foot to the east coast' },
            { label: 'Shipped across the Indian Ocean' },
            { label: 'Glass beads and cloth come back' },
          ]}
        />
        <Worked
          title="Goods traded"
          steps={[
            <><strong>Sent away:</strong> gold and ivory.</>,
            <><strong>Received:</strong> glass beads and cloth from across the Indian Ocean.</>,
            <>The people of Mapungubwe were connected to a world much wider than the Limpopo Valley.</>,
          ]}
        />
        <Mistake>Thinking that the people of Mapungubwe were cut off from the rest of the world. They traded with faraway lands more than 700 years ago.</Mistake>
      </>,
    ),
  },
  {
    title: 'Journeys on foot',
    content: slide(
      <>
        <Rule>Traders walked between Mapungubwe and the east coast. The journey took a long time and was dangerous. Travellers followed known routes, often along rivers, and found their way by landmarks such as hills and rivers.</Rule>
        <InfoTable
          cols={[{ title: 'Danger', w: 46 }, { title: 'How travellers coped', w: 54 }]}
          rows={[
            ['Wild animals', 'Travelled in groups and\nkept watch'],
            ['Lack of water', 'Followed rivers and knew\nwhere water was'],
            ['Getting lost', 'Used landmarks, the sun\nand local guides'],
          ]}
          aria="A table of dangers on the journey. Wild animals: travellers travelled in groups and kept watch. Lack of water: they followed rivers and knew where water was. Getting lost: they used landmarks, the sun and local guides."
        />
        <Worked
          title="Finding the way without maps"
          steps={[
            <>Travellers remembered landmarks such as hills, rivers and trees.</>,
            <>They used the position of the sun and stars to know the direction.</>,
            <>Local guides and villagers along the route helped them.</>,
          ]}
        />
        <Mistake>Thinking that people could not travel far long ago. Traders walked long distances along routes they knew well.</Mistake>
      </>,
    ),
  },
  {
    title: 'Mapungubwe today',
    content: slide(
      <>
        <Rule>Today Mapungubwe is a World Heritage Site: the Mapungubwe Cultural Landscape was named a World Heritage Site in 2003, because it is important to the history of all people. The Order of Mapungubwe is a South African honour, created in 2002, that is given for outstanding achievement.</Rule>
        <InfoTable
          cols={[{ title: 'Today', w: 38 }, { title: 'What it means', w: 62 }]}
          rows={[
            ['World Heritage Site', 'Named in 2003; the place is\nprotected for everyone'],
            ['Order of Mapungubwe', 'A South African honour created\nin 2002'],
            ['Golden rhinoceros', 'Remembered as a symbol of the\nkingdom'],
          ]}
          aria="A table about Mapungubwe today. World Heritage Site: named in 2003, and the place is protected for everyone. Order of Mapungubwe: a South African honour created in 2002. The golden rhinoceros is remembered as a symbol of the kingdom."
        />
        <Worked
          title="Why we remember Mapungubwe"
          steps={[
            <>It was the first state in southern Africa, built by the people of the region.</>,
            <>It shows that southern Africa was part of world trade long ago.</>,
            <>Its name is used to honour South Africans who achieve great things.</>,
          ]}
        />
        <Mistake>Thinking that a World Heritage Site belongs to one person. It is protected because it is important to all humanity.</Mistake>
      </>,
    ),
  },
  {
    title: 'Check yourself',
    content: slide(
      <>
        <Check
          questions={[
            <>What did the golden rhinoceros stand for?</>,
            <>Name two goods that left Mapungubwe and one that came back.</>,
            <>Name one danger of the journey and how travellers coped.</>,
            <>When was Mapungubwe named a World Heritage Site?</>,
          ]}
          answers={[
            <>The <strong>power of the king</strong>.</>,
            <>Gold and ivory left. <strong>Glass beads</strong> (or cloth) came back.</>,
            <>For example <strong>lack of water</strong>: they followed rivers.</>,
            <>In <strong>2003</strong>.</>,
          ]}
        />
      </>,
    ),
  },
];

// Literal bank (generated once from the lesson's helper; the bank test recomputes every key independently).
export const bank: HisItem[] = [
  { prompt: "Which small golden object was found in a royal grave on Mapungubwe Hill?", options: ["A golden rhinoceros","A golden ship","A golden clock","A golden crown from Europe"], answer: "A golden rhinoceros", explanation: "A small golden rhinoceros was found in a royal grave on the hill." },
  { prompt: "What did the golden objects at Mapungubwe show?", options: ["That the people were poor","Royal power and political leadership","That the king was a sailor","That all people had gold"], answer: "Royal power and political leadership", explanation: "The golden objects were symbols of the power of the king." },
  { prompt: "In which years were the golden objects found at Mapungubwe?", options: ["In AD 1220","In 1994","In the 1930s","In 2003"], answer: "In the 1930s", explanation: "Archaeologists found the golden objects in the 1930s. The kingdom was much older, from AD 1220 to 1300." },
  { prompt: "What is globalisation, as seen in the trade of Mapungubwe?", options: ["Moving a town to a new hill", "Building a long stone wall", "Making gold out of stones", "Far-apart places joined by trade"], answer: "Far-apart places joined by trade", explanation: "Trade across Africa and the Indian Ocean joined places far apart." },
  { prompt: "Which goods did the traders of Mapungubwe send away?", options: ["Gold and ivory","Glass beads and cloth","Cars and radios","Guns and horses"], answer: "Gold and ivory", explanation: "Gold and ivory were sent to the east coast and across the Indian Ocean." },
  { prompt: "Which goods came back from across the Indian Ocean?", options: ["Gold and ivory","Glass beads and cloth","Maize and cattle","Stone and clay"], answer: "Glass beads and cloth", explanation: "Glass beads and cloth came back to Mapungubwe." },
  { prompt: "How did traders usually travel between Mapungubwe and the east coast?", options: ["By train","By aeroplane","On foot","By car"], answer: "On foot", explanation: "Traders walked long distances along known routes." },
  { prompt: "Which of these was a danger on the journeys?", options: ["Traffic jams on the road", "Broken computers at work", "Delays at the airport gate", "Wild animals and lack of water"], answer: "Wild animals and lack of water", explanation: "Travellers faced wild animals, lack of water and the risk of getting lost." },
  { prompt: "How could travellers find their way without maps?", options: ["By knowing hills and rivers", "By using a phone GPS", "By following a highway sign", "By reading a road atlas"], answer: "By knowing hills and rivers", explanation: "Travellers remembered landmarks, used the sun and stars, and asked local guides." },
  { prompt: "Which ocean did the goods cross after leaving the east coast of Africa?", options: ["The Atlantic Ocean","The Indian Ocean","The Arctic Ocean","The Pacific Ocean"], answer: "The Indian Ocean", explanation: "Goods were shipped across the Indian Ocean to distant lands." },
  { prompt: "In which year was the Mapungubwe Cultural Landscape named a World Heritage Site?", options: ["1933","1220","2003","1994"], answer: "2003", explanation: "The Mapungubwe Cultural Landscape became a World Heritage Site in 2003." },
  { prompt: "The Order of Mapungubwe, created in 2002, is which kind of thing?", options: ["A kind of medicine for fever", "A heavy bar of pure gold", "A boarding school for boys", "A South African national honour"], answer: "A South African national honour", explanation: "The Order of Mapungubwe is a South African honour, created in 2002." },
  { prompt: "The people of Mapungubwe traded with the east coast. What does this show?", options: ["They were part of a wide trade network","They never left the valley","They were enemies of all traders","They had no gold"], answer: "They were part of a wide trade network", explanation: "Trade shows that Mapungubwe was joined to a wide network across Africa and the Indian Ocean." },
  { prompt: "Mapungubwe is a World Heritage Site. What does this mean?", options: ["It is a large private farm", "It is protected for all people", "It is closed to everyone", "It belongs to one mining company"], answer: "It is protected for all people", explanation: "A World Heritage Site is protected because it is important to people everywhere." },
];

const MapungubweTradeToday = () => (
  <HisTopic
    title="Mapungubwe: gold, trade and journeys"
    subtitle="The golden rhinoceros, trade across the Indian Ocean, journeys on foot and Mapungubwe today"
    learnSteps={learnSteps}
    task="gr6-mapungubwe-trade-today-t1"
    bank={bank}
  />
);

export default MapungubweTradeToday;
