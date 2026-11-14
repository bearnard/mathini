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
            {"date": "c. 370 CE", "title": "Early hospitals expand care", "description": "Large Christian hospitals began appearing in the late Roman world. They provided organised care for the sick and influenced later hospital medicine."},
            {"date": "1796", "title": "Jenner tests vaccination", "description": "Edward Jenner tested the first successful smallpox vaccine. Vaccination became a major way to prevent disease."},
            {"date": "1847", "title": "Semmelweis promotes handwashing", "description": "Ignaz Semmelweis showed that handwashing reduced deaths in hospitals. His work helped people understand the value of hygiene."},
            {"date": "1861", "title": "Pasteur explains germ theory", "description": "Louis Pasteur provided strong evidence that tiny organisms could cause disease and spoilage. Germ theory changed how doctors understood illness."},
            {"date": "1867", "title": "Lister uses antiseptic surgery", "description": "Joseph Lister applied antiseptics in surgery to reduce infection. Cleaner hospitals and operations helped save many more patients."},
          ]}
        />
      </div>
    ),
  },
  {
    title: 'New places for care',
    image: {
      src: '/curriculum/grade6/his/term4/european-medicine/diagram.svg',
      alt: 'timeline of hospitals germ theory hygiene and vaccines',
    },
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          In Europe and other parts of the world, medicine changed as people built more
          <strong> hospitals</strong> where the sick could be cared for and trained medical workers could learn.
        </p>
        <div className="bg-sky-50 p-6 rounded-xl inline-flex flex-wrap items-center justify-center gap-3 text-xl font-bold text-slate-700">
          <span>hospitals</span>
          <span className="text-slate-400">→</span>
          <span>care</span>
          <span className="text-slate-400">→</span>
          <span className="text-sky-700">learning</span>
        </div>
      </div>
    ),
  },
  {
    title: 'Germs, cleanliness, and hygiene',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          A major discovery was <strong>germ theory</strong>: tiny germs can cause disease.
          This helped people understand why <strong>cleanliness</strong>, handwashing, clean water,
          and hygienic hospitals are important.
        </p>
        <div className="grid gap-3 md:grid-cols-3">
          <div className="rounded-xl bg-red-50 p-4"><strong>Germs</strong><br />can cause disease</div>
          <div className="rounded-xl bg-blue-50 p-4"><strong>Hygiene</strong><br />helps stop spread</div>
          <div className="rounded-xl bg-green-50 p-4"><strong>Clean hospitals</strong><br />protect patients</div>
        </div>
      </div>
    ),
  },
  {
    title: 'Vaccines prevent some diseases',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          <strong>Vaccines</strong> train the body to fight certain diseases before a person becomes
          seriously sick. They became one of the most important advances in medicine.
        </p>
        <div className="rounded-xl bg-emerald-50 p-6 text-lg text-slate-700">
          Hospitals, germ theory, hygiene, and vaccines helped medicine become more scientific.
        </div>
      </div>
    ),
  },
];

export const bank: HisItem[] = [
  { prompt: 'What was an important European-era place for caring for sick people?', options: ['Hospitals', 'Sports stadiums', 'Shopping malls', 'Airports'], answer: 'Hospitals', explanation: 'Hospitals became important places for care, learning, and treatment.' },
  { prompt: 'What does germ theory explain?', options: ['Germs can cause disease', 'All disease is caused by bad luck', 'Rivers always cure illness', 'Medicines are never useful'], answer: 'Germs can cause disease', explanation: 'Germ theory showed that tiny organisms can cause many diseases.' },
  { prompt: 'Why did hygiene become important in medicine?', options: ['Cleanliness helps stop germs spreading', 'Dirt always makes patients stronger', 'Doctors stopped seeing patients', 'Hospitals no longer needed water'], answer: 'Cleanliness helps stop germs spreading', explanation: 'Handwashing, clean water, and clean hospitals reduce the spread of germs.' },
  { prompt: 'What do vaccines help the body do?', options: ['Prepare to fight certain diseases', 'Grow taller overnight', 'Turn bones into metal', 'Replace all food and water'], answer: 'Prepare to fight certain diseases', explanation: 'Vaccines train the immune system to recognise and fight particular diseases.' },
  { prompt: 'Which discovery changed how people understood disease?', options: ['Germs cause disease', 'Clouds are made of medicine', 'Every illness is caused by the Moon', 'All plants are poisonous'], answer: 'Germs cause disease', explanation: 'Understanding germs helped doctors prevent infections and improve treatment.' },
  { prompt: 'Which habit is linked to better hygiene?', options: ['Washing hands', 'Sharing dirty bandages', 'Using unclean water', 'Ignoring hospital cleanliness'], answer: 'Washing hands', explanation: 'Handwashing is a simple way to reduce the spread of germs.' },
  { prompt: 'What is one reason hospitals helped medicine develop?', options: ['Doctors and nurses could observe and treat patients', 'They stopped all scientific learning', 'They were only used for concerts', 'They made germs disappear forever'], answer: 'Doctors and nurses could observe and treat patients', explanation: 'Hospitals allowed care, observation, teaching, and improved treatment.' },
  { prompt: 'Which group lists key European-era medical advances?', options: ['Hospitals, germ theory, hygiene, and vaccines', 'Telephones, rockets, gold mines, and radios', 'Castles, crowns, ships, and flags', 'Rainbows, deserts, oceans, and mountains'], answer: 'Hospitals, germ theory, hygiene, and vaccines', explanation: 'These were important advances in the development of medicine.' },
  { prompt: 'What can happen when hospitals are not kept clean?', options: ['Germs may spread more easily', 'Patients always heal instantly', 'Vaccines stop existing', 'Doctors forget how to read'], answer: 'Germs may spread more easily', explanation: 'Clean hospitals help prevent infections from spreading between people.' },
];

const EuropeanMedicine = () => (
  <HisTopic
    title="European Medicine & Discoveries"
    subtitle="Hospitals, germs, hygiene, and vaccines"
    learnSteps={learnSteps}
    task="european-medicine"
    bank={bank}
  />
);

export default EuropeanMedicine;
