import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';
import PronunciationPlayer from '@/components/subjects/PronunciationPlayer';

const learnSteps: LearnStep[] = [
  {
    title: 'Review writing — structure and evaluative language',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          A <strong>review</strong> evaluates a book, film, performance, or product for a specific audience. It must balance description with judgement.
        </p>
        <div className="bg-indigo-50 p-6 rounded-xl inline-block text-left max-w-xl">
          <p className="font-bold text-indigo-800 mb-2">Structure of a review:</p>
          <ol className="list-decimal ml-4 text-slate-600 space-y-1">
            <li><strong>Introduction:</strong> Name the item, creator, and context.</li>
            <li><strong>Summary:</strong> Brief overview — do not reveal endings.</li>
            <li><strong>Evaluation:</strong> Strengths and weaknesses with supporting reasons.</li>
            <li><strong>Recommendation:</strong> Should the audience read/watch/attend? Why?</li>
          </ol>
        </div>
      </div>
    ),
  },
  {
    title: 'Report writing — format, headings, and objective language',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          A <strong>report</strong> presents factual information in an organised, formal structure. Key conventions include:
        </p>
        <div className="grid gap-3 md:grid-cols-2 text-left">
          <div className="rounded-xl bg-slate-100 p-4">
            <strong className="text-slate-700">Format features:</strong>
            <ul className="list-disc ml-4 text-slate-600 space-y-1 mt-1">
              <li>Heading: REPORT ON / VERSLAG MALUNGA</li>
              <li>To / From / Date lines</li>
              <li>Numbered subheadings for each section</li>
              <li>Conclusions and Recommendations</li>
            </ul>
          </div>
          <div className="rounded-xl bg-emerald-50 p-4">
            <strong className="text-emerald-700">Language:</strong>
            <ul className="list-disc ml-4 text-slate-600 space-y-1 mt-1">
              <li>Objective, impersonal tone</li>
              <li>Passive constructions where appropriate</li>
              <li>No personal opinions (unless invited)</li>
              <li>Factual, specific evidence</li>
            </ul>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Email and formal letter conventions',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Both <strong>emails</strong> and <strong>formal letters</strong> require attention to format and register in Grade 11 transactional writing.
        </p>
        <div className="grid gap-3 md:grid-cols-2 text-left">
          <div className="rounded-xl bg-blue-50 p-4">
            <strong className="text-blue-700">Formal letter layout (isiXhosa):</strong>
            <ul className="list-disc ml-4 text-slate-600 space-y-1 mt-1">
              <li>Address (top right) + date</li>
              <li>Recipient address (left)</li>
              <li>Subject line</li>
              <li>Greeting: "Enkosi Mnumzana/Nkosikazi…"</li>
              <li>Body paragraphs</li>
              <li>Closing: "Ngembeko" + signature</li>
            </ul>
          </div>
          <div className="rounded-xl bg-amber-50 p-4">
            <strong className="text-amber-700">Email layout:</strong>
            <ul className="list-disc ml-4 text-slate-600 space-y-1 mt-1">
              <li>To / CC / Subject fields</li>
              <li>Formal greeting (if formal context)</li>
              <li>Concise paragraphs</li>
              <li>Professional closing</li>
              <li>Full name as signature</li>
            </ul>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Speech writing — rhetorical devices and audience engagement',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          A written speech uses <strong>rhetorical devices</strong> to persuade and engage the audience.
        </p>
        <div className="grid gap-3 md:grid-cols-3 text-left">
          <div className="rounded-xl bg-rose-50 p-4">
            <strong className="text-rose-700">Rhetorical question</strong>
            <p className="text-slate-600">Asked for effect, not an answer. Makes the audience think.</p>
          </div>
          <div className="rounded-xl bg-purple-50 p-4">
            <strong className="text-purple-700">Repetition</strong>
            <p className="text-slate-600">Repeating a key word or phrase for emphasis and memorability.</p>
          </div>
          <div className="rounded-xl bg-green-50 p-4">
            <strong className="text-green-700">Direct address</strong>
            <p className="text-slate-600">Addressing the audience personally (e.g. "Nithetha nani?") to create connection.</p>
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
          Practise these formal-writing words before composing emails, reports, speeches, and other transactional texts.
        </p>
        <div className="flex flex-wrap gap-3 justify-center">
          <PronunciationPlayer word={"I-imeyile"} phonetic={"[i i'meːjile]"} meaning={"Email"} lang="xh" />
          <PronunciationPlayer word={"Ingxelo"} phonetic={"[iŋ'xelo]"} meaning={"Report"} lang="xh" />
          <PronunciationPlayer word={"Inqaku"} phonetic={"[inqaku]"} meaning={"Article / note"} lang="xh" />
          <PronunciationPlayer word={"Ileta"} phonetic={"[i'lɛta]"} meaning={"Letter"} lang="xh" />
          <PronunciationPlayer word={"Intetho"} phonetic={"[in'tɛːtʰɔ]"} meaning={"Speech"} lang="xh" />
        </div>
      </div>
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'Which section of a review should NOT reveal the ending?',
    options: ['The summary section', 'The evaluation section', 'The recommendation', 'The introduction'],
    answer: 'The summary section',
    explanation: 'The summary provides a brief overview to orient the reader — spoiling the ending undermines the purpose of a recommendation.',
  },
  {
    prompt: 'What type of language is required in a formal report?',
    options: [
      'Objective, impersonal, and factual language',
      'Emotional and personal language',
      'Informal slang and contractions',
      'Creative, figurative language throughout',
    ],
    answer: 'Objective, impersonal, and factual language',
    explanation: 'Reports present facts and findings neutrally — personal opinion and emotive language are generally excluded.',
  },
  {
    prompt: 'In a formal isiXhosa letter, which greeting is most appropriate?',
    options: ['Enkosi Mnumzana/Nkosikazi', 'Molo mnganam', 'Sawubona', 'Hei wena'],
    answer: 'Enkosi Mnumzana/Nkosikazi',
    explanation: '"Enkosi Mnumzana/Nkosikazi" is the formal respectful greeting; informal greetings are not suitable in formal correspondence.',
  },
  {
    prompt: 'What is the purpose of numbered subheadings in a report?',
    options: [
      'To organise information clearly and allow readers to navigate sections easily',
      'To make the report look longer',
      'To replace the need for a conclusion',
      'To substitute for full paragraphs',
    ],
    answer: 'To organise information clearly and allow readers to navigate sections easily',
    explanation: 'Numbered subheadings are a standard report convention that aids clarity and professional presentation.',
  },
  {
    prompt: 'Which rhetorical device involves repeating a word or phrase for emphasis?',
    options: ['Repetition', 'Rhetorical question', 'Direct address', 'Metaphor'],
    answer: 'Repetition',
    explanation: 'Repetition is used in speeches to reinforce key ideas and make them memorable to the audience.',
  },
  {
    prompt: 'What is a "rhetorical question" in a speech?',
    options: [
      'A question asked for effect, not expecting a direct answer, to make the audience reflect',
      'A question asked to test the audience\'s knowledge',
      'A question that must be answered in writing',
      'A question asked only in a debate',
    ],
    answer: 'A question asked for effect, not expecting a direct answer, to make the audience reflect',
    explanation: 'Rhetorical questions engage the audience emotionally and intellectually without requiring a spoken reply.',
  },
  {
    prompt: 'A formal email differs from an informal email mainly in:',
    options: [
      'Its register, greeting, and professional closing',
      'The number of attached files',
      'The email address used',
      'The font size chosen',
    ],
    answer: 'Its register, greeting, and professional closing',
    explanation: 'Formal emails use professional greetings, complete sentences, and formal closings — unlike casual personal emails.',
  },
  {
    prompt: 'Which element is unique to a formal letter and NOT typically in an email?',
    options: [
      'The sender\'s address and recipient\'s address at the top of the page',
      'A subject line',
      'A closing signature',
      'Paragraphed body text',
    ],
    answer: 'The sender\'s address and recipient\'s address at the top of the page',
    explanation: 'Traditional formal letters include postal addresses on the page; emails have To/CC fields instead.',
  },
];

const WritingPresentingT2 = () => (
  <CapsSubjectTopic
    title="Writing & Presenting"
    subtitle="Review, report, email, speech writing, and transactional text control"
    learnSteps={learnSteps}
    task="gr11-xho-writing-t2"
    bank={bank}
    apiPath="/api/caps/xho"
  />
);

export default WritingPresentingT2;
