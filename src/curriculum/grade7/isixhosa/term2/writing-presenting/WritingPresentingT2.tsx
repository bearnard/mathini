import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';
import PronunciationPlayer from '@/components/subjects/PronunciationPlayer';

const learnSteps: LearnStep[] = [
  {
    title: 'Write functional texts in clear sequence',
    image: {
      src: '/curriculum/grade7/xho/term2/writing-presenting/diagram.webp',
      alt: 'Grade 7 learner planning a diary entry and short report in isiXhosa SAL',
    },
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Term 2 writing includes <strong>diary entries, short reports, dialogues, instructions,</strong> and messages.
          Keep audience and purpose in mind.
        </p>
        <div className="grid gap-3 md:grid-cols-2">
          <div className="rounded-xl bg-emerald-50 p-4 text-left">
            <p className="font-semibold text-emerald-800">Text purpose</p>
            <p className="text-slate-600">Choose format that matches what you need to communicate.</p>
          </div>
          <div className="rounded-xl bg-yellow-50 p-4 text-left">
            <p className="font-semibold text-yellow-800">Sequence</p>
            <p className="text-slate-600">Order events and instructions logically from first to last.</p>
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
          Say these writing words clearly so that everyday transactional tasks become easier to plan and present.
        </p>
        <div className="flex flex-wrap gap-3 justify-center">
          <PronunciationPlayer word={"Idayari"} phonetic={"[i'dajari]"} meaning={"Diary"} lang="xh" />
          <PronunciationPlayer word={"Uluhlu"} phonetic={"[ulu'ɬu]"} meaning={"List"} lang="xh" />
          <PronunciationPlayer word={"Imiyalelo"} phonetic={"[imi.ja'lɛlɔ]"} meaning={"Instructions"} lang="xh" />
          <PronunciationPlayer word={"Umyalezo"} phonetic={"[umja'lɛzo]"} meaning={"Message"} lang="xh" />
          <PronunciationPlayer word={"Inkcazo"} phonetic={"[iŋ'kazɔ]"} meaning={"Description"} lang="xh" />
        </div>
      </div>
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'Which feature belongs in a diary entry?',
    options: ['date and personal reflection', 'price list table', 'bus route symbols only', 'bibliography format'],
    answer: 'date and personal reflection',
    explanation: 'Diary entries are personal and usually dated.',
  },
  {
    prompt: 'A short report should mostly include...',
    options: ['clear facts in logical order', 'random jokes', 'unrelated drawings only', 'single-word answers only'],
    answer: 'clear facts in logical order',
    explanation: 'Reports present information clearly and sequentially.',
  },
  {
    prompt: 'Which phrase helps sequence instructions?',
    options: ['Okokuqala...', 'Mhlawumbi hayi...', 'Mna kuphela...', 'Andikhumbuli...'],
    answer: 'Okokuqala...',
    explanation: 'Okokuqala introduces the first step.',
  },
  {
    prompt: 'In a message to a teacher, tone should be...',
    options: ['respectful and clear', 'rude and demanding', 'confusing and vague', 'all-capitals and shouting'],
    answer: 'respectful and clear',
    explanation: 'Formal school messages should be polite and direct.',
  },
  {
    prompt: 'What improves dialogue writing most?',
    options: ['using speaker turns and punctuation', 'removing all commas', 'writing every line as one sentence', 'changing topic each word'],
    answer: 'using speaker turns and punctuation',
    explanation: 'Dialogue needs clear turns and correct punctuation marks.',
  },
  {
    prompt: 'Which title suits an instruction text?',
    options: ['How to prepare for a class presentation', 'My favourite cloud in the sky', 'A very funny dream that I once had', 'Who am I and where do I come from?'],
    answer: 'How to prepare for a class presentation',
    explanation: 'Instruction texts use practical action-focused titles.',
  },
  {
    prompt: 'Before presenting writing, you should...',
    options: ['check grammar and spelling', 'erase every full stop', 'add unrelated slang', 'skip proofreading'],
    answer: 'check grammar and spelling',
    explanation: 'Editing helps make your writing accurate and readable.',
  },
  {
    prompt: 'Which sentence is best for a school message?',
    options: ['Nceda uzise incwadi yam ngomso, enkosi.', 'Yiza ngoku, ndikuxelela!', 'Andifuni mntu apha ngomso.', 'Mna ndiphumile nje, hamba wena.'],
    answer: 'Nceda uzise incwadi yam ngomso, enkosi.',
    explanation: 'It is polite, specific, and suitable for school communication.',
  },
];

const WritingPresentingT2 = () => (
  <CapsSubjectTopic
    title="Writing & Presenting"
    subtitle="Diary entries, short reports, dialogues, instructions, and messages"
    learnSteps={learnSteps}
    task="gr7-writing-presenting-t2"
    bank={bank}
    apiPath="/api/caps/xho"
  />
);

export default WritingPresentingT2;
