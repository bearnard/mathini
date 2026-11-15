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
            {"date": "1895", "title": "X-rays discovered", "description": "Wilhelm Röntgen discovered X-rays in 1895. Doctors could suddenly look inside the body without cutting it open."},
            {"date": "1928", "title": "Penicillin found", "description": "Alexander Fleming discovered penicillin from a mould. It became one of the first important antibiotics."},
            {"date": "1943", "title": "Penicillin used widely", "description": "During World War II, penicillin began to be produced and used on a large scale. It saved many lives by treating bacterial infections."},
            {"date": "1967", "title": "First heart transplant", "description": "Dr Christiaan Barnard performed the first human heart transplant in Cape Town. It was a major South African and world medical milestone."},
          ]}
        />
      </div>
    ),
  },
  {
    title: 'Modern tools help doctors diagnose',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Modern medicine uses scientific knowledge and tools such as <strong>X-rays</strong>,
          stethoscopes, tests, and medicines to diagnose and treat illness.
        </p>
        <div className="bg-blue-50 p-6 rounded-xl inline-flex flex-wrap items-center justify-center gap-3 text-xl font-bold text-slate-700">
          <span>tests</span>
          <span className="text-slate-400">+</span>
          <span>X-rays</span>
          <span className="text-slate-400">→</span>
          <span className="text-blue-700">diagnosis</span>
        </div>
      </div>
    ),
  },
  {
    title: 'Antibiotics changed treatment',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          <strong>Antibiotics</strong> are medicines that can kill or stop many bacteria.
          <strong> Penicillin</strong> was one of the first widely used antibiotics and saved many lives.
        </p>
        <div className="grid gap-3 md:grid-cols-2">
          <div className="rounded-xl bg-emerald-50 p-4">
            <p className="font-bold text-emerald-700">Antibiotics</p>
            <p className="text-slate-600">treat many bacterial infections</p>
          </div>
          <div className="rounded-xl bg-amber-50 p-4">
            <p className="font-bold text-amber-700">Use carefully</p>
            <p className="text-slate-600">only when prescribed by health workers</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'A South African medical milestone',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          In <strong>1967</strong>, Dr <strong>Christiaan Barnard</strong> led the surgical team in
          Cape Town, South Africa, that carried out the world's first transplant of a human heart. It was an important moment
          in world medical history.
        </p>
        <div className="rounded-xl bg-red-50 p-6 text-lg text-slate-700">
          Modern medicine includes new technology, medicines, surgery, and teamwork in hospitals.
        </div>
      </div>
    ),
  },
];

export const bank: HisItem[] = [
  { prompt: 'What do X-rays help doctors do?', options: ['See inside the body', 'Make bread rise faster', 'Grow plants without water', 'Turn germs into rocks'], answer: 'See inside the body', explanation: 'X-rays can show bones and other structures inside the body.' },
  { prompt: 'What are antibiotics used for?', options: ['Treating many bacterial infections', 'Treating colds and flu caused by viruses', 'Replacing surgery for broken bones', 'Preventing every illness before it starts'], answer: 'Treating many bacterial infections', explanation: 'Antibiotics can kill or stop many bacteria, but they do not treat every illness.' },
  { prompt: 'Which antibiotic became one of the first widely used antibiotics?', options: ['Penicillin', 'Vitamin C', 'Salt water', 'Sugar syrup'], answer: 'Penicillin', explanation: 'Penicillin was a breakthrough antibiotic that saved many lives.' },
  { prompt: 'Who performed the first human heart transplant?', options: ['Dr Christiaan Barnard', 'Albert Einstein', 'Nelson Mandela', 'Leonardo da Vinci'], answer: 'Dr Christiaan Barnard', explanation: 'Dr Christiaan Barnard performed the first human heart transplant.' },
  { prompt: 'Where was the first human heart transplant performed?', options: ['Cape Town, South Africa', 'Paris, France', 'Sydney, Australia', 'Cairo, Egypt'], answer: 'Cape Town, South Africa', explanation: 'The operation took place in Cape Town, South Africa.' },
  { prompt: 'In which year was the first human heart transplant performed?', options: ['1967', '1492', '1776', '2020'], answer: '1967', explanation: 'Dr Christiaan Barnard performed the first human heart transplant in 1967.' },
  { prompt: 'Which item is a modern medical tool?', options: ['Stethoscope', 'Stone spear', 'Clay cooking pot', 'Sailing compass'], answer: 'Stethoscope', explanation: 'A stethoscope helps health workers listen to sounds in the body.' },
  { prompt: 'Why should antibiotics be used carefully?', options: ['They should be taken only when needed and prescribed', 'Sharing them with family members makes them work much better', 'Taking them every day keeps people healthy', 'Stopping early makes them work faster'], answer: 'They should be taken only when needed and prescribed', explanation: 'Careful use helps antibiotics remain effective and keeps patients safer.' },
  { prompt: 'Which group lists modern medical breakthroughs?', options: ['Penicillin, X-rays, and heart transplant surgery', 'Stone axes, cave paintings, and pottery', 'Sailing ships, spices, and gold coins', 'Rain clouds, rivers, and mountains'], answer: 'Penicillin, X-rays, and heart transplant surgery', explanation: 'These are examples of important developments in modern medicine.' },
  { kind: 'order', section: 'chronology', prompt: 'Put these events about modern medicine in order, earliest first.', options: ['X-rays discovered', 'Penicillin found', 'Penicillin used widely', 'First heart transplant'], answer: 'X-rays discovered|Penicillin found|Penicillin used widely|First heart transplant', explanation: 'The dates are 1895, 1928, 1943 and 1967.' },
];

const ModernMedicine = () => (
  <HisTopic
    title="Modern Medicine"
    subtitle="Technology, antibiotics, and South African medical history"
    learnSteps={learnSteps}
    task="modern-medicine"
    bank={bank}
  />
);

export default ModernMedicine;
