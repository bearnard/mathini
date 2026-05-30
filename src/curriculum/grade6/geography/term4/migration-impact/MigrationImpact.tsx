import GeoTopic from '../../_shared/GeoTopic';
import { GeoItem, LearnStep } from '../../_shared/types';

const learnSteps: LearnStep[] = [
  {
    title: 'Migration changes places and people',
    image: {
      src: '/curriculum/grade6/geo/term4/migration-impact/diagram.webp',
      alt: 'family with suitcases arriving in a busy city',
    },
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Migration affects both the <strong>people who move</strong> and the <strong>places they leave and enter</strong>.
          It can bring opportunities, but it can also create challenges.
        </p>
        <div className="bg-indigo-50 p-6 rounded-xl inline-flex flex-wrap items-center justify-center gap-3 text-xl font-bold text-slate-700">
          <span>people move</span>
          <span className="text-slate-400">→</span>
          <span>places change</span>
        </div>
      </div>
    ),
  },
  {
    title: 'Positive impacts of migration',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Migrants can bring <strong>skills</strong>, ideas, languages, and cultures. They may fill jobs,
          start businesses, support family members, and help communities grow.
        </p>
        <div className="grid gap-3 md:grid-cols-3">
          <div className="rounded-xl bg-emerald-50 p-4"><strong>Skills</strong><br />new knowledge</div>
          <div className="rounded-xl bg-sky-50 p-4"><strong>Work</strong><br />more services</div>
          <div className="rounded-xl bg-purple-50 p-4"><strong>Culture</strong><br />new ideas</div>
        </div>
      </div>
    ),
  },
  {
    title: 'Challenges caused by migration',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          If many people arrive quickly, cities may need more <strong>housing</strong>, water, electricity,
          transport, schools, and clinics. Families who move may also miss relatives and need time to adapt.
        </p>
        <div className="grid gap-3 md:grid-cols-3">
          <div className="rounded-xl bg-amber-50 p-4"><strong>Housing</strong><br />more homes needed</div>
          <div className="rounded-xl bg-orange-50 p-4"><strong>Services</strong><br />more demand</div>
          <div className="rounded-xl bg-blue-50 p-4"><strong>Adapt</strong><br />new routines</div>
        </div>
      </div>
    ),
  },
];

const bank: GeoItem[] = [
  { prompt: 'Who can be affected by migration?', options: ['Migrants and the places they leave and enter', 'Only mountains near cities', 'Only weather stations', 'No people or places at all'], answer: 'Migrants and the places they leave and enter', explanation: 'Migration affects people who move, home communities, and destination communities.' },
  { prompt: 'What is one positive impact migrants can bring to a new place?', options: ['Skills and new ideas', 'Less need for all services', 'No cultural exchange', 'Fewer workers in every job'], answer: 'Skills and new ideas', explanation: 'Migrants may bring useful skills, knowledge, and different experiences.' },
  { prompt: 'What may happen when many people move to a city quickly?', options: ['More housing and services may be needed', 'All roads become farms', 'Schools become unnecessary', 'Water demand always disappears'], answer: 'More housing and services may be needed', explanation: 'Growing populations need enough homes, water, transport, schools, and clinics.' },
  { prompt: 'How can migration help families who stay behind?', options: ['Migrants may send money or support home', 'It makes communication impossible', 'It removes all family links', 'It stops all learning'], answer: 'Migrants may send money or support home', explanation: 'Some migrants send money, goods, or support to relatives in their home area.' },
  { prompt: 'What challenge might a migrant learner face at a new school?', options: ['Getting used to new routines and friends', 'Having no need to learn anything', 'Instantly knowing every local place', 'Never needing transport'], answer: 'Getting used to new routines and friends', explanation: 'Moving can mean adapting to a new environment, language, or community.' },
  { prompt: 'Which is a possible benefit for a destination city?', options: ['More workers for businesses and services', 'No people available for jobs', 'All clinics closing immediately', 'Less cultural variety always'], answer: 'More workers for businesses and services', explanation: 'Migrants can help fill jobs and contribute to the local economy.' },
  { prompt: 'Which is a possible challenge in a place people leave?', options: ['Fewer working-age adults may remain', 'The population always increases quickly', 'All services become overcrowded from arrivals', 'No family members ever move'], answer: 'Fewer working-age adults may remain', explanation: 'When many adults leave, some home areas may have fewer workers.' },
  { prompt: 'Which service can be under pressure when a city grows fast?', options: ['Public transport', 'Rock layers underground', 'Mountain height', 'Ocean tides'], answer: 'Public transport', explanation: 'More people can mean more demand for buses, taxis, trains, and roads.' },
  { prompt: 'Why should communities plan for migration?', options: ['To provide enough housing, jobs, and services', 'To stop all movement forever', 'To remove schools from cities', 'To make maps without settlements'], answer: 'To provide enough housing, jobs, and services', explanation: 'Good planning helps communities manage growth and support people fairly.' },
];

const MigrationImpact = () => (
  <GeoTopic
    title="Impact of Migration"
    subtitle="How migration affects communities"
    learnSteps={learnSteps}
    task="migration-impact"
    bank={bank}
  />
);

export default MigrationImpact;
