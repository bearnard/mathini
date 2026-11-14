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
            {"date": "c. 2600 BCE", "title": "Imhotep heals in Egypt", "description": "Imhotep became famous in ancient Egypt for knowledge linked to healing and learning. He represents some of the earliest recorded medical practice."},
            {"date": "c. 1550 BCE", "title": "Ebers Papyrus compiled", "description": "Ancient Egyptians recorded treatments and remedies in the Ebers Papyrus. It shows the use of plants, observation, and practical care."},
            {"date": "c. 400 BCE", "title": "Hippocrates teaches observation", "description": "Hippocrates encouraged healers to observe patients carefully instead of relying only on superstition. His work influenced later medicine."},
            {"date": "c. 200 CE", "title": "Galen influences medicine", "description": "The Roman doctor Galen wrote widely about the body and disease. His ideas shaped medical thinking for many centuries, even when some were wrong."},
          ]}
        />
      </div>
    ),
  },
  {
    title: 'Medicine in ancient societies',
    image: {
      src: '/curriculum/grade6/his/term4/ancient-medicine/diagram.webp',
      alt: 'ancient healer with simple tools and herbs',
    },
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          In ancient times, healers used <strong>herbs</strong>, simple tools, bandages, and careful
          observation to help sick or injured people.
        </p>
        <div className="bg-amber-50 p-6 rounded-xl inline-flex flex-wrap items-center justify-center gap-3 text-xl font-bold text-slate-700">
          <span>herbs</span>
          <span className="text-slate-400">+</span>
          <span>simple tools</span>
          <span className="text-slate-400">+</span>
          <span>observation</span>
        </div>
      </div>
    ),
  },
  {
    title: 'Explaining disease before modern science',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Ancient people often did not know what caused diseases. Some blamed
          <strong> bad air</strong>, angry gods, spirits, or an imbalance in the body.
        </p>
        <div className="grid gap-3 md:grid-cols-3">
          <div className="rounded-xl bg-slate-50 p-4"><strong>Bad air</strong><br />a common old explanation</div>
          <div className="rounded-xl bg-purple-50 p-4"><strong>Gods or spirits</strong><br />a spiritual explanation</div>
          <div className="rounded-xl bg-green-50 p-4"><strong>Body balance</strong><br />another ancient idea</div>
        </div>
      </div>
    ),
  },
  {
    title: 'Ancient ideas still matter in history',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Ancient Egyptians, Greeks, Romans, Chinese, Indian, African, and other societies all
          developed medical ideas. Some ideas were wrong, but many healers helped people with
          <strong> practical care</strong> such as cleaning wounds and using plant remedies.
        </p>
        <div className="rounded-xl bg-sky-50 p-6 text-lg text-slate-700">
          History shows that medical knowledge grew slowly as people asked questions and tested ideas.
        </div>
      </div>
    ),
  },
];

export const bank: HisItem[] = [
  { prompt: 'Which remedies did ancient healers often use?', options: ['Herbs and simple tools', 'Laser scanners only', 'Robots and computers', 'Plastic credit cards'], answer: 'Herbs and simple tools', explanation: 'Ancient healers often used herbs, bandages, simple tools, and observation.' },
  { prompt: 'Why did ancient people sometimes blame bad air for disease?', options: ['They did not yet know about germs', 'They had already seen bacteria with microscopes', 'They knew all diseases came from X-rays', 'They had modern antibiotics'], answer: 'They did not yet know about germs', explanation: 'Before germ theory, people used other explanations such as bad air.' },
  { prompt: 'What did some ancient people believe could cause sickness?', options: ['Angry gods or spirits', 'Mobile phone signals', 'Television cameras', 'Electric trains'], answer: 'Angry gods or spirits', explanation: 'Some ancient societies used spiritual explanations for illness.' },
  { prompt: 'Which action is an example of practical ancient care?', options: ['Cleaning a wound', 'Sending an email', 'Using a satellite map', 'Printing a barcode'], answer: 'Cleaning a wound', explanation: 'Cleaning wounds and using bandages were practical ways to help injured people.' },
  { prompt: 'What is true about ancient medical ideas?', options: ['Some helped people, while some were incorrect', 'Every idea was exactly the same as modern science', 'No ancient society had any healers', 'All medicine began with computers'], answer: 'Some helped people, while some were incorrect', explanation: 'Medical knowledge developed over time; some old ideas worked and others did not.' },
  { prompt: 'Which ancient societies developed medical knowledge?', options: ['Egyptian, Greek, Roman, and many others', 'Only one small village in the world', 'Only people who used the internet', 'No societies before modern times'], answer: 'Egyptian, Greek, Roman, and many others', explanation: 'Many societies across the world developed medical practices and ideas.' },
  { prompt: 'What does observation mean in medicine?', options: ['Carefully noticing symptoms and changes', 'Closing your eyes to avoid evidence', 'Counting coins in a shop', 'Drawing a map of stars only'], answer: 'Carefully noticing symptoms and changes', explanation: 'Healers observed patients to understand injuries and illness.' },
  { prompt: 'Which idea belongs to the ancient period before modern germ theory?', options: ['Bad air could cause disease', 'Penicillin kills many bacteria', 'X-rays show bones inside the body', 'Vaccines are made in laboratories only'], answer: 'Bad air could cause disease', explanation: 'Bad air was an old explanation used before people understood germs.' },
  { prompt: 'How did medical knowledge grow over time?', options: ['By asking questions and testing ideas', 'By copying what earlier doctors wrote without checking', 'By relying on one famous doctor for everything', 'By waiting for a new disease to disappear'], answer: 'By asking questions and testing ideas', explanation: 'Medicine improved as people observed, questioned, compared, and tested ideas.' },
  { kind: 'order', section: 'chronology', prompt: 'Put these events about ancient medicine in order, earliest first.', options: ['Imhotep heals in Egypt', 'Ebers Papyrus compiled', 'Hippocrates teaches observation', 'Galen influences medicine'], answer: 'Imhotep heals in Egypt|Ebers Papyrus compiled|Hippocrates teaches observation|Galen influences medicine', explanation: 'The dates are c. 2600 BCE, c. 1550 BCE, c. 400 BCE and c. 200 CE.' },
];

const AncientMedicine = () => (
  <HisTopic
    title="Medicine in Ancient Times"
    subtitle="Early explanations, healers, and practical care"
    learnSteps={learnSteps}
    task="ancient-medicine"
    bank={bank}
  />
);

export default AncientMedicine;
