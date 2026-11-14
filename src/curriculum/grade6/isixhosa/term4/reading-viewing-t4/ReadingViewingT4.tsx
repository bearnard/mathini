import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';
import PronunciationPlayer from '@/components/subjects/PronunciationPlayer';

const learnSteps: LearnStep[] = [
  {
    title: 'Read mixed texts for key ideas',
    content: (
      <div className="space-y-5 text-center">
        <p className="text-lg text-slate-600">
          Reading & Viewing in Term 4 includes <strong>notices, stories, and mixed revision passages</strong>. Use
          reading strategies to identify the main idea and important details.
        </p>
        <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
          <div className="rounded-xl bg-sky-50 p-4 text-left">
            <strong className="text-sky-800">Notice</strong>
            <div className="mt-3 flex flex-wrap gap-2 text-sm text-sky-700">
              <span className="rounded-full bg-white px-3 py-1">date</span>
              <span className="rounded-full bg-white px-3 py-1">place</span>
              <span className="rounded-full bg-white px-3 py-1">purpose</span>
            </div>
          </div>
          <div className="rounded-xl bg-emerald-50 p-4 text-left">
            <strong className="text-emerald-800">Story</strong>
            <div className="mt-3 flex flex-wrap gap-2 text-sm text-emerald-700">
              <span className="rounded-full bg-white px-3 py-1">characters</span>
              <span className="rounded-full bg-white px-3 py-1">setting</span>
              <span className="rounded-full bg-white px-3 py-1">events</span>
            </div>
          </div>
          <div className="rounded-xl bg-amber-50 p-4 text-left">
            <strong className="text-amber-800">Passage</strong>
            <div className="mt-3 flex flex-wrap gap-2 text-sm text-amber-700">
              <span className="rounded-full bg-white px-3 py-1">main idea</span>
              <span className="rounded-full bg-white px-3 py-1">supporting detail</span>
            </div>
          </div>
          <div className="rounded-xl bg-violet-50 p-4 text-left">
            <strong className="text-violet-800">Revision</strong>
            <div className="mt-3 flex flex-wrap gap-2 text-sm text-violet-700">
              <span className="rounded-full bg-white px-3 py-1">read again</span>
              <span className="rounded-full bg-white px-3 py-1">answer carefully</span>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Apply comprehension strategies',
    content: (
      <div className="space-y-5 text-center">
        <p className="text-lg text-slate-600">
          Good comprehension means finding information directly, making simple inferences, and using clues from the
          text.
        </p>
        <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
          <div className="rounded-xl bg-indigo-50 p-4 text-left">
            <strong className="text-indigo-800">Skim</strong>
            <div className="mt-3 flex flex-wrap gap-2 text-sm text-indigo-700">
              <span className="rounded-full bg-white px-3 py-1">quick overview</span>
              <span className="rounded-full bg-white px-3 py-1">headline idea</span>
            </div>
          </div>
          <div className="rounded-xl bg-rose-50 p-4 text-left">
            <strong className="text-rose-800">Scan</strong>
            <div className="mt-3 flex flex-wrap gap-2 text-sm text-rose-700">
              <span className="rounded-full bg-white px-3 py-1">specific detail</span>
              <span className="rounded-full bg-white px-3 py-1">name or date</span>
            </div>
          </div>
          <div className="rounded-xl bg-lime-50 p-4 text-left">
            <strong className="text-lime-800">Infer</strong>
            <div className="mt-3 flex flex-wrap gap-2 text-sm text-lime-700">
              <span className="rounded-full bg-white px-3 py-1">text clue</span>
              <span className="rounded-full bg-white px-3 py-1">best guess</span>
            </div>
          </div>
          <div className="rounded-xl bg-cyan-50 p-4 text-left">
            <strong className="text-cyan-800">Summarise</strong>
            <div className="mt-3 flex flex-wrap gap-2 text-sm text-cyan-700">
              <span className="rounded-full bg-white px-3 py-1">short key points</span>
              <span className="rounded-full bg-white px-3 py-1">no extra detail</span>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Choose strong summaries',
    content: (
      <div className="space-y-5 text-center">
        <p className="text-lg text-slate-600">
          A strong summary includes the most important ideas in fewer words. It keeps meaning accurate and leaves out
          repeated or minor details.
        </p>
        <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
          <div className="rounded-xl bg-teal-50 p-4 text-left">
            <strong className="text-teal-800">Keep</strong>
            <div className="mt-3 flex flex-wrap gap-2 text-sm text-teal-700">
              <span className="rounded-full bg-white px-3 py-1">main message</span>
              <span className="rounded-full bg-white px-3 py-1">key facts</span>
            </div>
          </div>
          <div className="rounded-xl bg-orange-50 p-4 text-left">
            <strong className="text-orange-800">Remove</strong>
            <div className="mt-3 flex flex-wrap gap-2 text-sm text-orange-700">
              <span className="rounded-full bg-white px-3 py-1">repetition</span>
              <span className="rounded-full bg-white px-3 py-1">tiny details</span>
            </div>
          </div>
          <div className="rounded-xl bg-fuchsia-50 p-4 text-left">
            <strong className="text-fuchsia-800">Link</strong>
            <div className="mt-3 flex flex-wrap gap-2 text-sm text-fuchsia-700">
              <span className="rounded-full bg-white px-3 py-1">logical flow</span>
              <span className="rounded-full bg-white px-3 py-1">clear sentences</span>
            </div>
          </div>
          <div className="rounded-xl bg-yellow-50 p-4 text-left">
            <strong className="text-yellow-800">Check</strong>
            <div className="mt-3 flex flex-wrap gap-2 text-sm text-yellow-700">
              <span className="rounded-full bg-white px-3 py-1">same meaning</span>
              <span className="rounded-full bg-white px-3 py-1">correct length</span>
            </div>
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
          Keep these comprehension words ready while revising stories, visual texts, and summary skills.
        </p>
        <div className="flex flex-wrap gap-3 justify-center">
          <PronunciationPlayer word={"Ibali"} phonetic={"[i'baːli]"} meaning={"Story"} lang="xh" />
          <PronunciationPlayer word={"Umbongo"} phonetic={"[um'bɔŋgɔ]"} meaning={"Poem"} lang="xh" />
          <PronunciationPlayer word={"Isibhengezo"} phonetic={"[isi.bhɛŋ'gɛːzo]"} meaning={"Advert / poster"} lang="xh" />
          <PronunciationPlayer word={"Isishwankathelo"} phonetic={"[isiʃwaŋka'tʰeːlɔ]"} meaning={"Summary"} lang="xh" />
          <PronunciationPlayer word={"Ingcinga"} phonetic={"[iŋ'ciŋga]"} meaning={"Idea / thought"} lang="xh" />
        </div>
      </div>
    ),
  },
];

export const bank: CapsItem[] = [
  {
    prompt: 'What is the main purpose of a notice?',
    options: ['To give important information quickly', 'To tell a long fantasy story', 'To describe only one character', 'To test multiplication tables'],
    answer: 'To give important information quickly',
    explanation: 'Notices are short texts that share practical information such as date, place, and purpose.',
  },
  {
    prompt: 'When you scan a text, you are looking for…',
    options: ['specific details like a name or date', 'every word in deep detail', 'rhyming words only', 'the author’s drawing style'],
    answer: 'specific details like a name or date',
    explanation: 'Scanning helps readers locate exact information fast.',
  },
  {
    prompt: 'Which is the best question for identifying a main idea?',
    options: ['What is this text mostly about?', 'How many commas are in line 3?', 'Which word has the most letters?', 'What colour is the notebook?'],
    answer: 'What is this text mostly about?',
    explanation: 'Main idea questions focus on the overall message of the passage.',
  },
  {
    prompt: 'A passage says, “Clouds darkened and learners ran inside.” What is a sensible inference?',
    options: ['Rain was likely coming', 'A birthday cake arrived', 'The class moved to a museum', 'The school day was cancelled for a month'],
    answer: 'Rain was likely coming',
    explanation: 'Dark clouds and running indoors are clues that suggest rain.',
  },
  {
    prompt: 'Which summary choice is strongest?',
    options: ['A short version with key points and correct meaning', 'A copy of every sentence from the passage', 'Only one random detail from the middle', 'A personal opinion that changes the text'],
    answer: 'A short version with key points and correct meaning',
    explanation: 'Strong summaries keep important ideas and stay true to the original text.',
  },
  {
    prompt: 'In a story text, which detail helps identify setting?',
    options: ['where and when events happen', 'the number of adjectives only', 'the font size on the page', 'the reader’s favourite snack'],
    answer: 'where and when events happen',
    explanation: 'Setting tells us place and time in a story.',
  },
  {
    prompt: 'Why should you read comprehension questions carefully?',
    options: ['To answer what is actually asked', 'To skip important details quickly', 'To choose the longest option always', 'To avoid using evidence from the text'],
    answer: 'To answer what is actually asked',
    explanation: 'Careful reading helps you match the answer to the exact question focus.',
  },
  {
    prompt: 'What should be removed from a summary first?',
    options: ['repeated minor details', 'the main topic sentence', 'all important evidence', 'every verb in the text'],
    answer: 'repeated minor details',
    explanation: 'Summaries should remove repeated and less important information.',
  },
  {
    prompt: 'Which activity best supports Term 4 Reading & Viewing revision?',
    options: ['Practising mixed texts such as notices and stories', 'Memorising one line of one poem', 'Avoiding all of the revision passages', 'Writing science formulas and nothing else'],
    answer: 'Practising mixed texts such as notices and stories',
    explanation: 'Term 4 focuses on mixed familiar genres and revision reading strategies.',
  },
];

const ReadingViewingT4 = () => (
  <CapsSubjectTopic
    title="Reading & Viewing"
    subtitle="Comprehension across notices, stories, and revision passages"
    learnSteps={learnSteps}
    task="reading-viewing-t4"
    bank={bank}
    apiPath="/api/caps/grade6"
  />
);

export default ReadingViewingT4;
