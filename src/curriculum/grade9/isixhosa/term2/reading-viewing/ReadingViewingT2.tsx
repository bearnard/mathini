import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';
import PronunciationPlayer from '@/components/subjects/PronunciationPlayer';

const learnSteps: LearnStep[] = [
  {
    title: 'Novel or folklore study, media texts, characterisation, message, and visual literacy',
    image: {
      src: '/curriculum/grade9/isixhosa/term2/reading-viewing/image1.jpg',
      alt: 'Grade 9 isiXhosa FAL learners analysing novel characters, media texts, and visual messages',
    },
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Term 2 Reading & Viewing focuses on <strong>novel or folklore study, media texts,</strong>{' '}
          characterisation, message, and visual literacy.
        </p>
        <p className="text-slate-600">
          Learners read longer texts with stronger focus on character growth, conflict, and social themes.
        </p>
      </div>
    ),
  },

  {
    title: "Pronunciation practice",
    content: (
      <div className="space-y-4">
        <p className="text-center text-sm text-gray-600 dark:text-gray-300">
          Say these text-type words aloud before working with media, instructions, and informational reading.
        </p>
        <div className="flex flex-wrap gap-3 justify-center">
          <PronunciationPlayer word={"Imenyu"} phonetic={"[i'meɲu]"} meaning={"Menu"} lang="xh" />
          <PronunciationPlayer word={"Imiyalelo"} phonetic={"[imi.ja'lɛlɔ]"} meaning={"Instructions"} lang="xh" />
          <PronunciationPlayer word={"Isibhengezo"} phonetic={"[isi.bhɛŋ'gɛːzo]"} meaning={"Advert / notice"} lang="xh" />
          <PronunciationPlayer word={"Umqondiso"} phonetic={"[umqondiso]"} meaning={"Sign / symbol"} lang="xh" />
          <PronunciationPlayer word={"Ixesha"} phonetic={"[i'kʰeʃa]"} meaning={"Time / schedule"} lang="xh" />
        </div>
      </div>
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'Characterisation in a novel is developed through...',
    options: ['actions, dialogue, thoughts and description', "the character's name and nothing else", 'pictures on the cover and nothing else', 'the colour used on the front cover'],
    answer: 'actions, dialogue, thoughts and description',
    explanation: 'Multiple techniques combine to reveal who a character is and how they evolve.',
  },
  {
    prompt: 'Character growth means...',
    options: ['a character changes or learns through events', 'a character stays exactly the same', 'a character gets physically larger', 'a character disappears'],
    answer: 'a character changes or learns through events',
    explanation: 'Character development shows how experiences transform a person\'s beliefs or actions.',
  },
  {
    prompt: 'Folklore often teaches...',
    options: ['cultural values and life lessons through stories', 'facts and dates about the past only', 'entertainment with no lesson in it', 'mathematical rules and formulas'],
    answer: 'cultural values and life lessons through stories',
    explanation: 'Folklore preserves wisdom and traditions across generations through narrative.',
  },
  {
    prompt: 'The message of a text is...',
    options: ['the main lesson that the author wants to share', 'the date on which the text was first written', 'the number of pages that the text has', 'the colour of the print that was used in it'],
    answer: 'the main lesson that the author wants to share',
    explanation: 'The message is often deeper than plot and reflects the author\'s purpose.',
  },
  {
    prompt: 'Media texts like advertisements use visual elements to...',
    options: ['persuade and attract attention', 'confuse readers about the product', 'hide information from the reader', 'fill up space on the page'],
    answer: 'persuade and attract attention',
    explanation: 'Media design is strategic; images, colours, and layout all serve the message.',
  },
  {
    prompt: 'When analysing a character\'s motivation, you ask...',
    options: ['Why does this character act this way?', 'What colour are their clothes?', 'How old are they?', 'Do I like them?'],
    answer: 'Why does this character act this way?',
    explanation: 'Understanding motivation explains character behaviour and adds depth to analysis.',
  },
  {
    prompt: 'Plot sequencing means...',
    options: ['arranging events in the order that they happen', 'mixing up the order of events in a story', 'leaving out events that do not seem key', 'ignoring cause and effect between events'],
    answer: 'arranging events in the order that they happen',
    explanation: 'Sequencing clarifies how one event leads to another and builds tension.',
  },
  {
    prompt: 'Visual literacy includes the ability to...',
    options: ['understand and interpret images and visual designs', 'read all of the text on a page quickly', 'draw pictures that match a text', 'ignore images when reading a text'],
    answer: 'understand and interpret images and visual designs',
    explanation: 'Images communicate meaning through symbols, colour, composition, and perspective.',
  },
];

const ReadingViewingT2 = () => (
  <CapsSubjectTopic
    title="Reading & Viewing"
    subtitle="Novel or folklore study, media texts, characterisation, message, and visual literacy"
    learnSteps={learnSteps}
    task="gr9-reading-viewing-t2"
    bank={bank}
    apiPath="/api/caps/xho"
  />
);

export default ReadingViewingT2;
