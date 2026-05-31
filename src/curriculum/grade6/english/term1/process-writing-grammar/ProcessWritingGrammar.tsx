import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';

const learnSteps: LearnStep[] = [
  {
    title: 'Process writing works step by step',
    image: {
      src: '/curriculum/grade6/eng/term1/process-writing-grammar/diagram.webp',
      alt: 'learner planning drafting and editing a piece of writing at a desk',
    },
    content: (
      <div className="space-y-5 text-center">
        <p className="text-lg text-slate-600">
          Strong writing grows through a process. We <strong>plan</strong>, <strong>draft</strong>,
          <strong> revise</strong>, and <strong>edit</strong> so the final piece is clear and well organised.
        </p>
        <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
          <div className="rounded-xl bg-sky-50 p-4 text-left">
            <strong className="text-sky-800">Plan</strong>
            <div className="mt-3 flex flex-wrap gap-2 text-sm text-sky-700">
              <span className="rounded-full bg-white px-3 py-1">ideas</span>
              <span className="rounded-full bg-white px-3 py-1">purpose</span>
              <span className="rounded-full bg-white px-3 py-1">order</span>
            </div>
          </div>
          <div className="rounded-xl bg-amber-50 p-4 text-left">
            <strong className="text-amber-800">Draft</strong>
            <div className="mt-3 flex flex-wrap gap-2 text-sm text-amber-700">
              <span className="rounded-full bg-white px-3 py-1">first version</span>
              <span className="rounded-full bg-white px-3 py-1">full sentences</span>
            </div>
          </div>
          <div className="rounded-xl bg-emerald-50 p-4 text-left">
            <strong className="text-emerald-800">Revise</strong>
            <div className="mt-3 flex flex-wrap gap-2 text-sm text-emerald-700">
              <span className="rounded-full bg-white px-3 py-1">improve ideas</span>
              <span className="rounded-full bg-white px-3 py-1">better paragraphs</span>
            </div>
          </div>
          <div className="rounded-xl bg-rose-50 p-4 text-left">
            <strong className="text-rose-800">Edit</strong>
            <div className="mt-3 flex flex-wrap gap-2 text-sm text-rose-700">
              <span className="rounded-full bg-white px-3 py-1">spelling</span>
              <span className="rounded-full bg-white px-3 py-1">punctuation</span>
              <span className="rounded-full bg-white px-3 py-1">grammar</span>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Choose the right text type for the job',
    content: (
      <div className="space-y-5 text-center">
        <p className="text-lg text-slate-600">
          Writers choose a text type that matches the task. Summaries are short, narratives tell events,
          descriptions paint pictures, friendly letters speak to a person, and dialogue shows spoken words.
        </p>
        <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-5">
          <div className="rounded-xl bg-blue-50 p-4 text-left">
            <strong className="text-blue-800">Summary</strong>
            <div className="mt-3 flex flex-wrap gap-2 text-sm text-blue-700">
              <span className="rounded-full bg-white px-3 py-1">main points</span>
              <span className="rounded-full bg-white px-3 py-1">brief</span>
            </div>
          </div>
          <div className="rounded-xl bg-purple-50 p-4 text-left">
            <strong className="text-purple-800">Narrative essay</strong>
            <div className="mt-3 flex flex-wrap gap-2 text-sm text-purple-700">
              <span className="rounded-full bg-white px-3 py-1">story</span>
              <span className="rounded-full bg-white px-3 py-1">characters</span>
            </div>
          </div>
          <div className="rounded-xl bg-teal-50 p-4 text-left">
            <strong className="text-teal-800">Descriptive essay</strong>
            <div className="mt-3 flex flex-wrap gap-2 text-sm text-teal-700">
              <span className="rounded-full bg-white px-3 py-1">senses</span>
              <span className="rounded-full bg-white px-3 py-1">detail</span>
            </div>
          </div>
          <div className="rounded-xl bg-orange-50 p-4 text-left">
            <strong className="text-orange-800">Friendly letter</strong>
            <div className="mt-3 flex flex-wrap gap-2 text-sm text-orange-700">
              <span className="rounded-full bg-white px-3 py-1">greeting</span>
              <span className="rounded-full bg-white px-3 py-1">sign-off</span>
            </div>
          </div>
          <div className="rounded-xl bg-indigo-50 p-4 text-left">
            <strong className="text-indigo-800">Dialogue</strong>
            <div className="mt-3 flex flex-wrap gap-2 text-sm text-indigo-700">
              <span className="rounded-full bg-white px-3 py-1">spoken words</span>
              <span className="rounded-full bg-white px-3 py-1">quotation marks</span>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Grammar and paragraphing make writing clear',
    content: (
      <div className="space-y-5 text-center">
        <p className="text-lg text-slate-600">
          Good grammar helps readers follow ideas. We use nouns, pronouns, conjunctions, and adverbs well,
          and we organise ideas into clear paragraphs with correct punctuation.
        </p>
        <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-5">
          <div className="rounded-xl bg-lime-50 p-4 text-left">
            <strong className="text-lime-800">Noun</strong>
            <div className="mt-3 flex flex-wrap gap-2 text-sm text-lime-700">
              <span className="rounded-full bg-white px-3 py-1">person</span>
              <span className="rounded-full bg-white px-3 py-1">place</span>
              <span className="rounded-full bg-white px-3 py-1">thing</span>
            </div>
          </div>
          <div className="rounded-xl bg-fuchsia-50 p-4 text-left">
            <strong className="text-fuchsia-800">Pronoun</strong>
            <div className="mt-3 flex flex-wrap gap-2 text-sm text-fuchsia-700">
              <span className="rounded-full bg-white px-3 py-1">he</span>
              <span className="rounded-full bg-white px-3 py-1">she</span>
              <span className="rounded-full bg-white px-3 py-1">they</span>
            </div>
          </div>
          <div className="rounded-xl bg-cyan-50 p-4 text-left">
            <strong className="text-cyan-800">Conjunction</strong>
            <div className="mt-3 flex flex-wrap gap-2 text-sm text-cyan-700">
              <span className="rounded-full bg-white px-3 py-1">and</span>
              <span className="rounded-full bg-white px-3 py-1">but</span>
              <span className="rounded-full bg-white px-3 py-1">because</span>
            </div>
          </div>
          <div className="rounded-xl bg-red-50 p-4 text-left">
            <strong className="text-red-800">Adverb</strong>
            <div className="mt-3 flex flex-wrap gap-2 text-sm text-red-700">
              <span className="rounded-full bg-white px-3 py-1">how</span>
              <span className="rounded-full bg-white px-3 py-1">when</span>
              <span className="rounded-full bg-white px-3 py-1">where</span>
            </div>
          </div>
          <div className="rounded-xl bg-violet-50 p-4 text-left">
            <strong className="text-violet-800">Paragraphing</strong>
            <div className="mt-3 flex flex-wrap gap-2 text-sm text-violet-700">
              <span className="rounded-full bg-white px-3 py-1">one main idea</span>
              <span className="rounded-full bg-white px-3 py-1">clear order</span>
            </div>
          </div>
        </div>
      </div>
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'What should you do first in the process writing cycle?',
    options: ['Plan your ideas', 'Print the final copy', 'Ignore the topic', 'Add random sentences'],
    answer: 'Plan your ideas',
    explanation: 'Planning helps you decide your purpose, topic, and the order of your ideas before drafting.',
  },
  {
    prompt: 'What is a summary?',
    options: [
      'A short version with only the main points',
      'A story with a surprise ending',
      'A private diary page full of feelings',
      'A list of every small detail',
    ],
    answer: 'A short version with only the main points',
    explanation: 'A summary keeps the important ideas and leaves out extra detail.',
  },
  {
    prompt: 'Which text type is best for telling a story about a lost puppy that finds its way home?',
    options: ['Narrative essay', 'Friendly letter', 'Summary', 'Poster caption'],
    answer: 'Narrative essay',
    explanation: 'A narrative essay tells a sequence of events in story form.',
  },
  {
    prompt: 'Which text type is best for helping the reader imagine the sights and sounds of a busy market?',
    options: ['Descriptive essay', 'Summary', 'Timetable', 'Shopping receipt'],
    answer: 'Descriptive essay',
    explanation: 'A descriptive essay uses detail and the senses to create a picture in the reader’s mind.',
  },
  {
    prompt: 'Which feature belongs in a friendly letter?',
    options: ['A greeting and a sign-off', 'A headline and byline', 'A bar graph', 'Stage directions only'],
    answer: 'A greeting and a sign-off',
    explanation: 'Friendly letters are personal and usually open with a greeting and close with a sign-off.',
  },
  {
    prompt: 'Which punctuation marks usually show spoken words in dialogue?',
    options: ['Quotation marks', 'Brackets', 'Semicolons', 'Slashes'],
    answer: 'Quotation marks',
    explanation: 'Quotation marks show the exact words a speaker says.',
  },
  {
    prompt: 'What is a noun?',
    options: [
      'A word that names a person, place, or thing',
      'A word that joins two ideas',
      'A word that replaces a noun',
      'A word that shows strong feeling only',
    ],
    answer: 'A word that names a person, place, or thing',
    explanation: 'Nouns name people, places, things, and ideas.',
  },
  {
    prompt: 'What does a pronoun do?',
    options: [
      'It replaces a noun',
      'It adds a question mark',
      'It tells the exact colour of a noun',
      'It changes a paragraph into a heading',
    ],
    answer: 'It replaces a noun',
    explanation: 'Pronouns such as he, she, it, and they can stand in for nouns.',
  },
  {
    prompt: 'What does a conjunction do?',
    options: [
      'It joins words or ideas',
      'It names a person or place',
      'It shows only one sound',
      'It turns a statement into a picture',
    ],
    answer: 'It joins words or ideas',
    explanation: 'Conjunctions like and, but, and because connect parts of a sentence.',
  },
  {
    prompt: 'Which word is the adverb in the sentence “The choir sang beautifully” ?',
    options: ['beautifully', 'choir', 'sang', 'the'],
    answer: 'beautifully',
    explanation: 'Beautifully tells us how the choir sang, so it is an adverb.',
  },
];

const ProcessWritingGrammar = () => (
  <CapsSubjectTopic
    title="Process Writing and Core Grammar"
    subtitle="Planning, drafting, and polishing clear English writing"
    learnSteps={learnSteps}
    task="process-writing-grammar"
    bank={bank}
    apiPath="/api/caps/eng"
  />
);

export default ProcessWritingGrammar;
