import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';
import PronunciationPlayer from '@/components/subjects/PronunciationPlayer';

const learnSteps: LearnStep[] = [
  {
    title: 'Revise comprehension across different text genres',
    image: {
      src: '/curriculum/grade7/xho/term4/reading-viewing/diagram.webp',
      alt: 'Grade 7 learner revising comprehension with a notice and short story text',
    },
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Term 4 reading revision covers <strong>passages, notices, short stories,</strong> and summary-style tasks.
          Focus on selecting key information accurately.
        </p>
        <div className="grid gap-3 md:grid-cols-2">
          <div className="rounded-xl bg-zinc-100 p-4 text-left">
            <p className="font-semibold text-zinc-800">Comprehension revision</p>
            <p className="text-slate-600">Practise who/what/when/why questions with evidence.</p>
          </div>
          <div className="rounded-xl bg-blue-50 p-4 text-left">
            <p className="font-semibold text-blue-800">Summary selection</p>
            <p className="text-slate-600">Choose details that are most important, not repeated.</p>
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

const bank: CapsItem[] = [
  {
    prompt: 'What is the first step in a comprehension task?',
    options: ['read the passage carefully', 'write answers before reading', 'skip the title', 'ignore key words'],
    answer: 'read the passage carefully',
    explanation: 'Understanding the passage comes before answering.',
  },
  {
    prompt: 'A good summary includes...',
    options: ['main points only', 'every single detail', 'new invented facts', 'no verbs'],
    answer: 'main points only',
    explanation: 'Summaries are short and focused on key ideas.',
  },
  {
    prompt: 'If a notice says “Meeting at 13:30 in Hall B”, what can you extract?',
    options: ['time and venue', 'character personality', 'poem theme', 'bus fare'],
    answer: 'time and venue',
    explanation: 'Notices provide practical details like place and time.',
  },
  {
    prompt: 'Which question checks understanding of a story message?',
    options: ['What lesson can we learn from the story?', 'How many letters in paragraph 2?', 'What shape is the margin?', 'What ink brand was used?'],
    answer: 'What lesson can we learn from the story?',
    explanation: 'Message questions ask for meaning beyond facts.',
  },
  {
    prompt: 'Matching tasks in revision usually require learners to...',
    options: ['connect statements to correct details', 'write long essays', 'draw landscapes', 'translate into coding symbols'],
    answer: 'connect statements to correct details',
    explanation: 'Matching checks recognition of linked information.',
  },
  {
    prompt: 'Which strategy helps avoid losing marks in comprehension?',
    options: ['answer in full, clear sentences when needed', 'copy random lines only', 'leave blanks', 'ignore question words'],
    answer: 'answer in full, clear sentences when needed',
    explanation: 'Clear responses aligned to question demand earn marks.',
  },
  {
    prompt: '“Select the best heading for the paragraph” tests...',
    options: ['main idea understanding', 'punctuation editing only', 'spelling list memory only', 'calculator skills'],
    answer: 'main idea understanding',
    explanation: 'Choosing a heading depends on core meaning.',
  },
  {
    prompt: 'Why revisit multiple genres in Term 4?',
    options: ['to prepare for year-end assessment', 'to remove reading practice', 'to avoid vocabulary growth', 'to skip comprehension work'],
    answer: 'to prepare for year-end assessment',
    explanation: 'Revision across genres builds exam readiness.',
  },
];

const ReadingViewingT4 = () => (
  <CapsSubjectTopic
    title="Reading & Viewing"
    subtitle="Revision passages, notices, stories, and summary-focused comprehension"
    learnSteps={learnSteps}
    task="gr7-reading-viewing-t4"
    bank={bank}
    apiPath="/api/caps/xho"
  />
);

export default ReadingViewingT4;
