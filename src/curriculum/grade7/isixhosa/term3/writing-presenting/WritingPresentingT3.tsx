import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';

const learnSteps: LearnStep[] = [
  {
    title: 'Write invitations, reports, directions, and recounts',
    image: {
      src: '/curriculum/grade7/xho/term3/writing-presenting/diagram.webp',
      alt: 'Grade 7 learner creating an invitation and cultural paragraph for class presentation',
    },
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Term 3 writing develops <strong>invitations, short reports, direction texts, cultural paragraphs,</strong> and
          recount writing with peer feedback.
        </p>
        <div className="grid gap-3 md:grid-cols-2">
          <div className="rounded-xl bg-amber-50 p-4 text-left">
            <p className="font-semibold text-amber-800">Functional formats</p>
            <p className="text-slate-600">Check layout for invitation, report, and message styles.</p>
          </div>
          <div className="rounded-xl bg-indigo-50 p-4 text-left">
            <p className="font-semibold text-indigo-800">Paragraph quality</p>
            <p className="text-slate-600">Use clear topic sentence, details, and simple conclusion.</p>
          </div>
        </div>
      </div>
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'Which detail is essential in an invitation?',
    options: ['date, time, and venue', 'weather symbols only', 'table of contents', 'bibliography'],
    answer: 'date, time, and venue',
    explanation: 'Invitations must tell guests when and where.',
  },
  {
    prompt: 'A recount paragraph should usually be written...',
    options: ['in time order of events', 'in random order', 'as unrelated bullet words', 'without verbs'],
    answer: 'in time order of events',
    explanation: 'Recounts narrate events sequentially.',
  },
  {
    prompt: 'Which phrase gives direction clearly?',
    options: ['Hamba tye, uze ujike ngasekhohlo.', 'Mhlawumbi ngolunye usuku.', 'Mna andazi.', 'Yima nje apho.'],
    answer: 'Hamba tye, uze ujike ngasekhohlo.',
    explanation: 'It gives specific ordered movement steps.',
  },
  {
    prompt: 'What makes a short report effective?',
    options: ['facts and relevant details', 'many unrelated opinions', 'emoji-only lines', 'no topic sentence'],
    answer: 'facts and relevant details',
    explanation: 'Reports should be factual and focused.',
  },
  {
    prompt: 'Which sentence suits a cultural paragraph topic?',
    options: ['Kwikhaya lethu sigcina amasiko ngentlonipho.', '2 + 2 = 4.', 'The bus leaves at 14:00.', 'No food in class.'],
    answer: 'Kwikhaya lethu sigcina amasiko ngentlonipho.',
    explanation: 'It directly addresses culture and values.',
  },
  {
    prompt: 'Peer feedback is useful because it helps you...',
    options: ['improve clarity before final submission', 'avoid editing', 'remove all punctuation', 'change topic completely'],
    answer: 'improve clarity before final submission',
    explanation: 'Feedback helps refine accuracy and meaning.',
  },
  {
    prompt: 'Which opening suits a formal invitation line?',
    options: ['Umenywa ngokufudumeleyo kumsitho wesikolo.', 'Ndinomsindo namhlanje.', 'Awamkelekanga.', 'Mna ndiphumile nje.'],
    answer: 'Umenywa ngokufudumeleyo kumsitho wesikolo.',
    explanation: 'It is polite and purpose-appropriate.',
  },
  {
    prompt: 'Before presenting written work orally, you should...',
    options: ['practise reading with expression', 'skip punctuation marks', 'read only the title', 'avoid eye contact completely'],
    answer: 'practise reading with expression',
    explanation: 'Practice improves confidence and delivery.',
  },
];

const WritingPresentingT3 = () => (
  <CapsSubjectTopic
    title="Writing & Presenting"
    subtitle="Invitations, reports, directions, cultural paragraphs, and recounts"
    learnSteps={learnSteps}
    task="gr7-writing-presenting-t3"
    bank={bank}
    apiPath="/api/caps/xho"
  />
);

export default WritingPresentingT3;
