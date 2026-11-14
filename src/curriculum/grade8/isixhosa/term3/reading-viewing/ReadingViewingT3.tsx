import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';
import PronunciationPlayer from '@/components/subjects/PronunciationPlayer';

const learnSteps: LearnStep[] = [
  {
    title: 'Interpret literary features in drama, prose, and poetry',
    image: {
      src: '/curriculum/grade8/xho/term3/reading-viewing/diagram.webp',
      alt: 'Grade 8 learners interpreting drama scenes, poetry, and short stories with visual support',
    },
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Reading & Viewing in Term 3 uses <strong>drama scenes, short stories, and poems</strong> to build literary
          response skills.
        </p>
        <p className="text-slate-600">Identify speaker, conflict, mood, and message using textual evidence.</p>
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
    prompt: 'In a drama script, speaker labels help readers to...',
    options: ['identify who is talking', 'find verb tense only', 'count paragraphs only', 'change plot order'],
    answer: 'identify who is talking',
    explanation: 'Speaker labels show which character delivers each line.',
  },
  {
    prompt: 'Conflict in a drama scene is...',
    options: ['the central tension or problem', 'the font style', 'the cover page colour', 'the punctuation count'],
    answer: 'the central tension or problem',
    explanation: 'Conflict drives action and character decisions.',
  },
  {
    prompt: 'Mood in poetry is mainly the...',
    options: ['the feeling that is created for the reader', 'the number of lines in the poem', 'the surname of the author of the poem', 'the type of paper that the poem is printed on'],
    answer: 'the feeling that is created for the reader',
    explanation: 'Mood describes the emotional atmosphere of the poem.',
  },
  {
    prompt: 'A literary response should include...',
    options: ['personal view supported by text', 'only copied questions', 'random facts', 'no reference to the text'],
    answer: 'personal view supported by text',
    explanation: 'Strong responses combine opinion and evidence.',
  },
  {
    prompt: 'Visual support in reading tasks is useful because it...',
    options: ['adds clues to meaning', 'replaces all reading', 'removes context', 'changes the genre'],
    answer: 'adds clues to meaning',
    explanation: 'Images and layout can strengthen interpretation.',
  },
  {
    prompt: 'Which question checks understanding of a speaker in drama?',
    options: ['Why does this character say these words here?', 'How many pages are in the booklet?', 'What is the desk colour?', 'Who printed the worksheet?'],
    answer: 'Why does this character say these words here?',
    explanation: 'It focuses on motivation and context in the scene.',
  },
  {
    prompt: 'A short story response should track...',
    options: ['the character, the events and the message', 'the font size that is used in the text only', 'the width of the margin on the page only', 'a list of the spelling words only'],
    answer: 'the character, the events and the message',
    explanation: 'These elements support deeper comprehension.',
  },
  {
    prompt: 'When unsure of a literary answer, the best strategy is to...',
    options: ['re-read and find evidence', 'skip immediately', 'guess from memory only', 'copy another learner'],
    answer: 're-read and find evidence',
    explanation: 'Returning to the text improves answer accuracy.',
  },
];

const ReadingViewingT3 = () => (
  <CapsSubjectTopic
    title="Reading & Viewing"
    subtitle="Drama scenes, short stories, poetry, visual support, and literary response"
    learnSteps={learnSteps}
    task="gr8-reading-viewing-t3"
    bank={bank}
    apiPath="/api/caps/xho"
  />
);

export default ReadingViewingT3;
