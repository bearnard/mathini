import GeoTopic from '../../_shared/GeoTopic';
import { GeoItem, LearnStep } from '../../_shared/types';
import DataChart from '@/components/subjects/DataChart';


const learnSteps: LearnStep[] = [
  {
    title: 'Migration is movement to a new home',
    image: {
      src: '/curriculum/grade6/geo/term4/migration-push-pull/diagram.svg',
      alt: 'push and pull factors moving people toward a city',
    },
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          <strong>Migration</strong> means people move from one place to another to live for a time
          or permanently. People may move within South Africa or between countries.
        </p>
        <div className="bg-sky-50 p-6 rounded-xl inline-flex flex-wrap items-center justify-center gap-3 text-xl font-bold text-slate-700">
          <span>old place</span>
          <span className="text-slate-400">→</span>
          <span className="text-sky-700">new place</span>
        </div>
      </div>
    ),
  },
  {
    title: 'Push factors make people leave',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          <strong>Push factors</strong> are problems that push people away from a place. Examples include
          drought, floods, conflict, few jobs, poor services, or not enough land for farming.
        </p>
        <div className="grid gap-3 md:grid-cols-3">
          <div className="rounded-xl bg-orange-50 p-4"><strong>Drought</strong><br />too little water</div>
          <div className="rounded-xl bg-red-50 p-4"><strong>Few jobs</strong><br />hard to earn money</div>
          <div className="rounded-xl bg-stone-100 p-4"><strong>Poor services</strong><br />limited help nearby</div>
        </div>
      </div>
    ),
  },
  {
    title: 'Pull factors attract people',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          <strong>Pull factors</strong> are things that attract people to a new place. People may move for
          jobs, schools, clinics, safety, family, better housing, or transport.
        </p>
        <div className="grid gap-3 md:grid-cols-3">
          <div className="rounded-xl bg-emerald-50 p-4"><strong>Jobs</strong><br />work opportunities</div>
          <div className="rounded-xl bg-indigo-50 p-4"><strong>Schools</strong><br />education choices</div>
          <div className="rounded-xl bg-sky-50 p-4"><strong>Clinics</strong><br />health services</div>
        </div>
      </div>
    ),
  },
  {
    title: 'Migration Data — Main Reasons People Move',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">Push and pull factors can be shown with simple data. Jobs, family links, education, and safety are some of the strongest reasons for migration.</p>
        <DataChart
          data={[
                        { reason: 'Jobs', share: 44 },
                        { reason: 'Family', share: 20 },
                        { reason: 'Education', share: 16 },
                        { reason: 'Housing', share: 10 },
                        { reason: 'Safety', share: 10 },
                      ]}
          xKey="reason"
          series={[
                        { key: 'share', label: 'Share of migrants (%)', type: 'bar', color: '#6366f1' },
                      ]}
          yLabel="Percent"
          height={220}
        />

        <p className="text-sm text-slate-500">Economic pull factors such as employment usually attract the largest share of migrants.</p>
      </div>
    ),
  },
];

export const bank: GeoItem[] = [
  { prompt: 'What does migration mean?', options: ['Moving from one place to another to live', 'Measuring rainfall each day', 'Drawing borders on a map', 'Growing crops on a farm'], answer: 'Moving from one place to another to live', explanation: 'Migration is the movement of people to live in a new place for a time or permanently.' },
  { prompt: 'What is a push factor?', options: ['A problem that makes people want to leave', 'A feature that attracts tourists only', 'A map key symbol', 'A type of settlement pattern'], answer: 'A problem that makes people want to leave', explanation: 'Push factors push people away from their current home area.' },
  { prompt: 'What is a pull factor?', options: ['Something that attracts people to a place', 'A storm that destroys crops', 'A border line between provinces', 'A rule for reading scale'], answer: 'Something that attracts people to a place', explanation: 'Pull factors pull or attract people toward a new place.' },
  { prompt: 'Which is a push factor?', options: ['Drought causing crops to fail', 'Good jobs in a city', 'A new school opening', 'Safe housing near transport'], answer: 'Drought causing crops to fail', explanation: 'Drought is a problem that can push people away from a farming area.' },
  { prompt: 'Which is a pull factor?', options: ['Better schools in another town', 'Floods damaging houses', 'No work in a village', 'Conflict in an area'], answer: 'Better schools in another town', explanation: 'Better education opportunities can attract families to move.' },
  { prompt: 'A family leaves because there are no jobs nearby. What type of factor is this?', options: ['Push factor', 'Pull factor', 'Map factor', 'Weather instrument'], answer: 'Push factor', explanation: 'Few or no jobs is a problem in the home area, so it is a push factor.' },
  { prompt: 'A worker moves to a city because a factory offers work. What type of factor is this?', options: ['Pull factor', 'Push factor', 'Compass direction', 'Rural pattern'], answer: 'Pull factor', explanation: 'The job opportunity attracts the worker to the city.' },
  { prompt: 'Which pair correctly matches factor and type?', options: ['Drought — push factor', 'Good clinics — push factor', 'No jobs — pull factor', 'Better transport — push factor'], answer: 'Drought — push factor', explanation: 'Drought makes life harder in a place, so it can push people away.' },
  { prompt: 'Which move is internal migration?', options: ['Moving from Limpopo to Gauteng', 'Moving from Earth to the Moon', 'Moving from summer to winter', 'Moving from one desk to another for one lesson'], answer: 'Moving from Limpopo to Gauteng', explanation: 'Internal migration happens within the same country, such as between provinces.' },
];

const MigrationPushPull = () => (
  <GeoTopic
    title="Migration: Push & Pull"
    subtitle="Why people move from one place to another"
    learnSteps={learnSteps}
    task="migration-push-pull"
    bank={bank}
  />
);

export default MigrationPushPull;
