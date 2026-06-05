import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';
import PronunciationPlayer from '@/components/subjects/PronunciationPlayer';

const learnSteps: LearnStep[] = [
  {
    title: 'Revise mixed reading genres and summary choices',
    image: {
      src: '/curriculum/grade8/xho/term4/reading-viewing/diagram.webp',
      alt: 'Grade 8 learners revising mixed reading genres and summary skills',
    },
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Reading revision covers <strong>stories, poems, media texts, comprehension,</strong> and summary skills.
        </p>
        <p className="text-slate-600">Practise switching strategies across mixed-genre exam-style questions.</p>
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
    prompt: 'Mixed-genre comprehension requires learners to...',
    options: ['adapt strategy to each text type', 'use one strategy for everything', 'read only headings', 'skip unfamiliar genres'],
    answer: 'adapt strategy to each text type',
    explanation: 'Different genres require different reading approaches.',
  },
  {
    prompt: 'A good summary keeps...',
    options: ['main points only', 'all repeated details', 'every example', 'all quotations'],
    answer: 'main points only',
    explanation: 'Summaries condense information to essentials.',
  },
  {
    prompt: 'When revising poems, focus on...',
    options: ['mood, imagery, and message', 'page numbering', 'font colour', 'desk layout'],
    answer: 'mood, imagery, and message',
    explanation: 'These features help interpret poetic meaning.',
  },
  {
    prompt: 'In story revision, evidence retrieval means...',
    options: ['finding exact supporting details', 'rewriting the whole text', 'guessing the answer', 'choosing the longest option'],
    answer: 'finding exact supporting details',
    explanation: 'Evidence retrieval requires precise textual support.',
  },
  {
    prompt: 'Media-text revision often asks learners to identify...',
    options: ['purpose and audience', 'character in a play', 'rhyme scheme only', 'scientific method'],
    answer: 'purpose and audience',
    explanation: 'Media analysis focuses on intent and target readers.',
  },
  {
    prompt: 'If two texts disagree, you should...',
    options: ['compare their evidence carefully', 'ignore one text', 'combine random claims', 'pick answers by chance'],
    answer: 'compare their evidence carefully',
    explanation: 'Comparison helps evaluate differences accurately.',
  },
  {
    prompt: 'A strong revision response usually includes...',
    options: ['a clear answer plus textual support', 'a copied question', 'only personal opinion', 'no explanation'],
    answer: 'a clear answer plus textual support',
    explanation: 'Supporting evidence makes responses credible.',
  },
  {
    prompt: 'To improve summary selection, learners should avoid...',
    options: ['minor repeated details', 'main ideas', 'topic sentences', 'key evidence'],
    answer: 'minor repeated details',
    explanation: 'Repeated minor details are usually not central to summaries.',
  },
];

const ReadingViewingT4 = () => (
  <CapsSubjectTopic
    title="Reading & Viewing"
    subtitle="Revision across stories, poems, media texts, comprehension, and summary"
    learnSteps={learnSteps}
    task="gr8-reading-viewing-t4"
    bank={bank}
    apiPath="/api/caps/xho"
  />
);

export default ReadingViewingT4;
