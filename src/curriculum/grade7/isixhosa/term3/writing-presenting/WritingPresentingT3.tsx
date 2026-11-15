import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem } from '../../../../../components/CapsSubjectTopic';
import { xhosaSteps } from '@/components/subjects/lesson/XhosaLesson';
import lesson from './WritingPresentingT3.data';

const learnSteps = xhosaSteps(lesson);

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
    options: ['Kwikhaya lethu sigcina amasiko ngentlonipho.', 'The bus leaves at 14:00 from the main gate.', 'No food is allowed inside of the classroom.', '2 + 2 = 4 in every number system.'],
    answer: 'Kwikhaya lethu sigcina amasiko ngentlonipho.',
    explanation: 'It directly addresses culture and values.',
  },
  {
    prompt: 'Peer feedback is useful because it helps you...',
    options: ['improve clarity before the final submission', 'avoid editing the work that you did', 'remove all of the punctuation marks', 'change the whole topic of the work'],
    answer: 'improve clarity before the final submission',
    explanation: 'Feedback helps refine accuracy and meaning.',
  },
  {
    prompt: 'Which opening suits a formal invitation line?',
    options: ['Umenywa ngokufudumeleyo kumsitho wesikolo.', 'Awamkelekanga kulo msitho wethu.', 'Ndinomsindo namhlanje kunye nawe.', 'Mna ndiphumile nje, ndiyabuya kamva.'],
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
