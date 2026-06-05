import CapsSubjectTopic from '../../../../../components/CapsSubjectTopic';
import type { CapsItem, LearnStep } from '../../../../../components/CapsSubjectTopic';
import PronunciationPlayer from '@/components/subjects/PronunciationPlayer';

const learnSteps: LearnStep[] = [
  {
    title: 'Argumentative essay — thesis, evidence, and counter-argument',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          An <strong>argumentative essay</strong> takes a clear position and defends it with structured evidence and reasoning.
        </p>
        <div className="bg-indigo-50 p-6 rounded-xl inline-block text-left max-w-xl">
          <p className="font-bold text-indigo-800 mb-2">Structure:</p>
          <ol className="list-decimal ml-4 text-slate-600 space-y-1">
            <li><strong>Introduction:</strong> Hook + background + clear thesis statement.</li>
            <li><strong>Body paragraph 1:</strong> Strongest argument + evidence + explanation.</li>
            <li><strong>Body paragraph 2:</strong> Second argument + evidence + explanation.</li>
            <li><strong>Counter-argument:</strong> Acknowledge and refute the opposing view.</li>
            <li><strong>Conclusion:</strong> Restate thesis + summarise + memorable closing.</li>
          </ol>
        </div>
      </div>
    ),
  },
  {
    title: 'Argumentative vs discursive essays',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Grade 11 learners must distinguish between these two essay types and respond correctly to the task instruction.
        </p>
        <div className="grid gap-3 md:grid-cols-2 text-left">
          <div className="rounded-xl bg-rose-50 p-4">
            <strong className="text-rose-700">Argumentative essay</strong>
            <ul className="list-disc ml-4 text-slate-600 space-y-1 mt-1">
              <li>Takes ONE clear side</li>
              <li>Persuades the reader to agree</li>
              <li>Uses first person carefully</li>
              <li>Ends with a definite conclusion</li>
            </ul>
          </div>
          <div className="rounded-xl bg-blue-50 p-4">
            <strong className="text-blue-700">Discursive essay</strong>
            <ul className="list-disc ml-4 text-slate-600 space-y-1 mt-1">
              <li>Explores BOTH sides fairly</li>
              <li>Informs rather than persuades</li>
              <li>More objective, balanced tone</li>
              <li>May or may not give a personal opinion</li>
            </ul>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Formal letter and article — format and register',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          Both texts require attention to <strong>format conventions</strong> and the correct <strong>register</strong> for the audience.
        </p>
        <div className="grid gap-3 md:grid-cols-2 text-left">
          <div className="rounded-xl bg-amber-50 p-4">
            <strong className="text-amber-700">Formal letter checklist:</strong>
            <ul className="list-disc ml-4 text-slate-600 space-y-1 mt-1">
              <li>Address + date (top right)</li>
              <li>Formal greeting and subject line</li>
              <li>Structured body paragraphs</li>
              <li>Formal closing (Ngembeko) + full name</li>
            </ul>
          </div>
          <div className="rounded-xl bg-emerald-50 p-4">
            <strong className="text-emerald-700">Article checklist:</strong>
            <ul className="list-disc ml-4 text-slate-600 space-y-1 mt-1">
              <li>Headline (bold, attention-grabbing)</li>
              <li>Byline (author's name)</li>
              <li>Introduction that answers Who, What, When, Where</li>
              <li>Informative or persuasive body + conclusion</li>
            </ul>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: 'Project presentation — structure and oral delivery',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">
          A <strong>project presentation</strong> combines written research with an organised, confident oral delivery.
        </p>
        <div className="bg-slate-50 p-6 rounded-xl inline-block text-left max-w-xl">
          <p className="font-bold text-slate-800 mb-2">Key elements of a strong presentation:</p>
          <ul className="list-disc ml-4 text-slate-600 space-y-1">
            <li>Clear introduction: topic, purpose, structure overview</li>
            <li>Well-organised main content with subheadings</li>
            <li>Visual aids (if permitted) that support — not replace — speech</li>
            <li>Conclusion: key findings + recommendation or call to action</li>
            <li>Confident delivery: eye contact, appropriate pace, clear voice</li>
          </ul>
        </div>
      </div>
    ),
  },

  {
    title: "Pronunciation practice",
    content: (
      <div className="space-y-4">
        <p className="text-center text-sm text-gray-600 dark:text-gray-300">
          Repeat these argument-writing words before developing reasons, evidence, and a strong final position.
        </p>
        <div className="flex flex-wrap gap-3 justify-center">
          <PronunciationPlayer word={"Isincoko"} phonetic={"[isiŋ'kɔːkɔ]"} meaning={"Essay"} lang="xh" />
          <PronunciationPlayer word={"Uluvo"} phonetic={"[u'luːvɔ]"} meaning={"Opinion"} lang="xh" />
          <PronunciationPlayer word={"Isizathu"} phonetic={"[isi'zatu]"} meaning={"Reason"} lang="xh" />
          <PronunciationPlayer word={"Ubungqina"} phonetic={"[ubungqina]"} meaning={"Evidence"} lang="xh" />
          <PronunciationPlayer word={"Isiphelo"} phonetic={"[isi'pʰɛlɔ]"} meaning={"Conclusion"} lang="xh" />
        </div>
      </div>
    ),
  },
];

