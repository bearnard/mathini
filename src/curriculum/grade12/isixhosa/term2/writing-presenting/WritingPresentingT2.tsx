import CapsSubjectTopic, { type CapsItem } from '@/components/CapsSubjectTopic';
import type { LearnStep } from '@/components/CapsSubjectTopic';
import PronunciationPlayer from '@/components/subjects/PronunciationPlayer';

const learnSteps: LearnStep[] = [
  {
    title: 'Formal letter: format and tone',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">A formal letter uses full-block format, careful organisation, and respectful tone.</p>
        <div className="grid gap-3 text-left md:grid-cols-3">
          <div className="rounded-xl bg-indigo-50 p-4"><strong className="text-indigo-700">Format</strong><p className="text-slate-600">Addresses, date, salutation, body, closing, and signature must be in place.</p></div>
          <div className="rounded-xl bg-emerald-50 p-4"><strong className="text-emerald-700">Tone</strong><p className="text-slate-600">Be polite, direct, and objective.</p></div>
          <div className="rounded-xl bg-amber-50 p-4"><strong className="text-amber-700">Purpose</strong><p className="text-slate-600">State why you are writing in the opening paragraph.</p></div>
        </div>
      </div>
    ),
  },
  {
    title: 'Newspaper article: structure and style',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">A newspaper article should report clearly and quickly using the inverted pyramid structure.</p>
        <div className="grid gap-3 text-left md:grid-cols-4">
          <div className="rounded-xl bg-blue-50 p-4"><strong className="text-blue-700">Headline</strong><p className="text-slate-600">Attracts interest.</p></div>
          <div className="rounded-xl bg-purple-50 p-4"><strong className="text-purple-700">Byline</strong><p className="text-slate-600">Names the writer.</p></div>
          <div className="rounded-xl bg-amber-50 p-4"><strong className="text-amber-700">Lead</strong><p className="text-slate-600">Answers 5W+H.</p></div>
          <div className="rounded-xl bg-emerald-50 p-4"><strong className="text-emerald-700">Details</strong><p className="text-slate-600">Less important information follows later.</p></div>
        </div>
      </div>
    ),
  },
  {
    title: 'Review writing: evaluating a text or performance',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">A review identifies the text, judges it against criteria, and gives a balanced recommendation.</p>
        <div className="grid gap-3 text-left md:grid-cols-2">
          <div className="rounded-xl bg-rose-50 p-4"><strong className="text-rose-700">Criteria</strong><p className="text-slate-600">Comment on content, language, structure, performance, or impact.</p></div>
          <div className="rounded-xl bg-slate-100 p-4"><strong className="text-slate-700">Recommendation</strong><p className="text-slate-600">Conclude by stating who would benefit from the text or performance.</p></div>
        </div>
      </div>
    ),
  },
  {
    title: 'Speech writing: audience and persuasion',
    content: (
      <div className="space-y-4 text-center">
        <p className="text-lg text-slate-600">Good speeches consider audience, purpose, and persuasive technique.</p>
        <div className="grid gap-3 text-left md:grid-cols-2">
          <div className="rounded-xl bg-indigo-50 p-4">
            <strong className="text-indigo-700">Techniques</strong>
            <ul className="ml-4 mt-2 list-disc space-y-1 text-slate-600">
              <li>Rhetorical questions</li>
              <li>Repetition for emphasis</li>
              <li>Direct address using &quot;you&quot;</li>
            </ul>
          </div>
          <div className="rounded-xl bg-amber-50 p-4">
            <strong className="text-amber-700">Ending</strong>
            <p className="text-slate-600">Close with a call to action so the audience knows what should happen next.</p>
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

type RawItem = { id: string; question: string; options: string[]; answer: number; explanation: string };

const rawItems: RawItem[] = [
  { id: 'wp21', question: 'What should appear near the top of a formal letter?', options: ['Sender and recipient addresses', 'A headline and byline', 'A stanza break', 'Speech cue cards'], answer: 0, explanation: 'Formal letters use a clear layout that includes both addresses and the date.' },
  { id: 'wp22', question: 'Which tone is most appropriate for a formal letter of complaint?', options: ['Respectful and firm', 'Sarcastic and emotional', 'Slang-heavy and casual', 'Confused and unfocused'], answer: 0, explanation: 'Formal writing should remain polite while stating the issue clearly.' },
  { id: 'wp23', question: 'What is the purpose of the lead paragraph in a newspaper article?', options: ['To answer the key 5W+H questions quickly', 'To explain the writer’s favourite opinion only', 'To hide the main event until the end', 'To add unrelated background details first'], answer: 0, explanation: 'The lead gives the most important information immediately.' },
  { id: 'wp24', question: 'The inverted pyramid means that:', options: ['The most important information comes first', 'The conclusion must always be one word', 'Paragraphs must get longer each time', 'Opinion replaces fact'], answer: 0, explanation: 'Journalistic style puts the key facts first and less important detail later.' },
  { id: 'wp25', question: 'A balanced review should include:', options: ['Evaluation plus a recommendation', 'Only praise and no criticism', 'Only a plot summary', 'No mention of language or structure'], answer: 0, explanation: 'A review judges the text and tells the reader whether it is worth reading or watching.' },
  { id: 'wp26', question: 'Which feature is especially effective in speech writing?', options: ['A call to action', 'A bibliography in every paragraph', 'Long unexplained quotations only', 'No awareness of audience'], answer: 0, explanation: 'Speeches often end by urging the audience to think or act.' },
  { id: 'wp27', question: 'Which opening best suits a newspaper article?', options: ['A clear factual lead about the event', 'Dear Sir or Madam,', 'Once upon a time there was...', 'Hi friends, let me gossip...'], answer: 0, explanation: 'An article begins with a factual lead, not a letter greeting or storybook opening.' },
  { id: 'wp28', question: 'Which closing best fits a speech?', options: ['Let us act today to improve our school community.', 'Yours faithfully,', 'Signed at East London', 'This concludes the paragraph format.'], answer: 0, explanation: 'A speech closing should summarise and motivate the audience.' },
];

const bank: CapsItem[] = rawItems.map((item) => ({ prompt: item.question, options: item.options, answer: item.options[item.answer], explanation: item.explanation }));

const WritingPresentingT2 = () => (
  <CapsSubjectTopic
    title="Writing & Presenting"
    subtitle="Formal letter, review, article, speech, and transactional precision"
    learnSteps={learnSteps}
    task="gr12-writing-presenting-t2"
    bank={bank}
    apiPath="/api/caps/xho"
    grade={12}
  />
);

export default WritingPresentingT2;
