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
            {"date": "1779", "title": "First frontier war begins", "description": "The first major frontier war broke out between settlers and Xhosa groups on the eastern frontier. Competition over land, cattle, and grazing helped cause the conflict."},
            {"date": "1811–1812", "title": "Fourth war clears Zuurveld", "description": "British-led forces drove many Xhosa west of the Fish River from the Zuurveld. This showed how colonial power increased pressure on African communities."},
            {"date": "1834–1835", "title": "Sixth war spreads widely", "description": "A major frontier war spread across the eastern Cape after rising tensions and attacks. It caused severe hardship and loss on all sides."},
            {"date": "1850–1853", "title": "Eighth war devastates frontier", "description": "The War of Mlanjeni was one of the longest and most destructive frontier wars. Communities suffered from deaths, destruction, and loss of land."},
            {"date": "1877–1879", "title": "Ninth war ends", "description": "The last of the frontier wars ended in the late 1870s. It marked the end of a long series of conflicts tied to colonial expansion on the eastern frontier."},
          ]}
        />
      </div>
    ),
  },
  {
    title: 'The eastern frontier expanded',
    image: {
      src: '/curriculum/grade6/his/term2/frontier-conflicts/diagram.svg',
      alt: 'map of Cape Colony expanding east toward a meeting point with the Xhosa',
    },
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          As the Cape Colony grew, settlers moved further <strong>east</strong>. This brought them into
          closer contact with <strong>Xhosa</strong> communities already living in the region.
        </p>
        <div className="bg-orange-50 p-6 rounded-xl inline-flex flex-wrap items-center justify-center gap-3 text-xl font-bold text-slate-700">
          <span>Cape Colony</span>
          <span className="text-slate-400">→</span>
          <span className="text-orange-700">eastern frontier</span>
          <span className="text-slate-400">↔</span>
          <span>Xhosa communities</span>
        </div>
      </div>
    ),
  },
  {
    title: 'Why conflicts happened',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Frontier conflicts were connected to <strong>land</strong>, <strong>water</strong>,
          <strong> cattle</strong>, and political power. Raids, reprisals, and unfair colonial policies
          made tensions worse.
        </p>
        <div className="grid gap-3 md:grid-cols-4">
          <div className="rounded-xl bg-green-50 p-4"><strong>Land</strong></div>
          <div className="rounded-xl bg-blue-50 p-4"><strong>Water</strong></div>
          <div className="rounded-xl bg-amber-50 p-4"><strong>Cattle</strong></div>
          <div className="rounded-xl bg-red-50 p-4"><strong>Power</strong></div>
        </div>
      </div>
    ),
  },
  {
    title: 'A series of frontier wars',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          The frontier wars were not one single fight. They were a <strong>series of conflicts</strong>,
          mainly between settlers and the <strong>Xhosa</strong>, over many years. These wars caused
          loss of life, loss of land, and hardship for communities.
        </p>
        <div className="bg-red-50 p-6 rounded-xl text-slate-700">
          <p className="text-xl font-bold">History should be studied carefully and respectfully.</p>
          <p className="text-slate-600">People on all sides were affected, but colonial expansion placed great pressure on African communities.</p>
        </div>
      </div>
    ),
  },
];

export const bank: HisItem[] = [
  { prompt: 'What happened as the Cape Colony expanded east?', options: ['Settlers came into closer contact with Xhosa communities', 'Settlers moved onto land that nobody was using at the time', 'Settlers returned to Cape Town to avoid conflict', 'The eastern frontier was closed to settlers for good'], answer: 'Settlers came into closer contact with Xhosa communities', explanation: 'Eastward expansion increased contact and tension on the frontier.' },
  { prompt: 'The frontier wars were mainly between which groups?', options: ['Settlers and the Xhosa', 'Romans and Vikings', 'Aztecs and Incas', 'British and Australians'], answer: 'Settlers and the Xhosa', explanation: 'The Cape frontier wars mainly involved settlers and Xhosa communities.' },
  { prompt: 'Which was a major cause of frontier conflict?', options: ['Competition for land, water, and cattle', 'Competition for snowfields', 'A shortage of computers', 'Arguments about space travel'], answer: 'Competition for land, water, and cattle', explanation: 'These resources were essential for farming and herding.' },
  { prompt: 'What does the phrase “series of conflicts” mean?', options: ['More than one conflict over time', 'One short argument only', 'A peaceful market day', 'A list of ship names'], answer: 'More than one conflict over time', explanation: 'The frontier wars happened at different times over many years.' },
  { prompt: 'Which community was already living in the eastern region when many settlers moved east?', options: ['Xhosa communities', 'Canadian fur traders', 'Ancient Romans', 'Spanish cowboys only'], answer: 'Xhosa communities', explanation: 'Xhosa communities lived in the eastern parts of southern Africa.' },
  { prompt: 'How did colonial policies affect the frontier?', options: ['They often increased pressure on African communities', 'They made all land disputes vanish', 'They stopped settlers from moving anywhere', 'They turned farms into oceans'], answer: 'They often increased pressure on African communities', explanation: 'Colonial expansion and laws often disadvantaged African communities.' },
  { prompt: 'Which result of frontier wars is historically accurate?', options: ['Loss of life, loss of land, and hardship', 'Everyone became wealthy immediately', 'No communities were affected', 'The frontier became a theme park'], answer: 'Loss of life, loss of land, and hardship', explanation: 'Wars harmed communities and changed control of land.' },
  { prompt: 'Why should this history be studied respectfully?', options: ['Real communities suffered and were affected for generations', 'It happened so long ago that it can no longer affect anyone today', 'Most of the stories were invented later on', 'Only soldiers and leaders were involved in it'], answer: 'Real communities suffered and were affected for generations', explanation: 'Conflict and colonial expansion had serious human effects.' },
  { prompt: 'On a map of the Cape frontier, which direction did expansion generally move?', options: ['Eastward from the Cape Colony', 'Northward from Egypt', 'Westward from Australia', 'Southward from Europe'], answer: 'Eastward from the Cape Colony', explanation: 'Settler expansion at the Cape frontier moved mainly east from the colony.' },
];

const FrontierConflicts = () => (
  <HisTopic
    title="Frontier Conflicts"
    subtitle="Land, cattle, power, and the eastern frontier wars"
    learnSteps={learnSteps}
    task="frontier-conflicts"
    bank={bank}
  />
);

export default FrontierConflicts;
