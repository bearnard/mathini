import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';
import PronunciationPlayer from '@/components/subjects/PronunciationPlayer';

const learnSteps: LearnStep[] = [
  {
    title: 'Consolidate grammar skills for Grade 8 readiness',
    image: {
      src: '/curriculum/grade7/xho/term4/language-structures/diagram.webp',
      alt: 'Grade 7 learners revising isiXhosa tenses, pronouns, and spelling rules',
    },
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Term 4 language revision consolidates <strong>tenses, pronouns, question forms, concords,</strong> and
          spelling to support end-of-year assessment and transition to Grade 8.
        </p>
        <div className="grid gap-3 md:grid-cols-2">
          <div className="rounded-xl bg-sky-50 p-4 text-left">
            <p className="font-semibold text-sky-800">Revision drills</p>
            <p className="text-slate-600">Practise mixed grammar items in exam-style MCQs.</p>
          </div>
          <div className="rounded-xl bg-orange-50 p-4 text-left">
            <p className="font-semibold text-orange-800">Proofreading</p>
            <p className="text-slate-600">Spot and fix sentence and spelling errors quickly.</p>
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
          Keep these core grammar words active in memory while revising forms, tense control, and punctuation.
        </p>
        <div className="flex flex-wrap gap-3 justify-center">
          <PronunciationPlayer word={"Isibizo"} phonetic={"[isi'biːzo]"} meaning={"Noun"} lang="xh" />
          <PronunciationPlayer word={"Isimelabizo"} phonetic={"[isi.mɛla'biːzo]"} meaning={"Pronoun"} lang="xh" />
          <PronunciationPlayer word={"Ixesha"} phonetic={"[i'kʰeʃa]"} meaning={"Tense / time"} lang="xh" />
          <PronunciationPlayer word={"Kwaye"} phonetic={"[kwa'jɛ]"} meaning={"And"} lang="xh" />
          <PronunciationPlayer word={"Kodwa"} phonetic={"[kɔ'dwa]"} meaning={"But"} lang="xh" />
          <PronunciationPlayer word={"Isiphumlisi"} phonetic={"[isi.pʰum'liːsi]"} meaning={"Punctuation mark"} lang="xh" />
        </div>
      </div>
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'Choose the sentence in present tense.',
    options: ['Sifunda isiXhosa yonke imihla.', 'Sifunde isiXhosa izolo.', 'Siza kufunda isiXhosa ngomso.', 'Sasifunda kudala.'],
    answer: 'Sifunda isiXhosa yonke imihla.',
    explanation: 'Sifunda shows a current/habitual action.',
  },
  {
    prompt: 'Which sentence is correctly in future tense?',
    options: ['Ndiza kubhala uvavanyo ngomso.', 'Ndibhala uvavanyo ngoku.', 'Ndibhale uvavanyo izolo.', 'Ndibhalele uvavanyo izolo.'],
    answer: 'Ndiza kubhala uvavanyo ngomso.',
    explanation: 'Ndiza kubhala indicates future action.',
  },
  {
    prompt: 'Pick the correct pronoun sentence.',
    options: ['Bona bayadlala ebaleni.', 'Bona ndiyadlala ebaleni.', 'Bona uyadlala ebaleni.', 'Bona siyadlala ebaleni.'],
    answer: 'Bona bayadlala ebaleni.',
    explanation: 'Bona agrees with plural concord baya-.',
  },
  {
    prompt: 'Which option is a correct question form?',
    options: ['Nihlala phi nina?', 'Nihlala phi nina.', 'Nihlala phi nina,', 'Nihlala phi nina!'],
    answer: 'Nihlala phi nina?',
    explanation: 'The question punctuation and wording are correct.',
  },
  {
    prompt: 'Choose the sentence with correct concord.',
    options: ['Umfundi uyafunda.', 'Umfundi bayafunda.', 'Umfundi siyafunda.', 'Umfundi ndiyafunda.'],
    answer: 'Umfundi uyafunda.',
    explanation: 'Singular subject umfundi takes u- concord.',
  },
  {
    prompt: 'Which word is spelled correctly?',
    options: ['isikolo', 'isikollo', 'isikhollo', 'isikkolo'],
    answer: 'isikolo',
    explanation: 'isikolo is the correct spelling.',
  },
  {
    prompt: 'What is the aim of proofreading tasks?',
    options: ['to find and fix language errors', 'to memorise facts for the exam', 'to take the place of the reading tasks', 'to avoid using punctuation in the text'],
    answer: 'to find and fix language errors',
    explanation: 'Proofreading improves final language accuracy.',
  },
  {
    prompt: 'Why revise mixed grammar in Term 4?',
    options: ['to strengthen exam readiness', 'to remove sentence practice', 'to skip writing work', 'to avoid Grade 8 preparation'],
    answer: 'to strengthen exam readiness',
    explanation: 'Integrated revision prepares learners for final assessments.',
  },
];

const LanguageStructuresT4 = () => (
  <CapsSubjectTopic
    title="Language Structures"
    subtitle="Revision of tenses, pronouns, questions, concords, and spelling"
    learnSteps={learnSteps}
    task="gr7-language-structures-t4"
    bank={bank}
    apiPath="/api/caps/xho"
  />
);

export default LanguageStructuresT4;
