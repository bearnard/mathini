import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';
import PronunciationPlayer from '@/components/subjects/PronunciationPlayer';

const learnSteps: LearnStep[] = [
  {
    title: 'Read stories, notices, poems, and visuals with understanding',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Term 1 reading focuses on <strong>fluency, comprehension, sequencing,</strong> and basic visual literacy.
          Use clues from words, pictures, and text features.
        </p>
        <div className="grid gap-3 md:grid-cols-2">
          <div className="rounded-xl bg-amber-50 p-4 text-left">
            <p className="font-semibold text-amber-800">Text types</p>
            <p className="text-slate-600">Stories, advertisements, notices, and short poems.</p>
          </div>
          <div className="rounded-xl bg-violet-50 p-4 text-left">
            <p className="font-semibold text-violet-800">Comprehension</p>
            <p className="text-slate-600">Find key details: who, where, what, and why.</p>
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
    prompt: 'In reading comprehension, what is a main idea?',
    options: ['the most important message of the text', 'the first difficult word that you meet', 'the longest sentence in the passage', 'the font style of the title'],
    answer: 'the most important message of the text',
    explanation: 'The main idea is what the text is mostly about.',
  },
  {
    prompt: 'Which text is most likely an advertisement?',
    options: ['A poster saying “50% off school bags this Friday!”', 'A family tree of the relatives of a family', 'A page from a dictionary of words', 'A class register with the names of learners'],
    answer: 'A poster saying “50% off school bags this Friday!”',
    explanation: 'Ads usually promote products, prices, or offers.',
  },
  {
    prompt: 'If a notice says “Library closes at 14:00”, what detail is given?',
    options: ['closing time', 'author name', 'weather report', 'bus route'],
    answer: 'closing time',
    explanation: 'Notices often provide specific practical details.',
  },
  {
    prompt: 'What helps when reading a short poem?',
    options: ['looking for mood and key images', 'counting only punctuation marks', 'ignoring repeated words', 'reading only the last line'],
    answer: 'looking for mood and key images',
    explanation: 'Poetry meaning often comes from imagery and mood.',
  },
  {
    prompt: 'Visual literacy means you can...',
    options: ['interpret meaning from pictures and layout', 'only decode the long words in a text', 'memorise the letters of the alphabet', 'write essays without any planning'],
    answer: 'interpret meaning from pictures and layout',
    explanation: 'Visual literacy involves understanding images and design clues.',
  },
  {
    prompt: 'Which question checks retrieval from a story?',
    options: ['Where did the character go after school?', 'Do you like this font?', 'How many syllables in the title?', 'Can you draw a map?'],
    answer: 'Where did the character go after school?',
    explanation: 'Retrieval asks for a detail stated in the text.',
  },
  {
    prompt: 'What is sequencing in reading tasks?',
    options: ['putting events in the correct order', 'using only capital letters', 'finding all verbs', 'reading backwards'],
    answer: 'putting events in the correct order',
    explanation: 'Sequencing tracks what happened first, next, and last.',
  },
  {
    prompt: 'A sign with a red circle and a cigarette crossed out means...',
    options: ['No smoking', 'Smoking area', 'Buy cigarettes here', 'Open fire zone'],
    answer: 'No smoking',
    explanation: 'The crossed symbol indicates something is not allowed.',
  },
];

const ReadingViewingT1 = () => (
  <CapsSubjectTopic
    title="Reading & Viewing"
    subtitle="Stories, advertisements, notices, poems, and visual literacy"
    learnSteps={learnSteps}
    task="gr7-reading-viewing-t1"
    bank={bank}
    apiPath="/api/caps/xho"
  />
);

export default ReadingViewingT1;
