import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';
import PronunciationPlayer from '@/components/subjects/PronunciationPlayer';

const learnSteps: LearnStep[] = [
  {
    image: { src: "/curriculum/grade11/xho/term4/writing-presenting/diagram.webp", alt: "Writing & Presenting" },
    title: 'Exam essay writing — planning under time pressure',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Timed essay writing requires a <strong>disciplined planning process</strong> to maximise quality within the time limit.
        </p>
        <div className="bg-indigo-50 p-6 rounded-xl inline-block text-left max-w-xl">
          <p className="font-bold text-indigo-800 mb-2">Time-allocation strategy (60-minute essay):</p>
          <ul className="list-disc ml-4 text-slate-600 space-y-1">
            <li><strong>5 min:</strong> Read the question carefully; identify key words and text type.</li>
            <li><strong>10 min:</strong> Brainstorm and plan structure (introduction → body → conclusion).</li>
            <li><strong>40 min:</strong> Write the draft with full paragraphs and supporting evidence.</li>
            <li><strong>5 min:</strong> Proofread for errors — concord, tense, spelling, punctuation.</li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    title: 'Transactional text formats — quick recall',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          In the examination you may be asked to write any of these <strong>transactional texts</strong> — know their formats.
        </p>
        <div className="grid gap-3 md:grid-cols-3 text-left">
          <div className="rounded-xl bg-slate-100 p-4">
            <strong className="text-slate-700">Formal letter</strong>
            <p className="text-slate-600">Address (top right), date, recipient address, subject, greeting, body, closing, signature.</p>
          </div>
          <div className="rounded-xl bg-slate-100 p-4">
            <strong className="text-slate-700">Report</strong>
            <p className="text-slate-600">Heading (REPORT ON…), To/From/Date, numbered sections, conclusions, recommendations.</p>
          </div>
          <div className="rounded-xl bg-slate-100 p-4">
            <strong className="text-slate-700">Review</strong>
            <p className="text-slate-600">Introduction (name/context), summary (no spoilers), evaluation, recommendation.</p>
          </div>
          <div className="rounded-xl bg-slate-100 p-4">
            <strong className="text-slate-700">Article</strong>
            <p className="text-slate-600">Headline, byline, introduction (5W: who/what/when/where/why), body, conclusion.</p>
          </div>
          <div className="rounded-xl bg-slate-100 p-4">
            <strong className="text-slate-700">Email</strong>
            <p className="text-slate-600">To/Subject fields, greeting, concise paragraphs, professional closing.</p>
          </div>
          <div className="rounded-xl bg-slate-100 p-4">
            <strong className="text-slate-700">Speech</strong>
            <p className="text-slate-600">Address to audience, introduction, developed body with rhetorical devices, conclusion.</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Report and review revision — key distinctions',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Know the key differences between a report and a review so you can respond correctly in the examination.
        </p>
        <div className="grid gap-3 md:grid-cols-2 text-left">
          <div className="rounded-xl bg-blue-50 p-4">
            <strong className="text-blue-700">Report:</strong>
            <ul className="list-disc ml-4 text-slate-600 space-y-1 mt-1">
              <li>Objective, impersonal tone</li>
              <li>Factual, evidence-based</li>
              <li>Formal numbered subheadings</li>
              <li>Ends with recommendations</li>
            </ul>
          </div>
          <div className="rounded-xl bg-amber-50 p-4">
            <strong className="text-amber-700">Review:</strong>
            <ul className="list-disc ml-4 text-slate-600 space-y-1 mt-1">
              <li>Evaluative, semi-formal tone</li>
              <li>Mixes summary with judgement</li>
              <li>Written in prose paragraphs</li>
              <li>Ends with a recommendation to the audience</li>
            </ul>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Proofreading and editing strategies for examinations',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Systematic <strong>proofreading</strong> in the last five minutes of an examination can significantly improve your mark.
        </p>
        <div className="bg-slate-50 p-6 rounded-xl inline-block text-left max-w-xl">
          <p className="font-bold text-slate-800 mb-2">Proofreading sequence:</p>
          <ol className="list-decimal ml-4 text-slate-600 space-y-1">
            <li>Check concord — does every verb agree with its subject?</li>
            <li>Check tense — is it consistent throughout?</li>
            <li>Check sentence endings — full stop, question mark, or exclamation mark?</li>
            <li>Check capitals — names, titles, and sentence beginnings.</li>
            <li>Check spelling — especially common isiXhosa errors.</li>
          </ol>
        </div>
      </div>
    ),
  },

  {
    title: "Pronunciation practice",
    content: (
      <div className="space-y-4">
        <p className="text-center text-sm text-gray-600 dark:text-gray-300">
          Say these essay-writing terms aloud so that planning, structuring, and editing are easier to manage.
        </p>
        <div className="flex flex-wrap gap-3 justify-center">
          <PronunciationPlayer word={"Isincoko"} phonetic={"[isiŋ'kɔːkɔ]"} meaning={"Essay"} lang="xh" />
          <PronunciationPlayer word={"Intshayelelo"} phonetic={"[intʃaje'lelo]"} meaning={"Introduction"} lang="xh" />
          <PronunciationPlayer word={"Umhlathi"} phonetic={"[um'ɬaːti]"} meaning={"Paragraph"} lang="xh" />
          <PronunciationPlayer word={"Isiphelo"} phonetic={"[isi'pʰɛlɔ]"} meaning={"Conclusion"} lang="xh" />
          <PronunciationPlayer word={"Ukuhlela"} phonetic={"[uku'ɬɛla]"} meaning={"Editing"} lang="xh" />
        </div>
      </div>
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'How much time should you spend planning before writing an exam essay?',
    options: [
      'Approximately 10 minutes — brainstorming and outlining the structure',
      'No time — start writing immediately to use every minute',
      'At least 40 minutes to ensure thorough preparation',
      'The entire time — planning is more important than writing',
    ],
    answer: 'Approximately 10 minutes — brainstorming and outlining the structure',
    explanation: 'A 10-minute plan prevents disorganised writing and ensures you cover all required elements systematically.',
  },
  {
    prompt: 'Which element must always appear at the TOP RIGHT of a formal letter?',
    options: ["The sender's address and the date", 'The subject line of the letter', "The recipient's address in full", 'The formal closing of the letter'],
    answer: "The sender's address and the date",
    explanation: 'Convention places the sender\'s address and date at the top right — a format marker that earns layout marks.',
  },
  {
    prompt: 'What distinguishes a report\'s tone from a review\'s tone?',
    options: [
      'A report is objective and impersonal; a review is evaluative and semi-formal',
      'A report uses emotional language; a review is purely factual',
      'They use identical tones',
      'A report is always informal; a review is always very formal',
    ],
    answer: 'A report is objective and impersonal; a review is evaluative and semi-formal',
    explanation: 'Reports present facts neutrally; reviews balance description with personal evaluative judgement.',
  },
  {
    prompt: 'What is the FIRST proofreading check you should make?',
    options: ['Concord: does each verb agree with its subject noun class?', 'The number of words that are in the essay', 'Whether the essay has enough paragraphs in it', 'The introduction of the essay and nothing else'],
    answer: 'Concord: does each verb agree with its subject noun class?',
    explanation: 'Concord errors are among the most common and most penalised in isiXhosa writing — check this first.',
  },
  {
    prompt: 'What are the "5Ws" that must be covered in the introduction of a newspaper article?',
    options: [
      'Who, What, When, Where, Why',
      'Words, Writing, Worth, Witness, Wonder',
      'Will, Wish, Want, Work, Write',
      'Which, Whether, While, Without, Within',
    ],
    answer: 'Who, What, When, Where, Why',
    explanation: 'A strong article introduction answers all five Ws to orient the reader immediately.',
  },
  {
    prompt: 'Why should you avoid using exactly the same words as the source when writing a summary?',
    options: ['CAPS tasks need your own words to show comprehension; copying does not', 'The original words are always too long', 'Copying is only penalised in creative writing', 'The marker cannot read the original text while marking'],
    answer: 'CAPS tasks need your own words to show comprehension; copying does not',
    explanation: 'Paraphrasing proves you understood the text; verbatim copying only proves you can copy.',
  },
  {
    prompt: 'In an exam essay, why is consistent tense important?',
    options: ['Tense shifts confuse the reader and show weak language control', 'Changing the tense without a pattern improves style', 'Only the first paragraph needs a consistent tense', 'Tense does not affect the mark in isiXhosa essays'],
    answer: 'Tense shifts confuse the reader and show weak language control',
    explanation: 'Consistency in tense is a language control criterion in CAPS writing rubrics — unintended shifts lose marks.',
  },
  {
    prompt: 'Which section of a review should NOT reveal the ending of a book or film?',
    options: ['The summary section', 'The evaluation section', 'The recommendation', 'The introduction'],
    answer: 'The summary section',
    explanation: 'The summary orientates the reader without spoiling the experience — revealing the ending defeats the purpose of the recommendation.',
  },
];

const WritingPresentingT4 = () => (
  <CapsSubjectTopic
    title="Writing & Presenting"
    subtitle="Exam essays, transactional text recall, report and review revision, and proofreading"
    learnSteps={learnSteps}
    task="gr11-xho-writing-t4"
    bank={bank}
    apiPath="/api/caps/xho"
  />
);

export default WritingPresentingT4;
