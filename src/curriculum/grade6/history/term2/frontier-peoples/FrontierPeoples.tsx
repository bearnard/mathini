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
            {"date": "Before 1652", "title": "Khoikhoi and San communities live", "description": "Khoikhoi and San communities lived in southern Africa long before European settlement at the Cape. They used land, water, and grazing in ways shaped by local environments."},
            {"date": "1600s", "title": "Xhosa chiefdoms grow east", "description": "Xhosa-speaking communities were established across the eastern regions of southern Africa. They farmed, kept cattle, and formed powerful chiefdoms."},
            {"date": "1700s", "title": "Trekboers move inland", "description": "Dutch-descended Trekboers moved inland and eastward with livestock. Their movement increased contact, trade, and tension with other frontier peoples."},
            {"date": "1795", "title": "British arrive at Cape", "description": "British occupation added another powerful group to frontier history. The eastern frontier became an even more complex contact zone of cooperation and conflict."},
          ]}
        />
      </div>
    ),
  },
  {
    title: 'Many peoples lived near the frontier',
    image: {
      src: '/curriculum/grade6/his/term2/frontier-peoples/diagram.webp',
      alt: 'different groups of people with cattle on open grassland frontier',
    },
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          The eastern frontier was not empty. <strong>Khoikhoi/San</strong>, <strong>Xhosa</strong>,
          Dutch/Boer <strong>Trekboers</strong>, and later <strong>British</strong> settlers all lived,
          moved, traded, and farmed in or near this region.
        </p>
        <div className="grid gap-3 md:grid-cols-4">
          <div className="rounded-xl bg-amber-50 p-4"><strong>Khoikhoi/San</strong></div>
          <div className="rounded-xl bg-emerald-50 p-4"><strong>Xhosa</strong></div>
          <div className="rounded-xl bg-sky-50 p-4"><strong>Trekboers</strong></div>
          <div className="rounded-xl bg-indigo-50 p-4"><strong>British</strong></div>
        </div>
      </div>
    ),
  },
  {
    title: 'Land, water, and cattle mattered',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          People depended on <strong>land</strong>, <strong>water</strong>, and <strong>grazing</strong>
          for cattle and crops. As more settlers moved east, competition for these resources
          increased and sometimes led to tension.
        </p>
        <div className="bg-emerald-50 p-6 rounded-xl inline-flex flex-wrap items-center justify-center gap-3 text-xl font-bold text-slate-700">
          <span>land</span>
          <span className="text-slate-400">+</span>
          <span>water</span>
          <span className="text-slate-400">+</span>
          <span>cattle grazing</span>
        </div>
      </div>
    ),
  },
  {
    title: 'People also exchanged ideas and goods',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Frontier life included cooperation as well as conflict. People traded, worked for one
          another, shared skills, and formed communities. A balanced history remembers both
          everyday contact and the unfairness caused by colonial expansion.
        </p>
        <div className="grid gap-3 md:grid-cols-3">
          <div className="rounded-xl bg-blue-50 p-4"><strong>Trade</strong><br />goods and cattle</div>
          <div className="rounded-xl bg-green-50 p-4"><strong>Work</strong><br />farms and towns</div>
          <div className="rounded-xl bg-red-50 p-4"><strong>Tension</strong><br />land and power</div>
        </div>
      </div>
    ),
  },
];

export const bank: HisItem[] = [
  { prompt: 'Which groups lived in or near the eastern frontier?', options: ['Khoikhoi/San, Xhosa, Dutch/Boers, and British', 'Romans, Vikings, Aztecs, and Incas', 'Only British soldiers', 'Only Dutch sailors'], answer: 'Khoikhoi/San, Xhosa, Dutch/Boers, and British', explanation: 'The frontier was home to different African and settler communities.' },
  { prompt: 'What resources did frontier groups often compete for?', options: ['Land, water, and cattle grazing', 'Snow, oil, and polar bears', 'Factories, airports, and computers', 'Gold medals, ships, and silk'], answer: 'Land, water, and cattle grazing', explanation: 'Farming and herding depended on access to land, water, and grazing.' },
  { prompt: 'Who were the Xhosa?', options: ['An African farming and cattle-keeping people on the eastern frontier', 'A group of European kings', 'A company that owned all ships', 'A mountain range in Europe'], answer: 'An African farming and cattle-keeping people on the eastern frontier', explanation: 'Xhosa communities lived in the eastern parts of southern Africa and kept cattle and farmed.' },
  { prompt: 'Who were Trekboers?', options: ['Dutch-descended semi-nomadic farmers moving inland for grazing', 'British factory workers living in London', 'Sailors from India only', 'Gold miners from Johannesburg in 1652'], answer: 'Dutch-descended semi-nomadic farmers moving inland for grazing', explanation: 'Trekboers moved with livestock to find pasture and water.' },
  { prompt: 'Which word best describes the eastern frontier?', options: ['A changing contact zone between different communities', 'An empty place with no people', 'A single fenced farm owned by one person', 'A city built entirely of stone towers'], answer: 'A changing contact zone between different communities', explanation: 'The frontier was a region of movement, contact, trade, and conflict.' },
  { prompt: 'Why was cattle grazing important?', options: ['Cattle needed enough grass and water to survive', 'Cattle could read maps', 'Cattle were used to build ships', 'Cattle stopped all wars'], answer: 'Cattle needed enough grass and water to survive', explanation: 'Herders and farmers needed good grazing for their animals.' },
  { prompt: 'Which statement gives a balanced view of frontier life?', options: ['There was cooperation and conflict between communities', 'There was only peace and never any tension', 'There was only one group of people', 'No one needed land or water'], answer: 'There was cooperation and conflict between communities', explanation: 'People traded and worked together, but colonial expansion also caused conflict.' },
  { prompt: 'What does colonial expansion mean in this topic?', options: ['Settler control spreading into more land', 'The ocean becoming larger', 'Schools adding more classrooms only', 'Cattle learning to migrate alone'], answer: 'Settler control spreading into more land', explanation: 'Colonial expansion involved settlers and governments taking control of more territory.' },
];

const FrontierPeoples = () => (
  <HisTopic
    title="Peoples on the Frontier"
    subtitle="Communities, resources, and contact on the eastern frontier"
    learnSteps={learnSteps}
    task="frontier-peoples"
    bank={bank}
  />
);

export default FrontierPeoples;
