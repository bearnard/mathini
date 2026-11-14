import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';
import PronunciationPlayer from '@/components/subjects/PronunciationPlayer';

const learnSteps: LearnStep[] = [
  {
    title: 'Interpret poems, posters, folktales, and picture sequences',
    image: {
      src: '/curriculum/grade7/xho/term3/reading-viewing/diagram.webp',
      alt: 'Grade 7 learners interpreting a poem and poster with picture sequence cards',
    },
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Term 3 reading broadens to <strong>poems, folktales, posters, factual texts,</strong> and image sequences.
          Identify mood, message, and key details.
        </p>
        <div className="grid gap-3 md:grid-cols-2">
          <div className="rounded-xl bg-pink-50 p-4 text-left">
            <p className="font-semibold text-pink-800">Poetry</p>
            <p className="text-slate-600">Look for feelings, repeated words, and imagery.</p>
          </div>
          <div className="rounded-xl bg-cyan-50 p-4 text-left">
            <p className="font-semibold text-cyan-800">Visual texts</p>
            <p className="text-slate-600">Use symbols, layout, and pictures to infer meaning.</p>
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
    prompt: 'In poetry questions, “mood” means...',
    options: ['the feeling that the poem creates', 'the page number of the poem in the book', 'the age of the poet who wrote it', 'the length of the lines in the poem'],
    answer: 'the feeling that the poem creates',
    explanation: 'Mood describes emotional atmosphere.',
  },
  {
    prompt: 'What is the main purpose of a poster?',
    options: ['to give a message quickly and clearly', 'to tell a long novel in many chapters', 'to list the grammar rules and nothing else', 'to take the place of oral speaking'],
    answer: 'to give a message quickly and clearly',
    explanation: 'Posters communicate key ideas visually and briefly.',
  },
  {
    prompt: 'A picture sequence task asks learners to...',
    options: ['order the images logically to show events', 'count the colours that are in the images', 'memorise a single caption of one image', 'ignore the context clues in the images'],
    answer: 'order the images logically to show events',
    explanation: 'Sequence tasks test understanding of event order.',
  },
  {
    prompt: 'Which question checks message in a folktale?',
    options: ['What lesson does the story teach?', 'How many commas are there?', 'What is the title font?', 'Which desk is nearest?'],
    answer: 'What lesson does the story teach?',
    explanation: 'Folktale interpretation often focuses on moral message.',
  },
  {
    prompt: 'In a short factual text, key details are usually...',
    options: ['names, places, numbers and dates', 'imaginary stories and made-up characters', 'rhyming words and nothing else', 'the turns of the speakers and nothing else'],
    answer: 'names, places, numbers and dates',
    explanation: 'Factual reading requires extracting concrete information.',
  },
  {
    prompt: 'What helps infer meaning from a poster image?',
    options: ['looking at symbols and context', 'reading only the smallest word', 'ignoring colours and icons', 'counting letters only'],
    answer: 'looking at symbols and context',
    explanation: 'Symbols and visual context guide interpretation.',
  },
  {
    prompt: 'Which option best describes a comprehension strategy?',
    options: ['read the question first, then scan the text', 'skip the passage and guess the answer', 'answer without reading the text at all', 'write your own story in its place'],
    answer: 'read the question first, then scan the text',
    explanation: 'Targeted scanning helps retrieve evidence efficiently.',
  },
  {
    prompt: 'Why compare two texts in Grade 7 reading?',
    options: ['to spot different viewpoints and details', 'to avoid doing any comprehension practice', 'to cut down on the learning of vocabulary', 'to remove the discussion tasks from the lesson'],
    answer: 'to spot different viewpoints and details',
    explanation: 'Comparison develops deeper understanding of texts.',
  },
];

const ReadingViewingT3 = () => (
  <CapsSubjectTopic
    title="Reading & Viewing"
    subtitle="Poems, folktales, posters, factual texts, and picture sequences"
    learnSteps={learnSteps}
    task="gr7-reading-viewing-t3"
    bank={bank}
    apiPath="/api/caps/xho"
  />
);

export default ReadingViewingT3;
