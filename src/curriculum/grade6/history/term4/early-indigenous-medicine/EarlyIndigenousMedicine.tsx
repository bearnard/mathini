import HisTopic from '../../_shared/HisTopic';
import { HisItem, LearnStep } from '../../_shared/types';
import Timeline from '@/components/subjects/Timeline';

const learnSteps: LearnStep[] = [
  {
    title: 'Key Events — Timeline',
    content: (
      <div className="space-y-4">
        <p className="text-lg text-slate-600 text-center">Follow the sequence of key events for this topic:</p>
        <Timeline
          events={[
            {"date": "Long before 1652", "title": "Plant remedies used widely", "description": "Indigenous communities in southern Africa used local plants, roots, and bark to treat illness and injury. This knowledge was built through observation and practice."},
            {"date": "1652", "title": "Cape records indigenous healing", "description": "After European settlement at the Cape began, some written accounts described local healing knowledge. These records show that indigenous medicine was already well established."},
            {"date": "1800s", "title": "Healer training continues", "description": "Across the 19th century, communities continued training izinyanga and izangoma through apprenticeship and oral teaching. Knowledge was passed carefully from one generation to the next."},
            {"date": "2007", "title": "Traditional healing recognised", "description": "South Africa passed the Traditional Health Practitioners Act in 2007. It formally recognised the role of traditional healers in the country."},
          ]}
        />
      </div>
    ),
  },
  {
    title: 'Healing knowledge from long ago',
    image: {
      src: '/curriculum/grade6/his/term4/early-indigenous-medicine/diagram.webp',
      alt: 'traditional healer with baskets of herbs and medicinal plants',
    },
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Long ago, people treated sickness using <strong>plants</strong>, <strong>herbs</strong>,
          roots, bark, and other natural remedies from their environment.
        </p>
        <div className="bg-emerald-50 p-6 rounded-xl inline-flex flex-wrap items-center justify-center gap-3 text-xl font-bold text-slate-700">
          <span>plants</span>
          <span className="text-slate-400">+</span>
          <span>knowledge</span>
          <span className="text-slate-400">→</span>
          <span className="text-emerald-700">healing remedies</span>
        </div>
      </div>
    ),
  },
  {
    title: 'Traditional healers in South Africa',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          In South Africa, traditional healers include the <strong>inyanga</strong>, who is often
          a herbalist, and the <strong>sangoma</strong>, who is often a diviner and spiritual healer.
          Their work is part of important indigenous knowledge systems.
        </p>
        <div className="grid gap-3 md:grid-cols-2">
          <div className="rounded-xl bg-green-50 p-4">
            <p className="font-bold text-emerald-700">Inyanga</p>
            <p className="text-slate-600">uses knowledge of medicinal plants</p>
          </div>
          <div className="rounded-xl bg-purple-50 p-4">
            <p className="font-bold text-purple-700">Sangoma</p>
            <p className="text-slate-600">helps with divination and spiritual healing</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Knowledge passed down generations',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Indigenous medical knowledge was learned by observing nature, listening to elders,
          and practising carefully. It was <strong>passed down from generation to generation</strong>
          and should be studied with respect.
        </p>
        <div className="rounded-xl bg-amber-50 p-6 text-lg text-slate-700">
          Respectful history asks: What did people know? How did they learn it? How did it help
          their communities?
        </div>
      </div>
    ),
  },
];

export const bank: HisItem[] = [
  { prompt: 'What did many people long ago use to treat sickness?', options: ['Plants, herbs, and natural remedies', 'Electric machines only', 'Plastic tablets made in factories', 'Space satellites'], answer: 'Plants, herbs, and natural remedies', explanation: 'Many early remedies came from plants, herbs, roots, bark, and other natural materials.' },
  { prompt: 'What is an inyanga often known for in South Africa?', options: ['Using knowledge of medicinal plants', 'Building stone castles', 'Sailing across oceans', 'Printing modern newspapers'], answer: 'Using knowledge of medicinal plants', explanation: 'An inyanga is often a herbalist who uses indigenous knowledge of plants.' },
  { prompt: 'What is a sangoma often connected with?', options: ['Divination and spiritual healing', 'Surgery and hospital nursing', 'Selling medicine in pharmacies', 'Teaching biology at a large university'], answer: 'Divination and spiritual healing', explanation: 'A sangoma is often a diviner and spiritual healer in South African traditions.' },
  { prompt: 'How was indigenous medical knowledge often passed on?', options: ['From generation to generation', 'Only through television adverts', 'By guessing without learning', 'Through space messages'], answer: 'From generation to generation', explanation: 'Elders and trained healers passed knowledge to younger generations.' },
  { prompt: 'Why did people use local plants for medicine?', options: ['They learned which plants could help', 'Plants were all made of metal', 'No one ever became sick', 'The plants could write instructions'], answer: 'They learned which plants could help', explanation: 'People observed nature and learned from experience which natural remedies were useful.' },
  { prompt: 'What attitude should we have when learning about indigenous knowledge?', options: ['Respectful and careful', 'Mocking and careless', 'Ignoring all evidence', 'Pretending it never existed'], answer: 'Respectful and careful', explanation: 'Indigenous knowledge is an important part of history and culture.' },
  { prompt: 'Which pair correctly names two South African traditional healers?', options: ['Inyanga and sangoma', 'Astronaut and pilot', 'Miner and sailor', 'Judge and banker'], answer: 'Inyanga and sangoma', explanation: 'Inyanga and sangoma are examples of traditional healers in South Africa.' },
  { prompt: 'What is a natural remedy?', options: ['A treatment made from natural materials', 'A map of railway stations', 'A machine for counting money', 'A type of modern television'], answer: 'A treatment made from natural materials', explanation: 'Natural remedies may use plants, herbs, roots, or bark.' },
  { prompt: 'What helped early communities build medical knowledge?', options: ['Observation, practice, and teaching', 'Only random luck every time', 'Refusing to learn from elders', 'Throwing away all plant knowledge'], answer: 'Observation, practice, and teaching', explanation: 'Knowledge grew through careful observation, practice, and learning from others.' },
  { kind: 'order', section: 'chronology', prompt: 'Put these events about indigenous healing in South Africa in order, earliest first.', options: ['Plant remedies used widely', 'Cape records indigenous healing', 'Healer training continues', 'Traditional healing recognised'], answer: 'Plant remedies used widely|Cape records indigenous healing|Healer training continues|Traditional healing recognised', explanation: 'The dates are Long before 1652, 1652, 1800s and 2007.' },
];

const EarlyIndigenousMedicine = () => (
  <HisTopic
    title="Early & Indigenous Medicine"
    subtitle="How people used nature and knowledge to heal"
    learnSteps={learnSteps}
    task="early-indigenous-medicine"
    bank={bank}
  />
);

export default EarlyIndigenousMedicine;
