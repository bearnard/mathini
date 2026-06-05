import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';
import PronunciationPlayer from '@/components/subjects/PronunciationPlayer';

const learnSteps: LearnStep[] = [
  {
    title: 'Write simple sentences about yourself',
    image: {
      src: '/curriculum/grade6/xho/term1/writing-presenting-t1/diagram.webp',
      alt: 'Grade 6 learner writing short isiXhosa sentences about personal details and family',
    },
    content: (
      <div className="space-y-5 text-center">
        <p className="text-lg text-slate-600">
          Writing and presenting starts with short, correct sentences. Learners share personal details such as name,
          age, and school using familiar isiXhosa vocabulary.
        </p>
        <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
          <div className="rounded-xl bg-sky-50 p-4 text-left">
            <strong className="text-sky-800">Personal details</strong>
            <div className="mt-3 flex flex-wrap gap-2 text-sm text-sky-700">
              <span className="rounded-full bg-white px-3 py-1">igama</span>
              <span className="rounded-full bg-white px-3 py-1">ubudala</span>
            </div>
          </div>
          <div className="rounded-xl bg-amber-50 p-4 text-left">
            <strong className="text-amber-800">Simple sentence</strong>
            <div className="mt-3 flex flex-wrap gap-2 text-sm text-amber-700">
              <span className="rounded-full bg-white px-3 py-1">subject</span>
              <span className="rounded-full bg-white px-3 py-1">verb</span>
            </div>
          </div>
          <div className="rounded-xl bg-emerald-50 p-4 text-left">
            <strong className="text-emerald-800">Correct spacing</strong>
            <div className="mt-3 flex flex-wrap gap-2 text-sm text-emerald-700">
              <span className="rounded-full bg-white px-3 py-1">separate words</span>
              <span className="rounded-full bg-white px-3 py-1">neat writing</span>
            </div>
          </div>
          <div className="rounded-xl bg-violet-50 p-4 text-left">
            <strong className="text-violet-800">Capital + full stop</strong>
            <div className="mt-3 flex flex-wrap gap-2 text-sm text-violet-700">
              <span className="rounded-full bg-white px-3 py-1">start correctly</span>
              <span className="rounded-full bg-white px-3 py-1">end correctly</span>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Build family paragraphs, captions, and lists',
    content: (
      <div className="space-y-5 text-center">
        <p className="text-lg text-slate-600">
          Learners practise a short family paragraph, picture captions, and simple lists. Keep ideas connected and
          easy to understand.
        </p>
        <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
          <div className="rounded-xl bg-blue-50 p-4 text-left">
            <strong className="text-blue-800">Family paragraph</strong>
            <div className="mt-3 flex flex-wrap gap-2 text-sm text-blue-700">
              <span className="rounded-full bg-white px-3 py-1">2–4 sentences</span>
              <span className="rounded-full bg-white px-3 py-1">same topic</span>
            </div>
          </div>
          <div className="rounded-xl bg-rose-50 p-4 text-left">
            <strong className="text-rose-800">Caption</strong>
            <div className="mt-3 flex flex-wrap gap-2 text-sm text-rose-700">
              <span className="rounded-full bg-white px-3 py-1">short description</span>
              <span className="rounded-full bg-white px-3 py-1">matches picture</span>
            </div>
          </div>
          <div className="rounded-xl bg-lime-50 p-4 text-left">
            <strong className="text-lime-800">List writing</strong>
            <div className="mt-3 flex flex-wrap gap-2 text-sm text-lime-700">
              <span className="rounded-full bg-white px-3 py-1">clear items</span>
              <span className="rounded-full bg-white px-3 py-1">same category</span>
            </div>
          </div>
          <div className="rounded-xl bg-orange-50 p-4 text-left">
            <strong className="text-orange-800">Sentence order</strong>
            <div className="mt-3 flex flex-wrap gap-2 text-sm text-orange-700">
              <span className="rounded-full bg-white px-3 py-1">first idea</span>
              <span className="rounded-full bg-white px-3 py-1">supporting ideas</span>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Present personal information clearly',
    content: (
      <div className="space-y-5 text-center">
        <p className="text-lg text-slate-600">
          Presenting means reading or saying your writing clearly. Speak loudly enough, keep eye contact, and share
          key personal information in order.
        </p>
        <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
          <div className="rounded-xl bg-indigo-50 p-4 text-left">
            <strong className="text-indigo-800">Voice</strong>
            <div className="mt-3 flex flex-wrap gap-2 text-sm text-indigo-700">
              <span className="rounded-full bg-white px-3 py-1">clear volume</span>
              <span className="rounded-full bg-white px-3 py-1">steady speed</span>
            </div>
          </div>
          <div className="rounded-xl bg-teal-50 p-4 text-left">
            <strong className="text-teal-800">Order</strong>
            <div className="mt-3 flex flex-wrap gap-2 text-sm text-teal-700">
              <span className="rounded-full bg-white px-3 py-1">name first</span>
              <span className="rounded-full bg-white px-3 py-1">family detail next</span>
            </div>
          </div>
          <div className="rounded-xl bg-fuchsia-50 p-4 text-left">
            <strong className="text-fuchsia-800">Audience awareness</strong>
            <div className="mt-3 flex flex-wrap gap-2 text-sm text-fuchsia-700">
              <span className="rounded-full bg-white px-3 py-1">face listeners</span>
              <span className="rounded-full bg-white px-3 py-1">polite language</span>
            </div>
          </div>
          <div className="rounded-xl bg-cyan-50 p-4 text-left">
            <strong className="text-cyan-800">Final check</strong>
            <div className="mt-3 flex flex-wrap gap-2 text-sm text-cyan-700">
              <span className="rounded-full bg-white px-3 py-1">spelling</span>
              <span className="rounded-full bg-white px-3 py-1">punctuation</span>
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
          Practise these personal-information words aloud before writing simple sentences and short paragraphs.
        </p>
        <div className="flex flex-wrap gap-3 justify-center">
          <PronunciationPlayer word={"Ndingu..."} phonetic={"[ndiŋ'gu]"} meaning={"I am ... / My name is ..."} lang="xh" />
          <PronunciationPlayer word={"Igama"} phonetic={"[i'gama]"} meaning={"Name"} lang="xh" />
          <PronunciationPlayer word={"Ikhaya"} phonetic={"[i'kʰaja]"} meaning={"Home"} lang="xh" />
          <PronunciationPlayer word={"Isikolo"} phonetic={"[isi'kɔlɔ]"} meaning={"School"} lang="xh" />
          <PronunciationPlayer word={"Umhlobo"} phonetic={"[um'ɬɔbɔ]"} meaning={"Friend"} lang="xh" />
        </div>
      </div>
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'Which sentence is a correct simple personal sentence?',
    options: ['Ndingu Litha.', 'ndingu litha', 'Ndingu Litha', 'ndingu Litha.'],
    answer: 'Ndingu Litha.',
    explanation: 'It starts with a capital letter and ends with a full stop.',
  },
  {
    prompt: 'What should a family paragraph mainly do?',
    options: ['Stay on one topic about family', 'Jump to many unrelated ideas', 'Use only single words', 'Avoid punctuation completely'],
    answer: 'Stay on one topic about family',
    explanation: 'Paragraphs are clearer when all sentences connect to one topic.',
  },
  {
    prompt: 'A caption is best described as…',
    options: ['a short line describing a picture', 'a long speech', 'a maths formula', 'a random word list'],
    answer: 'a short line describing a picture',
    explanation: 'Captions briefly explain what is shown in an image.',
  },
  {
    prompt: 'Which is a useful order when presenting personal information?',
    options: ['Name, then key details', 'Details, then no name', 'Only your surname', 'No clear order'],
    answer: 'Name, then key details',
    explanation: 'A clear sequence helps your audience follow.',
  },
  {
    prompt: 'Which list is grouped correctly?',
    options: ['umama, utata, udade', 'isikolo, run, quickly', 'Molo, 7, because', 'blue, table, yesterday'],
    answer: 'umama, utata, udade',
    explanation: 'All three words are family members.',
  },
  {
    prompt: 'What helps your writing look neat and readable?',
    options: ['Leave spaces between words', 'Join all words together', 'Write without line breaks always', 'Use only capital letters'],
    answer: 'Leave spaces between words',
    explanation: 'Spacing improves readability.',
  },
  {
    prompt: 'During presenting, what should you do?',
    options: ['Speak clearly to the audience', 'Look away and whisper', 'Read as fast as possible', 'Skip difficult words silently'],
    answer: 'Speak clearly to the audience',
    explanation: 'Clear speech and audience focus improve presenting.',
  },
  {
    prompt: 'Which sentence should come first in a short personal paragraph?',
    options: ['A sentence introducing yourself', 'A random closing sentence', 'An unrelated weather sentence', 'A list of punctuation marks'],
    answer: 'A sentence introducing yourself',
    explanation: 'Start by introducing the main subject: yourself.',
  },
  {
    prompt: 'Before submitting writing, you should check…',
    options: ['spelling and punctuation', 'shoe colour', 'desk size', 'class bell time only'],
    answer: 'spelling and punctuation',
    explanation: 'Final checks improve correctness and clarity.',
  },
];

const WritingPresentingT1 = () => (
  <CapsSubjectTopic
    title="Writing and Presenting"
    subtitle="Writing simple sentences and presenting personal information"
    learnSteps={learnSteps}
    task="writing-presenting-t1"
    bank={bank}
    apiPath="/api/caps/grade6"
  />
);

export default WritingPresentingT1;
