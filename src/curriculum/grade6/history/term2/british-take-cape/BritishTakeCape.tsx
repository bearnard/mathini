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
            {"date": "1488", "title": "Dias rounds the Cape", "description": "Bartolomeu Dias sailed around the southern tip of Africa. His voyage showed that the Cape lay on an important sea route to the East."},
            {"date": "1652", "title": "Dutch station founded", "description": "Jan van Riebeeck established a Dutch refreshment station at the Cape. Ships could stop there for water, food, and repairs."},
            {"date": "1795", "title": "Britain first occupies Cape", "description": "Britain captured the Cape from the Dutch during the wars in Europe. The Cape mattered because it helped protect the sea route to India and the East."},
            {"date": "1806", "title": "Britain wins again", "description": "Britain took the Cape again after the Battle of Blaauwberg. From then on, British control lasted for many years."},
            {"date": "1834", "title": "Slavery is abolished", "description": "Slavery was abolished in the Cape Colony under British rule. This was a major change, even though equality did not come immediately."},
          ]}
        />
      </div>
    ),
  },
  {
    title: 'Why the Cape was important',
    image: {
      src: '/curriculum/grade6/his/term2/british-take-cape/diagram.webp',
      alt: 'old sailing ships in Table Bay below a flat-topped mountain',
    },
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          The <strong>Cape</strong> was important because ships could stop there for fresh water,
          food, and repairs on the long sea route between Europe and <strong>India and the East</strong>.
        </p>
        <div className="bg-sky-50 p-6 rounded-xl inline-flex flex-wrap items-center justify-center gap-3 text-xl font-bold text-slate-700">
          <span>Europe</span>
          <span className="text-slate-400">→</span>
          <span className="text-sky-700">Cape stop</span>
          <span className="text-slate-400">→</span>
          <span>India and the East</span>
        </div>
      </div>
    ),
  },
  {
    title: 'Britain takes control twice',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Britain first took the Cape from the Dutch in <strong>1795</strong>. The Dutch later
          regained it for a short time, but Britain took the Cape again in <strong>1806</strong> and
          then kept control for many years.
        </p>
        <div className="grid gap-3 md:grid-cols-2">
          <div className="rounded-xl bg-indigo-50 p-4">
            <p className="font-bold text-indigo-700">1795</p>
            <p className="text-slate-600">first British occupation</p>
          </div>
          <div className="rounded-xl bg-amber-50 p-4">
            <p className="font-bold text-amber-700">1806</p>
            <p className="text-slate-600">British take the Cape again</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Changes under British rule',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          British rule brought new laws, officials, and settlers. One major change was that
          <strong> slavery at the Cape was abolished in 1834</strong>. Freedom did not immediately
          mean equality, but it was an important turning point.
        </p>
        <div className="bg-purple-50 p-6 rounded-xl inline-flex flex-wrap items-center justify-center gap-3 text-xl font-bold text-slate-700">
          <span>new government</span>
          <span className="text-slate-400">•</span>
          <span>new settlers</span>
          <span className="text-slate-400">•</span>
          <span className="text-purple-700">slavery abolished in 1834</span>
        </div>
      </div>
    ),
  },
];

export const bank: HisItem[] = [
  { prompt: 'Why was the Cape important to European powers?', options: ['It was a useful stop on the sea route to India and the East', 'It had the largest gold mines in the world', 'It was the capital city of Britain', 'It was the only place where ships could be built'], answer: 'It was a useful stop on the sea route to India and the East', explanation: 'Ships used the Cape for supplies and repairs on long voyages.' },
  { prompt: 'From whom did Britain first take the Cape in 1795?', options: ['The Dutch', 'The Portuguese', 'The French', 'The Spanish'], answer: 'The Dutch', explanation: 'The Cape had been under Dutch control before the British occupation of 1795.' },
  { prompt: 'In which year did Britain first take the Cape?', options: ['1795', '1652', '1806', '1834'], answer: '1795', explanation: 'Britain first occupied the Cape in 1795.' },
  { prompt: 'In which year did Britain take the Cape again?', options: ['1806', '1795', '1815', '1834'], answer: '1806', explanation: 'Britain took the Cape again in 1806 and kept control for many years.' },
  { prompt: 'Which route made the Cape especially valuable?', options: ['The sea route to India and the East', 'The railway route to Egypt', 'The road route to North America', 'The river route to Australia'], answer: 'The sea route to India and the East', explanation: 'The Cape was a strategic stopping point for ships sailing between Europe and Asia.' },
  { prompt: 'What major change happened at the Cape in 1834?', options: ['Slavery was abolished', 'The Dutch first arrived', 'The Cape became an island', 'Gold was discovered at Table Mountain'], answer: 'Slavery was abolished', explanation: 'Slavery at the Cape was abolished in 1834.' },
  { prompt: 'Why did ships stop at the Cape?', options: ['To get fresh water, food, and repairs', 'To cross a desert by camel', 'To mine diamonds on every voyage', 'To avoid all ocean travel'], answer: 'To get fresh water, food, and repairs', explanation: 'The Cape was a refreshment station for ships on long journeys.' },
  { prompt: 'Which statement is most accurate about British rule at the Cape?', options: ['It brought new laws, officials, and settlers', 'It ended all conflict immediately', 'It removed the need for sea travel', 'It made everyone equal overnight'], answer: 'It brought new laws, officials, and settlers', explanation: 'British control changed government and society, but problems and inequalities continued.' },
  { prompt: 'What mountain is closely linked with Table Bay and Cape Town?', options: ['Table Mountain', 'Mount Everest', 'Kilimanjaro', 'Drakensberg only'], answer: 'Table Mountain', explanation: 'Table Mountain is the flat-topped mountain overlooking Table Bay.' },
  { kind: 'order', section: 'chronology', prompt: 'Put these events about the Cape changing hands in order, earliest first.', options: ['Dias rounds the Cape', 'Dutch station founded', 'Britain first occupies Cape', 'Britain wins again', 'Slavery is abolished'], answer: 'Dias rounds the Cape|Dutch station founded|Britain first occupies Cape|Britain wins again|Slavery is abolished', explanation: 'The dates are 1488, 1652, 1795, 1806 and 1834.' },
];

const BritishTakeCape = () => (
  <HisTopic
    title="The British Take the Cape"
    subtitle="Why Britain wanted the Cape and how rule changed"
    learnSteps={learnSteps}
    task="british-take-cape"
    bank={bank}
  />
);

export default BritishTakeCape;
