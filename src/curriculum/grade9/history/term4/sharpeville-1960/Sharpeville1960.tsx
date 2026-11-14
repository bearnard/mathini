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
            {"date": "21 Mar 1960", "title": "PAC leads pass protest", "description": "The Pan Africanist Congress organized a protest in Sharpeville against pass laws. Demonstrators gathered unarmed to challenge a key instrument of apartheid control."},
            {"date": "21 Mar 1960", "title": "Police open fire", "description": "Police shot into the crowd, killing 69 people and wounding about 180 others. The massacre became a turning point in South African history."},
            {"date": "30 Mar 1960", "title": "State of emergency declared", "description": "The government responded with emergency powers, mass arrests, and tighter repression. Civil liberties were sharply restricted as the state tried to crush resistance."},
            {"date": "1 Apr 1960", "title": "World condemns Sharpeville", "description": "The United Nations Security Council criticized South Africa after the massacre. Sharpeville helped turn apartheid into an international issue."},
            {"date": "8 Apr 1960", "title": "ANC and PAC banned", "description": "The apartheid government outlawed both the ANC and PAC. Legal political opposition was blocked, pushing the liberation struggle into a new phase."},
            {"date": "16 Dec 1961", "title": "MK launches sabotage campaign", "description": "The ANC's armed wing, Umkhonto we Sizwe, began sabotage operations after peaceful protest had been brutally suppressed. Sharpeville was a major reason for this strategic shift."},
          ]}
        />
      </div>
    ),
  },
  {
    title: 'The PAC and the Sharpeville Massacre',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          On March 21, 1960, the <strong>Pan Africanist Congress</strong> (PAC) organized a protest against pass laws 
          in Sharpeville. Police opened fire on unarmed protesters, killing 69 people and wounding 180. 
          This <strong>Sharpeville Massacre</strong> became a turning point—it shattered hope in peaceful protest 
          and changed the anti-apartheid struggle forever.
        </p>
        <div className="bg-red-50 p-6 rounded-xl inline-block text-slate-700">
          <strong>Massacre:</strong> March 21, 1960; 69 killed; Unarmed civilians
        </div>
      </div>
    ),
  },
  {
    title: 'State of Emergency and banning',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          After Sharpeville, the government declared a <strong>state of emergency</strong>. The ANC and PAC were 
          <strong>banned</strong> (outlawed). Freedom of speech and assembly were suspended. Protesters were arrested 
          and imprisoned. The apartheid state showed it would use any violence to maintain control.
        </p>
        <div className="bg-amber-50 p-6 rounded-xl inline-block text-slate-700">
          <strong>Repression:</strong> Emergency laws; Banning; Mass arrests; Increased violence
        </div>
      </div>
    ),
  },
  {
    title: 'International response and sanctions',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          The Sharpeville Massacre shocked the world. International condemnation was swift. South Africa was 
          criticized at the United Nations. Gradually, countries imposed economic and cultural <strong>sanctions</strong>, 
          isolating apartheid South Africa. The massacre accelerated global opposition.
        </p>
        <div className="bg-blue-50 p-6 rounded-xl inline-block text-slate-700">
          <strong>Global:</strong> UN condemnation; International sanctions; Boycotts
        </div>
      </div>
    ),
  },
  {
    title: 'Armed struggle begins',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          After Sharpeville, the ANC formed an armed wing, <strong>Umkhonto we Sizwe</strong> (MK—"Spear of the Nation"), 
          led by Nelson Mandela. Armed resistance began in December 1961. Though continuing to pursue negotiation, 
          the anti-apartheid movement now adopted armed struggle as part of its strategy against apartheid.
        </p>
        <div className="bg-indigo-50 p-6 rounded-xl inline-block text-slate-700">
          <strong>Armed struggle:</strong> MK formed 1961; Armed resistance begins
        </div>
      </div>
    ),
  },
];

const bank: HisItem[] = [
  { prompt: 'What was the Sharpeville Massacre?', options: ['Police killed 69 unarmed protesters on 21 March 1960', 'A military battle between the army and rebels', 'A protest march that ended without violence', 'A government building that was burned down in 1960'], answer: 'Police killed 69 unarmed protesters on 21 March 1960', explanation: 'Sharpeville was a turning point—police opened fire on a peaceful pass law protest.' },
  { prompt: 'How many people were killed in the Sharpeville Massacre?', options: ['69', '30', '100', '200'], answer: '69', explanation: 'Police fire killed 69 people and wounded 180 in the massacre.' },
  { prompt: 'Who organized the protest at Sharpeville?', options: ['The Pan Africanist Congress (PAC)', 'The ANC', 'The government', 'International protestors'], answer: 'The Pan Africanist Congress (PAC)', explanation: 'The PAC organized a pass law protest that ended in massacre.' },
  { prompt: 'What happened to the ANC and PAC after Sharpeville?', options: ['They were banned by the government', 'They became legal parties after the events', 'They merged to form one large party', 'Nothing changed in their legal position'], answer: 'They were banned by the government', explanation: 'The apartheid state banned both organizations and increased repression.' },
  { prompt: 'What was a state of emergency?', options: ['A suspension of normal laws and rights, with wide state powers', 'A weather warning that is issued in a bad storm', 'A declaration that is made after a natural disaster', 'A military exercise that is held on the borders'], answer: 'A suspension of normal laws and rights, with wide state powers', explanation: 'A state of emergency allowed the government to arrest, detain, and suppress without normal legal limits.' },
  { prompt: 'How did the world react to the Sharpeville Massacre?', options: ['Condemnation abroad and slow sanctions against South Africa', 'Approval from most governments of the world', 'No reaction at all from other countries', 'Support for the government in most countries'], answer: 'Condemnation abroad and slow sanctions against South Africa', explanation: 'The massacre accelerated international opposition and economic pressure on apartheid South Africa.' },
  { prompt: 'What was Umkhonto we Sizwe (MK)?', options: ['The armed wing of the ANC, formed in 1961', 'A police force that served the government', 'A government agency that ran the homelands', 'A cultural group that staged protest plays'], answer: 'The armed wing of the ANC, formed in 1961', explanation: 'MK was established to conduct armed resistance against apartheid.' },
  { prompt: 'Why did the anti-apartheid movement turn to armed struggle?', options: ['Peaceful protest was crushed and legal routes were closed', 'The leaders liked violence better than talks', 'Foreign countries demanded the use of arms', 'It was planned from the very start of the struggle'], answer: 'Peaceful protest was crushed and legal routes were closed', explanation: 'After Sharpeville and banning, the movement saw armed struggle as a necessary last resort.' },
];

const Sharpeville1960 = () => (
  <HisTopic
    title="Sharpeville 1960"
    subtitle="Massacre, state repression, international sanctions, and armed struggle"
    learnSteps={learnSteps}
    task="gr9-sharpeville-1960-t4"
    bank={bank}
  />
);

export default Sharpeville1960;
