import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';

const learnSteps: LearnStep[] = [
  {
    title: 'Use tense, plurals, possessives, and punctuation accurately',
    image: {
      src: '/curriculum/grade7/xho/term1/language-structures/diagram.webp',
      alt: 'Grade 7 learners practising isiXhosa grammar cards for tense and punctuation',
    },
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Language work in Term 1 builds control of <strong>present, past, future, plurals, possessives,</strong> and
          punctuation so your speaking and writing become more accurate.
        </p>
        <div className="grid gap-3 md:grid-cols-2">
          <div className="rounded-xl bg-lime-50 p-4 text-left">
            <p className="font-semibold text-lime-800">Grammar focus</p>
            <p className="text-slate-600">Choose the correct form for meaning and time.</p>
          </div>
          <div className="rounded-xl bg-indigo-50 p-4 text-left">
            <p className="font-semibold text-indigo-800">Editing focus</p>
            <p className="text-slate-600">Fix sentence errors in spelling and punctuation.</p>
          </div>
        </div>
      </div>
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'Choose the present tense sentence.',
    options: ['Ndifunda incwadi namhlanje.', 'Ndifunde incwadi izolo.', 'Ndiza kufunda incwadi ngomso.', 'Bafundile kudala.'],
    answer: 'Ndifunda incwadi namhlanje.',
    explanation: 'Ndifunda shows an action happening now.',
  },
  {
    prompt: 'Which sentence is in the past tense?',
    options: ['Siye evenkileni izolo.', 'Siya evenkileni ngoku.', 'Siza kuya evenkileni ngomso.', 'Siya kuhlala ekhaya.'],
    answer: 'Siye evenkileni izolo.',
    explanation: 'Izolo and siye indicate past time.',
  },
  {
    prompt: 'Which option shows future tense?',
    options: ['Uza kudlala ibhola ngomso.', 'Udlala ibhola ngoku.', 'Udlale ibhola izolo.', 'Wayedlala kudala.'],
    answer: 'Uza kudlala ibhola ngomso.',
    explanation: 'Uza... and ngomso indicate future action.',
  },
  {
    prompt: 'Choose the correct plural form.',
    options: ['incwadi → iincwadi', 'isikolo → isikolo', 'umfundi → umfundi', 'igama → igama'],
    answer: 'incwadi → iincwadi',
    explanation: 'Iincwadi is the plural of incwadi.',
  },
  {
    prompt: 'Which option shows possession correctly?',
    options: ['incwadi kaLuvo', 'incwadi noLuvo', 'incwadi kodwa Luvo', 'incwadi ukuba Luvo'],
    answer: 'incwadi kaLuvo',
    explanation: 'ka- forms often show possession with names.',
  },
  {
    prompt: 'Pick the sentence with correct end punctuation.',
    options: ['Ufunda phi?', 'Ufunda phi.', 'Ufunda phi,', 'Ufunda phi!?!?'],
    answer: 'Ufunda phi?',
    explanation: 'A question should end with a question mark.',
  },
  {
    prompt: 'Which sentence uses a pronoun properly?',
    options: ['Yena uyacula kakuhle.', 'Yena icula kakuhle.', 'Yena bayacula kakuhle.', 'Yena ndicula kakuhle.'],
    answer: 'Yena uyacula kakuhle.',
    explanation: 'The pronoun and verb form agree correctly here.',
  },
  {
    prompt: 'What is the best reason to edit punctuation?',
    options: ['to make meaning clear', 'to make sentences longer only', 'to remove all full stops', 'to avoid paragraphing'],
    answer: 'to make meaning clear',
    explanation: 'Correct punctuation helps readers understand meaning.',
  },
];

const LanguageStructuresT1 = () => (
  <CapsSubjectTopic
    title="Language Structures"
    subtitle="Tenses, plurals, possessives, vocabulary, and punctuation"
    learnSteps={learnSteps}
    task="gr7-language-structures-t1"
    bank={bank}
    apiPath="/api/caps/xho"
  />
);

export default LanguageStructuresT1;
