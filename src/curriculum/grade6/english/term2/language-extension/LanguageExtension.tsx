import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';

const learnSteps: LearnStep[] = [
  {
    title: 'Grow your vocabulary with word relationships',
    content: (
      <div className="space-y-5 text-center">
        <p className="text-lg text-slate-600">
          <strong>Language extension</strong> helps you choose stronger words. Build vocabulary by
          learning <strong>synonyms</strong>, <strong>antonyms</strong>, and <strong>idioms</strong>
          so that you understand meaning in context.
        </p>
        <div className="grid gap-3 md:grid-cols-3">
          <div className="rounded-xl bg-sky-50 p-4">
            <p className="font-bold text-sky-700">Synonyms</p>
            <p className="text-slate-600">words with similar meanings</p>
          </div>
          <div className="rounded-xl bg-orange-50 p-4">
            <p className="font-bold text-orange-700">Antonyms</p>
            <p className="text-slate-600">words with opposite meanings</p>
          </div>
          <div className="rounded-xl bg-emerald-50 p-4">
            <p className="font-bold text-emerald-700">Idioms</p>
            <p className="text-slate-600">phrases with special meanings</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Control tense so meaning stays clear',
    content: (
      <div className="space-y-5 text-center">
        <p className="text-lg text-slate-600">
          Writers must keep the <strong>tense</strong> clear. If you start in the past, do not jump
          into the present by mistake. Accurate tense helps the reader follow time and action.
        </p>
        <div className="grid gap-3 md:grid-cols-3">
          <div className="rounded-xl bg-violet-50 p-4">
            <p className="font-bold text-violet-700">Past</p>
            <p className="text-slate-600">already happened</p>
          </div>
          <div className="rounded-xl bg-cyan-50 p-4">
            <p className="font-bold text-cyan-700">Present</p>
            <p className="text-slate-600">happening now</p>
          </div>
          <div className="rounded-xl bg-lime-50 p-4">
            <p className="font-bold text-lime-700">Future</p>
            <p className="text-slate-600">will happen later</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Edit punctuation, spelling, and word choice',
    content: (
      <div className="space-y-5 text-center">
        <p className="text-lg text-slate-600">
          Careful editing makes writing easier to read. Check <strong>capital letters</strong>,
          <strong> punctuation</strong>, <strong>spelling</strong>, and whether your chosen words are
          precise enough for the sentence.
        </p>
        <div className="grid gap-3 md:grid-cols-4">
          <div className="rounded-xl bg-rose-50 p-4">
            <p className="font-bold text-rose-700">Capitals</p>
            <p className="text-slate-600">start sentences and names correctly</p>
          </div>
          <div className="rounded-xl bg-indigo-50 p-4">
            <p className="font-bold text-indigo-700">Punctuation</p>
            <p className="text-slate-600">full stops, commas, question marks</p>
          </div>
          <div className="rounded-xl bg-amber-50 p-4">
            <p className="font-bold text-amber-700">Spelling</p>
            <p className="text-slate-600">check each word carefully</p>
          </div>
          <div className="rounded-xl bg-fuchsia-50 p-4">
            <p className="font-bold text-fuchsia-700">Word choice</p>
            <p className="text-slate-600">pick the clearest, strongest word</p>
          </div>
        </div>
      </div>
    ),
  },
];

export const bank: CapsItem[] = [
  {
    prompt: 'Which word is a synonym for happy?',
    options: ['Glad', 'Angry', 'Heavy', 'Silent'],
    answer: 'Glad',
    explanation: 'Glad has a similar meaning to happy.',
  },
  {
    prompt: 'Which word is an antonym for ancient?',
    options: ['Modern', 'Old', 'Broken', 'Large'],
    answer: 'Modern',
    explanation: 'Modern is the opposite of ancient.',
  },
  {
    prompt: 'What does the idiom “break the ice” usually mean?',
    options: ['Start a friendly conversation', 'Smash frozen water', 'Win a race quickly', 'Become very cold'],
    answer: 'Start a friendly conversation',
    explanation: 'This idiom means making people feel relaxed and ready to talk.',
  },
  {
    prompt: 'Which sentence is written in the past tense?',
    options: ['We walked to school yesterday.', 'We walk to school every day.', 'We will walk to school tomorrow.', 'We are walking to school now.'],
    answer: 'We walked to school yesterday.',
    explanation: 'Walked shows that the action already happened.',
  },
  {
    prompt: 'Which sentence keeps the tense consistent?',
    options: ['Lebo packed her bag and hurried to the gate.', 'Lebo packed her bag and hurries to the gate.', 'Lebo packs her bag and hurried to the gate.', 'Lebo will pack her bag and hurried to the gate.'],
    answer: 'Lebo packed her bag and hurried to the gate.',
    explanation: 'Both verbs stay in the past tense, so the sentence is clear and consistent.',
  },
  {
    prompt: 'Which punctuation mark belongs at the end of a question?',
    options: ['Question mark', 'Comma', 'Colon', 'Apostrophe'],
    answer: 'Question mark',
    explanation: 'A question mark shows that a sentence is asking something.',
  },
  {
    prompt: 'Which sentence is punctuated correctly?',
    options: ['Thandi, please bring your book.', 'Thandi please bring your book', 'thandi, please bring your book.', 'Thandi please, bring your book'],
    answer: 'Thandi, please bring your book.',
    explanation: 'It uses a capital letter, a comma after the name, and a full stop.',
  },
  {
    prompt: 'Which word best replaces “said” in: “She said softly”?',
    options: ['Whispered', 'Jumped', 'Opened', 'Ran'],
    answer: 'Whispered',
    explanation: 'Whispered is more precise because it shows how she spoke.',
  },
  {
    prompt: 'Why should you edit your own writing?',
    options: ['To correct mistakes and improve meaning', 'To make every sentence longer', 'To remove all punctuation', 'To change every topic at the end'],
    answer: 'To correct mistakes and improve meaning',
    explanation: 'Editing helps you fix errors and choose clearer language.',
  },
];

const LanguageExtension = () => (
  <CapsSubjectTopic
    title="Language Extension"
    subtitle="Building vocabulary and editing with grammar, tense, and punctuation"
    learnSteps={learnSteps}
    task="language-extension"
    bank={bank}
    apiPath="/api/caps/grade6"
  />
);

export default LanguageExtension;
