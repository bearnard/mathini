import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';
import PronunciationPlayer from '@/components/subjects/PronunciationPlayer';

const learnSteps: LearnStep[] = [
  {
    title: 'Write connected sentences for real audiences and purposes',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Term 1 writing includes a <strong>friendly letter, dialogue writing, captions,</strong> and short
          paragraphs. Keep ideas connected and use punctuation carefully.
        </p>
        <div className="grid gap-3 md:grid-cols-2">
          <div className="rounded-xl bg-cyan-50 p-4 text-left">
            <p className="font-semibold text-cyan-800">Format matters</p>
            <p className="text-slate-600">Use greetings, paragraph breaks, and clear closing lines.</p>
          </div>
          <div className="rounded-xl bg-rose-50 p-4 text-left">
            <p className="font-semibold text-rose-800">Present clearly</p>
            <p className="text-slate-600">Read your writing aloud with confidence and correct pace.</p>
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
    prompt: 'Which opening is suitable for a friendly letter?',
    options: ['Mhlobo wam othandekayo,', 'INJONGO YEBALI', '1) Isihloko 2) Umhla', 'Sivavanyo seBanga 7'],
    answer: 'Mhlobo wam othandekayo,',
    explanation: 'Friendly letters begin with a warm personal greeting.',
  },
  {
    prompt: 'What should a personal paragraph include?',
    options: ['connected sentences about one topic', 'unrelated words that are put together', 'headings and nothing else under them', 'punctuation marks and nothing else'],
    answer: 'connected sentences about one topic',
    explanation: 'A paragraph develops one clear idea with linked sentences.',
  },
  {
    prompt: 'In dialogue writing, each new speaker should...',
    options: ['start on a new line', 'use one long paragraph', 'avoid punctuation', 'write only in capitals'],
    answer: 'start on a new line',
    explanation: 'New lines make speakers clear and easy to follow.',
  },
  {
    prompt: 'Which punctuation usually ends a question?',
    options: ['?', '.', ',', ';'],
    answer: '?',
    explanation: 'Questions are closed with a question mark.',
  },
  {
    prompt: 'A caption should be...',
    options: ['short and linked to the image', 'longer than the story', 'unrelated to the picture', 'written without meaning'],
    answer: 'short and linked to the image',
    explanation: 'Captions briefly explain the picture content.',
  },
  {
    prompt: 'Which is best for presenting your writing orally?',
    options: ['speak clearly and keep eye contact', 'read while whispering', 'skip difficult words', 'rush through every sentence'],
    answer: 'speak clearly and keep eye contact',
    explanation: 'Clear speech and confidence improve presentation.',
  },
  {
    prompt: 'What improves a first draft most?',
    options: ['editing spelling and punctuation', 'adding random emojis', 'removing all full stops', 'changing topic each line'],
    answer: 'editing spelling and punctuation',
    explanation: 'Editing makes writing accurate and easier to understand.',
  },
  {
    prompt: 'Which closing suits a friendly letter?',
    options: ['Ozithobayo,', 'Breaking News:', 'Imibuzo emininzi', 'Inani 1 kuphela'],
    answer: 'Ozithobayo,',
    explanation: 'It is an appropriate closing line for informal personal letters.',
  },
];

const WritingPresentingT1 = () => (
  <CapsSubjectTopic
    title="Writing & Presenting"
    subtitle="Friendly letters, dialogues, captions, and personal paragraphs"
    learnSteps={learnSteps}
    task="gr7-writing-presenting-t1"
    bank={bank}
    apiPath="/api/caps/xho"
  />
);

export default WritingPresentingT1;
