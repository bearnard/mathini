import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';
import PronunciationPlayer from '@/components/subjects/PronunciationPlayer';

const learnSteps: LearnStep[] = [
  {
    title: 'Reading folktales, posters, poems, and short factual texts',
    image: {
      src: '/curriculum/grade6/xho/term3/reading-viewing-t3/diagram.webp',
      alt: 'learners reading a folktale, poster, and short factual text with visual cues',
    },
    content: (
      <div className="space-y-5 text-center">
        <p className="text-lg text-slate-600">
          Reading and viewing in Term 3 includes <strong>folktales</strong>, <strong>posters</strong>,
          <strong> poems</strong>, and simple factual texts. Learners identify text type and read for meaning.
        </p>
        <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
          <div className="rounded-xl bg-sky-50 p-4 text-left">
            <strong className="text-sky-800">Folktale</strong>
            <div className="mt-3 flex flex-wrap gap-2 text-sm text-sky-700">
              <span className="rounded-full bg-white px-3 py-1">characters</span>
              <span className="rounded-full bg-white px-3 py-1">plot</span>
              <span className="rounded-full bg-white px-3 py-1">moral</span>
            </div>
          </div>
          <div className="rounded-xl bg-emerald-50 p-4 text-left">
            <strong className="text-emerald-800">Poster</strong>
            <div className="mt-3 flex flex-wrap gap-2 text-sm text-emerald-700">
              <span className="rounded-full bg-white px-3 py-1">headline</span>
              <span className="rounded-full bg-white px-3 py-1">image clues</span>
            </div>
          </div>
          <div className="rounded-xl bg-amber-50 p-4 text-left">
            <strong className="text-amber-800">Factual text</strong>
            <div className="mt-3 flex flex-wrap gap-2 text-sm text-amber-700">
              <span className="rounded-full bg-white px-3 py-1">real information</span>
              <span className="rounded-full bg-white px-3 py-1">details</span>
            </div>
          </div>
          <div className="rounded-xl bg-violet-50 p-4 text-left">
            <strong className="text-violet-800">Poem</strong>
            <div className="mt-3 flex flex-wrap gap-2 text-sm text-violet-700">
              <span className="rounded-full bg-white px-3 py-1">rhythm</span>
              <span className="rounded-full bg-white px-3 py-1">imagery</span>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Answering who, where, and what happened',
    content: (
      <div className="space-y-5 text-center">
        <p className="text-lg text-slate-600">
          Retrieval questions help learners find exact information from a text. Focus on the question word and
          scan for key details before answering.
        </p>
        <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
          <div className="rounded-xl bg-blue-50 p-4 text-left">
            <strong className="text-blue-800">Who?</strong>
            <div className="mt-3 flex flex-wrap gap-2 text-sm text-blue-700">
              <span className="rounded-full bg-white px-3 py-1">person or character</span>
              <span className="rounded-full bg-white px-3 py-1">name</span>
            </div>
          </div>
          <div className="rounded-xl bg-rose-50 p-4 text-left">
            <strong className="text-rose-800">Where?</strong>
            <div className="mt-3 flex flex-wrap gap-2 text-sm text-rose-700">
              <span className="rounded-full bg-white px-3 py-1">place</span>
              <span className="rounded-full bg-white px-3 py-1">setting</span>
            </div>
          </div>
          <div className="rounded-xl bg-lime-50 p-4 text-left">
            <strong className="text-lime-800">What happened?</strong>
            <div className="mt-3 flex flex-wrap gap-2 text-sm text-lime-700">
              <span className="rounded-full bg-white px-3 py-1">main event</span>
              <span className="rounded-full bg-white px-3 py-1">action</span>
            </div>
          </div>
          <div className="rounded-xl bg-orange-50 p-4 text-left">
            <strong className="text-orange-800">Text evidence</strong>
            <div className="mt-3 flex flex-wrap gap-2 text-sm text-orange-700">
              <span className="rounded-full bg-white px-3 py-1">quote or detail</span>
              <span className="rounded-full bg-white px-3 py-1">line reference</span>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Using visual cues to support meaning',
    content: (
      <div className="space-y-5 text-center">
        <p className="text-lg text-slate-600">
          Pictures, symbols, and layout help readers predict meaning and match text to images. Use both words and
          visuals to understand the full message.
        </p>
        <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
          <div className="rounded-xl bg-indigo-50 p-4 text-left">
            <strong className="text-indigo-800">Picture clue</strong>
            <div className="mt-3 flex flex-wrap gap-2 text-sm text-indigo-700">
              <span className="rounded-full bg-white px-3 py-1">facial expression</span>
              <span className="rounded-full bg-white px-3 py-1">action</span>
            </div>
          </div>
          <div className="rounded-xl bg-teal-50 p-4 text-left">
            <strong className="text-teal-800">Symbol</strong>
            <div className="mt-3 flex flex-wrap gap-2 text-sm text-teal-700">
              <span className="rounded-full bg-white px-3 py-1">icon meaning</span>
              <span className="rounded-full bg-white px-3 py-1">warning or message</span>
            </div>
          </div>
          <div className="rounded-xl bg-fuchsia-50 p-4 text-left">
            <strong className="text-fuchsia-800">Layout</strong>
            <div className="mt-3 flex flex-wrap gap-2 text-sm text-fuchsia-700">
              <span className="rounded-full bg-white px-3 py-1">title position</span>
              <span className="rounded-full bg-white px-3 py-1">bold details</span>
            </div>
          </div>
          <div className="rounded-xl bg-cyan-50 p-4 text-left">
            <strong className="text-cyan-800">Match text to image</strong>
            <div className="mt-3 flex flex-wrap gap-2 text-sm text-cyan-700">
              <span className="rounded-full bg-white px-3 py-1">same event</span>
              <span className="rounded-full bg-white px-3 py-1">same idea</span>
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
          Use these literary-reading words when discussing folktales, poems, drama scenes, and character response.
        </p>
        <div className="flex flex-wrap gap-3 justify-center">
          <PronunciationPlayer word={"Intsomi"} phonetic={"[in'tsɔmi]"} meaning={"Folktale"} lang="xh" />
          <PronunciationPlayer word={"Umbongo"} phonetic={"[um'bɔŋgɔ]"} meaning={"Poem"} lang="xh" />
          <PronunciationPlayer word={"Abalinganiswa"} phonetic={"[abaliŋga'niswa]"} meaning={"Characters"} lang="xh" />
          <PronunciationPlayer word={"Umxholo"} phonetic={"[um'xɔlɔ]"} meaning={"Theme / topic"} lang="xh" />
          <PronunciationPlayer word={"Imvakalelo"} phonetic={"[im.vaka'lɛlɔ]"} meaning={"Feeling / emotion"} lang="xh" />
        </div>
      </div>
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'Which text type often includes a moral lesson at the end?',
    options: ['Folktale', 'Bus timetable', 'Science diagram only', 'Calculator manual'],
    answer: 'Folktale',
    explanation: 'Folktales usually include characters, events, and a lesson or moral.',
  },
  {
    prompt: 'What does a retrieval question mainly test?',
    options: [
      'Finding exact information from the text',
      'Guessing without reading',
      'Drawing a new picture unrelated to the text',
      'Memorising every word perfectly',
    ],
    answer: 'Finding exact information from the text',
    explanation: 'Retrieval tasks require learners to locate details stated in the text.',
  },
  {
    prompt: 'Which question word helps you identify a place in a passage?',
    options: ['Where', 'Who', 'When', 'Why'],
    answer: 'Where',
    explanation: '“Where” asks about setting or location.',
  },
  {
    prompt: 'A poster shows a raincloud and umbrella icon. What should you do first?',
    options: [
      'Use the visual clues with the words to infer the message',
      'Ignore the image and read nothing else',
      'Treat the icon as decoration with no meaning',
      'Answer before looking at the poster',
    ],
    answer: 'Use the visual clues with the words to infer the message',
    explanation: 'Visual cues support understanding when combined with text.',
  },
  {
    prompt: 'Which is most likely a factual text?',
    options: [
      'A short paragraph explaining how taxis follow routes',
      'A story about a magic bird that talks',
      'A poem made of rhyming lines only',
      'A dialogue from a play script',
    ],
    answer: 'A short paragraph explaining how taxis follow routes',
    explanation: 'Factual texts provide real information and explanations.',
  },
  {
    prompt: 'If a question asks “Who helped the child?”, what should your answer include?',
    options: ['The person or character name', 'Only the date', 'Only the weather report', 'The page colour'],
    answer: 'The person or character name',
    explanation: '“Who” questions require a person or character as the answer.',
  },
  {
    prompt: 'What is the best reason to read a title before a paragraph?',
    options: [
      'It helps predict the topic and purpose',
      'It replaces reading the paragraph entirely',
      'It is only useful for handwriting practice',
      'It tells you the answer to every question automatically',
    ],
    answer: 'It helps predict the topic and purpose',
    explanation: 'Titles give clues about what the text will discuss.',
  },
  {
    prompt: 'Which action best shows reading comprehension?',
    options: [
      'Answering what happened using details from the text',
      'Choosing answers based on favourite colours',
      'Copying one line without understanding it',
      'Skipping the passage and answering randomly',
    ],
    answer: 'Answering what happened using details from the text',
    explanation: 'Comprehension means understanding and using relevant text evidence.',
  },
  {
    prompt: 'Why do poems in SAL lessons matter?',
    options: [
      'They build vocabulary and understanding of imagery and rhythm',
      'They are only for counting words quickly',
      'They remove all meaning from language work',
      'They are used instead of all reading tasks forever',
    ],
    answer: 'They build vocabulary and understanding of imagery and rhythm',
    explanation: 'Poems help learners notice language patterns and meaning.',
  },
];

const ReadingViewingT3 = () => (
  <CapsSubjectTopic
    title="Reading and Viewing"
    subtitle="Understanding folktales, factual texts, poems, posters, and visual clues"
    learnSteps={learnSteps}
    task="reading-viewing-t3"
    bank={bank}
    apiPath="/api/caps/grade6"
  />
);

export default ReadingViewingT3;
