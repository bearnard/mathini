import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';
import PronunciationPlayer from '@/components/subjects/PronunciationPlayer';

const learnSteps: LearnStep[] = [
  {
    title: 'Consolidate exam-oriented writing and proofreading',
    image: {
      src: '/curriculum/grade8/xho/term4/writing-presenting/diagram.webp',
      alt: 'Grade 8 learner practising summary, report and review writing with proofreading notes',
    },
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Term 4 writing includes <strong>summary writing, reports, reviews, exam responses,</strong> and proofreading.
        </p>
        <p className="text-slate-600">
          Select key details carefully, apply formats correctly, and edit for final accuracy.
        </p>
      </div>
    ),
  },

  {
    title: "Pronunciation practice",
    content: (
      <div className="space-y-4">
        <p className="text-center text-sm text-gray-600 dark:text-gray-300">
          Use these revision words while polishing messages, reviews, summaries, and final written responses.
        </p>
        <div className="flex flex-wrap gap-3 justify-center">
          <PronunciationPlayer word={"Umhlathi"} phonetic={"[um'ɬaːti]"} meaning={"Paragraph"} lang="xh" />
          <PronunciationPlayer word={"Umyalezo"} phonetic={"[umja'lɛzo]"} meaning={"Message"} lang="xh" />
          <PronunciationPlayer word={"Uphononongo"} phonetic={"[upʰɔ.nɔ'nɔŋgɔ]"} meaning={"Review"} lang="xh" />
          <PronunciationPlayer word={"Isishwankathelo"} phonetic={"[isiʃwaŋka'tʰeːlɔ]"} meaning={"Summary"} lang="xh" />
          <PronunciationPlayer word={"Ukuhlela"} phonetic={"[uku'ɬɛla]"} meaning={"Editing"} lang="xh" />
        </div>
      </div>
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'In summary writing, the first step is to...',
    options: ['identify key ideas in the source', 'copy every sentence', 'add personal stories', 'change the topic'],
    answer: 'identify key ideas in the source',
    explanation: 'Summaries begin by selecting main points.',
  },
  {
    prompt: 'A report should primarily be...',
    options: ['clear, factual, and organised', 'purely imaginative', 'written as a poem', 'without sections'],
    answer: 'clear, factual, and organised',
    explanation: 'Reports communicate information accurately and logically.',
  },
  {
    prompt: 'A review becomes stronger when it...',
    options: ['includes judgment with reasons', 'lists random words', 'avoids any opinion', 'ignores the text'],
    answer: 'includes judgment with reasons',
    explanation: 'Reviews evaluate and justify viewpoints.',
  },
  {
    prompt: 'Proofreading mainly checks...',
    options: ['grammar, spelling, and punctuation', 'desk arrangement', 'paper thickness', 'font popularity'],
    answer: 'grammar, spelling, and punctuation',
    explanation: 'Proofreading improves technical accuracy.',
  },
  {
    prompt: 'Exam writing is improved by...',
    options: ['planning before drafting', 'writing immediately without reading instructions', 'skipping structure', 'changing topic midway'],
    answer: 'planning before drafting',
    explanation: 'Brief planning helps structure better answers under time limits.',
  },
  {
    prompt: 'Choosing key details for a summary means...',
    options: ['keeping what is essential', 'including every example', 'copying quotations only', 'adding extra facts'],
    answer: 'keeping what is essential',
    explanation: 'Only essential points belong in a concise summary.',
  },
  {
    prompt: 'When revising a report draft, you should...',
    options: ['check clarity and sequence', 'remove all connectors', 'delete all punctuation', 'ignore audience'],
    answer: 'check clarity and sequence',
    explanation: 'Clear sequence and expression improve readability.',
  },
  {
    prompt: 'Final editing should happen...',
    options: ['after completing the full draft', 'before reading the question', 'instead of writing', 'during title selection only'],
    answer: 'after completing the full draft',
    explanation: 'Editing the full draft helps catch language issues effectively.',
  },
];

const WritingPresentingT4 = () => (
  <CapsSubjectTopic
    title="Writing & Presenting"
    subtitle="Summary writing, reports, reviews, exam writing, and proofreading"
    learnSteps={learnSteps}
    task="gr8-writing-presenting-t4"
    bank={bank}
    apiPath="/api/caps/xho"
  />
);

export default WritingPresentingT4;
