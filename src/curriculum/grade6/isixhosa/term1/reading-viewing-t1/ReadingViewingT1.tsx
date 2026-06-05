import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';
import PronunciationPlayer from '@/components/subjects/PronunciationPlayer';

const learnSteps: LearnStep[] = [
  {
    title: 'Read short texts and picture clues',
    image: {
      src: '/curriculum/grade6/xho/term1/reading-viewing-t1/diagram.webp',
      alt: 'Grade 6 learner reading a short dialogue and matching it to classroom pictures',
    },
    content: (
      <div className="space-y-5 text-center">
        <p className="text-lg text-slate-600">
          Reading and viewing in Term 1 focuses on short dialogues, labels, notices, and pictures. Use familiar
          vocabulary and visual clues to understand meaning.
        </p>
        <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
          <div className="rounded-xl bg-sky-50 p-4 text-left">
            <strong className="text-sky-800">Short dialogues</strong>
            <div className="mt-3 flex flex-wrap gap-2 text-sm text-sky-700">
              <span className="rounded-full bg-white px-3 py-1">speaker turns</span>
              <span className="rounded-full bg-white px-3 py-1">familiar phrases</span>
            </div>
          </div>
          <div className="rounded-xl bg-amber-50 p-4 text-left">
            <strong className="text-amber-800">Labels</strong>
            <div className="mt-3 flex flex-wrap gap-2 text-sm text-amber-700">
              <span className="rounded-full bg-white px-3 py-1">single words</span>
              <span className="rounded-full bg-white px-3 py-1">objects</span>
            </div>
          </div>
          <div className="rounded-xl bg-emerald-50 p-4 text-left">
            <strong className="text-emerald-800">Notices</strong>
            <div className="mt-3 flex flex-wrap gap-2 text-sm text-emerald-700">
              <span className="rounded-full bg-white px-3 py-1">short message</span>
              <span className="rounded-full bg-white px-3 py-1">important detail</span>
            </div>
          </div>
          <div className="rounded-xl bg-violet-50 p-4 text-left">
            <strong className="text-violet-800">Pictures</strong>
            <div className="mt-3 flex flex-wrap gap-2 text-sm text-violet-700">
              <span className="rounded-full bg-white px-3 py-1">visual clue</span>
              <span className="rounded-full bg-white px-3 py-1">match to words</span>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Match words and images accurately',
    content: (
      <div className="space-y-5 text-center">
        <p className="text-lg text-slate-600">
          Use context and picture details to match vocabulary to meaning. This helps with quick comprehension and
          reading aloud.
        </p>
        <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
          <div className="rounded-xl bg-blue-50 p-4 text-left">
            <strong className="text-blue-800">Key vocabulary</strong>
            <div className="mt-3 flex flex-wrap gap-2 text-sm text-blue-700">
              <span className="rounded-full bg-white px-3 py-1">umfundi</span>
              <span className="rounded-full bg-white px-3 py-1">itafile</span>
            </div>
          </div>
          <div className="rounded-xl bg-rose-50 p-4 text-left">
            <strong className="text-rose-800">Picture matching</strong>
            <div className="mt-3 flex flex-wrap gap-2 text-sm text-rose-700">
              <span className="rounded-full bg-white px-3 py-1">look carefully</span>
              <span className="rounded-full bg-white px-3 py-1">choose best word</span>
            </div>
          </div>
          <div className="rounded-xl bg-lime-50 p-4 text-left">
            <strong className="text-lime-800">Reading aloud</strong>
            <div className="mt-3 flex flex-wrap gap-2 text-sm text-lime-700">
              <span className="rounded-full bg-white px-3 py-1">clear voice</span>
              <span className="rounded-full bg-white px-3 py-1">right pace</span>
            </div>
          </div>
          <div className="rounded-xl bg-orange-50 p-4 text-left">
            <strong className="text-orange-800">Comprehension checks</strong>
            <div className="mt-3 flex flex-wrap gap-2 text-sm text-orange-700">
              <span className="rounded-full bg-white px-3 py-1">true or false</span>
              <span className="rounded-full bg-white px-3 py-1">detail questions</span>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Find main details in simple texts',
    content: (
      <div className="space-y-5 text-center">
        <p className="text-lg text-slate-600">
          After reading, identify the main detail: who, where, or what happened. Focus on exact words in the text.
        </p>
        <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
          <div className="rounded-xl bg-indigo-50 p-4 text-left">
            <strong className="text-indigo-800">Who?</strong>
            <div className="mt-3 flex flex-wrap gap-2 text-sm text-indigo-700">
              <span className="rounded-full bg-white px-3 py-1">person</span>
              <span className="rounded-full bg-white px-3 py-1">character</span>
            </div>
          </div>
          <div className="rounded-xl bg-teal-50 p-4 text-left">
            <strong className="text-teal-800">Where?</strong>
            <div className="mt-3 flex flex-wrap gap-2 text-sm text-teal-700">
              <span className="rounded-full bg-white px-3 py-1">place</span>
              <span className="rounded-full bg-white px-3 py-1">location clue</span>
            </div>
          </div>
          <div className="rounded-xl bg-fuchsia-50 p-4 text-left">
            <strong className="text-fuchsia-800">What?</strong>
            <div className="mt-3 flex flex-wrap gap-2 text-sm text-fuchsia-700">
              <span className="rounded-full bg-white px-3 py-1">action</span>
              <span className="rounded-full bg-white px-3 py-1">message</span>
            </div>
          </div>
          <div className="rounded-xl bg-cyan-50 p-4 text-left">
            <strong className="text-cyan-800">Text evidence</strong>
            <div className="mt-3 flex flex-wrap gap-2 text-sm text-cyan-700">
              <span className="rounded-full bg-white px-3 py-1">exact words</span>
              <span className="rounded-full bg-white px-3 py-1">check again</span>
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
          Practice these reading-and-viewing words so that key text types are easy to recognise and discuss.
        </p>
        <div className="flex flex-wrap gap-3 justify-center">
          <PronunciationPlayer word={"Ibali"} phonetic={"[i'baːli]"} meaning={"Story"} lang="xh" />
          <PronunciationPlayer word={"Isaziso"} phonetic={"[isa'ziːso]"} meaning={"Notice"} lang="xh" />
          <PronunciationPlayer word={"Isibhengezo"} phonetic={"[isi.bhɛŋ'gɛːzo]"} meaning={"Advertisement / poster"} lang="xh" />
          <PronunciationPlayer word={"Umfanekiso"} phonetic={"[umfa'nɛkiso]"} meaning={"Picture / image"} lang="xh" />
          <PronunciationPlayer word={"Umbongo"} phonetic={"[um'bɔŋgɔ]"} meaning={"Poem"} lang="xh" />
        </div>
      </div>
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'Which text type is usually written as short speaker turns?',
    options: ['Dialogue', 'Label', 'List', 'Paragraph title only'],
    answer: 'Dialogue',
    explanation: 'A dialogue shows people speaking in turns.',
  },
  {
    prompt: 'A label mostly gives…',
    options: ['a name for an object', 'a long story', 'a poem with many verses', 'a weather forecast'],
    answer: 'a name for an object',
    explanation: 'Labels are short and identify things.',
  },
  {
    prompt: 'Which strategy helps you match a word to a picture?',
    options: ['Look at details in the picture', 'Guess without looking', 'Skip the image', 'Choose the longest word'],
    answer: 'Look at details in the picture',
    explanation: 'Picture details give visual clues for meaning.',
  },
  {
    prompt: 'Which is a simple notice?',
    options: ['Library opens at 2 pm.', 'Once upon a time in a far kingdom...', 'A full life story of a hero', 'Ten pages of dialogue'],
    answer: 'Library opens at 2 pm.',
    explanation: 'A notice gives a short important message.',
  },
  {
    prompt: 'When reading aloud, what is best?',
    options: ['Use a clear voice and steady pace', 'Whisper very softly', 'Read as fast as possible', 'Skip words you know'],
    answer: 'Use a clear voice and steady pace',
    explanation: 'Clear reading helps listeners follow the text.',
  },
  {
    prompt: 'In comprehension, “Who?” asks for…',
    options: ['the person in the text', 'the colour of the paper', 'the page number only', 'the class timetable'],
    answer: 'the person in the text',
    explanation: '“Who?” focuses on people or characters.',
  },
  {
    prompt: 'True or false items are used to check…',
    options: ['understanding of key details', 'drawing skills only', 'spelling tests only', 'how fast you write'],
    answer: 'understanding of key details',
    explanation: 'They check whether statements match the text.',
  },
  {
    prompt: 'If a text says “USipho uses a ruler in class,” what is a correct detail?',
    options: ['USipho is in class', 'USipho is at a soccer field', 'USipho is sleeping', 'No learner is mentioned'],
    answer: 'USipho is in class',
    explanation: 'The sentence gives a classroom context for USipho.',
  },
  {
    prompt: 'Best way to answer a detail question?',
    options: ['Use words from the text', 'Use unrelated guesses', 'Answer with no reading', 'Copy a different question'],
    answer: 'Use words from the text',
    explanation: 'Text evidence helps you answer accurately.',
  },
];

const ReadingViewingT1 = () => (
  <CapsSubjectTopic
    title="Reading and Viewing"
    subtitle="Reading short texts, labels, notices, and picture clues"
    learnSteps={learnSteps}
    task="reading-viewing-t1"
    bank={bank}
    apiPath="/api/caps/grade6"
  />
);

export default ReadingViewingT1;
