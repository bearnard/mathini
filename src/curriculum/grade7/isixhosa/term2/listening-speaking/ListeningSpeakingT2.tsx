import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';
import PronunciationPlayer from '@/components/subjects/PronunciationPlayer';

const learnSteps: LearnStep[] = [
  {
    title: 'Use polite role-play language for shopping and transport',
    image: {
      src: '/curriculum/grade7/xho/term2/listening-speaking/diagram.webp',
      alt: 'Grade 7 learners role-playing shopping and transport conversations in isiXhosa SAL',
    },
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Term 2 speaking develops role plays about <strong>shopping, transport, directions,</strong> and asking for
          help in service encounters.
        </p>
        <div className="grid gap-3 md:grid-cols-2">
          <div className="rounded-xl bg-orange-50 p-4 text-left">
            <p className="font-semibold text-orange-800">Service language</p>
            <p className="text-slate-600">Use polite forms for buying and requesting information.</p>
          </div>
          <div className="rounded-xl bg-teal-50 p-4 text-left">
            <p className="font-semibold text-teal-800">Directions</p>
            <p className="text-slate-600">Give and follow route instructions in correct sequence.</p>
          </div>
        </div>
      </div>
    ),
  },

  {
    title: "Pronunciation practice",
    content: (
      <div className="space-y-4">
        <p className="text-center text-sm text-gray-600 dark:text-gray-300">
          Say these everyday conversation words clearly so that shopping, directions, and service talk feel natural.
        </p>
        <div className="flex flex-wrap gap-3 justify-center">
          <PronunciationPlayer word={"Ndicela"} phonetic={"[ndi'cɛla]"} meaning={"Please / I request"} lang="xh" />
          <PronunciationPlayer word={"Nceda"} phonetic={"[ŋ'cɛda]"} meaning={"Help / Please assist"} lang="xh" />
          <PronunciationPlayer word={"Ukutya"} phonetic={"[uku'tja]"} meaning={"Food"} lang="xh" />
          <PronunciationPlayer word={"Amanzi"} phonetic={"[a'manzi]"} meaning={"Water"} lang="xh" />
          <PronunciationPlayer word={"Ivenkile"} phonetic={"[ivɛn'kile]"} meaning={"Shop / Store"} lang="xh" />
          <PronunciationPlayer word={"Indlela"} phonetic={"[in'dlɛla]"} meaning={"Way / Direction"} lang="xh" />
          <PronunciationPlayer word={"Ekhohlo"} phonetic={"[ɛ'kʰɔɬɔ]"} meaning={"Left"} lang="xh" />
          <PronunciationPlayer word={"Ekunene"} phonetic={"[ɛku'nɛːnɛ]"} meaning={"Right"} lang="xh" />
        </div>
      </div>
    ),
  },
];

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
