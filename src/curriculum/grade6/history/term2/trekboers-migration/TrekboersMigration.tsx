import HisTopic from '../../_shared/HisTopic';
import { HisItem, LearnStep } from '../../_shared/types';
import ScaleTimeline from '@/components/diagrams/ScaleTimeline';

const learnSteps: LearnStep[] = [
  {
    title: 'Key Events — Timeline',
    content: (
      <div className="space-y-4">
        <p className="text-lg text-slate-600 text-center">Follow the sequence of key events for this topic:</p>
        <ScaleTimeline
          events={[
            {"date": "1652", "title": "Cape settlement begins", "description": "The Dutch established a refreshment station at the Cape. Over time, some settlers became livestock farmers who wanted more grazing land."},
            {"date": "1702", "title": "Farmers move beyond limits", "description": "Dutch free burghers were allowed to move beyond earlier settlement limits. This encouraged more semi-nomadic stock farmers to travel inland."},
            {"date": "1770s", "title": "Trekboers reach eastern frontier", "description": "By the late 1700s, Trekboers had moved far into frontier regions. Their search for water and grazing brought them into closer contact with African communities."},
            {"date": "1795", "title": "British rule increases tension", "description": "The first British occupation of the Cape changed frontier politics. Some settlers wanted greater independence from officials and new colonial controls."},
            {"date": "1830s", "title": "Great Trek follows frontier pattern", "description": "The Great Trek grew out of earlier frontier movement by Trekboers. It continued the pattern of wagon migration, livestock farming, and expansion away from the Cape."},
          ]}
        />
      </div>
    ),
  },
  {
    title: 'Who were the Trekboers?',
    image: {
      src: '/curriculum/grade6/his/term2/trekboers-migration/diagram.svg',
      alt: 'map showing Trekboer wagons and cattle moving inland from the Cape',
    },
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          <strong>Trekboers</strong> were Dutch-descended semi-nomadic farmers. Many moved inland
          from the Cape with their families, wagons, and livestock to find better
          <strong> grazing</strong> and water.
        </p>
        <div className="bg-amber-50 p-6 rounded-xl inline-flex flex-wrap items-center justify-center gap-3 text-xl font-bold text-slate-700">
          <span>families</span>
          <span className="text-slate-400">+</span>
          <span>wagons</span>
          <span className="text-slate-400">+</span>
          <span>cattle</span>
          <span className="text-slate-400">→</span>
          <span className="text-amber-700">inland grazing</span>
        </div>
      </div>
    ),
  },
  {
    title: 'Why they moved',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Trekboers needed large areas for their cattle and sheep. Some wanted more independence
          from officials at the Cape, while others moved because nearby grazing had become crowded
          or dry.
        </p>
        <div className="grid gap-3 md:grid-cols-3">
          <div className="rounded-xl bg-green-50 p-4"><strong>Grazing</strong><br />grass for animals</div>
          <div className="rounded-xl bg-blue-50 p-4"><strong>Water</strong><br />for people and livestock</div>
          <div className="rounded-xl bg-purple-50 p-4"><strong>Independence</strong><br />far from officials</div>
        </div>
      </div>
    ),
  },
  {
    title: 'Migration changed the frontier',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Trekboer migration brought settlers into areas used by <strong>Khoikhoi/San</strong> and
          <strong> Xhosa</strong> communities. This could lead to trade and cooperation, but also to
          conflict over land, water, and grazing.
        </p>
        <div className="bg-orange-50 p-6 rounded-xl text-slate-700">
          <p className="text-xl font-bold">Movement affected everyone on the frontier.</p>
          <p className="text-slate-600">New farms and herds changed access to important resources.</p>
        </div>
      </div>
    ),
  },
];

export const bank: HisItem[] = [
  { prompt: 'Who were the Trekboers?', options: ['Dutch-descended semi-nomadic farmers', 'British kings living in castles', 'Xhosa chiefs only', 'Sailors who never left the coast'], answer: 'Dutch-descended semi-nomadic farmers', explanation: 'Trekboers were mostly Dutch-descended farmers who moved with livestock.' },
  { prompt: 'Why did many Trekboers move inland?', options: ['To find grazing and water for livestock', 'To search for snow and penguins', 'To build airports', 'To sail directly to India'], answer: 'To find grazing and water for livestock', explanation: 'Their cattle and sheep needed pasture and water.' },
  { prompt: 'What does semi-nomadic mean in this topic?', options: ['Moving from place to place but not all the time', 'Living permanently in one city apartment', 'Travelling only by ship', 'Never owning animals'], answer: 'Moving from place to place but not all the time', explanation: 'Trekboers shifted their grazing areas when they needed new pasture.' },
  { prompt: 'Which animals were important to Trekboer farming?', options: ['Cattle and sheep', 'Polar bears and seals', 'Camels and elephants only', 'Dolphins and whales'], answer: 'Cattle and sheep', explanation: 'Trekboers kept livestock such as cattle and sheep.' },
  { prompt: 'From where did Trekboers generally move inland?', options: ['From the Cape', 'From Australia', 'From the Moon', 'From North America'], answer: 'From the Cape', explanation: 'They moved away from the Cape into the interior.' },
  { prompt: 'Which groups were affected by Trekboer movement into frontier areas?', options: ['Khoikhoi/San and Xhosa communities', 'Dutch farmers living in the Cape town', 'Sailors waiting in Table Bay harbour', 'Merchants who traded in Cape Town harbour'], answer: 'Khoikhoi/San and Xhosa communities', explanation: 'Trekboer migration affected communities who already used land and resources in those areas.' },
  { prompt: 'What could happen when Trekboers entered new grazing areas?', options: ['Trade, cooperation, or conflict could occur', 'All water disappeared instantly', 'No one noticed any change', 'Every family moved to a factory'], answer: 'Trade, cooperation, or conflict could occur', explanation: 'Frontier contact included different kinds of relationships.' },
  { prompt: 'Why did land matter to Trekboers?', options: ['Their livestock needed wide grazing areas', 'They needed land to launch rockets', 'They used land only for swimming', 'Land had no value to farmers'], answer: 'Their livestock needed wide grazing areas', explanation: 'Livestock farming required enough pasture.' },
  { prompt: 'Which statement best describes Trekboer migration?', options: ['It expanded settler presence inland from the Cape', 'It was a journey by airplane across the world', 'It ended before Europeans reached the Cape', 'It involved no animals or wagons'], answer: 'It expanded settler presence inland from the Cape', explanation: 'Trekboer movement increased settler presence in frontier regions.' },
  { kind: 'order', section: 'chronology', prompt: 'Put these events about the Trekboer migration in order, earliest first.', options: ['Cape settlement begins', 'Farmers move beyond limits', 'British rule increases tension', 'Great Trek follows frontier pattern'], answer: 'Cape settlement begins|Farmers move beyond limits|British rule increases tension|Great Trek follows frontier pattern', explanation: 'The dates are 1652, 1702, 1795 and 1830s.' },
];

const TrekboersMigration = () => (
  <HisTopic
    title="Trekboers & Migration"
    subtitle="Why Dutch-descended farmers moved inland"
    learnSteps={learnSteps}
    task="trekboers-migration"
    bank={bank}
  />
);

export default TrekboersMigration;
