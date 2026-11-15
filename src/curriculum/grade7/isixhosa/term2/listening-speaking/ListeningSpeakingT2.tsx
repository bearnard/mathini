import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem } from '../../../../../components/CapsSubjectTopic';
import { xhosaSteps } from '@/components/subjects/lesson/XhosaLesson';
import lesson from './ListeningSpeakingT2.data';

const learnSteps = xhosaSteps(lesson);

const bank: CapsItem[] = [
  {
    prompt: 'Which sentence is a polite shopping request?',
    options: ['Ndingathenga amasi, nceda?', 'Ndinike amasi ngoku!', 'Amasi akho abi.', 'Andifuni mntu apha.'],
    answer: 'Ndingathenga amasi, nceda?',
    explanation: 'It uses polite request wording.',
  },
  {
    prompt: 'What does “Malini le nto?” ask?',
    options: ['the price', 'the colour', 'the owner name', 'the recipe'],
    answer: 'the price',
    explanation: 'Malini asks how much something costs.',
  },
  {
    prompt: 'Which option is best in a transport role play?',
    options: ['Ibhasi iya eTown Centre ngeyesibini.', 'Andimamele mntu.', 'Hamba nje ngaphandle kokubuza.', 'Andikwazi ukunceda.'],
    answer: 'Ibhasi iya eTown Centre ngeyesibini.',
    explanation: 'It gives useful transport detail clearly.',
  },
  {
    prompt: 'If someone says “Jika ngasekunene,” you should...',
    options: ['turn right', 'turn left', 'go back home', 'stand still forever'],
    answer: 'turn right',
    explanation: 'Ngasekunene means right.',
  },
  {
    prompt: 'Which phrase asks for help respectfully?',
    options: ['Nceda undibonise indlela.', 'Sukundijonga.', 'Hamba undishiye.', 'Awazi nto wena.'],
    answer: 'Nceda undibonise indlela.',
    explanation: 'Nceda makes the request polite.',
  },
  {
    prompt: 'Good listening for map directions means...',
    options: ['noting each step in order', 'interrupting quickly', 'guessing without listening', 'ignoring landmarks'],
    answer: 'noting each step in order',
    explanation: 'Direction tasks rely on ordered steps.',
  },
  {
    prompt: 'Which response suits a service encounter?',
    options: ['Enkosi ngoncedo lwakho.', 'Andikhathali.', 'Yhu! Akulunganga.', 'Hayi ndiyahamba.'],
    answer: 'Enkosi ngoncedo lwakho.',
    explanation: 'Thanking politely is appropriate in service contexts.',
  },
  {
    prompt: '“Isikhululo sikufuphi nevenkile” means the station is...',
    options: ['near the shop', 'inside the school', 'behind the river', 'next to the airport only'],
    answer: 'near the shop',
    explanation: 'Kufuphi indicates near.',
  },
];

const ListeningSpeakingT2 = () => (
  <CapsSubjectTopic
    title="Listening & Speaking"
    subtitle="Shopping, transport, service encounters, and directions"
    learnSteps={learnSteps}
    task="gr7-listening-speaking-t2"
    bank={bank}
    apiPath="/api/caps/xho"
  />
);

export default ListeningSpeakingT2;