const bank: CapsItem[] = [
  {
    prompt: 'What is a "thesis statement" in an argumentative essay?',
    options: [
      'A clear sentence in the introduction that states the writer\'s position on the topic',
      'A summary of all three body paragraphs',
      'The final sentence of the conclusion',
      'A quotation from a famous author',
    ],
    answer: 'A clear sentence in the introduction that states the writer\'s position on the topic',
    explanation: 'The thesis statement is the backbone of an argumentative essay — it tells the reader exactly what position the writer will defend.',
  },
  {
    prompt: 'What is the purpose of a "counter-argument" paragraph in an argumentative essay?',
    options: [
      'To acknowledge and then refute the opposing view, strengthening the writer\'s position',
      'To change the writer\'s mind and support the other side',
      'To summarise the essay without taking a side',
      'To introduce the topic for the first time',
    ],
    answer: 'To acknowledge and then refute the opposing view, strengthening the writer\'s position',
    explanation: 'A well-handled counter-argument shows intellectual honesty and strengthens the overall argument by pre-empting objections.',
  },
  {
    prompt: 'What is the key difference between an argumentative and a discursive essay?',
    options: [
      'An argumentative essay takes one clear side; a discursive essay explores both sides fairly',
      'A discursive essay is always longer than an argumentative essay',
      'An argumentative essay uses no evidence',
      'A discursive essay must have more than five paragraphs',
    ],
    answer: 'An argumentative essay takes one clear side; a discursive essay explores both sides fairly',
    explanation: 'Purpose differs: argumentative essays persuade; discursive essays inform by presenting a balanced exploration of the topic.',
  },
  {
    prompt: 'Which article feature immediately tells the reader the topic of the piece?',
    options: ['The headline', 'The byline', 'The conclusion', 'The page number'],
    answer: 'The headline',
    explanation: 'The headline is the bold, attention-grabbing title that signals the topic and draws readers in.',
  },
  {
    prompt: 'In a formal letter, where is the sender\'s address placed?',
    options: ['Top right of the page', 'Top left of the page', 'Below the greeting', 'At the end after the signature'],
    answer: 'Top right of the page',
    explanation: 'Standard letter conventions in South Africa place the sender\'s address at the top right, above the date.',
  },
  {
    prompt: 'Which element of an argumentative essay body paragraph provides support for the claim?',
    options: ['Evidence (facts, quotations, statistics, or examples)', 'The thesis statement', 'The conclusion sentence', 'The counter-argument'],
    answer: 'Evidence (facts, quotations, statistics, or examples)',
    explanation: 'Evidence gives credibility to a claim — without it, a point is merely an assertion.',
  },
  {
    prompt: 'What does a byline in a newspaper article indicate?',
    options: ['The name of the author who wrote the article', 'The date of publication', 'The headline of the article', 'The section of the newspaper'],
    answer: 'The name of the author who wrote the article',
    explanation: 'A byline credits the journalist or writer — it appears just below the headline.',
  },
  {
    prompt: 'Which presentation skill creates the strongest connection between speaker and audience?',
    options: [
      'Maintaining eye contact and speaking at an appropriate pace',
      'Reading every word directly from notes',
      'Facing the projector screen throughout',
      'Speaking as quickly as possible',
    ],
    answer: 'Maintaining eye contact and speaking at an appropriate pace',
    explanation: 'Eye contact builds rapport and shows confidence; pacing allows the audience to absorb the message.',
  },
];

const WritingPresentingT3 = () => (
  <CapsSubjectTopic
    title="Writing & Presenting"
    subtitle="Argumentative and discursive essay, formal letter, article, and project presentation"
    learnSteps={learnSteps}
    task="gr11-xho-writing-t3"
    bank={bank}
    apiPath="/api/caps/xho"
  />
);

export default WritingPresentingT3;
