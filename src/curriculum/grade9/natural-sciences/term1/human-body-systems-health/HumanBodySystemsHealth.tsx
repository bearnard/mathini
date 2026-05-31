import CapsSubjectTopic, { type CapsItem } from '../../../../../components/CapsSubjectTopic';
import type { LearnStep } from '../../../../../components/CapsSubjectTopic';

const learnSteps: LearnStep[] = [
  {
    title: 'The digestive, respiratory, and circulatory systems',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Your body has major <strong>systems</strong> that work together:
        </p>
        <div className="grid gap-3 md:grid-cols-3 text-left">
          <div className="rounded-xl bg-orange-50 p-4">
            <strong className="text-orange-700">Digestive System</strong>
            <p className="text-slate-600">Breaks down food into nutrients.</p>
          </div>
          <div className="rounded-xl bg-cyan-50 p-4">
            <strong className="text-cyan-700">Respiratory System</strong>
            <p className="text-slate-600">Takes oxygen from air; removes carbon dioxide.</p>
          </div>
          <div className="rounded-xl bg-red-50 p-4">
            <strong className="text-red-700">Circulatory System</strong>
            <p className="text-slate-600">Transports nutrients and oxygen throughout the body.</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'The excretory and reproductive systems',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Two more vital systems support health and reproduction:
        </p>
        <div className="grid gap-3 md:grid-cols-2 text-left">
          <div className="rounded-xl bg-indigo-50 p-4">
            <strong className="text-indigo-700">Excretory System</strong>
            <p className="text-slate-600">Removes waste products from the body (kidneys, bladder, skin).</p>
          </div>
          <div className="rounded-xl bg-pink-50 p-4">
            <strong className="text-pink-700">Reproductive System</strong>
            <p className="text-slate-600">Produces sex cells for reproduction.</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Health, homeostasis and healthy lifestyle choices',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          <strong>Homeostasis</strong> is when your body maintains stable conditions like temperature.
          Healthy choices support homeostasis and system function.
        </p>
        <div className="grid gap-2 md:grid-cols-2 text-left">
          <div className="rounded-xl bg-green-50 p-3">
            <strong className="text-green-700">✓ Healthy choices:</strong>
            <p className="text-slate-600 text-sm">Exercise, balanced diet, sleep, hygiene, avoiding alcohol/tobacco.</p>
          </div>
          <div className="rounded-xl bg-red-50 p-3">
            <strong className="text-red-700">✗ Risky choices:</strong>
            <p className="text-slate-600 text-sm">Inactivity, poor nutrition, stress, smoking, unsafe practices.</p>
          </div>
        </div>
      </div>
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'What is the main role of the digestive system?',
    options: ['Absorb oxygen', 'Break down food into nutrients', 'Transport blood', 'Remove waste'],
    answer: 'Break down food into nutrients',
    explanation: 'The digestive system breaks down food so the body can absorb and use nutrients.',
  },
  {
    prompt: 'Which system is responsible for transporting oxygen throughout the body?',
    options: ['Digestive', 'Respiratory', 'Circulatory', 'Excretory'],
    answer: 'Circulatory',
    explanation: 'The circulatory system (heart, blood, vessels) transports oxygen and nutrients.',
  },
  {
    prompt: 'What does the respiratory system remove from the body?',
    options: ['Urine', 'Carbon dioxide', 'Nutrients', 'Blood cells'],
    answer: 'Carbon dioxide',
    explanation: 'The respiratory system takes in oxygen and removes carbon dioxide.',
  },
  {
    prompt: 'Which organs are part of the excretory system?',
    options: ['Heart and lungs', 'Kidneys and bladder', 'Stomach and intestines', 'Brain and nerves'],
    answer: 'Kidneys and bladder',
    explanation: 'The excretory system includes kidneys that filter waste and the bladder that stores urine.',
  },
  {
    prompt: 'What is homeostasis?',
    options: ['A type of food', 'Movement of muscles', 'When the body maintains stable conditions', 'A digestive organ'],
    answer: 'When the body maintains stable conditions',
    explanation: 'Homeostasis is the body\'s ability to keep internal conditions stable, like temperature.',
  },
  {
    prompt: 'Which choice promotes a healthy circulatory system?',
    options: ['Smoking cigarettes', 'Regular exercise', 'Skipping meals', 'No sleep'],
    answer: 'Regular exercise',
    explanation: 'Exercise strengthens the heart and improves circulation.',
  },
  {
    prompt: 'What is the relationship between the digestive and circulatory systems?',
    options: ['They are separate', 'Digestive breaks food down; circulatory transports nutrients', 'Circulatory makes food', 'They have no connection'],
    answer: 'Digestive breaks food down; circulatory transports nutrients',
    explanation: 'The digestive system breaks down food, and the circulatory system carries nutrients to cells.',
  },
  {
    prompt: 'Which lifestyle choice supports respiratory system health?',
    options: ['Smoking', 'Breathing polluted air', 'Avoiding exercise', 'Regular exercise in fresh air'],
    answer: 'Regular exercise in fresh air',
    explanation: 'Exercise strengthens lungs and breathing; fresh air reduces respiratory strain.',
  },
  {
    prompt: 'What does the reproductive system do?',
    options: ['Digest food', 'Produce sex cells for reproduction', 'Filter blood', 'Control heart rate'],
    answer: 'Produce sex cells for reproduction',
    explanation: 'The reproductive system produces sex cells needed for making new humans.',
  },
  {
    prompt: 'How do the respiratory and circulatory systems work together?',
    options: ['They don\'t interact', 'Respiratory gets oxygen; circulatory carries it to cells', 'Circulatory provides oxygen to lungs', 'No connection exists'],
    answer: 'Respiratory gets oxygen; circulatory carries it to cells',
    explanation: 'Lungs absorb oxygen which blood then carries to all body cells through circulation.',
  },
];

const HumanBodySystemsHealth = () => (
  <CapsSubjectTopic
    title="Human Body Systems and Health"
    subtitle="How body systems work together to keep you healthy"
    learnSteps={learnSteps}
    task="gr9-human-body-systems-health-t1"
    bank={bank}
    apiPath="/api/caps/ns"
  />
);

export default HumanBodySystemsHealth;
